import './Footer.css'
import linkedin from './icons/linkedin.svg'
import github from './icons/github.svg'

function Footer() {
    return (
        <footer>
            <img src={github} alt="guithub account" className="github" />
            <h2>Created by RIAD</h2>
            <img src={linkedin} alt="linkedin account" className="linkedin" />
        </footer>
    )
}

export default Footer