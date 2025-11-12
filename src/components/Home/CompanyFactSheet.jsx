export default function CompanyFactSheet() {
  const facts = [
    { label: 'Company Name', value: 'Iconic Transformers and Electricals Pvt. Ltd.' },
    { label: 'Founded', value: '2018' },
    { label: 'Location', value: 'Pune, Maharashtra, India' },
    { label: 'Employees', value: '50+ Skilled Professionals' },
    { label: 'Certifications', value: 'ISO 9001:2015' },
    { label: 'Specialty', value: 'Custom Power & Distribution Transformers' },
  ];

  return (
    <section className="bg-[#F7F7F8] py-12 px-4 sm:px-8 md:px-16 lg:px-32">
      <div className="max-w-5xl mx-auto text-center text-accent">
        <h2 className="text-2xl md:text-3xl font-bold text-accent mb-10">
          Company Fact Sheet
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {facts.map((fact, index) => (
            <div
              key={index}
              className="bg-gray-500 rounded-xl shadow-md p-6 text-left hover:shadow-lg transition-shadow duration-300"
            >
              <p className="text-sm text-white uppercase tracking-wide mb-2 font-medium">
                {fact.label}
              </p>
              <p className="text-lg text-accent font-semibold">
                {fact.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
