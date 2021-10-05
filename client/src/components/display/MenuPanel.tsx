import EntryCard from '../../components/display/EntryCard';
import UserInfo from '../../components/display/UserInfo';
import { SearchOutlined, MoreOutlined  } from '@ant-design/icons';
import { CreateEntryProp } from './CreateEntry';

const MenuPanel = ({ setTitle, setText, text, title, bcolor, setBColor, disabled, setDisable, data, id, setData, setID, setToggle }: CreateEntryProp) => {

const showEntry = (data: any) =>{
    console.log(data);
    setTitle(data.head)
    setText(data.body)
    setID(data._id)
    setDisable(true)
    console.log(text,title)
    setBColor(data?.style?.body?.color)
}

const createNewHandle = () => {
    setTitle('')
    setText('')
    setDisable(false)
    setID('')
}

    return(
        <> 
             <button className='buttonM' onClick={()=> setToggle(false)}> <MoreOutlined /> </button>
             <UserInfo /> 
                <hr className='hrcss' />
                <button className='createbtn' onClick={createNewHandle}> Create New Entry + </button>
                <button className='search'><SearchOutlined /></button>
                <div className='entrydiv' >
                    {
                        data.map(( data : any ) => {
                            return (
                                <button className='entrycbtn' key={data._id} onClick={() => { showEntry(data) }} data-item="123" >
                                    <EntryCard title={data.head} text={data.body} key={data._id} onClick = {showEntry} style={data?.style?.body?.color} />
                                </button>
                            )
                        })
                    }
                </div>
        </>
    )
}

export default MenuPanel