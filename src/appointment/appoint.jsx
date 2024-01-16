import React from 'react'
import Usefetch from '../usefetch'
import { Link } from 'react-router-dom';

export default function Appoint() {
    

    const { userdata } = Usefetch();
    return (
        <>
        <Link to="/newapp" >Make appointment</Link>
            {userdata && userdata.map((val, index) => {
                return (
                    <div key={index}>
                        <h1>{val.name}</h1>
                    </div>
                )
            })}
        </>
    )
}
