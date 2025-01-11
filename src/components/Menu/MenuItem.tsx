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
    <button
      className="btn btn-outline-primary w-100 text-start p-3 mb-2"
      onClick={onAddOrder}
    >
      <div>
        <h5 className="mb-1">{menuItemName}</h5>
        <p className="mb-0">Price: {menuItemPrice} KGS</p>
      </div>
    </button>
  );
};

export default MenuItem;
