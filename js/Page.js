import React from 'react';
import AppBar from './AppBar'
import About from './About';
import Skills from './Skills';
import Links from './Links';
import Background from './Background';

var Page = React.createClass({
    render: function () {
        return (
            <div>
                <Background/>
                <div>
                    <AppBar/>
                    <About/>
                    <Skills/>
                    <Links/>
                </div>
            </div>
        );
    }
});

export default Page;
