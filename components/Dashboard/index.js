import React from 'react';
import { useQuery } from '@apollo/react-hooks'

// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import LocalHospital from "@material-ui/icons/LocalHospital";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import GET_COVID_STATS from 'queries/stats'

const useStyles = makeStyles(styles);

function Dashboard(props) {
  const classes = useStyles()
  const { date, total_screened, total_confirmed } = props.summary

  const { loading, data, error } = useQuery(GET_COVID_STATS)

  if (error || (loading && !data)) return null
  const { covid_stats } = data

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={6} md={6}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <Accessibility />
              </CardIcon>
              <h3 className={classes.cardCategory}>Screened</h3>
              <h1 className={classes.cardTitle}>{total_screened}</h1>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />
                Just Updated
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={6}>
          <Card>
            <CardHeader color="danger" stats icon>
              <CardIcon color="danger">
                <LocalHospital />
              </CardIcon>
              <h2 className={classes.cardCategory}>Confirmed cases</h2>
              <h1 className={classes.cardTitle}>{total_confirmed}</h1>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <AccessTime />
                updated - {date}
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="danger">
              <h4 className={classes.cardTitleWhite}>State wise Stats</h4>
              <p className={classes.cardCategoryWhite}>
                Total Confirmed, recovered & death counts
              </p>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="danger"
                tableHead={["ID", "State", "Confirmed Indian National", "Confirmed Overseas", "Recovered", "Death"]}
                tableData={covid_stats}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default Dashboard