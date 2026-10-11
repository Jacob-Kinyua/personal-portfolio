import "./App.css";

function App() {
  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <a href="#home" className="logo">
          Jacob Kinyua
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <main>
        <section id="home" className="hero">
          <div className="hero-content">
            <p className="eyebrow">COMPUTER SCIENCE STUDENT</p>

            <h1>
              Hi, I'm <span>Jacob Kinyua</span>.
            </h1>

            <p className="hero-description">
              I build software and enjoy solving problems through technology.
              I'm interested in software engineering, cybersecurity, and
              building applications that have a practical impact.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="button primary">
                View My Projects
              </a>

              <a
                href="/resume.pdf"
                className="button secondary"
                target="_blank"
                rel="noreferrer"
              >
                View Resume
              </a>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="section">
          <p className="section-label">01 — ABOUT</p>

          <h2>A little about me.</h2>

          <p className="section-text">
            I'm a Computer Science student at New York UNiversity interested in
            software engineering, backend development, and cybersecurity. I
            enjoy learning by building projects and working on problems that
            challenge me to understand how systems work.
          </p>
        </section>

        {/* Projects */}
        <section id="projects" className="section">
          <p className="section-label">02 — PROJECTS</p>

          <h2>Things I've built.</h2>

          <div className="projects-grid">
            <article className="project-card">
              <div>
                <p className="project-number">01</p>
                <h3>Inspiration Emailer</h3>

                <p>
                  Built a web application that allows users to receive daily emails on 
                  successful people who have achieved the goals and interests the user is pursuing while
                  also offering actionable steps that may help the user get closer to their goal.
                </p>

                <div className="technologies">
                  <span>Python</span>
                  <span>FastAPI</span>
                  <span>React</span>
                  <span>PostgreSQL</span>
                  <span>Gemini API</span>
                  <span>Resend</span>
                </div>
              </div>

              <a href="https://motivdaily.netlify.app/" className="project-link">
                View Project →
              </a>
            </article>
            <article className="project-card">
              <div>
                <p className="project-number">03</p>
                <h3>Amazon price tracker</h3>

                <p>
                  Created a simple Amazon price tracker that showcases the historical price of a product 
                  and sends an email when a product's price hits a user defined target.
                </p>

                <div className="technologies">
                  <span>Python</span>
                  <span>Flask</span>
                  <span>Scrapingdog</span>
                  <span>PostgreSQL</span>
                  <span>Resend</span>
                </div>
              </div>

              <a href="https://pricewatch-f48i.onrender.com/" className="project-link">
                View Project →
              </a>
            </article>

            <article className="project-card">
              <div>
                <p className="project-number">02</p>
                <h3>Weather Recommender</h3>

                <p>
                  Developed a simple web application that displays the weather conditions of a particular city as directed by the user
                  and provides recommendations on what the user should wear based on the weather conditions in a particular
                  location.
                </p>

                <div className="technologies">
                  <span>JavaScript</span>
                  <span>HTML</span>
                  <span>CSS</span>
                </div>
              </div>

              <a href="https://jacob-kinyua.github.io/weather-recommender/" className="project-link">
                View Project →
              </a>
            </article>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="section">
          <p className="section-label">03 — SKILLS</p>

          <h2>Technologies I work with.</h2>

          <div className="skills">
            <div className="skill-group">
              <h3>Languages</h3>
              <p>Python · JavaScript · C++ · SQL · Ruby · HTML · CSS</p>
            </div>

            <div className="skill-group">
              <h3>Frontend</h3>
              <p>React · Next.js · Bootstrap · Responsive Web Design</p>
            </div>

            <div className="skill-group">
              <h3>Backend</h3>
              <p>Flask · FastAPI · Ruby on Rails · REST APIs · Node.js</p>
            </div>

            <div className="skill-group">
              <h3>Databases</h3>
              <p>PostgreSQL · MySQL · Supabase</p>
            </div>

            <div className="skill-group">
              <h3>DevOps & Cloud</h3>
              <p>Docker · Kubernetes · Linux · Git · GitHub · Render · Netlify</p>
            </div>

            <div className="skill-group">
              <h3>APIs & Integrations</h3>
              <p>Gemini API · Resend · Twilio · Web Scraping · Third-Party APIs</p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="contact-section">
          <p className="section-label">04 — CONTACT</p>

          <h2>Let's connect.</h2>

          <p>
            I'm always interested in connecting with people working on
            interesting projects and opportunities.
          </p>

          <div className="contact-links">
            <a href="mailto:kinyuajacob303@gmail.com.com?subject=Portfolio%20Inquiry&body=Hello%20Jacob,">Email</a>
            <a href="https://github.com/Jacob-Kinyua" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/jacob-kinyua/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </main>

      <footer>
        <p>© 2026 Jacob Kinyua</p>
      </footer>
    </div>
  );
}

export default App;