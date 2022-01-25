import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions} from "@mui/material";
import Alert from '@mui/material/Alert';
import {Link, useNavigate} from 'react-router-dom';
import TextField from '@mui/material/TextField';
import insta from "../Assets/Instagram.JPG";
import CloudUploadIcon from '@material-ui/icons/CloudUpload'
import { useState,useContext } from "react";
import { AuthContext } from "../context/AuthContext";


export default function Signup() {
  const [email,setemail] = useState('');
  const [password,setpassword] = useState('');
  const [name,setname] = useState('');
  const [file,setfile] = useState(null);
  const [loading,setloading]=useState(false);
  const [error,seterror]=useState('');
  // const history = useHistory(); 
  const {signup} = useContext(AuthContext)
  let navigate = useNavigate();


const handleClick=async()=>{
 
      if(file==null){
        seterror("Please Upload Your Profile");
        setTimeout(() => {
          seterror('');
        }, 2000);
        return;
      }
      try {
          let userobj =await signup(email,password);
         let uid = userobj.user.uid;
         console.log(uid)
      } catch (err) {
        seterror(err);
        setTimeout(() => {
          seterror('');
        }, 2000);
        return;
      }
}

  return (
    <div className="signupwrapper">
      <div className="signupcard">
        <Card sx={{ maxWidth: 345 }}>
          <CardContent>
          <div className="instaimg">
              <img src={insta} alt="Instagram_img" />
          </div>
            <Typography gutterBottom variant="subtitle1"  >
              signup to see photos and videos from your friend
            </Typography>
  {error!='' && <Alert severity="error">{error}</Alert>}
  <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth={true} margin="dense" size="small" value={email} onChange={(e)=>setemail(e.target.value)}/>
  <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth={true} margin="dense" size="small" value={password} onChange={(e)=>setpassword(e.target.value)}/>
  <TextField id="outlined-basic" label="Full Name" variant="outlined" fullWidth={true} margin="dense" size="small" value={name} onChange={(e)=>setname(e.target.value)}/>
  <Button size="small" color="secondary" fullWidth={true} variant="outlined" startIcon={<CloudUploadIcon/>} component="label">
            Upload Profile Image
            <input type="file" accept="image/*" hidden onChange={(e)=>setfile(e.target.files[0])}/>
            </Button>
          </CardContent>

          <CardActions>
            <Button   color="primary" fullWidth={true} variant="contained"   onClick={handleClick}>
              SignUp
            </Button>
          </CardActions>
            <Typography gutterBottom variant="subtitle1"  >
               by siging up, you are agree to the terms and conditions of cookies and policy.
            </Typography>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
            <CardContent>
            <Typography   variant="subtitle1" fullWidth={true} margin='dense'>
               Having an Account ? <Link to="/login" >Login</Link>
            </Typography>
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
