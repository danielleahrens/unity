import './Home.css';
import hero from './images/IMG_2409.JPG';

function Home() {
  return (
    <div className="Home">
        <div className="hero">
            <div className="hero-image-wrapper">
                <div className="tape"/>
                <img className="hero-image" src={hero} alt='Danielle and Izaak'></img>
            </div>
            <h1 className="home-h1">Danielle & Izaak</h1>
        </div>
        <div className="wedding">
            <h2>Wedding Ceremony</h2>
            <div className="details">07 • 07 • 2022</div>
            <div className="details">St. Paul, MN</div>
        </div>
        <div className="reception">
            <h2>Open House Celebration</h2>
            <div className="details">07 • 09 • 2022</div>
            <div className="details">Oak Grove, MN</div>
        </div>
        <div className="copy-wrapper">
            <p className="copy">We look forward to celebrating all of Saturday with our friends and family at our open house after our small wedding ceremony earlier in the week.</p>
            <p className="copy">We encourage everyone who is attending to be fully vaccinated and boosted. Everyone should take an over-the-counter rapid COVID-19 test on Saturday morning before arriving, and only come if the test is negative. If you can’t find a test, let us know! We ask that non-vaccianted people wear a mask while indoors.</p>
            <p className="copy">We can't wait to see you!</p>
            <h3>Danielle & Izaak</h3>
        </div>
        <div className="home-contact">
            <h2>Questions?</h2>
            <p className="home-contact-info"><i class="fas fa-envelope home-contact-info-logo"></i> <b>Email:</b> <a href="mailto:danielle.c.ahrens+wedding@gmail.com" className="size-break">danielle.c.ahrens@gmail.com</a></p>
            <p className="home-contact-info"><i class="fas fa-mobile-alt home-contact-info-logo"></i> <b>Call or Text:</b> <a href="tel:651-808-1960" className="size-break">651-808-1960</a></p>
        </div>
    </div>
  )
}

export default Home