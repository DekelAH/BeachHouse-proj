import Image from 'next/image'

const footerLinks = [
  { label: 'Menu', href: '#menu' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'About', href: '#about' },
  // { label: 'Reviews', href: '#reviews' },
  { label: 'Patio', href: '#patio' },
  { label: 'Contact', href: '#contact' },
]

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/thebeachhousecafecordovabay?igsh=amtlMXFwdWphY2Zw',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/share/1PDqvEtah8/',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer className="bg-navy text-white pt-14 pb-6">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 pb-10 border-b border-white/10">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Image
              src="/logo2.png"
              alt="The Beach House Café"
              width={64}
              height={64}
              className="h-16 w-16 rounded-full object-contain bg-[#f7f3ec]"
            />
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Fresh food and stunning views right where the sea meets the shore.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-secondary font-bold text-xs uppercase tracking-widest mb-5">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours + Social */}
          <div>
            <h3 className="text-secondary font-bold text-xs uppercase tracking-widest mb-3">
              Hours
            </h3>
            <p className="text-white font-medium text-sm">Monday – Wednesday: 08:00 – 15:00</p>
            <p className="text-white font-medium text-sm mb-8">
              Thursday – Sunday: 08:00 – 19:00
            </p>
            <h3 className="text-secondary font-bold text-xs uppercase tracking-widest mb-5">
              Follow Us
            </h3>
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-white/10 hover:bg-secondary hover:text-navy text-white rounded-full flex items-center justify-center transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-white/40 text-xs">
          <p>© {new Date().getFullYear()} The Beach House Café. All rights reserved.</p>
          <p>Made with ♥ by the sea</p>
        </div>
      </div>
    </footer>
  )
}
