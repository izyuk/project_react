import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {select} from '../actions/index';

class ProjectList extends Component {
  additional() {
    document.getElementById('body').classList.add('modal-active');
    document.getElementsByClassName('poptrox-popup')[0].classList.add('loading');
    document.getElementsByClassName('poptrox-overlay')[0].style.display = 'flex';
    document.getElementsByClassName('poptrox-popup')[0].style.display = 'block';
    document.getElementsByClassName('poptrox-popup')[0].style.margin = 'auto';


    var loader = document.getElementsByClassName('loader')[0];
    var loaderHeight = /*loader.naturalHeight*/ 32;
    console.log(loaderHeight);


    var popup = document.getElementsByClassName('poptrox-popup')[0];
    popup.style.width = loaderHeight+'px';
    popup.style.height = loaderHeight+'px';


    var image = new Image();
    image = document.getElementsByClassName('pic')[0].children[0];

    function jsTransitionScale(elm, loaderW, loaderH, width, height, speed) {
      var FPS = 60;

      var original_width = elm.naturalHeight,
        original_height = elm.naturalHeight;

      var width_range = width - original_width,
        height_range = height - original_height;

      var timeout = speed / FPS,
        width_change = width_range / FPS,
        height_change = height_range / FPS;

      var finish = new Date().getTime() + speed;

      var begin = setInterval(function () {
        original_width += width_change;
        original_height += height_change;

        elm.style.width = width + "px";
        elm.style.height = height + "px";

        if (new Date().getTime() >= finish) {
          elm.style.width = width;
          elm.style.height = height;
          clearInterval(begin);
        }
      }, timeout);
    }

    document.getElementsByClassName('loader')[0].style.display = 'block';
    var delay = 1000;
    function imageResize(imageWidth, imageHeight, breakpointToCheck, time) {

      setTimeout(function () {
        var winWidth = window.innerWidth;
        var winHeight = window.innerHeight;

        for (var key in breakpointToCheck) {
          if (breakpointToCheck[key] < winWidth) {
            document.getElementsByClassName('loader')[0].style.display = 'block';
            document.getElementsByClassName('pic')[0].style.display = 'none';
            document.getElementsByClassName('caption')[0].style.display = 'none';
            document.getElementsByClassName('closer')[0].style.display = 'none';
            document.getElementsByClassName('poptrox-popup')[0].classList.add('loading');
            if (imageWidth > breakpointToCheck[key]) {
              var ratio = breakpointToCheck[key] / imageWidth;
              imageWidth = imageWidth * ratio;
              imageHeight = imageHeight * ratio;
            }
            if (imageHeight > winHeight) {
              var ratio = imageHeight / winHeight;
              imageWidth = imageWidth / (ratio+.5);
              imageHeight = imageHeight / (ratio+.5);
            }
            setTimeout(function () {
              document.getElementsByClassName('loader')[0].style.display = 'none';
              document.getElementsByClassName('pic')[0].style.display = 'block';
              document.getElementsByClassName('caption')[0].style.display = 'block';
              document.getElementsByClassName('closer')[0].style.display = 'block';
              document.getElementsByClassName('poptrox-popup')[0].classList.remove('loading');
            }, 1500);
            break;
          }
        }
        image.style.width = imageWidth+'px';
        image.style.height = imageHeight+'px';
        // setTimeout(function () {
        //   popup.style.width = imageWidth+'px';
        //   popup.style.height = imageHeight+'px';
        // }, 10);
        jsTransitionScale(popup, loaderHeight, loaderHeight, imageWidth, imageHeight, (time/2));

      }, time);

    }
    // var nImage = new Image();
    // nImage = document.getElementsByClassName('pic')[0].children[0];
    // function newImage(image) {
      if(image && typeof image != 'undefined'){
        var image = new Image();
        image = document.getElementsByClassName('pic')[0].children[0];
        var imageWidth = image.naturalWidth;
        var imageHeight = image.naturalHeight;
        console.log(imageWidth);
        console.log(imageHeight);
        var breakpointToCheck = {
          xlarge: 1680,
          large: 1280,
          medium: 980,
          small: 736,
          xsmall: 480
        };
        imageResize(imageWidth, imageHeight, breakpointToCheck, delay);
      }
      console.log(image);
      image.onload = function () {

        var imageWidth = image.naturalWidth;
        var imageHeight = image.naturalHeight;
        console.log(imageWidth);
        console.log(imageHeight);
        var breakpointToCheck = {
          xlarge: 1680,
          large: 1280,
          medium: 980,
          small: 736,
          xsmall: 480
        };
        imageResize(imageWidth, imageHeight, breakpointToCheck, delay);
        window.onresize = function () {
          imageResize(imageWidth, imageHeight, breakpointToCheck, delay);
        }
        console.log(imageWidth);
        console.log(imageHeight);
      }
    // }
    // newImage(nImage);

    setTimeout(function () {
      document.getElementsByClassName('loader')[0].style.display = 'none';
      document.getElementsByClassName('pic')[0].style.display = 'block';
      document.getElementsByClassName('caption')[0].style.display = 'block';
      document.getElementsByClassName('closer')[0].style.display = 'block';
      document.getElementsByClassName('poptrox-popup')[0].classList.remove('loading');
    }, 2500);
  }

  showList() {
    return this.props.projects.map((project) => {
      return (
        <article key={project.id} className="thumb">
          <a onClick={() => {
            this.additional();
            this.props.select(project)
          }} className="image">
            <img src={project.preview} alt=""/>
          </a>
          <h2>{project.name}</h2>
          <p>{project.description}</p>
        </article>
      );
    });
  }

  removeClass() {
    var el = document.getElementById('footer');
    el.classList.remove("active");
    var removeFromBody = document.getElementsByTagName('BODY');
    removeFromBody[0].classList.remove("content-active");
  }

  render() {
    return (
      <div id="main" onClick={this.removeClass}>
        {this.showList()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    projects: state.projects
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({select: select}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(ProjectList);
