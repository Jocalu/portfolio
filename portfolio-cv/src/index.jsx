import React, { useState } from 'react';
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
import informationEN from './constants/informationEN';
import informationES from './constants/informationES';

function App() {
  const [language, setLanguage] = useState('EN');
  const information = language === 'ES' ? informationES : informationEN;

  return (
    <React.StrictMode>
      <BrowserRouter>
        <MenuMobile information={information} setLanguage={setLanguage} language={language} />
        <Header information={information} setLanguage={setLanguage} language={language} />
        <Opening information={information} />
        <Switch>
          <Route exact path="/"><AboutMe information={information} /></Route>
          <Route exact path="/formation"><Formation information={information} /></Route>
          <Route exact path="/projects"><Projects information={information} /></Route>
          <Route exact path="/resume"><Resume information={information} /></Route>
          <Route exact path="/contact"><Contact information={information} /></Route>
          <Route exact path="/*"><AboutMe information={information} /></Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </React.StrictMode>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
