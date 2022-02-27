import React from 'react'
import Image from '../../components/Image'
import { changeAppTitle } from '../../utils/helpers'
import './style.scss'

function Home () {
  changeAppTitle('Home')
  const imageURL = 'https://www.ageofempires.com/wp-content/themes/ageOfEmpires/dist/images/heros/hero-homepage-4k.jpg'
  return (
    <div className='container'>
        <Image src={imageURL} width={'60%'} height={'60%'}></Image>
    </div>
  )
}

export default Home
