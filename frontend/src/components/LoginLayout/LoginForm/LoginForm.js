import { useRef } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./LoginForm.module.scss";

const LoginForm = (props) => {
  const navigate = useNavigate();
  const emailInputRef = useRef();

  const submitHandler = async (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;

    const fetchData = {
      email: enteredEmail,
    };

    const response = await fetch(`http://dellmatch-prod-alb-1086496184.us-east-1.elb.amazonaws.com/users/signin`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(fetchData),
    });

    const responseData = await response.json();

    localStorage.setItem("userData", JSON.stringify(responseData));

    navigate("/home");
  };

  return (
    <div className={styles.container}>
      <h1>Login</h1>
      <form onSubmit={submitHandler}>
        <div className={styles.field}>
          <input placeholder="Email Address" type="email" ref={emailInputRef} />
        </div>
        <div className={styles.actions}>
          <button>Login</button>
          <p>Or</p>
          <button>Sign in with your Dell account</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
