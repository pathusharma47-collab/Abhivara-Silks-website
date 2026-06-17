import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as saree1_default, r as saree2_default, t as SiteNav } from "./SiteNav-CanpzpGT.mjs";
import { t as Route } from "./saree._sareeId-B_UiTqx4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/saree._sareeId-DktSDp8y.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function SareeProductPage() {
	const { sareeId } = Route.useParams();
	const title = sareeId.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
	const [mainImg, setMainImg] = (0, import_react.useState)(saree1_default);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteNav, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "min-h-screen bg-[var(--background)] text-[var(--foreground)] pt-12 pb-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1280px] px-6 md:px-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-[11px] uppercase tracking-[0.2em] text-[var(--mute)] mb-8",
				children: ["Home / Sarees / ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[var(--foreground)]",
					children: title
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-full aspect-[4/5] bg-[var(--border)] overflow-hidden rounded-sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: mainImg,
							alt: title,
							className: "w-full h-full object-cover transition-opacity duration-500"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory hide-scrollbar",
						children: [saree1_default, saree2_default].map((img, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setMainImg(img),
							className: `w-24 aspect-[4/5] shrink-0 snap-start rounded-sm overflow-hidden border transition-all duration-300 ${mainImg === img ? "border-[var(--bronze)]" : "border-transparent opacity-60 hover:opacity-100"}`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: img,
								alt: `Thumbnail ${i + 1}`,
								className: "w-full h-full object-cover"
							})
						}, i))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Heritage Edition"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 text-3xl md:text-5xl font-serif text-[var(--foreground)] leading-[1.1]",
						children: title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-2xl font-sans text-[var(--foreground)] font-light",
						children: "₹ 45,000"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-8 text-base leading-[1.9] text-[var(--mute)]",
						children: "A beautifully handwoven silk masterpiece featuring intricate pure zari work and an elegant contrasting border. Crafted over 45 days by our master weavers, this timeless heirloom embodies the quiet luxury and ancestral heritage of Abivara Silks."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-12 flex flex-col gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "w-full bg-[var(--bronze)] text-[var(--ivory)] py-4 text-[12px] uppercase tracking-[0.2em] font-medium transition-colors hover:bg-[var(--bronze-deep)] rounded-sm",
							onClick: () => alert("Added to cart!"),
							children: "Add to Cart"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "w-full border border-[var(--bronze)] text-[var(--foreground)] py-4 text-[12px] uppercase tracking-[0.2em] font-medium transition-colors hover:bg-[var(--foreground)] hover:text-[var(--background)] rounded-sm",
							children: "Buy Now"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-16 border-t border-[var(--border)] pt-8 space-y-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-[12px] uppercase tracking-[0.2em] font-semibold text-[var(--foreground)]",
							children: "Product Details"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-4 space-y-2 text-sm text-[var(--mute)] list-disc pl-4 marker:text-[var(--bronze)]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Pure Mulberry Silk & Authentic Zari" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Handwoven on traditional pit looms" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Saree Length: 5.5 meters" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Includes unstitched blouse piece (0.8m)" })
							]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-[12px] uppercase tracking-[0.2em] font-semibold text-[var(--foreground)]",
							children: "Care Instructions"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm text-[var(--mute)] leading-relaxed",
							children: "Dry clean only. Store in a cool, dry place wrapped in a soft muslin cloth to preserve the zari."
						})] })]
					})
				] })]
			})]
		})
	})] });
}
//#endregion
export { SareeProductPage as component };
