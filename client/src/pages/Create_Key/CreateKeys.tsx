import { LockOutlined } from "@ant-design/icons"
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
            <input placeholder='xxx-xxxx-xxx' className='keyin'/><br/>
            
            Enter Public Key <br/>
            <input placeholder='xxx-xxx-xxx' className='keyin'/><br/>
            
            <button className='butk'>Create Account</button>
            {
                <Link to='/entry' style={{color:'black'}}> entry page</Link>
            }
        </div>
    )
}

export default CreateKeys