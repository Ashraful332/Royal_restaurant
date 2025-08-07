import './App.css'
import BookNow from './components/home/BookNow'
import Data from './components/home/Data'
import Hero from './components/home/Hero'
import Newsletter from './components/home/Newsletter'
import Offers from './components/home/Offers'
import Opening_Times from './components/home/Openning_Times'
import Our_Blog from './components/home/Our_Blog'
import Our_Menu from './components/home/Our_Menu'
import Popular_Food from './components/home/Popular_Food'
import Cook from './components/home/Safe'
import AutoSlider from './components/home/Slider'
import Visit from './components/home/Visit'
import Footer from './components/navigation/Footer'
import Navbar from './components/navigation/Navbar'

function App() {

  return (
    <>
      <div className='text-[var(--pTx-color)] max-w-screen overflow-x-hidden px-[14px] sm:px-[30px]  '>
        <Navbar/>
        <Hero/>
      </div>

      <div className='max-w-screen overflow-x-hidden'>
        <Data/>
      </div>
      
      <div className='text-[var(--pTx-color)] max-w-screen overflow-x-hidden px-[14px] sm:px-[30px]  '>
        <Popular_Food/>
        <Opening_Times/>
        <Our_Menu/>
        <Visit/>
        <BookNow/>
        <Offers/>
      </div>

      <div className='max-w-screen overflow-x-hidden'>
        {/* <AutoSlider/> */}
      </div>

      <div className='text-[var(--pTx-color)] max-w-screen overflow-x-hidden px-[14px] sm:px-[30px]  '>
        <Cook/>
      </div>

      <div className='text-[var(--pTx-color)] max-w-screen overflow-x-hidden px-[14px] sm:px-[30px]  '>
        <Our_Blog/>
      </div>

      <div className='max-w-screen overflow-x-hidden text-[var(--pTx-color)]'>
        <Newsletter/>
      </div>

      <div className='text-[var(--pTx-color)] max-w-screen overflow-x-hidden px-[14px] sm:px-[30px]  '>
        <Footer/>
      </div>
    </>
    
  )
}

export default App
