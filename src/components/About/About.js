import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
            Hello! My name is <strong>Atharv Talnikar</strong>, a passionate and driven software engineer currently pursuing my Master’s in Computer Science at Northeastern University. My journey in technology began with a strong foundation in computer science, and I’ve spent the past few years honing my skills in backend development, cloud computing, and system architecture.
            </ScrollAnimation>

            <br /><br />
            
            <ScrollAnimation animateIn="fadeInLeft">
            My professional experiences at DISH Network Technologies have given me the opportunity to work on large-scale systems and cloud-based services, where I’ve contributed to building and enhancing features that directly impact users. Additionally, I have solid experience working with JavaScript, creating dynamic, scalable applications. I thrive in collaborative environments and enjoy solving complex problems with innovative solutions.
            </ScrollAnimation>

            <br /><br />

            <ScrollAnimation animateIn="fadeInLeft">
            I am deeply interested in backend development and cloud computing, and I’m actively seeking opportunities to gain experience in AI/ML roles to further expand my skill set. I am always learning, adapting, and looking for new challenges that can push me to grow in these fields.
            Outside of work, I love spending time outdoors, playing sports like basketball and badminton, and participating in cultural celebrations. I am a firm believer in work-life balance and enjoy disconnecting from work during weekends to refresh and recharge.
              <div className="tagline2">
                I have become confident using the following technologies:
              </div>
            </ScrollAnimation>
            

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>

        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
