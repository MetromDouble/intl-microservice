import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as d3 from 'd3';
import { withFauxDOM } from 'react-faux-dom';

class LocaleTree extends Component {
  scaleColor = d3.scaleSequential(d3.interpolateViridis);
  scaleHeight = d3.scaleLinear();
  scaleWidth = d3.scaleBand().padding(0.1);

  propTypes = {
    data: PropTypes.array.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    animDuration: PropTypes.number,
    chart: PropTypes.object,
    connectFauxDOM: PropTypes.func.isRequired,
    animateFauxDOM: PropTypes.func.isRequired
  }
  defaultProps = {
    animDuration: 600
  }

  componentDidMount() {
    this.updateChart();
  }

  componentDidUpdate (prevProps) {
    const {
      data
    } = this.props;

    if (data !== prevProps.data) {
      this.updateChart();
    }
  }

  updateChart() {
    this.updateScales();
    const {
      data,
      width,
      height,
      animDuration,
      connectFauxDOM,
      animateFauxDOM
    } = this.props;

    const faux = connectFauxDOM('g', 'chart');
    const bars = d3.select(faux)
      .selectAll('.bar')
      .data(data, function key(d) { return d.item; });

    bars.exit()
      .transition().duration(animDuration)
        .attr('y', height)
        .attr('height', 0)
        .style('fill-opacity', 0)
      .remove();

    bars.enter()
      .append('rect')
        .attr('class', 'bar')
        .attr('y', height)
        .attr('x', width )
        .attr('width', 0)
        .attr('height', 0)
        .attr('rx', 5 ).attr('ry', 5 )
      .merge(bars)
        .transition().duration(animDuration)
        .attr('y', (d) => ( this.scaleHeight(d.count) ))
        .attr('height', (d) => (height - this.scaleHeight(d.count)) )
        .attr('x', (d) => ( this.scaleWidth(d.item) ) )
        .attr('width', this.scaleWidth.bandwidth() )
        .style('fill',  (d, i) => ( this.scaleColor(i) ));

    animateFauxDOM(800);
  }

  updateScales() {
    const { data, width, height } = this.props;
    this.scaleColor.domain([0, data.length]);
    this.scaleWidth
      .domain(data.map((d) => (d.item)))
      .range([0, width]);
    this.scaleHeight
      .domain(d3.extent(data, (d) => (d.count)))
      .range([height - 20, 0]);
  }

  render() {
    const {
      width,
      height,
      chart
    } = this.props;
    return (
      <svg width={width} height={height}>
        {chart}
      </svg>
    );
  }
}

export default withFauxDOM(LocaleTree);
