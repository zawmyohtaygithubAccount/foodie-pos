import BackOfficeLayout from "@/components/backOfficeLayout";
import ItemCart from "@/components/itemCart/ItemCart";
import { CreateMenuCatePage } from "@/components/menuCate/CreateMenuCatePage";
import { Scounter } from "@/types/menuCateTypes";
import CategoryIcon from "@mui/icons-material/Category";
import { Box, Button } from "@mui/material";
import { useState } from "react";

const MenuCatePage = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [menuCate, setMenuCate] = useState<Scounter[]>([]);
  return (
    <>
      <BackOfficeLayout>
        <Box sx={{ display: "flex", justifyContent: "flex-end", mr: 3 }}>
          <Button onClick={() => setOpen(true)} variant="contained">
            Create Menu Category
          </Button>
          <CreateMenuCatePage
            open={open}
            setOpen={setOpen}
            setMenuCate={setMenuCate}
          />
        </Box>
        <Box sx={{ mt: 3, ml: 1, display: "flex", flexWrap: "wrap" }}>
          {menuCate.map((menuCate) => (
            <Box key={menuCate.id}>
              <ItemCart
                icon={<CategoryIcon />}
                title={menuCate.name}
                href={String(menuCate.id)}
              />
            </Box>
          ))}
        </Box>
      </BackOfficeLayout>
    </>
  );
};

export default MenuCatePage;
