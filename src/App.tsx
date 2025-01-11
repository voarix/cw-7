import "./App.css";
import { useState } from "react";
import Order from "./components/Orders/Order.tsx";
import Menu from "./components/Menu/Menu.tsx";

export interface MenuItemState {
  name: string;
  price: number;
  count: number;
}

const initialMenu: MenuItemState[] = [
  { name: "Hamburger", price: 80, count: 0 },
  { name: "Coffee", price: 70, count: 0 },
  { name: "Cheeseburger", price: 90, count: 0 },
  { name: "Tea", price: 50, count: 0 },
  { name: "Fries", price: 45, count: 0 },
  { name: "Cola", price: 40, count: 0 },
];

const App = () => {
  const [menu, setMenu] = useState<MenuItemState[]>(initialMenu);

  const onAddOrder = (indexOrder: number) => {
    setMenu(
      menu.map((item, index) => {
        if (indexOrder === index) {
          return {
            ...item,
            count: item.count + 1,
          };
        }
        return item;
      }),
    );
    console.log(menu);
  };

  const orders = menu.filter((item) => item.count > 0);

  const onDeleteOrder = (nameOrder: string) => {
    setMenu(
      menu.map((item) => {
        if (nameOrder === item.name) {
          return {
            ...item,
            count: item.count - 1,
          };
        }
        return item;
      }),
    );
    console.log(menu);
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between", padding: "20px" }}>
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
        <Menu menu={menu} onAddOrder={onAddOrder}/>
      </div>
    </>
  );
};

export default App;
