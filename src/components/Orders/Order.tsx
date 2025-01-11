import React from "react";

interface OrderProps {
  orderName: string;
  orderCount: number;
  orderPrice: number;
  onDeleteOrder: React.MouseEventHandler;
}

const Order: React.FC<OrderProps> = ({
  orderName,
  orderCount,
  orderPrice,
  onDeleteOrder,
}) => {
  return (
    <div>
      {orderName} {orderCount} {orderPrice} KGS<button onClick={onDeleteOrder}>×</button>
    </div>
  );
};

export default Order;
