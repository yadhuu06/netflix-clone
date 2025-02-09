import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCard'
import Footer from '../../components/Footer/Footer'

function Home() {
  return (
    <div>
      <Navbar />
      <div className="hero">
        <img src={hero_banner} alt="" className='banner-img' />

        <div className="hero-caption">
          <img src={hero_title} alt="" className='caption-img' />
          <p>Discovering the type of test to the World </p>
          <div className="hero-btns">
            <button className='btn'>
              <img src={play_icon} alt="" />
              play
            </button>
            <button className='btn dark-btn'>
              <img src={info_icon} alt="" />info
            </button>

          </div>


          <TitleCards />
        </div>
      </div>
      <div className="more-cards">

        <TitleCards title={"BlockBuster Movies"} />
        <TitleCards title={"Only on Netflix"} />
        <TitleCards title={"Upcoming Movies"} />

        <TitleCards title={"Top Picks"} />


      </div>

      <Footer />
    </div>

  )
}

export default Home
