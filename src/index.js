import React from "react";
import "./index.css";
import App from "./App";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
  <Provider store={store} >
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          {/* <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} /> */}
        </Route>
        <Route render={() => <Navigate to="/login" />} />
        {/* <Route path="/" element={<Pages />}>
          <Route path="/home" element={<Home />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/create-customer" element={<CreateCustomer />} />
          <Route path="/supplier" element={<Supplier />} />
          <Route path="/create-supplier" element={<CreateSupplier />} />
          <Route path="/accounts" element={<Accounts />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/mainaccounts" element={<MainAccounts />} />
          <Route path="/purchases" element={<Purchases />} />
          <Route path="/create-purchase-order" element={<CreatePurchase />} />
          <Route path="/purchasechallans" element={<PurchaseChallan />} />
          <Route path="/create-purchase-challans" element={<CreatePurchaseChallan />} />
          <Route path="/purchaseinvoice" element={<PurchaseInvoice />} />
          <Route path="/create-purchase-invoices" element={<CreatePurchaseInvoice />} />
          <Route path="/aclportal" element={<AclPort/>} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);