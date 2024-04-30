

// import { BsFacebook, BsQuora } from 'react-icons/bs'
import { GrLinkedin } from 'react-icons/gr'
import { SiHashnode } from 'react-icons/si'
import { AiFillGithub } from 'react-icons/ai'
import { FaReddit } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { SiReplit } from "react-icons/si";

const Footer = () => {
    return <div className='adjustFooter'>
        <div className="footer text-center d-flex pt-5 mt-5 justify-content-center align-items-center" >
            <Link to={"https://github.com/TaimoorAli77"} >
                <AiFillGithub className='background-primary' style={{ color: "black", margin: "0px 0.5em" }} />
            </Link>
            <Link to={"https://www.linkedin.com/in/taimoor-ali-2431aa147/"}>
                <GrLinkedin className='background-primary' style={{ color: "#0a66c2", margin: "0px 0.5em" }} />
            </Link>

            <Link to={"https://www.reddit.com/user/TaimoorAliCodeToH"}>
                <FaReddit className='background-primary' style={{ color: "#ff4500", margin: "0px 0.5em" }} />
            </Link>
            <Link to={"https://hashnode.com/@Taim"}>
                <SiHashnode className='background-primary' style={{ color: "#ff4500", margin: "0px 0.5em" }} />
            </Link>
            <Link to={"https://replit.com/@Malik-TaimoorTa"}>
                <SiReplit className='background-primary' style={{ color: "#ff4500", margin: "0px 0.5em" }} />
            </Link>
            <br />
        </div>
        <p className='textColor'>
            2024 @ developed by
            <br />
            Taimoor Ali
            <br />
            All rights reserved.
        </p>
    </div>
}

export default Footer;
