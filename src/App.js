import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Headar/Header";
import Home from "./components/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import NotFound from "./components/NotFound/NotFound";
import Buy from "./components/buy/Buy";

function App() {
  return (
    <Router>
      <Header> </Header>

      <Switch>
        <Route path="/home">
          <Home> </Home>
        </Route>

        <Route exact path="/">
          <Home> </Home>
        </Route>

        <Route path="/buy">
          <Buy> </Buy>
        </Route>

        <Route path="/services">
          <Services> </Services>
        </Route>

        <Route path="/contact">
          <Contact> </Contact>
        </Route>

        <Route path="/about">
          <About> </About>
        </Route>

        <Route exact path="*">
          <NotFound> </NotFound>
        </Route>
      </Switch>
      <Footer> </Footer>
    </Router>
  );
}

export default App;
