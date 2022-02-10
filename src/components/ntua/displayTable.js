import React from "react";
import FilterTable from "./filterTable";

export default class DisplayTable extends React.Component {

    render () {
        console.log('Displaytable');
        console.log(this.props.columns);
        console.log(this.props.data);
        return (
            <div id="newtable" style={{margin: '50px auto', padding: '20px 30px', minHeight: '400px', marginBottom: 100}}>
            { <FilterTable columns={this.props.columns} data={this.props.data} />}
            </div>
        )
    }
}