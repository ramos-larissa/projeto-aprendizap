import React from "react";
import ModalCreateClass from "../ModalCreateClass";
import { Link } from "react-router-dom";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from '@mui/material/TextField';
import Typography from "@mui/material/Typography";

import "./styles.scss";

export default function CreateClass() {
  return (
    <div className="container-create-class">
      <Card sx={{ width: "70%" }} className="card-create-class" >
        <CardContent center>
          <Typography sx={{ mb: 1.5,  fontSize: 24 }} color="text.secondary">
            Crie novas aulas
          </Typography>
          <Typography variant="body2" sx={{ fontSize: 18 }}>
            well meaning and kindly words of encouragement will go a long way to
          </Typography>
          <div className="form-create-class">
          <TextField id="outlined-basic" label="Título da aula" variant="outlined" size="small" sx={{ mr: 2}} />
          <ModalCreateClass />
          </div>

        </CardContent>

         

      </Card>
    </div>
  );
}
