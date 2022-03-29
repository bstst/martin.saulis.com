import { Link } from "remix";
import { useOptionalUser } from "~/utils";

export default function Index() {
  const user = useOptionalUser();
  return (
    <main>
      <div>
        <div>
          <div>
            <div>
              <p>
                Check the README.md file for instructions on how to get this
                project deployed.
              </p>
              <div>
                {user ? (
                  <Link to="/notes">View Notes for {user.email}</Link>
                ) : (
                  <div>
                    <Link to="/join">Sign up</Link>
                    <Link to="/login">Log In</Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
