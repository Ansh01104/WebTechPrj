import styles from "./style";
import {
  Business,
  Footer,
  Navbar,
  Stats,
  Testimonials,
  Hero,
  Testi,
} from "./components";

const App = () => (
  <div className="absolute bg-black w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
    <div className={`${styles.boxWidth}`}>
      <Navbar />
      <Hero />
      </div>
    </div  >
 
      
 
    <div className={`bg-primary ${styles.flexCenter}${styles.paddingX}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Testi />
        <Business />
        <Testimonials/>
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
