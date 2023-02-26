import './App.css';
import Footer from './Components/footer/Footer';
import SectionTwo from './Components/section-two/SectionTwo';
import SectionThree from './Components/section03/SectionThree';
import SectioonFour from './Components/section04/SectioonFour';
import SectionFive from './Components/section05/SectionFive';
import SectionSix from './Components/section06/SectionSix';
import SectionSeven from './Components/section07/SectionSeven';
import SectionEight from './Components/section08/SectionEight';
import SectionNine from './Components/section09/SectionNine';
import Sectionone from './Components/section_one/Sectionone';

function App() {
  return (
    <div className="App">
      <Sectionone/>
      <SectionTwo/>
      <SectionThree/>
      <SectioonFour/>
      <SectionFive/>
      <SectionSix/>
      <SectionSeven/>
      <SectionEight/>
      <SectionNine/>
      <Footer/>
    </div>
  );
}

export default App;
