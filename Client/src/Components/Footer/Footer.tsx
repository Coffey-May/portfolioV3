import React, { memo } from "react";
import { Grid, Box, Link, CssBaseline, Typography } from "@material-ui/core";
import EmailIcon from "@material-ui/icons/Email";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import useStyles from "./styles";
import GitHub from "@material-ui/icons/GitHub";

const Footer = () => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />

      <Grid container className={classes.foot}>
        <Grid
          item
          xs={12}
          sm={3}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Typography style={{ fontWeight: "bolder" }} variant="h5">
            Coffey May
          </Typography>

          <Box>
            <Link
              href="https://en.wikipedia.org/wiki/Nashville,_Tennessee"
              color="inherit"
              target="_blank"
            >
              NASHVILLE, TN.
            </Link>
          </Box>
          <Box pb={2}>
            &copy;
            {new Date().getFullYear()}
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          sm={3}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Typography style={{ fontWeight: "bolder" }} variant={"h5"}>
            About Us
          </Typography>

          <Box>
            <Link href="/Info" color="inherit">
              HISTORY
            </Link>
          </Box>
          <Box>
            <Link href="/Info" color="inherit">
              TESTIMONIALS
            </Link>
          </Box>
          <Box pb={2}>
            <Link href="/Info" color="inherit">
              FAQ
            </Link>
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          sm={3}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Typography style={{ fontWeight: "bolder" }} variant={"h5"}>
            Stay Connected
          </Typography>

          <Grid className={classes.boxWrap}>
            <Box mr={0}>
              <Link
                href="https://github.com/Coffey-May"
                color="inherit"
                target="_blank"
              >
                <GitHub />
              </Link>
            </Box>
            <Box mr={0}>
              <Link
                rel="noreferrer"
                target="_blank"
                href="mailto: jcoffeymay6@gmail.com"
                color="inherit"
              >
                <EmailIcon />
              </Link>
            </Box>
            <Box mr={0}>
              <Link
                rel="noreferrer"
                target="_blank"
                href="https://www.linkedin.com/in/coffey-may"
                color="inherit"
              >
                <LinkedInIcon />
              </Link>
            </Box>
            {/* <Box mr={0}>
              <Link href="/" color="inherit">
                <PhoneIphoneIcon />
              </Link>
            </Box> */}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default memo(Footer);
