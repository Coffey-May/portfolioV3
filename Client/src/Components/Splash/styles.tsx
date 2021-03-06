import { makeStyles } from "@material-ui/core/styles";
// import image from "../../assets/gradientSky.jpeg";
// import image1 from "../../assets/stars.jpeg";
// import image1 from "../../assets/sun.gif";

import image1 from "../../assets/sunweb.webp";
import dots from "../../assets/dots.webp";
// Client/src/assets/Screen-Shot-2021-12-06-at-11.05.26-AM.webp
// let pine = '#157A6E'
// let shamRock = '#157A6E',
// let ashGray = '#C2C5BB'
// let darkSea = '#77B28C'
// let brownSugar = '#B4654A'

export const useStyles = makeStyles((theme) => ({
  title: {
    // fontSize: "4rem",
    fontSize: "4.15vw",
    // letterSpacing: ' .4rem',
    fontWeight: 200,
    letterSpacing: ".25em",
    [theme.breakpoints.down(850)]: {
      // fontSize: "3em",
      fontSize: "10vw",
      letterSpacing: " 0em",
      margin: "0 auto",
    },
  },
  vanish: {
    [theme.breakpoints.down(1400)]: {
      display: "none",
    },
  },
  subtitle: {
    fontSize: "1.25vw",
    letterSpacing: ".05em",
    [theme.breakpoints.down(850)]: {
      fontSize: "3.5vw",
    },
  },
  subtitle1: {
    // fontSize: "2.5rem",
    fontSize: "2.5vw",
    fontWeight: 100,
    letterSpacing: ".18em",
    [theme.breakpoints.down(850)]: {
      // padding: ".45rem",
      // fontSize: "1.4rem",
      fontSize: "5vw",
      letterSpacing: "0em",
    },
  },
  subtitle2: {
    // fontSize: "2.5rem",
    // letterSpacing: ".18em",
    padding: " 9px 0px 15px 0px",
    fontSize: "1.15vw",
    fontWeight: 200,
    [theme.breakpoints.down(850)]: {
      padding: " 10px 0px 16px 0px",
      fontSize: "2.5vw",
      letterSpacing: "0em",
    },
  },
  nameTitle: {
    marginTop: "15vh",
    paddingTop: "2em",
    textTransform: "uppercase",
    fontFamily: "verdana",
    color: "#f5f5f5",
    textShadow: " 0 0 0.05em currentColor",
    width: "70vw",

    [theme.breakpoints.down(900)]: {
      marginTop: "19.75vh",
      textAlign: "center",
      width: "95vw",
      margin: "0 auto",
      // marginLeft: "0 auto",
      // marginRight: "0 auto",
      paddingRight: "80px",
    },
  },
  splashLeft: {
    backgroundColor: "#157A6E",
  },

  memphis: {
    zIndex: 99,
    overflow: "hidden",
    display: "block",
    width: "50%",
    margin: "0 auto",
    position: "relative",
    top: "25vh",
    [theme.breakpoints.down(960)]: {
      display: "none",
    },
  },
  btnFocus: {
    fontSize: "4em",
    "&:hover": {
      background: "none",
    },
    [theme.breakpoints.down(960)]: {
      display: "none",
      fontSize: "2em",
    },
  },
  about: {
    backgroundImage: `url(${dots})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "40vw",
    backgroundPosition: "right 0px",
    marginTop: "-15vh",
    [theme.breakpoints.up(1400)]: {
      marginTop: "-15vh",
    },
    [theme.breakpoints.down(960)]: {
      marginTop: "-15vh",
    },
  },
  splashWrapper: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    minHeight: "100vh",

    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100vw",
    // backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 255, 0.1), rgba(255, 254, 199, 0.5)),
    //     url(${image})`,
    backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255,0), rgba(100,0,0,0.4)), 
        url(${image1})`,

    // animation: "$move-twink-back 2s infinite",
  },

  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    width: "100%",

    background: "rgb(177,177,177)",

    opacity: "0.5",
  },
  first: {
    initialLetter: 2,
  },

  stars: {
    position: "absolute",
    width: "100%",
    minHeight: "100vh",
    background: ` url(${image1}) repeat top center;
         z-index:0`,
    animation: "$fadeIn 5s infinite",
  },
  "@keyframes fadeIn": {
    "0%": {
      opacity: 0.4,
    },
    "50%": {
      opacity: 0.7,
    },
    "100%": {
      opacity: 0.4,
    },
  },
  "@keyframes fadeIn2": {
    "0%": {
      opacity: 0,
    },
    "50%": {
      opacity: 1,
    },
    "100%": {
      opacity: 0,
    },
  },
  cloud1: {
    animation: " $clouds 30s infinite,$fadeIn2 15s infinite",
    willChange: "transform,opacity,left,right",
  },
  cloud2: {
    animation: " $clouds 24s infinite, $fadeIn2 12s infinite",
    willChange: "transform,opacity,left,right",
  },
  cloud3: {
    animation: " $clouds 30s infinite,$fadeIn2 60s infinite",
    willChange: "transform,opacity,left,right",
  },
  cloud4: {
    animation: " $clouds 26s infinite,fadeIn2 12s infinite",
    willChange: "transform,opacity,left,right",
  },
  cloud5: {
    animation: "$clouds 51s infinite,fadeIn2 15s infinite",
    willChange: "transform,opacity,left,right",
  },
  "@keyframes clouds": {
    "0%": {
      transform: "scale(1, 1.1)",
      left: -100,
    },
    "50%": {
      transform: "scale(1.3 , 1.3)",
      right: 100,
    },

    "100%": {
      left: -100,
      transform: "scale(1, 1.1)",
    },
  },
  hide: {},
}));
