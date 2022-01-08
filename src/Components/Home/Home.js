// Author(s): Dan, Sam
import React, { useEffect } from "react";
import MetaTags from "react-meta-tags";
import { MobileNavBar } from "../NavBar/MobileNavBar";
import { BrowserNavBar } from "../NavBar/BrowserNavBar";
import { BrowserView, MobileView } from "react-device-detect";
import { Card, Image, Button } from "react-bootstrap";
import ClearSkyLogo from "../Images/ClearSkyAppLogo.png";
import ImageOne from "../Images/hero1.jpg";
import ImageTwo from "../Images/hero2.jpg";
import ImageThree from "../Images/hero3.jpg";
import { newsHeadline, newsText } from "../LocalUser/LocalUser";
import { DeskFooter } from "../DeskFooter/DeskFooter";
import { restrictPage } from "../API/Api";
import "./Home.css";

// Provides home page
export function Home() {
  const picArray = [ImageOne, ImageTwo, ImageThree];
  const randIndex = Math.floor(Math.random() * picArray.length);
  const selPicture = picArray[randIndex];

  useEffect(() => {
    restrictPage();
  }, []);

  return (
    <>
      <MetaTags>
        <title>Clear Sky | Home</title>
        <meta
          name="Clear Sky Home"
          content="Welcome to Clear Sky App, we use this for testing"
        />
        <meta property="og:title" content="Clear Sky Home" />
      </MetaTags>

      <BrowserView>
        <BrowserNavBar active="home" />
        <Card className="border-0 mx-auto">
          <Card.Header
            className="flex-row mt-3 mb-3 ml-3 mr-3 border-0"
            id="background"
            style={{ backgroundImage: `url(${selPicture})` }}
          >
            <Card.Text className="text-center w-75 mx-auto">
              <div id="news" data-testid="news">
                <div>
                  <strong>{newsHeadline}</strong>
                  <br /> {newsText}
                </div>
              </div>
            </Card.Text>
            <div className="d-flex justify-content-center" id="buttons">
              <div className="mx-auto">
                <Button
                  className="p-2 mr-2"
                  id="btn"
                  variant="dark"
                  href="/estimates"
                  data-testid="requestQuote"
                >
                  REQUEST A QUOTE
                </Button>
                <Button
                  className="p-2 mr-2"
                  id="btn"
                  variant="dark"
                  href="/services"
                  data-testid="requestService"
                >
                  REPEAT A SERVICE
                </Button>
              </div>
            </div>
          </Card.Header>
          <DeskFooter />
        </Card>
      </BrowserView>

      <MobileView>
        <div className="bgheader">
          <div className="cloudyHeader">
            <Image src={ClearSkyLogo} id="wdth" />
          </div>
        </div>

        <Card className="border-0">
          <Card.Header
            className="d-flex justify-content-center align-items-center text-white"
            id="header"
          >
            <Card.Text className="text-center mr-1 ml-1" id="ctext">
              <div>
                <strong>{newsHeadline}</strong>
                <br /> {newsText}
              </div>
            </Card.Text>
          </Card.Header>

          <div
            className="d-flex mx-auto justify-content-center border border-dark border-3"
            style={{ backgroundImage: `url("${selPicture}")` }}
            id="image"
          ></div>

          <Card.Body
            className="d-flex p-1 pt-3 flex-column justify-content-center align-items-center"
            id="cardbody"
          >
            <Card.Text className="text-center mr-3 ml-3 mb-1" id="blueyou">
              LET'S DO SOME TESTING
            </Card.Text>
            <Card.Text className="mr-2 ml-2 mt-2 text-center" id="estimates">
              All Data is Used for Testing and Automation
            </Card.Text>
          </Card.Body>
          <Card.Body className="d-flex justify-content-center" id="cardbody">
            <Button
              className="p-2 mr-2"
              variant="dark"
              id="btn"
              href="/estimates"
            >
              REQUEST A QUOTE
            </Button>
            <Button className="p-2" variant="dark" id="btn" href="/services">
              REPEAT A SERVICE
            </Button>
          </Card.Body>
        </Card>
        <MobileNavBar active="home" />
      </MobileView>
    </>
  );
}
