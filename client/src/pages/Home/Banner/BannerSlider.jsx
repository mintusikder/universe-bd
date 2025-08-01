import React, { useState, useEffect } from "react";

const slides = [
  {
    title: (
      <>
        Best place to choose <br />
        your <span className="text-blue-500">clothes</span>
      </>
    ),
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro beatae error laborum ab amet sunt recusandae? Reiciendis natus perspiciatis optio.",
    imgSrc: "https://merakiui.com/images/components/Catalogue-pana.svg",
  },
  {
    title: (
      <>
        Discover your <br />
        <span className="text-blue-500">perfect fit</span>
      </>
    ),
    description:
      "Find styles that suit your personality. Quality fabrics and trendy designs all in one place.",
    imgSrc:
      "https://merakiui.com/images/components/Catalogue-pana.svg",
  },
  {
    title: (
      <>
        Upgrade your <br />
        <span className="text-blue-500">wardrobe today</span>
      </>
    ),
    description:
      "Explore exclusive collections and limited edition pieces to elevate your fashion game.",
    imgSrc:
      "https://merakiui.com/images/components/Catalogue-pana.svg",
  },
];

const BannerSlider = () => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  // Auto slide every 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearTimeout(timer);
  }, [current, length]);

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  return (
    <div className="container px-6 py-16 mx-auto">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`items-center lg:flex transition-transform duration-700 ease-in-out ${
            index === current ? "block" : "hidden"
          }`}
        >
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg">
              <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
                {slide.title}
              </h1>
              <p className="mt-3 text-gray-600 dark:text-gray-400">
                {slide.description}
              </p>
              <button className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                Shop Now
              </button>
            </div>
          </div>

          <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
            <img
              className="w-full h-full lg:max-w-3xl"
              src={slide.imgSrc}
              alt="Banner Image"
            />
          </div>
        </div>
      ))}

      {/* Controls */}
      <div className="flex justify-center mt-8 space-x-4">
        <button
          onClick={prevSlide}
          className="px-4 py-2 font-semibold text-white bg-blue-600 rounded hover:bg-blue-700"
          aria-label="Previous Slide"
        >
          Prev
        </button>
        <button
          onClick={nextSlide}
          className="px-4 py-2 font-semibold text-white bg-blue-600 rounded hover:bg-blue-700"
          aria-label="Next Slide"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BannerSlider;
