import React from 'react'

export default function Apresentacao() {
  return (
    <section className='text-center flex flex-col justify-center px-10 md:px-28 lg:px-50 py-9 font-texto text-black font-medium'>
        <p className='md:mb-5 md:text-lg lg:text-xl'>A Intermares Pousada-Flat localizado na praia de Intermares, em Cabedelo. Oferece hospedagens simples, econômicas, mas charmosas e está situada em um ambiente tranquilo e agradável.</p>
        <p className='md:mb-5 md:text-lg lg:text-xl'>A praia fica a apenas 150 metros de distância e é conhecida por ser a única praia urbana do Brasil onde ocorre a desova da tartaruga marinha da espécie "pente".</p>
          <p className='md:mb-5 md:text-lg lg:text-xl'>Está localizada proxima a restaurantes, padarias, farmácias e academias, além de estar estrategicamente posicionada entre a Praia Fluvial do Jacaré e o Parque Estadual de Areia Vermelha.</p> 
        <a className='underline md:text-lg lg:text-xl hover:text-verde-oliva transition-all duration-500' href="https://api.whatsapp.com/send?phone=558398644064">Faça sua reserva antecipadamente.</a>
    </section>
  )
}
