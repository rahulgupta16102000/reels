import * as React from "react";
import { useContext } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Alert from "@mui/material/Alert";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import insta from "../Assets/Instagram.JPG";
import mobile from "../Assets/insta.png";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  Image,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import img1 from "../Assets/img1.jpg";
import img2 from "../Assets/img2.jpg";
import img3 from "../Assets/img3.jpg";
import img4 from "../Assets/img4.jpg";
import img5 from "../Assets/img5.jpg";
import { AuthContext } from "../context/AuthContext";

export default function Login() {
  const store = useContext(AuthContext)
  console.log(store)
  return (
    <div
      className="signupwrapper"
      style={{
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      
        <div
          className="car"
          style={{
            backgroundImage: "url(" + mobile + ")",
            backgroundSize: "cover",
            height:'590px',
            width:'440px',
            position:'relative'
          }}
        >
          <div className="dd" style={{height: "423px",
            width:'241px',
            left:'143px',
            top:'93px',
            position:'absolute'}}>
            <CarouselProvider
              visibleSlides={1}
              naturalSlideWidth={238}
              naturalSlideHeight={423}
              totalSlides={5}
              hasMasterSpinner
              isPlaying={true}
              infinite={true}
              dragEnabled={false}
              touchEnabled={false}
            >
              <Slider>
                <Slide index={0}>
                  <Image src={img1} />
                </Slide>
                <Slide index={1}>
                  <Image src={img2} />
                </Slide>
                <Slide index={2}>
                  <Image src={img3} />
                </Slide>
                <Slide index={3}>
                  <Image src={img4} />
                </Slide>
                <Slide index={4}>
                  <Image src={img5} />
                </Slide>
              </Slider>
            </CarouselProvider>
          </div>
        </div>
      
      <div className="signupcard">
        <Card sx={{ maxWidth: 345 }}>
          <CardContent>
            <div className="instaimg">
              <img src={insta} alt="Instagram_img" />
            </div>

            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              fullWidth={true}
              margin="dense"
              size="small"
            />
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              fullWidth={true}
              margin="dense"
              size="small"
            />

            <Button color="primary">Forgot password ?</Button>
          </CardContent>

          <CardActions>
            <Button color="primary" fullWidth={true} variant="contained">
              SignIn
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardContent>
            <Typography variant="subtitle1" fullWidth={true} margin="dense">
              Don't have an Account ? <Link to="/signup">Sign up</Link>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
