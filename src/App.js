import React,{useState} from 'react'



const App = () => {

    const [fname,setFname]=useState('')
    const [lname,setLname]=useState('')
    const [email,setEmail]=useState('')
    const [pswd,setPswd]=useState('')
    const [add,setAdd]=useState('')
    const [city,setCity]=useState('')
    const [states,setStates]=useState('')
    const [err,setErr]=useState('false')
    // const [fnameE,setFnamee]=useState('false')
    // const [lnameE,setLnamee]=useState('false')
    // const [emailE,setEmaile]=useState('false')
    // const [pswdE,setPswde]=useState('false')
    // const [addE,setAdde]=useState('false')
    // const [cityE,setCitye]=useState('false')
    // const [statesE,setStatese]=useState('false')



    // function loginHandler(e) {

    //   if (fname.length < 4 || lname.length < 4 || email.length < 4 || pswd.length < 10 || add.length < 10 || city.length < 4 || states.length < 4) {
    //     alert('Something is A Wrong')
    //   }
    //   else{
    //     alert('All Good')
    //   }
    //   e.preventDefault();
    // }

    // function fHandler(e) {
    //   let item = e.target.value;
    //   if (item.length < 4) {
    //     setFnamee(true);
    //   }
    //   else{
    //     setFnamee(false);
    //   }
    //   setFname(item)
    //   console.warn(e.target.value.length);
    // }
    
    // function lHandler(e) {
    //   let item = e.target.value;

    //   if (item.length < 4) {
    //     setLnamee(true);
    //   }
    //   else{
    //     setLnamee(false);
    //   }
    //   setPswd(item);
    //   console.warn(e.target.value.length)
    // }
    // function eHandler(e) {
    //     let item = e.target.value;
    //     if (item.length < 4) {
    //       setEmaile(true);
    //     }
    //     else{
    //       setEmaile(false);
    //     }
    //     setEmail(item)
    //     console.warn(e.target.value.length);
    //   }

    //   function pHandler(e) {
    //     let item = e.target.value;
    //     if (item.length < 10) {
    //       setPswde(true);
    //     }
    //     else{
    //       setPswde(false);
    //     }
    //     setPswd(item)
    //     console.warn(e.target.value.length);
    //   }
    //   function aHandler(e) {
    //     let item = e.target.value;
    //     if (item.length < 10) {
    //       setAdde(true);
    //     }
    //     else{
    //       setAdde(false);
    //     }
    //     setAdde(item)
    //     console.warn(e.target.value.length);
    //   }
    //   function cHandler(e) {
    //     let item = e.target.value;
    //     if (item.length < 10) {
    //       setCitye(true);
    //     }
    //     else{
    //       setCitye(false);
    //     }
    //     setAdde(item)
    //     console.warn(e.target.value.length);
    //   }
    //   function sHandler(e) {
    //     let item = e.target.value;
    //     if (item.length < 10) {
    //       setStatese(true);
    //     }
    //     else{
    //       setStatese(false);
    //     }
    //     setStates(item)
    //     console.warn(e.target.value.length);
    //   }
  

    const addForm=async()=>
    {
        if(!fname ||!lname || !email || !pswd || !add || !city|| !states )
        {

            setErr(true);
            return true
        }
        console.log(fname,lname,email,pswd,add,city,states);
        let result= await fetch("http://localhost:4000/Form",
        {
            method:'POST',
            body:JSON.stringify({fname,lname,email,pswd,add,city,states}),
            headers:
            {
                'Content-Type':'application/json'
            }
        });
         result=await result.json();
        console.log(result);
        alert("You Are Successfully Sign In")
    
}

  return (
    
    <div className='container'>
      <h1>Form</h1>
      <form>
      <div class="row">
  <div class="col">
    <label for="fname">First Name</label>
    <input type="text" class="form-control" placeholder="First name" aria-label="First name"
     value={fname} onChange={(e)=>
      setFname(e.target.value)} /> 
  </div>
  <div class="col">
  <label for="lname">Last Name</label>
    <input type="text" class="form-control" placeholder="Last name" aria-label="Last name"
     value={lname} onChange={(e)=>
      setLname(e.target.value)}/>
  </div>
</div>
<form class="row g-3">
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="email" class="form-control" id="inputEmail4"
     value={email} onChange={(e)=>
      setEmail(e.target.value)}/>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Password</label>
    <input type="password" class="form-control" id="inputPassword4"
     value={pswd} onChange={(e)=>
      setPswd(e.target.value)}/>
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"
     value={add} onChange={(e)=>
      setAdd(e.target.value)}/>
  </div>
  <div class="col-md-6">
    <label for="inputCity" class="form-label">City</label>
    <input type="text" class="form-control" id="inputCity"
     value={city} onChange={(e)=>
      setCity(e.target.value)}/>
  </div>
  <div class="col-md-4">
    <label for="inputState" class="form-label">State</label>
    <select id="inputState" class="form-select"
     value={states} onChange={(e)=>
      setStates(e.target.value)}>
      <option selected>Choose...</option>
      <option>Punjub</option>
      <option>Bihar</option>
      <option>Delhi</option>
      <option>Haryana</option>
    </select>
  </div>
  <div class="col-12">
    <button type="submit" class="btn btn-primary"onClick={addForm}>Sign in</button>
  </div>
</form>
</form>
    </div>
  )
}

export default App
