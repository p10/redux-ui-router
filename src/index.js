import routerState from './router-state-reducer';
import stateGo from './state-go';
import stateReload from './state-reload';
import stateTransitionTo from './state-transition-to';

import routerMiddleware from './router-middleware';
import uiRouterListener from './router-listener';
import stateChangeActions from './state-change-actions';

let angular = window.angular;

export default angular
  .module('ng-ui-router-middleware', [
    'ui.router'
  ])
  .provider('ngUiStateChangeActions', stateChangeActions)
  .factory('ngUiRouterMiddleware', routerMiddleware)
  .run(uiRouterListener)
  .name;

export const router = routerState;

export {
  stateGo,
  stateReload,
  stateTransitionTo,
};
