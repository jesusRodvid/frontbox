import React, {useState} from 'react'

export const ListItemsComponents = () => {
    
    const [items, setItems] = useState([])
    return (
        <div className = "container">
            <h2 className = "text-center"> List Items</h2>

            <table className= "table table-bordered table-striped">
                <thead>
                    <th>Item Id</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Discounts</th>
                    <th>Suppliers</th>
                    <th>Creation Date</th>
                    <th>Creator</th>
                    
                </thead>

            </table>
        </div>
    )
}
