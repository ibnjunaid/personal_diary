import { LockOutlined } from "@ant-design/icons"
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import './CreateKey.scss'

import { StateContext } from '../../App';

const EnterKey = () => {

    const StateContextN = useContext (StateContext)
    const [enteredKey, setEnteredKey] = useState<string>('')

    const VerifyKey = () => {
            fetch(`http://localhost:5000/api/keys/check-keys`,{
                method: 'GET',
                body: JSON.stringify({ key: enteredKey, userId: StateContextN.state.userId}),
                headers: {
                    'Content-Type': "application/json"
                }
            }).then((data) =>{
                console.log('success')
            }).catch((error) => {
                console.error('failed')
            })
    }

    let SecretEntered
    return(
        <div className='keydiv'>
             Please enter your key <br/>
             <div className='keydiv2'>
             <LockOutlined />
             </div>
            <input className='keyi' placeholder='diary-key' onChange={(e) => { setEnteredKey(e.target.value)} }/> 
            <button className='butk' onClick= {VerifyKey}>
                <Link to='/entry' style={{color:'white', textDecoration:'none'}}> OK </Link>
            </button>
        </div>
    )
}

export default EnterKey