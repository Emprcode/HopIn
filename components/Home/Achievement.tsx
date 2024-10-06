import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaAward } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { GiCancel } from "react-icons/gi";
import Feature from "./Feature";

const Achievement = () => {
  const stats = [
    { id: 1, name: "Active Members", value: "200+" },
    { id: 2, name: "Car Model", value: "100 +" },
    { id: 3, name: "Positive Rating", value: "1K +" },
  ];
  return (
    <div className="">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            why choose us!
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Our Achievement
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 ">
            Our Journey of success is a testament to the collective efforts and
            determination of our team.
          </p>
        </div>
        <div className="py-14 ">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
            <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3 ">
              {stats.map((stat) => (
                <div
                  key={stat.id}
                  className="mx-auto flex max-w-xs flex-col gap-y-4"
                >
                  <dt className="text-base leading-7 text-gray-600 ">
                    {stat.name}
                  </dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-indigo-600 sm:text-5xl">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievement;
