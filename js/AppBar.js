import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Public from 'material-ui/svg-icons/social/public';
import {blue500, purple900} from 'material-ui/styles/colors';


const RightIcon = (
  <IconMenu
        iconButtonElement={
          <IconButton><MoreVertIcon /></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
    >
        <MenuItem primaryText="About" href="#about"/>
        <MenuItem primaryText="Skills" href="#skills"/>
        <MenuItem primaryText="Links" href="#links"/>
  </IconMenu>
);

const LeftMenu = (
  <IconMenu
        iconButtonElement={
          <IconButton><Public/></IconButton>
        }
        targetOrigin={{horizontal: 'left', vertical: 'top'}}
        anchorOrigin={{horizontal: 'left', vertical: 'top'}}
    >
        <MenuItem primaryText="Github" target="_blank" href="https://github.com/jasminenoack"/>
        <MenuItem primaryText="Quora" target="_blank" href="https://www.quora.com/profile/Jasmine-Noack"/>
        <MenuItem primaryText="LinkedIn" target="_blank" href="http://www.linkedin.com/in/jasminenoack"/>
        <MenuItem primaryText="Tumblr" target="_blank" href="http://www.jasminenoack.tumblr.com"/>
  </IconMenu>
);


const PageAppBar = () => (
  <AppBar
    title="Jasmine Noack"
    iconElementLeft={LeftMenu}
    iconElementRight={RightIcon}
  />
);

export default PageAppBar;
