import React from 'react';


export default class Nav extends React.Component{
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div >
        <nav aria-expanded={this.props.open} className="nav">
          <p>ナビゲーションが開いたよ</p>
        </nav>
      </div>
    )
    }
}
