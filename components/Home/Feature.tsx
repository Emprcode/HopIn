import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaAward } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { GiCancel } from "react-icons/gi";

const Feature = () => {
  const features = [
    {
      name: "24/7 support",
      description:
        "Experience peace of mind with our 24/7 support. We're here anytime to assist you with your rental needs, day or night.",
      icon: FaPhoneAlt,
    },
    {
      name: "Best Market Price",
      description:
        "Enjoy the best market prices with transparent rates, no hidden fees, and exceptional value on our wide range of vehicles.",
      icon: FaAward,
    },
    {
      name: "Verified License",
      description:
        "All our vehicles come with verified licenses, ensuring compliance with regulations and safety standards. Drive with confidence knowing you’re protected.",
      icon: MdVerified,
    },
    {
      name: "Free cancelation",
      description:
        "Enjoy the flexibility of free cancellation on your bookings. Change your plans worry-free, ensuring peace of mind with every reservation.",
      icon: GiCancel,
    },
  ];
  return (
    <div className="bg-white py-12 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            why choose us!
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to know about us
          </p>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            We stand as your trusted partner. Our dedication to Quality,
            Innovation and Customer satisfaction set us apart.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon
                      aria-hidden="true"
                      className="h-6 w-6 text-white"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Feature;
