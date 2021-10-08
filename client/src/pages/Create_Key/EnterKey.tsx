import { LockOutlined } from "@ant-design/icons"
import { Link } from 'react-router-dom';

import './CreateKey.scss'
const EnterKey = () => {

    const SecretKey = localStorage.getItem('Secret Key')
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