import Egg from "easter";

import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import ThemeProvider from 'js/ThemeProvider';
import Page from 'js/Page';

injectTapEventPlugin();
ReactDOM.render(
    <ThemeProvider>
        <Page/>
    </ThemeProvider>,
    document.getElementById('page-content')
);
