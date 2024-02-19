import { SignOutButton } from "@clerk/clerk-react";

function Header() {
  return (
    <header className="flex justify-between items-center py-7">
      <div>
        <h1 className="font-bold text-4xl">My Auth</h1>
      </div>

      <form>
        <SignOutButton>
          <button className="py-2 px-7 bg-red-900 text-white font-bold">
            Logout
          </button>
        </SignOutButton>
      </form>
    </header>
  );
}

export default Header;
