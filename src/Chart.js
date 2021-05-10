import React, { useEffect } from 'react'
import * as d3 from 'd3'

const Chart = ({ datas }) => {

    const CHART_WIDTH = 800
    const CHART_HEIGHT = 400

    const xScale = d3.scaleBand().rangeRound([0 ,CHART_WIDTH]).padding(0.2).domain(datas.map(d => d.region))
    const yScale = d3.scaleLinear().range([CHART_HEIGHT, 0]).domain([0, d3.max(datas, d => d.value) + 11])

    useEffect(() => {

        const chartContainer = d3
        .select('svg')
        .attr('width', CHART_WIDTH)
        .attr('height', CHART_HEIGHT + 20)

        const chart = chartContainer

        chart
        .append('g')
        .call(d3.axisBottom(xScale).tickSizeOuter(0))
        .attr('transform', `translate(0, ${CHART_HEIGHT})`)

        chart
        .append('g')
        .call(d3.axisLeft(yScale).tickSizeOuter(0))
        .attr('transform', `translate(20, 0)`)

        chart
        .selectAll('rect')
        .data(datas)
        .enter()
        .append('rect')
        .classed('bar', true)
        .attr('width', xScale.bandwidth()) 
        .attr('height', data => CHART_HEIGHT - yScale(data.value))
        .attr('x', data => xScale(data.region)) 
        .attr('y', data => yScale(data.value))

        chart
        .selectAll('p')
        .data(datas)
        .enter()
        .append('text')
        .text(data => data.value)
        .attr('x', data => xScale(data.region) + xScale.bandwidth() / 2)
        .attr('y', data => yScale(data.value) - 10) 
        .attr('text-anchor', 'middle')

    }, [])

    return (
        <div id="app">
            <div id="chart">
                <p style={{textAlign: 'center'}}>No. Of Trillion In Dollars($)</p>
                <svg></svg>
                <p style={{textAlign: 'center'}}>Countries</p>
            </div>
        </div>      
    )
}

export default Chart




