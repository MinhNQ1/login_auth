import { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

export default function Login() {
  const [username1, setUser] = useState("");
  const [password1, setPassword] = useState("");

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
      .then(console.log);
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
            placeholder="Password"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}
