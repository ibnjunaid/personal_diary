import './UserInfo.scss';

const CreateEntry = () =>{

    return(
        <>
             <input className='date' placeholder='10/9/2021'/>
                <button className='buttonS' ></button>
                <button className='buttonS'></button>
                <br/>
                <input className='title' placeholder='Entry Name'/>
                <hr className='hrcss'/>
                <textarea className='bodyTxt' placeholder='Enter your entry here ...'/>
        </>
    )
}
export default CreateEntry