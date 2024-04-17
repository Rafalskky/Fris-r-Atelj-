
'use client';
import React, { useState } from 'react';
import SearchComponent from './SearchComponent';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const Services = () => {

const data = [
    {
        image: "/services/service1.webp",
        treatment: "Herr klippning",
        price: "300 kr",
    },
    {
        image: "/services/service2.webp",
        treatment: "Herr pensionär",
        price: "240 kr",
    },
    {
        image: "/services/service3.webp",
        treatment: "Barn (under 10 år)",
        price: "240 kr",
    },
    {
        image: "/services/service4.webp",
        treatment: "Dam klippning",
        price: "450 kr",
    },
    {
        image: "/services/service5.webp",
        treatment: "Dam pensionär",
        price: "400 kr",
    },
    {
        image: "/services/service6.webp",
        treatment: "Herr klippning + skägg",
        price: "400 kr",
    },
    {
        image: "/services/service7.webp",
        treatment: "Skin fade",
        price: "300 kr",
    },
    {
        image: "/services/service8.webp",
        treatment: "Skägg",
        price: "250 kr",
    },
    {
        image: "/services/service9.webp",
        treatment: "Färg inkl. klippning",
        price: "1800 kr",
    },
    {
        image: "/services/service10.webp",
        treatment: "Slingor inkl. klippning",
        price: "2000 kr",
    },
    {
        image: "/services/service11.webp",
        treatment: "Permanent inkl. klippning",
        price: "2000 kr",
    },
    {
        image: "/services/service12.webp",
        treatment: "Tvätt & fön",
        price: "350 kr",
    },
    {
        image: "/services/service13.webp",
        treatment: "Vax- hela kroppen",
        price: "800 kr",
    },
    {
        image: "/services/service14.webp",
        treatment: "Ögonbryn & fransar",
        price: "400 kr",
    },
    {
        image: "/services/service15.webp",
        treatment: "Trådning ansikte",
        price: "350 kr",
    },
    {
        image: "/services/service16.webp",
        treatment: "Bryn",
        price: "180 kr",
    },
    ]
    
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = (filtered) => {
    setFilteredData(filtered);
  };

  return (
    <>
      <div className="w-3/5 mb-8 text-center font-poppins">
        <SearchComponent data={data} onSearch={handleSearch} />
      </div>
      <Carousel className="w-3/4 bg-orange-100 max-w-[1500px] rounded-md">
        <CarouselContent>
          {filteredData.map((item, index) => (
            <CarouselItem
              key={index}
              className=" m-7 sm:m-0 md:m-7 lg:m-7 md:basis-1/3 lg:basis-1/5 2xl:basis-1/6 "
            >
              <div className="flex flex-col items-start">
                <Image
                  className="rounded-lg"
                  src={item.image}
                  alt={item.treatment}
                  width={210}
                  height={280}
                  style={{ width: "210", height: "auto" }}
                />
                <h2 className="mt-4 font-poppins text-xl font-bold">
                  {item.treatment}
                </h2>
                <span className="font-poppins text-lg">{item.price}</span>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
};

export default Services;