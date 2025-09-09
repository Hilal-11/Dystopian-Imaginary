import { useEffect , useState } from "react";
import DefaultLayout from "@/layouts/default";
import { motion } from 'motion/react'
import { HiOutlineArrowSmRight } from "react-icons/hi";
import logoImg from '../../dystopLogo.png' 
import ForWho from "@/components/ForWho";
import FAQ from "@/components/FAQ";
import PremiumAndSignUp from "@/components/PremiumAndSignUp";
  const descriptionText =
  "Dystopian transforms imagination into stunning visuals. From futuristic cities to surreal landscapes, generate extreme sci-fi images powered by GenAI and enhanced by artists. Whether for storytelling, design, or inspiration, bring impossible worlds to life with limitless creativity.";


export default function IndexPage() {
   useEffect(() => {
    window.scrollTo(0 , 0)
  }, [])


  const [typedText, setTypedText] = useState("");
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(descriptionText.slice(0, i));
      i++;
      if (i > descriptionText.length) clearInterval(interval);
    }, 28); // Adjust speed here
    return () => clearInterval(interval);
  }, []);
  
  return (
    <DefaultLayout>
       <div className="container mx-auto z-30 relative top-10"

       style={{
            backgroundImage: 'radial-gradient(circle at 0.5px 0.5px , rgba(90,110,114,0.7) 1px , transparent 0.5px)',
            backgroundSize: "10px 10px",
            backgroundRepeat : "repeat"
          }}
       >

        <div className="absolute -top-10 left-0 w-full h-[120px] bg-neutral-100 dark:bg-neutral-950 rounded-full blur-2xl"></div>
        <div className="absolute -bottom-10 left-0 w-full h-[120px] bg-neutral-100 dark:bg-neutral-950 rounded-full  blur-2xl"></div>

        <div className="absolute -left-10 w-[70px] lg:w-[120px] h-full bg-neutral-100 dark:bg-neutral-950 rounded-full blur-2xl"></div>
        <div className="absolute right-0 w-[70px] lg:w-[120px] h-full bg-neutral-100 dark:bg-neutral-950 rounded-full blur-2xl"></div>

        
      <br /><br />
        <div className="flex justify-center items-center z-30 ">
          
          <button className="flex gap-4 z-30 relative flex items-center bg-neutral-950 text-white dark:bg-neutral-900 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] rounded-full text-[14px] px-6 lg:px-10 py-[2.5px] Inter-regular"><img className="w-[24px]" src={logoImg} alt="error" /> Automated Lead Generation
          </button>


        </div> <br /> <br />
        <div className="text-center z-50">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          className="lg:text-6xl text-4xl Inter-extrabold heading-lg text-shadow-lg">Dystopian turns imagination into reality, blending AI and artistry to create limitless worlds.</motion.h1> <br />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="lg:w-2/3 mx-auto Inter-medium lg:py-0 text-[18px] lg:text-md z-50">{typedText}
          <span className="animate-pulse">|</span>
          </motion.p>
        </div>
              <br /> <br />
        <div className="flex flex-wrap justify-center items-center gap-8 py-3 lg:py-1 z-30">
          <div className="Inter-medium outer-cont-btn flex-btn bg-[#eff4fa] dark:text-black shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
            <svg
              viewBox="0 0 24 24"
              height="24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="none">
                <path
                  d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"
                ></path>
                <path
                  d="M9.107 5.448c.598-1.75 3.016-1.803 3.725-.159l.06.16l.807 2.36a4 4 0 0 0 2.276 2.411l.217.081l2.36.806c1.75.598 1.803 3.016.16 3.725l-.16.06l-2.36.807a4 4 0 0 0-2.412 2.276l-.081.216l-.806 2.361c-.598 1.75-3.016 1.803-3.724.16l-.062-.16l-.806-2.36a4 4 0 0 0-2.276-2.412l-.216-.081l-2.36-.806c-1.751-.598-1.804-3.016-.16-3.724l.16-.062l2.36-.806A4 4 0 0 0 8.22 8.025l.081-.216zM11 6.094l-.806 2.36a6 6 0 0 1-3.49 3.649l-.25.091l-2.36.806l2.36.806a6 6 0 0 1 3.649 3.49l.091.25l.806 2.36l.806-2.36a6 6 0 0 1 3.49-3.649l.25-.09l2.36-.807l-2.36-.806a6 6 0 0 1-3.649-3.49l-.09-.25zM19 2a1 1 0 0 1 .898.56l.048.117l.35 1.026l1.027.35a1 1 0 0 1 .118 1.845l-.118.048l-1.026.35l-.35 1.027a1 1 0 0 1-1.845.117l-.048-.117l-.35-1.026l-1.027-.35a1 1 0 0 1-.118-1.845l.118-.048l1.026-.35l.35-1.027A1 1 0 0 1 19 2"
                  fill="currentColor"
                ></path>
              </g>
            </svg>
            Explore Dystopian world
          </div>
          <div className="Inter-medium outer-cont-btn flex-btn bg-neutral-950 dark:bg-neutral-800 text-white shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
            <svg
              viewBox="0 0 24 24"
              height="24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="none">
                <path
                  d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"
                ></path>
                <path
                  d="M9.107 5.448c.598-1.75 3.016-1.803 3.725-.159l.06.16l.807 2.36a4 4 0 0 0 2.276 2.411l.217.081l2.36.806c1.75.598 1.803 3.016.16 3.725l-.16.06l-2.36.807a4 4 0 0 0-2.412 2.276l-.081.216l-.806 2.361c-.598 1.75-3.016 1.803-3.724.16l-.062-.16l-.806-2.36a4 4 0 0 0-2.276-2.412l-.216-.081l-2.36-.806c-1.751-.598-1.804-3.016-.16-3.724l.16-.062l2.36-.806A4 4 0 0 0 8.22 8.025l.081-.216zM11 6.094l-.806 2.36a6 6 0 0 1-3.49 3.649l-.25.091l-2.36.806l2.36.806a6 6 0 0 1 3.649 3.49l.091.25l.806 2.36l.806-2.36a6 6 0 0 1 3.49-3.649l.25-.09l2.36-.807l-2.36-.806a6 6 0 0 1-3.649-3.49l-.09-.25zM19 2a1 1 0 0 1 .898.56l.048.117l.35 1.026l1.027.35a1 1 0 0 1 .118 1.845l-.118.048l-1.026.35l-.35 1.027a1 1 0 0 1-1.845.117l-.048-.117l-.35-1.026l-1.027-.35a1 1 0 0 1-.118-1.845l.118-.048l1.026-.35l.35-1.027A1 1 0 0 1 19 2"
                  fill="currentColor"
                ></path>
              </g>
            </svg>
            Genarate Imagination
          </div>
 
        </div>    
      </div>

      <div className="my-14 lg:my-20">
        <video
          src="https://deepmind.google/api/blob/website/media/us_wm_veo_3_extend_a-follow-shot-of-a-wise-old-owl-high-in-the-air-peeking-through_0pYjNAp.mp4"
          autoPlay
          loop
          muted
          style={{ width: "100%", borderRadius: "20px" }}
        />
      </div>
      <br /><br /><br />
      <div>
        <ForWho />
      </div>
      <div>
        <FAQ />
      </div>
      <div>
        <PremiumAndSignUp />
      </div>
    </DefaultLayout>
  );
}
