// let filename = 'data/Airbag_vp_Plot1.csv';
// d3.csv(filename).then(function(loadedData) {

//   let dt =   [];
//   let labels = [];
//   let data1 = [];
  
//   for (let i=0; i < loadedData.length; i++) {
    
//     let time =    Math.floor( loadedData[i].time);
//     let minCurve = loadedData[i].min;
//     let maxCurve = loadedData[i].max;
    
    
//     labels.push(time);
//     data.push(minCurve);    
//     data1.push(maxCurve);
//   }

var trace1 = {
    x: [1 , 2 , 3],
    y: [20000, 25000, 35000],
    name: 'yaxis1 data',
    type: 'scatter'
  };
  
  var trace2 = {
    x: [3 , 4 ,5 ],
    y: [40000, 45000, 55000],
    name: 'yaxis2 data',
    yaxis: 'y2',
    type: 'scatter'
  };
  
  var trace3 = {
    x: time,
    y: [40000, 50000, 60000],
    name: 'yaxis3 data',
    yaxis: 'y3',
    type: 'scatter'
  };
  
  var trace4 = {
    x: [5, 6, 7],
    y: [400000, 500000, 600000],
    name: 'yaxis4 data',
    yaxis: 'y4',
    type: 'scatter'
  };
  
  var data = [trace1, trace2 , trace3, trace4];
  
  var layout = {
    title: 'multiple y-axes example',
    width: 800,
    xaxis: {domain: [0.3, 0.7]},
    yaxis: {
      title: 'yaxis title',
      titlefont: {color: '#1f77b4'},
      tickfont: {color: '#1f77b4'}
    },
    yaxis2: {
      title: 'yaxis2 title',
      titlefont: {color: '#ff7f0e'},
      tickfont: {color: '#ff7f0e'},
      anchor: 'free',
      overlaying: 'y',
      side: 'left',
      position: 0.15
    },
    yaxis3: {
      title: 'yaxis4 title',
      titlefont: {color: '#d62728'},
      tickfont: {color: '#d62728'},
      anchor: 'x',
      overlaying: 'y',
      side: 'right'
    },
    yaxis4: {
      title: 'yaxis5 title',
      titlefont: {color: '#9467bd'},
      tickfont: {color: '#9467bd'},
      anchor: 'free',
      overlaying: 'y',
      side: 'right',
      position: 0.85
    }
   };
  
  Plotly.newPlot('myDiv', data , layout);
// });