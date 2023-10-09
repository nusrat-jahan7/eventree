import pic1 from "/pic-1.jpg";
import pic2 from "/pic-2.jpg";
import pic3 from "/pic-3.jpg";
import pic4 from "/pic-4.jpg";

const Clients = () => {
  return (
    <div className="mt-10 lg:mt-0 px-4 pb-20 mx-auto sm:max-w-xl md:max-w-full lg:container md:px-24 lg:px-8 font-poppins">
      <div className="container flex flex-col items-center font-poppins  justify-center px-4 mx-auto md:p-8">
        <h2 className="text-2xl mb-10 md:mb-0 text-cyan-700 font-semibold sm:text-4xl">
          Our Blissful Clients
        </h2>
        <p className="mt-8 mb-5 w-4/6 text-center hidden lg:block">
          Discover heartwarming stories and glowing testimonials in our Clients
          Review section, where the magic of our events is beautifully narrated
          by our satisfied clients
        </p>
      </div>
      <div className="grid text-center md:text-left gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-4 lg:container">
        <div>
          <img
            className="object-cover mx-auto lg:mx-0 w-24 h-24 rounded-full shadow"
            src={pic1}
            alt="Person"
          />
          <div className="flex flex-col justify-center mt-2">
            <p className="text-lg font-bold">Lisa showy</p>
            <p className="text-sm tracking-wide pt-4 text-gray-800 ">
              Our daughter's birthday was turned into a fairytale thanks to this
              team. The creativity and enthusiasm they brought were infectious.
              The kids were entertained, and the adults were captivated. It was
              a day to remember!
            </p>
          </div>
        </div>
        <div>
          <img
            className="object-cover mx-auto lg:mx-0 w-24 h-24 rounded-full shadow"
            src={pic2}
            alt="Person"
          />
          <div className="flex flex-col justify-center mt-2">
            <p className="text-lg font-bold">Emily & Michael</p>
            <p className="text-sm tracking-wide pt-4 text-gray-800">
              Exceptional service from start to finish. Their expertise shone
              through in every aspect of our event. The coordination was
              seamless, and their ability to handle unexpected situations was
              impressive. We couldn't be happier!
            </p>
          </div>
        </div>
        <div>
          <img
            className="object-cover mx-auto lg:mx-0 w-24 h-24 rounded-full shadow"
            src={pic3}
            alt="Person"
          />
          <div className="flex flex-col justify-center mt-2">
            <p className="text-lg font-bold">David & Emma</p>
            <p className="text-sm tracking-wide pt-4 text-gray-800">
              Planning our anniversary was a breeze with this company. Their
              professionalism and understanding of our requirements made the
              entire process stress-free. The event itself was flawless, leaving
              us to enjoy every moment with our guests. 5-star service!
            </p>
          </div>
        </div>
        <div>
          <img
            className="object-cover mx-auto lg:mx-0 w-24 h-24 rounded-full shadow"
            src={pic4}
            alt="Person"
          />
          <div className="flex flex-col justify-center mt-2">
            <p className="text-lg font-bold">Emily & Michael</p>
            <p className="text-sm tracking-wide pt-4 text-gray-800">
              Exceptional service from start to finish. Their expertise shone
              through in every aspect of our event. The coordination was
              seamless, and their ability to handle unexpected situations was
              impressive. We couldn't be happier!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
