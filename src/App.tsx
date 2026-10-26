import './App.css'

type ContactLink = {
  label: string
  href: string
}

const email = 'jason.arnold56@gmail.com'
const resumeUrl = 'https://github.com/QuantitativeSneezing/Resume'

const socialLinks: ContactLink[] = [
  { label: 'GitHub', href: 'https://github.com/QuantitativeSneezing' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jason-arnold-539005183/' },
  { label: 'Instagram', href: 'https://www.instagram.com/jatsburgern/' },
  { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=100005356307160' },
  { label: 'Wellfound', href: 'https://wellfound.com/u/jason-rolando-arnold' },
]

function App() {

  return (
    <>
      <header>
        <h1>Jason Arnold</h1>
      </header>

      <main>
        <p className="main-text">
          Hi, I'm Jason, and I'm a software engineer. I'm currently pursuing a master's degree in Computer Science at the university of Colorado Boulder. I also love debugging, which is
          very convenient for anyone I work with. I've got a background in economics, which is where I learned that I love optimization problems.
          In my spare time, I like to play video games, watch anime, and explain monetary policy to anyone who is mildly interested. If my portfolio interests you, feel free to <a href="#contact" className="btn">contact me</a>.
        </p>
      </main>

      <footer id="contact">
        <h2>Contact</h2>
        <address className="contact">
          <dl>
            <dt>Email</dt>
            <dd><a href={`mailto:${email}`} className="btn">{email}</a></dd>

            <dt>Resume</dt>
            <dd><a href={resumeUrl} className="btn">My Resume</a></dd>

            <dt>Elsewhere</dt>
            <dd>
              <ul>
                {socialLinks.map(({ label, href }) => (
                  <li key={label}>
                    <a href={href} className="btn">{label}</a>
                  </li>
                ))}
              </ul>
            </dd>
          </dl>
        </address>
      </footer>
    </>
  )
}

export default App
