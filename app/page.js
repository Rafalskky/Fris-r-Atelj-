import Image from "next/image";


import Services from "./components/Service";
import TextCarousel from "./components/Carousel";
import Map from "./components/Map";

const location = { lat: 59.454780, lng: 17.805230 };


export default function Home() {
  return (
    <main>
      <div id="hem" className="bg-primary pt-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto h-[400px] px-4 sm:px-6 lg:px-8">
          <div className="flex md:flex-row items-start justify-between h-full">
            <div className=" absolute z-10 top-[100px]" >
              <h1 className="text-6xl font-adamina font-bold text-secondary  mb-4">Frisör Ateljé</h1>
              <p className="text-3xl font-poppins text-white">Där vi lyfter hårvård till nya höjder!</p>
            </div>
            <div className="absolute">
              <Image
                className="scale-150 blur-3xl  md:scale-125 lg:scale-150 xl:scale-200"
                src={"/light.svg"}
                width={1200}
                height={140}
                alt="Light"
              />

              <div className="absolute z-0 hidden md:block top-1 left-[45%] w-full overflow-hidden">
                <Image
                  priority={true}
                  src={"/headline.webp"}
                  width={560}
                  height={360}
                  alt="Hero"
                />
              </div>
            </div>
          </div>
        </div>



        <div className="flex items-center font-poppins bg-secondary w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex space-x-16 p-3">
            <div className="flex flex-col items-center text-black">
              <Image
                className="mb-2 w-8 sm:w-10"
                src="/diamond.svg"
                width={40} 
                height={40} 
                alt="Diamond"
              />
              <span className="text-sm sm:text-base">Bästa produkter</span> 
            </div>
            <div className="flex flex-col items-center space-x-2">
              <Image
                className="mb-2 w-8 sm:w-10"
                src="/certificate.svg"
                width={40}
                height={40}
                alt="Certificate"
              />
              <span className="text-sm sm:text-base">Certifierad frisör</span>
            </div>
            <div className="flex flex-col items-center space-x-2">
              <Image
                className="mb-2 w-8 sm:w-10"
                src="/guarantee-certificate.svg"
                width={40}
                height={40}
                alt="Stisfaction guarantiee"
              />
              <span className="text-sm sm:text-base">Nöjdgaranti</span>
            </div>
          </div>
        </div>
      </div>
    



    <div className="bg-container mx-auto">
      <div className="max-w-[1500px] mx-auto min-h-screen flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-2/5 px-4 flex justify-start">
          <div className="w-full mt-8 md:mt-0 scale-90">
            <Image src={"/salon1.webp"} width={587} height={832} alt="Salon" />
          </div>
        </div>
        <div className="md:w-3/5 mt-16 md:px-10 sm:px-0">
          <div className="font-poppins px-4">
            <h1 className="text-5xl font-bold text-white leading-tight mb-4">
              Vi står redo att erbjuda dig en service I världsklass
            </h1>
            <p className="text-white leading-relaxed text-xl mb-10">
              Vi erbjuder en unik upplevelse där våra skickliga frisörer kombinerar
              sin expertis med din personliga stil och önskemål. Vi strävar efter
              att inte bara möta utan överträffa dina förväntningar, vilket gör
              Salong ATELJE till den ultimata destinationen for den moderna och
              trendmedvetna individen. Koppla av och lata värt kunniga team ta hand
              om dig.
            </p>
            
          </div>
          <div className="mt-14 scale-95">
            <Image src={"/salon2.webp"} width={890} height={411} alt="Salon" />
          </div>
        </div>
      </div>
    </div>

    
    <div id="var-service" className="bg-secondary py-10 flex flex-col items-center">
      <div className="w-full lg:w-3/5 md:w-4/5 sm:w-full mb-8 text-center font-poppins">
        <h1 className="text-5xl font-extrabold  leading-tight ">Vår service</h1>
        <p className="leading-relaxed text-xl text-service-container">
          Upptäck våra mångsidiga tjänster och låt oss skapa din perfekta look. Boka
          din tid för en exceptionell hårvårdsupplevelse redan idag!
        </p>
      </div>
      <Services />
      <div className="mt-5">
        <a href="tel:08 500 477 00" className="inline-block py-2 font-poppins bg-inherit border border-primary w-[200px] text-center rounded-full">
          BOKA TID REDAN IDAG
        </a>
      </div>
    </div>

    <div id="sagt-om-oss" className=" bg-container2 px-[5%] lg:px-[25%] md:px-[5%] sm:px-[5%] py-12"> 
      <h1 className=" flex justify-center font-adamina text-5xl font-bold text-white my-2"> 
        Sagt om oss
      </h1>
      <TextCarousel />
    </div>

    <div id="kontakta-oss" className="bg-secondary min-h-screen py-10 px-[5%] 2xl:px-[20%] lg:px-[15%] md:px-[5%] sm:px-[5%]">
      <h1 className="font-poppins text-5xl text-primary text-center mb-8">Kontakta oss</h1>
      <Map location={location} />

      {/* Bento-Style Contact Information Section */}
      <div className="mt-8 grid md:grid-cols-3 gap-4 font-poppins text-secondary">
        {/* Öppettider */}
        <div className="bg-primary p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl mb-4">Öppettider</h2>
          <p className="text-xl  ">Måndag - Lördag: <br></br>10:00 - 20:00</p>

          <p className=" text-xl mt-2 ">Söndag: <br></br>12:00 - 18:00</p>
        </div>

        {/* Telefon och Email */}
        <div className="bg-primary p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl  mb-4">Telefon och Email</h2>
          <p className="text-xl ">
            <a href="tel:0850047700" className=" leading-relaxed hover:text-tertiary ">0850047700</a>
          </p>
          <p className=" text-xl leading-relaxed">
            <a href="mailto:info@atelje-frisor.se" className="hover:text-tertiary ">info@atelje-frisor.se</a>
          </p>
        </div>

        {/* Adress */}
        <div className="bg-primary p-6 rounded-lg  shadow-lg">
          <h2 className=" text-2xl  mb-4">Adress</h2>
          <p className="text-xl leading-relaxed">Frisör Ateljé, GJUTARPLAN 36, 176 71 Järfälla, 176 71 Stockholm</p>
        </div>
      </div>
    </div>
  </main>
  );
}
