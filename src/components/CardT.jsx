// import React from 'react'

const CardT = () => {
  return (
    <div>
      <div className="card_b">
      {/* <img src="ben.jpg" alt="Card Image" className='img2'/> */}
      <h3><span className="underlined underline-clip">Te estamos buscando!</span></h3>
      <div className="card-content">
        <h4 style={{textAlign: 'center', fontSize: '1.5rem', color: '#0d5e25', letterSpacing:"2px"}}><strong>Trade Hunter</strong></h4>
        <ul className="ul">
            <li><p> +18 años y residir en Quito.</p></li>
            <li><p> Título de educación secundaria.</p></li>
            <li><p> Excelentes habilidades de comunicación, dialogo en público y escucha activa</p></li>
            <li><p> Deseable experiencia en atención a personas (servicio al cliente, ventas etc.)</p></li>
            <li><p> Facillidad de dialogar y manejar objeciones.</p></li>
            
        </ul>
        <br />
        <hr />
        <p style={{textAlign: 'center', fontSize: '1rem', color: '#87BCDE'}}><strong>¡Envianos tu Cv!</strong> <br /> supervisoruio2@tradehunter.com.ec</p>
      </div>
    </div>
    </div>
  )
}

export default CardT
