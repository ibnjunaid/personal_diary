import { SearchOutlined } from '@ant-design/icons'
import { useEffect, useState } from 'react';
//import { Link } from 'react-router-dom';
import {EntrySchema} from '../../../../commons/interfaces/entrySchema';

import CreateEntry from '../../components/display/CreateEntry';
import EntryCard from '../../components/display/EntryCard';
import UserInfo from '../../components/display/UserInfo';
import './Entriespage.scss';

interface EntrySchemaResponse extends EntrySchema{
   _id : string,
   _v : string
}

const Entriespage = () => {
    const [title, setTitle] = useState<string>('Title')
    const [text, setText] = useState<string>('lorum ipsum dolor sit amet constructor a')
    const [bcolor, setBColor] = useState<string>('color1')
    const [data, setTData] = useState<Array<EntrySchemaResponse>>([])

    
    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/entry/get-entries`, {
                    method: 'GET',
                    mode: 'cors',
                    headers:{
                        'Content-Type':"application/json"
                    }
                });
               let {data} = await response.json()
                setTData(data)
            } catch (error) {
                throw error;
            }
        })()
    }, [])

    return (
        <div className='container2'>

            <div className={`leftpanel ${bcolor} `}>
                <CreateEntry setTitle={setTitle} setText={setText} title={title} text={text} bcolor={bcolor} setBColor={setBColor} />
            </div>
            <div className='rightpanel'>
                <UserInfo />
                <hr className='hrcss' />
                <button className='createbtn'> Create New Entry + </button>
                <button className='search'><SearchOutlined /></button>
                <div className='entrydiv' >
                    {
                        data.map((data : any) => {
                            return (
                                <button className='entrycbtn' key={data._id}><EntryCard title={title} text={text} /></button>
                            )
                        })
                    }
                    <button onClick={(e)=>{}} className='entrycbtn'><EntryCard title={title} text={text} /></button>
                </div>
            </div>
        </div>
    )
}

export default Entriespage