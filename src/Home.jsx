import { useHistory } from "react-router-dom";
export const Home = () => {
  const history = useHistory();
  const onClickChatBot = () => history.push("./chatBot/");
  return (
    <div className={"c-box" + " " + "home"}>
      <h1 className="homeTitle">ResQ</h1>
      <button onClick={onClickChatBot} className="homeButton">診察を始める</button>
    </div>
  );
};
