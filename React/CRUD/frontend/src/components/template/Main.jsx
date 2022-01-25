import '../css/Main.css';
import React, { Fragment } from 'react';

import Header from './Header';

export default props => {

  return (
    <>
      <Header {...props} />
      <main className="content">
        Main
      </main>
    </>
  );

}