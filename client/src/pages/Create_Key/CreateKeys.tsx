import { Link } from 'react-router-dom';
import './CreateKey.scss'

const CreateKeys = () => {
    return(
        <div className='ekeydiv'>
            <div className='ekeydiv2' >
                Welcome to My diary
            </div>
            <img src='https://simg.nicepng.com/png/small/136-1366211_group-of-10-guys-login-user-icon-png.png' className='ekeyi'></img><br/>
            Enter Username <br/>
            <input placeholder='Username' className='keyin'/> <br/>
            
            Enter Secret Key <br/>
            <input placeholder='xxx-xxxx-xxx' className='keyin' 
                    onChange={(e) =>{ localStorage.setItem('Secret Key', e.target.value)}}/><br/>
            
            Enter Public Key <br/>
            <input placeholder='xxx-xxx-xxx' className='keyin'
                     onChange={(e) =>{ localStorage.setItem('Public Key', e.target.value)}}/><br/>
            
            <button className='butk'><Link to='/user' style={{color:'white', textDecoration:'none'}}> Create Account </Link></button>
        </div>
    )
}

export default CreateKeys