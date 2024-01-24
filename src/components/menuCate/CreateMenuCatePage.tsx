import config from "@/config";
import { useAppDispatch } from "@/store/hook";
import { setMenuCategories } from "@/store/slices/menuCateSlice";
import { Counter } from "@/types/menuCateTypes";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  Switch,
  TextField,
} from "@mui/material";
import { useState } from "react";

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const defaultNewMenuCate = {
  name: "",
  isAvaiable: true,
};
export const CreateMenuCatePage = ({ open, setOpen }: Props) => {
  const [newMenuCate, setNewMenuCate] = useState<Counter>(defaultNewMenuCate);
  const dispatch = useAppDispatch();

  const createMenu = async () => {
    const response = await fetch(`${config.apiBaseUrl}/menuCate`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newMenuCate),
    });
    const dataFromServer = await response.json();
    dispatch(setMenuCategories(dataFromServer));
    setOpen(false);
    setNewMenuCate(defaultNewMenuCate);
  };
  console.log(newMenuCate);
  return (
    <>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle
          sx={{ display: "flex", justifyContent: "center", fontSize: 25 }}
        >
          Create
        </DialogTitle>
        <DialogContent
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <TextField
            defaultValue={newMenuCate.name}
            onChange={(evt) =>
              setNewMenuCate({ ...newMenuCate, name: evt.target.value })
            }
            sx={{ width: 300, mb: 3 }}
            placeholder="Name"
          />

          <FormControlLabel
            control={
              <Switch
                defaultChecked={newMenuCate.isAvaiable}
                onChange={(evt, value) =>
                  setNewMenuCate({ ...newMenuCate, isAvaiable: value })
                }
              />
            }
            label="Avaiable"
          />
          <Button
            sx={{ width: "fit-content", margin: "0 auto" }}
            variant="contained"
            onClick={createMenu}
          >
            Create
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
};
