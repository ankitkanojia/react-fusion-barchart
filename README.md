# Implement Bar(2D, 3D, Group 2D, Group 3D) fusion chart with react app
FusionCharts is a JavaScript charting library which provides more than 95 charts and 2,000 maps which can be use full in mobile and web applications.

## Official Links
  - Website: [https://www.fusioncharts.com](https://www.fusioncharts.com)
  - NPM Package: [https://www.npmjs.com/package/fusioncharts](https://www.npmjs.com/package/fusioncharts)

## Getting Started

**Note:** [NPM](https://www.npmjs.com) or [Yarn](https://yarnpkg.com/lang/en) must be installed globally on your local pc.
 - See [npm documentation](https://docs.npmjs.com/) to know more about npm in detail.
 - See [yarn documentation](https://yarnpkg.com/en/docs) to know more about yarn in detail.
 
## Installation Fusion Chart Library

[Note](#): In demo for designing purpose we used the simple [bootstrap](https://www.npmjs.com/package/bootstrap) library.
 
We will use `react-fusioncharts` component to integrate fusion chart functionality.

**Install from NPM or from Yarn**
 ```
npm install --save react-fusioncharts

or

yarn add react-fusioncharts
```

### Usage

- create react app using your specific app name in desire folder path `create-react-app`
- once you create the react app successfully there will be `app.js` file lies in `src` folder.
- now we need to import `react-fusioncharts` and FusionCharts in your `app.js` file

```
import React, {Component} from 'react';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import './index.css';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);
```

Note: This way of import will not work in IE11 and below.

#### Configuration setting for chart

```
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
            "data": []
        }
```

#### Data Source Collection

```
        "data": [{
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
```

This sample static data collection need to pass in configuration setting. 

#### Attach the callback to an event through the React-FC component:

```javascript
 <ReactFC {...chartConfigsSettings} /> 
```

##### Consider the example to integrate or implement fusion chart in the react app.

```javascript
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
```

## Licensing

The FusionCharts React component is open-source and distributed under the terms of the MIT/X11 License. However, you will need to download and include FusionCharts library in your page separately, which has a [separate license](https://www.fusioncharts.com/buy).
