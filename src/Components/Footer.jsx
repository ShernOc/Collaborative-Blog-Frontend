import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Footer(){
    const PresentYear = new Date().getFullYear();
    const text = `Copyright © ${PresentYear}. Sherlyne Ochieng`

    return (
        <>
        {/* The footer is fixed */}
        <footer className='fixed bottom-0 bg-black text-zinc-400 w-full mx-auto '>
            <ul className="flex flex-wrap items-center mb-6  sm:mb-0 font-semibold   sm:justify-between" >
            <li><a href="#" target="_blank" className='hover:underline'><FontAwesomeIcon icon={faLinkedin} />Linkedin</a>
            </li> 
            <li><a href="mailto:sherlynea8622@gmail.com" className='hover:underline'><FontAwesomeIcon icon={faEnvelope} /> sherlynea8622@gmail.com</a></li>
            <li><a href="https://github.com/ShernOc" target="_blank" className='hover:underline'><FontAwesomeIcon icon={faGithub} /> GitHub</a></li>
             </ul>
             <hr className='bg-white border-gray-600'/>
             <ul className='justify-items-center p-3'>
                <li>{text}</li>
             </ul>
        <div className="sm:justify-end">
        </div>
        </footer>
        </>
    )
    }
    
export default Footer;
    