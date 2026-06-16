import { createFileRoute, Link } from '@tanstack/react-router';
import { SiteNav } from '@/components/SiteNav';
import bridalImg from '@/assets/collection-bridal.jpg';
import hero1 from '@/assets/hero-1.jpg';
import saree1 from '@/assets/saree1.png';

export const Route = createFileRoute('/bridal')({
  component: BridalPage,
});

function BridalPage() {
  return (
    <>
      <SiteNav />
      <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] pt-12 pb-24">
        <div className="mx-auto max-w-[1280px] px-6 md:px-12">
          {/* Breadcrumbs */}
          <div className="text-[11px] uppercase tracking-[0.2em] text-[var(--mute)] mb-8">
            Home / <span className="text-[var(--foreground)]">Bridal Edit</span>
          </div>

          {/* Hero Banner */}
          <div className="relative w-full aspect-[4/3] md:aspect-[21/9] bg-[var(--border)] overflow-hidden mb-16 rounded-sm">
            <img src={bridalImg} alt="Bridal Collection" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center px-4">
               <p className="text-[11px] uppercase tracking-[0.4em] text-[var(--ivory)] mb-4">The Wedding Edit</p>
               <h1 className="text-4xl md:text-7xl font-serif text-[var(--ivory)] font-light">Bridal Silks</h1>
            </div>
          </div>

          <div className="text-center max-w-2xl mx-auto mb-20">
             <p className="text-base leading-[1.9] text-[var(--mute)]">
                For the most important day, a legacy woven in pure gold. The Abivara Bridal Collection features our most intricate and luxurious Kanchipuram and Banarasi silks, designed to be worn on your wedding day and cherished for generations.
             </p>
          </div>

          {/* Bridal Collection Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
            <Link to="/saree/muhurtham-kanchipattu" className="group block">
              <div className="aspect-[4/5] overflow-hidden bg-[var(--secondary)] rounded-sm">
                 <img src={hero1} alt="Muhurtham Silk" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="mt-6 text-center">
                 <p className="eyebrow">Deep Red & Antique Gold</p>
                 <h3 className="mt-2 text-2xl font-serif">The Muhurtham Silk</h3>
                 <p className="mt-2 text-sm text-[var(--mute)]">₹ 85,000</p>
              </div>
            </Link>

            <Link to="/saree/reception-banarasi" className="group block">
              <div className="aspect-[4/5] overflow-hidden bg-[var(--secondary)] rounded-sm">
                 <img src={saree1} alt="Reception Banarasi" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="mt-6 text-center">
                 <p className="eyebrow">Ivory & Silver Zari</p>
                 <h3 className="mt-2 text-2xl font-serif">The Reception Banarasi</h3>
                 <p className="mt-2 text-sm text-[var(--mute)]">₹ 65,000</p>
              </div>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
