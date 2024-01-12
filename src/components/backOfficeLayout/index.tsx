import CategoryIcon from "@mui/icons-material/Category";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const BackOfficeLayout = ({ children }: Props) => {
  return (
    <>
      <Box
        sx={{
          bgcolor: "#614BC3",
          height: 75,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: 32,
        }}
      >
        Foodie POS
      </Box>

      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            width: 290,
            height: "100vh",
            bgcolor: "#33BBC5",
            borderTopRightRadius: 9,
          }}
        >
          <List sx={{ mt: 2 }}>
            <Link style={{ textDecoration: "none" }} href={"/backOffice/menu"}>
              <ListItemButton>
                <ListItemIcon>
                  <RestaurantMenuIcon sx={{ fontSize: 32, color: "#C8FFE0" }} />
                </ListItemIcon>
                <ListItemText>
                  <Typography sx={{ fontSize: 20, color: "#C8FFE0" }}>
                    Menu
                  </Typography>
                </ListItemText>
              </ListItemButton>
            </Link>

            <Link
              style={{ textDecoration: "none" }}
              href={"/backOffice/menuCate"}
            >
              <ListItemButton>
                <ListItemIcon>
                  <CategoryIcon sx={{ fontSize: 32, color: "#C8FFE0" }} />
                </ListItemIcon>
                <ListItemText>
                  <Typography sx={{ fontSize: 20, color: "#C8FFE0" }}>
                    Menu Category
                  </Typography>
                </ListItemText>
              </ListItemButton>
            </Link>
          </List>
        </Box>
        <Box sx={{ mt: 3, ml: 3, width: "100%" }}>{children}</Box>
      </Box>
    </>
  );
};

export default BackOfficeLayout;
