import * as React from 'react';
import Service from '../../services/Service';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';

import './styles.scss';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function AddGif({ data }) {
  const [open, setOpen] = React.useState(false);
  const [url, setUrl] = React.useState('');
  const [description, setDescription] = React.useState('');
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const id = data.id;
  const body = { url: url, description: description };

  const addGif = () => {
    Service.addGif(id, body)
      .then((response) => {
        handleClose();
        return response;
      })
      .then(() => {
        window.location.reload(false);
      })
      .catch((error) => {
        window.alert(`${error} Erro ao adicionar gif`);
      });
  };

  return (
    <div>
      <Button
        onClick={handleOpen}
        size={'small'}
        variant="outlined"
        startIcon={<AddIcon />}
        color="success"
        sx={{ ml: 2, mb: 2 }}
      >
        Adicionar Gif
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Adicione um Gif e sua descrição
          </Typography>

          <TextField
            id="url-gif"
            label="Url gif"
            variant="standard"
            fullWidth
            onChange={(e) => setUrl(e.target.value)}
          />
          <TextField
            fullWidth
            id="description-gif"
            label="Descrição"
            variant="standard"
            multiline
            rows={5}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Button
            onClick={addGif}
            size={'small'}
            variant="outlined"
            startIcon={<AddIcon />}
            color="success"
            sx={{ mt: 3 }}
          >
            Adicionar Gif
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
