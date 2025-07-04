'use client'

import { useEffect, useState } from 'react'

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
    <main className="min-h-screen bg-black text-white overflow-hidden">
      {/* ヒーローセクション */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* インタラクティブな背景 */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`
          }}
        />
        
        {/* グリッドエフェクト */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
        </div>

        {/* パーティクルエフェクト */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-500 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        {/* コンテンツ */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
          {/* グリッチエフェクトのタイトル */}
          <div className="mb-8">
            <span className="text-xs md:text-sm text-gray-400 tracking-[0.5em] uppercase font-mono">
              Full Stack Developer
            </span>
          </div>

          {/* メインタイトル */}
          <h1 className="relative text-6xl md:text-8xl lg:text-[10rem] font-bold mb-8">
            <span className="block relative">
              <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 blur-3xl opacity-50">Ryuta</span>
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">Ryuta</span>
            </span>
            <span className="block relative mt-4">
              <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 blur-3xl opacity-50">Hayashi</span>
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">Hayashi</span>
            </span>
          </h1>

          {/* サブタイトル */}
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Creating digital experiences through code and design.
            <span className="block mt-2 text-sm text-gray-500">コードとデザインでデジタル体験を創造する</span>
          </p>

          {/* スキルタグ */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {['React', 'TypeScript', 'Next.js', 'Node.js', 'Python', 'AI/ML'].map((skill) => (
              <span 
                key={skill}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="#works"
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
            >
              <span className="relative z-10 text-white font-medium">Explore My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border border-white/20 rounded-full text-white hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              Get In Touch
            </a>
          </div>
        </div>

        {/* 3Dキューブアニメーション */}
        <div className="absolute top-20 right-20 w-20 h-20 transform-gpu animate-spin-slow">
          <div className="relative w-full h-full transform-style-preserve-3d animate-rotate-3d">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/20" />
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-white/20 transform rotateY-90" />
          </div>
        </div>

        {/* スクロールインジケーター */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-gray-400 tracking-wider">SCROLL DOWN</span>
            <div className="w-6 h-10 border border-white/20 rounded-full flex justify-center py-2">
              <div className="w-1 h-2 bg-white rounded-full animate-bounce" />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
