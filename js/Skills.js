import React from 'react';
import {Card, CardActions, CardHeader, CardText, CardMedia, CardTitle} from 'material-ui/Card';
import CircularProgress from 'material-ui/CircularProgress';
import {cardStyle, titleStyle} from './card.style'

const CardExampleWithoutAvatar = () => (
  <Card id="skills" style={cardStyle} expandable={true}>
    <CardHeader
      style={titleStyle}
      title="Skills"
      actAsExpander={true}
      showExpandableButton={true}
      subtitle="'Our knowledge can only be finite, while our ignorance must necessarily be infinite.' - Karl Popper"
      avatar="./images/baloo_avatar.jpg"
    />
    <CardText expandable={true} className="skill-container">
        <h1>Current Skills:</h1>
        <div>
            <div className="skill">
                <div>Python:</div>
                <CircularProgress mode="determinate" value={75} />
            </div>
            <div className="skill">
                <div>Django:</div>
                <CircularProgress mode="determinate" value={80} />
            </div>
            <div className="skill">
                <div>javaScript:</div>
                <CircularProgress mode="determinate" value={80} />
            </div>
            <div className="skill">
                <div>React:</div>
                <CircularProgress mode="determinate" value={70} />
            </div>
            <div className="skill">
                <div>Redux:</div>
                <CircularProgress mode="determinate" value={70} />
            </div>
            <div className="skill">
                <div>Backbone:</div>
                <CircularProgress mode="determinate" value={65} />
            </div>
            <div className="skill">
                <div>CSS:</div>
                <CircularProgress mode="determinate" value={80} />
            </div>
            <div className="skill">
                <div>Ruby:</div>
                <CircularProgress mode="determinate" value={70} />
            </div>
            <div className="skill">
                <div>Ruby on Rails:</div>
                <CircularProgress mode="determinate" value={60} />
            </div>
            <div className="skill">
                <div>MySQL:</div>
                <CircularProgress mode="determinate" value={70} />
            </div>
            <div className="skill">
                <div>Postgres:</div>
                <CircularProgress mode="determinate" value={60} />
            </div>
            <div className="skill">
                <div>Mongo:</div>
                <CircularProgress mode="determinate" value={50} />
            </div>
            <div className="skill">
                <div>Elasticsearch:</div>
                <CircularProgress mode="determinate" value={70} />
            </div>
            <div className="skill">
                <div>TDD:</div>
                <CircularProgress mode="determinate" value={80} />
            </div>
            <div className="skill">
                <div>Selenium:</div>
                <CircularProgress mode="determinate" value={75} />
            </div>
            <div className="skill">
                <div>AWS:</div>
                <CircularProgress mode="determinate" value={50} />
            </div>
        </div>
        <h1>Noodling with:</h1>
        <div>
            <div className="skill">
                <div>Go:</div>
                <CircularProgress mode="determinate" value={5} />
            </div>
            <div className="skill">
                <div>Scala:</div>
                <CircularProgress mode="determinate" value={10} />
            </div>
            <div className="skill">
                <div>Scheme:</div>
                <CircularProgress mode="determinate" value={5} />
            </div>
            <div className="skill">
                <div>Flux:</div>
                <CircularProgress mode="determinate" value={25} />
            </div>
        </div>
    </CardText>
  </Card>
);

export default CardExampleWithoutAvatar;
