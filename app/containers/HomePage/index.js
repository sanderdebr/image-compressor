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

import {
  makeSelectLoading,
  makeSelectError,
  makeSelectLink,
  makeSelectOutput,
} from 'containers/App/selectors';
import H2 from 'components/H2';
import Button from 'components/Button';
import Input from 'components/Input';
import messages from './messages';
import { compressImage } from '../App/actions';

const key = 'home';

export function HomePage({
  loading,
  error,
  compressedLink,
  output,
  onHandleImageUpload,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  if (error) console.log(error);

  console.log(output);
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
        {loading && <p>Loading...</p>}
        {compressedLink && (
          <>
            <p>Size: {output.size} MB</p>
            <img alt="output" src={compressedLink} />
          </>
        )}
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
  compressedLink: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  output: PropTypes.object,
  onHandleImageUpload: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError(),
  compressedLink: makeSelectLink(),
  output: makeSelectOutput(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onHandleImageUpload: event => {
      const file = event.target.files[0];
      if (file) {
        dispatch(compressImage(file));
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
