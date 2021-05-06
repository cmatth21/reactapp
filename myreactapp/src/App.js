import './App.css';

function App() {
  return (
    <>

    <main>
      <div className = "container">
        <div className = "left">
          <h1 className = "header">Learn to code by
            
            watching others
          </h1>
          <p className = "para">See how experienced developers solve problems in real-time.
            
          Watching scripted tutorials is great, but understanding how
              
          developers think is invaluable.
          </p>
        </div>
        <div className = "right">
          <button>
            <span className = "tryit">Try it free 7 days</span>
            <span> then $20/mo. thereafter</span>
          </button>
          <div className = "myForm">
            <form>
              <fieldset>
                <input type="text" id="fname" name="fname" placeholder="First Name"/>
                <input type="text" id="lname" name="lname" placeholder="Last Name"/>
                <input type="email" id="emailaddress" name="emailadd" placeholder="Email Address"/>
                <input type="text" id="pword" name="pword" placeholder="Password"/>
                <input type="submit" value="CLAIM YOUR FREE TRIAL"/>
                <span className = "disclaimer">By clicking the button, you are agreeing to our</span>
                <span className = "terms"> Terms and Services</span>
              </fieldset>
            </form>
          </div>

        </div>

      </div>

    </main>
      
    </>
  );
}

export default App;
