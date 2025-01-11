import "./App.css";
import { useState } from "react";
import Menu from "./components/Menu/Menu.tsx";
import OrdersList from "./components/Orders/OrdersList.tsx";
import { MenuItemState } from "./types.ts";

const initialMenu: MenuItemState[] = [
  {name: "Hamburger", price: 80, count: 0},
  {name: "Coffee", price: 70, count: 0},
  {name: "Cheeseburger", price: 90, count: 0},
  {name: "Tea", price: 50, count: 0},
  {name: "Fries", price: 45, count: 0},
  {name: "Cola", price: 40, count: 0},
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
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <OrdersList orders={orders} onDeleteOrder={onDeleteOrder}/>
          </div>
          <div className="col-md-8">
            <Menu menu={menu} onAddOrder={onAddOrder}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
