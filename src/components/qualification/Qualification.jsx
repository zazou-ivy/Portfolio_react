import React, { useState } from "react";
import "./qualification.css";
import Wow from "../../assets/wow1.png"; 


const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section section__padding">
      <h2 className="section__title retro__style">Courses & Accomplishments</h2>
      <span className="section__subtitle">I've had the opportunity to expand my knowledge and skills through various courses and competitions. <br></br> Here's a glimpse of the things I've completed along my learning journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            🎓  EDUCATION
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            🖥️ WORK EXPERIENCE
          </div>
        </div>
        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >       
             <img src={Wow} alt="" className="side__img " />
            <div className="qualification__data">
              <div className="block__qualification">
                <h3 className="qualification__title">Bachelor of software development
                </h3>
                <span className="qualification__subtitle">
                  CESI Aix les Milles
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2021 - 2023
                </div>
                <div><h5><b>Stack: </b>  C#, Java JEE, React.Js, Unity, PHP, docker, MySQL, Flutter, Node.Js, HTML, CSS, UML, Git
                </h5></div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div className="block__qualification">
                <h3 className="qualification__title"> IOS development</h3>
                <span className="qualification__subtitle">
                   Simplon.co
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> Avril 2021
                </div>
                <div><h5>-Mastered the basics of Swift programming: variables, data types, control flow, and functions <br></br> -Integrated networking capabilities <br></br> -Designed, built and developed a prototype of a native iOS gaming app</h5></div>
              </div>
            </div>

            <div className="qualification__data">
              <div className="block__qualification" >
                <h3 className="qualification__title"> Web Development</h3>
                <span className="qualification__subtitle">
                  Centrale Mediterannée </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2019 - 2020
                </div>
                <div><h5><b>Stack:</b> HTML/CSS, JavaScript, Angular, Bootstrap, WordPress, PHP, Node.js, MySQL, Unix, MongoDB, WordPress, algorithmic, systems modelling,  Unix, HTTP, REST, Git </h5></div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
              </div>

              <div className="block__qualification">
                <h3 className="qualification__title">Bachelor of science in optometry field</h3>
                <span className="qualification__subtitle">
                St Jerome's university of science
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2015 - 2018
                </div>
                <div><h5>-Learned how to communicate with patients to get detailed case histories <br></br> -Learned how to examine the eyes of patients of all ages to detect signs of injury, disease or
                abnormality <br></br> -Learned how to offer advice for patients choosing frames and lenses
                </h5></div>
              </div>
            </div>
          </div>


          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div className="block__qualification">
                <h3 className="qualification__title">Web developer in apprenticeship</h3>
                <span className="qualification__subtitle">
                SOMEI - France
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2022 - 2023
                </div>
                <div><h5>-Developed backlog tickets from the relationship management solution <br></br> -Fixed all the issues reported on the ERP
                <br></br> -Implemented REST APIs in .NET<br></br> -Wrote SQL statements and stored procedures <br></br> -Collaborated with cross-functional teams
                 to deliver high-quality features on time<br></br> -Implemented a workflow engine for the company to automatize all usual tasks using the ABP
                framework  <br></br> -Implemented CI/CD pipelines using Azure DevOps to automate build, test, and deployment
                processes</h5></div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div className="block__qualification">
                <h3 className="qualification__title">Web developer in apprenticeship</h3>
                <span className="qualification__subtitle">
                M COM Agency - France
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2021 - 2022
                </div>
                <div><h5>-Developed more than 11 websites for different customers  <br></br> -Worked on the SEO for all websites developed  <br></br> -Collaborated with cross-functional teams to
                deliver high-quality websites on time (1 website per week)  <br></br> -Presented technical concepts to non-technical stakeholders, ensuring clear communication and
                alignment <br></br> -Made the UX writing on each website</h5></div>
              </div>
            </div>

            <div className="qualification__data">
              <div className="block__qualification">
                <h3 className="qualification__title">Web developer in internship</h3>
                <span className="qualification__subtitle">POSTLAB - France</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2020
                </div>
                <div><h5>-Developed a system to automate the concordance between videos and texts for the platform <br></br> -Made the responsive design for the entire platform<br></br>-Advised the team with UI/UX notions to make the platform clearer <br></br> -Improved the terminal's platform<br></br>-Documented the wiki software to have an accessible and summary working environment
                </h5></div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
