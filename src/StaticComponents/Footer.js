import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTelegram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className="footer" id="footer">
            <div className="social-media-ctr" id="contact-us">
                <a target="_blank" href="https://www.facebook.com/neetncertkota"><FontAwesomeIcon icon={faFacebook} /></a>
                <a target="_blank" href="https://www.instagram.com/neetncertkota"><FontAwesomeIcon icon={faInstagram} /></a>
                <a target="_blank" href="https://t.me/neetncertkota"><FontAwesomeIcon icon={faTelegram} /></a>
                <a target="_blank" href="https://www.youtube.com/@neetncertkota"><FontAwesomeIcon icon={faYoutube} /></a>
            </div>
            <div className="footer-copyright-ctr">
                <p className="copyright">© <span className="copyright-current-year"></span> <a className="copyright-company" href="http://www.neetncertkota.com">NEETNCERTKOTA</a> All rights reserved.</p>
            </div>
        </div>
    );
}

export default Footer;