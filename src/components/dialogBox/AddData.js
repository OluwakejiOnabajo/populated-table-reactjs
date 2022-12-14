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

const DialogBox = (props) => {
  const { open, handleClose, handleSave, dessert, setDessert, calories, setCalories, fat, setFat, carbs, setCarbs, protein, setProtein } = props;
  
  return (
   
    <div>
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Submit Your Dessert here for Approval</DialogTitle>
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
          <InputLabel htmlFor="dessert">Name of Dessert</InputLabel>
          <Input
            id="dessert"
            value={dessert}
            type="text"
            onChange={(e) => setDessert(e.target.value)}
          />
        </FormControl>

        
        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
          <InputLabel htmlFor="calories">Calories</InputLabel>
          <Input
            id="calories"
            value={calories}
            type="number"
            onChange={(e) => setCalories(e.target.value)}
          />
        </FormControl>

        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
          <InputLabel htmlFor="fat">Fat (g)</InputLabel>
          <Input
            id="fat"
            value={fat}
            type="number"
            onChange={(e) => setFat(e.target.value)}
          />
        </FormControl>

        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
          <InputLabel htmlFor="carbs">Carbs (g)</InputLabel>
          <Input
            id="carbs"
            value={carbs}
            type="number"
            onChange={(e) => setCarbs(e.target.value)}
          />
        </FormControl>

        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
          <InputLabel htmlFor="protein">Protein (g)</InputLabel>
          <Input
            id="protein"
            value={protein}
            type="number"
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

export default DialogBox