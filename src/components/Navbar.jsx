import { Button, Drawer, Space } from "antd";
import { useState } from "react";
import { TfiAlignJustify } from "react-icons/tfi";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const showDrawer = () => {
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };
  return (
    <>
      <header className="bg-white p-3 flex items-center justify-between fixed top-0 left-0 right-0 z-[99999] ">
        <div>
          <h1 className="font-bold">
            <span className="text-3xl">B</span>atch S.E
          </h1>
        </div>
        <div>
          <Space>
            <Button onClick={showDrawer}>
              <TfiAlignJustify />
            </Button>
          </Space>
          <Drawer open={isDrawerOpen} onClose={closeDrawer} className="mt-14">
            <Button className="m-2">Desember</Button>
            <Button className="m-2">January</Button>
            <Button className="m-2">February</Button>
            <Button className="m-2">Maret</Button>
            <Button className="m-2">April</Button>
            <Button className="m-2">Mei</Button>
            <Button class Name="m-2">
              Cretivox Camping Day
            </Button>
          </Drawer>
        </div>
      </header>
    </>
  );
};

export default Navbar;
