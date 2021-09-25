import './EntryCard.scss'

interface EntryCardProp{
    title: string,
    text: string,
    date: Date
}

const EntryCard = ( prop: EntryCardProp ) => {
    return(
        <div className='card'>
           <h2>{prop.title} </h2>
           <p>{prop.text.substring(0,70)}</p>
        </div>
    )
}

export default EntryCard