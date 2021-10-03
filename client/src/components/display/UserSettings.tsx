import { EditOutlined,RollbackOutlined } from "@ant-design/icons"
import './UserSettings.scss'

interface UserSettings{
    setToggle: (a: boolean) => void
}

const UserSettings = ({setToggle}: UserSettings ) => {

    return(
        <div className='setDiv'>
            <button className='seticon' onClick={()=> setToggle(true)}> <RollbackOutlined /> </button>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1_0exkA6Rq8-cVs9yK-IOErE-MulGdqx7nP3uyk9hWq27iv5xfHp4j0KP_YgFumn242c&usqp=CAU' className='imageset' alt='work desk'></img>
            Username <br/>
            <input placeholder='Your name' className='seti'/><EditOutlined /> <br/>
            
            Secret Key <br/>
            <input placeholder='xxx-xxxx-xxx' className='seti'/><EditOutlined /><br/>
            
            Public Key <br/>
            <input placeholder='xxx-xxx-xxx' className='seti'/><EditOutlined /><br/>
            
            Google Account <br/>
            <input placeholder='xyx123@gmail.com' className='seti'/><EditOutlined /><br/>
            
            <button className='buts'>Save Changes</button>
        </div>
    )
}

export default UserSettings