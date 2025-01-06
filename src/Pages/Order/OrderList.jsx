import React, { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';


function OrderList() {
    const status = [
        { name: "status" },
        { name: "Delivered" },
        { name: "Proccessing" },
        { name: "Cancelled" },
    ]

    const [products, setProducts] = useState({
        orderId: "f0ba538b-c8f3-45ce-b6c1-209cf07ba5f8",
        placedOn: "10 Nov, 2022",
        status: "Delivered",
        products: [
            {
                name: "Budi 2017",
                price: 226.00,
                quantity: 1,
                image: "https://via.placeholder.com/150?text=Car+Image",
                properties: "Black, L",
            },
            {
                name: "Budi 2017",
                price: 226.00,
                quantity: 15,
                image: "https://via.placeholder.com/150?text=Car+Image",
                properties: "Black, L",
            },
            {
                name: "Budi 2017",
                price: 226.00,
                quantity: 11,
                image: "https://via.placeholder.com/150?text=Car+Image",
                properties: "Black, L",
            },
        ],
    });

    return (
        <div className='p-5'>
            <h3 className='text-3xl font-semibold'>Order List</h3>
            <div className='border p-5 my-6 bg-white rounded-md'>
                <div className='text-gray-500 flex'>
                    <h3>Order ID: <h2 className='text-black inline'>{products.orderId}</h2></h3>
                    <h3 className='ml-20'>Placed on: <h2 className='text-black inline'>{products.placedOn}</h2></h3>
                </div>
                <div className='flex justify-between my-6'>
                    <input type="text" name="" id="" className='w-[48%] border p-3 rounded-md outline-blue-500' placeholder='Add Product' />
                    <select name="status" id="staustcheck" className='w-[48%] p-2 rounded-md border'>
                        {status.map((name, i) => {
                            return <option value={name.name} key={i}>{name.name}</option>
                        })}
                    </select>
                </div>
                {products.products.map((data, i) => {
                    return <div className='flex justify-between items-center text-gray-500 my-7' key={i}>
                        <div className='flex'>
                            <img src={data.image} alt="Error" className='border h-16 rounded-md' />
                            <div className='ml-5'>
                                <h2>{data.name}</h2>
                                <div className='my-3 flex justify-between'>
                                    <h3>${data.price} X </h3>
                                    <h3 className='bg-gray-300 px-1 rounded-md'> {data.quantity} </h3>
                                </div>
                            </div>
                        </div>
                        <h2>Product properties: {data.properties}</h2>
                        <DeleteIcon />
                    </div>
                })}
            </div>
            <div className='flex gap-8'>
                <div className='border w-[50%] p-5 bg-white rounded-md'>
                    <form action="">
                        <div>
                            <label htmlFor="">Shipping Address</label>
                            <textarea name="" rows={4} id="" className='p-5 w-full border outline-none rounded-lg' placeholder='Kelly Williams 777 Brockton Avenue, Abington MA 2351'></textarea>
                        </div>
                        <div className='my-5'>
                            <label htmlFor="">Costumer's Note</label>
                            <textarea name="" rows={4} id="" className='p-5 w-full border outline-none rounded-lg' placeholder='Please deliver ASAP.'></textarea>
                        </div>
                    </form>
                    <button className='bg-blue-500 p-3 rounded-md text-xl text-white'>Save Changes</button>
                </div>
                <div className='border w-[50%] p-5 h-[20%] bg-white rounded-md'>
                    <h3 className='text-xl font-semibold'>Total Summary</h3>
                    <div className='flex justify-between my-5'>
                        <h3>Subtotal</h3>
                        <h3 className='font-semibold'>$350</h3>
                    </div>
                    <div className='flex justify-between'>
                        <h3>Shipping Fee:</h3>
                        <h3 className='font-semibold'>$350</h3>
                    </div>
                    <div className='flex justify-between my-5'>
                        <h3>Discount:</h3>
                        <h3 className='font-semibold'>$350</h3>
                    </div>
                    <hr />
                    <div className='flex justify-between font-semibold my-5'>
                        <h3>Total:</h3>
                        <h3>$350</h3>
                    </div>
                    <h3 className='text-1xl font-semibold'>Paid by Credit/Debit Card</h3>
                </div>
            </div>
        </div>
    )
}

export default OrderList
