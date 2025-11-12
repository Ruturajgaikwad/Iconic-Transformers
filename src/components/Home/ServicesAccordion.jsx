import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/24/outline';

export default function ServicesAccordion() {
  const services = [
    {
      title: 'Power Transformers',
      description:
        'We manufacture power transformers tailored to client specifications with high efficiency and safety standards.',
    },
    {
      title: 'Distribution Transformers',
      description:
        'Robust distribution transformers designed for diverse industrial and commercial applications.',
    },
    {
      title: 'Repair & Maintenance',
      description:
        'We offer complete repair, retrofitting, and maintenance services to extend transformer life.',
    },
    {
      title: 'Customized Solutions',
      description:
        'Our engineering team delivers custom solutions to meet unique voltage and current requirements.',
    },
  ];

  return (
    <section className="bg-[#F7F7F8] py-12 px-4 sm:px-8 md:px-16 lg:px-32">
      <div className=" max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-[#26262B] text-center mb-8">
          Our Services
        </h2>

        <div className=" space-y-4">
          {services.map((service, index) => (
            <Disclosure key={index}>
              {({ open }) => (
                <div className="border border-[#E0E0E0] bg-gray-500 rounded-lg shadow-sm">
                  <Disclosure.Button className="flex w-full justify-between items-center px-4 py-3 text-left text-dominant font-medium hover:bg-accent hover:rounded-lg transition">
                    <span>{service.title}</span>
                    <ChevronUpIcon
                      className={`h-5 w-5 text-dominant transition-transform duration-300 ${
                        open ? 'rotate-180' : 'rotate-0'
                      }`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pb-4 text-sm text-dominant">
                    {service.description}
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
    </section>
  );
}
