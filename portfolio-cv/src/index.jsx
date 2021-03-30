import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter, Switch, Route,
} from 'react-router-dom';
import Header from './components/header/Header';
import Opening from './components/opening/Opening';
import './index.scss';
import AboutMe from './pages/about-me/AboutMe';
import AboutMeDelay from './pages/about-me-delay/AboutMeDelay';
import Formation from './pages/formation/Formation';
import Portfolio from './pages/portfolio/Portfolio';
import Resume from './pages/resume/Resume';
import Contact from './pages/contact/Contact';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Opening />
      <Header />
      <Switch>
        <Route path="/" exact component={AboutMeDelay} />
        <Route path="/about-me" exact component={AboutMe} />
        <Route path="/formation" exact component={Formation} />
        <Route path="/portfolio" exact component={Portfolio} />
        <Route path="/resume" exact component={Resume} />
        <Route path="/contact" exact component={Contact} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
