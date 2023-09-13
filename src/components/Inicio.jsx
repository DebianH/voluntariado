import { useRef, useState } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { useTransition, animated } from '@react-spring/web'
import styles from './styles.module.css'
import { CardO } from './CardO'
import CardB from './CardB'
import CardT from './CardT'

const url = (name, wrap = false) =>
  `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`

  const slides = [
    'TradeHunter.png',
    // 'onu.png',
  ]

const Inicio = () => {
    const parallax = useRef(null)

    const [index, set] = useState(0)
  const transitions = useTransition(index, {
    key: index,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 3000 },
    onRest: (_a, _b, item) => {
      if (index === item) {
        set(state => (state + 1) % slides.length)
      }
    },
    exitBeforeEnter: true,
  })

  return (
      <div style={{ width: '100%', height: '100%', background: '#6f067a' }}>
      <Parallax ref={parallax} pages={4}>
      <h1>Bienvenid@s Voluntari@s</h1>
        <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#94d18a' }} />
        <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#87BCDE' }} />
        <ParallaxLayer offset={3} speed={1} style={{ backgroundColor: '#5bb84c' }} />
        {/* <ParallaxLayer offset={4} speed={1} style={{ backgroundColor: '#c0c0c0' }} /> */}

        <ParallaxLayer
          offset={0}
          speed={0}
          factor={3}
          style={{
            backgroundImage: url('stars', true),
            backgroundSize: 'cover',
          }}
        />

        <ParallaxLayer offset={1.3} speed={-0.3} style={{ pointerEvents: 'none' }}>
          <img src={url('satellite4')} style={{ width: '15%', marginLeft: '70%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
        </ParallaxLayer>
        {/* tierra */}
        <ParallaxLayer offset={3.3} speed={0.4} style={{ opacity: 0.6 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '10%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '25%', marginLeft: '76%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '45%', marginLeft: '50%' }} />
          {/* <img src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '20%' }} /> */}
        </ParallaxLayer>
        <ParallaxLayer offset={3.8} speed={0.4} style={{ opacity: 0.7 }}>          
          <img src={url('cloud')} style={{ display: 'block', width: '25%', marginRight: '70%', marginTop:"10%" }} />
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={0.4} style={{ opacity: 0.5 }}>          
          <img src={url('cloud')} style={{ display: 'block', width: '25%', marginLeft: '70%', marginTop:"10%" }} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={3.5}
          speed={-0.4}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
          }}>
          <img src={url('earth')} style={{ width: '60%' }} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={-0.3}
          style={{
            backgroundSize: '80%',
            backgroundPosition: 'center',
            // backgroundImage: url('clients', true),
          }}
        >
          {/* <img src={'./convocatoria.jpg'} style={{ width: '30%', marginLeft: '65%', marginTop:"5%" , borderRadius: '10px', boxShadow: '0px 0px 5px white'  }} />  */}
        </ParallaxLayer>
         
        <ParallaxLayer
          offset={0}
          speed={0.1}
          onClick={() => parallax.current.scrollTo(1)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          
          <div className={styles.flex}>
      {transitions((style, i) => (
        <animated.div
        className={styles.bg}
        style={{
          ...style,
          backgroundImage: `url(./${slides[i]})`,
        }}
      />
    ))}
      
    </div>

        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.1}
          onClick={() => parallax.current.scrollTo(2)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <CardO/>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={-0}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={() => parallax.current.scrollTo(3)}>
          {/* <img src={url('clients-main')} style={{ width: '40%' }} /> */}
          <CardT/>
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={-0}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={() => parallax.current.scrollTo(0)}>
          {/* <img src={url('clients-main')} style={{ width: '40%' }} /> */}
          <CardB/>
        </ParallaxLayer>

        <ParallaxLayer offset={3} speed={-0.3} style={{ pointerEvents: 'none' }}>
          <img src={'./summer.png'} id='summer' />
        </ParallaxLayer>
        
      </Parallax>
    </div>

  )
}

export default Inicio
