import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import './CreateKey.scss'

import { StateContext } from '../../App';

interface keys{
    publicKey: string,
    secretKey: string
}
const CreateKeys = () => {

    const StateContextN = useContext(StateContext)
    const [keys, setKeys] = useState<keys>( {publicKey:'', secretKey: ''} )

    const KeysSubmit = () => {

        const UserKeys = {
            Keys: [
                {
                    value: keys.publicKey,
                    type: 'DUMMY'
                },
                {
                    value: keys.secretKey,
                    type: 'REAL'
                },
            ],
            userId: StateContextN.state.userId
        }
        fetch(`http://localhost:5000/api/keys/update-keys`, {
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
            <input placeholder='xxx-xxxx-xxx' className='keyin' onChange={(e) => {setKeys({ ...keys, secretKey: e.target.value })}}/><br />

            Enter Public Key <br />
            <input placeholder='xxx-xxx-xxx' className='keyin'  onChange={(e) => {setKeys({ ...keys, publicKey: e.target.value })}} /><br />

            <button className='butk' onClick={KeysSubmit}><Link to='/entry' style={{ color: 'white', textDecoration: 'none' }}> Create Account </Link></button>
        </div>
    )
}

export default CreateKeys