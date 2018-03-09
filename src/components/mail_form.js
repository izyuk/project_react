import React from 'react';
// import nodemailer from 'nodemailer'

class Form extends React.Component{
  render(){
    return(
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
    )
  }
};
export default Form;