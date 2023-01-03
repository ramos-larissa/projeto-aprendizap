import React, { useEffect, useState } from 'react';
import CardGif from '../CardGif';
import AddGif from '../AddGif';
import Service from '../../services/Service';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteIcon from '@mui/icons-material/Delete';

import './styles.scss';
import { Button } from '@mui/material';

export default function CardClass({ data }, index) {
  const [expanded, setExpanded] = useState(false);
  const [body, setBody] = useState(0);

  const deleteClass = () => {
    Service.delete(data.id)
      .then((response) => {
        const { data } = response;
        setBody(data);
        return body;
      })
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        window.alert(`${error} Erro ao deletar aula`);
      });
  };

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="container-card-class">
      <Accordion
        sx={{ width: '70%' }}
        expanded={expanded === `panel${index}`}
        onChange={handleChange(`panel${index}`)}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ mr: '8px' }} variant="h5">
            {data.title}
          </Typography>
          <Typography
            sx={{
              p: '8px',
              backgroundColor: '#ee73b6',
              borderRadius: 15,
              fontSize: 12,
              color: 'white',
              textAlign: 'center',
            }}
          >
            {data.subject}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <AddGif data={data} />
          <Button
            size={'small'}
            variant="outlined"
            color="error"
            startIcon={<DeleteIcon />}
            sx={{ ml: 2, mb: 2 }}
            onClick={deleteClass}
          >
            Excluir
          </Button>
          <div className="content-card-class">
            {Object.keys(data.gif).map((item, value) => {
              return (
                <CardGif
                  data={data.gif[item]}
                  index={value}
                  idLesson={data.id}
                />
              );
            })}
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
