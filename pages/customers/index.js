import { Table } from "antd";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";
import toast, {Toaster} from "react-hot-toast";


function Customers({ response }) {
  //REDUX OPERATIONS
  const dispatch = useDispatch();

  const add = (item) => {
    dispatch({ type: "ADD_TO_FAVORITE", payload: item });
    notify();
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Company Name",
      dataIndex: "companyName",
      sorter: (a, b) => a.companyName > b.companyName,
      key: "companyName",
    },
    {
      title: "Contact Name",
      dataIndex: "contactName",
      key: "contactName",
    },
    {
      title: "Address",
      dataIndex: ["address", "street"],
      key: "address",
    },
    {
      title: "Detail",
      dataIndex: "id",
      key: "id",
      render: (text) => (
        <>
          <Link href={`/customers/${text}`}>
            <a>
              <button style={{ backgroundColor: "lightgreen" }}>Detail</button>
            </a>
          </Link>
        </>
      ),
    },
    {
      title: "Add to favourite",
      dataIndex: "id",
      key: "id",
      render: (text) => (
        <>
          <button onClick={()=>add((response.find(x=>x.id===text)))}>Favourite</button>
        </>
      ),
    },
  ];

  const notify = () => {
    toast.success('Customer added to favorites successfully!',{
        duration: 2000,
        position: "bottom-right",
        theme: {
            primary: 'green',
            secondary: 'black',
        }
    });
};
  return (
    <>
      <Head>
        <title>Customers</title>
      </Head>
      <div className="container">
        <Table dataSource={response} columns={columns} rowKey={response=>response.id}/>
      </div>
      <Toaster/>
    </>
  );
}

export async function getStaticProps() {
  const request = await fetch("https://northwind.vercel.app/api/customers");
  const response = await request.json();

  return {
    props: {
      response,
    },
  };
}

export default Customers;
