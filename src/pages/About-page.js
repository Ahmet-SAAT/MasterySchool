import React from 'react'
import PageHeader from '../components/common/page-header'
import Spacer from '../components/common/spacer'
import Instructor from '../components/about-page/instructors'
const AboutPage = () => {
  return (
    <>
        <PageHeader title="Instructors"/>
        <Spacer/>
        <Instructor/>
        <Spacer/>
    </>
  )
}
export default AboutPage