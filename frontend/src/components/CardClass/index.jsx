import React, { useEffect, useState } from "react";
import CardGif from "../CardGif";
import Service from "../../services/Service";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import "./styles.scss";

export default function CardClass({ data }, index) {
  const [expanded, setExpanded] = useState(false);
  const [body, setBody] = useState(0);


  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  console.log(data, "data card class");
  return (
    <div className="container-card-class">
      <Accordion
        sx={{ width: "70%" }}
        expanded={expanded === `panel${index}`}
        onChange={handleChange(`panel${index}`)}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography variant="h5">
            {data.title}
          </Typography>
          {/* <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography> */}
        </AccordionSummary>
        <AccordionDetails>
          <CardGif/>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
