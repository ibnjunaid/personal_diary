import { SearchOutlined } from '@ant-design/icons'
import { useEffect, useState } from 'react';
//import { Link } from 'react-router-dom';


import CreateEntry from '../../components/display/CreateEntry';
import EntryCard from '../../components/display/EntryCard';
import UserInfo from '../../components/display/UserInfo';
import './Entriespage.scss';


const Entriespage = () => {
    const [title, setTitle] = useState<string>('Title')
    const [text, setText] = useState<string>('lorum ipsum dolor sit amet constructor a')
    const [bcolor, setBColor] = useState<string>('color1')
    let data

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(`http://localhost:5000/`, {
                    method: 'GET',
                    mode: 'cors',
                });
                 data = await response.json();
                console.log(data);
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
                    {/* {
                        data.map((data : any) => {
                            return (
                                <button className='entrycbtn'><EntryCard title={title} text={text} /></button>
                            )
                        })
                    } */}
                    <button onClick={(e)=>{}} className='entrycbtn'><EntryCard title={title} text={text} /></button>
                </div>
            </div>
        </div>
    )
}

export default Entriespage