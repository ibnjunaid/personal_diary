import { SaveOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons'
import React from 'react';
import Dropdown from 'react-dropdown';

import 'react-dropdown/style.css';

import './UserInfo.scss';

interface CreateEntryProp {
    setTitle: (a: string) => void,
    setText: (a: string) => void,
    text: string,
    title: string,
    setBColor: (a: string) => void
}

const CreateEntry = ({ setTitle, setText, text, title, setBColor }: CreateEntryProp) => {

    const date = new Date().toLocaleString() + ""

    const options = [
        { value: 'color1', label: 'Pink' },
        { value: 'color2', label: 'Blue' },
        { value: 'color3', label: 'Lilac' },
        { value: 'color4', label: 'Green' },
    ]
    const defaultOption = options[0];

    const submitToDataBase = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        const FullEntry = {
            text,
            title,
            date
        }
        fetch(`http://localhost:5000/`, {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(FullEntry)
        })
    }

    return (
        <>
            <p className='date'> {date}</p>

            <Dropdown className='buttonD' options={options} onChange={(e) => { setBColor(e.value)}} value={defaultOption} placeholder="Select an option" />
            <button onClick={submitToDataBase} type='submit' className='buttonS'><SaveOutlined /></button>
            <button className='buttonS' ><DeleteOutlined /></button>
            <button className='buttonS' ><EditOutlined /></button>
            <br />
            <input value={title} className='title' placeholder='Entry Name' onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setTitle(e.target.value) }} />
            <hr className='hrcss' />
            <textarea value={text} className='bodyTxt' placeholder='Enter your entry here ...' onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => { setText(e.target.value) }} />
        </>
    )
}
export default CreateEntry