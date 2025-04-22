import { thefeed, thefeed2 } from "../constants";
 
import TheCard from "./TheCard";
 
import Card_max from "./Card_max";

const Testi = () => (
  <section
    id="clients"
    className="sm:py-5 py-5 px-2 flex justify-center items-center flex-col md:flex-col relative w-full bg-gray-100 shadow-lg rounded-lg"
  >
    {/* Background Gradient */}
    <div className="absolute z-[0] w-[100%] h-[60%] -right-[50%] rounded-full gold__gradient bottom-40" />


    {/* Title and Paragraph */}
    <div className="w-full flex flex-col justify-center items-center text-center sm:mb-6 mb-6 relative z-[1]">
      <h2 className="font-poppins font-semibold xs:text-[56px] text-[40px] text-black xs:leading-[76.8px] leading-[66.8px] w-full mb-4">
      Awesome AI Media search
      </h2>
      <p className="font-poppins text-base text-gray-600 leading-relaxed max-w-[800px]">
        Empower your workflow with features that drive efficiency. Our platform ensures that you are equipped with the tools necessary to boost productivity like never before.
      </p>
    </div>

    {/* Feedback Cards Section 1 */}
    <div className="flex flex-wrap justify-center h-max-[350px] w-full feedback-container relative z-[1]">
      {thefeed.map((card) => (
        <TheCard key={card.id} {...card} />
      ))}
      {thefeed2.map((card) => (
        <Card_max key={card.id} {...card} />
      ))}
    </div>

    {/* Feedback Cards Section 2 */}
    <div className="flex flex-wrap justify-center w-full feedback-container relative z-[1] mb-1">
      {thefeed2.map((card) => (
        <Card_max key={card.id} {...card} />
      ))}
      {thefeed.map((card) => (
        <TheCard key={card.id} {...card} />
      ))}
    </div>

 
    
  </section>
);

export default Testi;
