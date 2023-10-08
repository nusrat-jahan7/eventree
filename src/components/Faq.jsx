const Faq = () => {
  return (
    <section className="">
      <div className="container flex flex-col items-center font-poppins  justify-center px-4 mx-auto md:p-8">
        <h2 className="text-2xl text-cyan-700 font-semibold sm:text-4xl">
          Frequently Asked Questions
        </h2>
        <p className="mt-8 mb-8 w-4/6 text-center">
        Find instant answers to common queries with our comprehensive FAQ section, simplifying your event planning journey
        </p>
        <div className="space-y-4">
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ri font-semibold">
            What types of events do you specialize in organizing?
            </summary>
            <p className="px-4 w-3/6 py-6 pt-0 ml-4 -mt-4">
            We specialize in a wide range of events, including weddings, birthdays, anniversaries, baby showers, and corporate gatherings. 
            </p>
          </details>
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ri font-semibold">
            How involved can I be in the event planning process?
            </summary>
            <p className="px-4 w-3/6 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
            Our team works closely with you, incorporating your preferences at every step to create a personalized and flawless event.
            </p>
          </details>
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ri font-semibold">
            What sets your services apart from others in the industry?
            </summary>
            <p className="px-4 w-3/6 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
            Our dedication to creating unique and memorable experiences sets us apart. We prioritize attention to detail, creativity, and exceptional customer service. 
            </p>
          </details>
        </div>
      </div>
    </section>
  );
};

export default Faq;
