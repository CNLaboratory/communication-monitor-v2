import React from 'react';
import CreateCharts from './createCharts';
import * as S from '../../styles';

export default class ToolCard extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            itemData: props.data
        }
    }

    render() {
        return (
            <>
            {/*<S.CardTitle>Add a new graph</S.CardTitle>*/}
            <CreateCharts data={this.state.itemData} />
            </>
        )
    }
}