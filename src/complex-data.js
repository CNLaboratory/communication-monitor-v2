import React from 'react';
import { JsonToTable } from "react-json-to-table";
import axios from 'axios';
import * as S from './styles'

export default class ComplexDataVisualization extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      formValues: [{ url: "" }],
      API_URL: '',
      data:'',
      settings: props.settings,
      urlSubmitted: false
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.readFile = this.readFile.bind(this);
  }

  getData() {
    const axiosInstance = axios.create();
    axiosInstance.defaults.timeout = this.state.settings.operationTimeOut;
    
    axiosInstance.get(this.state.API_URL,  {headers: {"Access-Control-Allow-Origin":"*"}})
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
      this.setState({
        urlSubmitted: true,
        API_URL: formValues[url]['url']}, () => {
                
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
      this.setState({
        urlSubmitted: true,
        data: JSON.parse(reader.result)
      });
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
      <S.Row>
      <S.Col12>
          <p>This component accepts a JSON formatted input.<br/> Please input an address in the form below or upload a file</p> 
            {customFormComponent}            
            {/*<button className='refresh-button' type='button' onClick={this.refreshData}>Refresh Data</button>*/}
          
          <div><input type="file" onChange={(e) => this.readFile(e)} /></div>
        
        {this.state.urlSubmitted && 
        <S.Card>
        <S.CardBody>
        {this.state.data && <JsonToTable json={this.state.data} />}
        </S.CardBody>
      </S.Card>
        }
          
        
      </S.Col12>
      </S.Row>
    )
  }
}