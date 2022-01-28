import logo from "./initials-logo.svg"
import "./home.css"

function Home() {
  return (
    <div className='Home'>
      <header className='Home-header'>
        <img src={logo} className='Home-logo' alt='logo' />
      </header>
    </div>
  )
}

export default Home
