import Service from "./Service";
import { useEffect, useState } from "react";

const Services = () => {    

  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("/services.json")
    .then(res => res.json())
    .then(data => setEvents(data))
  },[])

  return (
    <div className="bg-gray-100">
      <div className="font-poppins container mx-auto">
        <h1 className="text-4xl font-semibold text-cyan-700 text-center pt-10">
          The Numbers of Social Events We Offer : {events?.length}
        </h1>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 py-10">
          {events?.map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Services;
