import { Switch, Route } from "react-router-dom";
import { Home } from "../Home";
import { ChatBot, Answer1 } from "../components/index";
import { chatBotRoutes } from "./ChatBotRoutes";

export const Router = () => {
  return (
    <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route
          path="/ChatBot"
          render={() => (
            <Switch>
              {chatBotRoutes.map((route) => (
                <Route key={route.path} exact={route.exact} path={route.path}>
                  {route.children}
                </Route>
              ))}
            </Switch>
          )}
        ></Route>
      </Switch>
  )
}
