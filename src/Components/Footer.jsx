// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEnvelope } from "@fortawesome/free-regular-svg-icons/faEnvelope";
// import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
// import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Footer(){
    const PresentYear = new Date().getFullYear();
    const text = `Copyright © ${PresentYear} Sherlyne Ochieng  `

    return (
        <>
        <div id="contacts" >
            <h1>Footer</h1>
            <ul >
            {/* <li><a href="mailto:sherlynea8622@gmail.com"><FontAwesomeIcon icon={faEnvelope} /> sherlynea8622@gmail.com</a></li>
            <li><a href="#" target="_blank"><FontAwesomeIcon icon={faLinkedin} />Linkedin</a>
            </li>
            <li><a href="https://github.com/ShernOc" target="_blank"><FontAwesomeIcon icon={faGithub} /> GitHub</a></li> */}
            </ul>
        </div>

        {text} 
        </>
    )
    }
    
export default Footer;
    