import Head from "next/head";
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";
import toast, {Toaster} from "react-hot-toast";

function CustomerDetail({ response }) {

    const dispatch = useDispatch();

    const add = (item) => {
      dispatch({ type: "ADD_TO_FAVORITE", payload: item });
      notify();
    };

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
        <title>Customer Detail of {response.id}</title>
      </Head>
      <div className="container">
        <div className="customer-detail">
          <h3>
            <b>Customer ID:</b> {response?.id}
          </h3>
          <p>
            <b>Customer Company Name:</b> {response?.companyName}
          </p>
          <p>
            <b>Customer Contact Name:</b> {response?.contactName}
          </p>
          <p>
            <b>Customer Contact Title:</b> {response?.contactTitle}
          </p>
          <p>
            <b>Customer Address:</b> {response?.address.country},{" "}
            {response?.address.city}
          </p>
          <p>
            <b>Customer Phone:</b> {response?.address.phone}
          </p>
          <p>
            <b>Customer Postal Code:</b> {response?.address.postalCode}
          </p>
          <div>
            <button onClick={()=>add(response)}>Add to favorites</button>
          </div>
        </div>
        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <button style={{ backgroundColor: "darkgreen" }}>
            <Link href="/customers">
              <a>Go Back</a>
            </Link>
          </button>
        </div>
      </div>
      <Toaster/>
    </>
  );
}

export async function getServerSideProps({ params }) {
  const request = await fetch(
    `https://northwind.vercel.app/api/customers/${params.id}`
  );
  const response = await request.json();

  return {
    props: {
      response,
    },
  };
}

export default CustomerDetail;
