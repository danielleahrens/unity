import React from 'react';
import './About.css'
import porkies from './images/porkies_trip.JPG'
import washington from './images/IMG_2275.JPG'
import minneapolis from './images/IMG_1099.JPG'
import kaya from './images/IMG_0312.JPG'
import japan from './images/IMG_0793.JPG'

function About() {
  return (
    <div className="About">
      <div className="hero-wrapper">
        <div className="about-hero">
          <div>
            <h1 className="text-title">Izaak & Danielle</h1>
            <div className="button-wrapper">
              <a className="button" href="#contact">Contact</a>
              <a className="button" href="#about-us">About Us</a>
              <a className="button">What's Next</a>
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
            <img className="about-image-left" src={porkies}></img>
            <div className="about-copy-right">
              Danielle grew up in the suburbs of the Twin Cities.Izaak was raised in Iowa City and moved to Madison at the age of 10. It is no surpise that a shared interest in the outdoors brought both of us to Michigan Tech for college in 2010.
            </div>
          </div>
          <div className="about-us-left">
            <div className="about-copy-left">
              Living in the same residence hall, our paths crossed before the first week of classes even started. Meeting at a group bonfire and arranging to attend a group cliff jumping outing the following weekend, put us in each others orbit of friends.By November of freshman year, we were basically dating, but it was not made official until March of freshman year.
            </div>
            <img className="about-image-right" src={porkies}></img>
          </div>
          <div className="about-us-right">
            <img className="about-image-left" src={washington}></img>
            <div className="about-copy-right">
              We remained consistent and steadfast all through college together. Two years of long distance dating started in 2014 at the end of our time in university as we both began navigating our transition into the workforce. Izaak took a semester long co-op to work at Mercury Marine in Oshkosh, while Danielle finished up her final semester.
            </div>
          </div>
          <div className="about-us-left">
            <div className="about-copy-left">
              Then as Danielle moved back to the Twin Cities to start her first job as an engineer in the Medical Device industry, Izaak finished his course work and began attempting to transition from an education in Mechanical Engineering to a career in Software Engineering.
            </div>
            <img className="about-image-right" src={minneapolis}></img>
          </div>
          <div className="about-us-right">
            <img className="about-image-left" src={kaya}></img>
            <div className="about-copy-right">
              We have always been supportive of each other as we take risks in our careers, using each other as our safety net. Izaak gained enough experience while working at a software company in the Upper Peninsula that he was able to move down to the Twin Cities at the start of 2016 to be with Danielle while looking for a job in the Cities.
            </div>
          </div>
          <div className="about-us-left">
            <div className="about-copy-left">
              Danielle worked while supporting the both of us. It was not too long before Izaak landed his job at Target where his career took off. Together we enjoyed living in and experiencing downtown Minneapolis. The year 2017 we got a puppy together and began the process of learning how to raise a well-behaved dog together.
            </div>
            <img className="about-image-right" src={japan}></img>
          </div>
          <div className="about-us-right">
            <img className="about-image-left" src={kaya}></img>
            <div className="about-copy-right">
              In 2018 we moved into the suburbs to be closer to both of our places of work and closer to larger open nature areas to bring Kaya to on a regular basis.
            </div>
          </div>
          <div className="about-us-left">
            <div className="about-copy-left">
              Feeling a bit restless in Minnesota, we also began discussing moving out of the midwest for a while, which included discussions about Danielle making a career change into software engineering.
            </div>
            <img className="about-image-right" src={japan}></img>
          </div>
          <div className="about-us-right">
            <img className="about-image-left" src={kaya}></img>
            <div className="about-copy-right">
              An action packed two years started in 2019: we got engaged in March! Then we got the opportunity to join the Biden for President campaign which ticked the boxes of leaving the midwest, allowed Danielle to make her career change with the added benfit of getting to having an outsized impact on the direction of the country and the world.
            </div>
          </div>
          <div className="about-us-left">
            <div className="about-copy-left">
              Together we set out to Philadelphia and supported each other as we made our way through campaign life.
            </div>
            <img className="about-image-right" src={minneapolis}></img>
          </div>
          <div className="about-us-right">
            <img className="about-image-left" src={kaya}></img>
            <div className="about-copy-right">
              Philadelphia and the campaign solidified in our minds what was important to us and what we wanted our next steps to be after the campaign: a house of our own (we were sick of moving and living in small apartments), lots of green space to roam for us and for Kaya, a quiet & small community to dig our roots into.
            </div>
          </div>
          <div className="about-us-left">
            <div className="about-copy-left">
              The pandemic brought us back to the midwest sooner than expected. After the campaign we moved back to our college town to recover
            </div>
            <img className="about-image-right" src={minneapolis}></img>
          </div>
        </div>
        <div className="about-next">
          Here's a little bit of a story about what we're doing after we're married.
        </div>
      </div>
    </div>
  )
}

export default About
