import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Service = ({ service }) => {
  // console.log(service);

  const { id ,title, price, image } = service;

  return (
    <div>
      <div className="w-full overflow-hidden bg-white rounded-lg shadow-lg">
        <img
          className="object-cover object-center w-full h-56"
          src={image}
          alt="avatar"
        />

        <div className="flex items-center px-6 py-3 bg-cyan-700">
          <h1 className="mx-3 text-lg font-semibold text-white">$ {price}</h1>
        </div>

        <div className="px-6 py-4">
          <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
            {title}
          </h1>

          {/* <p className="py-2 text-gray-700 dark:text-gray-400 line-clamp-2">
            {description}
          </p> */}

          <div className="flex justify-center bg-white pt-5">
            <Link to={`/service-details/${id}`} className="border-2 border-cyan-700 px-4 py-2 rounded-xl text-cyan-700 font-semibold hover:bg-cyan-700 hover:text-white">
              See Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
