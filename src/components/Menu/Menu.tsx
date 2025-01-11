import React from "react";
import MenuItem from "../Menu/MenuItem.tsx";
import { MenuItemState } from "../../App.tsx";

interface MenuProps {
  menu: MenuItemState[];
  onAddOrder: (orderIndex: number) => void;
}

const Orders: React.FC<MenuProps> = ({ menu, onAddOrder }) => {
  return (
    <div style={{ width: "60%" }}>
      {menu.map((item, index) => (
        <MenuItem
          key={index}
          menuItemName={item.name}
          menuItemPrice={item.price}
          onAddOrder={() => onAddOrder(index)}
        />
      ))}
    </div>
  );
};

export default Orders;
