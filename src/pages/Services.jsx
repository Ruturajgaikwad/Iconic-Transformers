// src/pages/Services.jsx
export default function Services() {
  return (
    <div className="pt-20 px-6 md:px-12 py-12 bg-[#F7F7F8] text-accent">
      <h1 className="text-4xl font-bold text-center mb-10">Our Services</h1>

      {/* Annual Maintenance Contract */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Annual Maintenance Contract</h2>
        <p className="mb-4">
          We provide comprehensive and non-comprehensive AMC services for Transformer, Stabilizer, CSS or Switchgear.
          You can also avail one-time services as per your requirement.
        </p>
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h3 className="text-xl font-medium mb-2">Comprehensive AMC Plan Covers:</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Quarterly preventive maintenance including oil filtration, painting, core tightening, and mechanical & OLTC checks.</li>
            <li>Free repair and replacement of faulty materials during the entire contract period.</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md mt-6">
          <h3 className="text-xl font-medium mb-2">Non-Comprehensive AMC Plan Covers:</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Quarterly preventive maintenance including oil filtration, painting, core tightening, and mechanical & OLTC checks.</li>
            <li>Repair and replacement of faulty materials charged only for actual cost. No labor charge.</li>
          </ul>
        </div>
      </section>

      {/* Services & Process */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Services & Process Followed</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Free Health Checkup using detailed checklist</li>
          <li>Free report with pictures and recommendations</li>
          <li>Attending complaints N number of times</li>
          <li>Spares replacement as required</li>
          <li>24 × 7 Service</li>
          <li>Full manufacturing facility for repairing/testing transformers/switchgear/CSS</li>
        </ul>
      </section>

      {/* Other Services */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Other Services</h2>
        <p className="mb-2">
          We provide rental transformers ranging from 100 KVA to 5000 KVA, both oil & dry type. Available for short &
          long-term rentals.
        </p>
        <p>Advantages:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>24 × 7 customer support</li>
          <li>Facility for health checkup and testing at site</li>
        </ul>
      </section>

      {/* Detailed Services */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Detailed Testing Services</h2>
        <ul className="grid md:grid-cols-2 gap-3 list-disc pl-5">
          <li>Transformer Testing (Capacitance, Tan-delta, Vector group confirmation, Magnetic balance, etc.)</li>
          <li>CT/PT/CVT Testing (Ratio test, Magnetizing current, WTI & OTI calibration)</li>
          <li>Circuit Breaker Testing (Dynamic contact resistance, Timing test, Coil resistance, etc.)</li>
          <li>Frequency response analysis, Short circuit test, Insulation resistance test</li>
        </ul>
      </section>
    </div>
  );
}
