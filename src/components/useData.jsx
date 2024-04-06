import { useEffect, useState } from 'react'

function useData(url) {
    const[data,setData]=useState([]);

    const getData=async (url)=>{
        try {
            const req=await fetch.get(url);
            const res=await req.json();
            setData(res);
        } catch (error) {
            
        }
    }
    console.log(data);
    useEffect(()=>{
        getData(url);
    },[url])

  return {data
}
}

export default useData
