import React from "react";
// import '../../App.css';
 import '../styles/signup.css';

export default function SignUp() {
    return <div className='sign-up'>
            <div class="form-container">
          <form>
            <div class="input-group">
              <label for="name">Name</label>
              <input type="text" id="name" name="name" />
            </div>
            <div class="input-group">
              <label for="email">Email</label>
              <input type="email" id="email" name="emal" />
            </div>
            <div class="input-group">
              <label for="password">Password</label>
              <input type="Password" id="Password" name="Password"/>
            </div>
          </form>
          <button>Join Now</button>
        </div>
    </div>
}