import React, {Component} from 'react';

// import Fusion Charts library
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import './index.css';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

// import bootstrap css
import 'bootstrap/dist/css/bootstrap.css';

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

// bar 2d chart configuration settings
const chartConfigs_bar2d = {
    type: 'bar2d',
    width: '100%',
    height: 350,
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "theme": "fusion",
            "palettecolors": "5d62b5,29c3be,f2726f",
            "caption": "Lead manufacture by industry",
            "subcaption": "2016-2017",
            "yAxisName": "Number of Leads",
            "showBorder": "1",
            "borderColor": "#ccc",
            "bgColor": "#FFFFFF",
            "numberSuffix": "%",
            //Tooltip customization
            "toolTipBorderColor": "#666666",
            "toolTipBgColor": "#efefef",
            "toolTipBgAlpha": "80",
            "showToolTipShadow": "1",
            //Theme
            "plotBorderThickness": "0.25",
            "showxaxispercentvalues": "1",
            "showValues": "1",
            "plotToolText": "Country: $label <br> Population : $dataValue"
        },
        "data": [
            {
                label: "Primary Industry",
                value: "20"
            },
            {
                label: "Secondary Industry",
                value: "55"
            },
            {
                label: "Tertiary Industry",
                value: "60"
            },
            {
                label: "Quaternary Industry",
                value: "80"
            }
        ]
    },
};

// bar 3d chart configuration settings
const chartConfigs_bar3d = {
    type: 'bar3d',
    width: '100%',
    height: 350,
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "theme": "fusion",
            "palettecolors": "5d62b5,29c3be,f2726f",
            "caption": "Lead manufacture by industry",
            "subcaption": "2016-2017",
            "yAxisName": "Number of Leads",
            "showBorder": "1",
            "borderColor": "#ccc",
            "bgColor": "#FFFFFF",
            "numberSuffix": "%",
            //Tooltip customization
            "toolTipBorderColor": "#666666",
            "toolTipBgColor": "#efefef",
            "toolTipBgAlpha": "80",
            "showToolTipShadow": "1",
            //Theme
            "plotBorderThickness": "0.25",
            "showxaxispercentvalues": "1",
            "showValues": "1",
            "plotToolText": "Country: $label <br> Population : $dataValue"
        },
        "data": [
            {
                label: "Primary Industry",
                value: "20"
            },
            {
                label: "Secondary Industry",
                value: "55"
            },
            {
                label: "Tertiary Industry",
                value: "60"
            },
            {
                label: "Quaternary Industry",
                value: "80"
            }
        ]
    },
};

// bar group 2d chart configuration settings
const chartConfigs_bar_group2d = {
    type: 'msbar2d',
    width: '100%',
    height: 350,
    dataFormat: 'json',
    dataSource:{
        chart: {
            palettecolors: "f2726f,29c3be",
            caption: "Increasing popoulation in 2019",
            subcaption: "Children vs Teenagers",
            numberSuffix: "%",
            showBorder: "1",
            borderColor: "#ccc",
            bgColor: "#FFFFFF",
            plottooltext: "$label has increased population of $seriesName <b>$dataValue</b> in 2017",
            theme: "fusion"
        },
        categories: [
            {
                category: [
                    {
                        label: "India"
                    },
                    {
                        label: "USA"
                    },
                    {
                        label: "China"
                    },
                    {
                        label: "United Kingdom"
                    },
                    {
                        label: "Pakistan"
                    }
                ]
            }
        ],
        dataset: [
            {
                seriesname: "Children",
                data: [
                    {
                        value: "20"
                    },
                    {
                        value: "30"
                    },
                    {
                        value: "40"
                    },
                    {
                        value: "69"
                    },
                    {
                        value: "15"
                    }
                ]
            },
            {
                seriesname: "Teenagers",
                data: [
                    {
                        value: "70"
                    },
                    {
                        value: "60"
                    },
                    {
                        value: "80"
                    },
                    {
                        value: "20"
                    },
                    {
                        value: "30"
                    }
                ]
            }
        ]
    }
};

// bar group 3d chart configuration settings
const chartConfigs_bar_group3d = {
    type: 'msbar3d',
    width: '100%',
    height: 350,
    dataFormat: 'json',
    dataSource:{
        chart: {
            palettecolors: "f2726f,29c3be",
            caption: "Increasing popoulation in 2019",
            subcaption: "Children vs Teenagers",
            numberSuffix: "%",
            showBorder: "1",
            borderColor: "#ccc",
            bgColor: "#FFFFFF",
            placeValuesInside: "1",
            plottooltext: "$label has increased population of $seriesName <b>$dataValue</b> in 2017",
            theme: "fusion"
        },
        categories: [
            {
                category: [
                    {
                        label: "India"
                    },
                    {
                        label: "USA"
                    },
                    {
                        label: "China"
                    },
                    {
                        label: "United Kingdom"
                    },
                    {
                        label: "Pakistan"
                    }
                ]
            }
        ],
        dataset: [
            {
                seriesname: "Children",
                data: [
                    {
                        value: "20"
                    },
                    {
                        value: "30"
                    },
                    {
                        value: "40"
                    },
                    {
                        value: "69"
                    },
                    {
                        value: "15"
                    }
                ]
            },
            {
                seriesname: "Teenagers",
                data: [
                    {
                        value: "70"
                    },
                    {
                        value: "60"
                    },
                    {
                        value: "80"
                    },
                    {
                        value: "20"
                    },
                    {
                        value: "30"
                    }
                ]
            }
        ]
    }
};

class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    {/*Bar 2D section*/}
                    <div className="col-sm-6">
                        <h3>Bar 2D Chart</h3>
                        <ReactFC {...chartConfigs_bar2d} />
                    </div>

                    {/*Bar 2D section*/}
                    <div className="col-sm-6">
                        <h3>Bar 3D Chart</h3>
                        <ReactFC {...chartConfigs_bar3d} />
                    </div>

                    {/*Bar 2D group section*/}
                    <div className="col-sm-6">
                        <h3>Bar Group 2D Chart</h3>
                        <ReactFC {...chartConfigs_bar_group2d} />
                    </div>

                    {/*Bar 3D group section*/}
                    <div className="col-sm-6">
                        <h3>Bar Group 3D Chart</h3>
                        <ReactFC {...chartConfigs_bar_group3d} />
                    </div>
                </div>
            </div>)
    }
}

export default App;
