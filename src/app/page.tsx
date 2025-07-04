'use client'

import { useEffect, useState } from 'react'
import styles from './page.module.css'

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <main className={styles.hero}>
      <div className={styles.heroBackground} />
      <div className={styles.heroGrid} />
      
      {/* インタラクティブな背景 */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.2,
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(102, 126, 234, 0.15), transparent 80%)`
        }}
      />

      {/* パーティクルエフェクト */}
      <div className={styles.particles}>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={styles.particle}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* コンテンツ */}
      <div className={styles.content}>
        <div className={styles.subtitle}>
          Full Stack Developer
        </div>

        <h1 className={styles.title}>
          Ryuta<br />Hayashi
        </h1>

        <p className={styles.tagline}>
          Creating digital experiences through code and design.
        </p>
        <p className={styles.japaneseTagline}>
          コードとデザインでデジタル体験を創造する
        </p>

        <div className={styles.skills}>
          {['React', 'TypeScript', 'Next.js', 'Node.js', 'Python', 'AI/ML'].map((skill) => (
            <span key={skill} className={styles.skill}>
              {skill}
            </span>
          ))}
        </div>

        <div className={styles.cta}>
          <a href="#works" className={styles.primaryButton}>
            <span>Explore My Work</span>
          </a>
          <a href="#contact" className={styles.secondaryButton}>
            Get In Touch
          </a>
        </div>
      </div>

      {/* 3Dキューブ */}
      <div className={styles.cube}>
        <div className={styles.cubeFace} style={{ transform: 'translateZ(40px)' }} />
        <div className={styles.cubeFace} style={{ transform: 'rotateY(90deg) translateZ(40px)' }} />
        <div className={styles.cubeFace} style={{ transform: 'rotateY(180deg) translateZ(40px)' }} />
        <div className={styles.cubeFace} style={{ transform: 'rotateY(-90deg) translateZ(40px)' }} />
        <div className={styles.cubeFace} style={{ transform: 'rotateX(90deg) translateZ(40px)' }} />
        <div className={styles.cubeFace} style={{ transform: 'rotateX(-90deg) translateZ(40px)' }} />
      </div>

      {/* スクロールインジケーター */}
      <div className={styles.scrollIndicator}>
        <span className={styles.scrollText}>SCROLL DOWN</span>
        <div className={styles.scrollMouse}>
          <div className={styles.scrollWheel} />
        </div>
      </div>
    </main>
  )
}
