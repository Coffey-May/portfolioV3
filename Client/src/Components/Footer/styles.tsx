import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  foot: {
    background: "black",
    color: "lightgrey",
    minHeight: "150px",
    position: "absolute",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "6em",
    textAlign: "center",
    [theme.breakpoints.down(600)]: {
      textAlign: "left",
    },
  },
  boxWrap: {
    display: "flex",
    flexDirection: "row",
    margin: "0 auto",
    width: "70%",
    padding: "1em 0em",
    justifyContent: "space-evenly",
    [theme.breakpoints.down(600)]: {
      // justifyContent: "space-between",
      marginLeft: "0",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      // ustifyContent: "space-between",
    },
  },
  hr: {
    //    border:'none'
  },
}));
