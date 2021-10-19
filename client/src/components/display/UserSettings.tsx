import { EditOutlined,RollbackOutlined } from "@ant-design/icons"
import './UserSettings.scss'
import { StateContext } from '../../App'
import { useContext } from "react"

interface UserSettingsI{
    setToggle: (a: boolean) => void
}

const UserSettings = ({setToggle}: UserSettingsI ) => {

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
        fetch(`http://localhost:5000/api/keys/update-keys`, {
            method: 'PATCH',
            body: JSON.stringify(UserKeys),
            headers: {
                'Content-Type': "application/json"
            }
        })
        setToggle(true)
    }

    const StateContextN = useContext(StateContext)

    return(
        <div className='setDiv'>
            <button className='seticon' onClick={()=> setToggle(true)}> <RollbackOutlined /> </button>
            <img src={StateContextN.state.displayPicture} className='imageset' alt='work desk'/>
            Username <br/>
            <input  placeholder='Your name' className='seti' 
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>{ StateContextN.dispatch({type: 'userName', value: e.target.value})} }/>
            <EditOutlined /> <br/>
            
            Enter Secret Key <br />
            <input placeholder='xxx-xxxx-xxx' className='seti' onChange={(e) => { StateContextN.dispatch({ type:'secretKey', value: e.target.value })} }/>  <EditOutlined /> <br />

            Enter Public Key <br />
            <input placeholder='xxx-xxx-xxx' className='seti'  onChange={(e) => { StateContextN.dispatch({ type:'publicKey', value: e.target.value })} } />  <EditOutlined /><br />

            {/* Google Account <br/>
            <input  placeholder='xyx123@gmail.com' className='seti' 
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>{ StateContextN.dispatch({ type: 'email', value: e.target.value}) }}/> */}
           <br/>
            
            <button className='buts' onClick={KeysSubmit}>Save Changes</button>
        </div>
    )
}

export default UserSettings