import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {fade} from 'material-ui/utils/colorManipulator';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import {blue900, purple900} from 'material-ui/styles/colors';

const theme = getMuiTheme(
    {
        "appBar": {
            "color": blue900,
            "textColor": "white",
            "height": 64,
            "titleFontWeight": 400,
            "padding": 24
        },
        "avatar": {
            "color": "#303030",
            "backgroundColor": "rgb(101, 101, 101)",
            "borderColor": "rgba(128, 128, 128, 0.15)"
        },
        "badge": {
            "color": "#303030",
            "textColor": "rgba(255, 255, 255, 1)",
            "primaryColor": "#ff4081",
            "primaryTextColor": "#303030",
            "secondaryColor": "#0097a7",
            "secondaryTextColor": "#303030",
            "fontWeight": 500
        },
        "button": {
            "height": 36,
            "minWidth": 88,
            "iconButtonSize": 48
        },
        "card": {
            "titleColor": "rgba(255, 255, 255, 0.87)",
            "subtitleColor": "rgba(255, 255, 255, 0.54)",
            "fontWeight": 500
        },
        "cardMedia": {
            "color": "rgba(255, 255, 255, 0.87)",
            "overlayContentBackground": "rgba(0, 0, 0, 0.54)",
            "titleColor": "rgba(255, 255, 255, 0.87)",
            "subtitleColor": "rgba(255, 255, 255, 0.54)"
        },
        "cardText": {
            "textColor": "rgba(255, 255, 255, 1)"
        },
        "checkbox": {
            "boxColor": "rgba(255, 255, 255, 1)",
            "checkedColor": "#0097a7",
            "requiredColor": "#0097a7",
            "disabledColor": "rgba(255, 255, 255, 0.3)",
            "labelColor": "rgba(255, 255, 255, 1)",
            "labelDisabledColor": "rgba(255, 255, 255, 0.3)"
        },
        "datePicker": {
            "color": "#0097a7",
            "textColor": "#303030",
            "calendarTextColor": "rgba(255, 255, 255, 1)",
            "selectColor": "#0097a7",
            "selectTextColor": "#303030",
            "calendarYearBackgroundColor": "#ffffff"
        },
        "dialog": {
            "titleFontSize": 22,
            "bodyFontSize": 16,
            "bodyColor": "rgba(255, 255, 255, 0.6)"
        },
        "dropDownMenu": {
            "accentColor": "rgba(255, 255, 255, 0.3)"
        },
        "enhancedButton": {
            "tapHighlightColor": "rgba(0, 0, 0, 0)"
        },
        "flatButton": {
            "color": "rgba(0, 0, 0, 0)",
            "buttonFilterColor": "#999999",
            "disabledTextColor": "rgba(255, 255, 255, 0.3)",
            "textColor": "rgba(255, 255, 255, 1)",
            "primaryTextColor": "#0097a7",
            "secondaryTextColor": "#ff4081",
            "fontSize": 14,
            "fontWeight": 500
        },
        "floatingActionButton": {
            "buttonSize": 56,
            "miniSize": 40,
            "color": "#0097a7",
            "iconColor": "#303030",
            "secondaryColor": "#ff4081",
            "secondaryIconColor": "#303030",
            "disabledTextColor": "rgba(255, 255, 255, 0.3)",
            "disabledColor": "rgb(72, 72, 72)"
        },
        "gridTile": {
            "textColor": "#ffffff"
        },
        "icon": {
            "color": "#303030",
            "backgroundColor": "#0097a7"
        },
        "inkBar": {
            "backgroundColor": "#ff4081"
        },
        "navDrawer": {
            "width": 256,
            "color": "#303030"
        },
        "listItem": {
            "nestedLevelDepth": 18,
            "secondaryTextColor": "rgba(0, 0, 0, 0.54)",
            "leftIconColor": "#757575",
            "rightIconColor": "#757575"
        },
        "menu": {
            "backgroundColor": "#303030",
            "containerBackgroundColor": "#303030"
        },
        "menuItem": {
            "dataHeight": 32,
            "height": 48,
            "hoverColor": "rgba(255, 255, 255, 0.035)",
            "padding": 24,
            "selectedTextColor": "#ff4081",
            "rightIconDesktopFill": "#757575"
        },
        "menuSubheader": {
            "padding": 24,
            "borderColor": "rgba(255, 255, 255, 0.3)",
            "textColor": "#0097a7"
        },
        "overlay": {
            "backgroundColor": "rgba(0, 0, 0, 0.54)"
        },
        "paper": {
            "color": "rgba(255, 255, 255, 1)",
            "backgroundColor": "#303030",
            "zDepthShadows": ["0 1px 6px rgba(0, 0, 0, 0.12),\n         0 1px 4px rgba(0, 0, 0, 0.12)", "0 3px 10px rgba(0, 0, 0, 0.16),\n         0 3px 10px rgba(0, 0, 0, 0.23)", "0 10px 30px rgba(0, 0, 0, 0.19),\n         0 6px 10px rgba(0, 0, 0, 0.23)", "0 14px 45px rgba(0, 0, 0, 0.25),\n         0 10px 18px rgba(0, 0, 0, 0.22)", "0 19px 60px rgba(0, 0, 0, 0.3),\n         0 15px 20px rgba(0, 0, 0, 0.22)"]
        },
        "radioButton": {
            "borderColor": "rgba(255, 255, 255, 1)",
            "backgroundColor": "#303030",
            "checkedColor": "#0097a7",
            "requiredColor": "#0097a7",
            "disabledColor": "rgba(255, 255, 255, 0.3)",
            "size": 24,
            "labelColor": "rgba(255, 255, 255, 1)",
            "labelDisabledColor": "rgba(255, 255, 255, 0.3)"
        },
        "raisedButton": {
            "color": "#303030",
            "textColor": "rgba(255, 255, 255, 1)",
            "primaryColor": "#0097a7",
            "primaryTextColor": "#303030",
            "secondaryColor": "#ff4081",
            "secondaryTextColor": "#303030",
            "disabledColor": "rgb(43, 43, 43)",
            "disabledTextColor": "rgba(255, 255, 255, 0.3)",
            "fontWeight": 500
        },
        "refreshIndicator": {
            "strokeColor": "rgba(255, 255, 255, 0.3)",
            "loadingStrokeColor": "#0097a7"
        },
        "ripple": {
            "color": "rgba(255, 255, 255, 0.87)"
        },
        "slider": {
            "trackSize": 2,
            "trackColor": "#757575",
            "trackColorSelected": "#ff80ab",
            "handleSize": 12,
            "handleSizeDisabled": 8,
            "handleSizeActive": 18,
            "handleColorZero": "#757575",
            "handleFillColor": "#303030",
            "selectionColor": "#0097a7",
            "rippleColor": "#0097a7"
        },
        "snackbar": {
            "textColor": "#303030",
            "backgroundColor": "rgba(255, 255, 255, 1)",
            "actionColor": "#ff4081"
        },
        "subheader": {
            "color": "rgba(255, 255, 255, 0.54)",
            "fontWeight": 500
        },
        "stepper": {
            "backgroundColor": "transparent",
            "hoverBackgroundColor": "rgba(0, 0, 0, 0.06)",
            "iconColor": "#0097a7",
            "hoveredIconColor": "#616161",
            "inactiveIconColor": "#9e9e9e",
            "textColor": "rgba(0, 0, 0, 0.87)",
            "disabledTextColor": "rgba(0, 0, 0, 0.26)",
            "connectorLineColor": "#bdbdbd"
        },
        "table": {
            "backgroundColor": "#303030"
        },
        "tableFooter": {
            "borderColor": "rgba(255, 255, 255, 0.3)",
            "textColor": "#ff80ab"
        },
        "tableHeader": {
            "borderColor": "rgba(255, 255, 255, 0.3)"
        },
        "tableHeaderColumn": {
            "textColor": "#ff80ab",
            "height": 56,
            "spacing": 24
        },
        "tableRow": {
            "hoverColor": "#f50057",
            "stripeColor": "rgba(127, 203, 211, 0.4)",
            "selectedColor": "rgba(255, 255, 255, 0.3)",
            "textColor": "rgba(255, 255, 255, 1)",
            "borderColor": "rgba(255, 255, 255, 0.3)",
            "height": 48
        },
        "tableRowColumn": {
            "height": 48,
            "spacing": 24
        },
        "tabs": {
            "backgroundColor": "#0097a7",
            "textColor": "rgba(48, 48, 48, 0.7)",
            "selectedTextColor": "#303030"
        },
        "textField": {
            "textColor": "rgba(255, 255, 255, 1)",
            "hintColor": "rgba(255, 255, 255, 0.3)",
            "floatingLabelColor": "rgba(255, 255, 255, 1)",
            "disabledTextColor": "rgba(255, 255, 255, 0.3)",
            "errorColor": "#f44336",
            "focusColor": "#0097a7",
            "backgroundColor": "transparent",
            "borderColor": "rgba(255, 255, 255, 0.3)"
        },
        "timePicker": {
            "color": "#303030",
            "textColor": "#ff80ab",
            "accentColor": "#0097a7",
            "clockColor": "rgba(255, 255, 255, 1)",
            "clockCircleColor": "rgba(255, 255, 255, 0.12)",
            "headerColor": "rgba(255, 255, 255, 0.12)",
            "selectColor": "#0097a7",
            "selectTextColor": "#303030"
        },
        "toggle": {
            "thumbOnColor": "#0097a7",
            "thumbOffColor": "#f50057",
            "thumbDisabledColor": "rgba(255, 255, 255, 0.3)",
            "thumbRequiredColor": "#0097a7",
            "trackOnColor": "rgba(0, 151, 167, 0.5)",
            "trackOffColor": "#757575",
            "trackDisabledColor": "#757575",
            "labelColor": "rgba(255, 255, 255, 1)",
            "labelDisabledColor": "rgba(255, 255, 255, 0.3)",
            "trackRequiredColor": "rgba(0, 151, 167, 0.5)"
        },
        "toolbar": {
            "color": "rgba(255, 255, 255, 0.54)",
            "hoverColor": "rgba(255, 255, 255, 0.87)",
            "backgroundColor": "rgb(232, 0, 82)",
            "height": 56,
            "titleFontSize": 20,
            "iconColor": "rgba(255, 255, 255, 0.4)",
            "separatorColor": "rgba(255, 255, 255, 0.175)",
            "menuHoverColor": "rgba(255, 255, 255, 0.1)"
        },
        "tooltip": {
            "color": "#ffffff",
            "rippleBackgroundColor": "#616161"
        },
        "zIndex": {
            "menu": 1000,
            "appBar": 1100,
            "drawerOverlay": 1200,
            "navDrawer": 1300,
            "dialogOverlay": 1400,
            "dialog": 1500,
            "layer": 2000,
            "popover": 2100,
            "snackbar": 2900,
            "tooltip": 3000
        },
        "isRtl": false,
        "spacing": {
            "iconSize": 24,
            "desktopGutter": 24,
            "desktopGutterMore": 32,
            "desktopGutterLess": 16,
            "desktopGutterMini": 8,
            "desktopKeylineIncrement": 64,
            "desktopDropDownMenuItemHeight": 32,
            "desktopDropDownMenuFontSize": 15,
            "desktopDrawerMenuItemHeight": 48,
            "desktopSubheaderHeight": 48,
            "desktopToolbarHeight": 56
        },
        "fontFamily": "Roboto, sans-serif",
        "palette": {
            "primary1Color": purple900,
            "primary2Color": blue900,
            "primary3Color": "#757575",
            "accent1Color": "#ff4081",
            "accent2Color": "#f50057",
            "accent3Color": "#ff80ab",
            "textColor": "rgba(255, 255, 255, 1)",
            "alternateTextColor": "#303030",
            "canvasColor": "#303030",
            "borderColor": "rgba(255, 255, 255, 0.3)",
            "disabledColor": "rgba(255, 255, 255, 0.3)",
            "pickerHeaderColor": "rgba(255, 255, 255, 0.12)",
            "clockCircleColor": "rgba(255, 255, 255, 0.12)",
            "shadowColor": "rgba(0, 0, 0, 1)"
        },
        "baseTheme": {
            "spacing": {
                "iconSize": 24,
                "desktopGutter": 24,
                "desktopGutterMore": 32,
                "desktopGutterLess": 16,
                "desktopGutterMini": 8,
                "desktopKeylineIncrement": 64,
                "desktopDropDownMenuItemHeight": 32,
                "desktopDropDownMenuFontSize": 15,
                "desktopDrawerMenuItemHeight": 48,
                "desktopSubheaderHeight": 48,
                "desktopToolbarHeight": 56
            },
            "fontFamily": "Roboto, sans-serif",
            "palette": {
                "primary1Color": "#0097a7",
                "primary2Color": "#0097a7",
                "primary3Color": "#757575",
                "accent1Color": "#ff4081",
                "accent2Color": "#f50057",
                "accent3Color": "#ff80ab",
                "textColor": "rgba(255, 255, 255, 1)",
                "alternateTextColor": "#303030",
                "canvasColor": "#303030",
                "borderColor": "rgba(255, 255, 255, 0.3)",
                "disabledColor": "rgba(255, 255, 255, 0.3)",
                "pickerHeaderColor": "rgba(255, 255, 255, 0.12)",
                "clockCircleColor": "rgba(255, 255, 255, 0.12)",
                "shadowColor": "rgba(0, 0, 0, 1)"
            }
        },
        "rawTheme": {
            "spacing": {
                "iconSize": 24,
                "desktopGutter": 24,
                "desktopGutterMore": 32,
                "desktopGutterLess": 16,
                "desktopGutterMini": 8,
                "desktopKeylineIncrement": 64,
                "desktopDropDownMenuItemHeight": 32,
                "desktopDropDownMenuFontSize": 15,
                "desktopDrawerMenuItemHeight": 48,
                "desktopSubheaderHeight": 48,
                "desktopToolbarHeight": 56
            },
            "fontFamily": "Roboto, sans-serif",
            "palette": {
                "primary1Color": "#0097a7",
                "primary2Color": "#0097a7",
                "primary3Color": "#757575",
                "accent1Color": "#ff4081",
                "accent2Color": "#f50057",
                "accent3Color": "#ff80ab",
                "textColor": "rgba(255, 255, 255, 1)",
                "alternateTextColor": "#303030",
                "canvasColor": "#303030",
                "borderColor": "rgba(255, 255, 255, 0.3)",
                "disabledColor": "rgba(255, 255, 255, 0.3)",
                "pickerHeaderColor": "rgba(255, 255, 255, 0.12)",
                "clockCircleColor": "rgba(255, 255, 255, 0.12)",
                "shadowColor": "rgba(0, 0, 0, 1)"
            }
        }
    }
);

class Main extends React.Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={theme}>
        {this.props.children}
      </MuiThemeProvider>
    );
  }
}

export default Main;
