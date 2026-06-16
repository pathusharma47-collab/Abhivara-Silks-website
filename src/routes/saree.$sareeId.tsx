import { createFileRoute } from '@tanstack/react-router';
import { SiteNav } from '@/components/SiteNav';
import saree1 from '@/assets/saree1.png';
import saree2 from '@/assets/saree2.png';
import { useState } from 'react';

export const Route = createFileRoute('/saree/$sareeId')({
  component: SareeProductPage,
});

function SareeProductPage() {
  const { sareeId } = Route.useParams();
  // Convert slug to Title Case (e.g. cotton-sarees -> Cotton Sarees)
  const title = sareeId.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  const [mainImg, setMainImg] = useState(saree1);
  const images = [saree1, saree2];

  return (
    <>
      <SiteNav />
      <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] pt-12 pb-24">
        <div className="mx-auto max-w-[1280px] px-6 md:px-12">
          {/* Breadcrumbs */}
          <div className="text-[11px] uppercase tracking-[0.2em] text-[var(--mute)] mb-8">
            Home / Sarees / <span className="text-[var(--foreground)]">{title}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
            {/* Left: Images */}
            <div className="flex flex-col gap-4">
              <div className="w-full aspect-[4/5] bg-[var(--border)] overflow-hidden rounded-sm">
                <img src={mainImg} alt={title} className="w-full h-full object-cover transition-opacity duration-500" />
              </div>
              <div className="flex gap-4 overflow-x-auto pb-2">
                {images.map((img, i) => (
                  <button 
                    key={i} 
                    onClick={() => setMainImg(img)}
                    className={`w-24 aspect-[4/5] shrink-0 rounded-sm overflow-hidden border transition-all duration-300 ${mainImg === img ? 'border-[var(--bronze)]' : 'border-transparent opacity-60 hover:opacity-100'}`}
                  >
                    <img src={img} alt={`Thumbnail ${i + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Details */}
            <div className="flex flex-col pt-8 md:pt-12">
              <p className="eyebrow">Heritage Edition</p>
              <h1 className="mt-4 text-4xl md:text-5xl font-serif text-[var(--foreground)] leading-[1.1]">{title}</h1>
              
              <p className="mt-6 text-2xl font-sans text-[var(--foreground)] font-light">₹ 45,000</p>
              
              <p className="mt-8 text-base leading-[1.9] text-[var(--mute)]">
                A beautifully handwoven silk masterpiece featuring intricate pure zari work and an elegant contrasting border. Crafted over 45 days by our master weavers, this timeless heirloom embodies the quiet luxury and ancestral heritage of Abivara Silks.
              </p>

              <div className="mt-12 flex flex-col gap-4">
                <button 
                  className="w-full bg-[var(--bronze)] text-[var(--ivory)] py-4 text-[12px] uppercase tracking-[0.2em] font-medium transition-colors hover:bg-[var(--bronze-deep)] rounded-sm"
                  onClick={() => alert('Added to cart!')}
                >
                  Add to Cart
                </button>
                <button className="w-full border border-[var(--bronze)] text-[var(--foreground)] py-4 text-[12px] uppercase tracking-[0.2em] font-medium transition-colors hover:bg-[var(--foreground)] hover:text-[var(--background)] rounded-sm">
                  Buy Now
                </button>
              </div>

              <div className="mt-16 border-t border-[var(--border)] pt-8 space-y-8">
                <div>
                  <h3 className="text-[12px] uppercase tracking-[0.2em] font-semibold text-[var(--foreground)]">Product Details</h3>
                  <ul className="mt-4 space-y-2 text-sm text-[var(--mute)] list-disc pl-4 marker:text-[var(--bronze)]">
                    <li>Pure Mulberry Silk & Authentic Zari</li>
                    <li>Handwoven on traditional pit looms</li>
                    <li>Saree Length: 5.5 meters</li>
                    <li>Includes unstitched blouse piece (0.8m)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-[12px] uppercase tracking-[0.2em] font-semibold text-[var(--foreground)]">Care Instructions</h3>
                  <p className="mt-4 text-sm text-[var(--mute)] leading-relaxed">Dry clean only. Store in a cool, dry place wrapped in a soft muslin cloth to preserve the zari.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>
    </>
  );
}
