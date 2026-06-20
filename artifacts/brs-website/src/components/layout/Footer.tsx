import { FaInstagram, FaFacebook, FaWhatsapp, FaPhone } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3 mb-6">
              <img src="/logo.png" alt="Body Reshaping Studio" className="h-12 w-12 rounded-full object-cover" />
              <span className="font-display font-bold text-2xl tracking-wider text-white">BRS</span>
            </div>
            <p className="text-gray-400 text-center md:text-left text-sm max-w-sm">
              Rawalpindi's most trusted destination for people who are ready to seriously change their bodies through expert coaching, disciplined training, and proven programs.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-display text-xl font-bold text-white uppercase tracking-wider mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-3 text-center md:text-left">
              <li><a href="#home" className="text-gray-400 hover:text-primary transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-primary transition-colors">About</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-primary transition-colors">Services</a></li>
              <li><a href="#transformations" className="text-gray-400 hover:text-primary transition-colors">Transformations</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-display text-xl font-bold text-white uppercase tracking-wider mb-6">Connect</h4>
            <div className="flex gap-4 mb-6">
              <a href="https://www.instagram.com/bodyreshapingstudio/" target="_blank" rel="noopener noreferrer" className="h-10 w-10 bg-secondary flex items-center justify-center rounded-full text-white hover:bg-primary transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="https://www.facebook.com/bodyreshapingstudio" target="_blank" rel="noopener noreferrer" className="h-10 w-10 bg-secondary flex items-center justify-center rounded-full text-white hover:bg-primary transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="https://wa.me/923058562226" target="_blank" rel="noopener noreferrer" className="h-10 w-10 bg-secondary flex items-center justify-center rounded-full text-white hover:bg-[#25D366] transition-colors">
                <FaWhatsapp size={20} />
              </a>
            </div>
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm mb-2">Range Rd, Afshan Colony</p>
              <p className="text-gray-400 text-sm mb-2">Rawalpindi, Pakistan</p>
              <p className="text-gray-400 text-sm">0305 8562226</p>
            </div>
          </div>

        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © 2025 Body Reshaping Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
