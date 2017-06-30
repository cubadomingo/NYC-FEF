import React from 'react';
import CSSModules from 'react-css-modules';
import styles from 'styles/faq.scss';

const FAQ = () => (
  <div styleName="FAQ">
    <div className="container">
      <div styleName="text-box">
        <h2 className="text-center">Frequently Asked Questions</h2>
      </div>
      <div styleName="question">
        <h4 className="text-left">
          Vivamus dolor enim, condimentum ac accumsan at?
        </h4>
        <p>
          Sed in risus id dui tristique feugiat. In vel eleifend urna. Sed a bibendum ante. Proin sed pulvinar.
        </p>
      </div>
      <div styleName="question">
        <h4 className="text-left">Morbi ac dui sagittis, malesuada ex non,
          sagittis ex. Proin nec diam leo.?
        </h4>
        <p>
          Duis eget magna at erat hendrerit aliquam ut eu orci. Nullam sit amet sem molestie, dictum lectus sit amet, tempus mi. Sed faucibus bibendum maximus. Morbi ac dui sagittis, malesuada ex non, sagittis ex. Proin nec diam leo.
        </p>
      </div>
      <div styleName="question">
        <h4 className="text-left">
          Sed in risus id dui tristique feugiat. In vel eleifend urna. Sed a bibendum ante. Proin sed pulvinar est?
        </h4>
        <p>
          Sed in risus id dui tristique feugiat. In vel eleifend urna. Sed a bibendum ante. Proin sed pulvinar.
        </p>
      </div>
      <div styleName="question">
        <h4 className="text-left">
          Donec ultrices lacus sed leo laoreet aliquam. Cras eu volutpat ante?
        </h4>
        <p>
          Sed in risus id dui tristique feugiat. In vel eleifend urna. Sed a bibendum ante. Proin sed pulvinar.
        </p>
      </div>
      <div styleName="question">
        <h4 className="text-left">
          Vivamus dolor enim, condimentum ac accumsanat?
        </h4>
        <p>
          Sed in risus id dui tristique feugiat. In vel eleifend urna. Sed a bibendum ante. Proin sed pulvinar.
        </p>
      </div>
    </div>
  </div>
);

export default CSSModules(FAQ, styles);
