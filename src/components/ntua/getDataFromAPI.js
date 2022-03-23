import axios from 'axios';
import React from 'react';
import FilterTable from "./filterTable";

export default class GetDataFromAPI extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            API_URL: props.API_URL,
            checkInterval: props.checkInterval,
            data: [],
            isTransfering: false,
            labelPreFix: props.labelPreFix,
            keys: [],
            columns: [],
            itemData: [],
            labels: []
        };
        

        this.getProductData = this.getProductData.bind(this);
    }

    componentDidMount() {
        this.setState( { isTransfering: true });
        this.getProductData();
        if (this.props.checkInterval) {
            setInterval(this.getProductData, this.props.checkInterval);
        }
    }

    getProductData = () => {
        axios.get(this.state.API_URL,  {headers: {"Access-Control-Allow-Origin":"*"}})
        .then((response) => {
            console.log('transfer complete');

            this.setState({data: response.data}, () => {
                const firstCar = this.state.data[0];
                for (let key in firstCar) {
                    if (firstCar.hasOwnProperty(key)) {
                        this.state.keys.push(key);
                    }
                }
                for (let key in this.state.keys) {
                    this.state.columns.push(
                        {
                            Header: this.state.keys[key],
                            accessor: this.state.keys[key]
                        }
                    )
                }
                let i = 0;
                let itemData = this.state.itemData;
                let labels = this.state.labels;

                for (let item in this.state.data) {

                    itemData.push(this.state.data[item]);
                    
                    // Get the label for each car like Car0, Car1 etc
                    const label = this.state.labelPreFix ? this.state.labelPreFix : 'Item';            
                    labels.push(label + i++);
        
                }
                
                this.props.responseData(response.data);

                this.setState({ 
                    isTransfering: false,
                    itemData: itemData,
                    labels: labels
                });
            });
        });

    }

    render() {

        return (
        <div id="newtable" style={{margin: '50px auto', padding: '20px 30px', height: '800px'}}>
            { this.state.isTransfering ? <h2>Loading</h2> : <FilterTable columns={this.state.columns} data={this.state.data} />}
        </div>
        );
    }
}