import React from "react";

const URL = 'http://95.217.39.26:8261/'
//const URL = "https://cndevs.cn.ntua.gr:9000"

export default class IFrameTest extends React.Component {
  render() {
    return (
        <div style={{height: '100%', width: '100%'}}>
            <iframe style={{height:'100%', width: '100%'}} title='Test' src={URL} />
        </div>
        );
  }
}