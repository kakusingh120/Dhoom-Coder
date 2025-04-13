import React from "react";


const Page4 = () => {
  return (
    <div className="w-full bg-[#f4eede]  min-h-screen">
        <div className="w-full h-full px-4 py-12 md:py-20 text-center">
           
            <h2 className="text-3xl md:text-4xl font-semibold mb-3">Testimonials from Clients</h2>
            <p className="text-lg md:text-xl text-gray-600 mb-8 md:mb-12">An honest look into how we work</p>
        
            
            <div className="px-0 sm:px-4 md:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-center">
            
           
            <div className="bg-white h-auto min-h-[300px] w-full max-w-[400px] mx-auto p-6 md:p-8 shadow-md rounded-md">
                <div className="text-3xl text-[#1f3b5b] mb-4"><i className="ri-double-quotes-r"></i></div>
                <p className="text-sm md:text-base text-gray-700 mb-6 leading-relaxed">
                Boost your product and service's credibility by adding testimonials from your clients. 
                People love recommendations so feedback from others who've tried it is invaluable.
                </p>
                <hr className="my-4" />

                <p className="text-lg font-medium text-gray-900">- Ingrid Correa</p>
            </div>
        
           
            <div className="bg-white h-auto min-h-[300px] w-full max-w-[400px] mx-auto p-6 md:p-8 shadow-md rounded-md">
                <div className="text-3xl text-[#1f3b5b] mb-4"><i className="ri-double-quotes-r"></i></div>
                <p className="text-sm md:text-base text-gray-700 mb-6 leading-relaxed">
                Boost your product and service's credibility by adding testimonials from your clients. 
                People love recommendations so feedback from others who've tried it is invaluable.
                </p>
                <hr className="my-4" />
                <p className="text-lg font-medium text-gray-900">- Wendy Salinas</p>
            </div>
        
           
            <div className="bg-white h-auto min-h-[300px] w-full max-w-[400px] mx-auto p-6 md:p-8 shadow-md rounded-md">
                <div className="text-3xl text-[#1f3b5b] mb-4"><i className="ri-double-quotes-r"></i></div>
                <p className="text-sm md:text-base text-gray-700 mb-6 leading-relaxed">
                Boost your product and service's credibility by adding testimonials from your clients. 
                People love recommendations so feedback from others who've tried it is invaluable.
                </p>
                <hr className="my-4" />
                <p className="text-lg font-medium text-gray-900">- Gabriel Shelby</p>
            </div>
            </div>
        </div>
    </div>
  );
};

export default Page4;
