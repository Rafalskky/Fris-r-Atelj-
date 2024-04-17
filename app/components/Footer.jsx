import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="bg-container3 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex flex-col justify-center items-center md:items-start">
            <img src="/logo.webp" alt="logo" className="w-[160px] h-auto mb-4" />
          </div>

          <div className="flex flex-col justify-center items-center">
            <h1 className="text-3xl font-adamina font-bold text-secondary ">Frisör Ateljé</h1>
          </div>

          <div className="flex flex-col justify-center items-center md:items-end">
            <h2 className="text-xl font-poppins text-white  mb-12">Följ oss</h2>
            <div className="flex items-center space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61554927773778" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Facebook" className="text-white hover:text-gray-200 transition-colors duration-300">
                <Image src="social/facebook.svg" width={30} height={30} alt="Facebook" aria-label="Follow us on Facebook" />
              </a>

              <a href="https://www.instagram.com/frisor_atelje_36?igsh=N3R3NGkybXV4NXY5&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram" className="text-white hover:text-gray-200 transition-colors duration-300">
                <Image src="social/instagram.svg" width={30} height={30} alt="Instagram" aria-label="Follow us on Instagram" />
              </a>

              <a href="https://www.tiktok.com/@frisoratelje?_t=8lFSSAQg4Kf&_r=1" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Tik Tok" className="text-white hover:text-gray-200 transition-colors duration-300">
                <Image src="social/tik-tok.svg" width={30} height={30} alt="Tik Tok" aria-label="Follow us on Tik Tok" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-secondary pt-8">
          <p className="text-center text-tertiary font-poppins">
            <span>&copy; 2024 </span>
            <span className="mx-1">Frisör Ateljé</span>
            <span>All rights reserved.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;