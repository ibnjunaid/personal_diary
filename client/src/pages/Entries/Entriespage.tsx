import { useEffect, useState } from 'react';

import {EntrySchema} from '../../../../commons/interfaces/entrySchema';

import CreateEntry from '../../components/display/CreateEntry';
import NoEntry from '../../components/display/NoEntry';
import './Entriespage.scss';
import MenuPanel from '../../components/display/MenuPanel';
import UserSettings from '../../components/display/UserSettings';

export interface EntrySchemaResponse extends EntrySchema{
    _id : string,
    _v : string
}

const Entriespage = () => {
    const [title, setTitle] = useState<string>('')
    const [text, setText] = useState<string>('')
    const [bcolor, setBColor] = useState<string>('#88b9cc')
    const [data, setData] = useState<Array<EntrySchemaResponse>>([])
    const [disabled, setDisable] = useState<boolean>(false)
    const [id, setID] = useState<string>('0')
    const [toggle, setToggle] = useState<boolean>(true)
    

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

    return (
        <div className='container2'>

            <div className='leftpanel' style={{background : bcolor}}>
                {
                   id == '0' ? <NoEntry setBColor={setBColor}/> :
                 <CreateEntry setTitle={setTitle} setText={setText} title={title} text={text} bcolor={bcolor}
                        setBColor={setBColor} disabled={disabled} setDisable={setDisable} data={data} id={id} setData={setData} setID={setID}setToggle={setToggle}/> 
                }
            </div>
            <div className={ toggle? `rightpanel` : `rightpanel divs`}>
               {
               toggle ? 
                    <MenuPanel setTitle={setTitle} setText={setText} title={title} text={text} bcolor={bcolor}
                                setBColor={setBColor} disabled={disabled} setDisable={setDisable} data={data} id={id} 
                                setData={setData} setID={setID} setToggle={setToggle}/>
                :   <UserSettings setToggle={setToggle}/> 
                }
            </div>
        </div>
    )
}

export default Entriespage