import React from "react";
import * as S from '../styles';

//const URL = 'http://95.217.39.26:8261/'
//const URL = "https://cndevs.cn.ntua.gr:9000"



export default class CustomIFrame extends React.Component {
  render() {
    return (
      <S.Row>
      <S.Col12>
        <S.Card>
          <S.CardBody>
          <div style={{height: '800px', width: '100%'}}>
            <iframe style={{overflow:'hidden', height:'100%', width: '100%',
              }} title='Test' src={this.props.API_URL} />
        </div>
          </S.CardBody>
        </S.Card>
      </S.Col12>
      </S.Row>
    );
  }
}