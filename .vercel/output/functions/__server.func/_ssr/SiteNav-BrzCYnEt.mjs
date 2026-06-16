import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/SiteNav-BrzCYnEt.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var emblem_transparent_default = "/assets/emblem-transparent-C3sDwQ5L.png";
var saree1_default = "/assets/saree1-D0bxouyc.png";
var saree2_default = "/assets/saree2-DHvNxEaN.png";
var sareesMenu = {
	columns: [
		{
			title: "FABRIC",
			items: [
				"Chiffon Sarees",
				"Cotton Sarees",
				"Crepe Sarees",
				"Georgette Sarees",
				"Linen Sarees",
				"Sico Sarees",
				"Silk Sarees",
				"Tussar Sarees"
			]
		},
		{
			title: "PARTY AND BRIDAL",
			items: [
				"Banarasi Sarees",
				"Bandhani Sarees",
				"Baluchari Sarees",
				"Chanderi Sarees",
				"Fancy Sarees",
				"Gadwal Sarees",
				"Kanchipattu Sarees",
				"Kota Sarees",
				"Kuppadam Sarees",
				"Mangalagiri Sarees",
				"Narayanpet Sarees",
				"Paithani Sarees",
				"Pochampally Sarees"
			]
		},
		{
			title: "TYPE",
			items: [
				"Embroidery",
				"Hand Crafted Sarees",
				"Printed",
				"Painted",
				"Woven"
			]
		},
		{
			title: "NATURAL DYES",
			items: [
				"Ajrakh Sarees",
				"Kalamkari Sarees",
				"Bagru Sarees"
			]
		}
	],
	images: [saree1_default, saree2_default]
};
var links = [
	{
		label: "Bridal",
		href: "/bridal"
	},
	{
		label: "Sarees",
		href: "/#sarees",
		hasMegaMenu: true
	},
	{
		label: "Collections",
		href: "/#collections"
	}
];
function SiteNav() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [activeMenu, setActiveMenu] = (0, import_react.useState)(null);
	const [timeoutId, setTimeoutId] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 40);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	const handleMouseEnter = (label) => {
		if (timeoutId) clearTimeout(timeoutId);
		setActiveMenu(label);
	};
	const handleMouseLeave = () => {
		setTimeoutId(setTimeout(() => {
			setActiveMenu(null);
		}, 200));
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "relative z-50 bg-[#190D02]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: "mx-auto flex max-w-[1480px] items-center justify-between px-6 py-5 md:px-12 relative",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/",
				className: "flex items-center gap-3 group",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: emblem_transparent_default,
					alt: "Abivara Symbol",
					className: "h-10 w-auto md:h-12 transition-transform duration-700 group-hover:rotate-[8deg]"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-serif text-xl md:text-2xl tracking-[0.2em] uppercase text-white font-light",
					children: "Abivara"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "hidden items-center gap-10 text-[11px] uppercase tracking-[0.28em] text-white md:flex",
				children: [links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "py-4",
					onMouseEnter: () => l.hasMegaMenu && handleMouseEnter(l.label),
					onMouseLeave: () => l.hasMegaMenu && handleMouseLeave(),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: l.href,
						className: "link-underline flex items-center gap-1",
						children: [l.label, l.hasMegaMenu && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
							width: "10",
							height: "6",
							viewBox: "0 0 10 6",
							fill: "none",
							xmlns: "http://www.w3.org/2000/svg",
							className: `transition-transform duration-300 ${activeMenu === l.label ? "rotate-180" : ""}`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								d: "M1 1L5 5L9 1",
								stroke: "currentColor",
								strokeWidth: "1.2",
								strokeLinecap: "round",
								strokeLinejoin: "round"
							})
						})]
					}), l.hasMegaMenu && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: `absolute top-[100%] left-0 w-full bg-[var(--ivory)] text-[var(--foreground)] shadow-2xl transition-all duration-300 origin-top overflow-hidden border-t border-[var(--border)]
                    ${activeMenu === l.label ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"}`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto max-w-[1480px] px-6 py-12 md:px-12 grid grid-cols-12 gap-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "col-span-8 grid grid-cols-4 gap-8",
								children: sareesMenu.columns.map((col, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-[13px] font-serif uppercase tracking-widest text-[var(--bronze)] font-semibold mb-2",
										children: col.title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "flex flex-col gap-3",
										children: col.items.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
											onClick: () => setActiveMenu(null),
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
												to: `/saree/${item.toLowerCase().replace(/ /g, "-")}`,
												className: "text-[14px] text-gray-700 hover:text-[var(--bronze)] capitalize tracking-normal font-sans transition-colors",
												children: item
											})
										}, i))
									})]
								}, idx))
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "col-span-4 flex flex-col gap-4",
								children: sareesMenu.images.map((img, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "relative w-full h-[200px] overflow-hidden rounded-md group cursor-pointer border border-[var(--border)]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: img,
										alt: `Saree feature ${idx + 1}`,
										className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
									})
								}, idx))
							})]
						})
					})]
				}, l.label)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "link-underline",
					"aria-label": "Cart",
					children: "Cart (0)"
				}) })]
			})]
		})
	});
}
//#endregion
export { saree1_default as n, saree2_default as r, SiteNav as t };
