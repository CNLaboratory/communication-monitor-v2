import axios from "axios";
import React from 'react';
import ReactDOM from 'react-dom';
import BasicTable from "../components/basicTable";
import FilterTable from "../components/filterTable";
import SortedTable from "../components/sortingTable";
import BarChart from "../components/barChart";
import MySelect from "../components/dropMenu";
import { Dropdown, Option } from "../components/dropdown";

//const API_URL = "http://localhost:8081/product";
//const API_URL = "http://147.102.40.53:5000/product";







export default class ProductData extends React.Component {

    
    constructor(props) {
        super(props);
    
        this.state = {    
            API_URL: props.API_URL,
            
            checkInterval: props.checkInterval,     
          isTransfering: false,
          showChart1: false,
          newColumns: [],
          newData: [],
          newChartData: [],
          newChartOptions: [],
          newChartItems: [],
          newDropDown: [],
          newChartMap: {},
          newDropMenuOptions: [],
          newSelectMenuItems: [],
          dropDownValue: "",
          newSelectedValues: [],
          selectedOptions: [],
          newMultiChartSelect: []
        };

        this.handleSelect = this.handleSelect.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleMultiChange = this.handleMultiChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        
      }
   componentDidMount() {
        this.setState({ isTransfering: true });
        this.getProductData();
        if (this.props.checkInterval) {
            setInterval(this.getProductData, this.props.checkInterval);
        }
        
   }

    getProductData = () => {
        var columns = [];
        var carData = [];
        var labels = [];
        var chartOptions = [];
        var chartData = [];
        var chartItems = [];
        var chartMap = {};
        var dropDowns = [];
        var dropDownItems = [];
        var dropMenuOptions = [];
        var selectMenuItems = [];


        
        axios.get(this.state.API_URL, {headers: {"Access-Control-Allow-Origin":"*"}})
        .then((response) => {
            console.log("check");
            /*this.parseData(response.data);*/
            var keys = [];
            let data = response.data;

            const firstCar = data[0];
            for (var key in firstCar) {
                if (firstCar.hasOwnProperty(key)) {
                    keys.push(key);
                }
            }
        

            for (key in keys) {
                columns.push(
                    {
                        Header: keys[key],
                        accessor: keys[key]
                    }
                )
                
            }
            
            var i = 0;
            for (var car in data) {
                carData.push(data[car]);
                
                // Get the label for each car like Car0, Car1 etc
                labels.push('Car' + i++);
            }
            //console.log('hey');
            for (key in keys) {
                var dataArray = [];
                for (var car in carData) {
                    //console.log('carData[car][keys[key]]');
                    //console.log(carData[car][keys[key]]);
                    dataArray.push(carData[car][keys[key]]);   
                }
                const data = {
                    labels,
                    datasets: [
                      {
                        label: keys[key],
                        data: dataArray,
                        backgroundColor: 'rgba(255, 99, 132, 0.5)',
                      },
                      
                    ],
                }
                const options = {
                    responsive: true,
                    plugins: {
                      legend: {
                        position: 'top',
                      },
                      title: {
                        display: true,
                        text: key,
                      },
                    },
                  };
                  //console.log('hey2');
                chartData.push(data);
                chartOptions.push(options);

                //console.log("chartData");
                //console.log(data);
                  
                chartItems.push(<BarChart options={options} data={data} />);
                chartMap[keys[key]] = <BarChart key={key} options={options} data={data} />;
                
                dropMenuOptions.push(
                    {
                        value: [keys[key]], 
                        label: [keys[key]]
                    }
                )
                dropDownItems.push(<Option key={key} value={keys[key]} />)
                
            }
            //console.log("dropMenuOptions");
            //console.log(dropMenuOptions);
            
            selectMenuItems.push(
                    <MySelect
                        key={"dropMenu"}
                        onChange={this.handleChange}
                        options={dropMenuOptions}
                        //onBlur={setFieldTouched}
                        //error={errors.topics}
                        //touched={touched.topics}
                    />
                    //key={"dropMenu"} options={dropMenuOptions}

            );
            //console.log(selectMenuItems);
            dropDowns.push(
                <Dropdown
                    key={'dropDowns'}
                    formLabel="Choose a metric"
                    buttonText="Visualize"
                    onChange={this.handleSelect}
                    action="https://jsonplaceholder.typicode.com/posts"
                >
                    {dropDownItems}
                </Dropdown>
            );
            
            
            this.setState({ 
                isTransfering: false,
                showChart1: true,
                newColumns: columns,
                newData: carData,
                newChartData: chartData,
                newChartOptions: chartOptions,
                newChartItems: chartItems,
                newChartMap: chartMap,
                newDropDown: dropDowns,
                newDropMenuOptions: dropMenuOptions,
                newSelectMenuItems: selectMenuItems
            });
            

        });        
    }

    handleSelect(event) {
        //console.log(this.state.dropDownValue);
        this.setState({ dropDownValue: event.target.value });
    }
    
    handleSubmit(event) {
        //event.preventDefault();
        //console.log(this.state.dropDownValue);
    }

    handleMultiChange(selectedOption) {
        //console.log("multi - option");
        //console.log(selectedOption);
      }

      handleChange = (selectedOption) => {
        this.state.newMultiChartSelect.length = 0;
        this.setState({ selectedOption });
        console.log('selectedOption');
        for (var attribute in selectedOption) {
            console.log(selectedOption[attribute].value);
            
            this.state.newMultiChartSelect.push(this.state.newChartMap[selectedOption[attribute].value]);
        }
        console.log(selectedOption);

      }
    



    render() {

        return (
        <div id="newtable">
            {/*console.log("log columns")*/}
            {/*console.log(this.state.newColumns)*/}
            
            { this.state.isTransfering ? <h2>Loading</h2> : <FilterTable columns={this.state.newColumns} data={this.state.newData} />}
            { /*console.log("chart begins")*/}
            {/*<Select options={['item1', 'item2']}/>*/}
            
            { /*this.state.showChart1 ? <BarChart options={this.state.newChartOptions[0]} data={this.state.newChartData[0]} /> : <h2>Loading chart</h2>*/}
            <div className = "section-dropMenu">
              { this.state.newSelectMenuItems }
            </div>
            
            <div className="section-newCharts">
                {this.state.newMultiChartSelect}
                
                {/*<p>You selected {this.state.dropDownValue} </p>*/}
            </div>
            <div className="section-dropdown">
                {this.state.newDropDown}
                
                {/*<p>You selected {this.state.dropDownValue} </p>*/}
            </div>
            
            <div className='section-charts'>
                { this.state.newChartMap[this.state.dropDownValue]}
                
            </div>
            
            {/*<FilterTable colunns={columns} data={carData}/>*/}
            {/*<SortedTable columns={columns} data={carData} />*/}
        </div>
        );
    }
}