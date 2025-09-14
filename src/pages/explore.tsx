import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { useEffect } from "react";
import Headers from "@/components/Headers";
import { data } from ".././config/GenerativeImages"
import { headerConfigData } from '../config/headerConfig'   
import { NavLink } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
export default function ExplorePage() {
  const navigate = useNavigate();
  const imagesWithDetails = data.flatMap(response =>
  response.data.feed_creations.map(creation => ({
    imageUrl: creation.medias.img_large.url,
    prompt: creation.prompt.prompt_text,
    userId: creation.user_id,
    createdOn: creation.created_on,
    description: creation.creation_description,
    shareUrl: creation.share.share_url
  }))
);

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, [])
  return (
    <DefaultLayout>
      <section className="">
    <div className="relative flex justify-center items-center lg:my-20  px-2">
      <input className="text-[18px] w-full outline-none dark:bg-neutral-900 bg-neutral-100 rounded-md px-4 py-5 text-sm shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]" type="text" placeholder="Search imagination" />
      <span className="text-3xl absolute right-6 text-neutral-500"><IoSearchSharp /></span>
    </div>

    <div className='relative lg:-top-16 flex justify-center flex-wrap py-2 lg:py-0 gap-1'>
        {
            headerConfigData.map((headerData) => (
                <div key={headerData.id} className='px-4 py-1 rounded-md bg-white dark:bg-neutral-900 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] cursor-pointer hover:scale-105 ease-in duration-200'>
                    <h1 className='text-xs md:text-sm Inter-medium'>{headerData.name}</h1>
                </div>
            ))  
        }
    </div>  
        <div className="">
          <div className="px-5 absolute left-0 top-[17rem] lg:top-[22rem] columns-2 md:columns-4 gap-2">
            {imagesWithDetails.map((item, index) => (
              <div key={index} className="mb-1 break-inside-avoid">
                <img
                  onClick={() => navigate(`/explore/image/${item.userId}`)}
                  className="w-full rounded-xl cursor-pointer hover:scale-102 ease-in duration-200"
                  src={item.imageUrl}
                  alt={item.prompt}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
