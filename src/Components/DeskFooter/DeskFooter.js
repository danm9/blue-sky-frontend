// Author(s): Dan, Sam
import React from "react";
import { Card } from "react-bootstrap";
import "./DeskFooter.css";

// This is the footer component for the Desktop view

export function DeskFooter() {
  return (
    <div id="bottom">
      <Card className="border-0">
        <Card.Body
          className="d-flex flex-column justify-content-center align-items-center"
          id="bg"
        >
          <Card.Text className="text-center mr-3 ml-3 mb-1" id="blueyou">
            LET'S DO SOME TESTING
          </Card.Text>
          <Card.Text className="mr-3 ml-3 mt-2 text-center" id="estimates">
            All Data is Used for Testing and Automation
          </Card.Text>
          <Card.Text className="mr-3 ml-3 mt-2 text-center" id="copyright">
            <br />
            This App is used for Testing Purposes Only
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
