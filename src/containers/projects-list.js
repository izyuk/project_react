import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {select} from '../actions/index';

class ProjectList extends Component{
  showList(){
    return this.props.projects.map ((project) => {
      return(
        <article key={project.id} className="thumb">
					{/* <a href={project.preview} className="image"><img src={project.preview} alt="" /></a> */}
          <a onClick={() => this.props.select (project)} className="image"><img src={project.preview} alt="" /></a>
					<h2>{project.name}</h2>
					<p>{project.description}</p>
				</article>
      );
    });
  }
  removeClass(){
    var el = document.getElementById('footer');
    el.classList.remove("active");
    var removeFromBody = document.getElementById('body');
    removeFromBody.classList.remove("content-active");
  }
  render(){
    return(
      <div id="main" onClick={this.removeClass}>
        {this.showList ()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return{
    projects: state.projects
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({select: select}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(ProjectList);
