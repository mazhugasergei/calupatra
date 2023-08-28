// react
import { useEffect, useRef } from "react"
// react-router-dom
import { Link } from "react-router-dom"

export default () => {
  const headerRef = useRef<HTMLElement>(null)

  useEffect(()=>{
    document.addEventListener('scroll', ()=>{
      if(headerRef.current) headerRef.current.style.backgroundColor = window.scrollY ? "#000" : "transparent"
    })
  }, [])

  return (
    <header ref={headerRef}>
      <Link to="/" className="logo">Calupatra</Link>
      <Link to="/" className="btn">Get started</Link>
    </header>
  )
}