import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>I'm a passionate full-stack software engineer who loves working with Java, Python, and modern frameworks like Spring Boot and FastAPI to build cool microservices and AI-powered applications. I enjoy tackling challenges with cloud platforms (AWS, GCP), distributed systems (Kafka, Redis), and databases, always aiming to create smooth, high-performing solutions that users actually love. I'm constantly learning and exploring new technologies to stay ahead of the curve and bring fresh ideas to every project. </p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Java SpringBoot skill meter" />
                                <h5>Java-SpringBoot</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Python Flask skill meter" />
                                <h5>Python-Flask</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="React Node skill meter" />
                                <h5>React-Node</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="SQL MongoDB skill meter" />
                                <h5>SQL-MongoDB</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Background decoration" />
    </section>
  )
}
