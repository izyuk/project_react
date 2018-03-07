import React from 'react';


class Header extends React.Component{
  addClass(e){
    e.preventDefault();
    var el = document.getElementById('footer');
    el.classList.add("active");
    var addToBody = document.getElementById('body');
    addToBody.classList.add("content-active");
  }

  render(){
    return(
      <header id="header">
        <h1>
          <a href="index.html">
            <strong>Multiverse</strong>
            by HTML5 UP</a>
        </h1>
        <nav>
          <ul>
            <li>
              <a href="#footer" onClick={this.addClass} className="icon fa-info-circle">About</a>
            </li>
          </ul>
        </nav>
          <script>
            $(document).ready(function(){
                setTimeout(function(){
                  document.getElementById('body').classList.remove('loading')
                }, 500)
            })
          </script>
      </header>
    )
  }
}
//
// const Header = () => (
//
// );

export default Header;
