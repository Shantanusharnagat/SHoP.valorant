import React from 'react'
import { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'
import './Dashboard.css'
import CardItem from './CardItem'

const Dashboard = () => {
  const navigate=useNavigate()

  const {user}=useSelector((state)=>state.auth)

  useEffect(()=>{
    if(!user){
      navigate('/login')
    }
  }, [user, navigate])
  return (
    <div className='dashboard'>
      <video src='/videos/vid.webm' autoPlay loop muted/>
      <div className='maincard'>
      <CardItem
              src='https://earlygame.com/uploads/images/_body/Valorant-Points-Banner.jpg'
              text='Buy 75 Valorant Points @55 Indian Rupee'
              label='VP'
              path='/services'
            />
          </div>
    </div>
  )
}

export default Dashboard