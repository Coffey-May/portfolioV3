import React, { memo, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { useStyles } from "./styles";
import Memphis from '../../assets/memphis.png'
// import Resume from '../../PDFS/CoffeyMayResume2021.pdf'
import Resume from '../../PDFS/CoffeyMayResume2021.pdf';
import Waves from './Waves';


const divToggle = () => {
 
    document.addEventListener('scroll', function (e) {

   console.log(window.innerWidth)
      // else
      
      if (window.pageYOffset >= 1 ) {
        document.querySelector('.overlay2').style.display = "none"
      }
      else if (window.pageYOffset < 1) {
        document.querySelector('.overlay2').style.display = "block"
      }

    })
}


const Title = () => {
  const classes = useStyles();

  useEffect(() => {
    divToggle()
  
  }, [])
 


  return (

    <Container>

      <Box>
        <Grid container  >


          <Grid item lg={6} md={6} sm={12} xs={12}>
            <motion.div

              className={classes.nameTitle}
              animate={{
                x: 40,
                opacity: 1,
              }}
              initial={{
                opacity: -1,
                x: -80
              }}
              transition={{
                type: "spring",
                duration: 1,
              }}
            >

              <div
                style={{
                  WebkitBoxReflect:
                    "below 0px linear-gradient(to bottom, rgba(0,0,0,0.0), rgba(0,0,0,0.1), rgba(0,0,0,0.3))",
                  color: '#fcf8e8', zIndex: 99

                }}
              >

                <Typography className={classes.title} style={{ fontWeight: 900, }} variant={"h2"}> Coffey May </Typography>
                <Typography className={classes.subtitle1} style={{ fontWeight: 600 }} variant={"h5"}>Software Developer</Typography>
                <Typography className={classes.subtitle} style={{ padding: ' 20px 0px 25px 0px', fontSize: "medium", fontWeight: 300 }} >Progressive Web Applications in React, Typescript, and NodeJs.</Typography>

                <Box pt={1} pb={1}>
                  <a style={{ textDecoration: 'none' }} href={Resume} target="blank">
                    <Button className={classes.subtitle} style={{
                      color: "white",
                      backgroundColor: '#d1006c',
                      width: '13rem'
                    }} color="inherit" variant="outlined">
                      <Typography variant={"body1"}>
                        Download Rèsumè &#10095;
                      </Typography>
                    </Button>
                  </a>
                </Box>

              </div>

            </motion.div>
          </Grid>

  

            <Grid item lg={6} md={6} sm={12} xs={12} >
              <motion.div
                // className={classes.nameTitle}
                animate={{
                  x: 0,
                  opacity: 1,
                }}
                initial={{
                  opacity: 0,
                  x: -190,
                }}
                transition={{
                  type: "spring",
                  duration: 1.25,
                }}
              >
<div className="overlay2" >

      
                <Button className={classes.btnFocus} style={{   margin: '0 auto', padding: '0', right: '0vw' }}>

                  <span className={classes.memphis} style={{
                    zIndex: '99',
                    height: '87.5vh',
                    right: '0',
                    // marginTop:'75px',
                    // marginRight: '0',
                    width: '50vw',
                    background: 'linear-gradient(to right,#d1006c, transparent)',
                  borderRadius: '355px 0px 0px 355px',
                    // opacity: `${Y}` > 1 ? 0 : 1,
                    display: 'inline-block',
                    
                    color:'white',
                    boxShadow: '0px 5px 10px 0px #0000009E',
                  }} className="dot">
                     {/* <Waves/> */}
               
                    {/* <div style={{
                      marginTop:'20vh'
                    }} class="text">
                      INNOVATIVE AND MODERN DATA SOLUTIONS.
                     
                    </div> */}
                    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', marginLeft: '-2.6vw', marginTop: '40vh', color: 'white', WebkitBoxReflect:
                    "below 0px linear-gradient(to bottom, rgba(0,0,0,0.0), rgba(0,0,0,0.1), rgba(0,0,0,0.3))", }}>
                      <i style={{padding:'10px'}} className="devicon-html5-plain"></i>
                       <i style={{padding:'10px'}}  className="devicon-css3-plain"></i>
                      <i style={{padding:'10px'}}  className="devicon-javascript-plain"></i>
                      <i style={{padding:'10px'}}  className="devicon-typescript-plain"></i>

                      <i style={{padding:'10px'}}  className="devicon-nodejs-plain"></i>
                       <i style={{padding:'10px'}}  className="devicon-react-original"></i>
                    <i style={{padding:'10px'}}  className="devicon-csharp-plain"></i>
                    <i style={{padding:'10px'}}  className="devicon-dotnetcore-plain"></i>
                    
             
                    <i style={{padding:'10px'}}  className="devicon-git-plain"></i>
                    
                   
                   
                   
                   
                    
                    </div>
                  </span>

                </Button>
      </div>
                {/* <img style={{ background: 'radial-gradient(white,white,transparent,transparent)', filter: 'invert(1)' }} className={classes.memphis} src={`${Memphis}`} alt="memphis design" /> */}

              </motion.div>
            </Grid>
    

        </Grid>

      </Box>

    </Container>

  );
};

export default memo(Title);