import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import ScrollToTop from 'react-scroll-to-top';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'react-image-lightbox/style.css';

import Landing from 'views/Landing.js';
import CaseStudyDetail from 'views/CaseStudyDetail.js';
import CaseStudyDetailLotus from 'views/CaseStudyDetailLotus.js';
import CaseStudyDetailMagical from 'views/CaseStudyDetailMagical.js';
import AboutMe from 'views/AboutMe.js';
import {
  ImageLightboxProvider,
  ImageLightboxConsumer,
} from 'contexts/ImageLightboxContext';

ReactDOM.render(
  <ImageLightboxProvider>
    <ImageLightboxConsumer>
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/CaseStudyDetail" component={CaseStudyDetail} />
          <Route
            path="/CaseStudyDetailLotus"
            component={CaseStudyDetailLotus}
          />
          <Route
            path="/CaseStudyDetailMagical"
            component={CaseStudyDetailMagical}
          />
          <Route path="/AboutMe" component={AboutMe} />
        </Switch>
      </HashRouter>
      <ScrollToTop
        smooth
        color="#176CAA"
        style={{
          width: '50px',
          height: '50px',
          padding: '1rem',
        }}
      />
    </ImageLightboxConsumer>
  </ImageLightboxProvider>,
  document.getElementById('root'),
);
