import React from 'react';
import Button from 'react-bootstrap/Button'
import { IoRefreshOutline } from 'react-icons/io5';
import NewDataDisplay from './new-data-display';
import ChartsDisplay from './charts-display';

export default class NewDynamicChartAPI extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
       formValues: [{ url: "" }],
       API_URL: '',
       settings: props.settings
     };
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.readFile = this.readFile.bind(this);
    
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

    for (url in formValues) {
      console.log('url', formValues[url]['url']);
      this.setState({API_URL: formValues[url]['url']})
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
      this.setState({
        data: JSON.parse(reader.result)
      });
    };
  }

  render() {
    let customFormComponent = 
        <form  onSubmit={this.handleSubmit}>
            {this.state.formValues.map((element, index) => (
                <div className="form-inline" style={{marginRight:'30px'}}  key={index}>
                    <label>URL</label>
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

    console.log('this.state.API_URL', this.state.API_URL);

    return(
    <div className='data-display'>
    <div className='header'>
      
      
      <div style={{marginBottom:'30px'}}>
        {customFormComponent}  
        <input type="file" onChange={(e) => this.readFile(e)} />
        {/*<button className='refresh-button' type='button' onClick={this.refreshData}>Refresh Data</button>*/}
      </div>
      
    </div>
    
     {this.state.API_URL && 
      <ChartsDisplay 
        API_URL={this.state.API_URL} 
        key={this.state.API_URL} 
        settings={this.state.settings}/> }
     {this.state.data && 
      <ChartsDisplay 
        data={this.state.data} 
        key={this.state.API_URL} 
        settings={this.state.settings}/> }
    </div>
    
    );
  }
}