import cert1 from '../../assets/certificates/cert1.jpg';

export default function Certificates() {
  return (
    <section className="bg-[#F7F7F8] py-8 px-4 sm:px-8 md:px-16 lg:px-32">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-[#26262B] mb-4">
          Our Certification
        </h2>

        <div className="group h-128 w-96 h-auto mx-auto overflow-hidden rounded-xl shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105">
          <img
            src={cert1}
            alt="Company Certificate"
            className="w-full object-contain transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}
