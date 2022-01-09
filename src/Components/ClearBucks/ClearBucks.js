// Authors: Dan, Sam
import React, { useEffect } from "react";
import MetaTags from "react-meta-tags";
import { MobileNavBar } from "../NavBar/MobileNavBar";
import { BrowserNavBar } from "../NavBar/BrowserNavBar";
import { BrowserView, MobileView } from "react-device-detect";
import { Card, Image, Table } from "react-bootstrap";
import ClearSkyLogo from "../Images/ClearSkyAppLogo.png";
import { DeskFooter } from "../DeskFooter/DeskFooter";
import { fName, blueBucks } from "../LocalUser/LocalUser";
import { restrictPage } from "../API/Api";
import "./ClearBucks.css";

// Provides clearbucks page
export function ClearBucks() {
  useEffect(() => {
    restrictPage();
  }, []);

  let bb_table = [];

  for (let i in blueBucks) {
    let date = JSON.stringify(blueBucks[i].date);
    let newDate = `${date.slice(6, 8)}/${date.slice(9, 11)}/${date.slice(
      1,
      5
    )}`;
    bb_table.push(
      <tr style={{ textAlign: "center" }}>
        <td>{blueBucks[i].transactionType}</td>
        <td>{blueBucks[i].amount}</td>
        <td>{newDate}</td>
      </tr>
    );
  }

  // posting No Service Info for users with no services
  if (bb_table.length === 0) {
    bb_table.push(
      <tr style={{ fontSize: "11px", textAlign: "center" }}>
        <td colspan="3">No Clear Bucks</td>
      </tr>
    );
  }

  // Calculation for the Current Balance
  let earned = 0;
  let redeemed = 0;
  let referral = 0;
  for (let i in blueBucks) {
    let bucks = blueBucks[i].transactionType;
    if (bucks === "Earned") {
      earned += blueBucks[i].amount;
    } else if (bucks === "Referral") {
      referral += blueBucks[i].amount;
    } else {
      redeemed += blueBucks[i].amount;
    }
  }

  let currentBalance = earned - redeemed;

  return (
    <>
      <MetaTags>
        <title>Clear Sky | Clear Bucks</title>
        <meta
          name="Clear Sky Clear Bucks"
          content="Welcome to Clear Sky, this app is used for testing purposes"
        />
        <meta property="og:title" content="Clear Sky Clear Bucks" />
        <meta property="og:image" content="../Images/Header.png" />
      </MetaTags>

      <BrowserView>
        <BrowserNavBar active="blueBucks" />

        <Card className="border-0 w-100 mx-auto">
          <Card.Header
            className="d-flex justify-content-center align-items-center mb-2 border-0"
            id="cardh"
          >
            {fName}'s Clear Bucks History
          </Card.Header>

          <Card.Body className="mx-auto w-50">
            <Card.Title id="btitle" data-testid="currentBalance">
              Current Balance: <strong>{currentBalance}</strong>
            </Card.Title>
            <Card.Title id="rtitle" data-testid="referralBalance">
              Referral Total: <strong>{referral}</strong>
            </Card.Title>
            <div className="tableFixHead">
              <Table
                striped
                bordered
                hover
                size="sm"
                data-testid="blueBucksTable"
              >
                <thead>
                  <tr>
                    <th>Transaction Type</th>
                    <th>Amount</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody id="tbdy">{bb_table}</tbody>
              </Table>
            </div>
          </Card.Body>
          <Card.Text className="text-center mr-3 ml-3 mb-1 mt-3" id="earned">
            Clear Bucks are earned through special promotions and upon payment
            of services and can be redeemed for future service discounts.
          </Card.Text>
          <DeskFooter />
        </Card>
      </BrowserView>

      <MobileView>
        <div className="bgheader">
          <div className="cloudyHeader pt-3 pb-3">
            <Image src={ClearSkyLogo} id="wdth" />
          </div>
        </div>

        <Card className="border-0" id="bcrd">
          <Card.Header
            className="d-flex justify-content-center align-items-center text-white"
            id="mchead"
          >
            {fName}'s Clear Bucks History
          </Card.Header>

          <Card.Body id="brdbody">
            <Card.Title id="btitle">
              Current Balance: <strong>{currentBalance}</strong>
            </Card.Title>
            <Card.Title id="rtitle">Referral Total: {referral}</Card.Title>
            <div className="tableFixHead">
              <Table striped bordered hover size="sm" id="mbbtable">
                <thead>
                  <tr>
                    <th>Transaction Type</th>
                    <th>Amount</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody id="tbdy">{bb_table}</tbody>
              </Table>
            </div>
          </Card.Body>
          <Card.Text className="text-center mr-3 ml-3 mb-1" id="cbearned">
            Clear Bucks are earned through special promotions and upon payment
            of services and can be redeemed for future service discounts.
          </Card.Text>
        </Card>

        <MobileNavBar active="blueBucks" />
      </MobileView>
    </>
  );
}
