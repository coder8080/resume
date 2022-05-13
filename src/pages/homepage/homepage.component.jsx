import { useEffect, useState, useRef } from 'react'
import Profile from '../../assets/profile.png'
import Light from '../../assets/light.pdf'
import Dark from '../../assets/dark.pdf'
import './homepage.styles.scss'

const HomePage = () => {
  const [shown, setShown] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const CVRef = useRef()

  const toggleTheme = () => {
    document.body.classList.toggle('dark-theme')
    setIsDark((prev) => !prev)
  }

  useEffect(() => {
    const oldListener = document.body.onscroll
    document.body.onscroll = () => {
      const scrollPosition = window.scrollY
      if (scrollPosition > 200) {
        setShown(true)
      } else {
        setShown(false)
      }
      oldListener?.()
    }
  })
  return (
    <div className="homepage container" ref={CVRef}>
      <div className="resume-left">
        <section className="section home grid" id="home">
          <div className="data grid">
            <img src={Profile} alt="Me" className="img" />
            <h1 className="title">
              Kolerov <b>Roman</b>
            </h1>
            <h3 className="profession">Web developer</h3>
          </div>
          <div className="address grid">
            <span className="information">
              <i className="bx bx-map icon"></i> Moscow, Russia
            </span>

            <span className="information">
              <i className="bx bx-envelope icon"></i> coder8080@mail.ru
            </span>

            <span className="information">
              <i className="bx bx-phone icon"></i> +7-(968)-477-13-94
            </span>
          </div>
          <i
            className={`bx change-theme ${isDark ? 'bx-sun' : 'bx-moon'}`}
            title="Theme"
            onClick={toggleTheme}
          ></i>
          <a
            className="generate-pdf"
            title="Generate PDF"
            href={isDark ? Dark : Light}
            download={true}
          >
            <i className="bx bx-download"></i>
          </a>
        </section>
        <section className="section social" id="social">
          <h2 className="section-title">Social</h2>
          <div className="social-container grid">
            <a
              href="https://github.com/coder8080"
              className="social-link"
              target="_black"
            >
              <i className="bx bxl-linkedin-square icon"></i>coder8080
            </a>
            <a
              href="https://github.com/coder8080"
              className="social-link"
              target="_black"
            >
              <i className="bx bxl-github icon"></i>coder8080
            </a>
            <a
              href="https://www.youtube.com/channel/UCZKkjxaFoRV2ZnTgnB87CRw"
              className="social-link"
              target="_black"
            >
              <i className="bx bxl-youtube icon"></i>coder8080
            </a>
          </div>
        </section>
        <section className="profile section" id="profile">
          <h2 className="section-title">Profile</h2>
          <p className="profile-description">
            I am a person, responsible with the work during working hours. I
            have been writing code since 10 year age.
          </p>
        </section>
        <section className="education section" id="education">
          <h2 className="section-title">Education</h2>
          <div className="education-container grid">
            <div className="content">
              <div className="time">
                <span className="rounder"></span>
                <span className="line"></span>
              </div>

              <div className="data grid">
                <h3 className="title">Grades 1 - 4</h3>
                <span className="studies">School 1494</span>
                <span className="year">2016-2020</span>
              </div>
            </div>

            <div className="content">
              <div className="time">
                <span className="rounder"></span>
              </div>

              <div className="data grid">
                <h3 className="title">Grades 5 - 7</h3>
                <span className="studies">School 1518</span>
                <span className="year">2020 - 2022</span>
              </div>
            </div>
          </div>
        </section>
        <section className="section projects">
          <h2 className="section-title">Projects</h2>
          <div className="projects-container">
            <ul className="data">
              <li className="name">
                <span className="circle"></span>
                <a
                  href="https://coder8080.github.io/elecar/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Elecar
                </a>
              </li>
              <li className="name">
                <span className="circle"></span>
                <a
                  href="https://coder8080.github.io/Britlex/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Britlex
                </a>
              </li>
              <li className="name">
                <span className="circle"></span>
                <a
                  href="https://coder8080.github.io/warplay.cloud/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Warplay.cloud
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
      <div className="resume-right">
        <section className="section skills" id="skills">
          <h2 className="section-title">Skills</h2>
          <div className="  content grid">
            <ul className="data">
              <li className="name">
                <span className="circle"></span>HTML
              </li>

              <li className="name">
                <span className="circle"></span>CSS
              </li>

              <li className="name">
                <span className="circle"></span>SCSS
              </li>

              <li className="name">
                <span className="circle"></span>JS
              </li>

              <li className="name">
                <span className="circle"></span>React
              </li>

              <li className="name">
                <span className="circle"></span>Redux
              </li>

              <li className="name">
                <span className="circle"></span>Firebase
              </li>
            </ul>
          </div>
        </section>
        <section className="section experience" id="experience">
          <h2 className="section-title">Experience</h2>
          <div className="experience-container grid">
            <div className="content">
              <div className="time">
                <div className="rounder"></div>
                <div className="line"></div>
              </div>
              <div className="data grid">
                <h3 className="title">Node.js repetitor</h3>
                <span className="company">2020</span>
                <p className="description">
                  I have taught a person to wrire full-fledged websites with
                  express.js
                </p>
              </div>
            </div>

            <div className="content">
              <div className="time">
                <div className="rounder"></div>
              </div>
              <div className="data grid">
                <h3 className="title">Vue.js and Express.js repetitor</h3>
                <span className="company">2021</span>
                <p className="description">
                  I have been helping online school student to figure out
                  benefits and gotchas of Vue.js, Express.js and MongoDB.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="section certificates" id="certificates">
          <h2 className="section-title">Certificates</h2>
          <div className="certificates-container grid">
            <div className="content">
              <h3 className="title">
                Winner of the Moscow Student Robototech Olympiad (2020, 2021,
                2022)
              </h3>
              <p className="description">
                I have constructed and written code for real LEGO robot.
              </p>
            </div>

            <div className="content">
              <h3 className="title">
                Winner of the Municipal Student Physics Olympiad
              </h3>
              <p className="description">
                I have wonderfully dealed with city-level physics problems.
              </p>
            </div>

            <div className="content">
              <h3 className="title">
                Yellow (the highest grade) dimplom of Yandex Lyceum
              </h3>
              <p className="description">
                Yandex Lyceum is a program of teaching students to code made by
                the most famous russian IT company - Yandex.
              </p>
            </div>
          </div>
        </section>

        {/* <section className="section references" id="references">
          <h2 className="section-title">References</h2>
          <div className="references-container grid">
            <div className="content grid">
              <span className="subtitle">Product Accounts Officer</span>
              <h3 className="title">Ignacio Rath</h3>
              <ul className="contact">
                <li>Phone: 213.262.1648</li>
                <li>Email: Stuart_Krajcik@gmail.com</li>
              </ul>
            </div>

            <div className="content grid">
              <span className="subtitle">Product Accounts Officer</span>
              <h3 className="title">Ignacio Rath</h3>
              <ul className="contact">
                <li>Phone: 213.262.1648</li>
                <li>Email: Stacey.Konopelski@gmail.com</li>
              </ul>
            </div>
          </div>
        </section> */}
        <section className="section languages" id="languages">
          <h2 className="section-title">Languages</h2>
          <div className="content">
            <ul className="data grid">
              <li className="name">
                <span className="circle"></span> English
              </li>

              <li className="name">
                <span className="circle"></span> Russian
              </li>
            </ul>
          </div>
        </section>
        <section className="section interests" id="interests">
          <h2 className="section-title">Interests</h2>
          <div className="interests-container grid">
            <div className="content">
              <i className="bx bx-headphone icon"></i>
              <span className="name">Music</span>
            </div>

            <div className="content">
              <i className="bx bxs-plane-alt icon"></i>
              <span className="name">Travelling</span>
            </div>

            <div className="content">
              <i className="bx bx-book icon"></i>
              <span className="name">Reading</span>
            </div>

            <div className="content">
              <i className="bx bx-dumbbell icon"></i>
              <span className="name">Sports</span>
            </div>
          </div>
        </section>
      </div>
      <a href="#home" className={`scroll-top${shown ? ' active' : ''}`}>
        <i className="bx bxs-up-arrow-alt icon"></i>
      </a>
    </div>
  )
}

export default HomePage
