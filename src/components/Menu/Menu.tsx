import React from "react";
import MenuItem from "../Menu/MenuItem.tsx";
import { MenuItemState } from "../../types.ts";


interface MenuProps {
  menu: MenuItemState[];
  onAddOrder: (orderIndex: number) => void;
}

const Menu: React.FC<MenuProps> = ({menu, onAddOrder}) => {
  return (
    <div>
      <h2 className="text-center">Add Items:</h2>
      <div className="row">
        {menu.map((item, index) => (
          <div className="col-md-6 col-lg-4 mb-4" key={index}>
            <MenuItem
              menuItemName={item.name}
              menuItemPrice={item.price}
              onAddOrder={() => onAddOrder(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
