import Slideshow from "../components/Slideshow";
import Illustration from "../components/Illustration";

// Import images
import CA1 from "../assets/Asset/CA/CA_0.svg";
import CA2 from "../assets/Asset/CA/CA_1.svg";
import CA3 from "../assets/Asset/CA/CA_2.svg";

import S1 from "../assets/Asset/Accreditations/Sales_0.png";
import S2 from "../assets/Asset/Accreditations/Sales_1.png";
import S3 from "../assets/Asset/Accreditations/Sales_2.png";
import S4 from "../assets/Asset/Accreditations/Sales_3.png";
import S5 from "../assets/Asset/Accreditations/Sales_4.png";
import S6 from "../assets/Asset/Accreditations/Sales_5.png";
import S7 from "../assets/Asset/Accreditations/Sales_6.png";
import S8 from "../assets/Asset/Accreditations/Sales_7.png";
import S9 from "../assets/Asset/Accreditations/Sales_8.png";

import J1 from "../assets/Asset/Journalist/J_0.svg";
import J2 from "../assets/Asset/Journalist/J_1.svg";
import J3 from "../assets/Asset/Journalist/J_2.svg";

const OutOfWork = () => {
  const experiences = [
    {
      title: "Technical Delivery & Sales",
      description:
        "While working as a Solutions Engineer, I focused on the connection between software and client. With these accreditations and the insights I gained, I'm ready to translate technical concepts into clear business value.",
      images: [S1, S2, S3, S4, S5, S6, S7, S8, S9],
    },
    {
      title: "Digital Ambassador",
      description:
        "With the Embassy of Sweden in Seoul, I coordinated major student fairs connecting Swedish organizations with the local community. I discovered that I truly thrive in dynamic environments, being the bridge across cultures and languages.",
      images: [CA1, CA2, CA3],
    },
    {
      title: "Journalist",
      description:
        "Writing for The Korean Economic Daily, I covered topics ranging from global sustainability to European business and culture. I was recognized with the 'Excellent Reporter Award' for my commitment to blending deep analysis with readability.",
      images: [J1, J2, J3],
    },
  ];

  return (
    <div className="pb-12 md:pb-20 pt-4 md:pt-8">
      <div className="flex flex-col items-center text-center mb-24">
        <div className="w-32 h-32 mb-6">
          <Illustration variant="curious" />
        </div>
        <h1 className="text-4xl md:text-6xl font-black mb-4">
          Value Beyond Code
        </h1>
        <p className="text-xl text-gray-500 font-serif max-w-xl">
          When I’m not behind the screen, I’m out connecting with the real
          world.
        </p>
      </div>

      <div className="space-y-32">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row gap-12 items-center ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="w-full md:w-1/2">
              <div className="transform rotate-2 hover:rotate-0 transition-transform duration-500 p-4 bg-white shadow-xl rounded-xl border border-gray-100">
                <Slideshow images={exp.images} />
              </div>
            </div>

            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl font-bold mb-4">{exp.title}</h2>
              <p className="text-gray-600 text-lg font-serif italic">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OutOfWork;
