import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import PlacesAutocomplete from 'react-places-autocomplete';
import {
  renderDateField,
  renderTitleField,
  renderLocationField,
  renderBodyField,
} from '../../src/components/eventsFormFields';

describe('EventsFormFields', () => {
  context('renderDateField Component', () => {
    it('should render properly', () => {
      const props = {
        input: {
          name: 'datetime',
          value: '',
        },
        label: 'Date and Time',
        type: 'datetime-local',
        meta: {
          touched: false,
          error: '',
        },
      };

      const wrapper = shallow(renderDateField(props));

      expect(wrapper.containsMatchingElement(
        <label htmlFor={props.input.name}>
          {props.label}
        </label>,
      )).to.equal(true);

      expect(wrapper.containsMatchingElement(
        <input name={props.input.name} type={props.type} />,
      )).to.equal(true);
    });

    it('displays an empty div when not in an error state', () => {
      const props = {
        input: {
          name: 'datetime',
          value: '',
        },
        label: 'Date and Time',
        type: 'datetime-local',
        meta: {
          touched: false,
          error: '',
        },
      };

      const wrapper = shallow(renderDateField(props));

      expect(wrapper.find('.form-control-feedback').text()).to.equal('');
    });

    it('displays an error when in an error state', () => {
      const props = {
        input: {
          name: 'datetime',
          value: '',
        },
        label: 'Date and Time',
        type: 'datetime-local',
        meta: {
          touched: true,
          error: 'A date and time is required',
        },
      };

      const wrapper = shallow(renderDateField(props));

      expect(wrapper.find('.form-control-feedback').text()).to.equal('A date and time is required');
    });
  });

  context('renderTitleField Component', () => {
    it('should render properly', () => {
      const props = {
        input: {
          name: 'title',
          value: '',
        },
        label: 'Title',
        type: 'text',
        meta: {
          touched: false,
          error: '',
        },
      };

      const wrapper = shallow(renderTitleField(props));

      expect(wrapper.containsMatchingElement(
        <label htmlFor={props.input.name}>
          {props.label}
        </label>,
      )).to.equal(true);

      expect(wrapper.containsMatchingElement(
        <input name={props.input.name} type={props.type} />,
      )).to.equal(true);
    });

    it('displays an empty div when not in an error state', () => {
      const props = {
        input: {
          name: 'title',
          value: '',
        },
        label: 'Title',
        type: 'text',
        meta: {
          touched: false,
          error: '',
        },
      };

      const wrapper = shallow(renderTitleField(props));

      expect(wrapper.find('.form-control-feedback').text()).to.equal('');
    });

    it('displays an error when in an error state', () => {
      const props = {
        input: {
          name: 'title',
          value: '',
        },
        label: 'Title',
        type: 'text',
        meta: {
          touched: true,
          error: 'A title is required',
        },
      };

      const wrapper = shallow(renderTitleField(props));

      expect(wrapper.find('.form-control-feedback').text()).to.equal('A title is required');
    });
  });

  context('renderBodyField Component', () => {
    it('should render properly', () => {
      const props = {
        input: {
          name: 'body',
          value: '',
        },
        label: 'Body',
        type: 'textarea',
        meta: {
          touched: false,
          error: '',
        },
      };

      const wrapper = shallow(renderBodyField(props));

      expect(wrapper.containsMatchingElement(
        <label htmlFor={props.input.name}>
          {props.label}
        </label>,
      )).to.equal(true);

      expect(wrapper.containsMatchingElement(
        <textarea name={props.input.name} type={props.type} />,
      )).to.equal(true);
    });

    it('displays an empty div when not in an error state', () => {
      const props = {
        input: {
          name: 'body',
          value: '',
        },
        label: 'Body',
        type: 'textarea',
        meta: {
          touched: false,
          error: '',
        },
      };

      const wrapper = shallow(renderBodyField(props));

      expect(wrapper.find('.form-control-feedback').text()).to.equal('');
    });

    it('displays an error when in an error state', () => {
      const props = {
        input: {
          name: 'body',
          value: '',
        },
        label: 'Body',
        type: 'body',
        meta: {
          touched: true,
          error: 'A body is required',
        },
      };

      const wrapper = shallow(renderTitleField(props));

      expect(wrapper.find('.form-control-feedback').text()).to.equal('A body is required');
    });
  });

  context('renderLocationField Component', () => {
    it('should render properly', () => {
      const props = {
        input: {
          onChange: () => {},
          onBlur: () => {},
          name: 'location',
          value: '',
        },
        label: 'Location',
        meta: {
          touched: false,
          error: '',
        },
      };

      const wrapper = shallow(renderLocationField(props));

      expect(wrapper.containsMatchingElement(
        <label htmlFor={props.input.name}>
          {props.label}
        </label>,
      )).to.equal(true);

      expect(wrapper.find(PlacesAutocomplete).exists()).to.equal(true);
    });

    it('displays an empty div when not in an error state', () => {
      const props = {
        input: {
          name: 'location',
          value: '',
        },
        label: 'Location',
        type: 'location',
        meta: {
          touched: false,
          error: '',
        },
      };

      const wrapper = shallow(renderLocationField(props));

      expect(wrapper.find('.form-control-feedback').text()).to.equal('');
    });

    it('displays an error when in an error state', () => {
      const props = {
        input: {
          name: 'location',
          value: '',
        },
        label: 'Location',
        type: 'location',
        meta: {
          touched: true,
          error: 'A location is required',
        },
      };

      const wrapper = shallow(renderLocationField(props));

      expect(wrapper.find('.form-control-feedback').text()).to.equal('A location is required');
    });
  });
});
