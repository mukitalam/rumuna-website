"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { FaUsers, FaGlobe, FaUniversity, FaAward } from "react-icons/fa";

export default function Stats() {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const stats = [
    {
      icon: <FaUsers />,
      number: 5000,
      suffix: "+",
      title: "Delegates",
    },
    {
      icon: <FaUniversity />,
      number: 30,
      suffix: "+",
      title: "Conferences",
    },
    {
      icon: <FaAward />,
      number: 100,
      suffix: "+",
      title: "Awards",
    },
    {
      icon: <FaGlobe />,
      number: 13,
      suffix: "+",
      title: "Years",
    },
  ];

  return (
    <section
      ref={ref}
      className="bg-[#081C3A] text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold">
            RUMUNA in <span className="text-[#D4AF37]">Numbers</span>
          </h2>

          <p className="mt-4 text-gray-300">
            Our journey of diplomacy, leadership and excellence.
          </p>

        </div>

        <div className="grid md:grid-cols-4 gap-10">

          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-[#0d2954] rounded-3xl p-10 text-center shadow-xl hover:scale-105 duration-300"
            >
              <div className="text-5xl text-[#D4AF37] flex justify-center mb-5">
                {item.icon}
              </div>

              <h3 className="text-5xl font-bold">

                {inView && (
                  <CountUp
                    end={item.number}
                    duration={2}
                  />
                )}

                {item.suffix}

              </h3>

              <p className="mt-3 text-gray-300">
                {item.title}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}