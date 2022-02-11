import React from 'react';
import CreateCharts from './createCharts';

export default class ToolCard extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            itemData: props.data
        }
    }

    render() {

        return (
            <div className="section-display-tools">
                <div className="tool-card-header">
                    <p>Add a new graph</p>
                </div>
                
                <div className="section-buttons">
                    <CreateCharts data={this.state.itemData} />
                </div>
            
                
            </div>
        )
    }
}