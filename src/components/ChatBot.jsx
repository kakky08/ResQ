import React from 'react';
import defaultDataset from "../dataset";
import '../assets/styles/style.css';
import { AnswersList,Chats } from "../components/index";
import { InsertInvitation } from '@material-ui/icons';
import FormDialog from '../components/Forms/FormDialog';
import Whiplash from './Answer/Whiplash';
import { useHistory } from "react-router-dom";


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: [],
      chats: [],
      currentId: "init",
      dataset: defaultDataset,
      open: false,
      answer1: false
    }
    this.selectAnswer = this.selectAnswer.bind(this)
    this.ansewer1ClickOpen = this.ansewer1ClickOpen.bind(this)
    this.ansewer1Close = this.ansewer1Close.bind(this)
    this.handleClickOpen = this.handleClickOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)

  }

  displayNextQuestion = (nextQuestionId) => {
    const chats = this.state.chats
    chats.push({
      text: this.state.dataset[nextQuestionId].question,
      type: 'question'
    })

    this.setState({
      answers: this.state.dataset[nextQuestionId].answers,
      chats: chats,
      currentId: nextQuestionId
    })
  }

  selectAnswer = (selectedAnswer, nextQuestionId) => {
    switch (true) {
      case (nextQuestionId === 'init'):
        setTimeout(() => this.displayNextQuestion(nextQuestionId), 500);
        break;
      case (nextQuestionId === 'contact'):
        this.handleClickOpen();
        break;
      case (nextQuestionId === 'answer'):
        const b = document.createElement('a');
        b.href = "http://localhost:3000/ChatBot/Whiplash";
        b.click();
        break;
      /* case (nextQuestionId == 'answer'):
        const answers = useHistory();
        const onClickanswer = () => answers.push("/");
        const answer = document.createElement("button");
        answer.type = 'button';
        answer.onClick(onClickanswer);
        break; */
      //case!
        // アンサーの関数を宣言
        // (nextQuestionId === 'answer'):
        // アンサー関数が呼ばれ、アンサーが開く
        //break;
      case (/^https:*/.test(nextQuestionId)):
        const a = document.createElement('a');
        a.href = nextQuestionId;
        a.target = '_blank';
        a.click();
        break;
      default:
        const chats = this.state.chats;
        chats.push({
      text: selectedAnswer,
      type: 'answer'
    })

    this.setState({
      chats: chats
    })
        setTimeout(() => this.displayNextQuestion(nextQuestionId), 1000);
        break;
    }
  }

 ansewer1ClickOpen= () => {
  this.setState({answer1:true})
 }
  ansewer1Close= () => {
  this.setState({answer1:false})
  }

handleClickOpen = () => {
    this.setState({open:true});
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  componentDidMount() {
    const initAnswer = "";
    this.selectAnswer(initAnswer, this.state.currentId);
  }

  componentDidUpdate() {
    const scrollArea = document.getElementById('scroll-area')
    if (scrollArea) {
      scrollArea.scrollTop = scrollArea.scrollHeight
    }
  }

  render(){
    return (
      <section className="c-section">
        <div className="c-box">
          <Chats chats={this.state.chats}/>
          <AnswersList answers={this.state.answers} select={this.selectAnswer} />
          <FormDialog open={this.state.open} handleClose={this.handleClose} />
          {/* <Whiplash answer1={this.state.answer1} ansewer1Close={this.ansewer1Close}/> */}
        </div>

      </section>
    );
  }
}
