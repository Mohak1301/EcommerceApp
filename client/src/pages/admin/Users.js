import React, { useState, useEffect } from 'react'
import Layout from '../../components/Layouts/Layout'
import AdminMenu from '../../components/Layouts/AdminMenu';
import Header from '../../components/Layouts/Header';
import Footer from '../../components/Layouts/Footer';
import axios from "axios";
import { Notyf } from 'notyf';
const notyf = new Notyf({
  duration: 2000,
  position: {
    x: "center",
    y: "top",
  },
});

const Users = () => {
  const [users, setUser] = useState([]);
  const getAllUsers = async () => {
    try{
      const { data } = await axios.get(
        `/api/v1/user/Allusers`
      );
      setUser(data.users);
    }
    catch(error){
      console.log(error);
      notyf.error("Something went wrong");
    }
  };
  useEffect(() => {
    getAllUsers();
  }, []);

  const deleteUser = async (pid) => {
    try{
        const {data} = await axios.delete(`/api/v1/user/delete-user/${pid}`)
        notyf.success("User deleted successfully");
        getAllUsers();
    }
    catch(error){
      console.log(error);
      notyf.error("Something went wrong");
    }
  }

  return (
    <>
    <Layout title = "EzCart - Users"/>
    <Header />
      <div className="container-fluid m-3 p-3" style={{minHeight: '100vh'}}>
        <div className="row">
          <div className="col-md-3">
            <AdminMenu/>
          </div>
          <div className="col-md-9 pt-5" style={{ fontSize: "25px" }}>
           
              <h1>Users</h1>
              <div className="d-flex flex-wrap">
              {users?.map((p) => (
                  <div
                    className="card m-2"
                    style={{ width: "18rem" }}
                    key={p._id}
                  >
                    <div className="card-body">
                      <h5 className="card-title">{p.name}</h5>
                      <p className="card-text">{p.email}</p>
                      <p className="card-text">{p.number}</p>
                      <p className='card-text'>{p.address}</p>
                      <button className='btn btn-danger' onClick={() => {deleteUser(p._id)}}>Delete User {p.name}</button>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Users