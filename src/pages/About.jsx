// src/pages/About.jsx
export default function About() {
  return (
    <div className="pt-20 px-6 md:px-12 py-12 bg-[#F7F7F8] text-accent">
      <h1 className="text-4xl font-bold text-center mb-10">About Us</h1>

      {/* Introduction Section */}
      <section className="mb-12 text-center">
        <p className="max-w-4xl mx-auto text-lg leading-relaxed">
          <span className="font-semibold">
            We are among the leading sales, servicing & repairing company of all electrical power equipment.
          </span>{" "}
          We specialize in Power & Distribution Transformers (up to 50 MVA, single & three phase),
          Stabilizers, Inductor Chokes, High Voltage Transformers, High Current Transformers,
          Constant Voltage Transformers, and Auto Transformers.
        </p>
        <p className="mt-4 text-lg italic text-red-700">
          "Take the advantage of power deliver towards you."
        </p>
        <p className="mt-4 text-base text-gray-700">
          Established in 2018, we have been delivering high-quality power solutions tailored to our clients’ needs.
        </p>
      </section>

      {/* Our Strengths */}
      <section>
        <h2 className="text-3xl font-semibold text-center mb-6">Our Strength</h2>

        <div className="bg-white p-6 rounded-2xl shadow-md max-w-4xl mx-auto">
          <ul className="list-disc pl-5 space-y-3 text-lg">
            <li>Complete in-house facility & pool of expert & qualified engineers, ensuring strong technical capability.</li>
            <li>Annual Maintenance Contract (AMC) for Transformers, Stabilizers, Rectifiers, Substations, Panels, CT, PT, Relay Panels, APFC Panels, etc.</li>
            <li>Repairing of electrical components including Power & Distribution Transformers, Control Transformers, Panels, CT, PT, APFC Panel.</li>
            <li>Onsite testing of Transformers, Inductors & Autotransformers with oil filtration all over India.</li>
            <li>Sales of Autotransformers (0.5 Amps to 100 Amps air-cooled, 28 Amps to 1600 Amps oil-cooled), stabilizers, RTCC panels, HV testers (5kV to 200kV).</li>
            <li>Customized control panel & testing panel design as per customer requirements.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
