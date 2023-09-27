import React from 'react'
import About from '../Lottie/Lottie'
import './AboutUs.css'
const AboutUs = () => {
  return (
    <div className='divAboutUs' id='nosotros'>

    <main className='main'>
      <div className='aboutText'>
        
          <h1>! Bienvenidos  a Generacion <strong style={{color:'#00fff5'}}>Tech</strong> !</h1>
          
        
        <h4 style={{fontWeight:400, textAlign:"center", fontSize:18}}>Somos tu agencia digital para que puedas crecer en el mundo de la tecnologia</h4>
        <hr style={{width: '80%', margin:'auto', marginTop:'3%', marginBottom:'3%'}}/>
        <div style={{width:'70%', textAlign:'center', margin:'auto', marginTop: 20}}>
          <p>¡Bienvenido a una nueva era de posibilidades para tu negocio! Somos Generación Tech una Empresa innovadora especializada en desarrollos y servicios tecnológicos. Nuestro equipo integrado por jóvenes profesionales está dispuesto a llevar tu negocio al siguiente nivel  “El Mercado Digital”</p>
        </div>

        <div className='btnAbout'>
        <a className='btnContactame' href="#contacto">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Contacto
        </a><a className='btnContactame' href="nosotros">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Sobre Nosotros
        </a>
                              
        </div>
      </div>

      <div>
        <About/>
      </div>
    </main>
    </div>
  )
}

export default AboutUs