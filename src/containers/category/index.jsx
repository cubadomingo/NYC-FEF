import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './index.scss';

class Category extends React.Component {

  static bodyText(title) {
    switch (title) {
      case 'Initiatives':
        return (
          <div styleName="body-text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              sit amet convallis erat. Sed sodales consectetur magna et
              blandit. Donec ac sapien eros. Mauris at massa nec dolor viverra
              feugiat at id erat. Nunc congue libero eu congue mattis. Donec
              quis faucibus tortor. Ut quis ante eleifend, rhoncus ante eget,
              faucibus nibh. Morbi dignissim et sem tempor condimentum. Sed
              quis imperdiet lectus. Morbi aliquam id massa dignissim
              vulputate. Nulla ante velit, euismod sit amet dapibus a, sodales
              ut eros. Phasellus sed semper augue.
            </p>

            <p>
              Phasellus rutrum dolor ligula, a tincidunt tortor laoreet ut. Sed lacinia quam arcu, non ultricies elit convallis id. Proin eget suscipit nunc. Suspendisse sed ligula sit amet libero sagittis commodo. Cras eu neque id leo sollicitudin tincidunt sed finibus odio. Suspendisse vulputate neque at tincidunt ultrices. Mauris libero dui, lacinia gravida molestie vitae, eleifend laoreet velit.
            </p>
          </div>
        );
      case 'Events':
        return (
          <div styleName="body-text">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet convallis erat. Sed sodales consectetur magna et blandit. Donec ac sapien eros. Mauris at massa nec dolor viverra feugiat at id erat. Nunc congue libero eu congue mattis. Donec quis faucibus tortor. Ut quis ante eleifend, rhoncus ante eget, faucibus nibh. Morbi dignissim et sem tempor condimentum. Sed quis imperdiet lectus. Morbi aliquam id massa dignissim vulputate. Nulla ante velit, euismod sit amet dapibus a, sodales ut eros. Phasellus sed semper augue.</p>

            <p>Phasellus rutrum dolor ligula, a tincidunt tortor laoreet ut. Sed lacinia quam arcu, non ultricies elit convallis id. Proin eget suscipit nunc. Suspendisse sed ligula sit amet libero sagittis commodo. Cras eu neque id leo sollicitudin tincidunt sed finibus odio. Suspendisse vulputate neque at tincidunt ultrices. Mauris libero dui, lacinia gravida molestie vitae, eleifend laoreet velit.</p>
          </div>
        );
      case 'Scholarships':
        return (
          <div styleName="body-text">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet convallis erat. Sed sodales consectetur magna et blandit. Donec ac sapien eros. Mauris at massa nec dolor viverra feugiat at id erat. Nunc congue libero eu congue mattis. Donec quis faucibus tortor. Ut quis ante eleifend, rhoncus ante eget, faucibus nibh. Morbi dignissim et sem tempor condimentum. Sed quis imperdiet lectus. Morbi aliquam id massa dignissim vulputate. Nulla ante velit, euismod sit amet dapibus a, sodales ut eros. Phasellus sed semper augue.</p>
            <p>Phasellus rutrum dolor ligula, a tincidunt tortor laoreet ut. Sed lacinia quam arcu, non ultricies elit convallis id. Proin eget suscipit nunc. Suspendisse sed ligula sit amet libero sagittis commodo. Cras eu neque id leo sollicitudin tincidunt sed finibus odio. Suspendisse vulputate neque at tincidunt ultrices. Mauris libero dui, lacinia gravida molestie vitae, eleifend laoreet velit.</p>
          </div>
        );
      case 'Fundraisers':
        return (
          <div styleName="body-text">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet convallis erat. Sed sodales consectetur magna et blandit. Donec ac sapien eros. Mauris at massa nec dolor viverra feugiat at id erat. Nunc congue libero eu congue mattis. Donec quis faucibus tortor. Ut quis ante eleifend, rhoncus ante eget, faucibus nibh. Morbi dignissim et sem tempor condimentum. Sed quis imperdiet lectus. Morbi aliquam id massa dignissim vulputate. Nulla ante velit, euismod sit amet dapibus a, sodales ut eros. Phasellus sed semper augue.</p>

            <p>Phasellus rutrum dolor ligula, a tincidunt tortor laoreet ut. Sed lacinia quam arcu, non ultricies elit convallis id. Proin eget suscipit nunc. Suspendisse sed ligula sit amet libero sagittis commodo. Cras eu neque id leo sollicitudin tincidunt sed finibus odio. Suspendisse vulputate neque at tincidunt ultrices. Mauris libero dui, lacinia gravida molestie vitae, eleifend laoreet velit.</p>
          </div>
        );
      default:
        return (
          <div />
        );
    }
  }

  render() {
    return (
      <div className="container">
        {Category.bodyText('Initiatives')}
      </div>
    );
  }
}


const StyledComponent = CSSModules(Category, styles);

export default StyledComponent;
