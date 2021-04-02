import React from 'react';


export default class Buger extends React.Component{
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div >
        <button
          onClick={this.props.BugerClick}
          type="button"
          className={"c-button" + " " + "p-hamburger"}
          aria-controls="global-nav"
         aria-expanded={this.props.BugerClick}
        >

            <span className={"p-hamburger__line" + " " + "to-top"}></span>
            <span className="hamburger__text">
              Menu
            <span className="u-visuallyHidden">
          メニューを開閉する
            </span>
            </span>
            <span className={"p-hamburger__line" + " " + "to-bottom"}></span>
          </button>
      </div>
    )
    }
}
