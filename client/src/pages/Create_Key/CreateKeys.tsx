import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import './CreateKey.scss'

import { StateContext } from '../../App';

const CreateKeys = () => {

    const StateContextN = useContext(StateContext)

    const KeysSubmit = () => {
        const UserKeys = {
            keys: [
                {
                    value: StateContextN.state.publicKey,
                    keyType: 'DUMMY'
                },
                {
                    value: StateContextN.state.secretKey,
                    keyType: 'REAL'
                },
            ],
            userId: StateContextN.state.userId
        }
        fetch(`/api/keys/update-keys`, {
            method: 'PATCH',
            body: JSON.stringify(UserKeys),
            headers: {
                'Content-Type': "application/json"
            }
        })
    }


    return (
        <div className='ekeydiv'>
            <div className='ekeydiv2' >
                Welcome to My diary
            </div>
            <img src='https://simg.nicepng.com/png/small/136-1366211_group-of-10-guys-login-user-icon-png.png' className='ekeyi'></img><br />
            Enter Username <br />
            <input placeholder={StateContextN.state.userName} className='keyin' /> <br />

            Enter Secret Key <br />
            <input placeholder='xxx-xxxx-xxx' className='keyin' onChange={(e) => { StateContextN.dispatch({ type:'secretKey', value: e.target.value })} }/><br />

            Enter Public Key <br />
            <input placeholder='xxx-xxx-xxx' className='keyin'  onChange={(e) => { StateContextN.dispatch({ type:'publicKey', value: e.target.value })} } /><br />

            <button className='butk' onClick={KeysSubmit}><Link to='/entry' style={{ color: 'white', textDecoration: 'none' }}> Create Account </Link></button>
        </div>
    )
}

export default CreateKeys