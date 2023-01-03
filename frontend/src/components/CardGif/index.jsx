import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ModalGifDescription from "../ModalGifDescription";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import "./styles.scss";

export default function CardGif({ data }) {
  console.log(data, "data card gif");

  return (
    <>
      <Card sx={{ width: 250 }}>
        <CardMedia
          component="img"
          alt="gif"
          width="150"
          height="auto"
          image={data.url}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            Descrição
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            className="card-gif-description"
          >
            {data.description}
          </Typography>
        </CardContent>
        <CardActions>
          <ModalGifDescription data={data}/>
        </CardActions>
      </Card>
      
    </>
  );
}
