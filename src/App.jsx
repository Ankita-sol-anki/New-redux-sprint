
import { use, useState } from 'react';
import './App.css';
import Loader from './component/ui/Loader.jsx';
import { useEffect } from 'react';
import { useDispatch ,useSelector } from 'react-redux';
import { removeLoader, setuserDetails } from './redux/user/userSlices.js';

function App() {
let dispatch = useDispatch();
let loading = useSelector((state) => state.user.isLoading);
let userName = useSelector((state) => state.user?.userDetails?.status);
   let isLoggedin = "NO"
  

   function handleSetuserDetails(){
    dispatch(
setuserDetails({
    data: { name: "Ankita solanki",
      status: "logged in"}
    })
    );
   }
  useEffect(() => {
    setTimeout(() => {
      dispatch(removeLoader());
    }, 4000);
  }, [dispatch]);

  if (loading) {
    return <Loader />;
  }



  return (

    <>
      <h1> user Name</h1> <br />
      <h2>Ankita solanki</h2>
      <h3>Logged in status{isLoggedin} </h3>
      <button onClick={handleSetuserDetails}>set user</button>
    </>
  );
}

export default App;
