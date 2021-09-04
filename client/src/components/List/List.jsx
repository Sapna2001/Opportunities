import React from "react";
import "./List.css";
import ListTable from "../ListTable/ListTable";

export default function List() {
  return (
    <>
      <div className="listContainer">
        <table>
          <thead>
            <tr>
              <th>Opportunity</th>
              <th>Opening Date</th>
              <th>Closing Date</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            <ListTable />
            <ListTable />
            <ListTable />
            <ListTable />
          </tbody>
        </table>
      </div>
    </>
  );
}
