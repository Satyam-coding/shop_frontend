import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useAuth} from "../Provider/AuthProvider"
import {Link} from "react-router-dom"



const Profile = () => {
  const {userData}=useAuth();

  const [data,setData]=React.useState(
    {
      fname:"",
      lname:"",
      email:"",
    }
  );
  const [autofill,setAutoFill]=React.useState(true);

  if(userData && autofill){
    setData(userData);
    setAutoFill(false);
  }
  

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://t3.ftcdn.net/jpg/03/35/34/80/360_F_335348056_yY8QyHP966KePjyutnns1Puwt2bnngZc.jpg"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">

            {`${data.fname} ${data.lname}`} <br/>
            {`${data.email}`}
            
          </Typography>
          <Typography variant="body2" color="text.secondary">
          A programmer, with their ingenious coding prowess, breathes life into mere lines of text, crafting intricate digital worlds with every keystroke. Their dedication to unraveling complex problems is akin to a relentless quest for perfection, where each bug conquered is a triumph celebrated. Behind their screens, they are architects of innovation, weaving algorithms like threads of hope into the fabric of tomorrow's technology.

          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Update Profile</Button>
          <Link to="/updatePassword"><Button size="small">Update Password</Button></Link>
        </CardActions>
      </Card>
    </div>
  );
}

export default Profile;
