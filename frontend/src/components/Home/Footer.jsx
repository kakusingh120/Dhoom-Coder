import React from 'react'

const Footer = () => {
  return (
    <div>
       <footer className="min-h-[70vh] md:h-[70vh] w-full bg-[#2d2c2a] text-[#e3dfd6] flex flex-col justify-between px-6 py-8 md:px-16 md:py-10">
        <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-12">
           
            <div className="text-left mb-6 md:mb-0">
                <h2 className="text-white font-semibold text-sm">SOO AND TRAN<br />JUSTICE</h2>
            </div>
    
          
            <div className="mb-6 md:mb-0">
                <h3 className="text-xl md:text-2xl font-serif mb-3 md:mb-4">Contact Details</h3>
                <p className="text-sm md:text-base">123 Anywhere St.<br />Any City, ST 12345</p>
                <p className="mt-2 md:mt-3 text-sm md:text-base">(123) 456-7890<br />hello@reallygreatsite.com</p>
            </div>
    
          
            <div>
                <h3 className="text-xl md:text-2xl font-serif mb-3 md:mb-4">Office Hours</h3>
                <p className="text-sm md:text-base">Monday to Friday<br />9:00 am to 6:00 pm</p>
                <p className="mt-2 md:mt-3 text-sm md:text-base">Saturday<br />9:00 am to 12 noon</p>
                <p className="mt-2 md:mt-3 text-sm md:text-base">Closed on Sundays</p>
            </div>
        </div>
    
       
        <div className="mt-8 md:mt-10">
            <h3 className="text-xl md:text-2xl font-serif mb-3 md:mb-4">Follow Us</h3>
            <div className="flex items-center justify-start gap-4 md:gap-5">
                <a href="#" aria-label="Facebook">
                    <i className="ri-facebook-circle-fill text-2xl hover:text-white"></i>
                </a>
                <a href="#" aria-label="Twitter">
                    <i className="ri-twitter-fill text-2xl hover:text-white"></i>
                </a>
                <a href="#" aria-label="Linkedin">
                    <i className="ri-linkedin-fill text-2xl hover:text-white"></i>
                </a>
                <a href="#" aria-label="Instagram">
                    <i className="ri-instagram-line text-2xl hover:text-white"></i>
                </a>
            </div>
        </div>
    
       
        <div className="mt-8 md:mt-10 text-gray-400 text-xs md:text-sm">
            We are an accessible workplace. Persons with disabilities are welcome to apply.
        </div>
    </footer>
    </div>
  )
}

export default Footer;
