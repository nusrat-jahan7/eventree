
const Contact = () => {
  return (
    <div className="bg-gray-100 font-poppins">
      <div className="grid max-w-screen-xl grid-cols-1 gap-12 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-800 dark:text-gray-100">
        <div className="flex flex-col justify-between">
          <div className="space-y-2">
            <h2 className="text-4xl text-cyan-700 font-bold leadi lg:text-5xl">
              Let's talk!
            </h2>
            <div className="text-gray-500">
              Do you want to know more about us?
            </div>
            <div className="space-y-6 pt-6">
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>Florida, A City, 32104 <br /> United States of America </span>
              </p>
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-6"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
                <span>+ 99123456789</span>
              </p>
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-6"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                <span>eventree@business.com</span>
              </p>
            </div>
          </div>
        </div>
        <form className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="name" className=" text-gray-500">
              Full name :
            </label>
            <input
              id="name"
              type="text"
              placeholder=""
              className="w-full p-3 rounded-lg border-2 border-cyan-700"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className=" text-gray-500">
              Email :
            </label>
            <input
              id="email"
              type="email"
              className="w-full p-3 rounded-lg border-2 border-cyan-700"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className=" text-gray-500">
              Message :
            </label>
            <textarea
              id="message"
              rows="3"
              className="w-full p-3 rounded-lg border-2 border-cyan-700"
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn w-full p-3 text-sm font-bold bg-cyan-700 hover:bg-cyan-900 text-white uppercase rounded-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};
export default Contact;
