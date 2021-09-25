import './App.scss';

function App() {
  return (
    <div className="container1">
      <div className="title_div"><b>
        <h1>My Diary</h1>
        <p>- anonymous</p> {/* //TODO: display uname here with help of state */}
        </b>
      </div>
      <div className="button_div1">
        <button  className="signin">Sign in with google</button><br/>
      </div>
      <div className="button_div2">
        <button className="login">Don't have an accout? <b>Sign Up</b></button>
      </div>
      <div className="about">
        <button className="button3"> i </button></div>
    </div>
  );
}

export default App;