import React from 'react';
import {Card, CardActions, CardHeader, CardText, CardMedia, CardTitle} from 'material-ui/Card';
import LinearProgress from 'material-ui/LinearProgress';
import {List, ListItem} from 'material-ui/List';


const CardExampleWithoutAvatar = () => (
  <Card id="skills">
    <CardHeader
      title="Skills"
      subtitle="'Our knowledge can only be finite, while our ignorance must necessarily be infinite.' - Karl Popper"
      avatar="./images/baloo_avatar.jpg"
    />
    <CardText style={{
        background: "url(./images/airplane.JPG) no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
    }}>
        <List style={{background: "rgba(0,0,0,0.5)"}}>
            <ListItem>
                <span>Python:</span>
                <LinearProgress mode="determinate" value={75} />
            </ListItem>
            <ListItem>
                <span>Django:</span>
                <LinearProgress mode="determinate" value={80} />
            </ListItem>
            <ListItem>
                <span>javaScript:</span>
                <LinearProgress mode="determinate" value={80} />
            </ListItem>
            <ListItem>
                <span>React:</span>
                <LinearProgress mode="determinate" value={70} />
            </ListItem>
            <ListItem>
                <span>Redux:</span>
                <LinearProgress mode="determinate" value={70} />
            </ListItem>
            <ListItem>
                <span>Backbone:</span>
                <LinearProgress mode="determinate" value={65} />
            </ListItem>
            <ListItem>
                <span>CSS:</span>
                <LinearProgress mode="determinate" value={80} />
            </ListItem>
            <ListItem>
                <span>Ruby:</span>
                <LinearProgress mode="determinate" value={70} />
            </ListItem>
            <ListItem>
                <span>Ruby on Rails:</span>
                <LinearProgress mode="determinate" value={60} />
            </ListItem>
            <ListItem>
                <span>MySQL:</span>
                <LinearProgress mode="determinate" value={70} />
            </ListItem>
            <ListItem>
                <span>Postgres:</span>
                <LinearProgress mode="determinate" value={60} />
            </ListItem>
            <ListItem>
                <span>Mongo:</span>
                <LinearProgress mode="determinate" value={50} />
            </ListItem>
            <ListItem>
                <span>Elasticsearch:</span>
                <LinearProgress mode="determinate" value={70} />
            </ListItem>
            <ListItem>
                <span>TDD:</span>
                <LinearProgress mode="determinate" value={80} />
            </ListItem>
            <ListItem>
                <span>Selenium:</span>
                <LinearProgress mode="determinate" value={75} />
            </ListItem>
            <ListItem>
                <span>AWS:</span>
                <LinearProgress mode="determinate" value={50} />
            </ListItem>
        </List>
    </CardText>
  </Card>
);

export default CardExampleWithoutAvatar;
