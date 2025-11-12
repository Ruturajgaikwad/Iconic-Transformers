import { useState, useEffect } from "react";

const slides = [
  "/images/hero/slide1.jpg",
  "/images/hero/slide2.jpg",
  "/images/hero/slide3.jpg",
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={slide}
            alt={`Slide ${index + 1}`}
            className="w-full h-screen object-cover"
          />
          <div className="absolute inset-0 bg-[#26262B]/60 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
              Your Power, Our Passion
            </h1>
            <p className="mt-4 text-lg md:text-2xl text-gray-200">
              Leading Service Provider of Industrial Transformers
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
