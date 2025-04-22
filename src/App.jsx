import styles from "./style";
import {
  Business,
  Footer,
  Navbar,
  Hero,
  Testi,
  CardDeal,
  FirstVisitOverlay,
  Dock,
  Feature1,
  Tabsx,
  Testi2,
  GlobeDemo,
  Thescroll,CardGroup
} from "./components";

const App = () => (
  <div className="absolute bg-black w-full overflow-hidden">
 
    <FirstVisitOverlay/>
    <div>
    <Navbar />
    <Hero />

    </div>
 
    <Thescroll />
    <div className={`bg-black ${styles.flexCenter}${styles.paddingX}`}>
      <div className={`${styles.boxWidth}`}>
        <Testi2 />
     
      </div>
    </div>
    <Feature1 />
    <div className={`bg-black ${styles.flexCenter}${styles.paddingX}`}>
      <div className={`${styles.boxWidth}`}>
        <CardDeal />
       
        <Tabsx />
   
        
      </div>
    </div>
    <GlobeDemo />
   

    <div className={`bg-black ${styles.flexCenter}${styles.paddingX}`}>
      <div className={`${styles.boxWidth}`}>
        <Footer />
      </div>
    </div>

    <div className="fixed bottom-2 left-0 w-full z-40">
      <Dock />
    </div>
  </div>
);

export default App;
