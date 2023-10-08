import { useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const allService = useLoaderData();
  const service = window.location.pathname.split("/");

  const serviceId = service[service?.length-1]

  const currentService = allService.find(
    (service) => service.id === serviceId
  );

  const { category, title, image, price, description, features } =
    currentService;

  return (
    <div className="bg-gray-100 font-poppins">
      <div className="container mx-auto py-10 flex items-center gap-20">
        <img className="w-fit h-96" src={image} alt="" />
        <div>
            <div className="space-x-4">
            <button className="btn btn-sm hover:bg-cyan-800 bg-cyan-700 text-white">{category}</button>
            <button className="btn btn-sm hover:bg-cyan-800 bg-cyan-700 text-white">$ {price}</button>
            </div>
          <h1 className="text-3xl font-semibold text-cyan-700 pt-6">{title}</h1>
          <p className="text-lg text-gray-600 pt-6">{description}</p>
          <h2 className="text-2xl font-semibold text-cyan-700 pt-3">Features :</h2>
          <ul className="text-lg text-gray-600 list-disc pl-11">
            <li>{features.one}</li>
            <li>{features.two}</li>
            <li>{features.three}</li>
            <li>{features.four}</li> 
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
