import React from 'react'
import banner from './banner.png'

export default function Banner() {
  return (
    <div className='relative flex items-end justify-center'>
        <figcaption className='absolute text-white text-center font-banner mb-6 text-3xl md:text-5xl md:mb-10 lg:text-6xl lg:mb-16'>Intermares Pousada</figcaption>
        <img src={banner} alt="Foto da pousada" className='bg-cover bg-no-repeat bg-center w-full h-[200px] md:h-[300px] lg:h-[500px]'/>
    </div>
  )
}