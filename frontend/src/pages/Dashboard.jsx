import React from 'react'
import { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Dashboard.css'
import CardItem from './CardItem'
import Developers from './Developers';



const Dashboard = () => {
  const navigate=useNavigate()

  const {user}=useSelector((state)=>state.auth)

  useEffect(()=>{
    if(!user){
      navigate('/login')
    }
  }, [user, navigate])

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showVideo, setShowVideo] = useState(true);
  const [textColor, setTextColor] = useState("white");

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth < 900) {
      setShowVideo(false);
      setTextColor("black");
      setTimeout(() => {
        setTextColor("white");
      }, 5000);
    } else {
      setShowVideo(true);
    }
  }, [windowWidth]);

  const carouselRef = React.useRef(null);

  const handleSwipe = (direction) => {
    if (direction === 'left') {
      if (carouselRef.current) {
        carouselRef.current.next();
      }
    } else if (direction === 'right') {
      if (carouselRef.current) {
        carouselRef.current.previous();
      }
    }
  };

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };





  return (
    <div>
    <div className='dashboard'>
    {showVideo && (
      <video src='/videos/vid.webm' autoPlay loop muted/>
      )}
      <div className='carousel'>
      <Carousel  swipeable
      draggable={false}
      onSwipe={(dir) => handleSwipe(dir)}
      ref={carouselRef}
      responsive={responsive}>
        
        
  <div className='card' style={{ color: textColor }} ><CardItem
              src='https://earlygame.com/uploads/images/_body/Valorant-Points-Banner.jpg'
              text='Reaver Skin Bundle'
              label='$10'
              path='/services'
            /></div>
  <div className='card'><CardItem
              src='https://earlygame.com/uploads/images/_body/Valorant-Points-Banner.jpg'
              text='Prime skin bundle'
              label='$15'
              path='/services'
            /></div>
  <div className='card'><CardItem
              src='https://earlygame.com/uploads/images/_body/Valorant-Points-Banner.jpg'
              text='Glitchpop skin bundle'
              label='$17'
              path='/services'
            /></div>
  <div className='card'><CardItem
              src='https://earlygame.com/uploads/images/_body/Valorant-Points-Banner.jpg'
              text='Protien shake sale'
              label='FREE'
              path='/services'
            /></div>
</Carousel>

      </div>
     
    </div>
    
    </div>
  )
}

export default Dashboard