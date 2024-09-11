import React from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import CategoriesSection from './components/CategoriesSection'
import AboutSection from './components/AboutSection'



const App = () => {
  return (
    <div>
      <Header></Header>
      <HeroSection></HeroSection>
      <CategoriesSection></CategoriesSection>
      <AboutSection></AboutSection>
    </div>
  )
}

export default App
