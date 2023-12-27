// import React from 'react'

const CardT = () => {
  return (
    <div>
      <div className="card_b">
      {/* <img src="ben.jpg" alt="Card Image" className='img2'/> */}
      <h3><span className="underlined underline-clip">Buscamos héroes de la infancia para organismo internacional</span></h3>
      <div className="card-content">
        <h4 style={{textAlign: 'center', fontSize: '1.5rem', color: '#0d5e25', letterSpacing:"2px"}}><strong>Trade Hunter</strong></h4>
        <ul className="ul">
            <li><p> +18 años y residir en Quito.</p></li>
            <li><p> Título de educación secundaria.</p></li>
            <li><p> Excelentes habilidades de comunicación, dialogo en público y escucha activa</p></li>
            <li><p> Valoramos el deseo de aprendizaje en lugar de experiencia laboral,  sin necesidad de contar con experiencia laboral previa </p></li>
            <li><p> Habilidad para entablar conversaciones fluidas y abordar de manera efectiva las objeciones</p></li>
            
        </ul>
        <br />
        <hr />
        {/* <p style={{textAlign: 'center', fontSize: '1rem', color: '#87BCDE'}}><strong>¡Envianos tu Cv!</strong> <br /> supervisoruio2@tradehunter.com.ec</p> */}
        <p style={{textAlign: 'center', fontSize: '1rem', color: '#0d5e25', marginBottom: '.5rem', marginTop: '.5rem', letterSpacing:"1px"}}><strong>Que actividades realizarás:</strong></p>
        <ul className="ul_list" style={{paddingInline: '1rem'}}>
          <li >
            <p style={{fontSize: '0.9rem'}}>Realizar conversaciones genuinas con los donates, para obtener informacion acertiva.</p>
          </li>
          <li>
            <p style={{fontSize: '0.9rem'}}>Abordar a personas en calle o en espacios privados.</p>
          </li>
          <li>
            <p style={{fontSize: '0.9rem'}}>Cumplir con metas diarias que involucran la captación de cupones de donantes.</p>
          </li>
          <li>
            <p style={{fontSize: '0.9rem'}}>Estar presto para capaciones continuas con la finalidad de mejora en desempeño profesional.</p>
          </li>
          <li>
            <p style={{fontSize: '0.9rem'}}>Llevar a cabo el seguimiento de las contribuciones de los donantes</p>
          </li>
          <li>
            <p style={{fontSize: '0.9rem'}}>Capacidad para desplazarse y trabajar en diferentes ubicaciones dentro de Quito.</p>
          </li>
        </ul>
      </div>
    </div>
    </div>
  )
}

export default CardT
