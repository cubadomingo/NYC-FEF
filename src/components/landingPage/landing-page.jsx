import React from 'react';
import { Link } from 'react-router';
import styles from './landing-page.scss';

const LandingPage = () => (
  <div className="container">
    <div id="background" className={styles.image} />
    <div id="about" className={styles.about}>
      <br />
      <h1 className="text-center">Our Mission</h1>
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
    <div className={styles.blogEvents}>
      <div className="row">
        <div className="col-md-6 text-center">
          <h1>Events</h1>
          <p>First 3 events will go here.</p>
          <Link to={'/events'} className="btn btn-outline-primary">View All</Link>
        </div>
        <div className="col-md-6 text-center">
          <h1>Blog</h1>
          <p>Last 3 blog posts will go here.</p>
          <Link to={'/events'} className="btn btn-outline-primary">View All</Link>
        </div>
      </div>
    </div>
  </div>
);

export default LandingPage;
