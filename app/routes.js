import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import CounterPage from './containers/CounterPage';
import MoaPage from './containers/MoaPage';

import WhyStartPage from './containers/WhyStartPage';
import WhoIsPage from './containers/WhoIsPage';
import WhatIsPage from './containers/WhatIsPage';
import HowDoesPage from './containers/HowDoesPage';
import WhichPage from './containers/WhichPage';
import WhyPage from './containers/WhyPage';
import ThankYouPage from './containers/ThankYouPage';
import InactivePage from './containers/InactivePage';
import ProductInfoPage from './containers/ProductInfoPage';

import WhatIs from './components/WhatIs';
import WhatIs2 from './components/WhatIs2';

import HowDoes from './components/HowDoes';
import HowDoes2 from './components/HowDoes2';
import HowDoes3 from './components/HowDoes3';
import HowDoes4 from './components/HowDoes4';


import Which from './components/Which';
import Which2 from './components/Which2';

export default (
  <Router history={browserHistory} >
    <Route path="/" component={App}>
      <IndexRoute component={HomePage} />

      <Route path="/WhyStart" component={WhyStartPage} />
      <Route path="/WhoIs" component={WhoIsPage} />
      <Route path="/WhatIs" component={WhatIsPage} >
        <IndexRoute component={WhatIs} />
        <Route path="2" component={WhatIs2} />
      </Route>
      <Route path="/HowDoes" component={HowDoesPage}  >
        <IndexRoute component={HowDoes} />
        <Route path="2" component={HowDoes2} />
        <Route path="3" component={HowDoes3} />
        <Route path="4" component={HowDoes4} />
      </Route>
      <Route path="/Which" component={WhichPage} >
        <IndexRoute component={Which} />
        <Route path="2" component={Which2} />
      </Route>
      <Route path="/Why" component={WhyPage} />
      <Route path="/ThankYou" component={ThankYouPage} />
      <Route path="/Inactive" component={InactivePage} />
      <Route path="/ProductInfo" component={ProductInfoPage} />

      <Route path="/counter" component={CounterPage} />
      <Route path="/moa" component={MoaPage} />
    </Route>
  </Router>
);
