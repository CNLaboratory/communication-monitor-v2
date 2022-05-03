import React from 'react';
import { JsonToTable } from "react-json-to-table";
import axios from 'axios';

export default class ComplexDataVisualization extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      formValues: [{ url: "" }],
      API_URL: '',
      data:''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.readFile = this.readFile.bind(this);
  }

  getData() {
    axios.get(this.state.API_URL,  {headers: {"Access-Control-Allow-Origin":"*"}})
    .then((response) => {
      console.log('response.data:', response.data);
      this.setState({data:response.data});
        
    });

  }

  handleChange(i, e) {
    let formValues = this.state.formValues;
    formValues[i][e.target.name] = e.target.value;
    this.setState({ formValues });
  }

  addFormFields() {
    this.setState(({
      formValues: [...this.state.formValues, { url: "" }]
    }))
  }

  removeFormFields(i) {
    let formValues = this.state.formValues;
    formValues.splice(i, 1);
    this.setState({ formValues });
  }

  handleSubmit(event) {
    event.preventDefault();
    let formValues = this.state.formValues;
    var url;
    console.log('url');
    console.log(url);

    for (url in formValues) {
      this.setState({API_URL: formValues[url]['url']}, () => {
                
        this.getData();
        
    })
    }
  }

  readFile = async (e) => {
    console.log('readFile, e', e);
    
    e.preventDefault()
    const reader = new FileReader();
    reader.readAsText(e.target.files[0],  "UTF-8");
    reader.onload = async (e) => { 
      const text = (e.target.result)
      //console.log(text)
      console.log('readFile, JSON.parse(reader.result)', JSON.parse(reader.result));
      this.setState({data: JSON.parse(reader.result)});
    };
    
  }

  render() {

    let customFormComponent = 
      <form onSubmit={this.handleSubmit}>
        {this.state.formValues.map((element, index) => (
          <div className="form-inline" key={index}>
            <label>Address</label>
            <input type="url" name="url" value={element.url || ""} onChange={e => this.handleChange(index, e)} />
            {
              index ? 
              <button type="button"  className="button remove" onClick={() => this.removeFormFields(index)}>Remove</button> 
              : null
            }
            <button className="button submit" type="submit">Submit</button>
          </div>
        ))}
        <div className="button-section">
          {/*<button className="button add" type="button" onClick={() => this.addFormFields()}>Add</button>*/}
            
        </div>
      </form>;

    


    return(
      <div className='complex-data-visualization'>
        <div className='header'>
          <h1>Complex JSON Data Visualization</h1>
          
          <div className='dynamic-api-form'>
            <p>This component accepts a JSON formatted input.<br/> Please input an address in the form below or upload a file</p> 
            {customFormComponent}            
            {/*<button className='refresh-button' type='button' onClick={this.refreshData}>Refresh Data</button>*/}
          </div>
          <div><input type="file" onChange={(e) => this.readFile(e)} /></div>
        </div>
        <div style={{overflowX:'auto'}}>
          {this.state.data && <JsonToTable json={this.state.data} />}
        </div>

      </div>
    )
  }
}