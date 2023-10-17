import Link from 'next/link'
import style from '@/styles/index.module.scss'
import { Header } from '@/components/Header'
import { Particles } from 'react-tsparticles'
import { loadSlim } from 'tsparticles-slim'
import { useCallback } from 'react'
import type { Container, Engine } from "tsparticles-engine"

export default function Index() {

  const Particle = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
      console.log(engine);

      // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadFull(engine);
      await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
      await console.log(container);
    }, []);

    return (
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "#304d6b",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "repulse",
              },
              onHover: {
                enable: true,
                mode: "bubble",
              },
              resize: true,
            },
            modes: {
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 500,
              enable: false,
              opacity: 0.5,
              width: 2,
            },
            move: {
              direction: "bottom",
              enable: true,
              outModes: {
                default: "out",
              },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 1800,
              },
              value: 400,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 2, max: 10 },
              random: true
            },
          },
          detectRetina: true,
        }}
      />
    )
  }

  return (
    <>
      <Particle />
      <Header title={'Framer Motion.'} />
      <div className={style.wrap}>
        <ul style={{ zIndex: '999', backgroundColor: '#ffffff', width: '80%', height: '50vh' }}>
          <Link href={'./sample/01'}><li>Sample01</li></Link>
          <Link href={'./sample/02'}><li>Sample02</li></Link>
          <Link href={'./sample/03'}><li>Sample03</li></Link>
          <Link href={'./sample/04'}><li>Sample04</li></Link>
          <Link href={'./sample/05'}><li>Sample05</li></Link>
          <Link href={'./sample/06'}><li>Sample06</li></Link>
        </ul>
      </div>
    </>
  )
}