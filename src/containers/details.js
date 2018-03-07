import React, {Component} from 'react';
import {connect} from 'react-redux';


class Details extends Component{
  closeModal(){
    var removeFromBody = document.getElementsByTagName('BODY');
    removeFromBody[0].classList.remove("content-active");
    removeFromBody[0].classList.remove("modal-active");

    document.getElementsByClassName('poptrox-overlay')[0].style.display = 'none';
    document.getElementsByClassName('poptrox-popup')[0].style.display = 'none';
    document.getElementsByClassName('loader')[0].style.display = 'none';
    document.getElementsByClassName('pic')[0].style.display = 'none';
    document.getElementsByClassName('caption')[0].style.display = 'none';
    document.getElementsByClassName('closer')[0].style.display = 'none';
    document.getElementsByClassName('poptrox-popup')[0].classList.remove('loading');
    document.getElementsByClassName('pic')[0].children[0].removeAttribute('style');
    // document.getElementsByClassName('pic')[0].children[0].removeAttribute('alt');
  }
  // createElement(){
  //   var image = document.createElement('IMG');
  //   image.setAttribute('src', this.props.project.preview);
  //   image.setAttribute('alt', this.props.project.name);
  //   console.log(image);
  //   return image;
  // }
  render(){
    if(!this.props.project){
      return true;
    }
    return(
      <div className="poptrox-overlay" style={{position: 'fixed', left: '0px', top: '0px', zIndex: '20000', width: '100%', height: '100%', textAlign: 'center', cursor: 'pointer', display: 'none', opacity: '1'}}>
        <div className="aBackgr" onClick={this.closeModal} style={{position:"absolute",left:"0",top:"0",width:"100%",height:"100%",background:"#000000",opacity:"0",filter:"alpha(opacity=0)"}}></div>
        <div className="poptrox-popup" style={{display: 'none', verticalAlign: 'middle', position: 'relative', zIndex: '1', cursor: 'pointer', minWidth: '150px', minHeight: '150px', width: 'auto', height: 'auto'}}>
          <div className="loader"  style={{display: 'none'}}></div>
          <div className="pic" style={{display: 'none'}}>
            <img src={this.props.project.preview} alt={this.props.project.name}/>
          </div>
          <div className="caption" style={{display: 'none'}}>
            <h2>{this.props.project.name}</h2>
            <p>{this.props.project.description}</p>
          </div>
          <span className="closer" style={{cursor: "pointer"}}></span>
        </div>
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
