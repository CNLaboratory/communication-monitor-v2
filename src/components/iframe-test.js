import React from "react";
import Button from 'react-bootstrap/Button'
import * as S from '../styles'

//const URL = 'http://95.217.39.26:8261/'
//const URL = "https://cndevs.cn.ntua.gr:9000"



export default class IFrameTest extends React.Component {

  constructor(props) {
      super(props);

      this.state = {
          formValues: [{ url: "" }],
          iFrameTitle: 'Checking iFrame',
          API_URL: '',
          urlSubmitted: false
      }
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
  }
  handleChange(i, e) {
      let formValues = this.state.formValues;
      formValues[i][e.target.name] = e.target.value;
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
              API_URL: formValues[url]['url'],
              urlSubmitted: true
            });
        }
      }

    

  render() {
    let customFormComponent = 
        <form  onSubmit={this.handleSubmit}>
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

    return (
      <S.Row>
      <S.Col12>
        <p>Input the URL for the iFrame below</p> 
        {customFormComponent}
        {
        this.state.urlSubmitted && 
        <S.Card>
          <S.CardBody>
            <div style={{height: '800px', width: '100%'}}>
                <iframe style={{height:'100%', width: '100%'}} title={this.state.iFrameTitle} src={this.state.API_URL}/>
            </div>
          </S.CardBody>
        </S.Card>}
      </S.Col12>
      </S.Row>
    );
        
  }
}