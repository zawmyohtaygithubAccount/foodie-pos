import type { NextApiRequest, NextApiResponse } from "next";

interface MenuCate {
  id: number;
  name: string;
  isArchive: boolean;
  isAvaiable: boolean;
}
const menuCate: MenuCate[] = [];
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const isValid = req.body.name;
    if (!isValid) return res.status(400).send("Bat request");
    const menuId =
      menuCate.length === 0 ? 1 : menuCate[menuCate.length - 1].id + 1;
    const newMenu = { ...req.body, id: menuId, isArchive: false };
    menuCate.push(newMenu);
    return res.send(menuCate);
  } else if (req.method === "GET") {
    return res.send(menuCate);
  }
  res.status(404).send("Wrong Method");
}
