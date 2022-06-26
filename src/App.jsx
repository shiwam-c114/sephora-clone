 import './App.css';
//import { Carousel } from '@trendyol-js/react-carousel';
import Banner from './components/HomePage/Banner/Banner';
import Menu from "./components/HomePage/Menu/Menu"
function App() {
  return (
    <div>
       <Menu/>
       <div className='image_slider'>
          <Banner/>
          <Banner/>
          <Banner/>
       </div>
       
    </div>
   
 

  );
}

export default App;
