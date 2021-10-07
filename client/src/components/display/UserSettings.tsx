import { EditOutlined,RollbackOutlined } from "@ant-design/icons"
import './UserSettings.scss'
import { StateContext } from '../../App'
import { useContext } from "react"

interface UserSettingsI{
    setToggle: (a: boolean) => void
}

const UserSettings = ({setToggle}: UserSettingsI ) => {

    const StateContextN = useContext(StateContext)

    return(
        <div className='setDiv'>
            <button className='seticon' onClick={()=> setToggle(true)}> <RollbackOutlined /> </button>
            <img src={StateContextN.state.displayPicture} className='imageset' alt='work desk'/>
            Username <br/>
            <input  placeholder='Your name' className='seti' 
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>{ StateContextN.dispatch({type: 'userName', value: e.target.value}) }}/>
            <EditOutlined /> <br/>
            
            Secret Key <br/>
            <input placeholder='xxx-xxxx-xxx' className='seti'/><EditOutlined /><br/>
            
            Public Key <br/>
            <input placeholder='xxx-xxx-xxx' className='seti'/><EditOutlined /><br/>
            
            Google Account <br/>
            <input  placeholder='xyx123@gmail.com' className='seti' 
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>{ StateContextN.dispatch({ type: 'email', value: e.target.value}) }}/>
            <EditOutlined /><br/>
            
            <button className='buts' onClick={()=> setToggle(true)}>Save Changes</button>
        </div>
    )
}

export default UserSettings