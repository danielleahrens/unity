import React from 'react';
import './About.css'
import milan from './images/danielle_milan.jpg'
import porkies from './images/porkies_trip.JPG'
import yurt from './images/010.JPG'
import washington from './images/IMG_2275.JPG'
import michigan from './images/IMG_0135.JPG'
import kayaPuppy from './images/IMG_0312.JPG'
import kaya from './images/IMG_2042.JPG'
import japan from './images/IMG_0793.JPG'
import hawaii from './images/IMG_1927.jpg'
import moving from './images/IMG_0216.jpeg'
import campaign from './images/IMG_2005.jpeg'
import up from './images/IMG_0749.JPG'

function About() {
  return (
    <div className="About">
      <div className="hero-wrapper">
        <div className="about-hero">
          <div>
            <h1 className="text-title">Izaak & Danielle</h1>
            <h2 className="about-h2">~ Spring 2022 ~</h2>
            <div className="button-wrapper">
              <a className="button" href="#contact">Contact</a>
              <a className="button" href="#about-us">Our Story</a>
              <a className="button" href="#about-next">What's Next</a>
            </div>
          </div>
        </div>
      </div>
      <div className="about-content">
        <div className="about-contact">
          <div className="about-contact-header-wrapper">
            <a name="contact"></a>
            <i class="fas fa-question about-contact-logo"></i>
            <div className="about-contact-header">
              <h2 className="about-contact-header-h2">Have questions?</h2>
              <h3 className="about-contact-header-h3">Contact Danielle:</h3>
            </div>
          </div>
          <div className="about-contact-info-wrapper">
            <p className="about-contact-info"><i class="fas fa-envelope about-contact-info-logo"></i> <b>Email:</b> <a href="mailto:danielle.c.ahrens@gmail.com">danielle.c.ahrens@gmail.com</a></p>
            <p className="about-contact-info"><i class="fas fa-mobile-alt about-contact-info-logo"></i> <b>Call or Text:</b> <a href="tel:651-808-1960">651-808-1960</a></p>
          </div>
        </div>
        <div className="about-us">
          <a name="about-us"></a>
          <h2 className="text-title">About Us</h2>
          <div className="about-us-right">
            <img className="about-image-left" src={milan}></img>
            <div className="about-copy-right">
              Danielle grew up in the suburbs of the Twin Cities. Izaak was raised in Iowa City and moved to Madison at the age of 10. It is no surpise that a shared interest in the outdoors brought both of us to Michigan Tech for college in 2010.
            </div>
          </div>
          <div className="about-us-left">
            <img className="about-image-right" src={porkies}></img>
            <div className="about-copy-left">
              Living in the same residence hall, our paths crossed before the first week of classes even started. Meeting at a group bonfire and cliff jumping together the following weekend, quickly put us in each other's orbit of friends. By November of freshman year, we were basically dating, but it was not made official until March of freshman year.
            </div>
          </div>
          <div className="about-us-right">
            <img className="about-image-left" src={yurt}></img>
            <div className="about-copy-right">
              We remained consistent and steadfast all through college together. Two years of long distance dating started in 2014 at the end of our time in university as we both began navigating our transition into the workforce. Izaak took a semester long co-op at Mercury Marine in Oshkosh, while Danielle finished up her final semester.
            </div>
          </div>
          <div className="about-us-left">
            <img className="about-image-right" src={washington}></img>
            <div className="about-copy-left">
              As Danielle moved back to the Twin Cities to start her first job as an engineer in the Medical Device industry, Izaak finished his course work and began attempting to transition from an education in Mechanical Engineering to a career in Software Engineering.
            </div>
          </div>
          <div className="about-us-right">
            <img className="about-image-left" src={michigan}></img>
            <div className="about-copy-right">
              We have always been supportive of each other as we take risks in our careers, using each other as our safety net. Izaak gained enough experience while working in the Upper Peninsula that he was able to move down to the Twin Cities at the start of 2016 to be with Danielle while looking for a job in the Cities.
            </div>
          </div>
          <div className="about-us-left">
            <img className="about-image-right" src={kayaPuppy}></img>
            <div className="about-copy-left">
              Danielle worked while supporting the both of us. It was not too long before Izaak landed his job at Target where his career took off. Together we enjoyed living in and experiencing downtown Minneapolis.
            </div>
          </div>
          <div className="about-us-right">
            <img className="about-image-left" src={kaya}></img>
            <div className="about-copy-right">
              In the year 2017 we got Kaya and began the process of learning how to raise a dog together. In 2018 we moved into the suburbs to be closer to our places of work and to larger open nature areas to bring Kaya to on a regular basis.
            </div>
          </div>
          <div className="about-us-left">
            <img className="about-image-right" src={japan}></img>
            <div className="about-copy-left">
              Feeling a bit restless in Minnesota, we also began discussing moving out of the midwest for a while, which included conversations about Danielle making a career change into software engineering.
            </div>
          </div>
          <div className="about-us-right">
            <img className="about-image-left" src={hawaii}></img>
            <div className="about-copy-right">
              An action packed two years started in 2019: we got engaged in March! Then we got the opportunity to join the Biden for President campaign which ticked the boxes of leaving the midwest, Danielle could make her career change with the added benfit of  having an outsized impact on the direction of the country and the world.
            </div>
          </div>
          <div className="about-us-left">
            <img className="about-image-right" src={moving}></img>
            <div className="about-copy-left">
              Together we set out to Philadelphia and supported each other as we made our way through campaign life.
            </div>
          </div>
          <div className="about-us-right">
            <img className="about-image-left" src={campaign}></img>
            <div className="about-copy-right">
              Philadelphia and the campaign solidified in our minds what was important to us and what we wanted our next steps to be after the campaign: a house of our own (we were sick of moving and living in small apartments), lots of green space to roam for us and for Kaya, a quiet & small community to dig our roots into.
            </div>
          </div>
          <div className="about-us-left">
            <img className="about-image-right" src={up}></img>
            <div className="about-copy-left">
              The pandemic brought us back to the midwest sooner than expected. After the campaign we moved back to our college town to recover
            </div>
          </div>
        </div>
        <div className="about-next">
          <a name="about-next"></a>
          <h2 className="text-title">What's Next</h2>
          Here's a little bit of a story about what we're doing after we're married.



        </div>
      </div>
    </div>
  )
}

export default About
