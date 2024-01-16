import React, { useState } from 'react'

export default function Newapp() {
    const [name, setname] = useState("");
    const [appointdate, setAppointdate] = useState("");
    const [email, setEmail] = useState("");
    const [ph, setPh] = useState("");

    const handelsubmit = (e) => {
        e.preventDefault();
        const data = { name, appointdate, ph, email };

        fetch('http://localhost:8000/data', {
            method: 'Post',
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(() => {
                console.log("new data added");
            })
    }
    return (
        <>
            <form>
                <input type="text" placeholder='name' onChange={(e) => { setname(e.target.value) }} />
                <input type="date" name="" id="" onChange={(e) => { setAppointdate(e.target.value) }} />
                <input type="email" name="" id="" placeholder='Enter Email' onChange={(e) => { setEmail(e.target.value) }} />
                <input type="number" name="" id="" placeholder='Enter phone no' onChange={(e) => { setPh(e.target.value) }} />
                <button onClick={handelsubmit}>submit</button>
            </form>
        </>
    )
}
