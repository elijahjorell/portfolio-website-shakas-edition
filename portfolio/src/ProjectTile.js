import { React, useState } from "react";
import {Modal, Button, Card, Image} from "react-bootstrap";
import LetsEatAt from "./LetsEatAt.png";

const ProjectTile = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleWebAppLinkClick = () => window.open(props.webAppLink, " _blank");
  const handleRepoLinkClick = () => window.open(props.repoLink, " _blank");

  return (
    <div className="ProjectTile">
      <Image className="project-tile-image" src={props.image} fluid/>
      <div className="project-tile-overlay">
        <h3>{props.title}</h3>
        <h5>{props.techStack}</h5>
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
            <div>
              <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                  <h6>{props.techStack}</h6>
                  {
                    props.paragraphs.map((paragraph) => {
                      return (
                          <div>
                            <p>{paragraph}</p>
                          </div>
                      )
                    })
                  }
                </Card.Text>

                <div className="buttons">
                {
                  props.hasOwnProperty("webAppLink") ? (
                    <Button variant="primary" onClick={handleWebAppLinkClick} style={{marginRight: "15px"}}>
                      View Web App
                    </Button>
                  ) : (
                    <div />
                  )
                }
                {
                  props.hasOwnProperty("repoLink") ? (
                    <Button variant="outline-primary" onClick={handleRepoLinkClick}>
                      View Repo
                    </Button>
                  ) : (
                      <div />
                  )
                }
                  <Button variant="secondary" onClick={handleClose} style={{position: "absolute", right: "20px"}}>
                    Close
                  </Button>
                </div>
              </Card.Body>
            </div>
          </Card>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ProjectTile;
