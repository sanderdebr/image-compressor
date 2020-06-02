/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';

import reducer from 'containers/App/reducer';
import saga from 'containers/App/saga';

import { makeSelectLoading, makeSelectError } from 'containers/App/selectors';
import H2 from 'components/H2';
import Button from 'components/Button';
import Input from 'components/Input';
import messages from './messages';
import { compressImage } from '../App/actions';

const key = 'home';

export function HomePage({ onHandleImageUpload }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  return (
    <article>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="Image Compressor Application - Home Page"
        />
      </Helmet>
      <div>
        <H2>
          <FormattedMessage {...messages.startProjectHeader} />
        </H2>
        <p>
          <FormattedMessage {...messages.startProjectMessage} />
        </p>
        <Input type="file" accept="image/*" onChange={onHandleImageUpload} />
        <Button type="primary" shape="round">
          <FormattedMessage {...messages.compressImgBtn} />
        </Button>
      </div>
    </article>
  );
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  onHandleImageUpload: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onHandleImageUpload: event => {
      if (event.target.files[0] !== undefined) {
        dispatch(compressImage(event.target.files[0]));
      }
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
