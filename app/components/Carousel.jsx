"use client"
import React from 'react';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from 'embla-carousel-autoplay';

const carouselItems = [
  {
    id: 1,
    name: 'Daniel',
    recommendation: 'Besökte Frisör Ateljé för hår- och skäggklippning och blev otroligt imponerad. Atmosfären var professionell och inbjudande, och Sam levererade en perfekt klippning som överträffade mina förväntningar. Rekommenderas!',
    place:'5/5'
  },
  {
    id: 2,
    name: 'Jesper',
    recommendation: 'Första gången jag tar tid och skriva en recension. Men kände när jag kom hem att personalen som klippte mig förtänade ett extra tack. Bra klippt, fick skägget trimmat, fick en olja till skägget som present för att jag fyller år imorrn. Tack så hemskt mycket igen! Kommer tillbaks',
    place:"5/5"
  },
  {
    id: 3,
    name: 'Robin',
    recommendation: 'Ringde för att boka en tid och fick en samma dag, klev in i salongen och möttes av en ljus och fräsch lokal. Sam var väldigt trevlig, snabb och noggrann. Kan starkt rekommendera och kommer absolut boka fler tider hos honom!! ⭐️⭐️⭐️⭐️⭐️',
    place:"5/5"
  },
  {
    id: 4,
    name: 'Linda',
    recommendation: 'Super nöjd. Sam va proffsig och jag blev väldigt fin i håret.',
    place:"5/5"
  },
];

const TextCarousel = () => {
  return (
    <Carousel
      className="w-full bg-inherit flex items-center mt-8 h-auto"
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
    >
      <CarouselContent className=" font-poppins text-white ">
        {carouselItems.map(item => (
          <CarouselItem key={item.id} className="flex flex-col justify-center ">
            <h2 className="text-3xl font-bold mb-4">{item.name}</h2>
            <p className="text-xl text-left">"{item.recommendation}"</p>
            <p className="text-3xl font-bold text-left mt-7">{item.place}</p>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default TextCarousel;