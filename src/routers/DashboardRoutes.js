import React from 'react'
import { Navbar } from '../components/nav/Navbar'
import { Routes, Route } from 'react-router-dom'
import { ItemsScreen } from '../components/items/ItemsScreen'
import { SupplierScreen } from '../components/suppliers/SupplierScreen'
import { SearchScreen } from "../search/SearchScreen";
import { AddItemScreen } from '../components/items/AddItemScreen'

export const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="items" element={<ItemsScreen />} />
          <Route path="suppliers" element={<SupplierScreen />} />
          <Route path="search" element={<SearchScreen />} />
          <Route path="additem" element={<AddItemScreen/>} />

          <Route path="/" element={<ItemsScreen />} />
        </Routes>
      </div>
    </>
  );
};
