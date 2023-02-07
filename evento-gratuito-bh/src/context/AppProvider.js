import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const value = useMemo(() => ({

  }), []);

  return (
    <AppContext.Provider value={ value }>
      { children }
    </AppContext.Provider>
  );
}

AppProvider.propTypes = ({
  children: PropTypes.shape(),
}).isRequired;

export default AppProvider;
