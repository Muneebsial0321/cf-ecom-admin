import React from 'react'

const AllProductsComp = () => {
    return (
        <div className='w-[70%] py-6 bg-slate-500 flex px-3 justify-between rounded my-1 mx-auto'>

            {/* name */}
            <div className="name w-[6rem] py-4 bg-slate-300 h-full flex" >
                {/* image */}
                <img
                className='w-[3rem] h-[3rem] object-contain'
                src='https://dictionary.cambridge.org/images/thumb/Tshirt_noun_001_18267.jpg?version=6.0.43'
                />

                {/* details */}
                <div className="flex flex-col h-[3rem] justify-center items-center">
                    <p className='text-sm'>name</p>
                    <p className='text-sm'>name</p>
                </div>
                
                </div>
            {/* catagory */}
            <div className="name w-[6rem] py-4 bg-slate-300 h-full flex justify-center items-center" >name</div>
            {/* brand */}
            <div className="name w-[6rem] py-4 bg-slate-300 h-full flex justify-center items-center" >name</div>
            {/* price */}
            <div className="name w-[6rem] py-4 bg-slate-300 h-full flex justify-center items-center" >name</div>
            {/* published */}
            <div className="name w-[6rem] py-4 bg-slate-300 h-full flex justify-center items-center" >name</div>
            {/* actions */}
        </div>
    )
}

export default AllProductsComp