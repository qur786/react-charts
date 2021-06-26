import React from 'react';
import ReactECharts from 'echarts-for-react';
import Wine from '../wine.json'; // json file for wine dataset

const ScatterChart: React.FC = () => {
 // Option value for the chart
    const options = { 
   visualMap:{
        
        symbolSize:50,
        
   },
   // value for x cordinate zoom
      dataZoom: {
        show:true,
        height:20,
        type:'inside',
        xAxisIndex:[0],
        start:0,
        end:100,
        filterMode:'filter'
    },
     xAxis:
     {
       type:'value',
       name:'Color-Intensity'
     },
     yAxis:{
       type:'value',
       name:'Hue',
       encode:{x:10,y:11}
     },
    
     dataset:{
       source:Wine.data, // data of wine data set
     },

     title: {
       left: 'center',
       top:'top',
       text: 'Scatter Chart'
   },

     series: 
       {
         type:'scatter',
         encode:{x:10,y:11}, // data from 10th column : Color-Intensity and 11th column : Hue of Wine dataset
       
       },
     tooltip: {
       trigger: 'item', //pointer to be triggered by individual data item
       axisPointer: {
         show:true,
         type:'cross', // for cross pointer
     }
     },
     // for media queries
     media:[
       {
         
         option:{
            toolbox: {
              right: 10,
            feature: {
                dataZoom: {},
                restore: {},
                  saveAsImage: {}
              }
          },

           grid:{
           width:'80%',
           right:90,
           top:50,
           bottom:20
           },
           visualMap:{
            top:50
          }
        }
      },
        {
         query:{
          maxWidth:328,
          maxHeight:560,
        },
         option:{
           toolbox:{
             top:20,
           },
           grid:{
              width:'55%',
              left:'20%',
              top:60,
              right:0
           },
           visualMap:{
             top:60
           }
         }
      },
      {
        query:{
         maxWidth:375,
         maxHeight:812,
       },
        option:{
          toolbox:{
            top:20,
          },
          grid:{
             width:'60%',
             left:'20%',
             top:60,
             right:0
          },
          visualMap:{
            top:60
          }
        }
     },
       
     ]
   };
   return <ReactECharts  option={options} />;
 };

 export default ScatterChart;