import { Link } from 'react-router-dom';
import { LoginWithGoogle } from '../../components/login/login-with-google';
import { MyDiaryCard } from '../../components/login/my-diary-card';
import './Home.scss'


export function Home(){

    return(
        <div className="homepage-outer">
            <div className="homepage-inner">
                <MyDiaryCard/>
                <LoginWithGoogle/>
            </div>
                <Link to='/entry' style={{color:'black'}}> entry page</Link>
        </div>
    )
}

