import React from 'react'
import './Pamja.css'
const Pamja = () => {
  return (
    <div>
      <section className="about" id='about'>
       <div className='about-img'>
          <img src="./images/banak.jpg" alt="" />
        </div>
        <div className="about-text">
            <h4>Farmaci Mona</h4>
            <p>Farmaci Mona  gjendet në Yzberisht,ne synojmë që nëpërmjet stafit tonë të kualifikuar
              të përmisojmë jetën e pacienteve tanë duke bërë kujdesin me cilësi të lartë të aksesueshëm dhe të  përshtatshëm.
            </p>
            <p>Ne kemi ndihmuar  mijëra pacientë të marrin trajtimin me recetë që u nevojitet,duke e dorëzuar drejtpërdrejt në shtëpine
              ose vendin e tyre të punës ,në vetëm 24 orë.
            </p>
          
       </div> 
       </section>
    </div>
  )
}

export default Pamja