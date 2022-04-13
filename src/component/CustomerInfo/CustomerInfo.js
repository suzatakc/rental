import React, { useEffect, useState } from "react";
import { getAllCustomer } from "../Api/GetApi";

export const CustomerInfo = () => {
  const [seeCustomer, setSeeCustomer] = useState([]);
  useEffect(() => {
    getAllCustomer().then((res) => {
      setSeeCustomer(res || []);
      console.log(res);
    });
  }, []);
  return (
    <div className="customer-info-table">
      {seeCustomer?.addAccount?.map((item, index) => {
        return (
          <table>
            <thead>{item.addAccount}</thead>
            <tbody>
              <tr>
                <td>{item.email}</td>
              </tr>
            </tbody>
          </table>
        );
      })}
    </div>
  );
};
