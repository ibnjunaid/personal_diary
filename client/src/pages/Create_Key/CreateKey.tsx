import { LockOutlined } from "@ant-design/icons"
import './CreateKey.scss'
const CreateKey = () => {
    return(
        <div className='keydiv'>
             Please enter your key <br/>
             <div className='keydiv2'>
             <LockOutlined />
             </div>
            <input className='keyi' placeholder='diary-key'/> 
        </div>
    )
}

export default CreateKey