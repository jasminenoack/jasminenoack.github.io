import React from 'react';
import {Card, CardActions, CardHeader, CardText, CardMedia, CardTitle} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const CardExampleWithoutAvatar = () => (
  <Card id="about">
    <CardHeader
      title="About"
      subtitle="'Sarcasm and compassion are two of the qualities that make life on Earth tolerable.' - Nick Hornby"
      avatar="./images/baloo_avatar.jpg"
    />
    <CardText style={{
        background: "url(./images/ocean.JPG) no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
    }}>
        <div style={{background: "rgba(0,0,0,0.5)"}}>
          <CardText>
            I grew up in the middle of nowhere, a bit west of almost somewhere.
            This was on an island of the coast of Maine.
            I moved to New York in 2005.
          </CardText>
          <CardText>
            I am Software Engineer working in Django and React.
            I have previous experience in many other frameworks.
          </CardText>
          <CardText>
            My main focus recently has been on how to improve existing systems.
            Whether through upgrading to stable framework versions, switching javaScript frameworks,
            adding tests, or moving code out into packages to allow it to be reusable.
            Anyone can make the right choices from a blank slate,
            it is a more interesting puzzle to figure out how to update old systems based on new insights.
          </CardText>
          <CardText>
            I have degrees from NYU (Philosophy) and The New School for Social Research (Psychology),
            and I attended App Academy. I have been working as a software engineer since 2015 at
            Offerpop, on the Content and User Intelligence Team.
          </CardText>
          <CardText>
            I have always been one for taking things apart so that I could put them together again.
            From my first walkman to my step father's computer in high school.
            And now on to software.
          </CardText>
          <CardText>
            I believe it's important to give back to the community.
            From my experience coders are some of the most generous people in the world.
            I support charities like Child's Play. I also run a Hacker Hours meetup for new coders.
          </CardText>
          <CardText>
              I love Japanese puzzles, indie video games, classic
              video games, knitting, learning, and logic.
          </CardText>
        </div>
    </CardText>
  </Card>
);

export default CardExampleWithoutAvatar;
