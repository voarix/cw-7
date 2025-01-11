import React from "react";

interface MenuItemProps {
  onAddOrder: React.MouseEventHandler;
  menuItemName: string;
  menuItemPrice: number;
}

const MenuItem: React.FC<MenuItemProps> = ({
  onAddOrder,
  menuItemName,
  menuItemPrice,
}) => {
  return (
    <button onClick={onAddOrder}>
      <div>
        <p>{menuItemName}</p>
        price: {menuItemPrice}
      </div>
    </button>
  );
};

export default MenuItem;
