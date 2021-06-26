import React from 'react';
import ReactECharts from 'echarts-for-react';
import Wine from '../wine.json';

//interface for our average function 
interface Avg{
  (data:number[][]):number[];
  }

// calAvg : calculate the average of malic acid for each of the three classes of alcohol
var calAvg:Avg = function(data:number[][]):number[]{ 
  let sums = [0,0,0]; //store sum of malic acid value of each class of alcohol
  let avgs = [0,0,0]; // store average of malic aciid of each class of alcohol
  let counts = [0,0,0]; // counts the number of rows for each class of alcohol
  for(let i=0;i<data.length;i++){
    //data[i][0] : class of alcohol
    switch(data[i][0]){
        case 1:
          sums[0] += data[i][2]; // malic acid value
          counts[0]++;
          break;
        case 2:
          sums[1] += data[i][2]; // malic acid value
          counts[1]++;
          break;
        case 3:
          sums[2] += data[i][2]; // malic acid value
          counts[2]++;
          break;
    }
  }

  
  avgs = [sums[0]/counts[0],sums[1]/counts[1],sums[2]/counts[2]]; // array for storing average of malic acid for each class
  return avgs;
}



// Functional Componenet for returning the Bar chart 

const BarChart: React.FC = () => {
  // options value
    const options = {
     xAxis: {
       type: 'category',
       name:'Types of Alcohol',
       data:['alcohol1','alcohol2','alcohol3'],
       
     },
     yAxis: {
       type: 'value',
       name:'Average Malic Acid', 
     },
     dataset:{
       source:Wine.data, // data source : wine data 
     },
     title: {
       left: 'center',
       text: 'Bar Chart'
     },
     series: 
       {
         type: 'bar',
         data:calAvg(Wine.data),
         
       },
     tooltip: {
       trigger: 'axis', // pointer to e triggred by axis 
       axisPointer: {
         type: 'shadow'
         }
      },
      // media query for different sizes of screen
     media:[
      {
        option:{
          // toolbox for image saving feature
           toolbox: {
             right: 10,
           feature: {
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
           right:10
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

 export default BarChart;