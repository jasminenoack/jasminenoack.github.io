import React from 'react';
import {Card, CardActions, CardHeader, CardText, CardMedia, CardTitle} from 'material-ui/Card';
import LinearProgress from 'material-ui/LinearProgress';
import {List, ListItem} from 'material-ui/List';

const CardExampleWithoutAvatar = () => (
  <Card id="links">
    <CardHeader
      title="Links"
      subtitle="'If you are not too long, I will wait here for you all my life.' - Oscar Wilde"
      avatar="./images/baloo_avatar.JPG"
    />
    <CardText style={{
        background: "url(./images/cat_comp.JPG) no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
    }}>
        <List style={{background: "rgba(0,0,0,0.5)"}}>
            <ListItem
                primaryText="Bejeweled"
                primaryTogglesNestedList={true}
                nestedItems={[
                    <ListItem key="live" primaryText="live" href="http://jasminenoack.com/bejeweled/" target="_blank"/>,
                    <ListItem key="code" primaryText="code" href="https://github.com/jasminenoack/bejeweled/" target="_blank"/>
                ]}
          />
          <ListItem
                primaryText="Sudoku"
                primaryTogglesNestedList={true}
                nestedItems={[
                    <ListItem key="live" primaryText="live" href="http://sudoku-on-rails.herokuapp.com" target="_blank"/>,
                    <ListItem key="code" primaryText="code" href="https://github.com/jasminenoack/sudoku-app" target="_blank"/>
                ]}
          />
          <ListItem
                primaryText="Lights Out"
                primaryTogglesNestedList={true}
                nestedItems={[
                    <ListItem key="live" primaryText="live" href="http://jasminenoack.com/lights-out/" target="_blank"/>,
                    <ListItem key="code" primaryText="code" href="https://github.com/jasminenoack/lights-out" target="_blank"/>
                ]}
          />
          <ListItem
                primaryText="Something a little zen"
                primaryTogglesNestedList={true}
                nestedItems={[
                    <ListItem key="live" primaryText="live" href="http://jasminenoack.com/zenmapping/" target="_blank"/>,
                    <ListItem key="code" primaryText="code" href="https://github.com/jasminenoack/zenmapping" target="_blank"/>
                ]}
          />
          <ListItem
                primaryText="Trigons"
                primaryTogglesNestedList={true}
                nestedItems={[
                    <ListItem key="live" primaryText="live" href="http://jasminenoack.com/trigons/" target="_blank"/>,
                    <ListItem key="code" primaryText="code" href="https://github.com/jasminenoack/trigons" target="_blank"/>
                ]}
          />
        </List>
    </CardText>
  </Card>
);

export default CardExampleWithoutAvatar;
