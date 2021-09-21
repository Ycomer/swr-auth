import useUser from "../data/use-user";
import { login } from "../libs/auth";

export default function Nav({ title }) {
  const { user, loading, loggedOut, mutate } = useUser();
  
  let profile = null;
  if (loading) {
    profile = "loading...";
  }
  if (user) {
    profile = <img src={user.avatar} width={32} alt={user.name} />;
  }
  if (loggedOut) {
    profile = (
      <button
        onClick={() => {
          login();
          mutate();
        }}
      >
        Login
      </button>
    );
  }

  return (
    <>
      <nav>
        <h3>{title}</h3>
        {profile}
      </nav>
      <style jsx global>{`
        body {
          margin: 0;
          font-family: "SF Pro Text", "SF Pro Icons", "Helvetica Neue",
            "Helvetica", "Arial", sans-serif;
        }
        nav {
          display: flex;
          padding: 1rem;
          height: 65px;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #999;
          box-sizing: border-box;
        }
        nav h3 {
          margin: 0;
        }
        img {
          border-radius: 50%;
        }
        main {
          padding: 1rem;
        }
        .homepage main {
          text-align: center;
        }
      `}</style>
    </>
  );
}
