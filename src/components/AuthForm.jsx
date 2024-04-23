import { Form, Link, redirect, useSearchParams } from "react-router-dom";

import classes from "./AuthForm.module.css";
import Button from "./Button";

function AuthForm() {
  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get("mode") === "login";
  function handleLogin(e) {
    e.preventDefault();
    alert("Successfully submitted!!! ");
  }

  return (
    <>
      <Form onSubmit={handleLogin} method="post" className={classes.form}>
        <h1>{isLogin ? "Log in" : "Create a new user"}</h1>

        <p>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required />
        </p>
        <p>
          <label htmlFor="image">Password</label>
          <input id="password" type="password" name="password" required />
        </p>
        <div className={classes.actions}>
          <Link to={`?mode=${isLogin ? "signup" : "login"}`}>
            {isLogin ? "Create new user" : "Login"}
          </Link>
          <Button>Save</Button>
        </div>
      </Form>
    </>
  );
}

export default AuthForm;
