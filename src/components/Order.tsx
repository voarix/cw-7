import React from "react";

interface OrderProps {
  orderName: string;
  orderCount: number;
  onDeleteOrder: React.MouseEventHandler;
}

const Order: React.FC<OrderProps> = ({orderName, orderCount, onDeleteOrder}) => {
  return (
    <div>
      {orderName} {orderCount} <button onClick={onDeleteOrder}>×</button>
    </div>
  );
};

export default Order;