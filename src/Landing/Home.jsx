import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { BsArrowUpRight } from "react-icons/bs";
import slide1 from "./Images/December_Blog_Banners_Benefits_of_Organic_Skin_Care_Products.webp";
import slide2 from "./Images/December_Blog_Banners_Benefits_of_Organic_Skin_Care_Products.webp";
import slide3 from "./Images/December_Blog_Banners_Benefits_of_Organic_Skin_Care_Products.webp";
import icon1 from "./Images/icon1.jpg";
import icon2 from "./Images/icon2.jpg";
import icon3 from "./Images/icon3.jpg";
import "../index.css";

const customerIcons = [icon1, icon2, icon3];

const Home = () => {
  const images = [slide1, slide2, slide3];
  const captions = [
    "Lorem Ipsum Neque porro qui dolorem",
    "Lorem Ipsum Neque porro qui dolorem",
    "Lorem Ipsum Neque porro qui dolorem",
  ];
  const subCaption = [
    "Lorem Ipsum Neque porro qui dolorem",
    "Lorem Ipsum Neque porro qui dolorem",
    "Lorem Ipsum Neque porro qui dolorem",
  ];

  return (
    <div id="home" className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="w-full max-w-7xl mx-auto relative">
        <Swiper
          className="rounded-3xl"
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true, type: "bullets" }}
          autoplay={{ delay: 4000, pauseOnMouseEnter: true }}
          loop={true}
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-screen">
                {/* Slide Image */}
                <img
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-screen object-cover rounded-lg"
                />

                {/* Caption Box */}
                <div className="absolute top-4 sm:top-10 left-4 sm:left-10 max-w-[85%] sm:max-w-xs md:max-w-sm p-4 sm:p-6 rounded-xl text-zinnwalditeBrown ">
                  <div className="mb-4">
                    <div className="text-base sm:text-xl md:text-2xl font-semibold text-zinnwalditeBrown">
                      {captions[index]}
                    </div>
                    <div className="text-sm sm:text-base md:text-lg text-gray-600 font-normal mt-1">
                      {subCaption[index]}
                    </div>
                  </div>

                  <button
                    className="bg-timberWolf flex items-center shadow-lg text-zinnwalditeBrown font-semibold px-6 py-2 rounded-full hover:bg-zinnwalditeBrown hover:text-timberWolf transition text-sm sm:text-base"
                    onClick={() => alert(`Clicked button on slide`)}
                  >
                    Start Your Shop{" "}
                    <BsArrowUpRight size={18} className="ml-2" />
                  </button>
                </div>

                {/* Customers Bubble */}
                <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-6 bg-timberWolf rounded-2xl border border-zinnwalditeBrown p-3 sm:p-4 w-56 sm:w-64 md:w-72">
                  <h3 className="text-zinnwalditeBrown text-center mb-3 font-semibold text-base sm:text-lg lowercase">
                    our customers
                  </h3>
                  <div className="flex justify-center items-center gap-2 sm:gap-3 relative">
                    {customerIcons.map((img, idx, arr) => {
                      const isLast = idx === arr.length - 1;
                      return (
                        <div
                          key={idx}
                          className={`relative ${
                            idx !== 0 ? "-ml-5 sm:-ml-7" : ""
                          } rounded-full bg-timberWolf w-12 sm:w-16 h-12 sm:h-16 flex justify-center items-center`}
                        >
                          <img
                            src={img}
                            alt={`Customer ${idx + 1}`}
                            className="rounded-full w-10 sm:w-14 h-10 sm:h-14 object-cover"
                          />
                          {isLast && (
                            <div className="absolute -top-2 -right-2 bg-timberWolf rounded-full w-6 sm:w-7 h-6 sm:h-7 flex justify-center items-center border border-gray-600">
                              <BsArrowUpRight
                                size={18}
                                className="text-zinnwalditeBrown"
                              />
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Home;
