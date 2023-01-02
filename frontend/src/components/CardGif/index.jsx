import React from "react";
import { Link } from "react-router-dom";
import ModalGifDescription from "../ModalGifDescription";


import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import "./styles.scss";

export default function CardGif() {
  return (
    <>
      <Card sx={{ width: 250 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          width="150"
          height="auto"
          image="https://media4.giphy.com/media/Y0zXpgW4TQmPd6lHIR/giphy.gif"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            Descrição
          </Typography>
          <Typography variant="body2" color="text.secondary" className="card-gif-description">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <ModalGifDescription/>
        </CardActions>
      </Card>
    </>
  );
}
