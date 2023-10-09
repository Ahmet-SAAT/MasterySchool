import React from 'react'
import Slider from '../components/home-page/slider'
import Spacer from '../components/common/spacer'
import Welcome from '../components/about-page/welcome'
import FeaturedCourses from '../components/home-page/featured-courses'


const HomePage = () => {
  return (
    <>
    <Slider/>
    <Spacer/>
    <Welcome/>
    <Spacer/>
    <FeaturedCourses/>
    </>
  )
}

export default HomePage