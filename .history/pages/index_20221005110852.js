import { Button, Loader } from 'semantic-ui-react';
import LoginForm from '../components/LoginForm'
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Home() {
  //before, during and after
  const [loginState, setLoginState] = useState("before");
  var c = "blue"; //default
  const r = useRouter();
  var button_next = "click me to start"

  const Login = async() => {
    setLoginState("during");
    await new Promise(resolve => setTimeout(resolve, 2000));

    setLoginState("after");
    await new Promise(resolve => setTimeout(resolve, 2000));

    r.push("/dashboard");
  }

  return (
    <div>
      <LoginForm
        loginState = {loginState}
        onLoginClick = {()=>Login()}
      />
    </div>
  )
}
