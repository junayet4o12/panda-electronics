// import React from 'react';

const Input = () => {

    const handlesubmit = e => {
        e.preventDefault()
        const form = e.target;
        const id = form.id.value
        const name = form.name.value
        const img = form.img.value
        const banner1 = form.banner1.value
        const banner2 = form.banner2.value
        const banner3 = form.banner3.value
        const title = form.title.value;
        const company = {id, name, img, banner1, banner2, banner3, title}
        console.log(company);
        fetch('http://localhost:3000/company', {
            method: 'POST',
            headers: {
              'content-type': 'application/json',  
            },
            body: JSON.stringify(company)
        })
        .then(res=>res.json())
        .then(data=> {
            console.log(data);
        })
    }
    return (
        <div>
            <form onSubmit={handlesubmit}>
                <p>id</p><input className="bg-gray-100 border border-black p-2 w-[400px]" type="text" name="id" id="" />
                <p>name</p><input className="bg-gray-100 border border-black p-2 w-[400px]" type="text" name="name" id="" />
                <p>img</p><input className="bg-gray-100 border border-black p-2 w-[400px]" type="text" name="img" id="" />
                <p>banner1</p><input className="bg-gray-100 border border-black p-2 w-[400px]" type="text" name="banner1" id="" />
                <p>banner2</p><input className="bg-gray-100 border border-black p-2 w-[400px]" type="text" name="banner2" id="" />
                <p>banner3</p><input className="bg-gray-100 border border-black p-2 w-[400px]" type="text" name="banner3" id="" />
                <p>title</p><input className="bg-gray-100 border border-black p-2 w-[400px]" type="text" name="title" id="" />
                <input className="btn btn-neutral" type="submit" value="add" />
            </form>
        </div>
    );
};

export default Input;