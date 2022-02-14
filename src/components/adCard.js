import * as React from "react";
import carAd from "../services/carAd.json";
import Card from "@mui/material/Card";
import { Grid } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardHeader } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Avatar } from "@mui/material";
import { IconButton } from "@mui/material";
import { red } from "@mui/material/colors";
import { CardActionArea } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function AdCard() {
    
  return (
  <div>
      <Grid
                container
                spacing={2}
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
            >
      {carAd.map((car) => (
        <Grid item xs={12} sm={6} md={3} mt={2} ml={2}>
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="Username">
            U
          </Avatar>
        }
        
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon/>
          </IconButton>
        }
        title={car.car}
        subheader="January 1, 2022"
      />
      <CardActionArea>
        <CardMedia
          component="img"
          height="150"
          image="https://picsum.photos/200/300"
          alt="image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {car.car_model}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {car.price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
    ))}
    </Grid>
    </div>
  );
}
