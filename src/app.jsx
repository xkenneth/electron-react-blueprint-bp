import { Divider } from '@blueprintjs/core';


console.log('Importing react.')

import * as React from 'react';
import * as ReactDOM from 'react-dom';

console.log('Importing BluePrint')

import { Button, Intent, Spinner } from "@blueprintjs/core";

function App () {
    return (<div>
                <div>Well, just go fuck yourself!</div>
                <div><Button></Button></div>
            </div>
            )
}

function render() {
  ReactDOM.render(<App/>, document.getElementById("root"));
}

render();