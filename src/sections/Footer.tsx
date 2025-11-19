function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-4">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-slate-400">
        <span>© {new Date().getFullYear()} Code by Joao. All rights reserved.</span>
      </div>
    </footer>
  )
}

export default Footer
