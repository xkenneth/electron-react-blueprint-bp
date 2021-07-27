import { Divider } from '@blueprintjs/core';

import "../node_modules/normalize.css/normalize.css"
import "../node_modules/@blueprintjs/core/lib/css/blueprint.css"
import "../node_modules/@blueprintjs/icons/lib/css/blueprint-icons.css"

console.log('Importing react.')

import * as React from 'react';
import * as ReactDOM from 'react-dom';

console.log('Importing BluePrint')

import { Button, Intent, Spinner } from "@blueprintjs/core";

function App () {
    const onClick = () => {
        console.log("Hello World")
    }
    return (<div>
                <div>Well, just go $#@! yourself!</div>
                <Button onClick={onClick}>Hello</Button>
            </div>
            )
}

function render() {
  ReactDOM.render(<App/>, document.getElementById("root"));
}

render();