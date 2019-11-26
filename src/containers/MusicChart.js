import React from 'react'
import ITunes from '../components/ITunes'

class MusicChart extends React.Component{
  constructor(props){
    super(props);
    this.state={
      musicChart: [],
      currentplay: null
    }
  }
  componentDidMount(){
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json'
    fetch(url).then(res=> res.json())
    .then(data => this.setState({
      musicChart:data.feed.entry
    }))
    .catch(err=>console.error);
  }
  render(){
    return (
      <div className="chart">
      <h1>Top 20 iTunes</h1>
      <ITunes musicChart ={this.state.musicChart}/>
      </div>
    )
  }
}
export default MusicChart;
