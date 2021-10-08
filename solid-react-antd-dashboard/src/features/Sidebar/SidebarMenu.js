import React from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { stripTrailingSlash } from 'lib/helpers';

function SidebarMenu({ singleOption }) {
  const match = useRouteMatch();

  const { key, label, LeftIcon, exact } = singleOption;
  const url = stripTrailingSlash(match.url);

  return (
    <li key={key}>
      <NavLink
        exact={exact}
        activeClassName="sidebar-menu--active"
        to={`${url}/${key}`}
      >
        <LeftIcon />
        <h5>
          <FormattedMessage id={label} />
        </h5>
      </NavLink>
    </li>
  );
}

SidebarMenu.propTypes = {
  singleOption: PropTypes.shape({
    key: PropTypes.string,
    label: PropTypes.string,
    LeftIcon: PropTypes.elementType,
    exact: PropTypes.bool,
  }),
};
export default React.memo(SidebarMenu);
