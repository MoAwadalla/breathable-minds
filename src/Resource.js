import React, { createRef, Fragment, PureComponent } from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import event1 from "./event1.png";
import event2 from "./event2.jpeg";
import article1 from "./article1.jpeg";
import article2 from "./article2.jpeg";
import video1 from "./video1.png";

export function Resource() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: 10,
      }}
    >
      <h1>Events</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <Card
          style={{
            width: "30%",
            height: 700,
            display: "flex",
            borderRadius: 25,
            borderStyle: "none",
            backgroundColor: "#CCFFD1",
            margin: 15,
          }}
        >
          <Card.Body>
            <Card.Title>
              First Responder Mental Health and Wellness Event
            </Card.Title>
            <Card.Img style={{ marginBottom: 10 }} variant="top" src={event1} />
            <Card.Text>
              1st Responder Conferences presents a two day mental health and
              wellness seminar for all first responders and their families.
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem style={{ backgroundColor: "#CCFFD1" }}>
              <strong>Nov 4 2021, 8 AM - Nov 5 2021, 4 PM</strong>
            </ListGroupItem>
            <ListGroupItem style={{ backgroundColor: "#CCFFD1" }}>
              <strong>Swinomish Casino & Lodge</strong>
            </ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Link href="https://g.page/swinomishcasinoandlodge?share">
              Directions
            </Card.Link>
            <Card.Link href="https://www.eventbrite.com/e/first-responder-mental-health-and-wellness-suquamish-wa-tickets-104253884174">
              More Info
            </Card.Link>
          </Card.Body>
        </Card>
        <Card
          style={{
            width: "30%",
            height: 700,
            display: "flex",
            borderRadius: 25,
            borderStyle: "none",
            backgroundColor: "#E5AF42",
            margin: 15,
          }}
        >
          <Card.Body>
            <Card.Title>16th Annual Autism Conference</Card.Title>
            <Card.Img style={{ marginBottom: 10 }} variant="top" src={event2} />
            <Card.Text>
              We are excited to announce our 16th Annual Autism Conference in
              Seattle, Washington!
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem style={{ backgroundColor: "#E5AF42" }}>
              <strong>Mar 6 2022, 8 AM - Mar 7 2022, 5 PM</strong>
            </ListGroupItem>
            <ListGroupItem style={{ backgroundColor: "#E5AF42" }}>
              <strong>The Westin Seattle</strong>
            </ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Link href="https://goo.gl/maps/2V31vBBqo3WwPr8F9">
              Directions
            </Card.Link>
            <Card.Link href="https://www.abainternational.org/events/autism-2022.aspx">
              More Info
            </Card.Link>
          </Card.Body>
        </Card>
      </div>
      <h1 style={{ marginTop: 30 }}>Articles and Videos</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <Card
          style={{
            width: "30%",
            height: 700,

            display: "flex",
            borderRadius: 25,
            borderStyle: "none",
            backgroundColor: "#E95748",
            margin: 15,
          }}
        >
          <Card.Body>
            <Card.Title>Building Better Mental Health </Card.Title>
            <Card.Img
              style={{ marginBottom: 5 }}
              variant="top"
              src={article1}
            />
            <Card.Text>
              Looking to boost your mood, handle your emotions better, or build
              resilience? These six life-changing strategies for improving
              mental health and well-being can show you how.
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem style={{ backgroundColor: "#E95748" }}>
              <strong>by HelpGuide.org</strong>
            </ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Link href="https://www.helpguide.org/articles/mental-health/building-better-mental-health.htm">
              Click to View Article
            </Card.Link>
          </Card.Body>
        </Card>
        <Card
          style={{
            width: "30%",
            height: 700,

            display: "flex",
            borderRadius: 25,
            borderStyle: "none",
            backgroundColor: "#EAFF67",
            margin: 15,
          }}
        >
          <Card.Body>
            <Card.Title>
              Young people's mental health is finally getting the attention it
              needs
            </Card.Title>
            <Card.Img
              style={{ marginBottom: 5 }}
              variant="top"
              src={article2}
            />
            <Card.Text>
              The COVID-19 pandemic, a UNICEF report and a review of the latest
              research all highlight the urgent need for better prevention and
              treatment of youth anxiety and depression.
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem style={{ backgroundColor: "#EAFF67" }}>
              <strong>by nature.com</strong>
            </ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Link href="https://www.nature.com/articles/d41586-021-02690-5">
              Click to View Article
            </Card.Link>
          </Card.Body>
        </Card>
        <Card
          style={{
            width: "30%",
            height: 700,
            display: "flex",
            borderRadius: 25,
            borderStyle: "none",
            backgroundColor: "#CCFFD1",
            margin: 15,
          }}
        >
          <Card.Body>
            <Card.Title>Depression, the secret we share</Card.Title>
            <Card.Img
              style={{ marginBottom: 5 }}
              variant="top"
              src={video1}
            />
            <Card.Text>
              "The opposite of depression is not happiness, but vitality, and it
              was vitality that seemed to seep away from me in that moment." In
              a talk equal parts eloquent and devastating, writer Andrew Solomon
              takes you to the darkest corners of his mind during the years he
              battled depression.
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem style={{ backgroundColor: "#CCFFD1" }}>
              <strong>by Ted</strong>
            </ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Link href="https://www.ted.com/talks/andrew_solomon_depression_the_secret_we_share">
              Click to View Video
            </Card.Link>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
