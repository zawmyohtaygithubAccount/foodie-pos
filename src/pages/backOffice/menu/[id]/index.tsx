import BackOfficeLayout from "@/components/backOfficeLayout";
import { useRouter } from "next/router";

const MenuUpdate = () => {
  const param = useRouter();
  const menuId = param.query.id;
  return (
    <>
      <BackOfficeLayout>
        <h1>Update to Menu Id: {menuId}</h1>
      </BackOfficeLayout>
    </>
  );
};

export default MenuUpdate;
