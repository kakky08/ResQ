import { Link } from "react-router-dom";
import React from 'react';
export default class Whiplash extends React.Component  {



  constructor(props) {
    super(props);
    this.state = { whiplash: false };
  }

  render() {
    return (

      <div whiplash={this.props.open}
        Close={this.props.handleClose}>
        <header className="header">
          <div>
            <span></span>
            <p>Menu</p>
            <span></span>
          </div>
        </header>
        <h1 className="answerTitle">診察結果</h1>
        <p className="answerSymptomatology">最も疑わしい症状名は<br /><strong>症状名</strong><br />です。</p>
        <ul className="answerList">
          <li className="hospital">
            <h2 className="whereGoing">どこに行くべき？</h2>
            <p className="hospital">整形外科</p>
          </li>
          <li className="features">
            <h2 className="featureTitle">症状の特徴</h2>
              <p className="feature">症状の特徴について</p>
          </li>
          <li className="mainFeature">
            <h2 className="mainFeatureTitle">主な症状</h2>
          <ul lassName="mainFeatureList">
            <li lassName="mainFeatureListItem"></li>
            <li lassName="mainFeatureListItem"></li>
            <li lassName="mainFeatureListItem"></li>
          </ul>
          </li>
           <li className="cause">
            <h2 className="causeTitle">主な原因</h2>
          <ul className="causeList">
            <li className="causeListItem"></li>
            <li className="causeListItem"></li>
            <li className="causeListItem"></li>
          </ul>
          </li>
           <li className="treatment">
            <h2 className="treatmentTitle">主な治療法</h2>
          <ul className="treatmentList">
            <li className="treatmentListItem"></li>
            <li className="treatmentListItem"></li>
            <li className="treatmentListItem"></li>
          </ul>
          </li>
        </ul>
        <button className="searchButton">近くの病院・整骨院を探す</button>
    </div>
    )
  }

};
