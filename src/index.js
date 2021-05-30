import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'react-image-lightbox/style.css';

import Landing from 'views/Landing.js';
import CaseStudyDetail from 'views/CaseStudyDetail.js';
import AboutMe from 'views/AboutMe.js';
import {
  ImageLightboxProvider,
  ImageLightboxConsumer,
} from 'contexts/ImageLightboxContext';

ReactDOM.render(
  <ImageLightboxProvider>
    <ImageLightboxConsumer>
      <BrowserRouter>
        <Switch>
          <Route path="/landing" component={Landing} />
          <Route path="/CaseStudyDetail" component={CaseStudyDetail} />
          <Route path="/AboutMe" component={AboutMe} />
          <Redirect from="/" to="/landing" />
        </Switch>
      </BrowserRouter>
    </ImageLightboxConsumer>
  </ImageLightboxProvider>,
  document.getElementById('root'),
);
