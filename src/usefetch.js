import { useEffect, useState } from 'react'

export default function Usefetch() {
  const [userdata, setUserdata] = useState("");
  useEffect(() => {
    fetch("http://localhost:8000/data")
      .then((res) => res.json())
      .then(res => {
        setUserdata(res);
      })
  }, [])
  return { userdata }
}
