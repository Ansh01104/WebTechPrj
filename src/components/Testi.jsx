import { thefeed, thefeed2, thefeed3 } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";
import TheCard from "./TheCard";
import TheCard2 from "./thecard2";

const Testi = () => (
  <section
    id="clients"
    className="sm:py-6 py-6 flex justify-center items-center flex-col md:flex-col relative w-full   shadow-lg rounded-lg"
  >
    <div className="absolute z-[0] w-[100%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div className="w-full flex justify-center items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className="font-poppins font-semibold xs:text-[68px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full">
        FEATURES
      </h2>
    </div>

    <div className="flex flex-wrap   justify-center w-full feedback-container relative  z-[1]">
      {thefeed.map((card) => (
        <TheCard key={card.id} {...card} />
      ))}
      {thefeed2.map((card) => (
        <TheCard2 key={card.id} {...card} />
      ))}
    </div>
    <div className="flex flex-wrap   justify-center w-full feedback-container relative  z-[1]">
      {thefeed2.map((card) => (
        <TheCard2 key={card.id} {...card} />
      ))}
      {thefeed.map((card) => (
        <TheCard key={card.id} {...card} />
      ))}
    </div>
    <div className="grid grid-cols-4 gap-0 w-full feedback-container relative z-[1] my-8">
      {/* First two cards with equal width */}
      <div className="col-span-3 flex justify-center h-[400px]">
        {" "}
        {/* Takes double width */}
        {thefeed3.length > 0 && (
          <TheCard key={thefeed3[0].id} {...thefeed3[0]} />
        )}
      </div>
      <div className="col-span-1 flex justify-center">
        {" "}
        {/* First card */}
        {thefeed2.length > 0 && (
          <TheCard2 key={thefeed2[0].id} {...thefeed2[0]} />
        )}
      </div>

      {/* Last card that occupies more width */}
     
    </div>
    <div className="grid grid-cols-5 gap-1 w-full feedback-container relative z-[1]">
      {/* First two cards with equal width */}
      <div className="col-span-1 flex justify-center -[400px]">
        {" "}
        {/* First card */}
        {thefeed2.length > 0 && (
          <TheCard2 key={thefeed2[0].id} {...thefeed2[0]} />
        )}
      </div>
      <div className="col-span-1 flex justify-center -[400px]">
        {" "}
        {/* First card */}
        {thefeed2.length > 0 && (
          <TheCard2 key={thefeed2[0].id} {...thefeed2[0]} />
        )}
      </div>
      {/* Last card that occupies more width */}
      <div className="col-span-3 flex justify-center h-[400px]">
        {" "}
        {/* Takes double width */}
        {thefeed3.length > 0 && (
          <TheCard key={thefeed3[0].id} {...thefeed3[0]} />
        )}
      </div>
    </div>
   
  </section>
);

export default Testi;
