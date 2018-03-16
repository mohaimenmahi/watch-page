import React, { Component } from 'react';

class SectionTwo extends Component {
  render(){
    return(
      <div className="section">
        <div className="container w-container">
          <div className="feature-row w-row">
            <div className="column-5 w-col w-col-6">
              <img
                className="img-1"
                src="http://uploads.webflow.com/5a8a007a54ea7a0001463f06/5a8a06dba6e0f90001b4673b_mens_aa272689-556f-45fe-bb06-50a5ddd3e860_600x.progressive.jpg"
              />
            </div>
            <div className="column w-col w-col-6">
              <h3 className="heading-1">Give him the gift of time</h3>
              <p className="paragraph">The watch maketh the man.
                Surprise him with the timepiece he’s been coveting.
                Or if you’re shopping for yourself, get an exceptional one just because.
                Find exactly what you’re looking for right here.
              </p>
              <a className="btn">SHOP NOW</a>
            </div>
            <div className="feature-row w-row">
              <div className="column w-col w-col-6">
                <h3 className="heading-1">Watch out for her</h3>
                <p className="paragraph">
                  Got your outfit down but there’s something missing?
                  Find a watch from this amazing list that’s just right to have your look on fleek.
                  Oh, wait, you’re just browsing for her?
                  A watch is a gift that you can never go wrong with.
                  Check some out here.
                </p>
                <a className="btn">SHOP NOW</a>
              </div>
              <div className="column-5 w-col w-col-6">
                <img
                  className="img-1"
                  src="http://uploads.webflow.com/5a8a007a54ea7a0001463f06/5aa7df7cf64c42642937c3ed_1-p-500.jpeg" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SectionTwo;
