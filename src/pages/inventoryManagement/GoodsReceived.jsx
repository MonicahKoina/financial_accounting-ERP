import React from "react";

function GoodsReceived() {
  return (
    <div>
      <form>
        <label htmlFor="supplier">Supplier's name</label>
        <input type="text" id="supplier" placeholder="e.g. Monicah" />
        <label htmlFor="date">Date suplied </label>
        <input
          type="date"
          id="date"
          placeholder="Date you received the goods"
        />
        <div>
          <h3>Item description</h3>
          <div>
            <label htmlFor="itemName">item Name</label>
            <input type="text" id="itemName" placeholder="e.g. Hanan tissue" />
            <label htmlFor="itemQuantity">Quantity</label>
            <input type="text" id="itemQuantity" placeholder="e.g. 20 rolls" />
            <label htmlFor="category">Category</label>
            <input
              type="text"
              id="category"
              placeholder="e.g. sugar, maize flour etc"
            />
            <label htmlFor="buyingPrice">Buying price</label>
            <input type="number" id="buyingPrice" />
          </div>
        </div>
        <button>+ Add another item</button>

        <button>Save goods received</button>
      </form>
    </div>
  );
}

export default GoodsReceived;
