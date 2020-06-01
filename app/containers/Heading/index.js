import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectLocation } from 'containers/App/selectors';

import messages from './messages';

export function Heading({ location }) {
  const { Header } = Layout;
  const { pathname } = location;

  return (
    <Header>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[pathname]}>
        <Menu.Item key="/">
          <Link to="/">
            <FormattedMessage {...messages.home} />
          </Link>
        </Menu.Item>
        <Menu.Item key="about">
          <Link to="/about">
            <FormattedMessage {...messages.features} />
          </Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
}

Heading.propTypes = {
  location: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  location: makeSelectLocation(),
});

const withConnect = connect(mapStateToProps);

export default compose(
  withConnect,
  memo,
)(Heading);
