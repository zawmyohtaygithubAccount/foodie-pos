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
export const CreateMenuPage = ({ open, setOpen, setMenus }: Props) => {
  const [counter, setCounter] = useState<Counter>({
    name: "",
    price: 0,
    img: "",
  });
  const createMenu = async () => {
    const response = await fetch(`${config.apiBaseUrl}/backOffice/menu`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(counter),
    });
    const dataFromServer = await response.json();
    setMenus(dataFromServer);
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
            onChange={(evt) =>
              setCounter({ ...counter, name: evt.target.value })
            }
            sx={{ width: 300, mb: 3 }}
            placeholder="Name"
          />
          <TextField
            onChange={(evt) =>
              setCounter({ ...counter, price: Number(evt.target.value) })
            }
            sx={{ width: 300, mb: 3 }}
            placeholder="Price"
          />
          <TextField
            onChange={(evt) =>
              setCounter({ ...counter, img: evt.target.value })
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
