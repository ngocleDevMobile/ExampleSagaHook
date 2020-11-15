import React, {Component, useState} from 'react';
import {StyleSheet, View, Animated, TouchableOpacity, Dimensions} from 'react-native';
import Texts from 'react-native/Libraries/Text/Text'
import {Svg, G, Line, Rect, Text} from 'react-native-svg';
import * as d3 from 'd3';
import { back } from 'react-native/Libraries/Animated/src/Easing';
const data = [
  {label: 'Jan', value: 500, color: '#F55443'},
  {label: 'Feb', value: 312, color: '#FCBD24'},
  {label: 'Mar', value: 424, color: '#59838B'},
  {label: 'Apr', value: 745, color: '#4D98E4'},
  {label: 'May', value: 89, color: '#418E50'},
  {label: 'Jun', value: 434, color: '#7B7FEC'},
  {label: 'Jul', value: 650, color: '#3ABAA4'},
  {label: 'Aug', value: 980, color: '#F55443'},
  {label: 'Sep', value: 123, color: '#FCBD24'},
  {label: 'Oct', value: 186, color: '#59838B'},
  {label: 'Nov', value: 689, color: '#F55443'},
  {label: 'Dec', value: 643, color: '#4D98E4'},
];

const datas = [
  {label: 'Jan', value: 300, color: '#F55443'},
  {label: 'Feb', value: 200, color: '#FCBD24'},
  {label: 'Mar', value: 100, color: '#59838B'},
  {label: 'Apr', value: 450, color: '#4D98E4'},
  {label: 'May', value: 89, color: '#418E50'},
  {label: 'Jun', value: 434, color: '#7B7FEC'},
  {label: 'Jul', value: 650, color: '#3ABAA4'},
  {label: 'Aug', value: 290, color: '#F55443'},
  {label: 'Sep', value: 321, color: '#FCBD24'},
  {label: 'Oct', value: 186, color: '#59838B'},
  {label: 'Nov', value: 190, color: '#F55443'},
  {label: 'Dec', value: 467, color: '#4D98E4'},
];

const GRAPH_MARGIN = 20;
const GRAPH_BAR_WIDTH = 8;
const colors = {
  axis: '#E4E4E4',
  bars: '#15AD13',
};
const PlayerLog = () => {
  // Dimensions
  const SVGHeight = 350;
  const SVGWidth = 400;
  const graphHeight = SVGHeight - 2 * GRAPH_MARGIN;
  const graphWidth = SVGWidth - 2 * GRAPH_MARGIN;
  const round = 100;
  const unit = '€';
  // X scale point
  const xDomain = data.map((item) => item.label);
  const xRange = [0, graphWidth];
  const x = d3.scalePoint().domain(xDomain).range(xRange).padding(1);

  // Y scale linear
  const maxValue = d3.max(data, (d) => d.value);
  const topValue = Math.ceil(maxValue / round) * round;
  const yDomain = [0, topValue];
  const yRange = [0, graphHeight];
  const y = d3.scaleLinear().domain(yDomain).range(yRange);

  // top axis and middle axis
  const middleValue = topValue / 2;

  const [chart, setChart] = useState(data);

  const next = () => {
    setChart(data);
  }

  const back = () => {
    setChart(datas);
  }

  return (
    <View style={styles.container}>
      <Svg width={SVGWidth} height={SVGHeight}>
        <G
        x={10}
        //  y={graphHeight + GRAPH_MARGIN}
         >

 
          {/* Top value label */}
          {/* <Text
            x={graphWidth}
            textAnchor="end"
            y={y(topValue) * -1 - 5}
            fontSize={12}
            fill="black"
            fillOpacity={0.4}>
            {topValue + ' ' + unit}
          </Text> */}

          {/* top axis */}
          {/* <Line
            x1="0"
            y1={y(topValue) * -1}
            x2={graphWidth}
            y2={y(topValue) * -1}
            stroke={colors.axis}
            strokeDasharray={[3, 3]}
            strokeWidth="0.5"
          /> */}

          {/* middle axis */}
          {/* <Line
            x1="0"
            y1={y(middleValue) * -1}
            x2={graphWidth}
            y2={y(middleValue) * -1}
            stroke={colors.axis}
            strokeDasharray={[3, 3]}
            strokeWidth="0.5"
          /> */}

          {/* bottom axis */}
          {/* <Line
            x1="0"
            y1="2"
            x2={graphWidth}
            y2="2"
            stroke={colors.axis}
            strokeWidth="0.5"
          /> */}

          {/* bars */}
          {chart.map((item) => (
            <Rect
              key={'bar' + item.label}
              // x={x(item.label) - GRAPH_BAR_WIDTH / 2}
              // y={y(item.value) * -1}
              x={20}
              y={x(item.label) - GRAPH_BAR_WIDTH / 2}
              rx={2.5}
              width={y(item.value)}
              height={GRAPH_BAR_WIDTH}
              fill={item.color}
            />
          ))}

          {/* labels */}
          {chart.map((item) => (
            <Text
              fill="#000"
              key={'label' + item.label}
              fontSize="8"
              x={20}
              y={x(item.label) - 8}
              textAnchor='start'>
              {item.label}
            </Text>
          ))}
           {chart.map((item) => (
            <Text
              fill="#000"
              key={'label' + item.label}
              fontSize="8"
              x={y(item.value) + 30}
              y={x(item.label) +3}
              textAnchor='start'>
              {item.label}
            </Text>
          ))}
        </G>
      </Svg>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <TouchableOpacity style={{margin: 20}} onPress={() =>next()}>
            <Texts>Next</Texts>
        </TouchableOpacity>
        <TouchableOpacity style={{margin: 20}} onPress={() =>back()}>
            <Texts>Back</Texts>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PlayerLog;
