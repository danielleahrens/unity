import React, { Component } from 'react';
import './Rsvp.css'

class Rsvp extends Component {
  state = {
    questionNum: 1
  }

  onNextClick() {
    console.log('this is state', this.state)
    let currentPage = this.state.questionNum;
    let nextPage = currentPage + 1
    if(this.state.rsvp === 'declined') {
      nextPage = 5;
    }
    console.log('nextPage', nextPage)
    this.setState({questionNum: nextPage})
  }

  onBackClick() {
    console.log('this is state', this.state)
    let currentPage = this.state.questionNum;
    let nextPage = currentPage - 1;
    this.setState({questionNum: nextPage})
  }

  render() {
    return (
      <div className="Rsvp">
        <div className="rsvp-wrapper">
          <h1 className="rsvp-h1">RSVP</h1>
          {(this.state.questionNum === 1) ?
            <form>
              <div className="rsvp-section" id="1">
                <h2>Who is RSVP'ing?</h2>
                <div>
                  <p className="rsvp-input-wrapper"><b className="rsvp-input-label">First Name*:</b> <input required className="rsvp-input"></input></p>
                  <p className="rsvp-input-wrapper"><b className="rsvp-input-label">Last Name*:</b> <input required className="rsvp-input"></input></p>
                  <h3>Preferred Method of Contact:</h3>
                  <p className="rsvp-input-wrapper"><b className="rsvp-input-label">Email:</b> <input className="rsvp-input"></input></p>
                  <p className="rsvp-input-wrapper"><b className="rsvp-input-label">Phone Number:</b> <input className="rsvp-input"></input></p>
                </div>
                <h2>Response</h2>
                <div className="rsvp-radio-wrapper">
                  <div>
                    <input type="radio" id="attending" name="rsvp" onClick={() => {this.setState({rsvp: 'accepted'})}}></input>
                    <label for="attending">Look forward to attending!</label>
                  </div>
                  <div>
                    <input type="radio" id="notAttending" name="rsvp" onClick={() => {this.setState({rsvp: 'declined'})}}></input>
                    <label for="notAttending">Regretfully decline</label>
                  </div>
                </div>
                <button className="rsvp-button" type="submit" onClick={this.onNextClick.bind(this)}>Next</button>
              </div>
            </form> : <div/>}

          {(this.state.questionNum === 2) ?
            <form>
              <div className="rsvp-section" id="2">
                <h2>How many people will be in your party?</h2>
                <div>
                  <p className="rsvp-input-wrapper"><b className="rsvp-input-label">Adults:</b> <input className="rsvp-input" type="number" placeholder="0"></input></p>
                </div>
                <div>
                  <p className="rsvp-input-wrapper"><b className="rsvp-input-label">Children:</b> <input className="rsvp-input" type="number" placeholder="0"></input></p>
                </div>
                <h2>Do all members of your party plan to be fully vaccinated for COVID-19 two weeks prior to this event?</h2>
                <div className="rsvp-radio-wrapper">
                  <div>
                    <input type="radio" id="yes" name="vaccinated" onClick={() => {this.setState({vax: 'yes'})}}></input>
                    <label for="yes">Yes I am/we are already fully vaccinated.</label>
                  </div>
                  <div>
                    <input type="radio" id="yesCond" name="vaccinated" onClick={() => {this.setState({vax: 'yesCond'})}}></input>
                    <label for="yesCond">Yes, I/we plan to be vaccinated.</label>
                  </div>
                  <div>
                    <input type="radio" id="no" name="vaccinated" onClick={() => {this.setState({vax: 'noVax'})}}></input>
                    <label for="no">No, I/we don't plan to be vaccinated.</label>
                  </div>
                </div>
                <button className="rsvp-button" onClick={this.onBackClick.bind(this)}>Back</button>
                <button className="rsvp-button" type="submit" onClick={this.onNextClick.bind(this)}>Next</button>
              </div>
            </form>
          : <div/>}
          {(this.state.questionNum === 3) ?
            <form>
              <div className="rsvp-section" id="3">
                <h2>What dietary restrictions do the members of your party have?</h2>
                <p className="rsvp-input-wrapper"><b className="rsvp-input-label">Omnivores:</b> <input className="rsvp-input" type="number" placeholder="0"></input></p>
                <p className="rsvp-input-wrapper"><b className="rsvp-input-label">Vegetarians:</b> <input className="rsvp-input" type="number" placeholder="0"></input></p>
                <p className="rsvp-input-wrapper"><b className="rsvp-input-label">Vegans:</b> <input className="rsvp-input" type="number" placeholder="0"></input></p>
                <p className="rsvp-input-wrapper"><b className="rsvp-input-label">Kids Menu:</b> <input className="rsvp-input" type="number" placeholder="0"></input></p>
                <p className="rsvp-input-wrapper"><b className="rsvp-input-label">Other:</b> <input className="rsvp-input" type="number" placeholder="0"></input></p>
                <button className="rsvp-button" type="submit" onClick={this.onNextClick.bind(this)}>Submit</button>
              </div>
            </form>
            : <div/>}
          {(this.state.questionNum === 4) ?
            <div>
              <h2>We can't wait to celebrate with you!</h2>
              {(this.state.vax === 'yesCond') ?
                <p>The health and safety of our friends and family is very important to us. You indicated that you are not yet fully vaccinated, but that you plan to be fully vaccinated two weeks prior to our celebration. Please contact Danielle once everyone in your party is fully vaccinated.</p>
              : <div/>}
              {(this.state.vax === 'noVax') ?
                <p>The health and safety of our friends and family is very important to us. We are asking all of our guests to make every attempt to be fully vaccinated two weeks prior our celebration. You indicated that not all members of your party will be fully vaccinated with enough time for the immune system to have time to form it's protection. We'd like to understand more about why this is before we will feel comfortable having this/these guests in attendance.</p>
              : <div/>}
              {(this.state.vax === 'yes') ?
                <p>Thank you for RSVP'ing! Please make sure to read through the detail for the {(this.props.display === 'ceremony') ? <p>ceremony</p> : <p>reception</p>}. Contact Danielle if you have any questions or concerns as we approach the day of!</p>
              : <div/>}
            </div>
            : <div/>}
          {(this.state.questionNum === 5) ?
            <div>
              <h2>Thank you for your response!</h2>
              <p>We're sorry we won't be able to celebrate with you.</p>
            </div>
          : <div/>}

        </div>
      </div>
    )
  }
  }


export default Rsvp
