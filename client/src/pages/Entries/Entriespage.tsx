import {SearchOutlined} from '@ant-design/icons'

import CreateEntry from '../../components/display/CreateEntry';
import EntryCard from '../../components/display/EntryCard';
import UserInfo from '../../components/display/UserInfo';
import './Entriespage.scss';

const data ={
    title: 'Title',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates nobis quibusdam necessitatibus omnis totam voluptatum explicabo labore, quia ea similique aliquid provident dolorum fugit inventore dolor. Cum nostrum facilis iste.',
    date: new Date()
}

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
                <button className = 'search'><SearchOutlined /></button>
                <button className = 'entrycbtn'><EntryCard title={data.title} text={data.text} date={data.date}/></button>
                <button className = 'entrycbtn'><EntryCard title={data.title} text={data.text} date={data.date}/></button>
            </div>
        </div>
    )
}
    
export default Entriespage