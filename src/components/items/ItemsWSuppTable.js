import React from 'react';
import { Table} from "react-bootstrap";


export const ItemsWSuppTable = ({suppliers}) => {

    return(
        <Table responsive striped bordered hover variant="light" size="sm">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Country</th>
                </tr>
            </thead>
            <tbody>
                {suppliers && suppliers.map((supplier, key) => (
                <tr key={key}>
                    <td>{supplier.name}</td>
                    <td>{supplier.country}</td>
                </tr>
                ))}
            </tbody>
        </Table>
    );
}