import React from 'react';
import { Link } from 'react-router-dom';
import styles from './landing-page.scss';

const Background = () => (
  <div className={styles.image} />
);

const Information = () => (
  <div>
    <div id="about-us" className={`${styles.about} container`}>
      <h1 className="text-center">Our Mission</h1>
      <br />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed
        pulvinar tellus. Morbi et iaculis leo, vitae gravida urna. Integer
        ullamcorper rhoncus diam quis maximus. Donec tristique elit quis
        tincidunt cursus. Curabitur vehicula eu orci at vestibulum. Fusce sed
        finibus lacus, vitae pretium justo. Sed hendrerit ante ut dui faucibus
        euismod. Curabitur rutrum blandit ullamcorper.
      </p>
      <p>
        Sed enim lacus, pharetra sed augue id, sagittis hendrerit velit.
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
        posuere cubilia Curae; Donec tempor tempor diam, a ultrices diam
        lobortis quis. Pellentesque habitant morbi tristique senectus et netus
        et malesuada fames ac turpis egestas. Nulla vel felis lobortis,
        hendrerit sem quis, imperdiet augue. Sed scelerisque bibendum
        fermentum. Nam condimentum tellus enim, ac lacinia nibh dapibus nec.
        Nulla elementum ex ligula, fringilla vulputate lacus semper dictum.
        Proin fermentum non orci ut sagittis. Maecenas auctor sollicitudin
        mauris eu convallis. Cras sodales porttitor mauris vitae facilisis.
        Suspendisse feugiat dictum est, id consequat tellus posuere a. In
        cursus tempor orci. Sed ultrices convallis mauris, et maximus nulla
        sagittis vitae. Vestibulum ante ipsum primis in faucibus orci luctus et
        ultrices posuere cubilia Curae; Sed leo risus, gravida vel placerat et,
        pretium eu risus.
      </p>
    </div>
  </div>
);

/* eslint-disable global-require */

const Leadership = () => (
  <div className={`${styles.leadership} container text-center`}>
    <h1>{"The Foundation's Leadership"}</h1>
    <br />
    <div className="row">
      <div className="col-md-4">
        <img
          className={styles.portrait}
          src={require('../../assets/images/portrait.jpg')}
          alt="portrait"
        />
        <div className={styles.textbox}>
          <h3>Thomas Hill</h3>
          <p>
            Sed ultrices convallis mauris, et maximus nulla
            sagittis vitae. Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia Curae; Sed leo risus, gravida vel placerat et,
            pretium eu risus.
          </p>
        </div>
      </div>
      <div className="col-md-4">
        <img
          className={styles.portrait}
          src={require('../../assets/images/portrait2.jpg')}
          alt="portrait"
        />
        <div className={styles.textbox}>
          <h3>Paul Jackson</h3>
          <p>
            Sed ultrices convallis mauris, et maximus nulla sagittis vitae.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultric
            posuere cubilia Curae; Sed leo risus, gravida ve placerat et,
            pretium eu risus.
          </p>
        </div>
      </div>
      <div className="col-md-4">
        <img
          className={styles.portrait}
          src={require('../../assets/images/portrait3.jpg')}
          alt="portrait"
        />
        <div className={styles.textbox}>
          <h3>Giselle Davis</h3>
          <p>
            Sed ultrices convallis mauris, et maximus nulla
            sagittis vitae. Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia Curae; Sed leo risus, gravida vel placerat et,
            pretium eu risus.
          </p>
        </div>
      </div>
    </div>
  </div>
)

const GetInvolved = () => (
  <div className={`${styles.donate} container-fluid`}>
    <div className="container">
      <h1 className="text-center">Get Involved</h1>
      <div className="row">
        <div className="col-md-4">
          <h5>Consider <Link to={'/donate'}>donating</Link> to our cause.</h5>
          <p>Vestibulum ante ipsum primis in faucibus orci luctus et
          ultrices posuere cubilia Curae; Sed leo risus, gravida vel placerat et,
          pretium eu risus.Sed scelerisque bibendum
          fermentum. Nam condimentum tellus enim, ac lacinia nibh dapibus nec.</p>
        </div>
        <div className="col-md-4">
          <h5>Help us by volunteering.</h5>
          <p>Vestibulum ante ipsum primis in faucibus orci luctus et
          ultrices posuere cubilia Curae; Sed leo risus, gravida vel placerat et,
          pretium eu risus.Sed scelerisque bibendum
          fermentum. Nam condimentum tellus enim, ac lacinia nibh dapibus nec.</p>
        </div>
        <div className="col-md-4">
          <h5>Subscribe to our newsletter.</h5>
          <p>Vestibulum ante ipsum primis in faucibus orci luctus et
          ultrices posuere cubilia Curae; Sed leo risus, gravida vel placerat et,
          pretium eu risus.Sed scelerisque bibendum
          fermentum. Nam condimentum tellus enim, ac lacinia nibh dapibus nec.</p>
        </div>
      </div>
    </div>
  </div>
)

const LandingPage = () => (
  <div className={styles.landingPage}>
    <Background />
    <Information />
    <Leadership />
    <GetInvolved />
  </div>
);

export default LandingPage;
