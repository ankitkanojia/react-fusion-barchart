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

// column 3d chart configuration settings
const chartConfigs_colunm2d = {
  type: 'bar2d',
  width: '100%',
  height: 350,
  dataFormat: 'json',
  dataSource: {
    "chart": {
      "theme": "fusion",
      "palettecolors": "5d62b5,29c3be,f2726f",
      "caption": "Lead sources by industry",
      "subcaption": "2016-2017",
      "yAxisName": "Number of Leads",
      "showBorder": "1",
      "borderColor": "#ccc",
      "bgColor": "#FFFFFF",
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
        label: "Travel & Leisure",
        value: "41"
      },
      {
        label: "Advertising/Marketing/PR",
        value: "5"
      },
      {
        label: "Other",
        value: "15"
      },
      {
        label: "Real Estate",
        value: "32"
      }
    ]
  },
};

class App extends Component {
  render() {
    return (
        <div className="container">
          <div className="row">
            {/*Column 2D section*/}
            <div className="col-sm-12">
              <h3>Bar 2D Chart</h3>
              <ReactFC {...chartConfigs_colunm2d} />
            </div>
          </div>
        </div>)
  }
}

export default App;
