import { useEffect } from "react";
import Router from "next/router";

import Nav from "../components/nav";

import useUser from "../data/use-user";
import { login } from "../libs/auth";

export default function App() {
  const { user, mutate, loggedOut } = useUser();
  console.log(user, "weee");
  // if logged in, redirect to the dashboard
  useEffect(() => {
    if (user && !loggedOut) {
      Router.replace("/dashboard");
    }
  }, [user, loggedOut]);

  return (
    <div className="homepage">
      <Nav title="ACME" />
      <main>
        <h1>ACME!</h1>
        <p>Build Something Brilliant</p>
        <br />
        <button
          onClick={() => {
            login();
            mutate(); // after logging in, we revalidate the SWR
          }}
        >
          Login To Continue
        </button>
      </main>
    </div>
  );
}
