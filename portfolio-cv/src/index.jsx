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

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <MenuMobile />
      <Header />
      <Opening />
      <Switch>
        <Route path="/" exact component={AboutMe} />
        <Route path="/formation" exact component={Formation} />
        <Route path="/projects" exact component={Projects} />
        <Route path="/resume" exact component={Resume} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/*" exact component={AboutMe} />
      </Switch>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
