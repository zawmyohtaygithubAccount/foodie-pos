import BackOfficeLayout from "@/components/backOfficeLayout";
import { useRouter } from "next/router";

const MenuCateUpdate = () => {
  const param = useRouter();
  const menuCateId = param.query.id;
  return (
    <>
      <BackOfficeLayout>
        <h1>Update to Menu Category id: {menuCateId}</h1>
      </BackOfficeLayout>
    </>
  );
};

export default MenuCateUpdate;
