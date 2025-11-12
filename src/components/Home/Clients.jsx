// src/components/Home/Clients.jsx
import React from "react";

const clientLogos = [
  "/src/assets/clients/client1.jpg",
  "/src/assets/clients/client2.jpg",
  "/src/assets/clients/client3.jpg",
  "/src/assets/clients/client4.jpg",
  "/src/assets/clients/client5.jpg",
];

export default function Clients() {
  return (
    <section className="bg-gray-500 py-10 overflow-hidden">
      <h2 className="text-3xl font-bold text-center text-white mb-8">
        Our Clients
      </h2>
      <div className="relative overflow-hidden">
        <div className="animate-scroll flex w-max gap-12 px-4">
          {clientLogos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Client ${index + 1}`}
              className="h-24 w-auto object-contain grayscale hover:grayscale-0 transition duration-300"
            />
          ))}
          {/* Repeat once for infinite-like effect */}
          {clientLogos.map((logo, index) => (
            <img
              key={`copy-${index}`}
              src={logo}
              alt={`Client Copy ${index + 1}`}
              className="h-24 w-auto object-contain grayscale hover:grayscale-0 transition duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
