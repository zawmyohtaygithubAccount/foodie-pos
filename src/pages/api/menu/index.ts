import type { NextApiRequest, NextApiResponse } from "next";

interface Menu {
  id: number;
  name: string;
  price: number;
  img: string;
  isArchive: false;
}
const menu: Menu[] = [];
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const isValid = req.body.name;
    if (!isValid) return res.status(400).send("Bad Request");
    const menuId = menu.length === 0 ? 1 : menu[menu.length - 1].id + 1;
    const newMenu = { ...req.body, id: menuId, isArchive: false };
    menu.push(newMenu);
    return res.send(menu);
  } else if (req.method === "GET") {
    res.send(menu);
  }
  res.status(405).send("Invalid method");
}
