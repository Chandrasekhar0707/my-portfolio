export default function Footer() {
  return (
    <footer className="border-t border-slate-200/70 dark:border-slate-800 py-8">
      <div className="max-w-6xl mx-auto px-6 text-center text-sm text-slate-500 dark:text-slate-400">
        <p>© {new Date().getFullYear()} Chandrasekhar Samal. All rights reserved.</p>
        <p className="mt-1 text-xs">Designed &amp; Developed by Chandrasekhar Samal</p>
      </div>
    </footer>
  );
}
