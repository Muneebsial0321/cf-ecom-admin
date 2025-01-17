import { Delete, Edit, Visibility } from '@mui/icons-material'
import { Fab } from '@mui/material'
import React from 'react'

const props = {
    id: "product_id",
    name:"Blue Premium T-shirt",
    picUrl:"https://dictionary.cambridge.org/images/thumb/Tshirt_noun_001_18267.jpg?version=6.0.43",
    category:"Clothes",
    brandUrl:"data:image/png;base64,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",
    price:"21.0",
}   

const AllProductsComp = () => {
    return (
        <div className='w-[70%] py-3 -bg-slate-500 border-[1px] border-white hover:border-black transition-all   flex px-3 justify-between rounded my-1 mx-auto'>

            {/* name */}
            <div className="name w-[15rem] h-[4rem]   flex  items-center" >
                {/* image */}
                <img
                    className='w-[4rem] h-[4rem] object-contain'
                    src={props.picUrl}
                />

                {/* details */}
                <div className="flex flex-col h-[3rem] justify-center ml-2">
                    <p className='text-base font-semibold'>{props.name}</p>
                    <p className='text-sm text-gray-600'>{props.id}</p>
                </div>

            </div>
            {/* catagory */}
            <div className="name w-[8rem] h-[4rem]  font-semibold flex justify-center items-center" >{props.category || "none"}</div>
            {/* brand */}
            <div className="name w-[6rem] h-[4rem]   flex justify-center items-center" >
                <img
                    className='w-full object-contain'

                    src={props.brandUrl} alt="" />
            </div>
            {/* price */}
            <div className="name w-[8rem] h-[4rem]   flex justify-center items-center" >${props.price}</div>
            {/* actions */}
            <div className="name w-[15rem] h-[4rem]   flex justify-center gap-4 items-center" >
                <Fab
                    size='small'
                    className='name'
                    color="info"
                    aria-label="add">
                    <Edit />
                </Fab>
                <Fab
                    size='small'
                    className='name'
                    color="error"
                    aria-label="add">
                    <Delete />
                </Fab>
                <Fab
                    size='small'
                    className='name'
                    color="success"
                    aria-label="add">
                    <Visibility />
                </Fab>
            </div>

        </div>
    )
}

export default AllProductsComp