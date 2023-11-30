import React from 'react'
import Banner from '../components/layout/Banner'
import Facility from '../components/layout/Facility'
import About from '../components/layout/About'

function Home() {
  return (
    <div className="py-2">
      <Banner />
      <Facility />
      <About />
    </div>
  )
}

export default Home