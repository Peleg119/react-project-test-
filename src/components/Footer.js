import twitter from "../images/twitter.png";
import insta from "../images/isnta.jpg";
import face from "../images/facebook.png";
import git from "../images/git.png";
import link from "../images/link.png";

export default function Footer() {
  return (
    <div className="links">
      <a href='https://www.facebook.com/' target='_blank'>
        <img className='facebook' src={face} alt="Logo" />
      </a>
      <a>
        <img className='linkdin' src={link} alt="Logo" />
      </a>
      <a>
        <img className='git' src={git} alt="Logo" />
      </a>
      <a>
        <img className='isntagram' src={insta} alt="Logo" />
      </a>
      <a>
        <img className='twitter' src={twitter} alt="Logo" />
      </a>
    </div>
  );
}
