import Header from '../Header'
import TrainDetails from '../TrainDetails'
import {Element, scroller} from 'react-scroll'
import { IMAGES } from "@/assets/imgs/Images";
import './index.css'
const Home = () => {
  const scr = content => {
    scroller.scrollTo(content, {
      duration: 1000,
      delay: 0,
      smooth: 'easeInOutQuart',
    })
  }
  return (
    <div>
    <div style={{ 
      backgroundImage: `url(${IMAGES.bgimage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: '100vw',
      height: '100vh',
    }}> 
    
      <Header />
      <Element name='homescroll'>
      <div className='whole-home'>
        <div className='text-box'>
          <h1 className='heading-one'> Welcome Aboard : SwiftRails</h1>
          <h1 className='heading-two'> Your Ultimate Journey Companion</h1>
        </div>
        
        <button className='BTN' onClick={() => scr('content')}>
          Get Started
        </button>
        
      </div>
      </Element>
    </div>
    
    <div>
      
      <Element name='content'>
        <TrainDetails />
      </Element>
    </div>
    
  
  
  </div>
  )
}
export default Home
