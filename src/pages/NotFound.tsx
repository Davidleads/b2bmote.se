import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Sidan kunde inte hittas (404) | B2Bmote.se";
    const robots = document.createElement("meta");
    robots.name = "robots";
    robots.content = "noindex, follow";
    document.head.appendChild(robots);
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    return () => {
      document.title = prevTitle;
      robots.remove();
    };
  }, [location.pathname]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center px-4">
        <h1 className="mb-4 text-4xl font-bold">404 – Sidan kunde inte hittas</h1>
        <p className="mb-6 text-xl text-muted-foreground">
          Sidan du letar efter finns inte längre eller har flyttats.
        </p>
        <Link to="/" className="text-primary underline hover:text-primary/90">
          Tillbaka till startsidan
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
