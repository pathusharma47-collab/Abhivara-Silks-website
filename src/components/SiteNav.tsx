import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import emblemAsset from "@/assets/emblem-transparent.png";
import logoAsset from "@/assets/logo-transparent.png";
import saree1Asset from "@/assets/saree1.png";
import saree2Asset from "@/assets/saree2.png";

const sareesMenu = {
  columns: [
    {
      title: "FABRIC",
      items: ["Chiffon Sarees", "Cotton Sarees", "Crepe Sarees", "Georgette Sarees", "Linen Sarees", "Sico Sarees", "Silk Sarees", "Tussar Sarees"],
    },
    {
      title: "PARTY AND BRIDAL",
      items: ["Banarasi Sarees", "Bandhani Sarees", "Baluchari Sarees", "Chanderi Sarees", "Fancy Sarees", "Gadwal Sarees", "Kanchipattu Sarees", "Kota Sarees", "Kuppadam Sarees", "Mangalagiri Sarees", "Narayanpet Sarees", "Paithani Sarees", "Pochampally Sarees"],
    },
    {
      title: "TYPE",
      items: ["Embroidery", "Hand Crafted Sarees", "Printed", "Painted", "Woven"],
    },
    {
      title: "NATURAL DYES",
      items: ["Ajrakh Sarees", "Kalamkari Sarees", "Bagru Sarees"],
    }
  ],
  images: [
    saree1Asset,
    saree2Asset
  ]
};

const links = [
  { label: "Bridal", href: "/bridal" },
  { label: "Sarees", href: "/#sarees", hasMegaMenu: true },
  { label: "Collections", href: "/#collections" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMouseEnter = (label: string) => {
    if (timeoutId) clearTimeout(timeoutId);
    setActiveMenu(label);
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      setActiveMenu(null);
    }, 200);
    setTimeoutId(id);
  };

  return (
    <header className="relative z-50 bg-[#190D02]">
      <nav className="mx-auto flex max-w-[1480px] items-center justify-between px-6 py-5 md:px-12 relative">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={emblemAsset}
            alt="Abivara Symbol"
            className="h-10 w-auto md:h-12 transition-transform duration-700 group-hover:rotate-[8deg]"
          />
          <span className="font-serif text-xl md:text-2xl tracking-[0.2em] uppercase text-white font-light">
            Abivara
          </span>
        </Link>
        <ul className="hidden items-center gap-10 text-[11px] uppercase tracking-[0.28em] text-white md:flex">
          {links.map((l) => (
            <li 
              key={l.label} 
              className="py-4"
              onMouseEnter={() => l.hasMegaMenu && handleMouseEnter(l.label)}
              onMouseLeave={() => l.hasMegaMenu && handleMouseLeave()}
            >
              <a href={l.href} className="link-underline flex items-center gap-1">
                {l.label}
                {l.hasMegaMenu && (
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" className={`transition-transform duration-300 ${activeMenu === l.label ? 'rotate-180' : ''}`}>
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </a>

              {/* MEGA MENU */}
              {l.hasMegaMenu && (
                <div 
                  className={`absolute top-[100%] left-0 w-full bg-[var(--ivory)] text-[var(--foreground)] shadow-2xl transition-all duration-300 origin-top overflow-hidden border-t border-[var(--border)]
                    ${activeMenu === l.label ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'}`}
                >
                  <div className="mx-auto max-w-[1480px] px-6 py-12 md:px-12 grid grid-cols-12 gap-8">
                    {/* Columns */}
                    <div className="col-span-8 grid grid-cols-4 gap-8">
                      {sareesMenu.columns.map((col, idx) => (
                        <div key={idx} className="flex flex-col gap-4">
                          <h3 className="text-[13px] font-serif uppercase tracking-widest text-[var(--bronze)] font-semibold mb-2">
                            {col.title}
                          </h3>
                          <ul className="flex flex-col gap-3">
                            {col.items.map((item, i) => (
                              <li key={i} onClick={() => setActiveMenu(null)}>
                                <Link to={`/saree/${item.toLowerCase().replace(/ /g, '-')}`} className="text-[14px] text-gray-700 hover:text-[var(--bronze)] capitalize tracking-normal font-sans transition-colors">
                                  {item}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    {/* Images */}
                    <div className="col-span-4 flex flex-col gap-4">
                      {sareesMenu.images.map((img, idx) => (
                        <div key={idx} className="relative w-full h-[200px] overflow-hidden rounded-md group cursor-pointer border border-[var(--border)]">
                          <img 
                            src={img} 
                            alt={`Saree feature ${idx + 1}`} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </li>
          ))}
          <li>
            <button className="link-underline" aria-label="Cart">Cart (0)</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}