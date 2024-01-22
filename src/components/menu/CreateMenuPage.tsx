import config from "@/config";
import { Counter, Menus } from "@/types/menuType";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useState } from "react";

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
  setMenus: (menus: Menus[]) => void;
}

const defaultNewMenu = {
  name: "",
  price: 0,
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTndGXBpnkR8gS1I0Mf4Z5OLZygg5qwRIS6rA&usqp=CAU",
};
export const CreateMenuPage = ({ open, setOpen, setMenus }: Props) => {
  const [newMenu, setNewMenu] = useState<Counter>(defaultNewMenu);

  const createMenu = async () => {
    const response = await fetch(`${config.apiBaseUrl}/menu`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newMenu),
    });
    const dataFromServer = await response.json();
    setMenus(dataFromServer);
    setOpen(false);
    setNewMenu(defaultNewMenu);
  };
  return (
    <>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle
          sx={{ display: "flex", justifyContent: "center", fontSize: 25 }}
        >
          Create Menu
        </DialogTitle>
        <DialogContent
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <TextField
            defaultValue={newMenu.name}
            onChange={(evt) =>
              setNewMenu({ ...newMenu, name: evt.target.value })
            }
            sx={{ width: 300, mb: 3 }}
            placeholder="Name"
          />
          <TextField
            defaultValue={newMenu.price}
            onChange={(evt) =>
              setNewMenu({ ...newMenu, price: Number(evt.target.value) })
            }
            sx={{ width: 300, mb: 3 }}
            placeholder="Price"
          />
          <TextField
            defaultValue={newMenu.img}
            onChange={(evt) =>
              setNewMenu({ ...newMenu, img: evt.target.value })
            }
            sx={{ width: 300, mb: 3 }}
            placeholder="Image Address"
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
