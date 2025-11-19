function Contact() {
  return (
    <section id="contact" className="min-h-screen bg-slate-900 flex items-center justify-center">
      <div className="max-w-xl mx-auto px-4 w-full">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <p className="text-slate-300 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <form className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Name</label>
            <input
              className="w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2"
              placeholder="Seu nome"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              className="w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2"
              placeholder="seuemail@exemplo.com"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Message</label>
            <textarea
              rows={4}
              className="w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 resize-none"
              placeholder="Como posso te ajudar?"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-md bg-sky-500 hover:bg-sky-400 font-medium py-2"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
