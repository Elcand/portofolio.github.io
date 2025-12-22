import type { ReactNode } from "react";
import Header from "./components/layouts/header";
import Footer from "./components/layouts/footer";

type AppProps = {
  children: ReactNode;
};

function App({ children }: AppProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {children}
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
