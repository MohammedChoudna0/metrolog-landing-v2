import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

function RevealInit() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    const elements = document.querySelectorAll('.reveal')
    elements.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
  return null
}

export default function Layout() {
  return (
    <div className="font-body antialiased text-gray-900 min-h-screen flex flex-col bg-[#FCFCFD] selection:bg-mblue/10">
      <RevealInit />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
