import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import { useState } from 'react';

const ModalBox = (props) => {
    const {open, handleClose, handleSave } = props;
    const [dessert, setDessert] = useState('dd');
    const [calories, setCalories] = useState('d');
    const [fat, setFat] = useState('dd');
    const [carbs, setCarbs] = useState('ds');
    const [protein, setProtein] = useState('dd');

    console.log(dessert);
  
  return (
   
    <div>
    {/* <Button variant="outlined" onClick={handleClickOpen}>
      Open form dialog
    </Button> */}
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Subscribe</DialogTitle>
      <DialogContent  component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
       noValidate autoComplete="off">
        <DialogContentText>
          To approve your Dessert, please enter your the nutrient content. We
          will need updates occasionally.
        </DialogContentText>
      <div>
        
      <FormControl fullWidth sx={{ m: 1 }} variant="standard">
          <InputLabel htmlFor="dessert">Dessert</InputLabel>
          <Input
            id="dessert"
            value={dessert}
            onChange={(e) => setDessert(e.target.value)}
          />
        </FormControl>

        
        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
          <InputLabel htmlFor="calories">Calories</InputLabel>
          <Input
            id="calories"
            value={calories}
            onChange={(e) => setCalories(e.target.value)}
          />
        </FormControl>

        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
          <InputLabel htmlFor="fat">Fat</InputLabel>
          <Input
            id="fat"
            value={fat}
            onChange={(e) => setFat(e.target.value)}
          />
        </FormControl>

        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
          <InputLabel htmlFor="carbs">Carbs</InputLabel>
          <Input
            id="carbs"
            value={carbs}
            onChange={(e) => setCarbs(e.target.value)}
          />
        </FormControl>

        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
          <InputLabel htmlFor="protein">Protein</InputLabel>
          <Input
            id="protein"
            value={protein}
            onChange={(e) => setProtein(e.target.value)}
          />
        </FormControl>
       
      </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSave}>Save</Button>
      </DialogActions>
    </Dialog>
  </div>
  )
}

export default ModalBox