import styles from "../style";
 

const Footer = () => (
  <section className={`${styles.flexCenter} sm:py-2 py-5 flex-col`}>
    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-2 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-base text-center text-[13px] leading-[27px] text-white">
        Copyright Ⓒ 2025 ServaLabs. All Rights Reserved.
      </p>

      
    </div>
  </section>
);

export default Footer;
