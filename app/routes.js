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
import WhatIsSafetyPage from './containers/WhatIsSafetyPage';
import WhyPage from './containers/WhyPage';

import ThankYouPage from './containers/ThankYouPage';
import InactivePage from './containers/InactivePage';
import ProductInfoPage from './containers/ProductInfoPage';
import ReferencesPage from './containers/ReferencesPage';



import WhyStart from './components/WhyStart';

import WhoIs from './components/WhoIs';
import WhoIsDiagram from './components/WhoIsDiagram';

import WhatIs from './components/WhatIs';
import WhatIsDiagram from './components/WhatIsDiagram';
import WhatIs2 from './components/WhatIs2';
import WhatIs2Diagram from './components/WhatIs2Diagram';

import HowDoes from './components/HowDoes';
import HowDoes2 from './components/HowDoes2';
import HowDoes2Diagram from './components/HowDoes2Diagram';
import HowDoes3 from './components/HowDoes3';
import HowDoes3Diagram from './components/HowDoes3Diagram';
import HowDoes4 from './components/HowDoes4';
import HowDoes4Diagram from './components/HowDoes4Diagram';

import Which from './components/Which';
import WhichDiagram from './components/WhichDiagram';
import Which2 from './components/Which2';

import WhatIsSafety from './components/WhatIsSafety';
import WhatIsSafety2 from './components/WhatIsSafety2';

import Why from './components/Why';

import References from './components/References';

import ProductInfo from './components/ProductInfo';
import ProductInfo2 from './components/ProductInfo2';
import ProductInfo3 from './components/ProductInfo3';


export default (
  <Router history={browserHistory} >
    <Route path="/" component={App}>
      <IndexRoute component={HomePage} />
      <Route path="/WhyStart" component={WhyStartPage} >
        <IndexRoute component={WhyStart} />
        <Route path="References" component={References} />
      </Route>
      <Route path="/WhoIs" component={WhoIsPage} >
        <IndexRoute component={WhoIs} />
        <Route path="Diagram" component={WhoIsDiagram} />
        <Route path="References" component={References} />
      </Route>
      <Route path="/WhatIs" component={WhatIsPage} >
        <IndexRoute component={WhatIs} />
        <Route path="Diagram" component={WhatIsDiagram} />
        <Route path="2" component={WhatIs2} />
        <Route path="2Diagram" component={WhatIs2Diagram} />
        <Route path="References" component={References} />
      </Route>
      <Route path="/HowDoes" component={HowDoesPage}  >
        <IndexRoute component={HowDoes} />
        <Route path="2" component={HowDoes2} />
        <Route path="2Diagram" component={HowDoes2Diagram} />
        <Route path="3" component={HowDoes3} />
        <Route path="3Diagram" component={HowDoes3Diagram} />
        <Route path="4" component={HowDoes4} />
        <Route path="4Diagram" component={HowDoes4Diagram} />
        <Route path="References" component={References} />
      </Route>
      <Route path="/WhatIsSafety" component={WhatIsSafetyPage}>
        <IndexRoute component={WhatIsSafety} />
        <Route path="2" component={WhatIsSafety2} />
        <Route path="References" component={References} />
      </Route>      
      <Route path="/Which" component={WhichPage} >
        <IndexRoute component={Which} />
        <Route path="Diagram" component={WhichDiagram} />
        <Route path="2" component={Which2} />
        <Route path="References" component={References} />
      </Route>
      <Route path="/Why" component={WhyPage}>
        <IndexRoute component={Why} />
        <Route path="References" component={References} />
      </Route>      
      <Route path="/ThankYou" component={ThankYouPage} />
      <Route path="/Inactive" component={InactivePage} />
      <Route path="/ProductInfo" component={ProductInfoPage} >
        <IndexRoute component={ProductInfo} />
        <Route path="2" component={ProductInfo2} />
        <Route path="3" component={ProductInfo3} />
        <Route path="References" component={References} />
      </Route>
      <Route path="/References" component={ReferencesPage} />
      <Route path="/counter" component={CounterPage} />
      <Route path="/moa" component={MoaPage} />
    </Route>
  </Router>
);
