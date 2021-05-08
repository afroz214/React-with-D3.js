import React, { useEffect, useRef } from 'react'
import * as d3 from 'd3'

const Chart = ({ datas, w, h }) => {

    const myRef = useRef()

    useEffect(() => {

       const accessToRef = d3.select(myRef.current)
        .append("svg")
        .attr("width",w)
        .attr("height",h)
        .style("background-color", "#cccccc")
        .style("padding", 10)
        .style("margin-left", 50);

        accessToRef.selectAll("rect")
            .data(datas)
            .enter()
            .append("rect")
            .attr("x", (d,i) => i *70)
            .attr("y", (d,i) => h-10*d)
            .attr("width", 65)
            .attr("height", (d,i) => d*10)
            .attr("fill", (d,i) => d > 35 ? "tomato" : "green")
    }, [])

    return (
        <div className="container">
            <div ref={myRef}></div>
        </div>
    )
}

export default Chart
