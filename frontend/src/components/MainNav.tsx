import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";
import UserNameMenu from "./UserNameMenu";

function MainNav() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    <span className="flex items-center space-x-2">
      {isAuthenticated ? (
        <UserNameMenu />
      ) : (
        <Button
          variant="ghost"
          className="font-bold hover:bg-white hover:text-orange-500"
          onClick={async () => await loginWithRedirect()}
        >
          Log In
        </Button>
      )}
    </span>
  );
}

export default MainNav;
