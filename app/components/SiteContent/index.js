import React from 'react';
import PropTypes from 'prop-types';
import MainContent from './MainContent';
import MainLayout from './MainLayout';
import SecondaryContent from './SecondaryContent';

function SiteContent(props) {
  return (
    <MainContent>
      <MainLayout>
        <SecondaryContent>{props.children}</SecondaryContent>
      </MainLayout>
    </MainContent>
  );
}

SiteContent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SiteContent;
