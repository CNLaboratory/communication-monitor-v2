import React from 'react';
import BarChart from "./barChart";
import PieChart from './pieChart';
import LineChart from "./lineChart";
import DoughNutChart from './doughNutChart';
import RadarChart from './radarChart';
import PolarAreaChart from './polarAreaChart';
import MySelect from "./dropMenu";
import { Dropdown, Option } from "./dropdown";
import BootstrapDropdown from './bootstrapDropDown';

export default class CreateCharts extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            responseData: props.data,
            chartTypes: ['bar', 'pie', 'line'],
            selectedChartType: '',
            selectedAttributes: [],
            chartTypeSelectMenuOptions: [
                <Option key='bar' value='Bar Chart' />,
                <Option key='pie' value='Pie Chart' />,
                <Option key='line' value='Line Chart' />,
                <Option key='doughnut' value='DoughNut Chart' />,
                <Option key='radar' value='Radar Chart' />,
                <Option key='polararea' value='Polar Area Chart' />
            ],
            
            selectedLabelKey: 'item',
            newChartTypeSelectMenuItems: [],
            newChartData: [],
            newChartOptions: [],
            newChartItems: [],
            newChartMap: {},
            newDropMenuOptions: [],
            newSelectMenuItems: [],
            newLabelMenuItems: [],
            dropDownValue: "",
            newSelectedValues: [],
            selectedOptions: [],
            newMultiChartSelect: []
        };

        this.createGraphData = this.createGraphData.bind(this);
        this.handleSelectMenuChange = this.handleSelectMenuChange.bind(this);
        //this.handleChartTypeSelectMenuChange = this.handleChartTypeSelectMenuChange.bind(this);
        
        this.createChartItems = this.createChartItems.bind(this);
        this.handleChartTypeSelection = this.handleChartTypeSelection.bind(this);
        this.handleLabelSelection = this.handleLabelSelection.bind(this);
    }

    

    componentDidMount() {
        this.createGraphData();
    }

    
    createGraphData = () => {
        let itemData = [];
        let labels = [];
        let colors = [];
        let chartOptions = [];
        let chartData = [];
        let dropMenuOptions = [];
        let dropDownItems = [];
        let selectMenuItems = [];
        let chartItems = [];
        let chartMap = {};
        let chartTypeSelectMenuItems = [];
        let labelMenuItems = [];
        let labelSelectMenuOptions = [];
        labelSelectMenuOptions.push(<Option key="item" value="item" /> );

        let data = [];
        data = this.state.responseData;

        var dynamicColors = function() {
            var r = Math.floor(Math.random() * 255);
            var g = Math.floor(Math.random() * 255);
            var b = Math.floor(Math.random() * 255);
            return "rgb(" + r + "," + g + "," + b + ")";
         };

        console.log('createGraphs()-called');
        console.log('data');
        console.log(this.state.responseData);
        let keys = [];
        const firstItem = data[0];
        for (let key in firstItem) {
            if (firstItem.hasOwnProperty(key)) {
                keys.push(key);
            }
        }
        let i = 0;
        for (let item in data) {
            itemData.push(data[item]);
            
            // Get the label for each car like Car0, Car1 etc
            if (keys[this.state.selectedLabelKey]) {
                console.log("valid label key selected");
                console.log(keys[this.state.selectedLabelKey]);
            } else {
                console.log("no label key selected");
                console.log(this.state.selectedLabelKey);
                console.log(this.state.selectedLabelKey + i);


            }
            console.log("data[item][attributeLabel]");
            console.log(data[item][this.state.selectedLabelKey]);
            if (data[item][this.state.selectedLabelKey]) {
                labels.push(data[item][this.state.selectedLabelKey]);
            } else {
                labels.push('item' + i++);
            }
            
            colors.push(dynamicColors());

        }
        

        for (let key in keys) {
            let dataArray = [];
            for (let car in itemData) {
                //console.log('carData[car][keys[key]]');
                //console.log(carData[car][keys[key]]);
                dataArray.push(itemData[car][keys[key]]);   
            }
            
            const data = {
                labels,
                datasets: [
                    {
                    label: keys[key],
                    data: dataArray,
                    backgroundColor: colors
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

            chartItems.length = 0;
            chartMap.legend = 0;
            switch(this.state.selectedChartType) {
                
                case 'bar':
                    console.log('selectedChartType');
                    console.log(this.state.selectedChartType);
                    console.log('bar chart selected');
                    chartItems.push(<BarChart options={options} data={data} />);
                    chartMap[keys[key]] = <BarChart key={key} options={options} data={data} />;
                    break;
                case 'pie':
                    console.log('selectedChartType');
                    console.log(this.state.selectedChartType);
                    console.log('pie chart selected');
                    chartItems.push(<PieChart data={data} />);
                    chartMap[keys[key]] = <PieChart key={key} data={data} />;
                    break;
                case 'line':
                    console.log('selectedChartType');
                    console.log(this.state.selectedChartType);
                    console.log('pie chart selected');
                    chartItems.push(<LineChart options={options} data={data} />);
                    chartMap[keys[key]] = <LineChart key={key} options={options} data={data} />
                    break;
                case 'doughnut':
                    console.log('selectedChartType');
                    console.log(this.state.selectedChartType);
                    console.log('doughnut chart selected');
                    chartItems.push(<DoughNutChart options={options} data={data} />);
                    chartMap[keys[key]] = <DoughNutChart key={key} options={options} data={data} />
                    break;
                case 'radar':
                    console.log('selectedChartType');
                    console.log(this.state.selectedChartType);
                    console.log('radar chart selected');
                    chartItems.push(<RadarChart data={data} />);
                    chartMap[keys[key]] = <RadarChart key={key} data={data} />
                    break;
                case 'polararea':
                    console.log('selectedChartType');
                    console.log(this.state.selectedChartType);
                    console.log('polar area chart selected');
                    chartItems.push(<PolarAreaChart data={data} />);
                    chartMap[keys[key]] = <PolarAreaChart key={key} data={data} />
                    break;
                default:
                    console.log('selectedChartType');
                    console.log(this.state.selectedChartType);
                    console.log('default chart selected');
                    chartItems.push(<BarChart options={options} data={data} />);
                    chartMap[keys[key]] = <BarChart key={key} options={options} data={data} />;
                    
            };

            dropMenuOptions.push(
                {
                    value: [keys[key]], 
                    label: [keys[key]]
                }
            )
            
        }
        
        selectMenuItems.push(
            <MySelect
                key={'dropMenu'}
                onChange={this.handleSelectMenuChange}
                options={dropMenuOptions}
                
                //onBlur={setFieldTouched}
                //error={errors.topics}
                //touched={touched.topics}
            />
        );

        for (let attribute in dropMenuOptions) {
            labelSelectMenuOptions.push(<Option key={keys[attribute]} value={keys[attribute]} /> );
        }
        labelMenuItems.push(
            <Dropdown
                key={'labelDropdowns'}
                formLabel="Choose attribute for label"
                buttonText="Apply"
                onChange={this.handleLabelSelection}
            >
                {labelSelectMenuOptions}
            </Dropdown>
        )
        
        chartTypeSelectMenuItems.push(
            <Dropdown
                key={'dropDowns'}
                formLabel="Choose a chartType"
                buttonText="Apply"
                onChange={this.handleChartTypeSelection}
            >
                {this.state.chartTypeSelectMenuOptions}
            </Dropdown>
            /*
            <MySelect
                key={'chartTypeMenu'}
                onChange={this.handleChartTypeSelectMenuChange}
                options={this.state.chartTypeSelectMenuOptions}
                //onBlur={setFieldTouched}
                //error={errors.topics}
                //touched={touched.topics}
            />
            */
            

        );
        
        this.setState({ 
            newChartData: chartData,
            newChartOptions: chartOptions,
            newChartItems: chartItems,
            newChartMap: chartMap,
            newSelectMenuItems: selectMenuItems,
            newChartTypeSelectMenuItems: chartTypeSelectMenuItems,
            newLabelMenuItems: labelMenuItems
        });

    }

    createChartItems = () => {
        
    }

    handleSelectMenuChange = (selectedOption) => {
        this.setState({ selection: selectedOption });

        this.state.newMultiChartSelect.length = 0;
        this.setState({ selectedOption });
        console.log('selectedOption');

        for (var attribute in selectedOption) {
            console.log(selectedOption[attribute].value);
            
            this.state.newMultiChartSelect.push(this.state.newChartMap[selectedOption[attribute].value]);
        }
        console.log(selectedOption);

    }
    /*
    handleChartTypeSelectMenuChange = (selectedOption) => {
        this.setState( {
            selectedChartType: selectedOption[attribute].value
        })
        this.createGraphData();
    }*/
    handleChartTypeSelection = (event) => {
        console.log('handleChartTypeSelection');
        console.log(event.target.value);
        switch(event.target.value) {
            case 'Bar Chart':
                this.setState( { selectedChartType: 'bar' }, () => {
                    console.log('after updating selectedCharttype');
                    console.log(this.state.selectedChartType);
                    
                    this.createGraphData();
                });
                break;
            case 'Pie Chart':
                console.log('handleChartTypeSelection pie chart option')
                this.setState( { selectedChartType: 'pie' }, () => {
                    console.log('after updating selectedCharttype');
                    console.log(this.state.selectedChartType);
                    
                    this.createGraphData();
                });
                break;
            case 'Line Chart':
                console.log('handleChartTypeSelection line chart option')
                this.setState( { selectedChartType: 'line' }, () => {
                    console.log('after updating selectedCharttype');
                    console.log(this.state.selectedChartType);
                    this.createGraphData();
                });
                break;
            case 'DoughNut Chart':
                console.log('handleChartTypeSelection doughnut chart option')
                this.setState( { selectedChartType: 'doughnut' }, () => {
                    console.log('after updating selectedCharttype');
                    console.log(this.state.selectedChartType);
                    this.createGraphData();
                });
                break;
            case 'Radar Chart':
                console.log('handleChartTypeSelection radar chart option')
                this.setState( { selectedChartType: 'radar' }, () => {
                    console.log('after updating selectedCharttype');
                    console.log(this.state.selectedChartType);
                    this.createGraphData();
                });
                break;
            case 'Polar Area Chart':
                console.log('handleChartTypeSelection polar area chart option')
                this.setState( { selectedChartType: 'polararea' }, () => {
                    console.log('after updating selectedCharttype');
                    console.log(this.state.selectedChartType);
                    this.createGraphData();
                });
                break;
            default:
                this.setState( { selectedChartType: 'bar' }, () => {
                    console.log('after updating selectedCharttype');
                    console.log(this.state.selectedChartType);
                    
                    this.createGraphData();
                });
        }
        
        
        
    }

    handleLabelSelection (event) {
        console.log('handleLabelSelection');
        console.log(event.target.value);
        this.setState({selectedLabelKey: event.target.value}, () => {
            console.log('updated selected label value');
            console.log( this.state.selectedLabelKey);
            this.createGraphData();
        }  );
        
    }

    render() {

        return (




            <div className='tools'>
                <div className = "section-choices">
                    { this.state.newChartTypeSelectMenuItems /*options for selecting a chart type*/} 
                    { this.state.newSelectMenuItems /*options for selecting an attribute to create a chart for*/}
                    { this.state.newLabelMenuItems /**options to choose label */}
                    <BootstrapDropdown></BootstrapDropdown>
                </div>
        
                <div className="section-newCharts">
                    {this.state.newMultiChartSelect}
                    {/*<p>You selected {this.state.dropDownValue} </p>*/}
                </div>
            </div>
        );
    }

}