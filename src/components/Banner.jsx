import bannerImg from "/slider-1.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Banner = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      className="hero min-h-screen font-poppins"
      style={{
        backgroundImage: `url(${bannerImg})`,
      }}
    >
      <div className="hero-overlay bg-opacity-70 bg-cyan-700"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-xl">
          <h1 className="mb-5 text-5xl text-white font-bold" data-aos="fade-down">
            Make Your Special Event Unforgettable
          </h1>
          <p className="mb-5 text-gray-100" data-aos="fade-up">
            Celebrate special day with EvenTree is divine. Announce the date to
            us and we will make your ceremony bright, joyful and memorable.
          </p>
          <button className="btn bg-white text-cyan-700 border-none">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
