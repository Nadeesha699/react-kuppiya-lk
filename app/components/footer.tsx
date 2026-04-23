export const FooterSection = () => {
  return (
    <footer className="bg-black/80 backdrop-blur-md border-t border-zinc-800 text-zinc-400">
      <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <h1 className="text-white text-2xl font-bold">
            <span className="text-blue-500">K</span>UPPIYA
          </h1>
          <p className="text-sm mt-2">
            Daily facts, tech rumors & hidden stories in just 5 minutes.
          </p>
        </div>
        <div>
          <h2 className="text-white font-semibold mb-3">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Articles</li>
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
            <li>
              <a href="/terms" className="hover:text-white">
                Terms
              </a>
            </li>

            <li>
              <a href="/privacy" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-white font-semibold mb-3">Stay Updated</h2>
          <p className="text-sm">
            Get daily updates of facts, tech rumors, and hidden stories from Sri
            Lanka & the world.
          </p>
        </div>
      </div>
      <div className="border-t border-zinc-800 text-center py-4 text-xs text-zinc-500">
        <p>© 2026 Kuppiya — Stay Curious • Stay Updated</p>

        <p className="mt-1">
          Developed by
          <a className="text-blue-500 font-semibold"> Nadeesha Ruwandima</a>
        </p>
      </div>
    </footer>
  );
};
