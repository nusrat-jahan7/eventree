import { Link } from "react-router-dom";
import pic1 from "/pic-1.jpg";
import pic2 from "/pic-2.jpg";
import pic3 from "/pic-3.jpg";
import pic4 from "/pic-4.jpg";

const Gallery = () => {
  return (
    <div className="bg-gray-100">
      <div className="px-4 bg-gray-100 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-cyan-700 sm:text-4xl md:mx-auto">
              Journey Through Our Extravagant Events Gallery
            </h2>
            <p className="text-base pb-8 text-gray-700 md:text-lg">
              Dive into the heartwarming memories we have crafted. Our gallery
              showcases the magic of weddings, the joy of birthdays, the romance
              of anniversaries, and the sweetness of baby showers. Each picture
              tells a story of love, laughter, and celebration. Immerse yourself
              in the vibrant colors, the candid smiles, and the exquisite
              details.
            </p>
          </div>
          <div className="grid max-w-screen-lg gap-8 row-gap-5 mb-8 sm:grid-cols-2 lg:grid-cols-4 sm:mx-auto">
            <img
              className="object-cover w-full h-56 rounded shadow-lg"
              src={pic1}
              alt=""
            />
            <img
              className="object-cover w-full h-56 rounded shadow-lg"
              src={pic2}
              alt=""
            />
            <img
              className="object-cover w-full h-56 rounded shadow-lg"
              src={pic3}
              alt=""
            />
            <img
              className="object-cover w-full h-56 rounded shadow-lg"
              src={pic4}
              alt=""
            />
            <img
              className="object-cover w-full h-56 rounded shadow-lg"
              src={pic4}
              alt=""
            />
            <img
              className="object-cover w-full h-56 rounded shadow-lg"
              src={pic1}
              alt=""
            />
            <img
              className="object-cover w-full h-56 rounded shadow-lg"
              src={pic2}
              alt=""
            />
            <img
              className="object-cover w-full h-56 rounded shadow-lg"
              src={pic3}
              alt=""
            />
          </div>
          <div className="flex items-center sm:justify-center">
            <Link
              to="/about"
              aria-label=""
              className="inline-flex bg-cyan-700 items-center font-semibold transition-colors duration-200 text-white px-3 py-2 rounded-lg hover:text-deep-purple-800"
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
