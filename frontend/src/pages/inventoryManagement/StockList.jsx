import React, { useEffect, useState } from "react";
import { Card, Tag, Empty } from "antd";

function StockList() {
  const [stockItems, setStockItems] = useState([]);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("stockItems")) || [];
    setStockItems(storedItems);
  }, []);

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {stockItems.length === 0 ? (
        <div className="col-span-full flex justify-center mt-20">
          <Empty description="No Stock Items Found" />
        </div>
      ) : (
        stockItems.map((item) => (
          <Card
            key={item.id}
            title={item.name || item.item?.name}
            className="shadow-md rounded-2xl"
            extra={
              <Tag color={item.paymentType === "Credit" ? "red" : "green"}>
                {item.paymentType}
              </Tag>
            }
          >
            <p>
              <strong>Supplier:</strong> {item.supplier}
            </p>
            <p>
              <strong>Category:</strong> {item.category || item.item?.category}
            </p>
            <p>
              <strong>Quantity:</strong> {item.quantity || item.item?.quantity}
            </p>
            <p>
              <strong>Price:</strong> KES {item.price || item.item?.price}
            </p>
            <p>
              <strong>Date Received:</strong> {item.dateReceived}
            </p>
          </Card>
        ))
      )}
    </div>
  );
}

export default StockList;
