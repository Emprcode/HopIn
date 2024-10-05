import React, { useEffect, useState } from "react";
import CarCard from "./CarCard";
import CarCardSkelton from "./CarCardSkelton";
import BookingModal from "../CarBooking/BookingModal";

function CarsList(props: any) {
  const [isLoaded, setIsLoaded] = useState(true);
  const [selectedCar, setSelectedCar] = useState<any>([]);
  useEffect(() => {
    if (props.carsList) {
      setIsLoaded(false);
    }
  }, [props.carsList]);
  return (
    <div className="py-12 sm:py-20">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {/* <CarCardSkelton/> */}
        {!isLoaded &&
          props.carsList.map((car: any, index: number) => (
            <div
              key={index}
              onClick={() => {
                (window as any).my_modal_4.showModal();
                setSelectedCar(car);
              }}
            >
              <CarCard car={car} />
            </div>
          ))}
        {isLoaded ? [1, 2, 3, 4, 5].map((item) => <CarCardSkelton />) : null}
        {/* You can open the modal using ID.showModal() method */}
        <dialog id="my_modal_4" className="modal">
          <BookingModal car={selectedCar} />
        </dialog>
      </div>
      <div className="flex justify-center ">
        <button
          className="p-2 mt-5 bg-blue-500 text-white
        px-4 rounded-full
        hover:scale-105 transition-all "
        >
          Explore More Cars
        </button>
      </div>
    </div>
  );
}

export default CarsList;
