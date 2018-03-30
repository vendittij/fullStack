import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';


class FinalOuts extends Component{
  constructor(props){
    super(props)
    this.state = {output: null}
  }

  componentWillMount(){

      const url =
        "https://www.eg.bucknell.edu/~amm042/service/q?text="+this.props.classProf+"&limit=20"+".json"
      fetch(url)
        .then(rsp => rsp.json())
        .then(output => {
          console.log('Pass Test', output)
          this.setState({output: output})
          return output.message
        })
        .catch(err=> console.log("ERR",err))

  }

  componentWillReceiveProps(nextProps){
  this.props = nextProps

  if(this.props.classProf !== null){
      const url =
        "https://www.eg.bucknell.edu/~amm042/service/q?text="+this.props.classProf+"&limit=20"+".json"
      fetch(url)
        .then(rsp => rsp.json())
        .then(output => {
          console.log('Pass Test', output)
          this.setState({output: output})
          return output.message
        })
        .catch(err=> console.log("ERR",err))
        }
}



  render(){

  if (this.state.output){
  return (
  <BootstrapTable data={ this.state.output.message } striped hover condensed>
      <TableHeaderColumn dataField='Title' isKey>Title</TableHeaderColumn>
      <TableHeaderColumn dataField='CRN'> CRN </TableHeaderColumn>
      <TableHeaderColumn dataField='Instructor'> Professor </TableHeaderColumn>
      <TableHeaderColumn dataField='Meeting Time'> Class Time </TableHeaderColumn>
      <TableHeaderColumn dataField='Room'> Classroom </TableHeaderColumn>
  </BootstrapTable>

    )
    }
    return(
    <div></div>
    )
  }
}

export default FinalOuts
