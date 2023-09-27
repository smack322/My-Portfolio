import './AboutMe.css';  // We'll create this CSS file shortly
import selfie from './images/thumbnail.jpg'
function AboutMe() {
    return (
        <section id="about" className="about-section">
            <h2>About Me</h2>
            <img src={selfie} alt="Your Name" className="about-image"/>
            <p>
                Hello! I'm Scott McAnally, a passionate software developer from West Chester, PA. I've been developing web applications for over 5 years. I love turning ideas into reality and am constantly exploring new technologies to stay ahead in the ever-evolving world of web development.

            </p>
            

            <p>During the day, I work with big data analytics by undercovering patterns
                and extracting meaningful insights to help drive business decisions in the financials sector.
            </p>
            <p>
                At night, I spend my time tutoring and helping new aspiring developers on full stack web development. I really enjoy helping others with designing, developing, debugging, deploying and overall guidance. Recently, I've begun doing freelance web development by helping
                a friend create a website for a new business.
            </p>
            
        </section>
    );
}

export default AboutMe;








