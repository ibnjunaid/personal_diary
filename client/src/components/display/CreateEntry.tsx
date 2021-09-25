import {SaveOutlined, DeleteOutlined } from '@ant-design/icons'
import './UserInfo.scss';

const CreateEntry = () =>{

    return(
        <>
             <input className='date' placeholder='10/9/2021'/>
                <button className='buttonS' ><DeleteOutlined /></button>
                <button className='buttonS'><SaveOutlined /></button>
                <br/>
                <input className='title' placeholder='Entry Name'/>
                <hr className='hrcss'/>
                <textarea className='bodyTxt' placeholder='Enter your entry here ...'/>
        </>
    )
}
export default CreateEntry