import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

function Display() {
  const navigate = useNavigate();
  const [Class, setClass] = useState({});
  // const [data, setData] = useState(null);

  const handlesubmit = async (e) => {
    e.preventDefault();
    // console.log(Class)

    const response = await fetch('http://localhost:7098/check', {
      method: 'POST',
      body: JSON.stringify(Class),
      headers: { 'Content-Type': 'application/json' }
    })
    console.log(response.body)
// if you are  using async functions await will be used  on promise to pause further execution until the promise reach
// either the fullfilled or rejected state and returns syncs await operator wait for the resolution
// of the promise u can use it in the place of promise chaining to sequencely execute your logic

    // const data = await response.json();
    // navigate('/next-page', { state: { data: response } });
  // }
    
      const dataa = await response.json();
      // console.log(dataa)
      // Redirect to the "/nextpage" route with the data
      navigate('/nextpage',{state:{dataa}});
    
  }

    // setData(data);




    // const naviigate=()=>{
    //   
    // }

    const handleForm = (e) => {
      // console.log(e.target.value,e.target.name)
      setClass({ ...Class, [e.target.name]: e.target.value })
      //array destructure kia
      // setDig(e.target.Dig)
    }
    return (
      

        <body>
          <section> 
            <span /> <span /> <span /> <span /> <span /> <span /> <span />
            <span /> <span /> <span /> <span /> <span /> <span /> <span />
            <span /> <span /> <span /> <span /> <span /> <span /> <span />
            <span /> <span /> <span /> <span /> <span /> <span /> <span />
            <span /> <span /> <span /> <span /> <span /> <span /> <span />
            <span /> <span /> <span /> <span /> <span /> <span /> <span />
            <span /> <span /> <span /> <span /> <span /> <span /> <span />
            <span /> <span /> <span /> <span /> <span /> <span /> <span />
            <span /> <span /> <span /> <span /> <span /> <span /> <span />
            <span /> <span /> <span /> <span /> <span /> <span /> <span />
            <span /> <span /> <span /> <span /> <span /> <span /> <span />
            <span /> <span /> <span /> <span /> <span /> <span /> <span />
            <span /> <span /> <span /> <span /> <span /> <span /> <span />
            <span /> <span /> <span /> <span /> <span /> <span /> <span />
            <span /> <span /> <span /> <span /> <span /> <span /> <span />
            <span /> <span /> <span /> <span /> <span /> <span /> <span />
            <span /> <span /> <span /> <span /> <span /> <span /> <span />
            <span /> <span /> <span /> <span /> <span /> <span /> <span />
            <span /> <span /> <span /> <span /> <span /> <span /> <span />
            <span /> <span /> <span /> <span /> <span /> <span /> <span />
            <span /> <span /> <span /> <span /> <span /> <span /> <span />
            <span /> <span /> <span /> <span /> <span /> <span /> <span />
            <span /> <span /> <span /> <span /> <span /> <span /> <span />
            <span /> <span /> <span /> <span /> <span /> <span /> <span />
            <span /> <span /> <span /> <span /> <span /> <span /> <span />
            <span /> <span /> <span /> <span /> <span /> <span /> <span />
            <span /> <span /> <span /> <span /> <span /> <span /> <span />
            <span /> <span /> <span /> <span /> <span /> <span /> <span />
            <span /> <span /> <span /> <span /> <span /> <span /> <span />
            <span /> <span /> <span /> <span /> <span /> <span /> <span />
            <span /> <span /> <span /> <span /> <span /> <span /> <span />
            <span /> <span /> <span /> <span /> <span /> <span /> <span />
            <span /> <span /> <span /> <span /> <span /> <span /> <span />
            <span /> <span /> <span /> <span /> <span /> <span /> <span />
            <span /> <span /> <span /> <span /> <span /> <span /> <span />
            <span /> <span /> <span /> <span /> <span /> <span /> <span />
            <span /> <span /> <span /> <span /> <span /> <span /> <span />
            <span />
            <div className="signin">
              <div className="content">
                <h2>Sign In</h2>
                <div className="form">
                  <form  onSubmit={handlesubmit}>
                    {/* <p>{JSON.stringify(Class)}</p> */}
                    {/* <p>{JSON.stringify(Dig)}</p> */}

                    <div className="inputBox">
                      <input type="Number" name="ROLLNO" required onChange={handleForm} /> <i>Roll NO</i>
                    </div>
                    <br />
                    <div className="inputBox">
                      <input type="text" name="BATCH" required onChange={handleForm} /> <i>Class</i>
                    </div>
                    <br />
                    <div className="inputBox">
                      <input type="submit" />
                    </div><br />
                    <i>© by abhijit rajput</i>
                  </form>
                  {/* {Class && <NextPage data={Class} />} */}
                </div>
              </div>
            </div>
          </section>
        </body>
     
      )
  }
  export default Display