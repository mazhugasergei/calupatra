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

  useEffect(()=>{
    document.body.style.overflow = menuOpened ? "hidden" : "unset"
  }, [menuOpened])

  return (
    <header ref={headerRef}>
      {/* Logo */}
      <Link to="/" className="logo">Calupatra</Link>

      {/* Nav / Menu */}
      <nav className={`${menuOpened ? "menu-opened" : "menu-closed"}`}>
        <ul>
          <li>
            <a href="/">Link One</a>
          </li>
          <li>
            <a href="/">Link Two</a>
          </li>
          <li>
            <a href="/">Link Three</a>
          </li>
        </ul>
      </nav>

      {/* Menu btn */}
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