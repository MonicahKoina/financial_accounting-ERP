import React, { useEffect, useState } from "react";
import {
  Form,
  Input,
  InputNumber,
  Button,
  Select,
  DatePicker,
  message,
  Card,
} from "antd";
import dayjs from "dayjs";

function SellGoods() {
  const [form] = Form.useForm();
  const [stockItems, setStockItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("stockItems")) || [];
    const inStock = storedItems.filter(
      (stock) => Number(stock.item?.quantity) > 0
    );
    setStockItems(inStock);
  }, []);

  const onFinish = (values) => {
    const sale = {
      ...values,
      date: values.date.format("YYYY-MM-DD"),
      id: Date.now(),
      totalRevenue: values.quantity * values.price,
    };
    const existingSales = JSON.parse(localStorage.getItem("sales")) || [];
    localStorage.setItem("sales", JSON.stringify([...existingSales, sale]));
    const updatedStock = stockItems.map((stock) => {
      if (stock.item.name === values.item) {
        return {
          ...stock,
          item: {
            ...stock.item,
            quantity: Number(stock.item.quantity) - values.quantity,
          },
        };
      }
      return stock;
    });
    localStorage.setItem("stockItems", JSON.stringify(updatedStock));
    setStockItems(updatedStock);
    message.success("Sale recorded and stock updated!");
    form.resetFields();
    setSelectedItem(null);
  };

  return (
    <div className="max-w-2xl mx-auto mt-8">
      <Card title="Sell Goods" bordered={false}>
        <Form layout="vertical" onFinish={onFinish} form={form}>
          <Form.Item
            name="item"
            label="Item"
            rules={[{ required: true, message: "Please select an item" }]}
          >
            <Select
              placeholder="Select an item"
              onChange={(value) => {
                const match = stockItems.find(
                  (stock) => stock.item.name === value
                );
                setSelectedItem(match);
                if (match) {
                  form.setFieldsValue({
                    price: match.item.price,
                  });
                }
              }}
            >
              {stockItems.map((stock) => (
                <Select.Option key={stock.id} value={stock.item.name}>
                  {stock.item.name} ({stock.item.quantity} in stock)
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          {selectedItem && (
            <div className="mb-4 text-gray-600 text-sm">
              <p>
                <strong>Available:</strong> {selectedItem.item.quantity}
              </p>
              <p>
                <strong>Buying Price:</strong> KES {selectedItem.item.price}
              </p>
            </div>
          )}
          <Form.Item
            name="quantity"
            label="Quantity Sold"
            rules={[{ required: true, message: "Enter quantity" }]}
          >
            <InputNumber min={1} className="w-full" />
          </Form.Item>
          <Form.Item
            name="price"
            label="Selling Price (per unit)"
            rules={[{ required: true, message: "Enter selling price" }]}
          >
            <InputNumber min={1} className="w-full" />
          </Form.Item>
          <Form.Item name="customer" label="Customer Name">
            <Input placeholder="e.g. Wanjiku" />
          </Form.Item>
          <Form.Item
            name="paymentMethod"
            label="Payment Method"
            rules={[{ required: true, message: "Select payment method" }]}
          >
            <Select placeholder="Choose payment method">
              <Select.Option value="Cash">Cash</Select.Option>
              <Select.Option value="Mpesa">Mpesa</Select.Option>
              <Select.Option value="Credit">Credit</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item name="date" label="Date of Sale" initialValue={dayjs()}>
            <DatePicker className="w-full" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Record Sale
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}

export default SellGoods;
