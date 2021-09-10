import Modal from "react-modal";
import { Header } from "./components/Header";
import Router from "./Routes/index";
import { GlobalStyle } from "./styles/global";

Modal.setAppElement("#root");

export function App() {
  
  return (
    <div className="App">
      <Header />
      <Router />
      <GlobalStyle />
    </div>
  );
}
