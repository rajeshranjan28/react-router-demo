import React from 'react'
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';

function Github() {
    const data = useLoaderData()
    // const[data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/rajeshranjan28')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // }, []);

  return (
    <div className='text-center m-4 bg-gray-700 text-white p-4 text-3xl'>Github followers: {data.followers}
    <img className='text-center' src={data.avatar_url} alt="Git picture"  width={300} />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () =>{
    const response = await fetch('https://api.github.com/users/rajeshranjan28')
    return response.json();
}