// react-router-dom
import { Link } from "react-router-dom"

export default () => {
  return (
    <header>
      <Link to="/" className="logo">Calupatra</Link>
      <Link to="/" className="btn">Button</Link>
    </header>
  )
}