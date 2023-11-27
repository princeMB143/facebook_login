
import './App.css';

function App() {
  return (
    <div className="main-container">
        <h1 className='logo-text'>facebook</h1>
        <div className="face-book-container">
          <p className="heading-text">Log in to Facebook</p>
          <div className="input-box-container">
            <input type="text" placeholder="Email address or phone number" className="input-box" />
            <input type="password" placeholder="Password" className="input-box" />
            <button className="login-button">Log in</button>
            <a href='#forgot' className="forgot-text">Forgotten account?</a>
          </div> 
          <div>
            <p className='fancy'><span className='span'>or</span></p>
            </div>
            <button className='bottom-btn'>Create new account</button>
        </div>
    </div>
  );
}

export default App;
