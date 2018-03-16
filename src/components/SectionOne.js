import React, { Component } from 'react';

class SectionOne extends Component {
  render(){
    return(
      <div className="section-press">
        <div className="w-container">
          <div className="small-feature-row w-row">
            <div className="w-col-4">
              <div className="feature">
                <img className="feature-icon" width="90" height="90"
                  src="http://uploads.webflow.com/5a8a007a54ea7a0001463f06/5aa7d2bd30ed9504fd98607a_credit-locked%404x.png"
                />
                <h3>Belive It.</h3>
                <p className="paragraph">
                  What you see is what you get: 100% authentic products from Amazon US.
                </p>
              </div>
            </div>
            <div className="w-col-4">
              <div className="feature">
                <img className="feature-icon" width="90" height="90"
                  src="http://uploads.webflow.com/5a8a007a54ea7a0001463f06/5aa7d2bd22defc3887072331_award-55%404x.png"
                />
                <h3>Got Orders?</h3>
                <p className="paragraph">
                  We’ve processed 1,00,000+ orders so far and we’re waiting excitedly to add YOU to that list.
                </p>
              </div>
            </div>
            <div className="w-col-4">
              <div className="feature">
                <img className="feature-icon" width="90" height="90"
                  src="http://uploads.webflow.com/5a8a007a54ea7a0001463f06/5aa7d2bdf64c42ff5e37a00e_delivery-time%404x.png"
                  />
                <h3>16 days or Bust!</h3>
                <p className="paragraph">
                  Our promises are made to be kept. All purchases delivered within 16 days! We’ve even got a 90% success rate to prove it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SectionOne;
