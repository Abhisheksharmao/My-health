import React from 'react'
import '../css/home.css'
import { Link } from 'react-router-dom'
export default function Home() {
    return (
        <>
            <div className='container1'>
                <div className='con1'>
                    <h1>Schedule Your Appointment Online</h1>
                    <h3>Get 10% off on all In Hospital appointment</h3>
                </div>



                <div className='con2'>
                    <input type="search" name="" id="" placeholder='search for doctor' />
                    <input type="location" placeholder='search for location'/>
                    <Link to="../appoint" style={{ background: "darkblue", padding: "8px", color: "white", textDecoration: "none", borderRadius: "5px",height:"45px",width:"300px", textAlign:"center" }}>Book an Appointment</Link>
                </div>



                <div className='con3'>
                    <button>Home</button>
                    <button>Lab</button>
                    <button>Checkup</button>
                </div>



                <div className='con4'>
                    <button>immigration</button>
                    <button>International Patients</button>
                </div>
            </div>



            <div className="container2">
                <h1>Specialities & Procedures</h1>
                <div>
                    <ul>
                        <li>Cancer Care / Oncology</li>
                        <li>Robotic Surgery</li>
                        <li>Cardiac Sciences</li>
                        <li>Liver Transplant and Billiary Sciences</li>
                        <li>Orthopaedics & Joint Replacement</li>
                        <li>View all...</li>
                    </ul>
                </div>


                <div>
                    <h2>Next Generation Robotic Surgery</h2>
                    <h4>info</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia commodi dolore eius excepturi voluptate. Nam pariatur impedit dolor necessitatibus amet recusandae quam sit consequatur aspernatur expedita voluptates, doloremque hic quibusdam corrupti tempora distinctio? Exercitationem modi aliquid illum sequi, voluptas error odio nobis doloremque pariatur! Asperiores, esse? Ullam corporis dolorum corrupti.</p>
                </div>

                <div className="oth_hosp">
                    <h1>Our Hospital Network</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium sunt quia voluptates iste, dolores praesentium nobis necessitatibus beatae animi provident.</p>
                </div>
                <div className="crd">
                    <div className="card1">
                        <img src="" alt="" />
                        <h2>title</h2>
                        <p>rating</p>
                    </div>
                </div>
            </div>
        </>
    )
}
