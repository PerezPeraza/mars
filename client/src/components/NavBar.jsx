
import { Link } from "react-router-dom"

export const NavBar = ()=> {
    return (
        <div>
            <h1>NavBar</h1>
            <Link to={'/'}>Sign Up</Link>
            <Link to={'/login/'}>Log In</Link>
        </div>
    )
}