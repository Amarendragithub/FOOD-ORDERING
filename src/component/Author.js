import NavBar from "./NavBar";
import { UilGithub } from '@iconscout/react-unicons'
import { UilLinkedin } from '@iconscout/react-unicons'

const Author = () => {
    return (
        <div>
            <div className="resturant-menu-navbar">
                <NavBar />
            </div>
            <div className="author-container">
                <h1>Amarendra Sahoo</h1>
                <h3>Student</h3>
                <p>{<UilGithub />}<a href="https://github.com/Amarendragithub" target="_blank"><b>Github</b></a></p>
                <p>{<UilLinkedin />}<a href="https://www.linkedin.com/in/amarendra-sahoo/" target="_blank"><b>LinkedIn</b></a></p>
            </div>
        </div >
    );
};

export default Author;
