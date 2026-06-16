import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as saree1_default, t as SiteNav } from "./SiteNav-BrzCYnEt.mjs";
import { n as hero_1_default, t as collection_bridal_default } from "./hero-1-B7lxaDBU.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/bridal-VQVPBn2g.js
var import_jsx_runtime = require_jsx_runtime();
function BridalPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteNav, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "min-h-screen bg-[var(--background)] text-[var(--foreground)] pt-12 pb-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1280px] px-6 md:px-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-[11px] uppercase tracking-[0.2em] text-[var(--mute)] mb-8",
					children: ["Home / ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[var(--foreground)]",
						children: "Bridal Edit"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative w-full aspect-[4/3] md:aspect-[21/9] bg-[var(--border)] overflow-hidden mb-16 rounded-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: collection_bridal_default,
						alt: "Bridal Collection",
						className: "w-full h-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center px-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] uppercase tracking-[0.4em] text-[var(--ivory)] mb-4",
							children: "The Wedding Edit"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "text-5xl md:text-7xl font-serif text-[var(--ivory)] font-light",
							children: "Bridal Silks"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-center max-w-2xl mx-auto mb-20",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-base leading-[1.9] text-[var(--mute)]",
						children: "For the most important day, a legacy woven in pure gold. The Abivara Bridal Collection features our most intricate and luxurious Kanchipuram and Banarasi silks, designed to be worn on your wedding day and cherished for generations."
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/saree/muhurtham-kanchipattu",
						className: "group block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "aspect-[4/5] overflow-hidden bg-[var(--secondary)] rounded-sm",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: hero_1_default,
								alt: "Muhurtham Silk",
								className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "eyebrow",
									children: "Deep Red & Antique Gold"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-2 text-2xl font-serif",
									children: "The Muhurtham Silk"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-[var(--mute)]",
									children: "₹ 85,000"
								})
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/saree/reception-banarasi",
						className: "group block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "aspect-[4/5] overflow-hidden bg-[var(--secondary)] rounded-sm",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: saree1_default,
								alt: "Reception Banarasi",
								className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "eyebrow",
									children: "Ivory & Silver Zari"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-2 text-2xl font-serif",
									children: "The Reception Banarasi"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-[var(--mute)]",
									children: "₹ 65,000"
								})
							]
						})]
					})]
				})
			]
		})
	})] });
}
//#endregion
export { BridalPage as component };
