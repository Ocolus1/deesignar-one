import {useEffect, useState} from 'react';
import './App.css';
import SectionEight from './sections/SectionEight';
import SectionFive from './sections/SectionFive';
import SectionFour from './sections/SectionFour';
import SectionNine from './sections/SectionNine';
import SectionOne from './sections/SectionOne';
import SectionSeven from './sections/SectionSeven';
import SectionSix from './sections/SectionSix';
import SectionThree from './sections/SectionThree';
import SectionTwo from './sections/SectionTwo';

function App() {
  const [width, setWidth] = useState(window.innerWidth);

  
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
		return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
		};
  }, []);

  const isMobile = width <= 800;
  const isTab = width <= 1000;
  
  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  return (
		<div className="App">
			<SectionOne isMobile={isMobile} />
			<SectionTwo isMobile={isMobile} />
			<SectionThree isMobile={isMobile} />
			<SectionFour isMobile={isMobile} />
			<SectionFive isMobile={isMobile} isTab={isTab} />
			<SectionSix isMobile={isMobile} />
			<SectionSeven isMobile={isMobile} />
			<SectionEight isMobile={isMobile} />
			<SectionNine isMobile={isMobile} />
		</div>
  );
}

export default App;
