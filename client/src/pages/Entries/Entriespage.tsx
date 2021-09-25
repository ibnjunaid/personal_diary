import CreateEntry from '../../components/display/CreateEntry';
import UserInfo from '../../components/display/UserInfo';
import './Entriespage.scss';

const Entriespage = () =>{

    return(
        <div className = 'container2'>

            <div className = 'leftpanel'>
               <CreateEntry/>
            </div>
            <div className = 'rightpanel'>
                <UserInfo/>
                <hr className='hrcss'/>
                <button className = 'createbtn'> Create New Entry + </button>
            </div>
        </div>
    )
}
    
export default Entriespage