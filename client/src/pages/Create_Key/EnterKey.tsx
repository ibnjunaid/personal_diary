import { LockOutlined } from "@ant-design/icons"
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import './CreateKey.scss'

import { StateContext } from '../../App';

const EnterKey = () => {

    const StateContextN = useContext (StateContext)
    const [enteredKey, setEnteredKey] = useState<string>('')
    const [keyVerified, setKeyVerified] = useState<boolean>(false)

    const VerifyKey = () => {
            fetch(`http://localhost:5000/api/keys/check-keys`,{
                method: 'POST',
                body: JSON.stringify({ key: enteredKey, userId: StateContextN.state.userId}),
                headers: {
                    'Content-Type': "application/json"
                }
            }).then((response) =>{
                if( response.ok){
                    setKeyVerified(true)
                }
                else{
                    setKeyVerified(false)
                }
            }).catch((error) => {
                console.error(error)
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
               <Link to={ keyVerified ? '/entry' : '/home'} style={{color:'white', textDecoration:'none'}}> OK </Link> 
            </button>
        </div>
    )
}

export default EnterKey