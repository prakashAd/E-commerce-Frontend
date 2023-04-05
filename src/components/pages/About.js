import {
  Typography,
  Card,
  CardMedia,
  CardActions,
  CardContent,
  Button,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Navbar from "../layouts/Navbar";
import ShareIcon from "@mui/icons-material/Share";
import MoreIcon from "@mui/icons-material/More";

function About() {
  return (
    <>
      <Navbar />

      <Box backgroundColor={"cornsilk"} p={"25px"} textAlign='center'>
        <Typography
          variant="h4"
          sx={{ textDecoration: "underline" }}
          color="success.light"
          textAlign={"center"}
        >
          About us
        </Typography>

        <Box display={"flex"} flexWrap={"wrap"} justifyContent={"space-evenly"}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image="./slider images/1.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Laptop
              </Typography>
              <Typography variant="body2" color="text.secondary">
              A laptop computer, sometimes called a notebook computer by manufacturers, is a battery- or AC-powered personal computer generally smaller than a briefcase that can easily be transported and conveniently used in temporary spaces such as on airplanes, in libraries, temporary offices, and at meetings.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">
                Share
                <ShareIcon />
              </Button>
              <Button size="small">
                Learn More <MoreIcon />
              </Button>
            </CardActions>
          </Card>

          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image="./slider images/2.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Mobiles
              </Typography>
              <Typography variant="body2" color="text.secondary">
              A mobile phone is a wireless handheld device that allows users to make and receive calls. While the earliest generation of mobile phones could only make and receive calls, today's mobile phones do a lot more, accommodating web browsers, games, cameras, video players and navigational systems.
              </Typography>
            </CardContent>
            <CardActions>
              <Box display="flex" justifyContent="space-between">
                <Button size="medium">
                  Share <ShareIcon />
                </Button>
                <Button size="medium">
                  Learn More <MoreIcon />
                </Button>
              </Box>
            </CardActions>
          </Card>

          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image="./slider images/3.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Headphones
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Headphones are a pair of padded speakers which you wear over your ears in order to listen to a radio or recorded music, or for using a phone without other people hearing it.
              </Typography>
            </CardContent>
            <CardActions>
              <Box display="flex" justifyContent="space-between">
                <Button size="medium">
                  Share <ShareIcon />
                </Button>
                <Button size="medium">
                  Learn More <MoreIcon />
                </Button>
              </Box>
            </CardActions>
          </Card>


          
        </Box>
      </Box>
    </>
  );
}

export default About;
