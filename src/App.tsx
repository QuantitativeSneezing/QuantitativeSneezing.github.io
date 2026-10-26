import './App.css'
import stormHome from './assets/projects/Storm/Storm homepage.webp'
import stormNoReviews from './assets/projects/Storm/storm screenshot 3.webp'
import stormGamePage from './assets/projects/Storm/Storm game page.webp'
import stormCart from './assets/projects/Storm/Cart screencap.webp'
import stormLibrary from './assets/projects/Storm/library screencap.webp'
import eriscordServer from './assets/projects/Eriscord/eriscord server.webp'
import eriscordLogin from './assets/projects/Eriscord/eriscord pre login.webp'
import eriscordDm from './assets/projects/Eriscord/eriscord DM.webp'
import perceptronConfusion50 from './assets/projects/Perceptron/Confusion_50.webp'
import perceptronConfusion from './assets/projects/Perceptron/Confusion_matrix.webp'
import perceptronCorrelation from './assets/projects/Perceptron/Correlation_matrix.webp'

type Screenshot = {
  src: string
  alt: string
}

type Project = {
  name: string
  href?: string
  description: string[]
  screenshots: Screenshot[]
}

const projects: Project[] = [
  {
    name: 'Storm',
    href: 'https://storm-eoz3.onrender.com/',
    description: [
      "Storm is a full stack clone of Steam, the e-commerce gaming platform. I wanted to clone Steam since it's an interesting mix of an e-commerce platform, with its initial (and still primary) feature being an online video game storefront, and a social network, given the rich community and friend features added by Valve over time. Users can (mock) purchase games and leave reviews on them.",
      "Storm was built using a React frontend and a Flask/SQLAlchemy backend. I'm quite fond of Python in general (features like list comprehension are quite nice), and Flask was a particularly nice fit here because of how easily I could match my API routes to my intended Redux state shape during the project.",
    ],
    screenshots: [
      { src: stormHome, alt: 'Home page' },
      { src: stormNoReviews, alt: 'Game with no reviews' },
      { src: stormGamePage, alt: 'Game with reviews' },
      { src: stormCart, alt: 'Cart page' },
      { src: stormLibrary, alt: 'Game library page' },
    ],
  },
  {
    name: 'Eriscord',
    description: [
      "Eriscord is another React/SQLAlchemy project, this time made in a group setting. We decided to clone Discord to get some experience with websockets and live updating information. I found that aspect quite fun, and learning the new tech was nice. Group collaboration was also a good experience: I learned quite a lot from my teammates, particularly how to efficiently break up pages into many React components to make workflow easier. Functionality wise, the website allows creation of servers and channels within said servers, as well as live messaging through both servers and private DMs with other users.",
    ],
    screenshots: [
      { src: eriscordServer, alt: 'Server messages' },
      { src: eriscordLogin, alt: 'Login splash' },
      { src: eriscordDm, alt: 'DMs' },
    ],
  },
  {
    name: 'Stock Predictor',
    href: 'https://github.com/QuantitativeSneezing/ML_FINAL',
    description: [
      "For a bit of a change of pace, this last project is actually an ML one- something more recent than my web dev journey. It's a perceptron I trained to predict stock prices for a final project in an ML course; specifically, it's a neural net which predicts whether a stock will outperform the market in the long run. I found the experience to be quite interesting, especially getting into the weeds with a real world dataset that's much \"messier\" than the ones we had done in class, and got to make both good and bad decisions about how to handle and modify my data. Pictured are two of the confusion matrices, as well as some correlations from initial exploratory data analysis. The github file does have a full writeup in a jupyter notebook if you're curious about it.",
    ],
    screenshots: [
      { src: perceptronConfusion50, alt: 'Confusion matrix after 50 epochs' },
      { src: perceptronConfusion, alt: 'Confusion matrix for the stock predictor' },
      { src: perceptronCorrelation, alt: 'Correlation matrix from exploratory data analysis' },
    ],
  },
]

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

        <section id="projects">
          <h2>Selected projects</h2>
          {projects.map(({ name, href, description, screenshots }) => (
            <article key={name} className="project">
              <div className="project-text">
                <h3>{href ? <a href={href} className="btn">{name}</a> : name}</h3>
                {description.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
              <div className="gallery">
                {screenshots.map(({ src, alt }) => (
                  <a key={src} href={src}>
                    <img src={src} alt={alt} loading="lazy" />
                  </a>
                ))}
              </div>
            </article>
          ))}
        </section>
      </main>

      <footer id="contact">
        <h2>Contact</h2>
        <address className="contact">
          <dl>
            <div>
              <dt>Email</dt>
              <dd><a href={`mailto:${email}`} className="btn">{email}</a></dd>
            </div>

            <div>
              <dt>Resume</dt>
              <dd><a href={resumeUrl} className="btn">My Resume</a></dd>
            </div>

            <div>
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
            </div>
          </dl>
        </address>
      </footer>
    </>
  )
}

export default App
