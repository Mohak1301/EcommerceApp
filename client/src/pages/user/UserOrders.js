import React from 'react'
import UserMenu from "../../components/Layouts/UserMenu";
import Layout from '../../components/Layouts/Layout';
import Header from '../../components/Layouts/Header';
import Footer from '../../components/Layouts/Footer';

const UserOrders = () => {
  return (
    <>
    <Layout title = "EzCart - About Us"/>
    <Header />
      <div className="container-fluid m-3 p-3" style={{minHeight: '100vh'}}>
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9 pt-5" style={{ fontSize: "25px" }}>
            <h1>Orders of User</h1>
          </div>
        </div>
      </div>
      <Footer />
    </>

  );
}

export default UserOrders
