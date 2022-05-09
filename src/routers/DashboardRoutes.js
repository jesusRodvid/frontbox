import React from 'react'
import { Navbar } from '../components/nav/Navbar'
import { Routes, Route } from 'react-router-dom'
import { ItemsScreen } from '../components/items/ItemsScreen'
import { SupplierScreen } from '../components/suppliers/SupplierScreen'
import { SearchScreen } from '../search/SearchScreen'

export const DashboardRoutes = () => {
    return (
        <>
          <Navbar />
            <Routes>
                <Route path = "items" element = {<ItemsScreen />} />
                <Route path = "suppliers" element = {<SupplierScreen />} />
                <Route path = "search" element = {<SearchScreen />} />
                <Route path = "/" element = {<ItemsScreen />} />


                
            </Routes>  
        </>
    )
}
