import React, { useState } from "react";
import Card from "antd/es/card/Card";
import { Button, Input, Select, message } from "antd";

const { Option } = Select;

function AddStock() {
  const [supplier, setSupplier] = useState("");
  const [dateReceived, setDateReceived] = useState("");
  const [paymentType, setPaymentType] = useState("");
  const [currentItem, setCurrentItem] = useState({
    name: "",
    quantity: "",
    category: "",
    price: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    if (
      !supplier ||
      !dateReceived ||
      !paymentType ||
      !currentItem.name ||
      !currentItem.quantity ||
      !currentItem.category ||
      !currentItem.price
    ) {
      message.error("Please fill in all fields");
      return;
    }

    const newStockEntry = {
      id: Date.now(),
      supplier,
      dateReceived,
      paymentType,
      item: { ...currentItem },
    };

    const existingStock = JSON.parse(localStorage.getItem("stockItems")) || [];
    const updatedStock = [...existingStock, newStockEntry];

    localStorage.setItem("stockItems", JSON.stringify(updatedStock));
    message.success("Stock saved successfully!");
    setSupplier("");
    setDateReceived("");
    setPaymentType("");
    setCurrentItem({
      name: "",
      quantity: "",
      category: "",
      price: "",
    });

    console.log("Saved Stock Entry:", newStockEntry);
  }

  return (
    <div className="flex justify-center mt-4">
      <Card className="w-full md:w-1/2 md:mx-10">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
          <div>
            <h3 className="my-4 font-extrabold text-3xl">ADD STOCK</h3>

            <label htmlFor="supplier" className="font-bold">
              Supplier's name
            </label>
            <Input
              type="text"
              id="supplier"
              value={supplier}
              onChange={(e) => setSupplier(e.target.value)}
              placeholder="e.g. Monicah"
            />

            <label htmlFor="date" className="font-bold">
              Date supplied
            </label>
            <Input
              type="date"
              id="date"
              value={dateReceived}
              onChange={(e) => setDateReceived(e.target.value)}
              placeholder="Date you received the goods"
            />

            <label htmlFor="paymentType" className="font-bold">
              Payment Type
            </label>
            <Select
              id="paymentType"
              value={paymentType}
              onChange={setPaymentType}
              placeholder="Select payment type"
            >
              <Option value="Cash">Cash</Option>
              <Option value="Credit">Credit</Option>
            </Select>
          </div>

          <div>
            <h3 className="my-4 font-extrabold text-3xl">Item description</h3>

            <label htmlFor="itemName" className="font-bold">
              Item Name
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

            <label htmlFor="itemQuantity" className="font-bold">
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

            <label htmlFor="category" className="font-bold">
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

            <label htmlFor="buyingPrice" className="font-bold">
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

          <div className="flex flex-col justify-center gap-4">
            <Button type="primary" htmlType="submit">
              Save Good
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}

export default AddStock;
