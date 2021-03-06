import './Footer.css'
import linkedin from './icons/linkedin.svg'
import github from './icons/github.svg'

function Footer() {
    return (
        <footer>
            <a href="https://github.com/Houssamer" target="_blank">
                <img src={github} alt="guithub account" className="github" />
            </a>
            <h2>Created by RIAD</h2>
            <a href="https://www.linkedin.com/in/houssame-riad-25943b1b7/" target="_blank">
                <img src={linkedin} alt="linkedin account" className="linkedin" />
            </a>
        </footer>
    )
}

export default Footer