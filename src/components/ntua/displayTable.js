import React from "react";
import FilterTable from "./filterTable";

export default class DisplayTable extends React.Component {

    render () {
        
        return (
            <div id="newtable" style={{margin: '-70px auto', padding: '20px 30px', minHeight: '400px', marginBottom: 100}}>
            { <FilterTable columns={this.props.columns} data={this.props.data} />}
            </div>
        )
    }
}