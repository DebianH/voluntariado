// import React from 'react'

const CardB = () => {
  return (
    <div className="card_b">
      <img src="ben.jpg" alt="Card Image" className='img2'/>
      <div className="card-content">
        <h2 style={{color: '#0d5e25'}}>Únete a nuestro equipo en favor de la infancia!</h2>
        <ul className="ul_b">
            <li><p>6 horas de trabajo</p></li>
            <li><p>Horarios flexibles</p></li>
            {/* <li><p>5 días a la semana puede variar con fines de semana</p></li> */}
            <li><p>$360 dólares base más comisiones sobre meta.</p></li>
            <li><p>Más movilidad</p></li>
            <li><p>Más incentivos</p></li>
            <li><p>Seguro social</p></li>
            <li><p>Excelente ambiente laboral</p></li>
            
        </ul>
        <br />
        <hr />
        <p style={{textAlign: 'center', fontSize: '1rem', color: '#87BCDE'}}><strong>¡Envianos tu Cv!</strong> <br /> supervisoruio2@tradehunter.com.ec</p>
      </div>
    </div>
  )
}

export default CardB