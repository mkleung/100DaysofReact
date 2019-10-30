import React from "react";

import TimesList from "./TimeList";
import AddTimeEntryForm from "./AddTime";

const divStyle = {
  background: "linear-gradient(90deg, #667eea 0%, #764ba2 100%)"
};

const Dashboard = () => {
  return (
    <div className="py-20" style={divStyle}>
      <div className="container mx-auto px-6">
        <div className="flex justify-center">
          <h2 className="text-4xl font-bold mb-2 text-white">Dashboard</h2>
        </div>
        <div className="flex justify-center">
          <TimesList />
          <AddTimeEntryForm />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
