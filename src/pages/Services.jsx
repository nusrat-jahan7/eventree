import Service from "./Service";
import { useEffect, useState } from "react";

const Services = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);

  return (
    <div className="bg-gray-100">
      <div className="font-poppins container mx-auto pt-4 lg:pt-16">
        <h1 className="lg:text-4xl text-2xl font-semibold text-cyan-700 text-center ">
          The Social Events We Offer : {events?.length}
        </h1>
        <p className="mx-auto hidden lg:block text-center leading-7 pt-10 pb-5 w-3/4">
          Our services are designed to transform your events into unforgettable
          experiences. From weddings to birthdays, anniversaries to baby
          showers, we specialize in curating exceptional moments tailored to
          your unique vision. Our team of dedicated professionals ensures every
          detail is meticulously planned, offering a seamless and stress-free
          event planning experience.
        </p>

        <div className="grid p-4 lg:p-0 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 lg:py-10">
          {events?.map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Services;
