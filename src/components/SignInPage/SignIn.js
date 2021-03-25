import React from 'react';
import '../../css/SignInStyle.css';
function SignIn(){
    return(
            <div class = "container">
            <div class="row">
            <div class="col-md-6 mx-auto p-0">
                <div class="card">
                    <div class="login-box">
                        <div class="login-snip"> <input id="tab-1" type="radio" name="tab" class="sign-in" checked></input><label for="tab-1" class="tab">Login</label><input id="tab-2" type="radio" name="tab" class="sign-up"></input><label for="tab-2" class="tab">Sign Up</label>
                            <div class="login-space">
                                <div class="login">
                                    <div class="group"> <label for="user" class="label">Username</label> <input id="user" type="text" class="input" placeholder="Enter your username"></input> </div>
                                    <div class="group"> <label for="pass" class="label">Password</label> <input id="pass" type="password" class="input" data-type="password" placeholder="Enter your password"></input> </div>
                                    <br></br>
                                    <br></br>
                                    <div class="group"> <input type="submit" class="button" value="Sign In"></input> </div>
                                    <div class="hr"></div>
                                    <div class="foot"> <a href="#">Forgot Password?</a> </div>
                                </div>
                                <div class="sign-up-form">
                                    <div class="group"> <label for="user" class="label">Username</label> <input id="user" type="text" class="input" placeholder="Create your Username"></input> </div>
                                    <div class="group"> <label for="pass" class="label">Password</label> <input id="pass" type="password" class="input" data-type="password" placeholder="Create your password"></input> </div>
                                    <div class="group"> <label for="pass" class="label">Repeat Password</label> <input id="pass" type="password" class="input" data-type="password" placeholder="Repeat your password"></input> </div>
                                    <div class="group"> <label for="pass" class="label">Email Address</label> <input id="pass" type="text" class="input" placeholder="Enter your email address"></input> </div>
                                    <div class="group"> <input type="submit" class="button" value="Sign Up"></input> </div>
                                    <div class="hr"></div>
                                    <div class="foot"> <label for="tab-1">Already Member?</label> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default SignIn;