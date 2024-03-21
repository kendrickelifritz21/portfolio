import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

export default function Header() {
  return (
    <header className="pt-5 flex flex-row">
      <Link to="/">
        <img src={logo} alt="Logo" className="max-w-20 pl-5"/>
      </Link>
      test test
    </header>
  )
}