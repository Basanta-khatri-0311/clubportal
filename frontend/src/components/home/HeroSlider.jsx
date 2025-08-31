import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function HeroSlider() {
  const slides = [
    {
      img: "https://plus.unsplash.com/premium_photo-1685231505281-c77644c5a195?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Building Champions Together",
      subtitle: "Join our journey of teamwork and excellence",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1685055940303-5e5b650a860f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Exciting Events & Achievements",
      subtitle: "Celebrate our wins and milestones",
    },
    {
      img: "https://images.unsplash.com/photo-1527871369852-eb58cb2b54e2?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Meet Our Members",
      subtitle: "Passionate, talented, and inspiring",
    },
  ];

  return (
    <section className="relative w-full flex justify-center py-20">
      <div className="w-full max-w-7xl h-96 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-r from-green-100 to-green-200 mt-14">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          loop={true}
          className="w-full h-full rounded-2xl"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="w-full h-full bg-cover bg-center flex items-center justify-center"
                style={{ backgroundImage: `url(${slide.img})` }}
              >
                <div className="bg-black/40 p-6 rounded-xl text-center text-white max-w-2xl">
                  <h2 className="text-3xl md:text-5xl font-bold">
                    {slide.title}
                  </h2>
                  <p className="mt-2 text-lg md:text-2xl">{slide.subtitle}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
