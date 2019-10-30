import React, { useState, useEffect } from "react";
import firebase from "../../model/firebase";

function useTimes() {
  const [times, setTimes] = useState([]);

  useEffect(() => {
    setTimes([
      { id: 1, title: "test1", time_seconds: 10 },
      { id: 2, title: "test2", time_seconds: 14 },
      { id: 3, title: "test4", time_seconds: 24 },
      { id: 4, title: "test5", time_seconds: 132 }
    ]);
  }, []);

  // useEffect(() => {
  //   const unsubscribe = firebase
  //     .firestore()
  //     .collection("times")
  //     .onSnapshot(snapshot => {
  //       const newTimes = snapshot.docs.map(doc => ({
  //         id: doc.id,
  //         ...doc.data()
  //       }));
  //       setTimes(newTimes);
  //     });

  //   // close websocket
  //   // VERY IMPORTANT
  //   return () => unsubscribe();
  // }, []);

  return times;
}

const TimeList = () => {
  const times = useTimes();

  return (
    <div className="bg-white shadow-md rounded p-10 mr-5">
      <table class="table-auto w-full">
        <thead>
          <tr>
            <th class="px-4 py-2">Id</th>
            <th class="px-4 py-2">Title</th>
            <th class="px-4 py-2">Seconds</th>
          </tr>
        </thead>
        <tbody>
          {times.map((time, index) => (
            <tr class={index % 2 === 0 ? "" : "bg-gray-100"} key={time.id}>
              <td class="border px-4 py-2">{time.id}</td>
              <td class="border px-4 py-2">{time.title}</td>
              <td class="border px-4 py-2">
                <code className="time">{time.time_seconds}s</code>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TimeList;
