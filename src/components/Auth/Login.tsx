import Router from "next/router";

const Login = () => {
  return (
    <div className="overlay">
      <button
        id="loginBtn"
        onClick={() => {
          Router.push("/api/login");
        }}
      >
        Log In
      </button>
    </div>
  );
};

export default Login;
