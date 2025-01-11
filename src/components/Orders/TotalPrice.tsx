import React from "react";
import { MenuItemState } from "../../types.ts";

interface TotalPriceProps {
  orders: MenuItemState[];
}

const TotalPrice: React.FC<TotalPriceProps> = ({orders}) => {
  const totalPrice = orders.reduce((acc, cur) => acc + cur.count * cur.price, 0);

  return (
    totalPrice ? <h3>Total price: {totalPrice} KGS</h3> : null
  );
};

export default TotalPrice;