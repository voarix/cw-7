import "./App.css";
import { useState } from "react";
import MenuItem from "./components/MenuItem.tsx";
import Order from "./components/Order.tsx";

interface MenuItemState {
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
      <div>
        <div>
          {
            orders.length > 0 ? (orders.map((item, index) => (
              <Order key={index} orderName={item.name} orderCount={item.count} onDeleteOrder={() => onDeleteOrder(item.name)}/>
            ))) : (<p>Orders is empty</p>)
          }
        </div>
        <div>
          {menu.map((item, index) => (
            <MenuItem
              key={index}
              menuItemName={item.name}
              menuItemPrice={item.price}
              onAddOrder={() => onAddOrder(index)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
