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
    <div className="card mb-3 p-1">
      <div className="card-body d-flex justify-content-between align-items-center">
        <div>
          <h5 className="card-title">{orderName}</h5>
          <p className="card-text mb-0">
            Count: {orderCount} <br />
            Price: {orderPrice} KGS
          </p>
        </div>
        <button className="btn btn-danger btn-sm" onClick={onDeleteOrder}>
          Удалить
        </button>
      </div>
    </div>
  );
};

export default Order;
