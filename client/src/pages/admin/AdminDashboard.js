import React from "react";
import Layout from "../../components/Layouts/Layout";
import AdminMenu from "../../components/Layouts/AdminMenu";
import { useAuth } from "../../context/Auth";
import Header from "../../components/Layouts/Header";
import Footer from "../../components/Layouts/Footer";

const Dashboard = () => {
  const { auth } = useAuth();
  return (
    <>
      <Layout title="EzCart - Dashboard" />
      <Header />
      <div
        className="container-fluid m-3 p-3"
        style={{ minHeight: "100vh", minWidth: "200px" }}
      >
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9 pt-5" style={{ fontSize: "25px" }}>
            <div className="card w-75 p-3">
              <h1>Admin Name : {auth?.user?.name}</h1>
              <h1>Admin Email : {auth?.user?.email}</h1>
              <h1>Admin Contact : {auth?.user?.phone}</h1>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
