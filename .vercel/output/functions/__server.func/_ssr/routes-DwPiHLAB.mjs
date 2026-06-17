import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as SiteNav } from "./SiteNav-CanpzpGT.mjs";
import { n as hero_1_default, t as collection_bridal_default } from "./hero-1-B7lxaDBU.mjs";
import { n as AnimatePresence, t as motion } from "../_libs/framer-motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DwPiHLAB.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function LoadingScreen() {
	const [visible, setVisible] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		const t = setTimeout(() => setVisible(false), 2500);
		return () => clearTimeout(t);
	}, []);
	(0, import_react.useEffect)(() => {
		document.documentElement.style.overflow = visible ? "hidden" : "";
		return () => {
			document.documentElement.style.overflow = "";
		};
	}, [visible]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: visible && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: { opacity: 1 },
		exit: { opacity: 0 },
		transition: {
			duration: .8,
			ease: [
				.4,
				0,
				.2,
				1
			]
		},
		className: "fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ivory pointer-events-none will-change-[opacity]",
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col items-center gap-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: {
					opacity: 0,
					scale: .9,
					y: 20
				},
				animate: {
					opacity: 1,
					scale: 1,
					y: 0,
					rotate: [
						0,
						90,
						0
					]
				},
				transition: {
					duration: 1.8,
					ease: "easeInOut",
					delay: .2
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/assets/emblem-transparent-C3sDwQ5L.png",
					alt: "Abivara Symbol",
					className: "h-16 md:h-20 w-auto"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				className: "overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
					src: "/assets/logo-transparent-lSPFPLFY.png",
					alt: "Abivara Silks",
					initial: {
						opacity: 0,
						y: "100%"
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						duration: 1,
						ease: [
							.22,
							1,
							.36,
							1
						],
						delay: .5
					},
					className: "h-12 md:h-16 w-auto"
				})
			})]
		})
	}) });
}
var variants = {
	hidden: {
		opacity: 0,
		y: 28
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 1.1,
			ease: [
				.22,
				1,
				.36,
				1
			]
		}
	}
};
function Reveal({ children, delay = 0, className, as: Tag = "div" }) {
	const Comp = motion[Tag];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Comp, {
		className,
		variants,
		initial: "hidden",
		whileInView: "visible",
		viewport: {
			once: true,
			amount: .25
		},
		transition: { delay },
		children
	});
}
var hero_2_default = "/assets/hero-2-pLNJEhod.jpg";
var hero_3_default = "/assets/hero-3-BAr1qJj2.jpg";
var hero_4_default = "/assets/hero-4-B-kAOT6Q.jpg";
var craft_default = "/assets/craft-CuVRw1KX.jpg";
var editorial_default = "/assets/editorial-sVrHwt9f.jpg";
var collection_banarasi_default = "/assets/collection-banarasi-D7q4pQgP.jpg";
var collection_organza_default = "/assets/collection-organza-BpcGZxUp.jpg";
var collection_pochampally_default = "/assets/collection-pochampally-CHltwxjq.jpg";
var collections = [
	{
		title: "Bridal Silks",
		tag: "The Wedding Edit",
		img: collection_bridal_default
	},
	{
		title: "Banarasi Heritage",
		tag: "Ivory & Gold",
		img: collection_banarasi_default
	},
	{
		title: "Organza & Tissue",
		tag: "Festive Lightness",
		img: collection_organza_default
	},
	{
		title: "Pochampally Ikat",
		tag: "Geometry of Craft",
		img: collection_pochampally_default
	}
];
var weaves = [
	"Kanchipuram",
	"Banarasi",
	"Gadwal",
	"Pochampally",
	"Organza",
	"Tissue Silk"
];
var desktopHeroImages = [
	hero_1_default,
	hero_2_default,
	hero_3_default,
	hero_4_default
];
var mobileHeroImages = [
	hero_1_default,
	hero_2_default,
	hero_3_default,
	hero_4_default
];
function Index() {
	const [currentHero, setCurrentHero] = (0, import_react.useState)(0);
	const [isMobile, setIsMobile] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const checkMobile = () => setIsMobile(window.innerWidth < 768);
		checkMobile();
		window.addEventListener("resize", checkMobile);
		return () => window.removeEventListener("resize", checkMobile);
	}, []);
	(0, import_react.useEffect)(() => {
		const images = isMobile ? mobileHeroImages : desktopHeroImages;
		const timer = setInterval(() => {
			setCurrentHero((prev) => (prev + 1) % images.length);
		}, 5e3);
		return () => clearInterval(timer);
	}, [isMobile]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadingScreen, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteNav, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "bg-background text-foreground",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "relative w-full aspect-[3/4] md:aspect-video overflow-hidden bg-[#190D02]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
						initial: false,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
							src: isMobile ? mobileHeroImages[currentHero] : desktopHeroImages[currentHero],
							alt: `Model wearing a handwoven Abivara silk saree ${currentHero + 1}`,
							className: "absolute inset-0 h-full w-full object-contain md:object-cover object-center",
							initial: { x: "100%" },
							animate: { x: 0 },
							exit: { x: "-100%" },
							transition: {
								duration: 1,
								ease: "easeInOut"
							},
							drag: "x",
							dragConstraints: {
								left: 0,
								right: 0
							},
							dragElastic: .2,
							onDragEnd: (e, { offset, velocity }) => {
								const images = isMobile ? mobileHeroImages : desktopHeroImages;
								const swipe = Math.abs(offset.x) * velocity.x;
								if (swipe < -100 || offset.x < -50) setCurrentHero((prev) => (prev + 1) % images.length);
								else if (swipe > 100 || offset.x > 50) setCurrentHero((prev) => (prev - 1 + images.length) % images.length);
							}
						}, currentHero + (isMobile ? "-mobile" : "-desktop"))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute bottom-6 left-0 right-0 z-10 flex justify-center gap-3",
						children: (isMobile ? mobileHeroImages : desktopHeroImages).map((_, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setCurrentHero(idx),
							className: `h-2.5 w-2.5 rounded-full transition-all duration-300 ${idx === currentHero ? "bg-white scale-125" : "bg-white/50 hover:bg-white/80"}`,
							"aria-label": `Go to slide ${idx + 1}`
						}, idx))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "story",
					className: "px-4 py-16 md:px-12 md:py-40",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto grid max-w-[1280px] gap-16 md:grid-cols-12 md:gap-20",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							className: "md:col-span-5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "aspect-[4/5] overflow-hidden bg-secondary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: craft_default,
									alt: "Artisan weaving silk",
									loading: "lazy",
									className: "h-full w-full object-contain md:object-cover"
								})
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "md:col-span-6 md:col-start-7 md:pt-16",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "eyebrow",
									children: "Our Atelier"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
									delay: .1,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
										className: "mt-8 text-2xl sm:text-3xl leading-[1.1] md:text-6xl",
										children: [
											"Every thread",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											"carries a legacy."
										]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
									delay: .2,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-10 max-w-md text-base leading-[1.9] text-muted-foreground",
										children: "Abivara celebrates the timeless artistry of Indian silk weaving — slow, ancestral, and exacting. Each piece is composed in our atelier with master weavers from Kanchipuram, Varanasi, and the Deccan, then curated for the woman who chooses presence over noise."
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
									delay: .3,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#story",
										className: "mt-10 inline-block text-[11px] uppercase tracking-[0.32em] link-underline",
										children: "The Abivara Story"
									})
								})
							]
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "collections",
					className: "border-t border-border bg-ivory px-4 py-16 md:px-12 md:py-36",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-[1480px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-end justify-between gap-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow",
								children: "The Edits"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-6 text-2xl sm:text-3xl md:text-6xl",
								children: "Featured Collections"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#collections",
								className: "hidden text-[11px] uppercase tracking-[0.32em] link-underline md:inline-block",
								children: "View All"
							})]
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-16 grid gap-x-6 gap-y-16 md:grid-cols-12",
							children: collections.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: i * .05,
								className: i === 0 ? "md:col-span-7" : i === 1 ? "md:col-span-5 md:pt-24" : i === 2 ? "md:col-span-5" : "md:col-span-7 md:pt-16",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#",
									className: "group block hover-zoom",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "aspect-[4/5] md:aspect-[3/4] w-full overflow-hidden bg-secondary",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: c.img,
											alt: c.title,
											loading: "lazy",
											className: "h-full w-full object-contain md:object-cover transition-transform duration-700 hover:scale-105"
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-6 flex items-end justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "eyebrow",
											children: c.tag
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mt-3 text-2xl md:text-3xl",
											children: c.title
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[11px] uppercase tracking-[0.32em] text-bronze transition-transform duration-500 group-hover:translate-x-2",
											children: "Discover →"
										})]
									})]
								})
							}, c.title))
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: "weaves",
					className: "py-16 md:py-36",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "px-6 md:px-12",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "Signature Weaves"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-6 max-w-3xl text-2xl sm:text-3xl md:text-6xl",
							children: "Six houses of cloth, one quiet language."
						})] })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-16 overflow-x-auto pb-8 hide-scrollbar snap-x snap-mandatory",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "flex min-w-max gap-6 px-6 md:px-12",
							children: weaves.map((w, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "w-[65vw] max-w-[320px] shrink-0 md:w-[28vw] snap-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#",
									className: "block hover-zoom",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "aspect-[3/4] overflow-hidden bg-secondary",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: [
												collection_banarasi_default,
												collection_bridal_default,
												collection_organza_default,
												collection_pochampally_default,
												collection_banarasi_default,
												collection_bridal_default
											][i],
											alt: w,
											loading: "lazy",
											className: "h-full w-full object-cover"
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-5 flex items-baseline justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "text-2xl",
											children: w
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-[10px] uppercase tracking-[0.32em] text-muted-foreground",
											children: ["0", i + 1]
										})]
									})]
								})
							}, w))
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "relative h-[65vh] md:h-[100svh] w-full overflow-hidden",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: editorial_default,
							alt: "Abivara editorial campaign",
							loading: "lazy",
							className: "absolute inset-0 h-full w-full object-cover"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-black/15" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative z-10 flex h-full flex-col items-center justify-center px-6 text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] uppercase tracking-[0.4em] text-ivory",
									children: "The Spring Edit · MMXXVI"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
									delay: .15,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
										className: "mt-8 text-[12vw] leading-[0.95] text-ivory md:text-[8vw]",
										style: { fontWeight: 300 },
										children: ["The Art of ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
											className: "not-italic",
											children: "Celebration"
										})]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
									delay: .3,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#",
										className: "mt-12 inline-block border border-ivory/80 px-8 py-3.5 text-[11px] uppercase tracking-[0.32em] text-ivory transition-all duration-500 hover:bg-ivory hover:text-foreground",
										children: "View Campaign"
									})
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "bg-ivory px-4 py-16 md:px-12 md:py-40",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto grid max-w-[1280px] items-center gap-16 md:grid-cols-2 md:gap-24",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow",
								children: "The Hands Behind"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: .1,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
									className: "mt-8 text-3xl leading-[1.1] md:text-5xl",
									children: [
										"Pure silk.",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										"Pure mulberry zari.",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										"Pure patience."
									]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: .2,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-10 text-base leading-[1.9] text-muted-foreground",
									children: "A single Abivara saree takes between 21 and 90 days at the loom. We work only with weaving clusters who hold the GI mark, paying fairly for time and skill — because heritage should not be hurried."
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: .3,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
									className: "mt-12 grid grid-cols-3 gap-6 border-t border-border pt-10",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
											className: "eyebrow",
											children: "Looms"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
											className: "mt-3 font-serif text-3xl text-foreground",
											children: "42"
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
											className: "eyebrow",
											children: "Weavers"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
											className: "mt-3 font-serif text-3xl text-foreground",
											children: "128"
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
											className: "eyebrow",
											children: "Clusters"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
											className: "mt-3 font-serif text-3xl text-foreground",
											children: "06"
										})] })
									]
								})
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: .1,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "aspect-[4/5] overflow-hidden bg-secondary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: craft_default,
									alt: "Silk threads on the handloom",
									loading: "lazy",
									className: "h-full w-full object-cover"
								})
							})
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "border-t border-border px-4 py-16 md:px-12 md:py-32",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-3xl text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow",
								children: "In Her Words"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: .1,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
									className: "mt-10 font-serif text-2xl leading-[1.3] text-foreground md:text-5xl",
									children: "“There is a stillness to an Abivara saree — a sense that someone has waited a long time to give you something true.”"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: .2,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-10 text-[11px] uppercase tracking-[0.32em] text-muted-foreground",
									children: "Ananya R. · Bengaluru"
								})
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "journal",
					className: "bg-ivory px-4 py-16 md:px-12 md:py-32",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto grid max-w-[1280px] gap-16 md:grid-cols-2 md:gap-24",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "The Circle"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-6 text-3xl leading-[1.1] md:text-5xl",
							children: [
								"Join the",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"Abivara Circle."
							]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
							delay: .1,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-base leading-[1.9] text-muted-foreground",
								children: "Quiet dispatches on new collections, atelier stories, and private previews — sent twice a season."
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
								className: "mt-10 flex items-center gap-4 border-b border-foreground/60 pb-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "email",
									required: true,
									placeholder: "Your email address",
									className: "flex-1 bg-transparent text-base text-foreground placeholder:text-muted-foreground focus:outline-none"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "submit",
									className: "text-[11px] uppercase tracking-[0.32em] text-bronze-deep link-underline",
									children: "Subscribe"
								})]
							})]
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
					className: "border-t border-border bg-background px-6 py-16 md:px-12",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-[1480px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-1 gap-10 md:grid-cols-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "md:col-span-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "font-serif text-2xl text-foreground",
									children: ["Abivara ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-bronze",
										children: "Silks"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 max-w-xs text-sm leading-[1.8] text-muted-foreground",
									children: "A house of handwoven Indian silks. Crafted in India, worn the world over."
								})]
							}), [
								{
									h: "Collections",
									items: [
										"Bridal",
										"Banarasi",
										"Kanchipuram",
										"Organza"
									]
								},
								{
									h: "House",
									items: [
										"About",
										"Journal",
										"Stores",
										"Contact"
									]
								},
								{
									h: "Care",
									items: [
										"Shipping",
										"Returns",
										"Silk Care",
										"FAQ"
									]
								}
							].map((col) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow",
								children: col.h
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-6 space-y-3 text-sm text-foreground",
								children: col.items.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#",
									className: "link-underline",
									children: i
								}) }, i))
							})] }, col.h))]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-16 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-[11px] uppercase tracking-[0.28em] text-muted-foreground md:flex-row md:items-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "© MMXXVI Abivara Silks. All rights reserved." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Crafted in India · Worn Worldwide" })]
						})]
					})
				})
			]
		})
	] });
}
//#endregion
export { Index as component };
