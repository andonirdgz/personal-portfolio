import logo from "./initials-logo.svg"
import "./styles/home.css"
import { NavLink } from "react-router-dom"

function Home() {
	return (
		<div className='Home'>
			<header className='Home-header'>
				<img src={logo} className='Home-logo' alt='Andoni Rodriguez Initials' />
				<div class='separator'></div>
				<nav>
					<NavLink
						to={"/about"}
						exact='true'
						className={"animate label-name on-hover-40 "}
					/>
					<NavLink
						to={"/work"}
						exact='true'
						className={"animate label-lastname on-hover-40 "}
					/>
					<NavLink
						to={"/contact"}
						exact='true'
						className={"animate label-occupation on-hover-40"}
					/>
				</nav>
			</header>
		</div>
	)
}

export default Home
