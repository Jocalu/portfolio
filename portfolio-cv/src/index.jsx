import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter, Switch, Route,
} from 'react-router-dom';
import Header from './components/header/Header';
import Opening from './components/opening/Opening';
import './index.scss';
import AboutMe from './pages/about-me/AboutMe';
import Formation from './pages/formation/Formation';
import Resume from './pages/resume/Resume';
import Contact from './pages/contact/Contact';
import Projects from './pages/projects/Projects';
import Footer from './components/footer/Footer';
import MenuMobile from './components/menu-mobile/MenuMobile';
import informationES from './constants/information-jose-ES';
/* import informationES from './constants/information-jose-ES'; */

/* const [, setState] = useState({
  language: informationEN,
});

const changeLanguage = () => {
  setState({ language: informationES });
}; */

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <MenuMobile information={informationES} />
      <Header information={informationES} />
      <Opening />
      <Switch>
        <Route exact path="/"><AboutMe information={informationES} /></Route>
        <Route exact path="/formation"><Formation information={informationES} /></Route>
        <Route exact path="/projects"><Projects information={informationES} /></Route>
        <Route exact path="/resume"><Resume information={informationES} /></Route>
        <Route exact path="/contact"><Contact information={informationES} /></Route>
        <Route exact path="/*"><AboutMe information={informationES} /></Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
