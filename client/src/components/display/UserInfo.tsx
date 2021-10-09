import './UserInfo.scss';
import { StateContext } from '../../App';
import { useContext } from 'react';

const UserInfo = () => {

    const StateContextN = useContext(StateContext)
    console.log(StateContextN.state.userName)
    return (
        <>
            <img src={ StateContextN.state.displayPicture} className='image' alt='display picture alt'></img>
            <p className='input'> { localStorage.getItem('userName') }</p>
        </>
    )
}
export default UserInfo