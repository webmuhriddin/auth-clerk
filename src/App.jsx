import Auth from "./components/Auth";
import { useClerk } from "@clerk/clerk-react";
import Dashboard from "./components/Dashboard";

function App() {
  const { session } = useClerk();

  if (session) {
    return <Dashboard userData={session?.publicUserData} />;
  } else {
    return <Auth />;
  }

  return (
    <div>
      <Auth />
    </div>
  );
}

export default App;
