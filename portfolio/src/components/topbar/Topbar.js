import "./topbar.scss";
import { Person, Mail} from "@material-ui/icons";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">
                        Joe Small
          </a>
                    <div className="itemContainer">

                        {/* <Person className="icon" />
                        <span>  <a href="https://github.com/joesmall37">Github</a>    </span> */}

                        <a href="https://www.linkedin.com/in/joe--small/" target="_blank">  <LinkedInIcon className="icon" /></a>

                        <a className="fontawesome" href="https://github.com/joesmall37" target="_blank"> <GitHubIcon className="icon" /> </a>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon" />
                        <span>small.joseph@outlook.com</span>
                    </div>

                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    );
}
