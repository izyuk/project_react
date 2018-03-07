import React from 'react';

class Footer extends React.Component {
  removeClass(){
    var el = document.getElementById('footer');
    el.classList.remove("active");
      var removeFromBody = document.getElementsByTagName('BODY');
      removeFromBody[0].classList.remove("content-active");
  }
  render() {
    return (
      <footer id="footer" className="panel">
        <div className="inner split">
          <div>
            <section>
              <h2>Magna feugiat sed adipiscing</h2>
              <p>Nulla consequat, ex ut suscipit rutrum, mi dolor tincidunt erat, et scelerisque turpis ipsum eget quis orci mattis aliquet. Maecenas fringilla et ante at lorem et ipsum. Dolor nulla eu bibendum sapien. Donec non pharetra dui. Nulla consequat, ex ut suscipit rutrum, mi dolor tincidunt erat, et scelerisque turpis ipsum.</p>
            </section>
            <section>
              <h2>Follow me on ...</h2>
              <ul className="icons">
                <li>
                  <a href="" className="icon fa-twitter">
                    <span className="label">Twitter</span>
                  </a>
                </li>
                <li>
                  <a href="" className="icon fa-facebook">
                    <span className="label">Facebook</span>
                  </a>
                </li>
                <li>
                  <a href="" className="icon fa-instagram">
                    <span className="label">Instagram</span>
                  </a>
                </li>
                <li>
                  <a href="" className="icon fa-github">
                    <span className="label">GitHub</span>
                  </a>
                </li>
                <li>
                  <a href="" className="icon fa-dribbble">
                    <span className="label">Dribbble</span>
                  </a>
                </li>
                <li>
                  <a href="" className="icon fa-linkedin">
                    <span className="label">LinkedIn</span>
                  </a>
                </li>
              </ul>
            </section>
            <p className="copyright">
              &copy; Unttled. Design:
              <a href="http://html5up.net">HTML5 UP</a>.
            </p>
          </div>
          <div>
            <section>
              <h2>Get in touch</h2>
              <form method="post" action="#">
                <div className="field half first">
                  <input type="text" name="name" id="name" placeholder="Name"/>
                </div>
                <div className="field half">
                  <input type="text" name="email" id="email" placeholder="Email"/>
                </div>
                <div className="field">
                  <textarea name="message" id="message" rows="4" placeholder="Message"></textarea>
                </div>
                <ul className="actions">
                  <li><input type="submit" value="Send" className="special"/></li>
                  <li><input type="reset" value="Reset"/></li>
                </ul>
              </form>
            </section>
          </div>
        </div>
        <div className="closer" onClick={this.removeClass}></div>
      </footer>
    )
  }
};

export default Footer;
