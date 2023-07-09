import { useTypewriter, Cursor } from "react-simple-typewriter";

import "./about.styles.scss";

const About = () => {
  const [text] = useTypewriter({
    words: [
      "We are a passionate team of developers who love playing games that are original, creative and fun. We know how hard it is for indie developers to get their games noticed and appreciated by a wider audience. That's why we created indierealm, an online store dedicated  to indie games. At IndieRealm, you can find and buy amazing games from talented and passionate indie studios. Join us at IndieRealm and discover the wonderful world of indie gaming! ",
    ],
    loop: false,
    cursorStyle: "_",
    typeSpeed: 30,
    deleteSpeed: 5000000000,
  });
  return (
    <div className="about-section">
      <div className="writeup">
        <h1>Who Are We ?</h1>
        <span>
          {text} <Cursor />
        </span>

        <div className="game-gif"></div>
      </div>
      <div className="pictures">
        <div className="dev-pic">
          <img className="img" src="images/parru.png" alt="" />
          <h2 className="h2">
            Shaikh Parwez Hasim <br /> (Frontend)
          </h2>
        </div>
        <div className="dev-pic">
          <img src="images/swapnil.jpeg" alt="swapnil" />
          <h2 className="h2">
            Swapnil Sarkar <br /> (Backend & Database)
          </h2>
        </div>
        <div className="dev-pic">
          <img src="images/prat.jpg" alt="pratyaksh" />
          <h2 className="h2">
            Pratyaksh Mehrohtra <br /> (Designer)
          </h2>
        </div>
      </div>
      <div className="footer">
        <div className="brand">
          <h2 className="h2">IndieRealm</h2>
          <p>made with passion </p>
        </div>
        <div className="socials">
          <img
            className="social-logos"
            src="images/instagram.png"
            alt="instagram"
          />
          <img
            className="social-logos"
            src="images/threads.png"
            alt="threads"
          />
          <img
            className="social-logos"
            src="images/twitter.png"
            alt="twitter"
          />
          <img className="social-logos" src="images/steam.png" alt="steam" />
        </div>
        <div className="newsletter">
          <div className="newsletter-container">
            <h2>Subscribe to our Newsletter</h2>
          </div>

          <div className="text-container">
            <input
              type="text"
              placeholder="Email address"
              name="mail"
              required
            />
          </div>

          <div className="submit-container">
            <h2>Subscribe</h2>
          </div>
        </div>
      </div>
      <div className="under-footer">
        <p> Ⓒ IndieRealm 2023, all rights reserved</p>
      </div>
    </div>
  );
};

export default About;
