import React from 'react';
import Spotlight from "@/app/extra/spotlight";
import Button from "@/app/extra/moving";
import BackgroundGradient from "@/app/extra/gradient"

const Page = () => {
  return (
    <section className=" relative  flex flex-col justify-center items-center ">
      
      <Spotlight />
      <Button/> {/* Add classes to position the button in the hero section */}
      <BackgroundGradient/>
    </section>
    
  );
};

export default Page;
