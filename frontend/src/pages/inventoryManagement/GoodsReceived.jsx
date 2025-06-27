import React, { useState } from "react";

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
      <form onSubmit={handleSubmit}>
        <label htmlFor="supplier">Supplier's name</label>
        <input
          type="text"
          id="supplier"
          value={supplier}
          onChange={(e) => setSupplier(e.target.value)}
          placeholder="e.g. Monicah"
        />
        <label htmlFor="date">Date suplied </label>
        <input
          type="date"
          id="date"
          value={dateReceived}
          onChange={(e) => setDateReceived(e.target.value)}
          placeholder="Date you received the goods"
        />
        <div>
          <h3>Item description</h3>
          <div>
            <label htmlFor="itemName">item Name</label>
            <input
              type="text"
              value={currentItem.name}
              onChange={(e) =>
                setCurrentItem({ ...currentItem, name: e.target.value })
              }
              id="itemName"
              placeholder="e.g. Hanan tissue"
            />
            <label htmlFor="itemQuantity">Quantity</label>
            <input
              type="text"
              value={currentItem.quantity}
              onChange={(e) =>
                setCurrentItem({ ...currentItem, quantity: e.target.value })
              }
              id="itemQuantity"
              placeholder="e.g. 20 rolls"
            />
            <label htmlFor="category">Category</label>
            <input
              type="text"
              value={currentItem.category}
              onChange={(e) =>
                setCurrentItem({ ...currentItem, category: e.target.value })
              }
              id="category"
              placeholder="e.g. sugar, maize flour etc"
            />
            <label htmlFor="buyingPrice">Buying price</label>
            <input
              type="number"
              value={currentItem.price}
              onChange={(e) =>
                setCurrentItem({ ...currentItem, price: e.target.value })
              }
              id="buyingPrice"
            />
          </div>
        </div>
        <button type="button" onClick={handleAddItem}>
          + Add another item
        </button>

        <button type="submit">Save goods received</button>
      </form>
    </div>
  );
}

export default GoodsReceived;
