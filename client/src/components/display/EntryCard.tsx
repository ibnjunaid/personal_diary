import { useEffect } from 'react';
import './EntryCard.scss'

interface EntryCardProp {
    title: string,
    text: string,
}

const EntryCard = (prop: EntryCardProp) => {

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(`http://localhost:5000/`, {
                    method: 'GET',
                    mode: 'cors',
                });
                const data = await response.json();
                console.log(data);
            } catch (error) {
                throw error;
            }
        })()
    }, [])
    return (
        <div className='card'>
            <h2>{prop.title} </h2>
            <p>{prop.text.substring(0, 40)} ...</p>
        </div>
    )
}

export default EntryCard