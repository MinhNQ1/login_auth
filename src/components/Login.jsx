import { useState} from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username1, setUser] = useState("");
  const [password1, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username1);
    console.log(password1);

    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username1,
        password: password1,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.token) {
          localStorage.setItem("accessToken", res.token);
          navigate("/home");
        }
      });
  };

  return (
    <>
      <h2>Welcome to the page</h2>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="username"
            value={username1}
            onChange={(e) => setUser(e.target.value)}
            placeholder="Enter Username"
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password1}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}
