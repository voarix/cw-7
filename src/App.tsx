import "./App.css";
import { useState } from "react";
import MenuItem from "./components/MenuItem.tsx";

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

  return (
    <>
      {menu.map((item, index) => (
        <MenuItem
          key={index}
          menuItemName={item.name}
          menuItemPrice={item.price}
          onAddOrder={() => onAddOrder(index)}
        />
      ))}
    </>
  );
};

export default App;
