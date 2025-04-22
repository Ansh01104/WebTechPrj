import { Atom_1 } from "../assets";
import styles, { layout } from "../style";
 
import Card_best from "./Card_best";
const Card = ({ title, description, image }) => (
  <div className="w-full h-full flex-start">
    <Card_best />
  </div>
);

const CardDeal = () => (
  <section className={`flex md:flex-row flex-col ml-16 mr-16 mb-20`}>
    <div className={layout.sectionInfo}>
    <h2 className={` mb-10 font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full`}>
        You do the business, <br className="sm:block hidden" /> we’ll handle
        the money.
      </h2>
      <div className="flex flex-wrap max-w-[850px]">
        <Card title="Feature 1" />
      </div>
    </div>

    <div
      className={`flex-1 flex ${styles.flexCenter} md:ml-2 mr-5 ml-2 md:mt-0 mt-5 relative`}
    >
      <img src={Atom_1} alt="billing" className="w-[90%] h-[90%]" />
    </div>
  </section>
);

export default CardDeal;
