"use client";

import CarsLists from "@/components/Home/CarLists";
import CarsFilterOptions from "@/components/Home/CarsFilterOptions";
import Feature from "@/components/Home/Feature";
import Achievement from "@/components/Home/Achievement";

import Hero from "@/components/Home/Hero";
import SearchInput from "@/components/Home/SearchInput";
import { getCarsList } from "@/services";
import { useEffect, useState } from "react";
import Testomonial from "@/components/Home/Testomonial";
import ContactUs from "@/components/Home/ContactUs";
// import "./globals.css";

export default function Home() {
  const [carsList, setCarsList] = useState<any>([]);
  const [carsOrgList, setCarsOrgList] = useState<any>([]);
  const [showToastMsg, setShowToastMsg] = useState<boolean>(false);

  useEffect(() => {
    getCar();
  }, []);

  const getCar = async () => {
    const result: any = await getCarsList();
    setCarsList(result.carLists);
    setCarsOrgList(result.carLists);
  };

  const filterCarList = (brand: string) => {
    const filterList = carsOrgList.filter(
      (item: any) => item.carBrand == brand
    );
    setCarsList(filterList);
  };

  const orderCarList = (order: any) => {
    const sortedData = [...carsOrgList].sort((a, b) =>
      order == -1 ? a.price - b.price : b.price - a.price
    );
    setCarsList(sortedData);
  };

  return (
    <div className="p-5 sm:px-10 md:px-20">
      <Hero />
      <SearchInput />
      <CarsFilterOptions
        carsList={carsOrgList}
        setBrand={(value: string) => filterCarList(value)}
        orderCarList={(value: string) => orderCarList(value)}
      />
      <CarsLists carsList={carsList} />
      <Feature />
      <Achievement />
      <Testomonial />
      <ContactUs />
    </div>
  );
}
