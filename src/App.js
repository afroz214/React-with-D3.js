import React, { useEffect, useState } from 'react'
import * as d3 from 'd3'
import { curveBasis } from 'd3'

const App = () => {
  const data = [
    { id: 1, value: 30 },
    { id: 2, value: 60 },
    { id: 3, value: 30 },
    { id: 5, value: 20 },
    { id: 6, value: 40 },
    { id: 7, value: 50 },
    { id: 8, value: 30 },
    { id: 9, value: 60 },
    { id: 10, value: 30 },
    { id: 11, value: 80 },
    { id: 12, value: 50 },
    { id: 13, value: 30 },
    { id: 14, value: 70 },
    { id: 15, value: 40 },
    { id: 16, value: 60 },
    { id: 17, value: 30 },
    { id: 18, value: 80 },
    { id: 19, value: 40 },
    { id: 20, value: 67 },
    { id: 21, value: 20 },
    { id: 22, value: 50 },
    { id: 23, value: 40 },
    { id: 24, value: 80 },
    { id: 25, value: 70 },
    { id: 26, value: 20 },
    { id: 27, value: 60 },
    { id: 28, value: 40 },
    { id: 29, value: 70 },
    { id: 30, value: 90 },
  ]

  const svgWidth = 700
  const svgHeight = 500;
    const margin = { top: 20, right: 20, bottom: 30, left: 50 };
    const width = svgWidth - margin.left - margin.right;
    const height = svgHeight - margin.top - margin.bottom;


    const x = d3.scaleLinear()
        .rangeRound([0, width]);

    const y = d3.scaleLinear()
        .rangeRound([height, 0]);

        const line = d3.line()
          .x((d) => x(d.id))
          .y((d) => y(d.value))
          .curve(curveBasis)
          x.domain(d3.extent(data, (d) => d.id ));
          y.domain(d3.extent(data, (d) => d.value ))

    

        useEffect(() => {

        const svg = d3.select('svg')
        .attr("width", svgWidth)
        .attr("height", svgHeight);
        
        const g = svg.append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

          

          g.append("g")
              .attr("transform", "translate(0," + height + ")")
              .call(d3.axisBottom(x).tickSizeOuter(0))
              .append('text')
              .attr('fill', '#000')
              .attr("x", width - 30)
              .attr("y", -10)
              .text("No. Of Days")
              .select(".domain")

          g.append("g")
              .call(d3.axisLeft(y).tickSizeOuter(0))
              .append("text")
              .attr("fill", "#000")
              .attr("transform", "rotate(-90)")
              .attr("y", 16)
              .text("Price ($)");

          g.append("path")
              .datum(data)
              .attr("fill", "none")
              .attr("stroke", "red")
              .attr("stroke-linejoin", "round")
              .attr("stroke-linecap", "round")
              .attr("stroke-width", 1.5)
              .attr("d", line)
        }, [])

  return (
    <div className="container">
      <h2 className="petrol">Petrol price's changing according to days</h2>
      <p className="price">Price ($)</p>
      <svg></svg>
      <p>No. Of Days</p>
    </div>
  )
}

export default App
