import "./About.css"
import AboutMe from "../images/about-me.jpeg"

const About = () => {
    return (
        <section  className="about-me" id="about">
            <div  className="container">
            <div  className="title-container">
                <p  className="title">about me</p>
            </div>  
            <div  className="about-content">
                <div  className="about-content-img">
                    <div  className="img-background">
                        <img src={AboutMe} alt="about-me"/>
                    </div>
                  
                </div>
                <div  className="about-content-text">

                    <p>Hello there! 👋 I'm Saurabh Sahani, a passionate college student based in India. Here's a glimpse into who I am and what I love:</p>
                
                    <h3>Tech Enthusiast:</h3>
                    <p>As a perpetual learner, I thrive on challenges and am deeply immersed in the world of full-stack development. From crafting the front-end user experience to designing robust back-end systems, I'm fascinated by the intricacies of creating seamless and efficient web applications.</p>
                
                    <h3>What Inspires Me:</h3>
                    <p>I draw inspiration from the creative process of web development and the endless possibilities it presents. The ability to turn ideas into tangible, interactive experiences motivates me to dive deeper into the world of coding.</p>

                
                    <h3>Personal Touch:</h3>
                    <p>Beyond my studies, you'll find me experimenting with HTML, crafting styles with CSS, and adding interactivity with JavaScript. I believe in the power of hands-on learning and enjoy the process of turning concepts into real, functional web pages.</p>

                
                    <h3>Let's Connect:</h3>
                    <p>I'm on a continuous learning journey and open to connecting with fellow learners, developers, and enthusiasts. If you're also exploring the world of web development or have insights to share, let's connect and learn together!</p>
                </div>
            </div>    
        </div>
        </section>
    );
}

export default About;