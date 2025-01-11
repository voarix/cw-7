import React from "react";
import Order from "./Order";
import TotalPrice from "./TotalPrice.tsx";
import { MenuItemState } from "../../types.ts";

interface OrdersListProps {
  orders: MenuItemState[];
  onDeleteOrder: (nameOrder: string) => void;
}

const OrdersList: React.FC<OrdersListProps> = ({ orders, onDeleteOrder }) => {
  return (
    <div className="card p-3" style={{ maxWidth: "500px", margin: "0 auto" }}>
      <h4 className="text-center mb-3">Order Details</h4>
      {orders.length > 0 ? (
        orders.map((item, index) => (
          <Order
            key={index}
            orderName={item.name}
            orderCount={item.count}
            orderPrice={item.count * item.price}
            onDeleteOrder={() => onDeleteOrder(item.name)}
          />
        ))
      ) : (
        <p className="text-center text-muted">
          Orders is empty! <br /> Please add some items!
        </p>
      )}

      <TotalPrice orders={orders} />
    </div>
  );
};

export default OrdersList;
