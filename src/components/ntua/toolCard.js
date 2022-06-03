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
            {this.props.cardTitle && <S.CardTitle>{this.props.cardTitle}</S.CardTitle>}
            <CreateCharts data={this.state.itemData} />
            </>
        )
    }
}