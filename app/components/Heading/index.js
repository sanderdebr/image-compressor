import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Layout, Menu } from 'antd';

import A from './A';
import Img from './Img';
import HeadingLink from './HeadingLink';
import Banner from './banner.jpg';
import messages from './messages';

function Heading() {
  const { Header } = Layout;

  return (
    <Header>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        {/* <A href="https://www.reactboilerplate.com/">
          <Img src={Banner} alt="react-boilerplate - Logo" />
        </A> */}
        <Menu.Item key="1">
          <HeadingLink to="/">
            <FormattedMessage {...messages.home} />
          </HeadingLink>
        </Menu.Item>
        <Menu.Item key="2">
          <HeadingLink to="/features">
            <FormattedMessage {...messages.features} />
          </HeadingLink>
        </Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Header>
  );
}

export default Heading;
