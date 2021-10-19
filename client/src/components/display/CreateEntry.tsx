import { SaveOutlined, DeleteOutlined, EditOutlined, ContainerOutlined, BgColorsOutlined  } from '@ant-design/icons'
import React, { useState } from 'react';
import Dropdown from 'react-dropdown';
import { Tooltip } from 'react-tippy';

import 'react-dropdown/style.css';
import 'react-tippy/dist/tippy.css'

import { EntrySchemaResponse } from '../../pages/Entries/Entriespage';

import './UserInfo.scss';

export interface CreateEntryProp {
    setTitle: (a: string) => void,
    setText: (a: string) => void,
    text: string,
    title: string,
    bcolor: string,
    setBColor: (a: string) => void,
    setDisable: (a: boolean) => void,
    disabled: boolean,
    data: Array<EntrySchemaResponse>,
    id: string,
    setData: (a: Array<EntrySchemaResponse>) => void,
    setID: (a: string) => void,
    setToggle: (a: boolean) => void
}


const CreateEntry = ({ setTitle, setText, text, title, bcolor, setBColor, disabled, setDisable, data, id, setData, setID }: CreateEntryProp) => {

    const date = new Date().toLocaleString() + ""

    const options = [
        { value: '#e6c2b8', label: 'Pink' },
        { value: '#88b9cc', label: 'Sky' },
        { value: '#c4afca', label: 'Lilac' },
        { value: '#9ed38e', label: 'Green' },
        { value: 'rgb(240, 253, 166)', label: 'Yellow' },
        { value: 'rgb(248, 148, 131)', label: 'Red' },
        { value: 'rgb(139, 138, 180)', label: 'Blue' },

    ]
    const defaultOption = bcolor;

    const submitToDataBase = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        const FullEntry = {
            "head": title,
            "body": text,
            "key": "615410b77517dc2d8b8c8435",
            "style": {
                "head": {
                    color: 'pink'
                },
                "body": {
                    color: bcolor
                }
            }
        }
        fetch(`/api/entry/create-entry`, {
            method: 'POST',
            body: JSON.stringify(FullEntry),
            headers: {
                'Content-Type': "application/json"
            }
        }).then((response: Response) => {
            response.json()
                .then(({ entry }: any) => {
                    setData([entry, ...data])
                })
        })
        setID('0')
    }

    const updateEntry = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        const FullEntry = {
            "id": id,
            "updatedDoc": {
                "head": title,
                "body": text,
                "key": "615410b77517dc2d8b8c8435",
                "style": {
                    "head": {
                        color: 'pink'
                    },
                    "body": {
                        color: bcolor
                    }
                }
            }
        }
        fetch(`/api/entry/update-entry`, {
            method: 'PATCH',
            body: JSON.stringify(FullEntry),
            headers: {
                'Content-Type': "application/json"
            }
        }).then((response: Response) => {
            response.json()
                .then(({ entry }: any) => {
                    setData([entry, ...data])
                    setData(data.filter((data) => data._id !== id))
                    setBColor(entry.style.body.color)
                })
        })
        setID('0')
    }

    const deleteEntry = (event: any) => {
        event.preventDefault()
        const ID = {
            "id": id
        }
        fetch(`http://localhost:5000/api/entry/delete-entry`, {
            method: 'DELETE',
            mode: 'cors',
            body: JSON.stringify(ID),
            headers: {
                'Content-Type': "application/json"
            }
        }).then((response: Response) => {
            response.json()
                .then(({ entry }: any) => {
                    setData(data.filter((entry) => entry._id !== id))
                    setTitle('')
                    setText('')
                })
        })
        setID('0')
    }

    return (
        <>
            <p className='date'> {date}</p>
            <div className='save'>
                <Tooltip title=' Save ' position='bottom'>
                    <button onClick={id == '' ? submitToDataBase : updateEntry} type='submit' className='buttonS '><SaveOutlined /></button>
                </Tooltip>
                <Tooltip title=' Delete ' position='bottom' >
                    <button className='buttonS' onClick={deleteEntry}><DeleteOutlined /></button>
                </Tooltip>
                    <button className='buttonS' onClick={() => setDisable(!disabled)}> {disabled ?
                        <Tooltip title='Edit ' position='bottom' >
                            <EditOutlined />                
                        </Tooltip>
                        :<Tooltip title=' Stop Editing ' position='bottom' >
                            <ContainerOutlined />                    
                        </Tooltip>
                    }</button>
                <Dropdown className='buttonD' options={options} onChange={(e) => { setBColor(e.value) }} value={defaultOption} placeholder="Select an option" />
            </div>
            <br />
            <input value={title} className='title' placeholder='Entry Name' onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setTitle(e.target.value) }} disabled={disabled} />
            <hr className='hrcss' />
            <textarea value={text} className='bodyTxt' placeholder='Your entry goes here ...' onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => { setText(e.target.value) }} disabled={disabled} />
        </>
    )
}
export default CreateEntry