import React from 'react';

const Product = ({ product, index, refetch, setDeletingProduct }) => {
    const { name, minimum_quantity, img, quantity } = product;
    return (
        <tr>
            <th>{index + 1}</th>
            <td><div class="avatar">
                <div class="w-8 rounded">
                    <img src={img} alt={name} />
                </div>
            </div></td>
            <td>{name}</td>
            <td>{minimum_quantity}</td>
            <td>
                <label onClick={() => setDeletingProduct(product)} for="delete-confirm-modal" class="btn btn-xs btn-error">Delete</label>
            </td>
        </tr>
    );
};

export default Product;