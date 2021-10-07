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
        </div>
    )
}
