import './styles.css';
import { ReactComponent as LinkedinIcon } from './linkedin.svg';
import { ReactComponent as GithubIcon } from './github.svg';

function Footer() {
  return (
    <footer className="main-footer">
      App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
      <div className="footer-icons">
        <a href="https://github.com/tchfer" target="_new">
          <GithubIcon />
        </a>
        <a href="https://www.linkedin.com/in/tchfernando/" target="_new">
        <LinkedinIcon />
        </a>
      </div>
    </footer>
  )
}

export default Footer;