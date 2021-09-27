import { SearchOutlined } from '@ant-design/icons'
import { useState } from 'react';
//import { Link } from 'react-router-dom';


import CreateEntry from '../../components/display/CreateEntry';
import EntryCard from '../../components/display/EntryCard';
import UserInfo from '../../components/display/UserInfo';
import './Entriespage.scss';


const Entriespage  =  ()  => {
    const [title, setTitle]  =  useState<string>('Title')
    const [text, setText]  =  useState<string>('lorum ipsum dolor sit amet constructor a')
    const [bcolor, setBColor]  =  useState<string>('color1')
    console.log(bcolor)

    return (
        <div className = 'container2'>

            <div className = {`leftpanel ${bcolor} `}>
                <CreateEntry setTitle = {setTitle} setText = {setText} title = {title} text = {text} setBColor={setBColor} />
            </div>
            <div className = 'rightpanel'>
                <UserInfo />
                <hr className = 'hrcss' />
                <button className = 'createbtn'> Create New Entry + </button>
                <button className = 'search'><SearchOutlined /></button>
                <div className = 'entrydiv' >
                    <button className = 'entrycbtn'><EntryCard title = {title} text = {text} /></button>
                    <button className = 'entrycbtn'><EntryCard title = {title} text = {text} /></button>
                    <button className = 'entrycbtn'><EntryCard title = {title} text = {text} /></button>
                    <button className = 'entrycbtn'><EntryCard title = {title} text = {text} /></button>
                </div>
            </div>
        </div>
    )
}

export default Entriespage