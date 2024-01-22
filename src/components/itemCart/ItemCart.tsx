import { Paper, Typography } from "@mui/material";
import Link from "next/link";
import { ReactNode } from "react";

interface Props {
  icon: ReactNode;
  title: string;
  href?: string;
  subtitle?: string;
}
const ItemCart = ({ icon, title, href, subtitle }: Props) => {
  if (href) {
    return (
      <>
        <Link style={{ textDecoration: "none" }} href={`menuCate/${href}`}>
          <Paper
            elevation={2}
            sx={{
              width: 170,
              height: 170,
              p: 2,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              m: 2,
            }}
          >
            {icon}
            <Typography sx={{ color: "#4c4c6d", fontWeight: 700 }}>
              {title}
            </Typography>
            {subtitle && (
              <Typography sx={{ color: "#4c4c6d", fontsize: 14 }}>
                {subtitle}
              </Typography>
            )}
          </Paper>
        </Link>
      </>
    );
  }

  return (
    <>
      <Link style={{ textDecoration: "none" }} href={`menuCate/${href}`}>
        <Paper
          elevation={2}
          sx={{
            width: 170,
            height: 170,
            p: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            m: 2,
          }}
        >
          {icon}
          <Typography sx={{ color: "#4c4c6d", fontWeight: 700 }}>
            {title}
          </Typography>
          {subtitle && (
            <Typography sx={{ color: "#4c4c6d", fontsize: 14 }}>
              {subtitle}
            </Typography>
          )}
        </Paper>
      </Link>
    </>
  );
};

export default ItemCart;
