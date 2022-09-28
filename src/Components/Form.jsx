import React from "react";

function Form(){
    return(
    <div className="main">

<form action="
">
    <h2>Registation Form</h2>
<label htmlFor="Name">Name</label>
<div> <input type="text" placeholder="Enter Your Name" id="Name" className="input" /></div>
<label htmlFor="M">Mobile Number</label>
<div> <input type="text" placeholder="Enter Your Mobile Number" id="M" className="input" /></div>
<label htmlFor="E">E-Mail</label>
<div> <input type="Email" placeholder="Enter Your Mail Id" id="E" className="input" /></div>
<label htmlFor="W">Which Course To Buy</label>
<div> <select name="" id="W"><option value="">Software Developer</option>
<option value="" selected>Web Developer</option>
<option value="">Graphic Designer</option>
<option value="">Content Creater</option></select></div>
 <div><label htmlFor="">Gender</label></div>
<div> <label htmlFor="">Male</label><input type="radio" name="gender" /> <label htmlFor="">Female</label><input type="radio" name="gender" /></div>
<button className="btn">Submit</button>


</form>
    </div>
    )

    
}
export default Form;