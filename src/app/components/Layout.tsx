import { Outlet } from 'react-router';
import { Header } from './Header';
import { Footer } from './Footer';

export function Layout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <Header />
      <main className="min-h-[calc(100vh-128px)]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
