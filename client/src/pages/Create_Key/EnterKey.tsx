import { LockOutlined } from "@ant-design/icons"
import { useEffect } from "react";
import { Link } from 'react-router-dom';

import './CreateKey.scss'
const EnterKey = () => {

    // useEffect(() => {
    //     (async () => {
    //         try {
    //             const response = await fetch(`http://localhost:5000/api/`, {
    //                 method: 'GET',
    //                 mode: 'cors',
    //                 headers:{
    //                     'Content-Type':"application/json"
    //                 }
    //             })
    //             let {data} = await response.json()
    //             //setData(data)
    //         } catch (error) {
    //             throw error;
    //         }
    //     })()
    // }, [])


    const SecretKey = `${localStorage.getItem('Secret Key')}`
    let SecretEntered
    return(
        <div className='keydiv'>
             Please enter your key <br/>
             <div className='keydiv2'>
             <LockOutlined />
             </div>
            <input className='keyi' placeholder='diary-key' onChange={(e) => {  SecretEntered = e.target.value }}/> 
            <button className='butk'>{
                SecretKey === SecretEntered ?
                <Link to='/entry' style={{color:'white', textDecoration:'none'}}> OK </Link> :
                 <Link to='/home' style={{color:'white', textDecoration:'none'}}> OK </Link> 
            }</button>
        </div>
    )
}

export default EnterKey