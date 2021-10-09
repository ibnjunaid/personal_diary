import { Link } from 'react-router-dom';
import { useContext } from 'react';
import './CreateKey.scss'

import { StateContext } from '../../App';
const CreateKeys = () => {
    
    const StateContextN = useContext (StateContext)

    // fetch(`http://localhost:5000/api/`, {
    //     method: 'POST',
    //     //body: JSON.stringify(FullEntry),
    //     headers: {
    //         'Content-Type': "application/json"
    //     }
    // }).then((response: Response) => {
    //     response.json()
    //         .then(({ entry }: any) => {
    //             //setData([entry, ...data])
    //         })
    // })

    return(
        <div className='ekeydiv'>
            <div className='ekeydiv2' >
                Welcome to My diary
            </div>
            <img src='https://simg.nicepng.com/png/small/136-1366211_group-of-10-guys-login-user-icon-png.png' className='ekeyi'></img><br/>
            Enter Username <br/>
            <input placeholder={StateContextN.state.userName} className='keyin'/> <br/>
            
            Enter Secret Key <br/>
            <input placeholder='xxx-xxxx-xxx' className='keyin' 
                    onChange={(e) =>{ StateContextN.dispatch({type:'SecretKey', value:e.target.value}) }}/><br/>
            
            Enter Public Key <br/>
            <input placeholder='xxx-xxx-xxx' className='keyin'
                     onChange={(e) =>{ StateContextN.dispatch({type:'PrivateKey', value:e.target.value})}}/><br/>
            
            <button className='butk'><Link to='/entry' style={{color:'white', textDecoration:'none'}}> Create Account </Link></button>
        </div>
    )
}

export default CreateKeys