import React from 'react';

import { WebflowJs } from './assets/utils';

const HdrPage = () => {
  WebflowJs(); //eslint-disable-line

  return (
    <div className="main__title">
      <h1 className="main__title tittle--header">お問い合わせ
      </h1>
    </div>
  );
};


export default HdrPage;
