import './styles.css'
import { ReactComponent as YoutubeIcon } from './youtube.svg'
import { ReactComponent as LinkedinIcon } from './linkedin.svg'
import { ReactComponent as InstagramIcon } from './instagram.svg'

function Footer() {
    return (
        <footer className="main-footer">
            App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
            <div className="footer-icons">
                <a href="https://www.youtube.com/devsuperior" target="_blank" rel="noreferrer">
                    <YoutubeIcon />
                </a>
                <a href="https://www.linkedin.com/school/devsuperior/" target="_blank" rel="noreferrer">
                    <LinkedinIcon />
                </a>
                <a href="https://www.instagram.com/devsuperior.ig" target="_blank" rel="noreferrer">
                    <InstagramIcon />
                </a>
            </div>
        </footer>
    )   
}

export default Footer