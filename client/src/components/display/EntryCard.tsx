import { useEffect } from 'react';
import './EntryCard.scss'

interface EntryCardProp {
    title: string,
    text: string,
}

const EntryCard = (prop: EntryCardProp) => {

    
    return (
        <div className='card'>
            <h2>{prop.title} </h2>
            <p>{prop.text.substring(0, 40)} ...</p>
        </div>
    )
}

export default EntryCard