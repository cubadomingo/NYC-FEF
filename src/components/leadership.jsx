import React from 'react';
import CSSModules from 'react-css-modules';
import styles from 'styles/leadership.scss';
import portrait from 'assets/images/portrait.jpg';
import portrait2 from 'assets/images/portrait2.jpg';
import portrait3 from 'assets/images/portrait3.jpg';

const Leadership = () => (
  <div styleName="leadership" className="container">
    <h2 className="text-center">Who We Are</h2>
    <br />
    <div className="row">
      <div className="col-lg-4 text-center">
        <img alt="" styleName="portrait" src={portrait} />
        <div styleName="box">
          <h2>Christian Matthews</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quam
            mauris, ornare vitae sodales non, condimentum at eros. Aliquam
            vitae est dolor. Fusce mollis sed diam a sollicitudin. Vestibulum
            ante ipsum primis in faucibus orci luctus et ultrices posuere
            cubilia Curae.
          </p>
        </div>
      </div>
      <div className="col-lg-4 text-center">
        <img alt="" styleName="portrait" src={portrait2} />
        <div styleName="box">
          <h2>Alex Johnson</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quam
            mauris, ornare vitae sodales non, condimentum at eros. Aliquam
            vitae est dolor. Fusce mollis sed diam a sollicitudin. Vestibulum
            ante ipsum primis in faucibus orci luctus et ultrices posuere
            cubilia Curae.
          </p>
        </div>
      </div>
      <div className="col-lg-4 text-center">
        <img alt="" styleName="portrait" src={portrait3} />
        <div styleName="box">
          <h2>Jessica Sampson</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quam
            mauris, ornare vitae sodales non, condimentum at eros. Aliquam
            vitae est dolor. Fusce mollis sed diam a sollicitudin. Vestibulum
            ante ipsum primis in faucibus orci luctus et ultrices posuere
            cubilia Curae.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default CSSModules(Leadership, styles);
