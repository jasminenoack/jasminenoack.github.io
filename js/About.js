import React from 'react';
import {Card, CardActions, CardHeader, CardText, CardMedia, CardTitle} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {cardStyle, titleStyle} from './card.style'

const CardExampleWithoutAvatar = () => (
  <Card id="about" style={cardStyle}>
    <CardHeader
      style={titleStyle}
      title="About"
      actAsExpander={true}
      showExpandableButton={true}
      avatar="./images/baloo_avatar.jpg"
      subtitle="'Sarcasm and compassion are two of the qualities that make life on Earth tolerable.' - Nick Hornby"
    />
    <CardText expandable={true}>
        <p>
        I grew up in the middle of nowhere, a bit west of almost somewhere.
        This was on an island off the coast of Maine.
        I moved to New York in 2005. I am Software Engineer working in Django and React.
        I have previous experience in many other frameworks.
        </p>
        <p>
        My main focus recently has been on how to improve existing systems.
        Whether through upgrading to stable framework versions, switching javaScript frameworks,
        adding tests, or moving code out into packages to allow it to be reusable.
        Anyone can make the right choices from a blank slate,
        it is a more interesting puzzle to figure out how to update old systems based on new insights.
        </p>
        <p>
        I believe it's important to give back to the community.
        I run a <a href="http://hackerhours.org/">HackerHours</a> meetup and I am a mentor on <a href="https://www.coursera.org/">Coursera</a>.
        </p>
        <p>
        I have always been one for taking things apart so that I could put them together again.
        From my first walkman to my step father's computer in high school.
        And now on to software. I love Japanese puzzles, indie video games, and logic.
        </p>
    </CardText>
  </Card>
);

export default CardExampleWithoutAvatar;
