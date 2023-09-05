import React from 'react';
import { toast } from 'react-toastify';

const DelecteConfirmOrder = ({deletingOrder, refetch, setDeletingOrder}) => {

    const {_id,name}=deletingOrder;
    

    const handleDelete=(id)=>{
        console.log(id)
        fetch(`https://manufacture-backend.onrender.com/allorder/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    toast.success(`Product: ${name} is deleted.`)
                    setDeletingOrder(null);
                    refetch();
                }
            })
    }

    return (
        <div>
            <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-red-500">Are you sure you want to delete  !</h3>
                    <p class="py-4">If u want to delete this product</p>
                    <div class="modal-action">
                    <button onClick={() => handleDelete(_id)} class="btn btn-xs btn-error">Delete</button>
                        <label for="delete-confirm-modal" class="btn btn-xs">Cancel</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DelecteConfirmOrder;