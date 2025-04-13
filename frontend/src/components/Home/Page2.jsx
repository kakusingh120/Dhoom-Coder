import React from "react";
import bg1 from "../../assets/images/bg1.jpg";

const Page2 = () => {
  return (
    <div className=" w-full min-h-screen bg-[#2d2c2a]">
    <section className="w-full h-full text-white px-4 py-12 md:px-12">
        <div className="w-full h-full mx-auto flex flex-col lg:flex-row">
        
        
            <div className="lg:w-[40%] mb-6 lg:mb-0 flex items-start justify-center lg:items-center lg:justify-center">
                <h2 className="text-4xl md:text-5xl lg:text-7xl text-[#e3dfd6] font-playfair leading-tight md:leading-snug text-center lg:text-left">
                What we<br />
                <span className="italic">focus</span> on
                </h2>
            </div>
        

            <div className="lg:w-[50%] py-4 lg:py-10 flex flex-wrap justify-center gap-4 lg:gap-6">
                
        
                <div className="bg-[#17375e] text-white p-4 lg:p-6 w-full sm:w-[340px] h-auto min-h-[200px] lg:h-[250px] flex flex-col">
                    <h3 className="text-lg lg:text-xl font-playfair mb-2">Child Custody</h3>
                    <p className="text-xs lg:text-sm leading-relaxed">
                        What's special about your services or offerings? Give your audience a reason to choose you over your competition. Cite it above, then flesh it out here.
                    </p>
                </div>
        
                
                <div className="bg-[#e7e3db] text-black p-4 lg:p-6 w-full sm:w-[340px] h-auto min-h-[200px] lg:h-[250px] flex flex-col">
                    <h3 className="text-lg lg:text-xl font-playfair mb-2">Divorce</h3>
                    <p className="text-xs lg:text-sm leading-relaxed">
                        What's special about your services or offerings? Give your audience a reason to choose you over your competition. Cite it above, then flesh it out here.
                    </p>
                </div>
        
               
                <div className="bg-white text-black p-4 lg:p-6 w-full sm:w-[340px] h-auto min-h-[200px] lg:h-[250px] flex flex-col">
                    <h3 className="text-lg lg:text-xl font-playfair mb-2">Complex Litigation</h3>
                    <p className="text-xs lg:text-sm leading-relaxed">
                        What's special about your services or offerings? Give your audience a reason to choose you over your competition. Cite it above, then flesh it out here.
                    </p>
                </div>
        
                <div className="w-full sm:w-[340px] h-[200px] lg:h-[250px]">
                    <img src={bg1} 
                        alt="Gavel and Scales" 
                        className="w-full h-full object-cover rounded" 
                    />
                </div>
        
            </div>
        </div>
    </section>
</div>
  );
};

export default Page2;
