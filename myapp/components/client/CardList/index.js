import React from 'react'
import Card from './Card'

const CardList = () => {
  return (
    <section className='px-4 py-12'>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-screen-xl mx-auto'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />

        </div>
        
    </section>
  )
}

export default CardList