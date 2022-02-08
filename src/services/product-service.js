import axios from "axios";
import React from 'react';
import ReactDOM from 'react-dom';
import BasicTable from "../components/basicTable";
import FilterTable from "../components/filterTable";
import SortedTable from "../components/sortingTable";

const API_URL = "http://147.102.40.53:5000/product";

class ColumnFormat {
    
    Header= "SpeedObd";
    accessor= "speedObd"; // accessor is the "key" in the data
    
}

var columns = [];
var carData = [];

class Product {
    

    parseData(data) {

        var keys = [];


        const firstCar = data[0];
        for (var key in firstCar) {
            if (firstCar.hasOwnProperty(key)) {
                keys.push(key);
            }
        }
        console.log("keys");
        console.log(keys);

        for (key in keys) {
            columns.push(
                {
                    Header: keys[key],
                    accessor: keys[key]
                }
            )
        }
        console.log("columns");
        console.log(columns);

        for (var car in data) {
            carData.push(data[car]);
            console.log("data[car]");
            console.log(data[car]);
        }
        console.log("carData");
        console.log(carData);

    }
    getProductData() {

        axios.get(API_URL)
        .then((response) => {
            console.log(response.data);
            /*this.parseData(response.data);*/
            var keys = [];
            let data = response.data;

        const firstCar = data[0];
        for (var key in firstCar) {
            if (firstCar.hasOwnProperty(key)) {
                keys.push(key);
            }
        }
        /*
        console.log("keys");
        console.log(keys);
        */
        for (key in keys) {
            columns.push(
                {
                    Header: keys[key],
                    accessor: keys[key]
                }
            )
        }
        /*
        console.log("columns");
        console.log(columns);
        */
        for (var car in data) {
            carData.push(data[car]);
            /*
            console.log("data[car]");
            console.log(data[car]);
            */
        }
        /*
        console.log("carData");
        console.log(carData);
        */
        ReactDOM.render(
            //<BasicTable columns={columns} data={carData}/>,
            <div>
                <FilterTable columns={columns} data={data} />
                <SortedTable columns={columns} data={data} />
            </div>,
            document.getElementById('tableData')
        )
        });
        

        /*
        axios.get(API_URL)
        .then((response) => {
            console.log(response.data);
            console.log(response.status);
        });
        */
        
    }
    
}

export default new Product();