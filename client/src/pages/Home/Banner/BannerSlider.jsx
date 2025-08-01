import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";
import "swiper/css/effect-fade";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
    imgSrc: "https://merakiui.com/images/components/Catalogue-pana.svg",
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
    imgSrc: "https://merakiui.com/images/components/Catalogue-pana.svg",
  },
];

const BannerSlider = () => {
  return (
    <div className="container px-6 py-16 mx-auto">
      <Swiper
        modules={[Autoplay, Navigation, Pagination, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{ delay: 5000 }}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        speed={1000} // smooth fade duration
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="items-center lg:flex">
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
                  alt="Banner"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerSlider;
