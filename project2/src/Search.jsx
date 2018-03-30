import React, { Component } from 'react';
import SearchReturn from './SearchReturn'
import FinalOuts from './FinalOuts'
import SelectorReturn from './SelectorReturn'


class Search extends Component {
  constructor(props) {
    super(props);
    this.handleDeptChange = this.handleDeptChange.bind(this);
    this.handleProfChange = this.handleProfChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleRoomChange = this.handleRoomChange.bind(this);
    this.state = {Department: '',
    Professor: '',
    Title: '',
    Room: ''};
  }

  handleDeptChange(event){
    this.setState({Department: event});
  }

  handleProfChange(event){
    this.setState({Professor: event});
  }

  handleTitleChange(event){
    this.setState({Title: event});
  }

  handleRoomChange(event){
    this.setState({Room: event});
  }

  render() {
    return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 text-center bg-primary">
          <h1 >Course scheduling</h1>
        </div>
        <p className='col-12 text-center'>
          What classes/Professors/Buildings are you looking for next year?
        </p>


        <div className="col-2 ">
          <SearchReturn class='form-control input-sm' id="Professor Search" placeholder="Type In Here" value={this.state.Professor} onChange={this.handleProfChange}></SearchReturn>
        </div>

        <div className="col-12">
          <FinalOuts classProf={this.state.Professor} classRoom={this.state.Room} classTitle={this.state.Title}></FinalOuts>
        </div>
      </div>
    </div>
    );
  }
}
export default Search
