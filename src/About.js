import './About.css'

function About() {
  return (
    <div className="About">
      <div className="hero-wrapper">
        <div className="about-hero">
          <div>
            <h1 className="text-title">Izaak & Danielle</h1>
            <div className="button-wrapper">
              <a className="button">Contact</a>
              <a className="button">About Us</a>
              <a className="button">What's Next</a>
            </div>
          </div>
        </div>
      </div>
      <div className="about-content">
        <div className="about-contact">
          <i class="fas fa-question"></i>

          Have questions? Contact Danielle:
          <i class="fas fa-envelope footer-link-logo"></i>
          <p>Email: danielle.c.ahrens@gmail.com</p>
          <i class="fas fa-mobile-alt"></i>
          <p>Call or Text: 651-808-1960</p>
        </div>
        <div className="about-us">
          Here's a little bit of a story about us.
        </div>
        <div className="about-next">
          Here's a little bit of a story about what we're doing after we're married.
        </div>
      </div>
    </div>
  )
}

export default About
