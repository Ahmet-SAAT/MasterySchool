import React from 'react'
import PageHeader from '../components/common/page-header'
import Spacer from '../components/common/spacer'
import Instructor from '../components/about-page/instructors'
const InstructorPage = () => {
  return (
    <>
        <PageHeader title="Instructors"/>
        <Spacer/>
        <Instructor/>
        <Spacer/>
    </>
  )
}
export default InstructorPage