import React from "react";


const Page1 = () => {
  return (
    <div className="w-full min-h-screen bg-zinc-200 flex items-center justify-center px-6 md:px-20 py-12">
    <section className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 w-full h-full max-w-7xl">
  
    <div className="lg:w-1/2 text-center lg:text-left">
        <h2 className="text-3xl md:text-4xl font-playfair font-medium mb-6">
        We know divorce is <span className="italic font-semibold">tough.</span>
        </h2>
        <p className="text-gray-700 leading-relaxed mb-8 text-base md:text-lg">
        We work closely with our clients throughout every stage of what is usually a long and tough ordeal so that they can accomplish their goals and desires. With our combined experience of handling complex trials and litigations for over 30 years, you can trust us to be forthright and diligent in meeting your needs.
        </p>
        <a href="#" className="inline-block bg-[#1e3a5f] text-white px-8 py-3 text-sm font-semibold tracking-wide uppercase">
        Get in touch
        </a>
    </div>

    
    <div className="lg:w-1/2 h-full py-5 px-6 overflow-hidden flex justify-center">
        <img className="h-[95%] w-[70%] max-w-full rounded" src="https://images.unsplash.com/photo-1590099543482-3b3d3083a474?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGF3JTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D" alt="Lady Justice"  />
    </div>
    </section>
    </div>
  );
};

export default Page1;
