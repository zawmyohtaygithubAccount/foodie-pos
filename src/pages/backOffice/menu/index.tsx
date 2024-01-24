import BackOfficeLayout from "@/components/backOfficeLayout";
import { ImageCard } from "@/components/imageCard/ImageCard";
import { useAppSelector } from "@/store/hook";
import { Button } from "@mui/material";
import Box from "@mui/material/Box/Box";
import { useState } from "react";
import { CreateMenuPage } from "../../../components/menu/CreateMenuPage";

const Menu = () => {
  const [open, setOpen] = useState<boolean>(false);
  const menus = useAppSelector((store) => store.menu.item);
  return (
    <>
      <BackOfficeLayout>
        <Box sx={{ display: "flex", justifyContent: "flex-end", mr: 3 }}>
          <Button onClick={() => setOpen(true)} variant="contained">
            Create Menu
          </Button>
          <CreateMenuPage open={open} setOpen={setOpen} />
        </Box>
        <Box sx={{ mt: 3, ml: 1, display: "flex", flexWrap: "wrap" }}>
          {menus.map((menu) => (
            <Box key={menu.id}>
              <ImageCard menu={menu} />
            </Box>
          ))}
        </Box>
      </BackOfficeLayout>
    </>
  );
};

export default Menu;
