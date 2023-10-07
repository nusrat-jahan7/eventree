import { useLoaderData } from "react-router-dom";
import Service from "./Service";

const Services = () => {
  const events = useLoaderData();
  console.log(events);

  return (
    <div className="bg-gray-100">
      <div className="font-poppins container mx-auto">
        <h1 className="text-4xl font-semibold text-cyan-700 text-center pt-10">
          The Numbers of Social Events We Offer : {events.length}
        </h1>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 py-10">
          {events.map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Services;
