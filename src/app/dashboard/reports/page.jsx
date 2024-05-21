"use client";
import React from "react";
import { DatePicker, Space, Table, Tag } from "antd";
import dayjs from "dayjs";
const columns = [
  {
    title: "Serial",
    dataIndex: "serial",
    key: "serial",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Accounts Head",
    dataIndex: "accountsHead",
    key: "accountsHead",
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
  },

  {
    title: "Debit",
    dataIndex: "debit",
    key: "date",
  },
  {
    title: "Credit",
    dataIndex: "credit",
    key: "credit",
  },
];
const data = [
  {
    serial: "1",
    accountsHead: "John Brown",
    date: "2023",
    debit: 10000,
    credit: 2000,
  },
  {
    serial: "1",
    accountsHead: "John Brown",
    date: "2023",
    debit: 10000,
    credit: 2000,
  },
  {
    serial: "1",
    accountsHead: "John Brown",
    date: "2023",
    debit: 10000,
    credit: 2000,
  },
];
const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY", "DD-MM-YYYY", "DD-MM-YY"];

const Reports = () => {
  return (
    <div>
      <div className="flex justify-between ">
        <p>Daily Report</p>
        <DatePicker
          defaultValue={dayjs("01/01/2023", dateFormatList[0])}
          format={dateFormatList}
        />
      </div>
      <Table columns={columns} dataSource={data} className="mt-5" />
    </div>
  );
};
export default Reports;
