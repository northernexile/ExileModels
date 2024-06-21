
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material';
import {create} from 'zustand'


const useConfirmDialogStore = create((set) => ({
    message: '',
    onSubmit: undefined,
    close: () => set({ onSubmit: undefined }),
}));


const Confirm = () => {
    const { message, onSubmit, close }:any = useConfirmDialogStore();

    return (
        <Dialog
            open={Boolean(onSubmit)}
            onClose={close}
            maxWidth="sm"
            fullWidth
        >
            <DialogTitle>Confirm delete</DialogTitle>
            <DialogContent>
                <Typography>{message}</Typography>
            </DialogContent>
            <DialogActions>
            <Button color="primary" variant="contained" onClick={close}>
          Cancel
        </Button>
        <Button
          color="secondary"
          variant="contained"
          onClick={() => {
            if (onSubmit) {
              onSubmit();
            }
            close();
          }}
        >
          Confirm
        </Button>
            </DialogActions>
        </Dialog>
    )
}

export default Confirm

export const confirmDialog = (message:any, onSubmit:any) => {
    useConfirmDialogStore.setState({
      message,
      onSubmit,
    });
};