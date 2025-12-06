import Link from 'next/link';
import Image from 'next/image';

// Footer - Site footer with links, contact info, and social media
const Footer = () => {
  return (
    <footer className="bg-white px-6 lg:px-30 py-14 h-full">
      <div className="grid grid-cols-2 gap-40 justify-between items-start h-full">
        {/* Left Section */}
        <div className="flex flex-col justify-between h-full" style={{ gap: '192px' }}>
          {/* Top - Description and Learn More */}
          <div className="flex flex-col">
            <div className="flex flex-col gap-4">
              <p className="font-sans text-base text-[#484848] leading-[1.4] w-[420px]">
                Bridging the gap between academic learning and practical financial expertise through our gamified internship ecosystem.
              </p>
              <div className="flex gap-3 items-center">
                <p className="text-xs text-white font-semibold">More about us</p>
                <div className="w-2.5 h-2.5 bg-white rounded-[10px]"></div>
              </div>
            </div>
          </div>
          
          {/* Bottom - Social Media and Copyright */}
          <div className="flex justify-between items-end w-full">
            {/* Social Media Icons */}
            <div className="flex gap-2.5">
              <div className="flex flex-col gap-2.5">
                <a href="#" className="w-6 h-6 flex items-center justify-center">
                  <Image src="/icons/okru.svg" alt="OK.ru" width={18} height={18} />
                </a>
                <a href="#" className="w-6 h-6 flex items-center justify-center">
                  <Image src="/icons/vk.svg" alt="VK" width={18} height={18} />
                </a>
                <a href="#" className="w-6 h-6 flex items-center justify-center">
                  <Image src="/icons/telegram.svg" alt="Telegram" width={18} height={18} />
                </a>
              </div>
              <div className="flex flex-col justify-end gap-2.5">
                <a href="#" className="w-6 h-6 flex items-center justify-center">
                  <Image src="/icons/facebook.svg" alt="Facebook" width={18} height={18} />
                </a>
                <a href="#" className="w-6 h-6 flex items-center justify-center">
                  <Image src="/icons/instagram.svg" alt="Instagram" width={18} height={18} />
                </a>
              </div>
            </div>
            
            {/* Copyright */}
            <div className="font-sans text-xs text-[#484848] leading-[1.4]">
              <p>© 2021 — Copyright</p>
              <p>All Rights reserved</p>
            </div>
          </div>
        </div>
        
        {/* Right Section */}
        <div className="flex flex-col justify-between h-full">
          {/* Top - Navigation Links */}
          <nav className="flex flex-row gap-10 text-base text-[#484848] font-sans">
            <a href="#about" className="hover:text-black transition-colors">About.</a>
            <a href="#testimonials" className="hover:text-black transition-colors">Testimonials.</a>
            <a href="#contacts" className="hover:text-black transition-colors">Contacts.</a>
          </nav>
          
          {/* Bottom - Contact and Location */}
          <div className="flex flex-col gap-16">
            {/* Contact Us */}
            <div className="flex flex-col gap-4">
              <div className="flex flex-col font-sans text-sm text-[#484848] leading-[1.6]">
                <p>+91 22 3982 5500</p>
                <p>ambassador@usl.com</p>
              </div>
            </div>
            
            {/* Location */}
            <div className="flex flex-col gap-4">
              <p className="font-sans text-sm text-[#484848] leading-[1.6] w-[300px]">
                USL, Prabhadevi, Mumbai - 400025
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
