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
        Close={this.props.handleClose}
      className="c-box">
         <header className="header">
          <button type="button" id="js-buttonHamburger" className={"c-button" + " " + "p-hamburger"} aria-controls="global-nav" aria-expanded="false">
            <span className={"p-hamburger__line" + " " + "to-top"}></span>
            <span className="hamburger__text">
              Menu
            <span className="u-visuallyHidden">
          メニューを開閉する
            </span>
            </span>
            <span className={"p-hamburger__line" + " " + "to-bottom"}></span>
          </button>
        </header>
        <div className={"container" + " " + "over"}>
        <h1 className="answerTitle">〜 診察結果 〜</h1>
        <p className="answerSymptomatology"><span className="symptoms-left">最も疑わしい症状名は</span><br /><strong className="symptoms">むちうち</strong><br /><span className="symptoms-right">です。</span></p>
        <ul className="symptomsList">
          <li className="symptomsListItem">
              <h2 className="secondTitle">どこに行くべき？</h2>
              <p className="symptomsTextSpan">まずは<em className="symptomsTextEm">『 整形外科 』</em>に行きましょう！</p>
            <p className="symptomsText">
              その後のリハビリや施術は整骨院でも行えます。<br/>
              整形外科、整骨院を併用して通うこともできます。通いやすさや治療内容など総合的に判断して、通院する方を選ぶことをお勧めします。<br />
              また、事故の場合、整骨院に通院するためには、医師の許可と診断名、事故保険の担当者への報告が必要になります。<br />
              事故の場合は、整形外科、整骨院を併用して通院することをお勧めします。
            </p>
          </li>
          <li className="symptomsListItem">
            <h2 className="secondTitle">症状の特徴</h2>
            <p className="symptomsText">交通事故などによる首の痛み。首・肩・腕の痺れや異常感覚がある場合もある。事故後3週間経過して痛くなることも多い。</p>
          </li>
          <li className="symptomsListItem">
            <h2 className="secondTitle">主な症状</h2>
            <ul className="symptomsSubList">
              <li className="symptomsSubListItem">首の痛み</li>
              <li className="symptomsSubListItem">頭が重く感じる</li>
              <li className="symptomsSubListItem">肩こり</li>
              <li className="symptomsSubListItem">全身のだるさ</li>
              <li className="symptomsSubListItem">めまい・吐き気・頭痛</li>
              <li className="symptomsSubListItem">首・肩・腕の痺れ</li>
              <li className="symptomsSubListItem">慢性的な痛み</li>
            </ul>
          </li>

           <li className="symptomsListItem">
            <h2 className="secondTitle">主な原因</h2>
            <ul className="symptomsSubList">
              <li className="symptomsSubListItem">事故による急激な衝撃</li>
            </ul>
          </li>

           <li className="symptomsListItem">
            <h2 className="secondTitle">主な治療法</h2>
          <ul className="symptomsSubList">
            <li className="symptomsSubListItem">間欠的牽引（機械で首を引っ張る）</li>
            <li className="symptomsSubListItem">レーザー（痺れを伴う場合）</li>
              <li className="symptomsSubListItem">カラー（固定具）を首に装着</li>
              <li className="symptomsSubListItem">医療マッサージ</li>
              <li className="symptomsSubListItem">鍼灸</li>
              <li className="symptomsSubListItem">電気療法</li>
          </ul>
          </li>
          </ul>
        </div>
          <button className="searchButton">近くの病院・整骨院を探す</button>

    </div>
    )
  }

};
