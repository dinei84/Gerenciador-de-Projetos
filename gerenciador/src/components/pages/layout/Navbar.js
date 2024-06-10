import { Link } from "react-router-dom"
import Container from "./Container"
import styles from './Navbar.module.css'
import logo from '../../../img/costs_logo.png'

function Navbar(){
    return(
        <nav class={styles.navbar}>
          <Container>
            <Link to='/'>
                <img src={logo} alt="Gerenciador de projetos"></img>
            </Link>
            <ul class={styles.list}>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/company'>Company</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact</Link>
                </li>
            </ul>
          </Container>
        </nav>
    )
}

export default Navbar