import React from "react";
import bg3 from "../../assets/images/bg3.jpg";

const Page3 = () => {
  return (
    <div className="w-full min-h-screen bg-white">
        <section className="w-full h-full bg-white px-4 py-8 md:px-12 md:py-16">
           
            <div className="px-4 md:px-6 mb-8 md:mb-12">
                <div className="overflow-hidden">
                    <img src={bg3}
                        alt="Legal consultation" 
                        className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] rounded-sm rounded-t-[5vw] md:rounded-t-[3vw]" />
                </div>
            </div>
        
            
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-start gap-6 md:gap-10 px-4 md:px-0">
                
                <div className="lg:w-1/2 text-center lg:text-left">
                    <h2 className="text-3xl md:text-4xl text-[#2d2c2a] font-playfair leading-tight md:leading-snug">
                        Our Main <span className="italic">Services</span>
                    </h2>
                </div>
            
             
                <div className="lg:w-1/2 text-gray-700">
                    <p className="mb-4 text-sm md:text-base">
                        Share your services or specializations here, then list them down as bullet points for mobile-friendly easy reading.
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm md:text-base">
                        <li>Add as many bullets as you need</li>
                        <li>Add as many bullets as you need</li>
                        <li>Add as many bullets as you need</li>
                        <li>Add as many bullets as you need</li>
                        <li>Add as many bullets as you need</li>
                    </ul>
                </div>
            </div>
        </section>
    </div>
  );
};

export default Page3;
