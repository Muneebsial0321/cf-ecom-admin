
import { Button, TextField } from "@mui/material"
import { useState } from "react"
import { createProduct } from "../../_api/products"


const cap = (str) => str.charAt(0).toUpperCase() + str.slice(1)


const _data = [
    { name: "name", placeholder: "Mens watch" },
    { name: "desc", placeholder: "Descrption about the product" },
    { name: "price", placeholder: "4000 (just add numbers)" },
    { name: "colour", placeholder: "red,blue,green (just comma seprated , no need to add space)" },
    { name: "size", placeholder: "(just comma seprated , no need to add space)" },
    { name: "tags", placeholder: "red,blue,green (just comma seprated , no need to add space)" },
]


const CreateProduct = () => {

    const [state, setState] = useState({})
    const [images, setImages] = useState([]);

    const handleFileChange = (e) => {
        setImages(Array.from(e.target.files));
        console.log("Files selected:", e.target.files);
    }

    const __submit__ = async () => {
        const formData = new FormData();

        // Process colours, size, and tag fields
        if (typeof state.colour === "string") {
            state.colour = state.colour.split(",");
        }
        if (typeof state.size === "string") {
            state.size = state.size.split(",");
        }
        if (typeof state.tags === "string") {
            state.tags = state.tags.split(",");
        }
        if (typeof state.price === "string") {
            state.price = +state.price
        }


        formData.append("name", String(state.name));
        formData.append("price", String(state.price));
        formData.append("desc", String(state.desc));
        formData.append("size", JSON.stringify(state.size));
        formData.append("colour", JSON.stringify(state.colour));
        formData.append("tags", JSON.stringify(state.tags));



        if (images) {
            console.log("images", images)
            images.forEach((image) => {
                formData.append('images', image);
            });

        }
        await createProduct(formData);
    };


    const __onchange__ = (e) => {
        setState((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }


    return (
        <div className="flex py-[10rem] w-[100vw] flex-col bg-orange-100 justify-center items-center">
            {_data.map((e, i) => (

                <TextField
                    key={i}
                    onChange={__onchange__}
                    type={e.name == 'price' ? "number" : "text"}
                    name={e.name}
                    className="w-[19rem] py-3"
                    variant="outlined"
                    placeholder={cap(e.name)} />
            ))}

            <input
                className="w-[19rem] py-3"
                type="file"
                multiple
                onChange={handleFileChange}
            />

            <Button
                onClick={__submit__}
                className="bg-black w-[19rem] text-white mt-2" >Submit</Button>
        </div>
    )
}

export default CreateProduct