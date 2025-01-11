import React from "react";
import Order from "./Order";
import { MenuItemState } from "../../App.tsx";

interface OrdersListProps {
  orders: MenuItemState[];
  onDeleteOrder: (nameOrder: string) => void;
}

const OrdersList: React.FC<OrdersListProps> = ({ orders, onDeleteOrder }) => {
  const totalPrice = orders.reduce((acc, cur) => acc + cur.count * cur.price, 0);

  return (
    <div style={{ width: "35%" }}>
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
        <p>Orders is empty</p>
      )}

      <h3>Total price: {totalPrice}</h3>
    </div>
  );
};

export default OrdersList;
