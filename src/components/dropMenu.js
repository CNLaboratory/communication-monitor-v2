import React from 'react';
import Select from 'react-select';
//import { colourOptions } from '../data';

/*
export default (props) => (
  <Select
    
    isMulti={true}
    name="Properties"
    options={props.options}
    onchange={props.onChange}
    className="basic-multi-select"
    classNamePrefix="select"
  />
);
*/

class MySelect extends React.Component {
  handleChange = value => {
    // this is going to call setFieldValue and manually update values.topcis
    console.log(value);
    this.props.onChange(value);
  };

  handleBlur = () => {
    // this is going to call setFieldTouched and manually update touched.topcis
    this.props.onBlur('attributes', true);
  };

  render() {
    return (
      <div style={{ margin: '1rem 0' }}>
        <label htmlFor="color">Select attributes to display corresponding graphs </label>
        <Select
          id="chartsSelection"
          options={this.props.options}
          isMulti={true}
          onChange={this.handleChange}
          //onBlur={this.handleBlur}
          //value={this.props.value}
        />
        {!!this.props.error &&
          this.props.touched && (
            <div style={{ color: 'red', marginTop: '.5rem' }}>{this.props.error}</div>
          )}
      </div>
    );
  }
}

export default MySelect;