import React from "react";
import firebase from "../model/firebase";
import TimesList from "./times-list";
import AddTimeEntryForm from "./add-time-entry-form";

const Dashboard = () => {
  return (
    <div className="container mx-auto">
      <TimesList />
      <AddTimeEntryForm />
      <button onClick={() => firebase.auth().signOut()}>Signout</button>
    </div>
  );
};

export default Dashboard;
