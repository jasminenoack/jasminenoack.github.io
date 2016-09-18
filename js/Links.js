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
                secondaryTextColor="#ECEFF1"
                primaryTogglesNestedList={true}
                nestedItems={[
                    <a key="live" className="live" href="http://jasminenoack.com/bejeweled/"><ListItem>Live</ListItem></a>,
                    <a key="code" className="code" href="https://github.com/jasminenoack/bejeweled/"><ListItem>Code</ListItem></a>
                ]}
          />
          <ListItem
                primaryText="Sudoku"
                secondaryText="A sudoku solver built in Rails."
                primaryTogglesNestedList={true}
                nestedItems={[
                    <a key="live" className="live" primaryText="live" href="http://sudoku-on-rails.herokuapp.com"><ListItem>Live</ListItem></a>,
                    <a key="code" className="code" primaryText="code" href="https://github.com/jasminenoack/sudoku-app"><ListItem>Code</ListItem></a>
                ]}
          />
          <ListItem
                primaryText="Lights Out"
                secondaryText="A clone of a classic tiger electronics game."
                primaryTogglesNestedList={true}
                nestedItems={[
                    <a key="live" className="live" primaryText="live" href="http://jasminenoack.com/lights-out/"><ListItem>Live</ListItem></a>,
                    <a key="code" className="code" primaryText="code" href="https://github.com/jasminenoack/lights-out"><ListItem>Code</ListItem></a>
                ]}
          />
          <ListItem
                primaryText="Something a little zen"
                secondaryText="A very bad sudoku algorithm but it's nice to watch."
                primaryTogglesNestedList={true}
                nestedItems={[
                    <a key="live" className="live" primaryText="live" href="http://jasminenoack.com/zenmapping/"><ListItem>Live</ListItem></a>,
                    <a key="code" className="code" primaryText="code" href="https://github.com/jasminenoack/zenmapping"><ListItem>Code</ListItem></a>
                ]}
          />
          <ListItem
                primaryText="Trigons"
                secondaryText="An implementation of a math based puzzle game."
                primaryTogglesNestedList={true}
                nestedItems={[
                    <a key="live" className="live" primaryText="live" href="http://jasminenoack.com/trigons/"><ListItem>Live</ListItem></a>,
                    <a key="code" className="code" primaryText="code" href="https://github.com/jasminenoack/trigons"><ListItem>Code</ListItem></a>
                ]}
          />
          <ListItem
                primaryText="Conway's Game of Life"
                secondaryText="Simple game of life visualization."
                primaryTogglesNestedList={true}
                nestedItems={[
                    <a key="live" className="live" primaryText="live" href="http://jasminenoack.com/conways_game_of_life/"><ListItem>Live</ListItem></a>,
                    <a key="code" className="code" primaryText="code" href="https://github.com/jasminenoack/conways_game_of_life"><ListItem>Code</ListItem></a>
                ]}
          />
          <ListItem
                primaryText="Go gif generator"
                secondaryText="Simple gif generator to get a feel for Go."
                primaryTogglesNestedList={true}
                nestedItems={[
                    <a key="live" className="live" primaryText="live" href="http://golang-images.herokuapp.com/"><ListItem>Live</ListItem></a>,
                ]}
          />
          <ListItem
                primaryText="Animated Algorithms"
                secondaryText="Animated sorting algorithms."
                primaryTogglesNestedList={true}
                nestedItems={[
                    <a key="live" className="live" primaryText="live" href="http://jasminenoack.com/algorithms/"><ListItem>Live</ListItem></a>,
                    <a key="code" className="code" primaryText="code" href="https://github.com/jasminenoack/algorithms"><ListItem>Code</ListItem></a>
                ]}
          />
        </List>
    </CardText>
  </Card>
);

export default CardExampleWithoutAvatar;
