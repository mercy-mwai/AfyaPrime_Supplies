import React from "react";
import Image from "next/image";

const Aboutpage = () => {
  return (
    <div className="p-10 mt-5 background:bg-white-400 ">
      <h1 className="text-bold text-5xl mt-4 ">About Afya Prime Supplies</h1>
      <p className="text-gray-500 mt-5 text-xl">
        With many years of experience in the medical supply industry, Afya Prime
        Supplies has been Kenya's trusted partner in delivering quality
        healthcare solutions. We serve hospitals, clinics, laboratories, ,and
        healthcare professionals acroos East Africa.
      </p>
      <div className="grid md:grid-cols-2 gap-12 mt-8 items-start">
        <div>
          <h2 className="text-3xl font-semibold mb-4">Our misson</h2>
          <p className="text-gray-700 text-base mb-4 text-xl">
            Our mission is to empower healthcare providers with access to the
            most reliable and advanced medical equipment supplies. We are
            committed to excellence , integrity and customer satisfaction,
            ensuring every product meet the highest standards of quality and
            safety.
          </p>
          <p className="text-gray-700 text-base text-xl">
            We pride ourselves on our extensive network of global manufacturers
            and our dedicated team of experts who are always ready to provide
            Professional support and guidance.
          </p>
        </div>
        <div className="flex justify-center">
          <Image
            src="/assets/images/medical-equipment.png"
            alt="Medical Equipment"
            width={600}
            height={200}
            className="rounded-lg shadow-2xl"
          />
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-center font-bold text-2xl mb-8">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-8 mt-8 items-start">
          <div className="p-6 bg-white-60 rounded-lg text-center shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-black mb-2">Quality</h3>
            <p className="text-gray-700 text-base">
              We ensure all products meet stringent international standards.
            </p>
          </div>
          <div className="p-6 bg-white-60 rounded-lg text-center shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-black mb-2">Integrity</h3>
            <p className="text-gray-700 text-base">
              Operating with honesty and trasparency in all our dealings
            </p>
          </div>
          <div className="p-6 bg-white-60 rounded-lg text-center shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-black mb-2">
              Customer Focus
            </h3>
            <p className="text-gray-700 text-base">
              Priotizing client needs and providing exceptional service
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutpage;
