import React from 'react'
import Slider from '../components/home-page/slider'
import Spacer from '../components/common/spacer'
import Welcome from '../components/about-page/welcome'
import FeaturedCourses from '../components/home-page/featured-courses'
import UpcomingEvents from '../components/events-page/upcoming-events'
import MobileApp from '../components/mobil-app'


const HomePage = () => {
  return (
    <>
    <Slider/>
    <Spacer/>
    <Welcome/>
    <Spacer/>
    <FeaturedCourses/>
    <Spacer/>
    <UpcomingEvents/>
    <Spacer/>
    <MobileApp/>
    </>

  )
}

export default HomePage