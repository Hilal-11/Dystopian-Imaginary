import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { useEffect } from "react";
import Headers from "@/components/Headers";
import { data } from ".././config/GenerativeImages"
export default function ExplorePage() {

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
        <Headers />
        <div>
          <div className="px-5 absolute left-0 top-30 columns-2 md:columns-4 gap-1">
            {imagesWithDetails.map((item, index) => (
              <div key={index} className="mb-1 break-inside-avoid">
                <img
                  className="w-full rounded-xl"
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
