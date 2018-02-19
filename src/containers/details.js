import React, {Component} from 'react';
import {connect} from 'react-redux';

class Details extends Component{
  render(){
    if(!this.props.project){
      return true;
    }
    return(
      <div>
        <h2>{this.props.project.name}</h2>
        <img src={this.props.project.preview} /><br />
        <p>{this.props.project.description}</p>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return{
    project: state.active
  };
}

export default connect(mapStateToProps)(Details);
