import { ChatBot,Answer1, Whiplash } from "../components/index";

export const chatBotRoutes = [
  {
    path: "/ChatBot",
    exact: true,
    children: <ChatBot/>
  },
  {
    path: "/ChatBot/whiplash",
    exact: true,
    children: <Whiplash/>
  }
]
