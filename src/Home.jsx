import App from "./App";
import { AuthProvider } from "./AuthContext";

export default function Home() {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
};
