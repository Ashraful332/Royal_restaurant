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
import Safe from './components/home/Safe'
import Visit from './components/home/Visit'
import Footer from './components/navigation/Footer'
import Navbar from './components/navigation/Navbar'

function App() {

  return (
    <div className='bg-[#111114] text-[#CCCCCC] h-screen '>
      <Navbar/>
      <Hero/>
      <Data/>
      <Popular_Food/>
      <Opening_Times/>
      <Our_Menu/>
      <Visit/>
      <BookNow/>
      <Offers/>
      <Safe/>
      <Our_Blog/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default App
