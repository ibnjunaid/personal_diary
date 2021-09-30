import { SearchOutlined } from '@ant-design/icons'
import { datacatalog } from 'googleapis/build/src/apis/datacatalog';
import { useEffect, useState } from 'react';
//import { Link } from 'react-router-dom';
import {EntrySchema} from '../../../../commons/interfaces/entrySchema';

import CreateEntry from '../../components/display/CreateEntry';
import EntryCard from '../../components/display/EntryCard';
import UserInfo from '../../components/display/UserInfo';
import './Entriespage.scss';

export interface EntrySchemaResponse extends EntrySchema{
    _id : string,
    _v : string
}

const Entriespage = () => {
    const [title, setTitle] = useState<string>('')
    const [text, setText] = useState<string>('')
    const [bcolor, setBColor] = useState<string>('color1')
    const [data, setData] = useState<Array<EntrySchemaResponse>>([])
    const [disabled, setDisable] = useState<boolean>(false)
    const [id, setID] = useState<string>('')
    

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/entry/get-entries`, {
                    method: 'GET',
                    mode: 'cors',
                    headers:{
                        'Content-Type':"application/json"
                    }
                })
                let {data} = await response.json()
                setData(data)
            } catch (error) {
                throw error;
            }
        })()
    }, [])

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
    }

    return (
        <div className='container2'>

            <div className='leftpanel' style={{background : bcolor}}>
                <CreateEntry setTitle={setTitle} setText={setText} title={title} text={text} bcolor={bcolor}
                                setBColor={setBColor} disabled={disabled} setDisable={setDisable} data={data} id={id} setData={setData} />
            </div>
            <div className='rightpanel'>
                <UserInfo />
                <hr className='hrcss' />
                <button className='createbtn' onClick={createNewHandle}> Create New Entry + </button>
                <button className='search'><SearchOutlined /></button>
                <div className='entrydiv' >
                    {
                        data.map((data : any, index) => {
                            return (
                                <button className='entrycbtn' key={data._id} onClick={() => { showEntry(data) }} data-item="123" >
                                    <EntryCard title={data.head} text={data.body} key={data._id} onClick = {showEntry} style={data?.style?.body?.color}/>
                                </button>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Entriespage