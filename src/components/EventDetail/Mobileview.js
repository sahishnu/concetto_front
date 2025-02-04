import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";

class Mobileview extends Component {
  render() {
    const { event } = this.props;
    return (
      <div>
        <ExpansionPanel square expandIcon={<ExpandMoreIcon />}>
          <ExpansionPanelSummary
            aria-controls="panel1d-content"
            id="panel1d-header"
            style={{ backgroundColor: "#666666" }}
          >
            <div
              className="btn btn-event btn-2 active-bottom"
              style={{ marginLeft: "32%" }}
            >
              ABOUT
            </div>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              {" "}
              {` About:- ${event.description + "\n" + event.about} \n `}
              <br />
              <br />
              {`${
                event.is_club
                  ? " CLUB  :  " + event.club
                  : "  DEPARTMENT  :  " + event.dept
              }`}
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel square>
          <ExpansionPanelSummary
            aria-controls="panel2d-content"
            id="panel2d-header"
            style={{ backgroundColor: "#666666" }}
          >
            <div
              className="btn btn-event btn-2 active-bottom"
              style={{ marginLeft: "32%" }}
            >
              DETAILS
            </div>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>{event.description}</Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel square>
          <ExpansionPanelSummary
            aria-controls="panel3d-content"
            id="panel3d-header"
            style={{ backgroundColor: "#666666" }}
          >
            <div
              className="btn btn-event btn-2 active-bottom"
              style={{ marginLeft: "32%" }}
            >
              RULES
            </div>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              <ul>
                {event.rules.split(";").map(str => (
                  <li>{"  " + str}</li>
                ))}
              </ul>
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel square>
          <ExpansionPanelSummary
            aria-controls="panel3d-content"
            id="panel3d-header"
            style={{ backgroundColor: "#666666" }}
          >
            <div
              className="btn btn-event btn-2 active-bottom"
              style={{ marginLeft: "32%" }}
            >
              REGISTER
            </div>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <a href={event.link} target="_#">
              <button type="button" className="btn btn-primary btn-lg">
                REGISTER
              </button>
            </a>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

export default Mobileview;
