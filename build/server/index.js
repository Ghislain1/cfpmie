import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { Link, NavLink, Outlet, ServerRouter, UNSAFE_withComponentProps, useLocation } from "react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Component, Suspense, createContext, forwardRef, memo, useCallback, useContext, useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Trans, useTranslation } from "react-i18next";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp, ChevronRight, Facebook, GraduationCap, Instagram, Mail, MessageCircleMore, Moon, Music2, Phone, Shield, Sparkles, Sun, TriangleAlert, Twitter, X, Youtube } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import i18n from "i18next";
import { cva } from "class-variance-authority";
//#region \0rolldown/runtime.js
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
//#endregion
//#region src/entry.server.tsx
var entry_server_exports = /* @__PURE__ */ __exportAll({
	default: () => handleRequest,
	streamTimeout: () => streamTimeout
});
var streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, _loadContext) {
	if (request.method.toUpperCase() === "HEAD") return new Response(null, {
		status: responseStatusCode,
		headers: responseHeaders
	});
	return new Promise((resolve, reject) => {
		let shellRendered = false;
		const userAgent = request.headers.get("user-agent");
		const readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
		let timeoutId = setTimeout(() => abort(), 6e3);
		const { pipe, abort } = renderToPipeableStream(/* @__PURE__ */ jsx(ServerRouter, {
			context: routerContext,
			url: request.url
		}), {
			[readyOption]() {
				shellRendered = true;
				const body = new PassThrough({ final(callback) {
					clearTimeout(timeoutId);
					timeoutId = void 0;
					callback();
				} });
				const stream = createReadableStreamFromReadable(body);
				responseHeaders.set("Content-Type", "text/html");
				pipe(body);
				resolve(new Response(stream, {
					headers: responseHeaders,
					status: responseStatusCode
				}));
			},
			onShellError(error) {
				reject(error);
			},
			onError(error) {
				responseStatusCode = 500;
				if (shellRendered) console.error(error);
			}
		});
	});
}
//#endregion
//#region src/components/layout/Footer.tsx
var socials = [
	{
		name: "Facebook",
		icon: Facebook,
		href: "#"
	},
	{
		name: "Instagram",
		icon: Instagram,
		href: "#"
	},
	{
		name: "YouTube",
		icon: Youtube,
		href: "#"
	},
	{
		name: "TikTok",
		icon: Music2,
		href: "#"
	},
	{
		name: "X",
		icon: Twitter,
		href: "#"
	}
];
function Footer({ onOpenDatenschutz }) {
	const { t } = useTranslation();
	return /* @__PURE__ */ jsx("footer", {
		className: "bg-primary-900 text-primary-50 dark:bg-gray-950",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "grid gap-8 sm:grid-cols-2 lg:grid-cols-4",
				children: [
					/* @__PURE__ */ jsxs("div", { children: [
						/* @__PURE__ */ jsx("h3", {
							className: "font-heading text-lg font-bold",
							children: "CFPMIE"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-2 text-sm text-primary-200 dark:text-primary-300",
							dangerouslySetInnerHTML: { __html: t("footer.description") }
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-1 text-xs italic text-primary-300 dark:text-primary-400",
							children: t("footer.motto")
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-4 flex gap-3",
							children: [socials.map((s) => {
								const Icon = s.icon;
								return /* @__PURE__ */ jsx("a", {
									href: s.href,
									target: "_blank",
									rel: "noopener noreferrer",
									"aria-label": s.name,
									className: "flex h-9 w-9 items-center justify-center rounded-full bg-primary-800 text-primary-200 transition hover:bg-primary-700 hover:text-white dark:bg-gray-800",
									children: /* @__PURE__ */ jsx(Icon, {
										size: 16,
										"aria-hidden": "true"
									})
								}, s.name);
							}), /* @__PURE__ */ jsx("button", {
								type: "button",
								onClick: onOpenDatenschutz,
								"aria-label": t("footer.datenschutz"),
								className: "flex h-9 w-9 items-center justify-center rounded-full bg-primary-800 text-primary-200 transition hover:bg-primary-700 hover:text-white dark:bg-gray-800",
								children: /* @__PURE__ */ jsx(Shield, {
									size: 16,
									"aria-hidden": "true"
								})
							})]
						})
					] }),
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
						className: "mb-4 font-heading text-sm font-bold uppercase tracking-wider",
						children: t("footer.formations")
					}), /* @__PURE__ */ jsxs("ul", {
						className: "space-y-2 text-sm",
						children: [
							/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
								to: "/formations/construction-metallique",
								className: "text-primary-200 transition hover:text-white dark:text-primary-300 dark:hover:text-white",
								children: t("footer.constructionMetallique")
							}) }),
							/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
								to: "/formations/gestion-finances-management",
								className: "text-primary-200 transition hover:text-white dark:text-primary-300 dark:hover:text-white",
								children: t("footer.gestionManagement")
							}) }),
							/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
								to: "/formations/electricite",
								className: "text-primary-200 transition hover:text-white dark:text-primary-300 dark:hover:text-white",
								children: t("footer.electricite")
							}) })
						]
					})] }),
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
						className: "mb-4 font-heading text-sm font-bold uppercase tracking-wider",
						children: t("footer.contact")
					}), /* @__PURE__ */ jsxs("ul", {
						className: "space-y-2 text-sm text-primary-200 dark:text-primary-300",
						children: [
							/* @__PURE__ */ jsx("li", { children: t("footer.address") }),
							/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
								href: "tel:+237659245821",
								className: "transition hover:text-white",
								children: "+237 659 245 821"
							}) }),
							/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
								href: "tel:+237674234872",
								className: "transition hover:text-white",
								children: "+237 674 234 872"
							}) }),
							/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
								href: "mailto:contact@cfpmie.com",
								className: "transition hover:text-white",
								children: "contact@cfpmie.com"
							}) }),
							/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
								href: "https://www.formationcfpmie.com",
								target: "_blank",
								rel: "noopener noreferrer",
								className: "transition hover:text-white",
								children: "www.formationcfpmie.com"
							}) })
						]
					})] }),
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
						className: "mb-4 font-heading text-sm font-bold uppercase tracking-wider",
						children: t("footer.usefulLinks")
					}), /* @__PURE__ */ jsxs("ul", {
						className: "space-y-2 text-sm",
						children: [
							/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
								to: "/a-propos",
								className: "text-primary-200 transition hover:text-white dark:text-primary-300 dark:hover:text-white",
								children: t("footer.about")
							}) }),
							/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
								to: "/contact",
								className: "text-primary-200 transition hover:text-white dark:text-primary-300 dark:hover:text-white",
								children: t("footer.contact")
							}) }),
							/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
								href: "https://wa.me/237670109235",
								target: "_blank",
								rel: "noopener noreferrer",
								className: "text-primary-200 transition hover:text-white dark:text-primary-300 dark:hover:text-white",
								children: t("footer.whatsapp")
							}) }),
							/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("button", {
								type: "button",
								onClick: onOpenDatenschutz,
								className: "cursor-pointer text-primary-200 transition hover:text-white dark:text-primary-300 dark:hover:text-white",
								children: t("footer.datenschutz")
							}) })
						]
					})] })
				]
			}), /* @__PURE__ */ jsxs("div", {
				className: "mt-10 border-t border-primary-700 pt-6 text-center text-xs text-primary-300 dark:border-gray-800 dark:text-primary-400",
				children: [/* @__PURE__ */ jsx("p", { children: t("footer.copyright", { year: (/* @__PURE__ */ new Date()).getFullYear() }) }), /* @__PURE__ */ jsx("p", {
					className: "mt-1",
					children: /* @__PURE__ */ jsx(Trans, {
						i18nKey: "footer.minefop",
						components: { 1: /* @__PURE__ */ jsx("strong", { className: "text-primary-100 dark:text-primary-200" }) }
					})
				})]
			})]
		})
	});
}
//#endregion
//#region src/components/common/SkipToContent.tsx
function SkipToContent() {
	const { t } = useTranslation();
	return /* @__PURE__ */ jsx("a", {
		href: "#main-content",
		className: "sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-primary-800 focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-white focus:shadow-lg",
		children: t("skipToContent")
	});
}
//#endregion
//#region src/hooks/useScrollToTop.ts
function useScrollToTop() {
	const { pathname } = useLocation();
	useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	}, [pathname]);
}
//#endregion
//#region src/hooks/useTheme.tsx
var ThemeContext = createContext(null);
function getInitialDark() {
	if (typeof window === "undefined") return false;
	const stored = localStorage.getItem("theme");
	if (stored) return stored === "dark";
	return window.matchMedia("(prefers-color-scheme: dark)").matches;
}
function ThemeProvider({ children }) {
	const [dark, setDark] = useState(getInitialDark);
	useEffect(() => {
		document.documentElement.classList.toggle("dark", dark);
		localStorage.setItem("theme", dark ? "dark" : "light");
	}, [dark]);
	return /* @__PURE__ */ jsx(ThemeContext.Provider, {
		value: [dark, setDark],
		children
	});
}
function useTheme() {
	const ctx = useContext(ThemeContext);
	if (!ctx) throw new Error("useTheme must be used within a <ThemeProvider>");
	return ctx;
}
//#endregion
//#region src/lib/utils.ts
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
//#endregion
//#region src/components/common/FireEffect.tsx
var EMBERS = [
	{
		left: "15%",
		delay: "0s",
		size: 3,
		color: "bg-amber-400"
	},
	{
		left: "30%",
		delay: "0.4s",
		size: 2,
		color: "bg-orange-500"
	},
	{
		left: "50%",
		delay: "0.8s",
		size: 4,
		color: "bg-yellow-300"
	},
	{
		left: "65%",
		delay: "0.2s",
		size: 2,
		color: "bg-red-500"
	},
	{
		left: "80%",
		delay: "0.6s",
		size: 3,
		color: "bg-amber-500"
	},
	{
		left: "40%",
		delay: "1s",
		size: 2,
		color: "bg-orange-400"
	},
	{
		left: "70%",
		delay: "1.2s",
		size: 3,
		color: "bg-yellow-400"
	},
	{
		left: "22%",
		delay: "0.9s",
		size: 2,
		color: "bg-red-400"
	}
];
function FireEffect() {
	return /* @__PURE__ */ jsxs("span", {
		className: "pointer-events-none absolute inset-0 overflow-hidden rounded-full",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ jsx("span", {
				className: "absolute bottom-1 left-1/4 h-5 w-3 -translate-x-1/2 animate-flame rounded-full bg-orange-500/30 blur-sm",
				style: { left: "35%" }
			}),
			/* @__PURE__ */ jsx("span", {
				className: "absolute bottom-1 left-2/3 h-4 w-2 -translate-x-1/2 animate-flame rounded-full bg-amber-400/25 blur-sm",
				style: {
					animationDelay: "0.3s",
					left: "60%"
				}
			}),
			EMBERS.map((ember, i) => /* @__PURE__ */ jsx("span", {
				className: `absolute -bottom-1 ${ember.color} animate-ember rounded-full blur-[2px]`,
				style: {
					left: ember.left,
					width: ember.size,
					height: ember.size,
					animationDelay: ember.delay
				}
			}, i))
		]
	});
}
var FireEffect_default = memo(FireEffect);
//#endregion
//#region src/components/layout/GhisHeader.tsx
var container = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { staggerChildren: .05 }
	}
};
var itemReveal = {
	hidden: {
		opacity: 0,
		y: -10
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			type: "spring",
			stiffness: 220,
			damping: 26
		}
	}
};
var mobileContainer = {
	closed: {
		opacity: 0,
		transition: { duration: .2 }
	},
	open: {
		opacity: 1,
		transition: { duration: .25 }
	}
};
var mobileOverlay = {
	closed: {
		opacity: 0,
		transition: { duration: .25 }
	},
	open: {
		opacity: 1,
		transition: { duration: .3 }
	}
};
var mobilePanel = {
	closed: {
		opacity: 0,
		x: "100%",
		transition: {
			type: "spring",
			stiffness: 350,
			damping: 32
		}
	},
	open: {
		opacity: 1,
		x: 0,
		transition: {
			type: "spring",
			stiffness: 350,
			damping: 32
		}
	}
};
var mobileLink = {
	closed: {
		opacity: 0,
		x: 40
	},
	open: (i) => ({
		opacity: 1,
		x: 0,
		transition: {
			delay: .06 + i * .04,
			type: "spring",
			stiffness: 200
		}
	})
};
var particles = [
	{
		left: "10%",
		delay: "0s",
		size: 2
	},
	{
		left: "30%",
		delay: "2s",
		size: 3
	},
	{
		left: "55%",
		delay: "4s",
		size: 2
	},
	{
		left: "75%",
		delay: "1.5s",
		size: 3
	},
	{
		left: "90%",
		delay: "3.5s",
		size: 2
	},
	{
		left: "20%",
		delay: "5s",
		size: 1
	},
	{
		left: "65%",
		delay: "0.8s",
		size: 2
	},
	{
		left: "45%",
		delay: "3s",
		size: 1
	}
];
function FloatingParticles() {
	return /* @__PURE__ */ jsx("div", {
		className: "absolute inset-0 overflow-hidden pointer-events-none",
		"aria-hidden": "true",
		children: particles.map((p, i) => /* @__PURE__ */ jsx("span", {
			className: "absolute bottom-0 animate-float rounded-full bg-primary-300/30 dark:bg-primary-400/20",
			style: {
				left: p.left,
				width: p.size,
				height: p.size,
				animationDelay: p.delay
			}
		}, i))
	});
}
function NoiseOverlay() {
	return /* @__PURE__ */ jsx("div", {
		className: "absolute inset-0 opacity-[0.03] pointer-events-none",
		style: {
			backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
			backgroundSize: "256px 256px"
		},
		"aria-hidden": "true"
	});
}
function ActiveGlow() {
	return /* @__PURE__ */ jsx(motion.span, {
		layoutId: "activeGlow",
		className: "absolute inset-0 rounded-xl bg-gradient-to-r from-primary-500/15 to-primary-400/10 dark:from-primary-400/20 dark:to-primary-300/10",
		transition: {
			type: "spring",
			stiffness: 400,
			damping: 30
		}
	});
}
function HoverUnderline() {
	return /* @__PURE__ */ jsx(motion.span, {
		className: "absolute -bottom-[3px] left-[10%] h-[2px] w-[80%] rounded-full bg-gradient-to-r from-primary-500 to-primary-400 dark:from-primary-400 dark:to-primary-300",
		layoutId: "hoverUnderline",
		transition: {
			type: "spring",
			stiffness: 350,
			damping: 25
		}
	});
}
function Hamburger({ open, toggle, ref }) {
	return /* @__PURE__ */ jsx("button", {
		ref,
		type: "button",
		className: "relative flex size-10 items-center justify-center rounded-xl transition-colors hover:bg-muted lg:hidden",
		onClick: toggle,
		"aria-label": open ? "Close menu" : "Open menu",
		"aria-expanded": open,
		"aria-controls": "mobile-menu",
		children: /* @__PURE__ */ jsxs("div", {
			className: "flex flex-col items-center justify-center gap-[5px]",
			children: [
				/* @__PURE__ */ jsx(motion.span, {
					animate: open ? {
						rotate: 45,
						y: 6.5
					} : {
						rotate: 0,
						y: 0
					},
					className: "block h-[2px] w-5 rounded-full bg-foreground dark:bg-white",
					transition: {
						type: "spring",
						stiffness: 350,
						damping: 22
					}
				}),
				/* @__PURE__ */ jsx(motion.span, {
					animate: open ? {
						opacity: 0,
						x: -8
					} : {
						opacity: 1,
						x: 0
					},
					className: "block h-[2px] w-5 rounded-full bg-foreground dark:bg-white",
					transition: {
						type: "spring",
						stiffness: 350,
						damping: 22
					}
				}),
				/* @__PURE__ */ jsx(motion.span, {
					animate: open ? {
						rotate: -45,
						y: -6.5
					} : {
						rotate: 0,
						y: 0
					},
					className: "block h-[2px] w-5 rounded-full bg-foreground dark:bg-white",
					transition: {
						type: "spring",
						stiffness: 350,
						damping: 22
					}
				})
			]
		})
	});
}
function GhisHeader() {
	const { t, i18n } = useTranslation();
	const [open, setOpen] = useState(false);
	const [dark, setDark] = useTheme();
	const [scrolled, setScrolled] = useState(false);
	const [hoveredLink, setHoveredLink] = useState(null);
	const menuRef = useRef(null);
	const buttonRef = useRef(null);
	const navLinks = [
		{
			to: "/",
			label: t("header.nav.home")
		},
		{
			to: "/formations/construction-metallique",
			label: t("header.nav.constructionMetallique")
		},
		{
			to: "/formations/gestion-finances-management",
			label: t("header.nav.gestionManagement")
		},
		{
			to: "/formations/electricite",
			label: t("header.nav.electricite")
		},
		{
			to: "/a-propos",
			label: t("header.nav.about")
		},
		{
			to: "/contact",
			label: t("header.nav.contact")
		}
	];
	const close = useCallback(() => setOpen(false), []);
	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 20);
		window.addEventListener("scroll", onScroll, { passive: true });
		onScroll();
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	useEffect(() => {
		if (!open) return;
		const handleEscape = (e) => {
			if (e.key === "Escape") {
				close();
				buttonRef.current?.focus();
			}
		};
		const handleClickOutside = (e) => {
			if (menuRef.current && !menuRef.current.contains(e.target) && buttonRef.current && !buttonRef.current.contains(e.target)) close();
		};
		document.addEventListener("keydown", handleEscape);
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("keydown", handleEscape);
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [open, close]);
	useEffect(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsxs("header", {
			className: cn("fixed top-0 right-0 left-0 z-50 transition-all duration-700", scrolled ? "shadow-[0_4px_30px_rgba(0,0,0,0.08)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.4)]" : ""),
			children: [
				/* @__PURE__ */ jsx("div", {
					className: "absolute inset-0 animate-gradient-shift transition-opacity duration-700",
					style: { background: scrolled ? "linear-gradient(135deg, rgba(232,245,233,0.95) 0%, rgba(255,255,255,0.98) 50%, rgba(232,245,233,0.9) 100%)" : "linear-gradient(135deg, rgba(232,245,233,0.85) 0%, rgba(255,255,255,0.95) 50%, rgba(200,230,201,0.8) 100%)" }
				}),
				/* @__PURE__ */ jsx("div", {
					className: "absolute inset-0 animate-gradient-shift transition-opacity duration-700 dark:opacity-100 opacity-0",
					style: { background: scrolled ? "linear-gradient(135deg, rgba(15,23,42,0.98) 0%, rgba(13,59,15,0.9) 50%, rgba(15,23,42,0.98) 100%)" : "linear-gradient(135deg, rgba(15,23,42,0.92) 0%, rgba(13,59,15,0.85) 50%, rgba(15,23,42,0.9) 100%)" }
				}),
				/* @__PURE__ */ jsx(NoiseOverlay, {}),
				/* @__PURE__ */ jsx(FloatingParticles, {}),
				/* @__PURE__ */ jsx("div", {
					className: "absolute inset-0",
					style: {
						backdropFilter: "blur(16px) saturate(180%)",
						WebkitBackdropFilter: "blur(16px) saturate(180%)"
					}
				}),
				/* @__PURE__ */ jsx("div", {
					className: cn("absolute bottom-0 right-0 left-0 h-[1px] transition-opacity duration-500", scrolled ? "opacity-100" : "opacity-0"),
					children: /* @__PURE__ */ jsx("div", {
						className: "h-full w-full animate-gradient-shift animate-border-glow",
						style: {
							background: "linear-gradient(90deg, transparent, var(--color-primary-400), var(--color-primary-500), var(--color-primary-400), transparent)",
							backgroundSize: "200% 100%"
						}
					})
				}),
				/* @__PURE__ */ jsxs("nav", {
					className: "relative mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8",
					"aria-label": t("header.ariaLabel"),
					children: [
						/* @__PURE__ */ jsxs(Link, {
							to: "/",
							className: "group flex items-center gap-2.5",
							onClick: close,
							"aria-label": t("header.homeAriaLabel"),
							children: [/* @__PURE__ */ jsxs(motion.div, {
								initial: {
									opacity: 0,
									scale: .8,
									rotate: -10
								},
								animate: {
									opacity: 1,
									scale: 1,
									rotate: 0
								},
								transition: {
									duration: .5,
									ease: "easeOut"
								},
								whileHover: {
									scale: 1.08,
									rotate: 5
								},
								className: "relative flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary-600 to-primary-800 text-white shadow-lg shadow-primary-800/20 dark:from-primary-500 dark:to-primary-700",
								children: [/* @__PURE__ */ jsx(GraduationCap, { size: 18 }), /* @__PURE__ */ jsx(motion.span, {
									className: "absolute -top-1 -right-1",
									initial: {
										opacity: 0,
										scale: 0
									},
									animate: {
										opacity: 1,
										scale: 1
									},
									transition: {
										delay: .6,
										duration: .3
									},
									children: /* @__PURE__ */ jsx(Sparkles, {
										size: 8,
										className: "text-primary-300 dark:text-primary-200"
									})
								})]
							}), /* @__PURE__ */ jsxs("div", {
								className: "flex flex-col",
								children: [/* @__PURE__ */ jsx("span", {
									className: "font-heading text-lg font-extrabold tracking-tight text-foreground",
									children: "CFPMIE"
								}), /* @__PURE__ */ jsx("span", {
									className: "text-[9px] leading-tight text-muted-foreground tracking-[0.12em] uppercase",
									children: t("header.logoSubtitle")
								})]
							})]
						}),
						/* @__PURE__ */ jsxs(motion.div, {
							variants: container,
							initial: "hidden",
							animate: "visible",
							className: "hidden items-center lg:flex",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "flex items-center gap-0.5",
									children: navLinks.map((link) => /* @__PURE__ */ jsx(motion.div, {
										variants: itemReveal,
										children: /* @__PURE__ */ jsx(NavLink, {
											to: link.to,
											end: link.to === "/",
											onClick: close,
											onMouseEnter: () => setHoveredLink(link.to),
											onMouseLeave: () => setHoveredLink(null),
											className: ({ isActive }) => cn("relative rounded-xl px-3.5 py-2 text-sm font-medium transition-colors", isActive ? "text-primary-800 dark:text-primary-300" : "text-muted-foreground hover:text-foreground"),
											children: ({ isActive }) => /* @__PURE__ */ jsxs("span", {
												className: "relative inline-flex items-center",
												children: [
													isActive && /* @__PURE__ */ jsx(ActiveGlow, {}),
													/* @__PURE__ */ jsx("span", {
														className: "relative z-10",
														children: link.label
													}),
													isActive && /* @__PURE__ */ jsx(motion.span, {
														className: "absolute -bottom-[3px] left-[20%] h-[2px] w-[60%] rounded-full bg-gradient-to-r from-primary-500 to-primary-400 dark:from-primary-400 dark:to-primary-300",
														layoutId: "activeUnderline",
														transition: {
															type: "spring",
															stiffness: 400,
															damping: 30
														}
													}),
													!isActive && hoveredLink === link.to && /* @__PURE__ */ jsx(HoverUnderline, {})
												]
											})
										})
									}, link.to))
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "ml-4 flex items-center gap-2 pl-4 border-l border-border/60",
									children: [/* @__PURE__ */ jsx(motion.button, {
										type: "button",
										onClick: () => setDark(!dark),
										whileHover: { scale: 1.05 },
										whileTap: { scale: .92 },
										className: "flex size-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-white/60 hover:text-foreground dark:hover:bg-white/5",
										"aria-label": dark ? t("header.theme.light") : t("header.theme.dark"),
										children: /* @__PURE__ */ jsx(motion.div, {
											initial: {
												rotate: -90,
												opacity: 0
											},
											animate: {
												rotate: 0,
												opacity: 1
											},
											transition: { duration: .25 },
											children: dark ? /* @__PURE__ */ jsx(Sun, {
												size: 15,
												"aria-hidden": "true"
											}) : /* @__PURE__ */ jsx(Moon, {
												size: 15,
												"aria-hidden": "true"
											})
										}, dark ? "sun" : "moon")
									}), /* @__PURE__ */ jsx(motion.button, {
										type: "button",
										onClick: () => i18n.changeLanguage(i18n.language === "fr" ? "en" : "fr"),
										whileHover: { scale: 1.05 },
										whileTap: { scale: .92 },
										className: "rounded-lg px-2.5 py-1 text-xs font-bold text-muted-foreground transition-colors hover:bg-white/60 hover:text-foreground dark:hover:bg-white/5",
										"aria-label": i18n.language === "fr" ? "English" : "Français",
										children: i18n.language === "fr" ? "EN" : "FR"
									})]
								}),
								/* @__PURE__ */ jsxs(motion.a, {
									href: "https://wa.me/237670109235",
									target: "_blank",
									rel: "noopener noreferrer",
									variants: itemReveal,
									whileHover: { scale: 1.04 },
									whileTap: { scale: .96 },
									className: "relative ml-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary-700 to-primary-600 px-4 py-2 text-sm font-bold text-white shadow-lg shadow-primary-800/30 transition-shadow hover:shadow-primary-800/40 dark:from-primary-600 dark:to-primary-500 dark:shadow-primary-700/30",
									children: [
										/* @__PURE__ */ jsx(Phone, {
											size: 13,
											"aria-hidden": "true"
										}),
										t("header.whatsapp"),
										/* @__PURE__ */ jsx(FireEffect_default, {})
									]
								})
							]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-1 lg:hidden",
							children: [
								/* @__PURE__ */ jsx(motion.button, {
									type: "button",
									onClick: () => setDark(!dark),
									whileTap: { scale: .92 },
									className: "flex size-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-white/60 hover:text-foreground dark:hover:bg-white/5",
									"aria-label": dark ? t("header.theme.light") : t("header.theme.dark"),
									children: dark ? /* @__PURE__ */ jsx(Sun, {
										size: 15,
										"aria-hidden": "true"
									}) : /* @__PURE__ */ jsx(Moon, {
										size: 15,
										"aria-hidden": "true"
									})
								}),
								/* @__PURE__ */ jsx(motion.button, {
									type: "button",
									onClick: () => i18n.changeLanguage(i18n.language === "fr" ? "en" : "fr"),
									whileTap: { scale: .92 },
									className: "rounded-lg px-2.5 py-1 text-xs font-bold text-muted-foreground transition-colors hover:bg-white/60 hover:text-foreground dark:hover:bg-white/5",
									"aria-label": i18n.language === "fr" ? "English" : "Français",
									children: i18n.language === "fr" ? "EN" : "FR"
								}),
								/* @__PURE__ */ jsx(Hamburger, {
									open,
									toggle: () => setOpen(!open),
									ref: buttonRef
								})
							]
						})
					]
				})
			]
		}),
		/* @__PURE__ */ jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxs(motion.div, {
			variants: mobileContainer,
			initial: "closed",
			animate: "open",
			exit: "closed",
			className: "fixed inset-0 z-40",
			children: [/* @__PURE__ */ jsx(motion.div, {
				variants: mobileOverlay,
				className: "absolute inset-0 bg-black/40 backdrop-blur-sm",
				"aria-hidden": "true",
				onClick: close
			}), /* @__PURE__ */ jsxs(motion.div, {
				ref: menuRef,
				id: "mobile-menu",
				role: "dialog",
				"aria-modal": open,
				"aria-label": t("header.ariaLabel"),
				variants: mobilePanel,
				className: "absolute top-0 right-0 flex h-full w-full max-w-sm flex-col bg-white dark:bg-gray-950 shadow-2xl",
				style: { borderLeft: "1px solid var(--border)" },
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center justify-between px-6 pt-6 pb-3 border-b border-border/60",
						children: [/* @__PURE__ */ jsx("span", {
							className: "text-[11px] font-semibold text-muted-foreground tracking-[0.15em] uppercase",
							children: t("header.ariaLabel")
						}), /* @__PURE__ */ jsx("button", {
							type: "button",
							onClick: close,
							className: "flex size-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
							"aria-label": "Close menu",
							children: /* @__PURE__ */ jsx("svg", {
								width: "16",
								height: "16",
								viewBox: "0 0 16 16",
								fill: "none",
								stroke: "currentColor",
								strokeWidth: "1.5",
								children: /* @__PURE__ */ jsx("path", { d: "M4 4l8 8M12 4l-8 8" })
							})
						})]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "flex-1 overflow-y-auto px-4 py-4",
						children: /* @__PURE__ */ jsx("div", {
							className: "flex flex-col gap-1",
							children: navLinks.map((link, i) => /* @__PURE__ */ jsx(motion.div, {
								variants: mobileLink,
								initial: "closed",
								animate: "open",
								exit: "closed",
								custom: i,
								children: /* @__PURE__ */ jsx(NavLink, {
									to: link.to,
									end: link.to === "/",
									onClick: close,
									className: ({ isActive }) => cn("group relative flex items-center justify-between overflow-hidden rounded-xl px-4 py-3.5 text-sm font-medium transition-all", isActive ? "text-primary-800 dark:text-primary-300" : "text-foreground hover:bg-muted"),
									children: ({ isActive }) => /* @__PURE__ */ jsxs(Fragment, { children: [
										isActive && /* @__PURE__ */ jsx(motion.span, {
											layoutId: "mobileActiveBg",
											className: "absolute inset-0 bg-gradient-to-r from-primary-50 to-primary-50/50 dark:from-primary-900/40 dark:to-primary-900/20",
											transition: {
												type: "spring",
												stiffness: 400,
												damping: 30
											}
										}),
										/* @__PURE__ */ jsxs("span", {
											className: "relative flex items-center gap-3",
											children: [/* @__PURE__ */ jsx("span", { className: cn("h-1.5 w-1.5 rounded-full transition-all duration-300", isActive ? "bg-primary-500 shadow-[0_0_8px_rgba(76,175,80,0.5)] scale-100" : "bg-border scale-0") }), link.label]
										}),
										/* @__PURE__ */ jsx(ChevronRight, {
											size: 14,
											className: cn("relative transition-all duration-300", isActive ? "opacity-100 translate-x-0 text-primary-500" : "opacity-0 -translate-x-2")
										})
									] })
								})
							}, link.to))
						})
					}),
					/* @__PURE__ */ jsx("div", {
						className: "px-4 pb-6 pt-4 border-t border-border/60",
						children: /* @__PURE__ */ jsxs(motion.a, {
							href: "https://wa.me/237670109235",
							target: "_blank",
							rel: "noopener noreferrer",
							variants: mobileLink,
							initial: "closed",
							animate: "open",
							exit: "closed",
							custom: navLinks.length,
							whileTap: { scale: .98 },
							className: "relative flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary-700 to-primary-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-primary-800/30 dark:from-primary-600 dark:to-primary-500",
							children: [
								/* @__PURE__ */ jsx(Phone, {
									size: 15,
									"aria-hidden": "true"
								}),
								t("header.whatsapp"),
								/* @__PURE__ */ jsx(FireEffect_default, {})
							]
						})
					})
				]
			})]
		}) }),
		/* @__PURE__ */ jsx("div", {
			className: "h-[57px]",
			"aria-hidden": "true"
		})
	] });
}
//#endregion
//#region src/components/ui/FloatingButtons.tsx
var ITEMS = [
	{
		labelKey: "floatingButtons.phone",
		icon: Phone,
		href: "tel:00237670109235"
	},
	{
		labelKey: "floatingButtons.email",
		icon: Mail,
		href: "mailto:contact@cfpmie.com"
	},
	{
		labelKey: "floatingButtons.whatsApp",
		icon: MessageCircleMore,
		href: "https://wa.me/237670109235"
	}
];
function FloatingButtons() {
	const { t } = useTranslation();
	return /* @__PURE__ */ jsxs("div", {
		className: "fixed bottom-6 right-6 z-50 flex flex-col-reverse items-end gap-3",
		children: [/* @__PURE__ */ jsx("button", {
			type: "button",
			onClick: useCallback(() => {
				window.scrollTo({
					top: 0,
					behavior: "smooth"
				});
			}, []),
			"aria-label": "Scroll to top",
			className: "flex h-12 w-12 items-center justify-center rounded-full bg-primary-800 text-white shadow-lg transition-colors hover:bg-primary-700 dark:bg-primary-600 dark:hover:bg-primary-500",
			children: /* @__PURE__ */ jsx(ArrowUp, { className: "h-5 w-5" })
		}), ITEMS.map(({ labelKey, href, icon: Icon }) => /* @__PURE__ */ jsx("a", {
			href,
			title: t(labelKey),
			target: href.startsWith("http") ? "_blank" : void 0,
			rel: href.startsWith("http") ? "noopener noreferrer" : void 0,
			className: "flex h-12 w-12 items-center justify-center rounded-full bg-primary-800 text-white shadow-lg transition-colors hover:bg-primary-700 dark:bg-primary-600 dark:hover:bg-primary-500",
			children: /* @__PURE__ */ jsx(Icon, { className: "h-5 w-5" })
		}, labelKey))]
	});
}
//#endregion
//#region src/components/ui/DatenschutzModal.tsx
var backdropVariants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1 }
};
var modalVariants = {
	hidden: {
		y: 80,
		opacity: 0,
		rotate: -.5
	},
	visible: {
		y: 0,
		opacity: 1,
		rotate: 0,
		transition: {
			type: "spring",
			damping: 22,
			stiffness: 180,
			mass: .7
		}
	},
	exit: {
		y: 60,
		opacity: 0,
		rotate: .3,
		transition: {
			duration: .3,
			ease: "easeIn"
		}
	}
};
var offsets = [
	-20,
	24,
	-16,
	28,
	-12,
	18,
	-22,
	20
];
var contentVariants = {
	hidden: (i) => ({
		opacity: 0,
		y: 30,
		x: offsets[i % offsets.length],
		rotate: i % 2 === 0 ? .8 : -.8
	}),
	visible: (i) => ({
		opacity: 1,
		y: 0,
		x: 0,
		rotate: 0,
		transition: {
			delay: .12 + i * .07,
			duration: .6,
			ease: [
				.25,
				.46,
				.45,
				.94
			]
		}
	})
};
var sections = [
	"overview",
	"dataCollected",
	"purpose",
	"cookies",
	"rights",
	"contact"
];
function DatenschutzModal({ isOpen, onClose }) {
	const { t } = useTranslation();
	useEffect(() => {
		const handleKey = (e) => {
			if (e.key === "Escape") onClose();
		};
		if (isOpen) window.addEventListener("keydown", handleKey);
		return () => window.removeEventListener("keydown", handleKey);
	}, [isOpen, onClose]);
	return /* @__PURE__ */ jsx(AnimatePresence, { children: isOpen && /* @__PURE__ */ jsxs(motion.div, {
		className: "fixed inset-0 z-40",
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		transition: { duration: .2 },
		children: [/* @__PURE__ */ jsx(motion.div, {
			variants: backdropVariants,
			initial: "hidden",
			animate: "visible",
			exit: "hidden",
			transition: { duration: .3 },
			className: "absolute inset-0 bg-black/30 backdrop-blur-sm",
			onClick: onClose
		}), /* @__PURE__ */ jsx(motion.div, {
			variants: modalVariants,
			initial: "hidden",
			animate: "visible",
			exit: "exit",
			className: "absolute inset-0 flex items-center justify-center p-4 pointer-events-none",
			children: /* @__PURE__ */ jsxs("div", {
				className: "pointer-events-auto w-full max-w-lg max-h-[85vh] rounded-2xl border border-border bg-white shadow-2xl dark:bg-gray-950 overflow-y-auto",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "sticky top-0 z-10 flex items-center gap-3 border-b border-border bg-white px-6 py-4 dark:bg-gray-950 rounded-t-2xl",
					children: [
						/* @__PURE__ */ jsx(Shield, { className: "h-5 w-5 text-primary-800 dark:text-primary-400" }),
						/* @__PURE__ */ jsx("h2", {
							className: "flex-1 text-lg font-bold text-foreground",
							children: t("datenschutz.title")
						}),
						/* @__PURE__ */ jsx("button", {
							type: "button",
							onClick: onClose,
							className: "cursor-pointer rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
							"aria-label": t("datenschutz.close"),
							children: /* @__PURE__ */ jsx(X, { className: "h-5 w-5" })
						})
					]
				}), /* @__PURE__ */ jsx("div", {
					className: "space-y-6 px-6 py-6 text-sm leading-relaxed text-muted-foreground",
					children: sections.map((key, i) => /* @__PURE__ */ jsxs(motion.div, {
						custom: i,
						variants: contentVariants,
						initial: "hidden",
						animate: "visible",
						children: [/* @__PURE__ */ jsx("h3", {
							className: "mb-2 text-base font-semibold text-foreground",
							children: t(`datenschutz.${key}.heading`)
						}), t(`datenschutz.${key}.body`).split("\n").map((line, li) => /* @__PURE__ */ jsx("p", {
							className: li > 0 ? "mt-2" : "",
							children: line
						}, li))]
					}, key))
				})]
			})
		})]
	}, "datenschutz-wrapper") });
}
//#endregion
//#region src/components/ui/Button.tsx
var buttonVariants = cva("relative inline-flex items-center justify-center gap-2 rounded-full text-sm font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", {
	variants: {
		variant: {
			primary: "bg-accent-500 text-white hover:bg-accent-600 shadow-lg shadow-accent-500/30",
			secondary: "bg-primary-800 text-white hover:bg-primary-700 shadow-lg shadow-primary-800/30",
			outline: "border-2 border-white text-white hover:bg-white hover:text-primary-800",
			ghost: "text-primary-800 hover:bg-primary-50 dark:text-primary-200 dark:hover:bg-gray-800"
		},
		size: {
			sm: "px-4 py-2 text-xs",
			md: "px-6 py-3 text-sm",
			lg: "px-8 py-4 text-base"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "md"
	}
});
var Button = forwardRef(({ variant, size, className, children, ...props }, ref) => {
	return /* @__PURE__ */ jsxs("button", {
		ref,
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		...props,
		children: [children, variant !== "ghost" && /* @__PURE__ */ jsx(FireEffect_default, {})]
	});
});
Button.displayName = "Button";
//#endregion
//#region src/components/common/ErrorBoundary.tsx
var ErrorBoundary = class extends Component {
	state = { hasError: false };
	static getDerivedStateFromError(error) {
		return {
			hasError: true,
			error
		};
	}
	componentDidCatch(error, errorInfo) {
		console.error("ErrorBoundary caught:", error, errorInfo);
	}
	render() {
		if (this.state.hasError) return /* @__PURE__ */ jsxs("div", {
			className: "flex min-h-[60vh] flex-col items-center justify-center gap-4 px-4 text-center",
			children: [
				/* @__PURE__ */ jsx(TriangleAlert, { className: "h-12 w-12 text-accent-500" }),
				/* @__PURE__ */ jsx("h2", {
					className: "font-heading text-2xl font-bold text-foreground",
					children: i18n.t("errorBoundary.title")
				}),
				/* @__PURE__ */ jsx("p", {
					className: "max-w-md text-muted-foreground",
					children: i18n.t("errorBoundary.message")
				}),
				/* @__PURE__ */ jsx(Button, {
					variant: "secondary",
					onClick: () => window.location.reload(),
					children: i18n.t("errorBoundary.button")
				})
			]
		});
		return this.props.children;
	}
};
//#endregion
//#region src/root.tsx
var root_exports = /* @__PURE__ */ __exportAll({ default: () => root_default });
var pageVariants = {
	initial: {
		opacity: 0,
		y: 12
	},
	animate: {
		opacity: 1,
		y: 0
	},
	exit: {
		opacity: 0,
		y: -12
	}
};
function PageTransition({ children }) {
	const location = useLocation();
	return /* @__PURE__ */ jsx(AnimatePresence, {
		mode: "wait",
		children: /* @__PURE__ */ jsx(motion.div, {
			variants: pageVariants,
			initial: "initial",
			animate: "animate",
			exit: "exit",
			transition: {
				duration: .25,
				ease: "easeOut"
			},
			children
		}, location.pathname)
	});
}
function LoadingFallback() {
	const { t } = useTranslation();
	return /* @__PURE__ */ jsx("div", {
		className: "flex min-h-[60vh] items-center justify-center",
		"aria-live": "polite",
		"aria-label": t("layout.loadingLabel"),
		children: /* @__PURE__ */ jsx("div", {
			className: "h-10 w-10 animate-spin rounded-full border-4 border-muted border-t-primary-800",
			role: "status",
			children: /* @__PURE__ */ jsx("span", {
				className: "sr-only",
				children: t("layout.loading")
			})
		})
	});
}
var root_default = UNSAFE_withComponentProps(function Root() {
	useScrollToTop();
	const { i18n } = useTranslation();
	const [datenschutzOpen, setDatenschutzOpen] = useState(() => {
		if (typeof window === "undefined") return false;
		return !localStorage.getItem("datenschutz-accepted");
	});
	const closeDatenschutz = () => {
		localStorage.setItem("datenschutz-accepted", "true");
		setDatenschutzOpen(false);
	};
	const openDatenschutz = () => setDatenschutzOpen(true);
	return /* @__PURE__ */ jsxs(ThemeProvider, { children: [/* @__PURE__ */ jsxs(Helmet, { children: [
		/* @__PURE__ */ jsx("html", { lang: i18n.language }),
		/* @__PURE__ */ jsx("link", {
			rel: "icon",
			type: "image/svg+xml",
			href: "/favicon.svg"
		}),
		/* @__PURE__ */ jsx("link", {
			rel: "preconnect",
			href: "https://fonts.googleapis.com"
		}),
		/* @__PURE__ */ jsx("link", {
			rel: "preconnect",
			href: "https://fonts.gstatic.com",
			crossOrigin: "anonymous"
		}),
		/* @__PURE__ */ jsx("link", {
			href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Montserrat:wght@700;800;900&family=Pacifico&display=swap",
			rel: "stylesheet"
		})
	] }), /* @__PURE__ */ jsx(ErrorBoundary, { children: /* @__PURE__ */ jsxs("div", {
		className: "flex min-h-screen flex-col",
		children: [
			/* @__PURE__ */ jsx(SkipToContent, {}),
			/* @__PURE__ */ jsx(GhisHeader, {}),
			/* @__PURE__ */ jsx("main", {
				id: "main-content",
				className: "flex-1",
				tabIndex: -1,
				children: /* @__PURE__ */ jsx(Suspense, {
					fallback: /* @__PURE__ */ jsx(LoadingFallback, {}),
					children: /* @__PURE__ */ jsx(PageTransition, { children: /* @__PURE__ */ jsx(Outlet, {}) })
				})
			}),
			/* @__PURE__ */ jsx(FloatingButtons, {}),
			/* @__PURE__ */ jsx(Footer, { onOpenDatenschutz: openDatenschutz }),
			/* @__PURE__ */ jsx(DatenschutzModal, {
				isOpen: datenschutzOpen,
				onClose: closeDatenschutz
			})
		]
	}) })] });
});
//#endregion
//#region \0virtual:react-router/server-manifest
var server_manifest_default = {
	"entry": {
		"module": "/assets/entry.client-Bt9z-5Tw.js",
		"imports": [
			"/assets/jsx-runtime-Bsf_swfW.js",
			"/assets/errorBoundaries-Bbu02qOb.js",
			"/assets/i18next-BZ5GV2SN.js"
		],
		"css": ["/assets/entry-s4WT0rpv.css"]
	},
	"routes": {
		"root": {
			"id": "root",
			"parentId": void 0,
			"path": "",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/root-DMH2j6gZ.js",
			"imports": [
				"/assets/jsx-runtime-Bsf_swfW.js",
				"/assets/errorBoundaries-Bbu02qOb.js",
				"/assets/i18next-BZ5GV2SN.js",
				"/assets/lib-DLzQ_dr5.js",
				"/assets/Trans-Cue7Br69.js",
				"/assets/createLucideIcon-Btx5MZiH.js",
				"/assets/graduation-cap-6GdqCPTe.js",
				"/assets/Button-BNhSBeQv.js",
				"/assets/FireEffect-hyYViIjF.js",
				"/assets/dist-IvYBVv6m.js"
			],
			"css": ["/assets/entry-s4WT0rpv.css"],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"pages/Home": {
			"id": "pages/Home",
			"parentId": "root",
			"path": "/",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/Home-xp2_W0tC.js",
			"imports": [
				"/assets/jsx-runtime-Bsf_swfW.js",
				"/assets/lib-DLzQ_dr5.js",
				"/assets/Trans-Cue7Br69.js",
				"/assets/createLucideIcon-Btx5MZiH.js",
				"/assets/ParallaxSection-2tRBaGzU.js",
				"/assets/graduation-cap-6GdqCPTe.js",
				"/assets/FireEffect-hyYViIjF.js",
				"/assets/dist-IvYBVv6m.js",
				"/assets/Badge-DJA8_dCM.js",
				"/assets/CTAButton-nuU-Sbez.js",
				"/assets/SEO-B2GqZPyI.js",
				"/assets/formationData-BLvqhryv.js",
				"/assets/errorBoundaries-Bbu02qOb.js",
				"/assets/i18next-BZ5GV2SN.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"pages/ConstructionMetallique": {
			"id": "pages/ConstructionMetallique",
			"parentId": "root",
			"path": "/formations/construction-metallique",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/ConstructionMetallique-Ci3Qlpqo.js",
			"imports": [
				"/assets/jsx-runtime-Bsf_swfW.js",
				"/assets/createLucideIcon-Btx5MZiH.js",
				"/assets/SEO-B2GqZPyI.js",
				"/assets/formationData-BLvqhryv.js",
				"/assets/FormationDetail-OWHeWfbU.js",
				"/assets/Trans-Cue7Br69.js",
				"/assets/FireEffect-hyYViIjF.js",
				"/assets/Badge-DJA8_dCM.js",
				"/assets/CTAButton-nuU-Sbez.js",
				"/assets/i18next-BZ5GV2SN.js",
				"/assets/dist-IvYBVv6m.js",
				"/assets/lib-DLzQ_dr5.js",
				"/assets/errorBoundaries-Bbu02qOb.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"pages/GestionFinances": {
			"id": "pages/GestionFinances",
			"parentId": "root",
			"path": "/formations/gestion-finances-management",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/GestionFinances-BGSXcAZA.js",
			"imports": [
				"/assets/jsx-runtime-Bsf_swfW.js",
				"/assets/createLucideIcon-Btx5MZiH.js",
				"/assets/SEO-B2GqZPyI.js",
				"/assets/formationData-BLvqhryv.js",
				"/assets/FormationDetail-OWHeWfbU.js",
				"/assets/Trans-Cue7Br69.js",
				"/assets/FireEffect-hyYViIjF.js",
				"/assets/Badge-DJA8_dCM.js",
				"/assets/CTAButton-nuU-Sbez.js",
				"/assets/i18next-BZ5GV2SN.js",
				"/assets/dist-IvYBVv6m.js",
				"/assets/lib-DLzQ_dr5.js",
				"/assets/errorBoundaries-Bbu02qOb.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"pages/Electricite": {
			"id": "pages/Electricite",
			"parentId": "root",
			"path": "/formations/electricite",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/Electricite-Fb6MnKhh.js",
			"imports": [
				"/assets/jsx-runtime-Bsf_swfW.js",
				"/assets/createLucideIcon-Btx5MZiH.js",
				"/assets/SEO-B2GqZPyI.js",
				"/assets/formationData-BLvqhryv.js",
				"/assets/FormationDetail-OWHeWfbU.js",
				"/assets/Trans-Cue7Br69.js",
				"/assets/FireEffect-hyYViIjF.js",
				"/assets/Badge-DJA8_dCM.js",
				"/assets/CTAButton-nuU-Sbez.js",
				"/assets/i18next-BZ5GV2SN.js",
				"/assets/dist-IvYBVv6m.js",
				"/assets/lib-DLzQ_dr5.js",
				"/assets/errorBoundaries-Bbu02qOb.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"pages/About": {
			"id": "pages/About",
			"parentId": "root",
			"path": "/a-propos",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/About-DKVEUq3Y.js",
			"imports": [
				"/assets/jsx-runtime-Bsf_swfW.js",
				"/assets/Trans-Cue7Br69.js",
				"/assets/createLucideIcon-Btx5MZiH.js",
				"/assets/ParallaxSection-2tRBaGzU.js",
				"/assets/graduation-cap-6GdqCPTe.js",
				"/assets/Badge-DJA8_dCM.js",
				"/assets/SEO-B2GqZPyI.js",
				"/assets/i18next-BZ5GV2SN.js",
				"/assets/dist-IvYBVv6m.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"pages/Contact": {
			"id": "pages/Contact",
			"parentId": "root",
			"path": "/contact",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/Contact-DARmcQ_K.js",
			"imports": [
				"/assets/jsx-runtime-Bsf_swfW.js",
				"/assets/createLucideIcon-Btx5MZiH.js",
				"/assets/Button-BNhSBeQv.js",
				"/assets/FireEffect-hyYViIjF.js",
				"/assets/Badge-DJA8_dCM.js",
				"/assets/SEO-B2GqZPyI.js",
				"/assets/formationData-BLvqhryv.js",
				"/assets/dist-IvYBVv6m.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"pages/NotFound": {
			"id": "pages/NotFound",
			"parentId": "root",
			"path": "*",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/NotFound-BkCMXm_i.js",
			"imports": [
				"/assets/jsx-runtime-Bsf_swfW.js",
				"/assets/lib-DLzQ_dr5.js",
				"/assets/createLucideIcon-Btx5MZiH.js",
				"/assets/SEO-B2GqZPyI.js",
				"/assets/errorBoundaries-Bbu02qOb.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		}
	},
	"url": "/assets/manifest-3159bab2.js",
	"version": "3159bab2",
	"sri": void 0
};
//#endregion
//#region \0virtual:react-router/server-build
var route1 = { default: () => null };
var route2 = { default: () => null };
var route3 = { default: () => null };
var route4 = { default: () => null };
var route5 = { default: () => null };
var route6 = { default: () => null };
var route7 = { default: () => null };
var assetsBuildDirectory = "build\\client";
var basename = "/";
var future = { "unstable_optimizeDeps": false };
var ssr = false;
var isSpaMode = true;
var prerender = [];
var routeDiscovery = { "mode": "initial" };
var publicPath = "/";
var entry = { module: entry_server_exports };
var routes = {
	"root": {
		id: "root",
		parentId: void 0,
		path: "",
		index: void 0,
		caseSensitive: void 0,
		module: root_exports
	},
	"pages/Home": {
		id: "pages/Home",
		parentId: "root",
		path: "/",
		index: void 0,
		caseSensitive: void 0,
		module: route1
	},
	"pages/ConstructionMetallique": {
		id: "pages/ConstructionMetallique",
		parentId: "root",
		path: "/formations/construction-metallique",
		index: void 0,
		caseSensitive: void 0,
		module: route2
	},
	"pages/GestionFinances": {
		id: "pages/GestionFinances",
		parentId: "root",
		path: "/formations/gestion-finances-management",
		index: void 0,
		caseSensitive: void 0,
		module: route3
	},
	"pages/Electricite": {
		id: "pages/Electricite",
		parentId: "root",
		path: "/formations/electricite",
		index: void 0,
		caseSensitive: void 0,
		module: route4
	},
	"pages/About": {
		id: "pages/About",
		parentId: "root",
		path: "/a-propos",
		index: void 0,
		caseSensitive: void 0,
		module: route5
	},
	"pages/Contact": {
		id: "pages/Contact",
		parentId: "root",
		path: "/contact",
		index: void 0,
		caseSensitive: void 0,
		module: route6
	},
	"pages/NotFound": {
		id: "pages/NotFound",
		parentId: "root",
		path: "*",
		index: void 0,
		caseSensitive: void 0,
		module: route7
	}
};
var allowedActionOrigins = false;
//#endregion
export { allowedActionOrigins, server_manifest_default as assets, assetsBuildDirectory, basename, entry, future, isSpaMode, prerender, publicPath, routeDiscovery, routes, ssr };
