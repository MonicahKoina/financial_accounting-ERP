import React, { useState } from "react";
import Card from "antd/es/card/Card";
import { Button, Input } from "antd";
function GoodsReceived() {
  const [supplier, setSupplier] = useState("");
  const [dateReceived, setDateReceived] = useState("");
  const [items, setItems] = useState([]);
  const [currentItem, setCurrentItem] = useState({
    name: "",
    quantity: "",
    category: "",
    price: "",
  });
  function handleAddItem() {
    setItems([...items, currentItem]);
    setCurrentItem({
      name: "",
      quantity: "",
      category: "",
      price: "",
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    const data = {
      supplier,
      dateReceived,
      items,
    };
    console.log(data);
  }
  return (
    <div>
      <Card>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 w-full md:w-1/2 md:mx-auto"
        >
          <div>
            <h3 className="my-4 font-extrabold text-3xl text-amber-600">
              ADD STOCK
            </h3>
            <label htmlFor="supplier" className="font-bold text-amber-800 ">
              Supplier's name
            </label>
            <Input
              type="text"
              id="supplier"
              value={supplier}
              onChange={(e) => setSupplier(e.target.value)}
              placeholder="e.g. Monicah"
            />
            <label htmlFor="date" className="font-bold text-amber-800 ">
              Date suplied{" "}
            </label>
            <Input
              type="date"
              id="date"
              value={dateReceived}
              onChange={(e) => setDateReceived(e.target.value)}
              placeholder="Date you received the goods"
            />
          </div>

          <div>
            <h3 className="my-4 font-extrabold text-3xl text-amber-600">
              Item description
            </h3>
            <div>
              <label htmlFor="itemName" className="font-bold text-amber-800">
                item Name
              </label>
              <Input
                type="text"
                value={currentItem.name}
                onChange={(e) =>
                  setCurrentItem({ ...currentItem, name: e.target.value })
                }
                id="itemName"
                placeholder="e.g. Hanan tissue"
              />
              <label
                htmlFor="itemQuantity"
                className="font-bold  text-amber-800"
              >
                Quantity
              </label>
              <Input
                type="text"
                value={currentItem.quantity}
                onChange={(e) =>
                  setCurrentItem({ ...currentItem, quantity: e.target.value })
                }
                id="itemQuantity"
                placeholder="e.g. 20 rolls"
              />
              <label htmlFor="category" className="font-bold  text-amber-800">
                Category
              </label>
              <Input
                type="text"
                value={currentItem.category}
                onChange={(e) =>
                  setCurrentItem({ ...currentItem, category: e.target.value })
                }
                id="category"
                placeholder="e.g. sugar, maize flour etc"
              />
              <label htmlFor="buyingPrice" className="font-bold text-amber-800">
                Buying price
              </label>
              <Input
                type="number"
                value={currentItem.price}
                onChange={(e) =>
                  setCurrentItem({ ...currentItem, price: e.target.value })
                }
                id="buyingPrice"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center gap-4">
            <Button type="dashed" onClick={handleAddItem}>
              + Add another item
            </Button>

            <Button type="primary">Save goods received</Button>
          </div>
        </form>
      </Card>
    </div>
  );
}

export default GoodsReceived;
