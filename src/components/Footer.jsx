const Footer = () => {
  return (
    <footer className="mt-16">
      <div className="max-w-6xl mx-auto px-4 py-10 text-slate-500">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm">© {new Date().getFullYear()} Terra Tranquil. All rights reserved.</p>
          <div className="text-sm">Sustainable connections. Real impact.</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
