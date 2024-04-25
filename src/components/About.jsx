import React from "react";
import jsIcon from "../assets/icons/js.png";
import htmlIcon from "../assets/icons/html-5.png";
import cssIcon from "../assets/icons/css-3.png";
import reactIcon from "../assets/icons/react.png";
import tailWindIcon from "../assets/icons/tailwind-css.svg";
import firebaseIcon from "../assets/icons/firebase.svg";
import bootstrapIcon from "../assets/icons/bootstrap.png";
import nextjsIcon from "../assets/icons/nextjs.svg";

const About = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <section className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">About Me</h1>
        <p className="text-lg mb-8">
          Hi there! I'm a passionate web developer with a strong foundation in
          bringing designs to life through code. I recently graduated from
          Anadolu University's Web Design and Coding associate degree program
          and I'm constantly striving to improve my skills, particularly in user
          experience (UX).
        </p>

        <h2 className="text-2xl font-semibold mb-4">Skills & Experience</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div>
            <h3 className="text-lg font-medium mb-2">Front-End Development</h3>
            <p className="text-700">
              Proficient in HTML5, CSS3, and JavaScript (ES6+). I'm also
              comfortable using frameworks like React.js and Next.js for
              building modern and interactive user interfaces.
            </p>
            <div className="icon-container">
              <img src={htmlIcon} alt="icon" width="35rem" height="30rem" />

              <img src={cssIcon} alt="icon" width="35rem" height="30rem" />

              <img src={jsIcon} alt="icon" width="35rem" height="30rem" />

              <img src={reactIcon} alt="icon" width="35rem" height="30rem" />

              <img src={nextjsIcon} alt="icon" width="35rem" height="30rem" />

              <img src={tailWindIcon} alt="icon" width="35rem" height="30rem" />

              <img
                src={bootstrapIcon}
                alt="icon"
                width="35rem"
                height="30rem"
              />

              <img src={firebaseIcon} alt="icon" width="30rem" height="30rem" />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2">Design & Performance</h3>
            <p className="text-700">
              I understand the importance of responsive web design (RWD) and
              strive to create websites that perform well across different
              devices. I'm also familiar with SEO best practices.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">
              Development Tools & Practices
            </h3>
            <p className="text-700">
              I use Git for version control and collaboration.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">
              Cloud Services & Backend Integration
            </h3>
            <p className="text-700">
              I have experience integrating with Firebase for authentication,
              Firestore for data storage, and Realtime Database for real-time
              data synchronization.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">Design Thinking</h3>
            <p className="text-700">
              I'm actively learning and applying design thinking principles to
              create user-centered experiences.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-4">Education</h2>

        <div className="mb-8">
          <p>
            2019 - 2023: Department of Korean Language and Literature, Erciyes
            University
          </p>
          <p>
            2020 - 2022: Associate Degree in Web Design and Coding, Anadolu
            University (AÖF)
          </p>
        </div>


        <h2 className="text-2xl font-semibold mb-4">
          Additional Courses & Certifications
        </h2>

        <div className="mb-8">
        <p>
            {" "}
            STEMWOMEN (120 Hours) SistersLab - Association for Women in
            Science and Technology{" "}
          </p>
          <p>
            {" "}
            FrontEnd Academy (120 Hours) SistersLab - Association for Women in
            Science and Technology{" "}
          </p>
          <p>Fundamentals of Graphic Design - CoursEra </p>
          <p>Creative and Design Thinking - Udemy</p>
        </div>

        <h2 className="text-2xl font-semibold mb-4">Languages</h2>

        <div className="mb-8">
          <p>English </p>
          <p>Korean </p>
          <p>Turkish (Native)</p>

          <a href="projects">
            <button className="fancyButton mt-5">
              Let's Continue to Projects
            </button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
