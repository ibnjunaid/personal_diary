import { useEffect } from 'react';
import './EntryCard.scss'

interface EntryCardProp {
    title: string,
    text: string,
    onClick : (e: any) => void,
    style: string 
}

const EntryCard = (prop: EntryCardProp) => {
    return (
        <div className= 'card' style={{background : prop.style }}>
            <h2 style={{color:'black', textAlign:'left'}}>{prop.title} </h2>
            <p>{prop.text.substring(0, 25)} ...</p>
        </div>
    )
}

export default EntryCard