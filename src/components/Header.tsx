// react
import { useEffect, useRef, useState } from "react"
// react-router-dom
import { Link } from "react-router-dom"

export default () => {
  const headerRef = useRef<HTMLElement>(null)
  const [menuOpened, setMenuOpened] = useState(false)

  useEffect(()=>{
    document.addEventListener('scroll', ()=>{
      if(headerRef.current) headerRef.current.style.backgroundColor = window.scrollY ? "#000" : "transparent"
    })
  }, [])

  return (
    <header ref={headerRef}>
      <Link to="/" className="logo">Calupatra</Link>
      <button className={`menu-btn ${menuOpened ? "menu-opened" : "menu-closed"}`} onClick={() => setMenuOpened(prevState => !prevState)}>
        <div className="lines-cont">
          <div className="line" />
          <div className="line" />
          <div className="line" />
        </div>
      </button>
    </header>
  )
}