import React from 'react';
import BarChart from "./barChart";
import PieChart from './pieChart';
import LineChart from "./lineChart";
import DoughNutChart from './doughNutChart';
import RadarChart from './radarChart';
import PolarAreaChart from './polarAreaChart';
import MySelect from "./dropMenu";
import { Dropdown, Option } from "./dropdown";
import * as S from "./styles"

const emptyData = {
    labels: ['N/A'],
    datasets: [
        {
        label: 'N/A',
        data: ['']
        },
        
    ],
}

const COLORS = ['#556EE6', '#F46A6A', '#F1B44D', '#34C38F'];

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
            initialized: false,
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
            newMultiChartSelect: [],

            
            newCMCharts:[]
        };

        this.createGraphData = this.createGraphData.bind(this);
        this.handleSelectMenuChange = this.handleSelectMenuChange.bind(this);
        //this.handleChartTypeSelectMenuChange = this.handleChartTypeSelectMenuChange.bind(this);
        
        this.createChartItems = this.createChartItems.bind(this);
        this.handleChartTypeSelection = this.handleChartTypeSelection.bind(this);
        this.handleLabelSelection = this.handleLabelSelection.bind(this);
        this.createChartButtonPressed = this.createChartButtonPressed.bind(this);
        this.createGraph = this.createGraph.bind(this);
    }

    

    componentDidMount() {
        this.createGraphData();
        
    }

    dynamicColors = function() {
        var r = Math.floor(Math.random() * 255);
        var g = Math.floor(Math.random() * 255);
        var b = Math.floor(Math.random() * 255);
        
        return "rgb(" + r + "," + g + "," + b + ")";
    };

    makeid() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      
        for (var i = 0; i < 5; i++)
          text += possible.charAt(Math.floor(Math.random() * possible.length));
      
        return text;
    }
    
    createGraph () {
        
        let inputData = this.state.responseData;
        let keys = this.state.selection;
        
        let title = '';
        let labels = [];
        let cmCharts = [];
        let graphDataSets = [];
        let backgroundColors = [];
        
        

        for (let i = 0; i < keys.length; i++) {    
            let key = keys[i].value;
            let graphData = [];
            labels = []; //labels are common for all keys and we need only one copy of them. So we empty the array and the last key fills it

            for (let y = 0; y < inputData.length; y++) {
        
                if (inputData[y][this.state.selectedLabelKey]) {
                    labels.push(inputData[y][this.state.selectedLabelKey]);
                } else {
                    labels.push('item' + y);
                }
                graphData.push(inputData[y][key]);   

            }
            let datasetBackgroundColor = i < COLORS.length ? COLORS[i] : this.dynamicColors();
            
            if (this.state.selectedChartType === 'pie' || this.state.selectedChartType === 'doughnut' || this.state.selectedChartType === 'polararea' ) {
                for (let j = 0; j < inputData.length; j++ ) {
                    backgroundColors.push(this.dynamicColors());
                    
                    //console.log('selectedChartType:', this.state.selectedChartType);
                    //console.log('graphDataSets:', graphDataSets);
                }
                graphDataSets.push({
                    label: key,
                    data: graphData,
                    backgroundColor: backgroundColors
                });
                    
                } else {
                    graphDataSets.push({
                        label: key,
                        data: graphData,
                        backgroundColor: datasetBackgroundColor
                    });
                }

            
            
        }
        const data = {
            labels: labels,
            datasets: graphDataSets
        }
        const options = {
            responsive: true,
            plugins: {
                legend: {
                position: 'top',
                },
                title: {
                display: true,
                text: title,
                },
            },
        };

        
        let id = this.makeid();
        switch(this.state.selectedChartType) {
                
            case 'bar':
                cmCharts.push(<BarChart key={id} options={options} data={data} />);
                break;
            case 'pie':
                cmCharts.push(<PieChart key={id} data={data} />);
                break;
            case 'line':
                cmCharts.push(<LineChart key={id} options={options} data={data} />);
                break;
            case 'doughnut':
                cmCharts.push(<DoughNutChart key={id} options={options} data={data} />);
                break;
            case 'radar':
                cmCharts.push(<RadarChart key={id} data={data} />);
                break;
            case 'polararea':
                cmCharts.push(<PolarAreaChart key={id} data={data} />);
                break;
            default:
                cmCharts.push(<BarChart key={id} options={options} data={data} />);
                
        };
        
        this.setState({
            initialized: true,
            newCMCharts: cmCharts
        })
    }

    // this is the older version of the create graph data function
    createGraphData = () => {
        let itemData = [];
        let labels = [];
        let colors = [];
        let chartOptions = [];
        let chartData = [];
        let dropMenuOptions = [];
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
            if (data[item][this.state.selectedLabelKey]) {
                labels.push(data[item][this.state.selectedLabelKey]);
            } else {
                labels.push('item' + i++);
            }
            
            //colors.push(dynamicColors());

        }
        colors.push('#8590A5')
        

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
                    
                    chartItems.push(<BarChart options={options} data={data} />);
                    chartMap[keys[key]] = <BarChart key={key} options={options} data={data} />;
                    break;
                case 'pie':
                    
                    chartItems.push(<PieChart data={data} />);
                    chartMap[keys[key]] = <PieChart key={key} data={data} />;
                    break;
                case 'line':
                    
                    chartItems.push(<LineChart options={options} data={data} />);
                    chartMap[keys[key]] = <LineChart key={key} options={options} data={data} />
                    break;
                case 'doughnut':
                    
                    chartItems.push(<DoughNutChart options={options} data={data} />);
                    chartMap[keys[key]] = <DoughNutChart key={key} options={options} data={data} />
                    break;
                case 'radar':
                    
                    chartItems.push(<RadarChart data={data} />);
                    chartMap[keys[key]] = <RadarChart key={key} data={data} />
                    break;
                case 'polararea':
                    
                    chartItems.push(<PolarAreaChart data={data} />);
                    chartMap[keys[key]] = <PolarAreaChart key={key} data={data} />
                    break;
                default:
                    
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
                key='dropMenu'
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
                key='labelDropdowns'
                formLabel="Label"
                buttonText="Apply"
                onChange={this.handleLabelSelection}
            >
                {labelSelectMenuOptions}
            </Dropdown>
        )
        
        chartTypeSelectMenuItems.push(
            <Dropdown
                key='dropDowns'
                formLabel="Chart Type"
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
        
        if (selectedOption.length===0) {
        
            this.setState({ 
                initialized: false,
                selection: selectedOption
            })
        } else {
            this.setState({ selection: selectedOption });
        }
        
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
        
        
        this.setState({selectedLabelKey: event.target.value}, () => {
        
        
            this.createGraphData();
        }  );
        
    }

    createChartButtonPressed () {
        
        if (this.state.selection) {
            
            let newMultiChartSelect = [];
            this.setState({newMultiChartSelect: newMultiChartSelect} ,() => {
                for (var attribute in this.state.selection) {
                
                    let localMultiChartSelect = this.state.newMultiChartSelect;
                    localMultiChartSelect.push(this.state.newChartMap[this.state.selection[attribute].value]);

                    this.setState({newMultiChartSelect: localMultiChartSelect});
                }
                

            });
            this.createGraph();
        
            
        } else {
            alert('Please select at least on attribute in the "Select Data" field');
        }
        
    }

    render() {

        return (
            
            <S.SectionWrapper>
                <S.ChartWrapper>
                    {/*this.state.selection ? this.state.newMultiChartSelect : <BarChart key={'default'} data={emptyData} />*/}
                    {/*<p>You selected {this.state.dropDownValue} </p>*/}
                    {this.state.initialized ? this.state.newCMCharts : <BarChart key={'default'} data={emptyData} />}
                </S.ChartWrapper>
                <S.OptionsWrapper>
                    { this.state.newLabelMenuItems /**options to choose label */}
                    { this.state.newChartTypeSelectMenuItems /*options for selecting a chart type*/} 
                    { this.state.newSelectMenuItems /*options for selecting an attribute to create a chart for*/}
                    <S.Button onClick={this.createChartButtonPressed}>
                        Create Charts
                    </S.Button>
                    {' '}
                    
                </S.OptionsWrapper>
        
                
            </S.SectionWrapper>
            
        );
    }

}