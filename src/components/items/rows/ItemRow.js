import React, { useState } from "react";

export const ItemRow = ({item}) => {
  const [modalShowItem, setModalShowITem] = useState(false);
  
  return (
    <tr>
      <td>{item.idItem}</td>
      <td>{item.description}</td>
      <td>{item.price}€</td>
      <td>{item.state ? "Published" : "Discontinued"}</td>
      <td>{item.creationDate}</td>
      <td>{item.creator === null ? "No creator" : item.creator.name}</td>




    </tr>
  );
};
