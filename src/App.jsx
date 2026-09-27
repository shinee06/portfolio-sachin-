import { useState } from "react";
import { motion } from "framer-motion";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
      },
    },
  };

  const fadeIn = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="app">

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <nav className="navbar">

        <div className="logo">
          Sachin<span>.</span>
        </div>

        {/* DESKTOP NAVIGATION */}

        <div className="nav-links">

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#certifications">Certifications</a>
          <a href="#resume">Resume</a>
          <a href="#contact">Contact</a>

        </div>

        {/* MOBILE MENU BUTTON */}

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        {/* MOBILE MENU */}

        <div
          className={`mobile-menu ${
            menuOpen ? "mobile-menu-open" : ""
          }`}
        >

          <a href="#home" onClick={closeMenu}>
            Home
          </a>

          <a href="#about" onClick={closeMenu}>
            About
          </a>

          <a href="#skills" onClick={closeMenu}>
            Skills
          </a>

          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>

          <a href="#education" onClick={closeMenu}>
            Education
          </a>

          <a href="#certifications" onClick={closeMenu}>
            Certifications
          </a>

          <a href="#resume" onClick={closeMenu}>
            Resume
          </a>

          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>

        </div>

      </nav>


      {/* =====================================================
          HOME
      ===================================================== */}

      <section id="home" className="home">

        <div className="home-content">

          <motion.div
            className="status"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
          >
            <span></span>
            AVAILABLE FOR OPPORTUNITIES
          </motion.div>

          <motion.p
            className="small-text"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            HELLO, I'M
          </motion.p>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            Sachin <span>S.N</span>
          </motion.h1>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            AI & Data Science Enthusiast
          </motion.h2>

          <motion.p
            className="description"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            Computer Science student passionate about Artificial
            Intelligence, Data Science and building intelligent
            solutions.
          </motion.p>

          <motion.div
            className="buttons"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >

            <a href="#projects">

              <motion.button
                whileHover={{
                  y: -4,
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.97,
                }}
              >
                View My Projects
              </motion.button>

            </a>

            <a href="#contact">

              <motion.button
                className="secondary-button"
                whileHover={{
                  y: -4,
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.97,
                }}
              >
                Contact Me
              </motion.button>

            </a>

          </motion.div>

        </div>


        {/* AI ORB */}

        <motion.div
          className="ai-orb-container"
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
            delay: 0.4,
          }}
        >

          <div className="ai-orb-glow"></div>

          <motion.div
            className="ai-orb"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          >

            <div className="orb-ring ring-one"></div>
            <div className="orb-ring ring-two"></div>
            <div className="orb-ring ring-three"></div>

            <div className="connection connection-one"></div>
            <div className="connection connection-two"></div>
            <div className="connection connection-three"></div>
            <div className="connection connection-four"></div>

            <div className="orb-node node-one"></div>
            <div className="orb-node node-two"></div>
            <div className="orb-node node-three"></div>
            <div className="orb-node node-four"></div>
            <div className="orb-node node-five"></div>
            <div className="orb-node node-six"></div>

            <motion.div
              className="orb-core"
              animate={{
                scale: [1, 1.08, 1],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
              }}
            >
              AI
            </motion.div>

          </motion.div>

          <motion.div
            className="orb-label label-ai"
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          >
            AI
          </motion.div>

          <motion.div
            className="orb-label label-ml"
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
            }}
          >
            ML
          </motion.div>

          <motion.div
            className="orb-label label-data"
            animate={{
              y: [0, -6, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
          >
            DATA
          </motion.div>

        </motion.div>

      </section>


      {/* =====================================================
          ABOUT
      ===================================================== */}

      <section id="about" className="about">

        <motion.div
          className="section-title"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
        >

          <p>01 — ABOUT</p>

          <h2>Who I Am</h2>

        </motion.div>


        <div className="about-content">

          <motion.div
            className="about-text"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
          >

            <h3>
              Building my path into
              <span> Artificial Intelligence.</span>
            </h3>

            <p>
              I am a Computer Science and Engineering student
              interested in Artificial Intelligence, Data Science
              and software development.
            </p>

            <p>
              I enjoy learning how data, algorithms and intelligent
              systems can be combined to solve real-world problems.
              My current focus is strengthening my programming,
              data analysis and AI skills.
            </p>

            <p>
              I am continuously exploring new technologies and
              working on projects that help me turn what I learn
              into practical applications.
            </p>

          </motion.div>


          <motion.div
            className="about-info"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
          >

            <div className="info-card">
              <span>EDUCATION</span>
              <h4>B.E. CSE</h4>
              <p>
                Sri Krishna College of Engineering and Technology
              </p>
            </div>

            <div className="info-card">
              <span>FOCUS</span>
              <h4>AI & Data</h4>
              <p>
                Artificial Intelligence and Data Science
              </p>
            </div>

            <div className="info-card">
              <span>LOCATION</span>
              <h4>Trichy</h4>
              <p>
                Tamil Nadu, India
              </p>
            </div>

            <div className="info-card">
              <span>GOAL</span>
              <h4>AI Developer</h4>
              <p>
                Building intelligent solutions
              </p>
            </div>

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          SKILLS
      ===================================================== */}

      <section id="skills" className="skills">

        <motion.div
          className="section-title"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
        >

          <p>02 — SKILLS</p>

          <h2>What I Work With</h2>

        </motion.div>


        <motion.p
          className="skills-intro"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
        >
          Technologies and concepts I am currently learning
          and working with.
        </motion.p>


        <div className="skills-grid">

          {/* PROGRAMMING */}

          <motion.div
            className="skill-category"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
          >

            <div className="skill-number">01</div>

            <h3>Programming</h3>

            <div className="skill-list">

              <div className="skill-item">
                <span>Python</span>
                <span>CORE</span>
              </div>

              <div className="skill-item">
                <span>Java</span>
                <span>OOP</span>
              </div>

              <div className="skill-item">
                <span>C</span>
                <span>CORE</span>
              </div>

              <div className="skill-item">
                <span>C++</span>
                <span>CORE</span>
              </div>

            </div>

          </motion.div>


          {/* DATA SCIENCE */}

          <motion.div
            className="skill-category"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
          >

            <div className="skill-number">02</div>

            <h3>Data Science</h3>

            <div className="skill-list">

              <div className="skill-item">
                <span>NumPy</span>
                <span>DATA</span>
              </div>

              <div className="skill-item">
                <span>Pandas</span>
                <span>DATA</span>
              </div>

              <div className="skill-item">
                <span>Matplotlib</span>
                <span>VISUALIZATION</span>
              </div>

              <div className="skill-item">
                <span>Data Analysis</span>
                <span>ANALYSIS</span>
              </div>

            </div>

          </motion.div>


          {/* DATABASE */}

          <motion.div
            className="skill-category"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
          >

            <div className="skill-number">03</div>

            <h3>Database</h3>

            <div className="skill-list">

              <div className="skill-list">

                <div className="skill-item">

                  <span>SQL</span>
                  <span>QUERY</span>

                </div>

                <div className="skill-item">

                  <span>MySQL</span>
                  <span>DATABASE</span>

                </div>

                <div className="skill-item">

                  <span>SQLite</span>
                  <span>DATABASE</span>

                </div>

              </div>

            </div>

          </motion.div>


          {/* AI */}

          <motion.div
            className="skill-category"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
          >

            <div className="skill-number">04</div>

            <h3>AI & Development</h3>

            <div className="skill-list">

              <div className="skill-item">
                <span>Artificial Intelligence</span>
                <span>AI</span>
              </div>

              <div className="skill-item">
                <span>Machine Learning</span>
                <span>ML</span>
              </div>

              <div className="skill-item">
                <span>Git & GitHub</span>
                <span>TOOLS</span>
              </div>

            </div>

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          PROJECTS
      ===================================================== */}

      <section id="projects" className="projects">

        <motion.div
          className="section-title"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
        >

          <p>03 — PROJECTS</p>

          <h2>Selected Work</h2>

        </motion.div>


        <motion.p
          className="projects-intro"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
        >
          A collection of projects where I explore Artificial
          Intelligence, Data Science and software development.
        </motion.p>


        <div className="projects-container">

          {/* PROJECT 01 */}

          <motion.div
            className="project-card"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            whileHover={{
              y: -8,
            }}
          >

            <div className="project-glow"></div>

            <div className="project-top">

              <div>
                <span className="project-number">
                  01
                </span>

                <span className="project-type">
                  AI / BLOCKCHAIN
                </span>
              </div>

              <div className="project-icon">
                ◉
              </div>

            </div>


            <div className="project-content">

              <h3>
                Crypto Trace AI
              </h3>

              <p>
                An AI-assisted blockchain transaction analysis
                project designed to trace wallet activity and
                identify transaction patterns that may indicate
                suspicious or abnormal behaviour.
              </p>


              <div className="tech-stack">

                <span>Python</span>
                <span>AI</span>
                <span>Blockchain</span>
                <span>SQLite</span>
                <span>Data Analysis</span>

              </div>


              <div className="project-bottom">

                <a
                  className="project-button"
                  href="https://github.com/smadhusudhanan2506-lgtm/crypto-trace-ai"
                  target="_blank"
                  rel="noreferrer"
                >
                  View on GitHub
                  <span>↗</span>
                </a>

                <span className="project-status">
                  AI PROJECT
                </span>

              </div>

            </div>

          </motion.div>


          {/* PROJECT 02 */}

          <motion.div
            className="project-card project-placeholder"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            whileHover={{
              y: -8,
            }}
          >

            <div className="project-glow"></div>

            <div className="project-top">

              <div>

                <span className="project-number">
                  02
                </span>

                <span className="project-type">
                  COMING SOON
                </span>

              </div>

              <div className="project-icon">
                +
              </div>

            </div>


            <div className="project-content">

              <h3>
                Next AI Project
              </h3>

              <p>
                Currently exploring new ideas in Artificial
                Intelligence, Machine Learning and Data Science.
                This space will be updated with my next project.
              </p>


              <div className="tech-stack">

                <span>AI</span>
                <span>Machine Learning</span>
                <span>Python</span>

              </div>


              <div className="project-bottom">

                <span className="project-button disabled">
                  In Development
                </span>

                <span className="project-status">
                  2026
                </span>

              </div>

            </div>

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          EDUCATION
      ===================================================== */}

      <section id="education" className="education">

        <motion.div
          className="section-title"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
        >

          <p>04 — EDUCATION</p>

          <h2>Academic Journey</h2>

        </motion.div>


        <div className="education-container">

          {/* COLLEGE */}

          <motion.div
            className="education-card"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
          >

            <div className="education-year">
              2025 — PRESENT
            </div>

            <div className="education-content">

              <h3>
                B.E. Computer Science & Engineering
              </h3>

              <h4>
                Sri Krishna College of Engineering and Technology
              </h4>

              <p>
                Coimbatore, Tamil Nadu
              </p>

            </div>

          </motion.div>


          {/* SCHOOL */}

          <motion.div
            className="education-card"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
          >

            <div className="education-year">
              2024
            </div>

            <div className="education-content">

              <h3>
                Higher Secondary Education
              </h3>

              <h4>
                CBSE Class XII
              </h4>

              <p>
                Sri Vignesh Vidyalaya Senior Secondary Higher
                Secondary CBSE School, Koothoor, Trichy,
                Tamil Nadu
              </p>

              <p>
                Percentage: 70%
              </p>

            </div>

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          CERTIFICATIONS
      ===================================================== */}

      <section
        id="certifications"
        className="certifications"
      >

        <motion.div
          className="section-title"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
        >

          <p>05 — CERTIFICATIONS</p>

          <h2>Learning & Certifications</h2>

        </motion.div>


        <motion.p
          className="certifications-intro"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
        >
          Certifications that support my learning journey in
          Python and Data Science.
        </motion.p>


        <div className="certifications-grid">

          {/* NUMPY */}

          <motion.div
            className="certification-card"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
          >

            <span>
              CERTIFICATE 01
            </span>

            <h3>
              Python NumPy
            </h3>

            <p>
              Certification covering numerical computing
              and array-based operations using NumPy.
            </p>

            <a
              href="/Certificates/numpy.png"
              target="_blank"
              rel="noreferrer"
            >
              View Certificate ↗
            </a>

          </motion.div>


          {/* PANDAS */}

          <motion.div
            className="certification-card"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
          >

            <span>
              CERTIFICATE 02
            </span>

            <h3>
              Python Pandas
            </h3>

            <p>
              Certification covering data manipulation and
              analysis using Pandas.
            </p>

            <a
              href="/Certificates/pandas.png"
              target="_blank"
              rel="noreferrer"
            >
              View Certificate ↗
            </a>

          </motion.div>


          {/* MATPLOTLIB */}

          <motion.div
            className="certification-card"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
          >

            <span>
              CERTIFICATE 03
            </span>

            <h3>
              Python Matplotlib
            </h3>

            <p>
              Certification covering data visualization
              and plotting using Matplotlib.
            </p>

            <a
              href="/Certificates/matplotlib.png"
              target="_blank"
              rel="noreferrer"
            >
              View Certificate ↗
            </a>

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          RESUME
      ===================================================== */}

      <section id="resume" className="resume">

        <motion.div
          className="section-title"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
        >

          <p>06 — RESUME</p>

          <h2>My Resume</h2>

        </motion.div>


        <motion.div
          className="resume-container"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
        >

          {/* RESUME CONTENT */}

          <div className="resume-content">

            <span className="resume-label">
              PROFILE
            </span>

            <h3>
              AI & Data Science
              <br />
              Enthusiast
            </h3>

            <p>
              Computer Science student focused on Artificial
              Intelligence, Data Science, programming and
              building practical technology solutions.
            </p>


            <div className="resume-actions">

              <a
                className="resume-button"
                href="/documents/cv.docx"
                target="_blank"
                rel="noopener noreferrer"
              >
                View CV
                <span>↗</span>
              </a>


              <a
                className="resume-button"
                href="/documents/cv.docx"
                download="Sachin-CV.docx"
              >
                Download CV
                <span>↓</span>
              </a>


              <a
                className="resume-button"
                href="/documents/resume.docx"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Resume
                <span>↗</span>
              </a>

            </div>

          </div>


          {/* RESUME VISUAL */}

          <div className="resume-visual">

            <div className="resume-circle">
              <span>CV</span>
            </div>

            <div className="resume-line"></div>

            <div className="resume-line line-two"></div>

            <div className="resume-line line-three"></div>

          </div>

        </motion.div>

      </section>


      {/* =====================================================
          CONTACT
      ===================================================== */}

      <section id="contact" className="contact">

        <motion.div
          className="section-title"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
        >

          <p>07 — CONTACT</p>

          <h2>Let's Connect</h2>

        </motion.div>


        <div className="contact-container">

          {/* LEFT SIDE */}

          <motion.div
            className="contact-info"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
          >

            <h3>
              Have an idea?
              <br />
              Let's build something.
            </h3>

            <p>
              I am always interested in learning, collaborating
              and exploring opportunities related to Artificial
              Intelligence, Data Science and software development.
            </p>


            <div className="contact-details">

              <div className="contact-item">

                <span>EMAIL</span>

                <a href="mailto:snsachin74@gmail.com">
                  snsachin74@gmail.com
                </a>

              </div>


              <div className="contact-item">

                <span>GITHUB</span>

                <a
                  href="https://github.com/shinee06"
                  target="_blank"
                  rel="noreferrer"
                >
                  github.com/shinee06
                </a>

              </div>


              {/* LINKEDIN */}

              <div className="contact-item">

                <span>LINKEDIN</span>

                <a
                  href="https://www.linkedin.com/in/sachin-s-n-a20193388/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin.com/in/sachin-s-n-a20193388
                </a>

              </div>


              <div className="contact-item">

                <span>LOCATION</span>

                <p>
                  Trichy, Tamil Nadu, India
                </p>

              </div>

            </div>

          </motion.div>


          {/* RIGHT SIDE */}

          <motion.form
            className="contact-form"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you! Your message has been received.");
            }}
          >

            <div className="form-group">

              <label>NAME</label>

              <input
                type="text"
                placeholder="Your name"
                required
              />

            </div>


            <div className="form-group">

              <label>EMAIL</label>

              <input
                type="email"
                placeholder="Your email"
                required
              />

            </div>


            <div className="form-group">

              <label>MESSAGE</label>

              <textarea
                rows="6"
                placeholder="Tell me about your idea..."
                required
              ></textarea>

            </div>


            <button type="submit">
              Send Message →
            </button>

          </motion.form>

        </div>


        {/* FOOTER */}

        <footer className="footer">

          <p>
            © 2026 Sachin S.N. All rights reserved.
          </p>

          <p>
            Built with React & Framer Motion
          </p>

        </footer>

      </section>

    </div>
  );
}

export default App;