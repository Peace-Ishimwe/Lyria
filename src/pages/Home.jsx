import React from 'react'
import Header from '../components/Header'
import SubHeader from '../components/SubHeader'
import JumpBackIn from '../components/JumpBackIn'
import FeaturedCreators from '../components/FeaturedCreators'

const Home = () => {
  return (
    <main className='p-[2rem]'>
      <Header />
      <SubHeader />
      <JumpBackIn />
      <FeaturedCreators />
    </main>
  )
}

export default Home