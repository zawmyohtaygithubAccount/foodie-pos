import BackOfficeLayout from "@/components/backOfficeLayout";
import { ImageCard } from "@/components/imageCard/ImageCard";
import { Menus } from "@/types/menuType";
import { Button } from "@mui/material";
import Box from "@mui/material/Box/Box";
import { useState } from "react";
import { CreateMenuPage } from "../../../components/menu/CreateMenuPage";

const Menu = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [menus, setMenus] = useState<Menus[]>([]);
  return (
    <>
      <BackOfficeLayout>
        <Box sx={{ display: "flex", justifyContent: "flex-end", mr: 3 }}>
          <Button onClick={() => setOpen(true)} variant="contained">
            Create Menu
          </Button>
          <CreateMenuPage open={open} setOpen={setOpen} setMenus={setMenus} />
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
