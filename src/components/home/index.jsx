import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './home.scss'

let BackgroundImage = () => (
  <div styleName="background-image">
  </div>
);

BackgroundImage = CSSModules(BackgroundImage, styles);

const About = () => (
  <div className="col-lg-4 text-center">
    <h4>Our Mission</h4>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut efficitur nisi, in hendrerit nisi. Phasellus congue eu sem sit amet tempor. Morbi sapien justo, ornare quis sapien vitae.
    </p>
    <a className="btn btn-outline-secondary">Our Mission</a>
  </div>
);

const Activities = () => (
  <div className="col-lg-4 text-center">
    <h4>Activities</h4>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut efficitur nisi, in hendrerit nisi. Phasellus congue eu sem sit amet tempor. Morbi sapien justo, ornare quis sapien vitae.
    </p>
    <a className="btn btn-outline-secondary">Who Are We</a>
  </div>
);

const GetInvolved = () => (
  <div className="col-lg-4 text-center">
    <h4>Get Involved</h4>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut efficitur nisi, in hendrerit nisi. Phasellus congue eu sem sit amet tempor. Morbi sapien justo, ornare quis sapien vitae.
    </p>
    <a className="btn btn-outline-secondary">Get Involved</a>
  </div>
);

const Leadership = () => (
  <div className="container">
    <h2 className="text-center">Our Leadership</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel libero nec nisi tempor efficitur eu sit amet purus. Praesent a lorem mattis eros malesuada pharetra ut eu enim. Aliquam vel velit leo. Donec vitae arcu ante. Vestibulum egestas mauris et diam efficitur, non malesuada quam interdum. Maecenas rutrum pellentesque quam, vel ornare lacus sagittis scelerisque. Ut sodales, enim in eleifend imperdiet, magna magna egestas lorem, et luctus odio est et leo. Aenean lectus orci, vestibulum eu orci nec, porttitor pharetra tellus. Praesent feugiat aliquam mauris, eu vehicula mi aliquam at. Sed congue, libero quis malesuada suscipit, urna tellus egestas urna, eget pellentesque elit ex eu nibh.
    </p>
    <p>
      Cras faucibus turpis diam. Nam commodo nec arcu a fermentum. Etiam turpis urna, luctus eu tincidunt id, vehicula non urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam venenatis sem eu erat sagittis aliquam. Curabitur et dapibus massa. Sed elementum pulvinar risus. Aliquam ut diam quis eros consequat rutrum. Praesent rhoncus porttitor ex, id tempus risus placerat nec. Pellentesque mattis blandit magna, non scelerisque urna eleifend a. Curabitur quis mi diam. Sed non aliquet justo. Morbi pellentesque arcu quis ultricies mattis.
    </p>
  </div>
);

let Newsletter = () => (
  <div styleName="newsletter" className="container-fluid">
    <h2 className="text-center">Subscribe To Our Newsletter</h2>
    <div className="text-center">
      <input styleName="input" className="form-control"></input>
      <button
        styleName="button"
        className="btn btn-outline-secondary">
        Submit
      </button>
    </div>
  </div>
)

Newsletter = CSSModules(Newsletter, styles)

const InformationRow = () => (
  <div className="container">
    <br />
    <div className="row">
      <About />
      <Activities />
      <GetInvolved />
    </div>
    <br />
  </div>
)

const Home = () => (
  <div>
    <BackgroundImage />
    <Newsletter />
    <InformationRow />
    <Leadership />
  </div>
);

export default Home;
