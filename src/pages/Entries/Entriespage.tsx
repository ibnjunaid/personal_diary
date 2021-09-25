import UserInfo from '../../components/display/UserInfo';
import './Entriespage.scss';

const Entriespage = () =>{

    return(
        <div className = 'container2'>

            <div className = 'leftpanel'>
                <input className='date' placeholder='10/9/2021'/>
                <button className='buttonS' ></button>
                <button className='buttonS'></button>
                <br/>
                <input className='title' placeholder='Entry Name'/>
                <hr className='hrcss'/>
                <textarea className='bodyTxt' placeholder='Enter your entry here ...'/>
            </div>
            <div className = 'rightpanel'>
                <div></div>
            <hr className='hrcss'/>
            </div>
        </div>
    )
}
    
export default Entriespage