import { Menus } from "@/types/menuType";
import PaidIcon from "@mui/icons-material/Paid";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import Link from "next/link";

interface Props {
  menu: Menus;
}
export const ImageCard = ({ menu }: Props) => {
  return (
    <>
      <Link style={{ textDecoration: "none" }} href={`menu/${String(menu.id)}`}>
        <Card
          sx={{ width: 210, height: 235, bgcolor: "#C8FFE0", mt: 2, mr: 2 }}
        >
          <CardMedia image={menu.img} component="img" />
          <CardContent>
            <Typography
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {menu.name}
            </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mt: 1,
              }}
            >
              <PaidIcon />
              <Typography>{menu.price}</Typography>
            </Box>
          </CardContent>
        </Card>
      </Link>
    </>
  );
};
