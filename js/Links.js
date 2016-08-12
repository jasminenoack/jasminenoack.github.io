import React from 'react';
import {Card, CardActions, CardHeader, CardText, CardMedia, CardTitle} from 'material-ui/Card';
import LinearProgress from 'material-ui/LinearProgress';
import {List, ListItem} from 'material-ui/List';
import {cardStyle, titleStyle} from './card.style'

const CardExampleWithoutAvatar = () => (
  <Card id="links" style={cardStyle}>
    <CardHeader
      style={titleStyle}
      title="Links"
      actAsExpander={true}
      showExpandableButton={true}
      subtitle="'If you are not too long, I will wait here for you all my life.' - Oscar Wilde"
      avatar="./images/baloo_avatar.jpg"
    />
    <CardText expandable={true}>
        <List>
            <ListItem
                primaryText="Bejeweled"
                secondaryText="The classic gem swapping game in javaScript."
                primaryTogglesNestedList={true}
                nestedItems={[
                    <ListItem key="live" className="live" primaryText="live" href="http://jasminenoack.com/bejeweled/" target="_blank"/>,
                    <ListItem key="code" className="code" primaryText="code" href="https://github.com/jasminenoack/bejeweled/" target="_blank"/>
                ]}
          />
          <ListItem
                primaryText="Sudoku"
                secondaryText="A sudoku solver built in Rails."
                primaryTogglesNestedList={true}
                nestedItems={[
                    <ListItem key="live" className="live" primaryText="live" href="http://sudoku-on-rails.herokuapp.com" target="_blank"/>,
                    <ListItem key="code" className="code" primaryText="code" href="https://github.com/jasminenoack/sudoku-app" target="_blank"/>
                ]}
          />
          <ListItem
                primaryText="Lights Out"
                secondaryText="A clone of a classic tiger electronics game."
                primaryTogglesNestedList={true}
                nestedItems={[
                    <ListItem key="live" className="live" primaryText="live" href="http://jasminenoack.com/lights-out/" target="_blank"/>,
                    <ListItem key="code" className="code" primaryText="code" href="https://github.com/jasminenoack/lights-out" target="_blank"/>
                ]}
          />
          <ListItem
                primaryText="Something a little zen"
                secondaryText="A very bad sudoku algorithm but it's nice to watch."
                primaryTogglesNestedList={true}
                nestedItems={[
                    <ListItem key="live" className="live" primaryText="live" href="http://jasminenoack.com/zenmapping/" target="_blank"/>,
                    <ListItem key="code" className="code" primaryText="code" href="https://github.com/jasminenoack/zenmapping" target="_blank"/>
                ]}
          />
          <ListItem
                primaryText="Trigons"
                secondaryText="An implementation of a math based puzzle game."
                primaryTogglesNestedList={true}
                nestedItems={[
                    <ListItem key="live" className="live" primaryText="live" href="http://jasminenoack.com/trigons/" target="_blank"/>,
                    <ListItem key="code" className="code" primaryText="code" href="https://github.com/jasminenoack/trigons" target="_blank"/>
                ]}
          />
        </List>
    </CardText>
  </Card>
);

export default CardExampleWithoutAvatar;
