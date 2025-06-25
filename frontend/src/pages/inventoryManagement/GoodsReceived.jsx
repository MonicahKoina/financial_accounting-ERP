import React, { useState } from "react";

function GoodsReceived() {
  const [supplier, setSupplier] = useState("");
  const [dateReceived, setDateReceived] = useState("");
  const [item, setItem] = useState({
    name: "",
    quantity: "",
    category: "",
    buyingPrice: "",
  });
  return (
    <div>
      <form>
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
              value={item.name}
              onChange={(e) => setItem({ ...item, name: e.target.value })}
              id="itemName"
              placeholder="e.g. Hanan tissue"
            />
            <label htmlFor="itemQuantity">Quantity</label>
            <input
              type="text"
              value={item.quantity}
              onChange={(e) => setItem({ ...item, quantity: e.target.value })}
              id="itemQuantity"
              placeholder="e.g. 20 rolls"
            />
            <label htmlFor="category">Category</label>
            <input
              type="text"
              value={item.category}
              onChange={(e) => setItem({ ...item, category: e.target.value })}
              id="category"
              placeholder="e.g. sugar, maize flour etc"
            />
            <label htmlFor="buyingPrice">Buying price</label>
            <input
              type="number"
              value={item.price}
              onChange={(e) => setItem({ ...item, price: e.target.value })}
              id="buyingPrice"
            />
          </div>
        </div>
        <button>+ Add another item</button>

        <button>Save goods received</button>
      </form>
    </div>
  );
}

export default GoodsReceived;
