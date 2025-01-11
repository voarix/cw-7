import React from "react";
import Order from "./Order";
import { MenuItemState } from "../../App.tsx";

interface OrdersListProps {
  orders: MenuItemState[];
  onDeleteOrder: (nameOrder: string) => void;
}

const OrdersList: React.FC<OrdersListProps> = ({ orders, onDeleteOrder }) => {
  return (
    <div style={{ width: "35%" }}>
      {orders.length > 0 ? (
        orders.map((item, index) => (
          <Order
            key={index}
            orderName={item.name}
            orderCount={item.count}
            onDeleteOrder={() => onDeleteOrder(item.name)}
          />
        ))
      ) : (
        <p>Orders is empty</p>
      )}
    </div>
  );
};

export default OrdersList;
