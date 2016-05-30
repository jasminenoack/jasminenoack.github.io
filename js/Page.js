import React from 'react';
import AppBar from './AppBar'
import About from './About';
import Skills from './Skills';
import Links from './Links';

var Page = React.createClass({
    render: function () {
        return (
            <div>
                <AppBar/>
                <About/>
                <Skills/>
                <Links/>
            </div>
        );
    }
});

export default Page;
