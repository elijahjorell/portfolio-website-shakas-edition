import { React, useState } from "react";
import {Modal, Button, Card, Image} from "react-bootstrap";
import LetsEatAt from "./LetsEatAt.png";

const ProjectTile = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="ProjectTile">
      <Image className="project-tile-image" src={LetsEatAt} fluid/>
      <div className="project-tile-overlay">
        <h3>My Project</h3>
        <h5>Tech Stack</h5>
        <br/>
        <br/>
        <br/>
        <Button variant="primary" onClick={handleShow}>
          More Details
        </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body style={{ padding: "0", border: "none" }}>
          <Card style={{ width: "100%", border: "none", height: "500px" }}>
            <Image src={LetsEatAt}/>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Card.Body>
          </Card>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ProjectTile;
