import { Outlet } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useScrollToTop } from "@/hooks/useScrollToTop";

/**
 * Shell layout applied to every route: sticky navbar, routed page
 * content, and footer. Keeps page components focused on content only.
 */
export function MainLayout() {
  useScrollToTop();

  return (
    <div className="flex min-h-screen flex-col bg-sand">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
