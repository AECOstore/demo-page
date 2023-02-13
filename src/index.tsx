import * as React from 'react';
import { PiletApi } from 'consolid-shell';
import {Link} from 'react-router-dom'
import App from './App'

export function setup(app: PiletApi) {
  const connect = app.makeState(app)
  const Module = connect(({state, actions}) => app.withState(App, {app, state, actions}))

  app.showNotification('Registered Demo Page!', {
    autoClose: 2000,
  });
  app.registerPage("/demo", () => <Module/>)
  app.registerMenu(() =>
    <Link to="/demo">Demo</Link>
  );
}
