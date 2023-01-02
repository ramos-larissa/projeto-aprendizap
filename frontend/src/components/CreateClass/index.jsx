import React, { useState } from "react";
import ModalCreateClass from "../ModalCreateClass";
import { Link } from "react-router-dom";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import "./styles.scss";

export default function CreateClass() {
  const [value, setValue] = useState("Outros");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="container-create-class">
      <Card sx={{ width: "70%" }}>
        <CardContent center>
          <Typography
            sx={{ mb: 1.5, fontSize: 24, textAlign: "center" }}
            color="text.secondary"
          >
            Crie novas aulas
          </Typography>
          <Typography
            variant="body2"
            sx={{ fontSize: 18, textAlign: "center" }}
          >
            well meaning and kindly words of encouragement will go a long way to
          </Typography>

          <div className="form-control-subject">
            <FormControl>
              <RadioGroup
                row
                className="radio-group-create-class"
                aria-label="Matéria"
                name="controlled-radio-buttons-group"
                value={value}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="Português"
                  control={<Radio />}
                  label="Português"
                />
                <FormControlLabel
                  value="Matemática"
                  control={<Radio />}
                  label="Matemática"
                />
                <FormControlLabel
                  value="Geografia"
                  control={<Radio />}
                  label="Geografia"
                />
                <FormControlLabel
                  value="Física"
                  control={<Radio />}
                  label="Física"
                />
                <FormControlLabel
                  value="Química"
                  control={<Radio />}
                  label="Química"
                />
                <FormControlLabel
                  value="Biologia"
                  control={<Radio />}
                  label="Biologia"
                />
                <FormControlLabel
                  value="Inglês"
                  control={<Radio />}
                  label="Inglês"
                />
                <FormControlLabel
                  value="Outros"
                  control={<Radio />}
                  label="Outros"
                />
              </RadioGroup>
            </FormControl>
          </div>

          <div className="form-create-class">
            <TextField
              id="outlined-basic"
              label="Título da aula"
              variant="outlined"
              size="small"
              sx={{ m: 2 }}
            />
            <ModalCreateClass />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
