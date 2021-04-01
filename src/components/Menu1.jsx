import React from 'react';

export default class Menu1 extends React.Component{
  constructor(props) {
    super(props);

  }



  render(){
    return(
      <div open={this.props.open} onClose={this.props.handleClose}>
        <button click={this.props.ClickClose} type="button" id="js-buttonHamburger" className={"c-button" + " " + "p-hamburger"} aria-controls="global-nav" aria-expanded="false">
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
