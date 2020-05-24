/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import AboutPage from 'containers/AboutPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Heading from 'components/Heading';
import SiteContent from 'components/SiteContent';
import Footer from 'components/Footer';

import { Layout } from 'antd';
import GlobalStyle from '../../global-styles';
import 'antd/dist/antd.css';

export default function App() {
  return (
    <Layout>
      <Helmet
        titleTemplate="%s - Image Compressor - by Sander de Bruijn"
        defaultTitle="Image Compressor - by Sander de Bruijn"
      >
        <meta name="description" content="Image Compressor" />
      </Helmet>
      <Heading />
      <SiteContent>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/features" component={AboutPage} />
          <Route path="" component={NotFoundPage} />
        </Switch>
      </SiteContent>
      <Footer />
      <GlobalStyle />
    </Layout>
  );
}
