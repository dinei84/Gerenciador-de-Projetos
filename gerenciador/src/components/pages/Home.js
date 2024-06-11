import styles from './Home.module.css'
import savings from '../../img/savings.svg'
import LinkButton from '../layout/LinkButton'

function Home() {
    return (        
        <section className={styles.home_container}>
            <h1>Bem vindo ao <span>Gerenciador de projetos</span></h1>
            <p>Comece a gerenciar seus projetos agora mesmo</p>
            <LinkButton to='/newproject' text='Criar Projeto' />
            <img src={savings} alt='Gerenciador de Projetos' />
        </section>
    )
}

export default Home
