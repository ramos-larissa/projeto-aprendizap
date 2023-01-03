import * as React from 'react';
import Service from '../../services/Service';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import './styles.scss';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ModalGifDescription({ data, idLesson }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const id = idLesson;
  const idGif = data.id;

  const handleClick = () => {
    Service.deleteGif(id, idGif)
      .then((response) => {
        handleClose();
        return response;
      })
      .then(() => {
        window.location.reload(false);
      })
      .catch((error) => {
        window.alert(`${error} Erro ao deletar gif`);
      });
  };

  return (
    <div>
      <Button size="small" onClick={handleOpen}>
        Ler mais
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Descrição
          </Typography>
          <img src={data.url} alt="gif" width="auto" height="auto" />
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2, maxWidth: 300 }}
          >
            {data.description}
          </Typography>
          <Button
            sx={{ mt: 5 }}
            size="small"
            color="error"
            onClick={handleClick}
          >
            APAGAR
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
