import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { Link, NavLink, Outlet, ServerRouter, UNSAFE_withComponentProps, useLocation } from "react-router";
import i18n from "i18next";
import { Trans, initReactI18next, useTranslation } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Component, Suspense, createContext, forwardRef, memo, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ArrowUp, Award, Briefcase, CheckCircle2, ChevronRight, Facebook, Globe, GraduationCap, Home, Image, Instagram, Loader2, Mail, MapPin, MessageCircle, MessageCircleMore, Moon, Music2, Phone, Send, Shield, Sparkles, Sun, TriangleAlert, Twitter, Users, X, Youtube } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { cva } from "class-variance-authority";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
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
var fr_default = {
	header: {
		"logoSubtitle": "Sous tutelle du MINEFOP",
		"nav": {
			"home": "Accueil",
			"constructionMetallique": "Construction Métallique",
			"gestionManagement": "Gestion & Management",
			"electricite": "Électricité",
			"about": "À propos",
			"contact": "Contact"
		},
		"theme": {
			"light": "Activer le mode clair",
			"dark": "Activer le mode sombre"
		},
		"menu": {
			"open": "Ouvrir le menu",
			"close": "Fermer le menu"
		},
		"whatsapp": "WhatsApp",
		"ariaLabel": "Navigation principale",
		"homeAriaLabel": "Accueil CFPMIE"
	},
	footer: {
		"description": "Centre de Formation Professionnelle<br />Multi-Industriel de l'Excellence",
		"motto": "«Une Formation – Un Métier – Un Emploi»",
		"formations": "Nos formations",
		"contact": "Contact",
		"usefulLinks": "Liens utiles",
		"constructionMetallique": "Construction Métallique",
		"gestionManagement": "Gestion des Finances & Management",
		"electricite": "Électricité",
		"address": "Chefferie Makepe Missoké, Douala",
		"about": "À propos",
		"whatsapp": "WhatsApp",
		"datenschutz": "Politique de confidentialité",
		"copyright": "© {{year}} CFPMIE – Tous droits réservés.",
		"minefop": "Sous la tutelle du <1>MINEFOP</1> – Ministère de l'Emploi et de la Formation Professionnelle, Cameroun"
	},
	layout: {
		"loading": "Chargement en cours…",
		"loadingLabel": "Chargement"
	},
	skipToContent: "Aller au contenu principal",
	errorBoundary: {
		"title": "Une erreur est survenue",
		"message": "Veuillez rafraîchir la page ou réessayer plus tard.",
		"button": "Rafraîchir la page"
	},
	home: {
		"seoTitle": "Accueil",
		"seoDescription": "CFPMIE – formations professionnelles en construction métallique, gestion des finances et électricité à Douala, Cameroun.",
		"hero": {
			"badge": "Rentrée académique 2025",
			"heading": "Une <1>Formation</1> –<br /><2>Un Métier – Un Emploi</2>",
			"description": "Le CFPMIE forme les professionnels de demain dans les métiers industriels et de gestion.",
			"ctaInscription": "Inscriptions ouvertes",
			"ctaDecouvrir": "Découvrir le CFPMIE",
			"quote": "«Après la période électorale, la vie continue… et l'avenir se prépare.»",
			"quoteCite": "— Rentrée académique 2025 : 25 novembre 2025"
		},
		"highlights": {
			"badge": "Pourquoi CFPMIE ?",
			"title": "Notre promesse",
			"items": {
				"practice": {
					"title": "Formation pratique",
					"text": "80% de pratique en atelier. Nos apprenants fabriquent eux-mêmes le mobilier scolaire."
				},
				"diplomas": {
					"title": "Diplômes reconnus",
					"text": "AQP/CQP/DQP sous tutelle MINEFOP, plus certificat de secourisme inclus."
				},
				"internship": {
					"title": "Stage garanti",
					"text": "2 mois de stage en entreprise partenaire pour chaque apprenant."
				},
				"expertise": {
					"title": "Encadrement expert",
					"text": "Formateurs qualifiés et équipements modernes."
				}
			}
		},
		"formations": {
			"badge": "Nos filières",
			"title": "Choisissez votre formation",
			"description": "Trois secteurs porteurs pour bâtir votre avenir professionnel."
		},
		"gallery": {
			"badge": "Réalisations",
			"heading": "«Au CFPMIE, nos apprenants ne regardent pas… ils réalisent !»",
			"description": "Dès le premier jour, nos apprenants mettent la main à la pâte.",
			"atelier": "Atelier {{number}}",
			"caption": "[Photos d'illustration – ateliers et réalisations des apprenants]"
		},
		"cta": {
			"heading": "Prêt à construire votre avenir ?",
			"text": "Rejoignez le CFPMIE et bénéficiez d'une formation professionnelle de qualité.",
			"button": "S'inscrire maintenant",
			"whatsapp": "Écrire sur WhatsApp"
		}
	},
	about: {
		"seoTitle": "À propos",
		"seoDescription": "Découvrez le CFPMIE, centre de formation professionnelle à Douala sous tutelle MINEFOP.",
		"hero": {
			"badge": "À propos",
			"title": "Le CFPMIE en bref",
			"subtitle": "Centre de Formation Professionnelle Multi-Industriel de l'Excellence."
		},
		"philosophy": {
			"title": "Notre philosophie",
			"quote": "«Au CFPMIE, nos apprenants ne regardent pas… ils réalisent !»",
			"p1": "Nous croyons en une formation par la pratique. Dès le premier jour, nos apprenants sont en atelier, en train de souder, câbler, assembler et créer.",
			"p2": "Sous la tutelle du <1>MINEFOP</1>, le CFPMIE s'engage à offrir une formation de qualité, accessible et adaptée au marché camerounais."
		},
		"values": {
			"badge": "Nos valeurs",
			"title": "Ce qui nous distingue",
			"items": {
				"practice": {
					"title": "Pratique avant tout",
					"text": "80% de pratique en atelier. Nos apprenants fabriquent le mobilier scolaire dès le premier mois."
				},
				"mentoring": {
					"title": "Encadrement professionnel",
					"text": "Des formateurs qualifiés issus du monde professionnel accompagnent chaque apprenant."
				},
				"employment": {
					"title": "Insertion professionnelle",
					"text": "Stage garanti en entreprise et accompagnement vers l'emploi pour chaque diplômé."
				},
				"diplomas": {
					"title": "Diplômes d'État",
					"text": "Formations reconnues par le MINEFOP avec diplômes AQP, CQP et DQP."
				}
			}
		},
		"facilities": {
			"badge": "Nos installations",
			"title": "Des équipements modernes",
			"items": {
				"welding": {
					"title": "Atelier soudure",
					"desc": "Postes à souder MIG/MAG, TIG, MMA, équipements de chaudronnerie"
				},
				"electrical": {
					"title": "Laboratoire d'électricité",
					"desc": "Tableaux didactiques, armoires industrielles, outils de diagnostic"
				},
				"office": {
					"title": "Salle de bureautique",
					"desc": "Ordinateurs, logiciels de comptabilité et de gestion"
				},
				"workshop": {
					"title": "Atelier de fabrication",
					"desc": "Fabrication du mobilier scolaire par les apprenants"
				},
				"classrooms": {
					"title": "Salles de cours",
					"desc": "Espaces climatisés et équipés pour l'apprentissage théorique"
				},
				"lounge": {
					"title": "Espace détente",
					"desc": "Cadre agréable pour les pauses et les échanges"
				}
			},
			"caption": "[Photos d'illustration – ateliers et équipements du CFPMIE]"
		}
	},
	contact: {
		"seoTitle": "Contact & Inscription",
		"seoDescription": "Contactez le CFPMIE à Douala pour vous inscrire à nos formations professionnelles.",
		"hero": {
			"badge": "Inscriptions ouvertes",
			"title": "Contact & Inscription",
			"description": "Prêt à rejoindre le CFPMIE ? Remplissez le formulaire ou contactez-nous directement."
		},
		"form": {
			"title": "Formulaire d'inscription",
			"description": "Remplissez ce formulaire et nous vous recontacterons via WhatsApp.",
			"successTitle": "Message envoyé !",
			"successText": "Vous allez être redirigé vers WhatsApp pour confirmer.",
			"nameLabel": "Nom complet",
			"namePlaceholder": "Votre nom et prénom",
			"phoneLabel": "Téléphone",
			"phonePlaceholder": "+237 6XX XXX XXX",
			"formationLabel": "Formation souhaitée",
			"formationPlaceholder": "Sélectionnez une formation",
			"messageLabel": "Message",
			"messagePlaceholder": "Votre message (optionnel)",
			"errors": {
				"name": "Le nom doit contenir au moins 2 caractères",
				"phone": "Numéro de téléphone invalide",
				"formation": "Veuillez sélectionner une formation"
			},
			"submit": "Envoyer via WhatsApp",
			"sending": "Envoi en cours…",
			"redirectNote": "Vous serez redirigé vers WhatsApp pour confirmer votre message.",
			"required": "*"
		},
		"info": {
			"title": "Nos coordonnées",
			"address": "Adresse",
			"phone": "Téléphone",
			"whatsapp": "WhatsApp",
			"email": "E-mail",
			"website": "Site web",
			"addressValue": "Chefferie Makepe Missoké, Douala, Cameroun",
			"phoneValue": "+237 659 245 821 / +237 674 234 872",
			"whatsappValue": "+237 670 109 235",
			"emailValue": "contact@cfpmie.com",
			"websiteValue": "www.formationcfpmie.com"
		},
		"social": { "title": "Suivez-nous" },
		"map": {
			"title": "Nous trouver",
			"iframeTitle": "Localisation CFPMIE Douala",
			"location": "Chefferie Makepe Missoké, Douala"
		},
		"whatsappMessage": "Bonjour CFPMIE ! Je souhaite m'inscrire.%0A%0ANom : {{nom}}%0ATéléphone : {{telephone}}%0AFormation : {{formation}}%0AMessage : {{message}}"
	},
	notFound: {
		"seoTitle": "Page non trouvée",
		"title": "Page non trouvée",
		"message": "La page que vous cherchez n'existe pas ou a été déplacée.",
		"button": "Retour à l'accueil"
	},
	formationCard: { "cta": "En savoir plus" },
	formationDetail: {
		"badge": "Inscriptions ouvertes",
		"heroSpecial": "Spéciale",
		"heroFormation": "FORMATION en",
		"ctaInscrire": "S'inscrire",
		"whatsapp": "WhatsApp",
		"sections": {
			"phase": "Phase de formation",
			"filieres": "Nos filières",
			"diplomes": "Diplômes",
			"competences": "Compétences / Savoir-faire",
			"participation": "Participation"
		},
		"phase": {
			"theoretical": {
				"months": "6 mois",
				"desc": "Cours théoriques et pratiques"
			},
			"project": {
				"months": "2 mois",
				"desc": "Projet pratique"
			},
			"internship": {
				"months": "2 mois",
				"desc": "Stage garanti en entreprise"
			}
		},
		"diplomes": {
			"diplomaText": "Diplômes professionnels reconnus par le <1>MINEFOP</1>, avec certificat de secourisme inclus.",
			"certificates": "Certificats optionnels"
		},
		"participation": {
			"feeLabel": "Frais de formation",
			"paymentLabel": "Paiement en {{count}} mensualité",
			"paymentLabel_plural": "Paiement en {{count}} mensualités",
			"included": "Inclus dans l'inscription"
		},
		"cta": {
			"heading": "Prêt à rejoindre la formation ?",
			"text": "Inscrivez-vous dès maintenant.",
			"button": "S'inscrire maintenant"
		}
	},
	formations: {
		"construction-metallique": {
			"title": "Construction Métallique",
			"subtitle": "Spéciale FORMATION en Construction Métallique",
			"description": "Maîtrisez la soudure industrielle, la chaudronnerie et la tuyauterie industrielle avec un stage garanti en entreprise.",
			"filieres": ["Soudure industrielle et montage", "Chaudronnerie et tuyauterie industrielle"],
			"skills": [
				"Lire et interpréter des plans techniques",
				"Maîtriser les procédés de soudage (MMA, MIG, TIG)",
				"Fabriquer et assembler des structures métalliques",
				"Installer et maintenir des réseaux de tuyauterie",
				"Respecter les normes de sécurité et de métallurgie",
				"Superviser des chantiers de montage industriel"
			],
			"certificates": [
				"Travaux en hauteur",
				"Monteur et vérificateur d'échafaudages",
				"Secourisme (inclus)"
			],
			"extras": [
				"Kit de protection (PSA)",
				"Polo CFPMIE",
				"Casquette",
				"Manuels de cours"
			],
			"installments": [
				"À l'inscription",
				"1re mensualité",
				"2e mensualité"
			]
		},
		"gestion-finances-management": {
			"title": "Gestion des Finances & Management",
			"subtitle": "Spéciale FORMATION en Gestion des Finances & Management",
			"description": "Devenez un professionnel polyvalent en comptabilité, secrétariat et management.",
			"filieres": [
				"Sécrétariat bureautique",
				"Sécrétariat de direction",
				"Comptabilité de gestion",
				"Management"
			],
			"skills": [
				"Assurer la gestion comptable et financière",
				"Maîtriser les logiciels de bureautique et comptabilité",
				"Gérer la paie, déclarations fiscales et sociales",
				"Organiser et planifier le travail d'une équipe",
				"Assurer le secrétariat et l'accueil",
				"Élaborer des rapports et tableaux de bord"
			],
			"installments": [
				"À l'inscription",
				"1re mensualité",
				"2e mensualité"
			]
		},
		"electricite": {
			"title": "Électricité",
			"subtitle": "Spéciale FORMATION en Électricité",
			"description": "Spécialisez-vous en électricité bâtiment et industrielle.",
			"filieres": ["Électricité bâtiment", "Électricité industrielle"],
			"skills": [
				"Lire et interpréter des schémas électriques",
				"Réaliser le câblage et les raccordements",
				"Effectuer la maintenance et le dépannage",
				"Installer des tableaux et armoires électriques",
				"Respecter les normes de sécurité électrique",
				"Travailler sur installations bâtiment et industrielles"
			],
			"certificates": [
				"Habilitation électrique",
				"Travaux en hauteur",
				"Monteur et vérificateur d'échafaudages",
				"Secourisme (inclus)"
			],
			"extras": [
				"Kit de protection (PSA)",
				"Polo CFPMIE",
				"Casquette",
				"Manuels de cours"
			],
			"installments": [
				"À l'inscription",
				"1re mensualité",
				"2e mensualité",
				"3e mensualité"
			]
		}
	},
	seo: { "siteName": "CFPMIE – Centre de Formation Professionnelle Multi-Industriel de l'Excellence" },
	languageSwitcher: {
		"fr": "Français",
		"en": "English"
	},
	datenschutz: {
		"title": "Politique de confidentialité",
		"close": "Fermer",
		"overview": {
			"heading": "Aperçu",
			"body": "Nous prenons très au sérieux la protection de vos données personnelles. Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations lorsque vous visitez notre site web ou utilisez nos services."
		},
		"dataCollected": {
			"heading": "Données collectées",
			"body": "Nous collectons uniquement les données que vous fournissez volontairement via notre formulaire de contact : nom, numéro de téléphone, formation souhaitée et message optionnel. Nous collectons également des données d'utilisation anonymisées via des cookies pour améliorer notre site."
		},
		"purpose": {
			"heading": "Finalité du traitement",
			"body": "Vos données sont utilisées uniquement pour répondre à vos demandes, traiter vos inscriptions et améliorer nos services. Nous ne partageons pas vos données avec des tiers sans votre consentement explicite."
		},
		"cookies": {
			"heading": "Cookies",
			"body": "Notre site utilise un minimum de cookies nécessaires au fonctionnement et aux analyses. Vous pouvez désactiver les cookies dans les paramètres de votre navigateur à tout moment."
		},
		"rights": {
			"heading": "Vos droits",
			"body": "Vous avez le droit d'accéder à vos données, de les rectifier ou de les supprimer à tout moment. Pour exercer ces droits, veuillez nous contacter via les coordonnées ci-dessous."
		},
		"contact": {
			"heading": "Contact",
			"body": "Pour toute question relative à la protection des données, vous pouvez nous joindre à :\nCFPMIE\nChefferie Makepe Missoké, Douala, Cameroun\nEmail : contact@cfpmie.com\nTéléphone : +237 659 245 821"
		}
	}
};
var en_default = {
	header: {
		"logoSubtitle": "Under the supervision of MINEFOP",
		"nav": {
			"home": "Home",
			"constructionMetallique": "Metal Construction",
			"gestionManagement": "Management & Finance",
			"electricite": "Electrical",
			"about": "About",
			"contact": "Contact"
		},
		"theme": {
			"light": "Switch to light mode",
			"dark": "Switch to dark mode"
		},
		"menu": {
			"open": "Open menu",
			"close": "Close menu"
		},
		"whatsapp": "WhatsApp",
		"ariaLabel": "Main navigation",
		"homeAriaLabel": "CFPMIE Home"
	},
	footer: {
		"description": "Multi-Industrial Vocational Training<br />Center of Excellence",
		"motto": "«Training – A Trade – A Job»",
		"formations": "Our Programs",
		"contact": "Contact",
		"usefulLinks": "Useful Links",
		"constructionMetallique": "Metal Construction",
		"gestionManagement": "Finance & Management",
		"electricite": "Electrical",
		"address": "Chefferie Makepe Missoké, Douala",
		"about": "About",
		"whatsapp": "WhatsApp",
		"datenschutz": "Privacy Policy",
		"copyright": "© {{year}} CFPMIE – All rights reserved.",
		"minefop": "Under the supervision of <1>MINEFOP</1> – Ministry of Employment and Vocational Training, Cameroon"
	},
	layout: {
		"loading": "Loading…",
		"loadingLabel": "Loading"
	},
	skipToContent: "Skip to main content",
	errorBoundary: {
		"title": "An error occurred",
		"message": "Please refresh the page or try again later.",
		"button": "Refresh page"
	},
	home: {
		"seoTitle": "Home",
		"seoDescription": "CFPMIE – vocational training in metal construction, finance management, and electrical engineering in Douala, Cameroon.",
		"hero": {
			"badge": "2025 Academic Year",
			"heading": "A <1>Training</1> –<br /><2>A Trade – A Job</2>",
			"description": "CFPMIE trains tomorrow's professionals in industrial and management trades.",
			"ctaInscription": "Register Now",
			"ctaDecouvrir": "Discover CFPMIE",
			"quote": "«After the election period, life goes on… and the future is being prepared.»",
			"quoteCite": "— 2025 Academic Year: November 25, 2025"
		},
		"highlights": {
			"badge": "Why CFPMIE?",
			"title": "Our Promise",
			"items": {
				"practice": {
					"title": "Hands-on Training",
					"text": "80% practical workshop time. Our learners build school furniture themselves."
				},
				"diplomas": {
					"title": "Recognized Diplomas",
					"text": "AQP/CQP/DQP under MINEFOP supervision, plus first-aid certificate included."
				},
				"internship": {
					"title": "Guaranteed Internship",
					"text": "2-month internship with partner companies for every learner."
				},
				"expertise": {
					"title": "Expert Guidance",
					"text": "Qualified instructors and modern equipment."
				}
			}
		},
		"formations": {
			"badge": "Our Programs",
			"title": "Choose Your Training",
			"description": "Three promising sectors to build your professional future."
		},
		"gallery": {
			"badge": "Achievements",
			"heading": "«At CFPMIE, our learners don't just watch… they build!»",
			"description": "From day one, our learners get their hands dirty.",
			"atelier": "Workshop {{number}}",
			"caption": "[Illustration photos – learner workshops and achievements]"
		},
		"cta": {
			"heading": "Ready to build your future?",
			"text": "Join CFPMIE and benefit from quality vocational training.",
			"button": "Register Now",
			"whatsapp": "Write on WhatsApp"
		}
	},
	about: {
		"seoTitle": "About",
		"seoDescription": "Discover CFPMIE, a vocational training center in Douala under MINEFOP supervision.",
		"hero": {
			"badge": "About",
			"title": "CFPMIE at a Glance",
			"subtitle": "Multi-Industrial Vocational Training Center of Excellence."
		},
		"philosophy": {
			"title": "Our Philosophy",
			"quote": "«At CFPMIE, our learners don't just watch… they build!»",
			"p1": "We believe in learning by doing. From day one, our learners are in the workshop welding, wiring, assembling, and creating.",
			"p2": "Under the supervision of <1>MINEFOP</1>, CFPMIE is committed to providing quality, accessible training adapted to the Cameroonian market."
		},
		"values": {
			"badge": "Our Values",
			"title": "What Sets Us Apart",
			"items": {
				"practice": {
					"title": "Practice First",
					"text": "80% practical workshop time. Learners build school furniture from the first month."
				},
				"mentoring": {
					"title": "Professional Guidance",
					"text": "Qualified instructors from the professional world accompany each learner."
				},
				"employment": {
					"title": "Job Placement",
					"text": "Guaranteed internship and job-seeking support for every graduate."
				},
				"diplomas": {
					"title": "State Diplomas",
					"text": "Training recognized by MINEFOP with AQP, CQP, and DQP diplomas."
				}
			}
		},
		"facilities": {
			"badge": "Our Facilities",
			"title": "Modern Equipment",
			"items": {
				"welding": {
					"title": "Welding Workshop",
					"desc": "MIG/MAG, TIG, MMA welding stations, boiler-making equipment"
				},
				"electrical": {
					"title": "Electrical Lab",
					"desc": "Didactic boards, industrial cabinets, diagnostic tools"
				},
				"office": {
					"title": "Computer Lab",
					"desc": "Computers, accounting and management software"
				},
				"workshop": {
					"title": "Manufacturing Workshop",
					"desc": "School furniture manufacturing by learners"
				},
				"classrooms": {
					"title": "Classrooms",
					"desc": "Air-conditioned spaces equipped for theoretical learning"
				},
				"lounge": {
					"title": "Lounge Area",
					"desc": "Pleasant setting for breaks and exchanges"
				}
			},
			"caption": "[Illustration photos – CFPMIE workshops and equipment]"
		}
	},
	contact: {
		"seoTitle": "Contact & Registration",
		"seoDescription": "Contact CFPMIE in Douala to register for our vocational training programs.",
		"hero": {
			"badge": "Registration Open",
			"title": "Contact & Registration",
			"description": "Ready to join CFPMIE? Fill out the form or contact us directly."
		},
		"form": {
			"title": "Registration Form",
			"description": "Fill out this form and we will contact you via WhatsApp.",
			"successTitle": "Message sent!",
			"successText": "You will be redirected to WhatsApp to confirm.",
			"nameLabel": "Full Name",
			"namePlaceholder": "Your first and last name",
			"phoneLabel": "Phone",
			"phonePlaceholder": "+237 6XX XXX XXX",
			"formationLabel": "Desired Program",
			"formationPlaceholder": "Select a program",
			"messageLabel": "Message",
			"messagePlaceholder": "Your message (optional)",
			"errors": {
				"name": "Name must be at least 2 characters",
				"phone": "Invalid phone number",
				"formation": "Please select a program"
			},
			"submit": "Send via WhatsApp",
			"sending": "Sending…",
			"redirectNote": "You will be redirected to WhatsApp to confirm your message.",
			"required": "*"
		},
		"info": {
			"title": "Our Contact Info",
			"address": "Address",
			"phone": "Phone",
			"whatsapp": "WhatsApp",
			"email": "Email",
			"website": "Website",
			"addressValue": "Chefferie Makepe Missoké, Douala, Cameroon",
			"phoneValue": "+237 659 245 821 / +237 674 234 872",
			"whatsappValue": "+237 670 109 235",
			"emailValue": "contact@cfpmie.com",
			"websiteValue": "www.formationcfpmie.com"
		},
		"social": { "title": "Follow Us" },
		"map": {
			"title": "Find Us",
			"iframeTitle": "CFPMIE Douala Location",
			"location": "Chefferie Makepe Missoké, Douala"
		},
		"whatsappMessage": "Hello CFPMIE! I would like to register.%0A%0AName: {{nom}}%0APhone: {{telephone}}%0AProgram: {{formation}}%0AMessage: {{message}}"
	},
	notFound: {
		"seoTitle": "Page Not Found",
		"title": "Page Not Found",
		"message": "The page you are looking for does not exist or has been moved.",
		"button": "Back to Home"
	},
	formationCard: { "cta": "Learn More" },
	formationDetail: {
		"badge": "Registration Open",
		"heroSpecial": "Special",
		"heroFormation": "TRAINING in",
		"ctaInscrire": "Register",
		"whatsapp": "WhatsApp",
		"sections": {
			"phase": "Training Phase",
			"filieres": "Our Tracks",
			"diplomes": "Diplomas",
			"competences": "Skills / Expertise",
			"participation": "Fees"
		},
		"phase": {
			"theoretical": {
				"months": "6 months",
				"desc": "Theoretical and practical courses"
			},
			"project": {
				"months": "2 months",
				"desc": "Practical project"
			},
			"internship": {
				"months": "2 months",
				"desc": "Guaranteed company internship"
			}
		},
		"diplomes": {
			"diplomaText": "Professional diplomas recognized by <1>MINEFOP</1>, with first-aid certificate included.",
			"certificates": "Optional certificates"
		},
		"participation": {
			"feeLabel": "Tuition Fee",
			"paymentLabel": "Payment in {{count}} installment",
			"paymentLabel_plural": "Payment in {{count}} installments",
			"included": "Included in Registration"
		},
		"cta": {
			"heading": "Ready to join the training?",
			"text": "Register now.",
			"button": "Register Now"
		}
	},
	formations: {
		"construction-metallique": {
			"title": "Metal Construction",
			"subtitle": "Special TRAINING in Metal Construction",
			"description": "Master industrial welding, boiler-making, and industrial piping with a guaranteed company internship.",
			"filieres": ["Industrial welding and assembly", "Boiler-making and industrial piping"],
			"skills": [
				"Read and interpret technical drawings",
				"Master welding processes (MMA, MIG, TIG)",
				"Fabricate and assemble metal structures",
				"Install and maintain piping networks",
				"Comply with safety and metallurgy standards",
				"Supervise industrial assembly sites"
			],
			"certificates": [
				"Working at height",
				"Scaffold erector and inspector",
				"First aid (included)"
			],
			"extras": [
				"Protection kit (PPE)",
				"CFPMIE polo",
				"Cap",
				"Course manuals"
			],
			"installments": [
				"At registration",
				"1st installment",
				"2nd installment"
			]
		},
		"gestion-finances-management": {
			"title": "Finance & Management",
			"subtitle": "Special TRAINING in Finance & Management",
			"description": "Become a versatile professional in accounting, secretarial, and management.",
			"filieres": [
				"Office secretarial",
				"Executive secretarial",
				"Management accounting",
				"Management"
			],
			"skills": [
				"Handle accounting and financial management",
				"Master office and accounting software",
				"Manage payroll, tax and social declarations",
				"Organize and plan team work",
				"Handle secretarial and reception duties",
				"Prepare reports and dashboards"
			],
			"installments": [
				"At registration",
				"1st installment",
				"2nd installment"
			]
		},
		"electricite": {
			"title": "Electrical Engineering",
			"subtitle": "Special TRAINING in Electrical Engineering",
			"description": "Specialize in building and industrial electrical engineering.",
			"filieres": ["Building electrical", "Industrial electrical"],
			"skills": [
				"Read and interpret electrical diagrams",
				"Perform wiring and connections",
				"Carry out maintenance and troubleshooting",
				"Install electrical panels and cabinets",
				"Comply with electrical safety standards",
				"Work on building and industrial installations"
			],
			"certificates": [
				"Electrical certification",
				"Working at height",
				"Scaffold erector and inspector",
				"First aid (included)"
			],
			"extras": [
				"Protection kit (PPE)",
				"CFPMIE polo",
				"Cap",
				"Course manuals"
			],
			"installments": [
				"At registration",
				"1st installment",
				"2nd installment",
				"3rd installment"
			]
		}
	},
	seo: { "siteName": "CFPMIE – Multi-Industrial Vocational Training Center of Excellence" },
	languageSwitcher: {
		"fr": "Français",
		"en": "English"
	},
	datenschutz: {
		"title": "Privacy Policy",
		"close": "Close",
		"overview": {
			"heading": "Overview",
			"body": "We take the protection of your personal data very seriously. This privacy policy explains how we collect, use, and safeguard your information when you visit our website or use our services."
		},
		"dataCollected": {
			"heading": "Data We Collect",
			"body": "We collect only the data you voluntarily provide through our contact form: name, phone number, selected training program, and optional message. We also collect anonymized usage data via cookies to improve our website."
		},
		"purpose": {
			"heading": "Purpose of Processing",
			"body": "Your data is used solely to respond to your inquiries, process your registration requests, and improve our services. We do not share your data with third parties without your explicit consent."
		},
		"cookies": {
			"heading": "Cookies",
			"body": "Our website uses minimal cookies essential for functionality and analytics. You can disable cookies in your browser settings at any time."
		},
		"rights": {
			"heading": "Your Rights",
			"body": "You have the right to access, rectify, or delete your personal data at any time. To exercise these rights, please contact us using the information below."
		},
		"contact": {
			"heading": "Contact",
			"body": "For any questions regarding data protection, you can reach us at:\nCFPMIE\nChefferie Makepe Missoké, Douala, Cameroon\nEmail: contact@cfpmie.com\nPhone: +237 659 245 821"
		}
	}
};
//#endregion
//#region src/i18n/index.ts
var initialized = false;
function initI18n(lng) {
	if (initialized) return;
	initialized = true;
	if (typeof window !== "undefined") i18n.use(LanguageDetector);
	i18n.use(initReactI18next).init({
		resources: {
			fr: { translation: fr_default },
			en: { translation: en_default }
		},
		lng: lng || "fr",
		fallbackLng: "fr",
		interpolation: { escapeValue: false }
	});
}
//#endregion
//#region src/entry.server.tsx
var entry_server_exports = /* @__PURE__ */ __exportAll({
	default: () => handleRequest,
	streamTimeout: () => streamTimeout
});
var streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, _loadContext) {
	initI18n(request.headers.get("Accept-Language")?.split(",")[0]?.split("-")[0] || "fr");
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
	const [dark, setDark] = useState(false);
	useEffect(() => {
		setDark(getInitialDark());
	}, []);
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
var SCROLL_THRESHOLD = 300;
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
	const [visible, setVisible] = useState(false);
	const topBtnRef = useRef(null);
	useEffect(() => {
		const onScroll = () => setVisible(window.scrollY > SCROLL_THRESHOLD);
		window.addEventListener("scroll", onScroll, { passive: true });
		onScroll();
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	useGSAP(() => {
		if (!topBtnRef.current) return;
		gsap.to(topBtnRef.current, {
			opacity: visible ? 1 : 0,
			scale: visible ? 1 : .8,
			duration: .3,
			ease: "back.out(1.5)",
			pointerEvents: visible ? "auto" : "none"
		});
	}, { dependencies: [visible] });
	return /* @__PURE__ */ jsxs("div", {
		className: "fixed bottom-6 right-6 z-50 flex flex-col-reverse items-end gap-3",
		children: [/* @__PURE__ */ jsx("button", {
			ref: topBtnRef,
			type: "button",
			onClick: useCallback(() => {
				window.scrollTo({
					top: 0,
					behavior: "smooth"
				});
			}, []),
			"aria-label": "Scroll to top",
			className: "flex h-12 w-12 items-center justify-center rounded-full bg-primary-800 text-white shadow-lg transition-colors hover:bg-primary-700 dark:bg-primary-600 dark:hover:bg-primary-500",
			style: {
				opacity: 0,
				scale: .8,
				pointerEvents: "none"
			},
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
	const [datenschutzOpen, setDatenschutzOpen] = useState(false);
	useEffect(() => {
		if (!localStorage.getItem("datenschutz-accepted")) setDatenschutzOpen(true);
	}, []);
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
//#region src/components/ui/Badge.tsx
var badgeVariants = cva("inline-block rounded-full px-4 py-1 text-xs font-bold uppercase tracking-wide", {
	variants: { variant: {
		green: "bg-primary-800 text-white",
		orange: "bg-accent-500 text-white",
		light: "bg-primary-100 text-primary-900",
		outline: "border-2 border-primary-800 text-primary-800"
	} },
	defaultVariants: { variant: "green" }
});
function Badge({ children, variant, className }) {
	return /* @__PURE__ */ jsx("span", {
		className: cn(badgeVariants({
			variant,
			className
		})),
		children
	});
}
//#endregion
//#region src/components/common/CTAButton.tsx
var ctaVariants = cva("relative inline-flex items-center justify-center gap-2 rounded-full font-bold text-sm transition shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", {
	variants: {
		variant: {
			primary: "bg-accent-500 text-white hover:bg-accent-600 shadow-accent-500/30",
			secondary: "bg-primary-800 text-white hover:bg-primary-700 shadow-primary-800/30",
			outline: "border-2 border-white text-white hover:bg-white hover:text-primary-800 shadow-none"
		},
		size: {
			md: "px-6 py-3",
			lg: "px-8 py-4"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "md"
	}
});
function CTAButton({ to, href, children, variant, size, className }) {
	const cls = cn(ctaVariants({
		variant,
		size,
		className
	}));
	if (href) return /* @__PURE__ */ jsxs("a", {
		href,
		target: "_blank",
		rel: "noopener noreferrer",
		className: cls,
		children: [children, /* @__PURE__ */ jsx(FireEffect_default, {})]
	});
	return /* @__PURE__ */ jsxs(Link, {
		to,
		className: cls,
		children: [children, /* @__PURE__ */ jsx(FireEffect_default, {})]
	});
}
//#endregion
//#region src/components/ui/Card.tsx
var Card = forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx("div", {
	ref,
	className: cn("rounded-2xl bg-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl dark:bg-gray-900 dark:hover:shadow-gray-800/50", className),
	...props,
	children
}));
Card.displayName = "Card";
var CardHeader = forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx("div", {
	ref,
	className: cn("p-6 pb-0", className),
	...props,
	children
}));
CardHeader.displayName = "CardHeader";
var CardContent = forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx("div", {
	ref,
	className: cn("p-6", className),
	...props,
	children
}));
CardContent.displayName = "CardContent";
//#endregion
//#region src/components/common/FormationCard.tsx
function FormationCardInner({ formation }) {
	const { t } = useTranslation();
	const fKey = `formations.${formation.slug}`;
	return /* @__PURE__ */ jsx(Link, {
		to: `/formations/${formation.slug}`,
		className: "group block h-full",
		children: /* @__PURE__ */ jsxs(Card, {
			className: "flex h-full flex-col",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "relative flex h-48 items-center justify-center bg-gradient-to-br from-primary-600 to-primary-800",
				children: [/* @__PURE__ */ jsx("span", {
					className: "font-heading text-2xl font-bold text-white/80",
					children: t(`${fKey}.title`)
				}), formation.badgeText && /* @__PURE__ */ jsx("div", {
					className: "absolute right-3 top-0 rotate-40",
					children: /* @__PURE__ */ jsx(Badge, {
						variant: "orange",
						children: formation.badgeText
					})
				})]
			}), /* @__PURE__ */ jsxs(CardContent, {
				className: "flex flex-1 flex-col",
				children: [
					/* @__PURE__ */ jsx("h3", {
						className: "font-heading text-xl font-bold text-primary-800 dark:text-primary-200",
						children: t(`${fKey}.title`)
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-2 flex-1 text-sm leading-relaxed text-muted-foreground",
						children: t(`${fKey}.description`)
					}),
					/* @__PURE__ */ jsx("div", {
						className: "mt-3 flex flex-wrap gap-1.5",
						children: formation.filieres.slice(0, 2).map((f, i) => /* @__PURE__ */ jsx("span", {
							className: "rounded-full bg-primary-50 px-3 py-0.5 text-xs font-medium text-primary-700 dark:bg-primary-900/50 dark:text-primary-300",
							children: t(`${fKey}.filieres.${i}`)
						}, f))
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-4 flex items-center justify-between border-t border-border pt-4",
						children: [/* @__PURE__ */ jsxs("span", {
							className: "font-heading text-lg font-bold text-accent-600 dark:text-accent-400",
							children: [formation.price.toLocaleString(), " FCFA"]
						}), /* @__PURE__ */ jsxs("span", {
							className: "relative flex items-center gap-1 rounded-full bg-primary-800 px-4 py-2 text-xs font-bold text-white transition group-hover:bg-primary-700 dark:bg-primary-700 dark:group-hover:bg-primary-600",
							children: [
								t("formationCard.cta"),
								/* @__PURE__ */ jsx(ArrowRight, {
									size: 14,
									"aria-hidden": "true"
								}),
								/* @__PURE__ */ jsx(FireEffect_default, {})
							]
						})]
					})
				]
			})]
		})
	});
}
var FormationCard = memo(FormationCardInner);
//#endregion
//#region src/components/common/SectionHeading.tsx
function SectionHeading({ badge, title, description, center = true, className }) {
	return /* @__PURE__ */ jsxs("div", {
		className: center ? "text-center" : className,
		children: [
			badge && /* @__PURE__ */ jsx(Badge, {
				variant: "green",
				children: badge
			}),
			/* @__PURE__ */ jsx("h2", {
				className: "mt-4 font-heading text-3xl font-extrabold text-primary-900 dark:text-primary-100 sm:text-4xl",
				children: title
			}),
			description && /* @__PURE__ */ jsx("p", {
				className: "mx-auto mt-3 max-w-2xl text-muted-foreground",
				children: description
			})
		]
	});
}
//#endregion
//#region src/components/common/ParallaxSection.tsx
gsap.registerPlugin(ScrollTrigger);
function ParallaxSection({ children, id, className, as: Tag = "section", speed = .15 }) {
	const ref = useRef(null);
	const innerRef = useRef(null);
	useGSAP(() => {
		if (!ref.current || !innerRef.current) return;
		const travel = window.innerHeight * speed;
		gsap.fromTo(innerRef.current, { y: -travel }, {
			y: travel,
			ease: "none",
			scrollTrigger: {
				trigger: ref.current,
				start: "top bottom",
				end: "bottom top",
				scrub: 1
			}
		});
	}, { scope: ref });
	return /* @__PURE__ */ jsx(Tag, {
		ref,
		id,
		className: cn("relative overflow-hidden", className),
		children: /* @__PURE__ */ jsx("div", {
			ref: innerRef,
			children
		})
	});
}
//#endregion
//#region src/components/common/Particles.tsx
function Particles({ quantity = 50, color = "rgba(255,255,255,0.5)", minSize = 1, maxSize = 3, speed = .3, className }) {
	const canvasRef = useRef(null);
	const particlesRef = useRef([]);
	const animRef = useRef(0);
	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;
		function resize() {
			if (!canvas) return;
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		}
		resize();
		window.addEventListener("resize", resize);
		particlesRef.current = Array.from({ length: quantity }, () => ({
			x: Math.random() * canvas.width,
			y: Math.random() * canvas.height,
			vx: (Math.random() - .5) * speed,
			vy: (Math.random() - .5) * speed,
			size: Math.random() * (maxSize - minSize) + minSize,
			opacity: Math.random() * .5 + .2
		}));
		function animate() {
			if (!canvas || !ctx) return;
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			for (const p of particlesRef.current) {
				p.x += p.vx;
				p.y += p.vy;
				if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
				if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
				ctx.beginPath();
				ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
				ctx.fillStyle = color;
				ctx.globalAlpha = p.opacity;
				ctx.fill();
			}
			ctx.globalAlpha = 1;
			animRef.current = requestAnimationFrame(animate);
		}
		animate();
		return () => {
			cancelAnimationFrame(animRef.current);
			window.removeEventListener("resize", resize);
		};
	}, [
		quantity,
		color,
		minSize,
		maxSize,
		speed
	]);
	return /* @__PURE__ */ jsx("canvas", {
		ref: canvasRef,
		className,
		"aria-hidden": "true"
	});
}
//#endregion
//#region src/components/common/RainEffect.tsx
function RainEffect({ density = 120, color = "rgba(255,255,255,1)", speed = 12, className }) {
	const canvasRef = useRef(null);
	const dropsRef = useRef([]);
	const animRef = useRef(0);
	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;
		function resize() {
			if (!canvas) return;
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		}
		resize();
		window.addEventListener("resize", resize);
		dropsRef.current = Array.from({ length: density }, () => ({
			x: Math.random() * canvas.width,
			y: Math.random() * canvas.height * -1,
			length: Math.random() * 30 + 15,
			speed: (Math.random() * 8 + 4) * speed,
			opacity: Math.random() * .7 + .08,
			width: Math.random() * 1.5 + .5
		}));
		function animate() {
			if (!canvas || !ctx) return;
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			const centerX = canvas.width / 2;
			const distScale = 1;
			for (const drop of dropsRef.current) {
				drop.y += drop.speed;
				const windOffset = (drop.x - centerX) / centerX * .3;
				drop.x += windOffset * drop.speed * .05;
				if (drop.y > canvas.height) {
					drop.y = -drop.length;
					drop.x = Math.random() * canvas.width;
				}
				ctx.beginPath();
				ctx.moveTo(drop.x, drop.y);
				ctx.lineTo(drop.x - windOffset * .5, drop.y - drop.length);
				ctx.strokeStyle = color;
				ctx.lineWidth = drop.width;
				ctx.globalAlpha = drop.opacity * distScale;
				ctx.lineCap = "round";
				ctx.stroke();
			}
			ctx.globalAlpha = 1;
			animRef.current = requestAnimationFrame(animate);
		}
		animate();
		return () => {
			cancelAnimationFrame(animRef.current);
			window.removeEventListener("resize", resize);
		};
	}, [
		density,
		color,
		speed
	]);
	return /* @__PURE__ */ jsx("canvas", {
		ref: canvasRef,
		className,
		"aria-hidden": "true"
	});
}
//#endregion
//#region src/components/common/ScrollSpyNav.tsx
function ScrollSpyNav({ sections, activeId }) {
	return /* @__PURE__ */ jsx("nav", {
		className: "fixed right-4 top-1/2 z-50 hidden -translate-y-1/2 flex-col items-center gap-4 lg:flex",
		"aria-label": "Section navigation",
		children: /* @__PURE__ */ jsx("div", {
			className: "flex flex-col items-center gap-3",
			children: sections.map((s) => {
				const isActive = activeId === s.id;
				return /* @__PURE__ */ jsxs("a", {
					href: `#${s.id}`,
					className: "group relative flex items-center",
					"aria-label": s.label,
					onClick: (e) => {
						e.preventDefault();
						document.getElementById(s.id)?.scrollIntoView({ behavior: "smooth" });
					},
					children: [/* @__PURE__ */ jsx("span", {
						className: "absolute right-full mr-3 whitespace-nowrap rounded-md bg-black/80 px-2 py-1 text-xs text-white opacity-0 transition group-hover:opacity-100",
						children: s.label
					}), /* @__PURE__ */ jsxs("div", {
						className: "relative flex h-5 w-5 items-center justify-center",
						children: [isActive && /* @__PURE__ */ jsx(motion.span, {
							layoutId: "scroll-spy-dot",
							className: "h-3 w-3 rounded-full bg-primary-800 shadow-md dark:bg-primary-400",
							transition: {
								type: "spring",
								stiffness: 500,
								damping: 30
							}
						}), !isActive && /* @__PURE__ */ jsx("span", { className: "h-2 w-2 rounded-full bg-gray-300 transition hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-500" })]
					})]
				}, s.id);
			})
		})
	});
}
//#endregion
//#region src/components/common/SEO.tsx
function SEO({ title, description, keywords }) {
	const { t, i18n } = useTranslation();
	const fullTitle = `${title} | ${t("seo.siteName")}`;
	return /* @__PURE__ */ jsxs(Helmet, { children: [
		/* @__PURE__ */ jsx("html", { lang: i18n.language }),
		/* @__PURE__ */ jsx("title", { children: fullTitle }),
		description && /* @__PURE__ */ jsx("meta", {
			name: "description",
			content: description
		}),
		keywords && /* @__PURE__ */ jsx("meta", {
			name: "keywords",
			content: keywords
		}),
		/* @__PURE__ */ jsx("meta", {
			property: "og:title",
			content: fullTitle
		}),
		description && /* @__PURE__ */ jsx("meta", {
			property: "og:description",
			content: description
		})
	] });
}
//#endregion
//#region src/hooks/useScrollSpy.ts
function useScrollSpy(sectionIds, offset = 100) {
	const [activeId, setActiveId] = useState("");
	const observerRef = useRef(null);
	useEffect(() => {
		const elements = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);
		if (elements.length === 0) return;
		observerRef.current = new IntersectionObserver((entries) => {
			const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
			if (visible.length > 0) setActiveId(visible[0].target.id);
		}, {
			rootMargin: `-${offset}px 0px -40% 0px`,
			threshold: 0
		});
		for (const el of elements) observerRef.current.observe(el);
		return () => {
			observerRef.current?.disconnect();
		};
	}, [sectionIds, offset]);
	return activeId;
}
var sectionColors = {
	hero: "#3b82f6",
	formations: "#8b5cf6",
	highlights: "#10b981",
	gallery: "#f59e0b",
	cta: "#ef4444"
};
function getSectionColor(id) {
	return sectionColors[id] || sectionColors.hero;
}
//#endregion
//#region src/hooks/useScrollReveal.ts
gsap.registerPlugin(ScrollTrigger);
function useScrollReveal(scopeRef, targets, options = {}) {
	const { stagger = .1, y = 30, opacity: fromOpacity = 0, duration = .6, ease = "power2.out", once = true, start = "top 85%" } = options;
	useGSAP(() => {
		const els = scopeRef.current?.querySelectorAll(targets);
		if (!els?.length) return;
		gsap.fromTo(els, {
			y,
			opacity: fromOpacity,
			willChange: "transform, opacity"
		}, {
			y: 0,
			opacity: 1,
			duration,
			stagger,
			ease,
			willChange: "auto",
			scrollTrigger: {
				trigger: scopeRef.current,
				start,
				once
			}
		});
	}, {
		scope: scopeRef,
		dependencies: [
			stagger,
			y,
			fromOpacity,
			duration,
			once,
			start
		]
	});
}
//#endregion
//#region src/features/formations/formationData.ts
var formations = [
	{
		slug: "construction-metallique",
		title: "Construction Métallique",
		subtitle: "Spéciale FORMATION en Construction Métallique",
		description: "Maîtrisez la soudure industrielle, la chaudronnerie et la tuyauterie industrielle avec un stage garanti en entreprise.",
		filieres: ["Soudure industrielle et montage", "Chaudronnerie et tuyauterie industrielle"],
		price: 35e4,
		currency: "FCFA",
		installments: [
			{
				amount: 15e4,
				label: "À l'inscription"
			},
			{
				amount: 1e5,
				label: "1re mensualité"
			},
			{
				amount: 1e5,
				label: "2e mensualité"
			}
		],
		badgeText: "Inscriptions ouvertes",
		skills: [
			"Lire et interpréter des plans techniques",
			"Maîtriser les procédés de soudage (MMA, MIG, TIG)",
			"Fabriquer et assembler des structures métalliques",
			"Installer et maintenir des réseaux de tuyauterie",
			"Respecter les normes de sécurité et de métallurgie",
			"Superviser des chantiers de montage industriel"
		],
		certificates: [
			"Travaux en hauteur",
			"Monteur et vérificateur d'échafaudages",
			"Secourisme (inclus)"
		],
		extras: [
			"Kit de protection (PSA)",
			"Polo CFPMIE",
			"Casquette",
			"Manuels de cours"
		]
	},
	{
		slug: "gestion-finances-management",
		title: "Gestion des Finances & Management",
		subtitle: "Spéciale FORMATION en Gestion des Finances & Management",
		description: "Devenez un professionnel polyvalent en comptabilité, secrétariat et management.",
		filieres: [
			"Sécrétariat bureautique",
			"Sécrétariat de direction",
			"Comptabilité de gestion",
			"Management"
		],
		price: 25e4,
		currency: "FCFA",
		installments: [
			{
				amount: 15e4,
				label: "À l'inscription"
			},
			{
				amount: 5e4,
				label: "1re mensualité"
			},
			{
				amount: 5e4,
				label: "2e mensualité"
			}
		],
		badgeText: "Inscriptions ouvertes",
		skills: [
			"Assurer la gestion comptable et financière",
			"Maîtriser les logiciels de bureautique et comptabilité",
			"Gérer la paie, déclarations fiscales et sociales",
			"Organiser et planifier le travail d'une équipe",
			"Assurer le secrétariat et l'accueil",
			"Élaborer des rapports et tableaux de bord"
		]
	},
	{
		slug: "electricite",
		title: "Électricité",
		subtitle: "Spéciale FORMATION en Électricité",
		description: "Spécialisez-vous en électricité bâtiment et industrielle.",
		filieres: ["Électricité bâtiment", "Électricité industrielle"],
		price: 35e4,
		currency: "FCFA",
		installments: [
			{
				amount: 15e4,
				label: "À l'inscription"
			},
			{
				amount: 1e5,
				label: "1re mensualité"
			},
			{
				amount: 1e5,
				label: "2e mensualité"
			},
			{
				amount: 1e5,
				label: "3e mensualité"
			}
		],
		badgeText: "Inscriptions ouvertes",
		skills: [
			"Lire et interpréter des schémas électriques",
			"Réaliser le câblage et les raccordements",
			"Effectuer la maintenance et le dépannage",
			"Installer des tableaux et armoires électriques",
			"Respecter les normes de sécurité électrique",
			"Travailler sur installations bâtiment et industrielles"
		],
		certificates: [
			"Habilitation électrique",
			"Travaux en hauteur",
			"Monteur et vérificateur d'échafaudages",
			"Secourisme (inclus)"
		],
		extras: [
			"Kit de protection (PSA)",
			"Polo CFPMIE",
			"Casquette",
			"Manuels de cours"
		]
	}
];
//#endregion
//#region src/pages/Home.tsx
var Home_exports = /* @__PURE__ */ __exportAll({ default: () => Home_default });
var highlights = [
	{
		icon: GraduationCap,
		key: "practice"
	},
	{
		icon: Award,
		key: "diplomas"
	},
	{
		icon: Briefcase,
		key: "internship"
	},
	{
		icon: Phone,
		key: "expertise"
	}
];
function HeroSection() {
	const { t } = useTranslation();
	return /* @__PURE__ */ jsxs("section", {
		id: "hero",
		className: "relative min-h-screen overflow-hidden bg-black",
		children: [
			/* @__PURE__ */ jsx("video", {
				autoPlay: true,
				muted: true,
				loop: true,
				playsInline: true,
				className: "absolute inset-0 h-full w-full object-cover",
				style: { filter: "brightness(0.45) saturate(1.2)" },
				children: /* @__PURE__ */ jsx("source", {
					src: "/home.mp4",
					type: "video/mp4"
				})
			}),
			/* @__PURE__ */ jsx(RainEffect, {
				density: 200,
				color: "rgba(255,255,255,0.8)",
				speed: .5,
				className: "absolute inset-0 h-full w-full"
			}),
			/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" }),
			/* @__PURE__ */ jsx("div", {
				className: "relative mx-auto flex min-h-[inherit] max-w-7xl items-center px-4 sm:px-6 lg:px-8",
				children: /* @__PURE__ */ jsxs(motion.div, {
					initial: {
						opacity: 0,
						y: 30
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: { duration: .6 },
					className: "max-w-3xl",
					children: [
						/* @__PURE__ */ jsx(Badge, {
							variant: "orange",
							children: t("home.hero.badge")
						}),
						/* @__PURE__ */ jsx("h1", {
							className: "mt-6 font-heading text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl",
							children: /* @__PURE__ */ jsx(Trans, {
								i18nKey: "home.hero.heading",
								components: {
									1: /* @__PURE__ */ jsx(motion.span, {
										initial: { rotate: 0 },
										animate: { rotate: 360 },
										transition: {
											duration: 1,
											ease: "easeInOut"
										},
										className: "inline-block font-display text-accent-300"
									}),
									2: /* @__PURE__ */ jsx("span", { className: "text-5xl sm:text-6xl lg:text-7xl" })
								}
							})
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-4 max-w-2xl text-lg leading-relaxed text-primary-100 dark:text-gray-300",
							children: t("home.hero.description")
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-8 flex flex-wrap gap-4",
							children: [/* @__PURE__ */ jsx(CTAButton, {
								to: "/contact",
								children: t("home.hero.ctaInscription")
							}), /* @__PURE__ */ jsx(CTAButton, {
								to: "/a-propos",
								variant: "outline",
								children: t("home.hero.ctaDecouvrir")
							})]
						}),
						/* @__PURE__ */ jsxs("blockquote", {
							className: "mt-8 border-l-4 border-accent-500 pl-4 italic text-primary-200 dark:text-gray-300",
							children: [t("home.hero.quote"), /* @__PURE__ */ jsx("cite", {
								className: "mt-1 block text-xs not-italic text-primary-300 dark:text-gray-400",
								children: t("home.hero.quoteCite")
							})]
						})
					]
				})
			})
		]
	});
}
function HighlightsSection() {
	const { t } = useTranslation();
	const ref = useRef(null);
	useScrollReveal(ref, ".highlight-card", {
		stagger: .1,
		y: 24
	});
	return /* @__PURE__ */ jsx("section", {
		id: "highlights",
		className: "bg-white py-16 sm:py-20 dark:bg-gray-950",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ jsx(SectionHeading, {
				badge: t("home.highlights.badge"),
				title: t("home.highlights.title")
			}), /* @__PURE__ */ jsx("div", {
				ref,
				className: "mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4",
				children: highlights.map((h) => {
					const Icon = h.icon;
					return /* @__PURE__ */ jsxs("div", {
						className: "highlight-card rounded-2xl border border-border bg-muted/50 p-6 text-center transition hover:-translate-y-1 hover:shadow-md dark:border-gray-700 dark:bg-gray-900",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary-800 text-white dark:bg-primary-700",
								children: /* @__PURE__ */ jsx(Icon, {
									size: 22,
									"aria-hidden": "true"
								})
							}),
							/* @__PURE__ */ jsx("h3", {
								className: "mt-4 font-heading text-lg font-bold text-primary-800 dark:text-primary-200",
								children: t(`home.highlights.items.${h.key}.title`)
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-2 text-sm leading-relaxed text-muted-foreground",
								children: t(`home.highlights.items.${h.key}.text`)
							})
						]
					}, h.key);
				})
			})]
		})
	});
}
function GallerySection() {
	const { t } = useTranslation();
	const ref = useRef(null);
	useScrollReveal(ref, ".gallery-item", {
		stagger: .1,
		y: 30
	});
	return /* @__PURE__ */ jsx("section", {
		className: "relative overflow-hidden bg-white py-20 sm:py-28 dark:bg-gray-950",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "max-w-2xl",
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "text-xs font-semibold tracking-[0.2em] text-primary-600 dark:text-primary-400 uppercase",
							children: t("home.gallery.badge")
						}),
						/* @__PURE__ */ jsx("h2", {
							className: "mt-5 font-heading text-3xl font-light leading-tight text-foreground sm:text-4xl lg:text-5xl",
							children: t("home.gallery.heading")
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground",
							children: t("home.gallery.description")
						})
					]
				}),
				/* @__PURE__ */ jsx("div", {
					ref,
					className: "mt-14 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:grid-rows-[240px_240px]",
					children: [
						{
							i: 1,
							span: "lg:col-span-2 lg:row-span-2",
							aspect: "aspect-[4/5] lg:aspect-auto"
						},
						{
							i: 2,
							span: "",
							aspect: "aspect-[3/2]"
						},
						{
							i: 3,
							span: "",
							aspect: "aspect-[1/1]"
						},
						{
							i: 4,
							span: "lg:col-span-2",
							aspect: "aspect-[3/1] lg:aspect-auto"
						}
					].map(({ i, span, aspect }) => {
						return /* @__PURE__ */ jsxs("div", {
							className: cn("gallery-item group relative overflow-hidden rounded-2xl bg-muted", span, aspect),
							children: [
								/* @__PURE__ */ jsx("div", {
									className: cn("absolute inset-0 bg-gradient-to-br transition-all duration-700 group-hover:scale-110", [
										"from-stone-200 to-stone-300 dark:from-stone-800 dark:to-stone-700",
										"from-amber-100 to-amber-200 dark:from-amber-900/60 dark:to-amber-800/40",
										"from-emerald-100 to-emerald-200 dark:from-emerald-900/50 dark:to-emerald-800/30",
										"from-sky-100 to-sky-200 dark:from-sky-900/50 dark:to-sky-800/30"
									][i - 1]),
									children: /* @__PURE__ */ jsx("div", {
										className: "absolute inset-0 opacity-[0.04]",
										style: { backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }
									})
								}),
								/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" }),
								/* @__PURE__ */ jsx("div", {
									className: "absolute bottom-0 left-0 right-0 translate-y-4 px-5 pb-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100",
									children: /* @__PURE__ */ jsx("p", {
										className: "text-sm font-medium text-white drop-shadow-sm",
										children: t("home.gallery.atelier", { number: i })
									})
								})
							]
						}, i);
					})
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-10 text-center text-xs text-muted-foreground/60 tracking-wide",
					children: t("home.gallery.caption")
				})
			]
		})
	});
}
function CTASection() {
	const { t } = useTranslation();
	return /* @__PURE__ */ jsx("section", {
		id: "cta",
		className: "bg-accent-500 py-12",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8",
			children: [
				/* @__PURE__ */ jsx("h2", {
					className: "font-heading text-3xl font-extrabold text-white sm:text-4xl",
					children: t("home.cta.heading")
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mx-auto mt-3 max-w-xl text-accent-100",
					children: t("home.cta.text")
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-6 flex flex-wrap justify-center gap-4",
					children: [/* @__PURE__ */ jsx(CTAButton, {
						to: "/contact",
						variant: "secondary",
						children: t("home.cta.button")
					}), /* @__PURE__ */ jsxs("a", {
						href: "https://wa.me/237670109235",
						target: "_blank",
						rel: "noopener noreferrer",
						className: "relative inline-flex items-center gap-2 rounded-full border-2 border-white px-6 py-3 text-sm font-bold text-white transition hover:bg-white hover:text-accent-500",
						children: [
							/* @__PURE__ */ jsx(Phone, {
								size: 16,
								"aria-hidden": "true"
							}),
							t("home.cta.whatsapp"),
							/* @__PURE__ */ jsx(FireEffect_default, {})
						]
					})]
				})
			]
		})
	});
}
var sectionIds = [
	"hero",
	"formations",
	"highlights",
	"gallery",
	"cta"
];
var Home_default = UNSAFE_withComponentProps(function Home() {
	const { t } = useTranslation();
	const activeId = useScrollSpy(sectionIds);
	const formationsRef = useRef(null);
	useScrollReveal(formationsRef, ".formation-card", {
		stagger: .1,
		y: 24
	});
	useEffect(() => {
		document.documentElement.style.setProperty("--scrollbar-color", getSectionColor(activeId));
	}, [activeId]);
	const meta = useMemo(() => ({
		title: t("home.seoTitle"),
		description: t("home.seoDescription")
	}), [t]);
	const sectionLabels = useMemo(() => [
		{
			id: "hero",
			label: t("home.hero.badge")
		},
		{
			id: "formations",
			label: t("home.formations.badge")
		},
		{
			id: "highlights",
			label: t("home.highlights.badge")
		},
		{
			id: "gallery",
			label: t("home.gallery.badge")
		},
		{
			id: "cta",
			label: t("home.cta.heading")
		}
	], [t]);
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(SEO, { ...meta }),
		/* @__PURE__ */ jsx(Particles, {
			quantity: 40,
			color: "rgba(255, 255, 255, 0.25)",
			minSize: 1,
			maxSize: 4,
			speed: .2,
			className: "fixed inset-0 pointer-events-none z-0"
		}),
		/* @__PURE__ */ jsx(ScrollSpyNav, {
			sections: sectionLabels,
			activeId
		}),
		/* @__PURE__ */ jsx(HeroSection, {}),
		/* @__PURE__ */ jsx(ParallaxSection, {
			id: "formations",
			className: "bg-primary-50 py-16 sm:py-20 dark:bg-gray-900",
			children: /* @__PURE__ */ jsxs("div", {
				className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
				children: [/* @__PURE__ */ jsx(SectionHeading, {
					badge: t("home.formations.badge"),
					title: t("home.formations.title"),
					description: t("home.formations.description")
				}), /* @__PURE__ */ jsx("div", {
					ref: formationsRef,
					className: "mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3",
					children: formations.map((f) => /* @__PURE__ */ jsx("div", {
						className: "formation-card",
						children: /* @__PURE__ */ jsx(FormationCard, { formation: f })
					}, f.slug))
				})]
			})
		}),
		/* @__PURE__ */ jsx(ParallaxSection, { children: /* @__PURE__ */ jsx(HighlightsSection, {}) }),
		/* @__PURE__ */ jsx(ParallaxSection, { children: /* @__PURE__ */ jsx(GallerySection, {}) }),
		/* @__PURE__ */ jsx(ParallaxSection, { children: /* @__PURE__ */ jsx(CTASection, {}) })
	] });
});
//#endregion
//#region src/components/common/FormationDetail.tsx
var containerVariants$1 = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { staggerChildren: .1 }
	}
};
var itemVariants$1 = {
	hidden: {
		opacity: 0,
		y: 20
	},
	visible: {
		opacity: 1,
		y: 0
	}
};
function PhaseSection() {
	const { t } = useTranslation();
	return /* @__PURE__ */ jsx("div", {
		className: "grid gap-4 sm:grid-cols-3",
		children: [
			{
				key: "theoretical",
				accent: false
			},
			{
				key: "project",
				accent: false
			},
			{
				key: "internship",
				accent: true
			}
		].map((item) => /* @__PURE__ */ jsxs("div", {
			className: `rounded-xl border p-4 text-center ${item.accent ? "border-accent-100 bg-accent-50 dark:border-accent-900 dark:bg-accent-900/20" : "border-border bg-muted/50 dark:border-gray-700 dark:bg-gray-800"}`,
			children: [/* @__PURE__ */ jsx("span", {
				className: `font-heading text-2xl font-bold ${item.accent ? "text-accent-600 dark:text-accent-400" : "text-primary-800 dark:text-primary-300"}`,
				children: t(`formationDetail.phase.${item.key}.months`)
			}), /* @__PURE__ */ jsx("p", {
				className: "mt-1 text-sm text-muted-foreground",
				children: t(`formationDetail.phase.${item.key}.desc`)
			})]
		}, item.key))
	});
}
function SectionWrapper({ children, i }) {
	return /* @__PURE__ */ jsx("div", {
		className: i % 2 === 1 ? "rounded-2xl bg-muted/50 p-6 sm:p-8 dark:bg-gray-900" : "",
		children
	});
}
function FormationDetail({ formation: f }) {
	const { t } = useTranslation();
	const fKey = `formations.${f.slug}`;
	const sections = [
		{
			id: "phase",
			title: t("formationDetail.sections.phase"),
			icon: "📅",
			content: /* @__PURE__ */ jsx(PhaseSection, {})
		},
		{
			id: "filieres",
			title: t("formationDetail.sections.filieres"),
			icon: "📋",
			content: /* @__PURE__ */ jsx("ul", {
				className: "space-y-3",
				children: f.filieres.map((_, i) => /* @__PURE__ */ jsxs("li", {
					className: "flex items-start gap-3",
					children: [/* @__PURE__ */ jsx("span", {
						className: "mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-800 text-xs font-bold text-white dark:bg-primary-700",
						children: i + 1
					}), /* @__PURE__ */ jsx("span", {
						className: "font-medium text-foreground",
						children: t(`${fKey}.filieres.${i}`)
					})]
				}, i))
			})
		},
		{
			id: "diplomes",
			title: t("formationDetail.sections.diplomes"),
			icon: "📜",
			content: /* @__PURE__ */ jsxs("div", {
				className: "space-y-4",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "flex flex-wrap gap-2",
						children: [
							/* @__PURE__ */ jsx(Badge, {
								variant: "green",
								children: "AQP"
							}),
							/* @__PURE__ */ jsx(Badge, {
								variant: "green",
								children: "CQP"
							}),
							/* @__PURE__ */ jsx(Badge, {
								variant: "green",
								children: "DQP"
							})
						]
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-sm text-muted-foreground",
						children: /* @__PURE__ */ jsx(Trans, {
							i18nKey: "formationDetail.diplomes.diplomaText",
							components: { 1: /* @__PURE__ */ jsx("strong", {}) }
						})
					}),
					f.certificates && /* @__PURE__ */ jsxs("div", {
						className: "rounded-xl border border-border bg-muted/50 p-4",
						children: [/* @__PURE__ */ jsx("h4", {
							className: "font-heading text-sm font-bold text-foreground",
							children: t("formationDetail.diplomes.certificates")
						}), /* @__PURE__ */ jsx("ul", {
							className: "mt-2 space-y-1 text-sm text-muted-foreground",
							children: f.certificates.map((_, i) => /* @__PURE__ */ jsxs("li", { children: ["• ", t(`${fKey}.certificates.${i}`)] }, i))
						})]
					})
				]
			})
		},
		{
			id: "competences",
			title: t("formationDetail.sections.competences"),
			icon: "⚡",
			content: /* @__PURE__ */ jsx("ul", {
				className: "grid gap-2 sm:grid-cols-2",
				children: f.skills.map((_, i) => /* @__PURE__ */ jsxs("li", {
					className: "flex items-center gap-2 rounded-lg border border-border bg-white p-3 text-sm text-foreground dark:bg-gray-800",
					children: [/* @__PURE__ */ jsx("span", {
						className: "text-primary-600 dark:text-primary-400",
						children: "✓"
					}), t(`${fKey}.skills.${i}`)]
				}, i))
			})
		},
		{
			id: "participation",
			title: t("formationDetail.sections.participation"),
			icon: "💰",
			content: /* @__PURE__ */ jsxs("div", {
				className: "space-y-6",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "rounded-xl bg-accent-50 p-6 text-center dark:bg-accent-900/20",
						children: [/* @__PURE__ */ jsx("p", {
							className: "text-sm text-muted-foreground",
							children: t("formationDetail.participation.feeLabel")
						}), /* @__PURE__ */ jsxs("p", {
							className: "font-heading text-4xl font-extrabold text-accent-600 dark:text-accent-400",
							children: [f.price.toLocaleString(), " FCFA"]
						})]
					}),
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
						className: "font-heading text-sm font-bold text-foreground",
						children: t("formationDetail.participation.paymentLabel", { count: f.installments.length })
					}), /* @__PURE__ */ jsx("div", {
						className: "mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
						children: f.installments.map((inst, i) => /* @__PURE__ */ jsxs("div", {
							className: "rounded-lg border border-border p-4 text-center",
							children: [/* @__PURE__ */ jsxs("span", {
								className: "font-heading text-lg font-bold text-primary-800 dark:text-primary-300",
								children: [inst.amount.toLocaleString(), " FCFA"]
							}), /* @__PURE__ */ jsx("p", {
								className: "text-xs text-muted-foreground",
								children: t(`${fKey}.installments.${i}`)
							})]
						}, inst.label))
					})] }),
					f.extras && /* @__PURE__ */ jsxs("div", {
						className: "rounded-xl border-2 border-accent-200 bg-accent-50/50 p-4 dark:border-accent-800 dark:bg-accent-900/10",
						children: [/* @__PURE__ */ jsx("h5", {
							className: "font-heading text-sm font-bold text-accent-700 dark:text-accent-400",
							children: t("formationDetail.participation.included")
						}), /* @__PURE__ */ jsx("div", {
							className: "mt-2 flex flex-wrap gap-2",
							children: f.extras.map((_, i) => /* @__PURE__ */ jsx("span", {
								className: "rounded-full bg-white px-3 py-1 text-xs font-medium text-primary-700 dark:bg-gray-800 dark:text-primary-300",
								children: t(`${fKey}.extras.${i}`)
							}, i))
						})]
					})
				]
			})
		}
	];
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx("section", {
			className: "bg-gradient-to-br from-primary-800 via-primary-700 to-primary-600 py-16 sm:py-20 dark:from-gray-900 dark:to-gray-800",
			children: /* @__PURE__ */ jsxs("div", {
				className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
				children: [
					/* @__PURE__ */ jsx(Badge, {
						variant: "orange",
						children: t("formationDetail.badge")
					}),
					/* @__PURE__ */ jsxs(motion.h1, {
						initial: {
							opacity: 0,
							x: -20
						},
						animate: {
							opacity: 1,
							x: 0
						},
						className: "mt-4 font-heading text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl",
						children: [
							/* @__PURE__ */ jsx(motion.span, {
								initial: { rotate: 0 },
								animate: { rotate: 360 },
								transition: {
									duration: 1,
									ease: "easeInOut"
								},
								className: "inline-block font-display text-accent-300",
								children: t("formationDetail.heroSpecial")
							}),
							" ",
							/* @__PURE__ */ jsx("span", {
								className: "block",
								children: t("formationDetail.heroFormation")
							}),
							/* @__PURE__ */ jsx("span", {
								className: "block",
								children: t(`${fKey}.title`)
							})
						]
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-4 max-w-2xl text-lg text-primary-100 dark:text-gray-300",
						children: t(`${fKey}.description`)
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-6 flex flex-wrap gap-4",
						children: [/* @__PURE__ */ jsx(CTAButton, {
							to: "/contact",
							children: t("formationDetail.ctaInscrire")
						}), /* @__PURE__ */ jsxs("a", {
							href: "https://wa.me/237670109235",
							target: "_blank",
							rel: "noopener noreferrer",
							className: "relative inline-flex items-center gap-2 rounded-full border-2 border-white px-6 py-3 text-sm font-bold text-white transition hover:bg-white hover:text-primary-800",
							children: [
								/* @__PURE__ */ jsx(Phone, {
									size: 16,
									"aria-hidden": "true"
								}),
								t("formationDetail.whatsapp"),
								/* @__PURE__ */ jsx(FireEffect_default, {})
							]
						})]
					})
				]
			})
		}),
		/* @__PURE__ */ jsx("div", {
			className: "bg-white py-12 sm:py-16 dark:bg-gray-950",
			children: /* @__PURE__ */ jsx("div", {
				className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
				children: /* @__PURE__ */ jsx(motion.div, {
					variants: containerVariants$1,
					initial: "hidden",
					whileInView: "visible",
					viewport: { once: true },
					className: "space-y-16",
					children: sections.map((s, i) => /* @__PURE__ */ jsx(motion.section, {
						id: s.id,
						variants: itemVariants$1,
						children: /* @__PURE__ */ jsxs(SectionWrapper, {
							i,
							children: [/* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ jsx("span", {
									className: "text-2xl",
									"aria-hidden": "true",
									children: s.icon
								}), /* @__PURE__ */ jsx("h2", {
									className: "font-heading text-2xl font-extrabold text-primary-900 dark:text-primary-100 sm:text-3xl",
									children: s.title
								})]
							}), /* @__PURE__ */ jsx("div", {
								className: "mt-6 max-w-3xl",
								children: s.content
							})]
						})
					}, s.id))
				})
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "bg-accent-500 py-12 dark:bg-accent-700",
			children: /* @__PURE__ */ jsxs("div", {
				className: "mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8",
				children: [
					/* @__PURE__ */ jsx("h2", {
						className: "font-heading text-3xl font-extrabold text-white",
						children: t("formationDetail.cta.heading")
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mx-auto mt-3 max-w-xl text-accent-100",
						children: t("formationDetail.cta.text")
					}),
					/* @__PURE__ */ jsx("div", {
						className: "mt-6",
						children: /* @__PURE__ */ jsx(CTAButton, {
							to: "/contact",
							variant: "secondary",
							children: t("formationDetail.cta.button")
						})
					})
				]
			})
		})
	] });
}
//#endregion
//#region src/pages/ConstructionMetallique.tsx
var ConstructionMetallique_exports = /* @__PURE__ */ __exportAll({ default: () => ConstructionMetallique_default });
var f$2 = formations.find((f) => f.slug === "construction-metallique");
var ConstructionMetallique_default = UNSAFE_withComponentProps(function ConstructionMetallique() {
	const { t } = useTranslation();
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(SEO, { ...useMemo(() => ({
		title: t("formations.construction-metallique.title"),
		description: t("formations.construction-metallique.description") + " Diplômes AQP/CQP/DQP, stage garanti.",
		keywords: "soudure, chaudronnerie, tuyauterie, formation professionnelle, Douala, Cameroun"
	}), [t]) }), /* @__PURE__ */ jsx(FormationDetail, { formation: f$2 })] });
});
//#endregion
//#region src/pages/GestionFinances.tsx
var GestionFinances_exports = /* @__PURE__ */ __exportAll({ default: () => GestionFinances_default });
var f$1 = formations.find((f) => f.slug === "gestion-finances-management");
var GestionFinances_default = UNSAFE_withComponentProps(function GestionFinances() {
	const { t } = useTranslation();
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(SEO, { ...useMemo(() => ({
		title: t("formations.gestion-finances-management.title"),
		description: t("formations.gestion-finances-management.description") + " Diplômes AQP/CQP/DQP, stage garanti.",
		keywords: "comptabilité, gestion, secrétariat, management, formation professionnelle, Douala"
	}), [t]) }), /* @__PURE__ */ jsx(FormationDetail, { formation: f$1 })] });
});
//#endregion
//#region src/pages/Electricite.tsx
var Electricite_exports = /* @__PURE__ */ __exportAll({ default: () => Electricite_default });
var f = formations.find((f) => f.slug === "electricite");
var Electricite_default = UNSAFE_withComponentProps(function Electricite() {
	const { t } = useTranslation();
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(SEO, { ...useMemo(() => ({
		title: t("formations.electricite.title"),
		description: t("formations.electricite.description") + " Diplômes AQP/CQP/DQP, stage garanti.",
		keywords: "électricité, bâtiment, industrielle, formation professionnelle, Douala, Cameroun"
	}), [t]) }), /* @__PURE__ */ jsx(FormationDetail, { formation: f })] });
});
//#endregion
//#region src/pages/About.tsx
var About_exports = /* @__PURE__ */ __exportAll({ default: () => About_default });
var values = [
	{
		icon: GraduationCap,
		key: "practice"
	},
	{
		icon: Users,
		key: "mentoring"
	},
	{
		icon: Briefcase,
		key: "employment"
	},
	{
		icon: Award,
		key: "diplomas"
	}
];
var facilities = [
	{ key: "welding" },
	{ key: "electrical" },
	{ key: "office" },
	{ key: "workshop" },
	{ key: "classrooms" },
	{ key: "lounge" }
];
var About_default = UNSAFE_withComponentProps(function About() {
	const { t } = useTranslation();
	const valuesRef = useRef(null);
	const facilitiesRef = useRef(null);
	useScrollReveal(valuesRef, ".value-card", {
		stagger: .1,
		y: 24
	});
	useScrollReveal(facilitiesRef, ".facility-card", {
		stagger: .08,
		y: 24
	});
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(SEO, { ...useMemo(() => ({
			title: t("about.seoTitle"),
			description: t("about.seoDescription")
		}), [t]) }),
		/* @__PURE__ */ jsx("section", {
			className: "bg-gradient-to-br from-primary-800 via-primary-700 to-primary-600 py-16 sm:py-20 dark:from-gray-900 dark:to-gray-800",
			children: /* @__PURE__ */ jsxs("div", {
				className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
				children: [
					/* @__PURE__ */ jsx(Badge, {
						variant: "orange",
						children: t("about.hero.badge")
					}),
					/* @__PURE__ */ jsx("h1", {
						className: "mt-4 font-heading text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl",
						children: t("about.hero.title")
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-4 max-w-2xl text-lg text-primary-100 dark:text-gray-300",
						children: t("about.hero.subtitle")
					})
				]
			})
		}),
		/* @__PURE__ */ jsx(ParallaxSection, {
			className: "bg-white py-16 dark:bg-gray-950",
			children: /* @__PURE__ */ jsx("div", {
				className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto max-w-3xl text-center",
					children: [
						/* @__PURE__ */ jsx("h2", {
							className: "font-heading text-3xl font-extrabold text-primary-900 dark:text-primary-100",
							children: t("about.philosophy.title")
						}),
						/* @__PURE__ */ jsx("blockquote", {
							className: "mt-6 text-xl leading-relaxed italic text-muted-foreground",
							children: t("about.philosophy.quote")
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-6 leading-relaxed text-muted-foreground",
							children: t("about.philosophy.p1")
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-4 leading-relaxed text-muted-foreground",
							children: /* @__PURE__ */ jsx(Trans, {
								i18nKey: "about.philosophy.p2",
								components: { 1: /* @__PURE__ */ jsx("strong", {}) }
							})
						})
					]
				})
			})
		}),
		/* @__PURE__ */ jsx(ParallaxSection, {
			className: "bg-primary-50 py-16 dark:bg-gray-900",
			children: /* @__PURE__ */ jsxs("div", {
				className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
				children: [/* @__PURE__ */ jsx(SectionHeading, {
					badge: t("about.values.badge"),
					title: t("about.values.title")
				}), /* @__PURE__ */ jsx("div", {
					ref: valuesRef,
					className: "mt-12 grid gap-6 sm:grid-cols-2",
					children: values.map((v) => {
						const Icon = v.icon;
						return /* @__PURE__ */ jsxs("div", {
							className: "value-card rounded-2xl border border-border bg-white p-6 shadow-sm dark:bg-gray-800",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "flex h-10 w-10 items-center justify-center rounded-full bg-primary-800 text-white dark:bg-primary-700",
									children: /* @__PURE__ */ jsx(Icon, {
										size: 20,
										"aria-hidden": "true"
									})
								}),
								/* @__PURE__ */ jsx("h3", {
									className: "mt-4 font-heading text-lg font-bold text-primary-800 dark:text-primary-200",
									children: t(`about.values.items.${v.key}.title`)
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-2 text-sm leading-relaxed text-muted-foreground",
									children: t(`about.values.items.${v.key}.text`)
								})
							]
						}, v.key);
					})
				})]
			})
		}),
		/* @__PURE__ */ jsx(ParallaxSection, {
			className: "bg-white py-16 dark:bg-gray-950",
			children: /* @__PURE__ */ jsxs("div", {
				className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
				children: [
					/* @__PURE__ */ jsx(SectionHeading, {
						badge: t("about.facilities.badge"),
						title: t("about.facilities.title")
					}),
					/* @__PURE__ */ jsx("div", {
						ref: facilitiesRef,
						className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
						children: facilities.map((item) => /* @__PURE__ */ jsx("div", {
							className: "facility-card group overflow-hidden rounded-xl bg-gradient-to-br from-primary-600 to-primary-700 shadow-lg dark:from-gray-700 dark:to-gray-800",
							children: /* @__PURE__ */ jsx("div", {
								className: "flex aspect-[4/3] items-center justify-center p-6 transition group-hover:scale-105",
								children: /* @__PURE__ */ jsxs("div", {
									className: "text-center",
									children: [
										/* @__PURE__ */ jsx(Image, {
											className: "mx-auto h-10 w-10 text-primary-300 dark:text-gray-400",
											"aria-hidden": "true"
										}),
										/* @__PURE__ */ jsx("h3", {
											className: "mt-3 font-heading text-lg font-bold text-white",
											children: t(`about.facilities.items.${item.key}.title`)
										}),
										/* @__PURE__ */ jsx("p", {
											className: "mt-1 text-sm text-primary-200 dark:text-gray-300",
											children: t(`about.facilities.items.${item.key}.desc`)
										})
									]
								})
							})
						}, item.key))
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-6 text-center text-sm italic text-muted-foreground",
						children: t("about.facilities.caption")
					})
				]
			})
		})
	] });
});
//#endregion
//#region src/pages/Contact.tsx
var Contact_exports = /* @__PURE__ */ __exportAll({ default: () => Contact_default });
var Contact_default = UNSAFE_withComponentProps(function Contact() {
	const { t } = useTranslation();
	const [status, setStatus] = useState("idle");
	const schema = useMemo(() => z.object({
		nom: z.string().min(2, t("contact.form.errors.name")),
		telephone: z.string().min(6, t("contact.form.errors.phone")),
		formation: z.string().min(1, t("contact.form.errors.formation")),
		message: z.string().optional()
	}), [t]);
	const contactInfo = useMemo(() => [
		{
			icon: MapPin,
			title: t("contact.info.address"),
			content: t("contact.info.addressValue")
		},
		{
			icon: Phone,
			title: t("contact.info.phone"),
			content: t("contact.info.phoneValue"),
			href: "tel:+237659245821"
		},
		{
			icon: MessageCircle,
			title: t("contact.info.whatsapp"),
			content: t("contact.info.whatsappValue"),
			href: "https://wa.me/237670109235"
		},
		{
			icon: Mail,
			title: t("contact.info.email"),
			content: t("contact.info.emailValue"),
			href: "mailto:contact@cfpmie.com"
		},
		{
			icon: Globe,
			title: t("contact.info.website"),
			content: t("contact.info.websiteValue"),
			href: "https://www.formationcfpmie.com"
		}
	], [t]);
	const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(schema) });
	const onSubmit = useCallback((data) => {
		setStatus("sending");
		const text = t("contact.whatsappMessage", {
			nom: data.nom,
			telephone: data.telephone,
			formation: data.formation,
			message: data.message || ""
		});
		try {
			window.open(`https://wa.me/237670109235?text=${text}`, "_blank");
			setStatus("success");
		} catch {
			setStatus("error");
		}
		setTimeout(() => setStatus("idle"), 3e3);
	}, [t]);
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(SEO, { ...useMemo(() => ({
			title: t("contact.seoTitle"),
			description: t("contact.seoDescription")
		}), [t]) }),
		/* @__PURE__ */ jsx("section", {
			className: "bg-gradient-to-br from-primary-800 via-primary-700 to-primary-600 py-16 sm:py-20 dark:from-gray-900 dark:to-gray-800",
			children: /* @__PURE__ */ jsxs("div", {
				className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
				children: [
					/* @__PURE__ */ jsx(Badge, {
						variant: "orange",
						children: t("contact.hero.badge")
					}),
					/* @__PURE__ */ jsx(motion.h1, {
						initial: {
							opacity: 0,
							x: -20
						},
						animate: {
							opacity: 1,
							x: 0
						},
						className: "mt-4 font-heading text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl",
						children: t("contact.hero.title")
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-4 max-w-2xl text-lg text-primary-100 dark:text-gray-300",
						children: t("contact.hero.description")
					})
				]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "bg-white py-12 sm:py-16 dark:bg-gray-950",
			children: /* @__PURE__ */ jsx("div", {
				className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
				children: /* @__PURE__ */ jsxs("div", {
					className: "grid gap-12 lg:grid-cols-2",
					children: [/* @__PURE__ */ jsxs(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: { duration: .4 },
						children: [
							/* @__PURE__ */ jsx("h2", {
								className: "font-heading text-2xl font-extrabold text-foreground",
								children: t("contact.form.title")
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: t("contact.form.description")
							}),
							status === "success" ? /* @__PURE__ */ jsxs("div", {
								className: "mt-6 rounded-xl border border-primary-200 bg-primary-50 p-8 text-center dark:border-primary-800 dark:bg-primary-900/20",
								role: "status",
								children: [
									/* @__PURE__ */ jsx(CheckCircle2, {
										className: "mx-auto h-12 w-12 text-primary-600 dark:text-primary-400",
										"aria-hidden": "true"
									}),
									/* @__PURE__ */ jsx("p", {
										className: "mt-3 font-heading text-lg font-bold text-primary-800 dark:text-primary-200",
										children: t("contact.form.successTitle")
									}),
									/* @__PURE__ */ jsx("p", {
										className: "mt-1 text-sm text-muted-foreground",
										children: t("contact.form.successText")
									})
								]
							}) : /* @__PURE__ */ jsxs("form", {
								onSubmit: handleSubmit(onSubmit),
								className: "mt-6 space-y-5",
								noValidate: true,
								children: [
									/* @__PURE__ */ jsxs("div", { children: [
										/* @__PURE__ */ jsxs("label", {
											htmlFor: "nom",
											className: "block text-sm font-medium text-foreground",
											children: [
												t("contact.form.nameLabel"),
												" ",
												/* @__PURE__ */ jsx("span", {
													className: "text-accent-500",
													children: t("contact.form.required")
												})
											]
										}),
										/* @__PURE__ */ jsx("input", {
											...register("nom"),
											type: "text",
											id: "nom",
											className: "mt-1 block w-full rounded-lg border border-border px-4 py-3 text-sm text-foreground placeholder-muted-foreground transition focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20 dark:bg-gray-800",
											placeholder: t("contact.form.namePlaceholder"),
											"aria-invalid": !!errors.nom,
											"aria-describedby": errors.nom ? "nom-error" : void 0
										}),
										errors.nom && /* @__PURE__ */ jsx("p", {
											id: "nom-error",
											className: "mt-1 text-xs text-accent-600 dark:text-accent-400",
											role: "alert",
											children: errors.nom.message
										})
									] }),
									/* @__PURE__ */ jsxs("div", { children: [
										/* @__PURE__ */ jsxs("label", {
											htmlFor: "telephone",
											className: "block text-sm font-medium text-foreground",
											children: [
												t("contact.form.phoneLabel"),
												" ",
												/* @__PURE__ */ jsx("span", {
													className: "text-accent-500",
													children: t("contact.form.required")
												})
											]
										}),
										/* @__PURE__ */ jsx("input", {
											...register("telephone"),
											type: "tel",
											id: "telephone",
											className: "mt-1 block w-full rounded-lg border border-border px-4 py-3 text-sm text-foreground placeholder-muted-foreground transition focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20 dark:bg-gray-800",
											placeholder: t("contact.form.phonePlaceholder"),
											"aria-invalid": !!errors.telephone,
											"aria-describedby": errors.telephone ? "tel-error" : void 0
										}),
										errors.telephone && /* @__PURE__ */ jsx("p", {
											id: "tel-error",
											className: "mt-1 text-xs text-accent-600 dark:text-accent-400",
											role: "alert",
											children: errors.telephone.message
										})
									] }),
									/* @__PURE__ */ jsxs("div", { children: [
										/* @__PURE__ */ jsxs("label", {
											htmlFor: "formation",
											className: "block text-sm font-medium text-foreground",
											children: [
												t("contact.form.formationLabel"),
												" ",
												/* @__PURE__ */ jsx("span", {
													className: "text-accent-500",
													children: t("contact.form.required")
												})
											]
										}),
										/* @__PURE__ */ jsxs("select", {
											...register("formation"),
											id: "formation",
											className: "mt-1 block w-full rounded-lg border border-border px-4 py-3 text-sm text-foreground transition focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20 dark:bg-gray-800",
											"aria-invalid": !!errors.formation,
											"aria-describedby": errors.formation ? "formation-error" : void 0,
											children: [/* @__PURE__ */ jsx("option", {
												value: "",
												children: t("contact.form.formationPlaceholder")
											}), formations.map((f) => {
												const fKey = `formations.${f.slug}`;
												return /* @__PURE__ */ jsx("option", {
													value: t(`${fKey}.title`),
													children: t(`${fKey}.title`)
												}, f.slug);
											})]
										}),
										errors.formation && /* @__PURE__ */ jsx("p", {
											id: "formation-error",
											className: "mt-1 text-xs text-accent-600 dark:text-accent-400",
											role: "alert",
											children: errors.formation.message
										})
									] }),
									/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
										htmlFor: "message",
										className: "block text-sm font-medium text-foreground",
										children: t("contact.form.messageLabel")
									}), /* @__PURE__ */ jsx("textarea", {
										...register("message"),
										id: "message",
										rows: 4,
										className: "mt-1 block w-full rounded-lg border border-border px-4 py-3 text-sm text-foreground placeholder-muted-foreground transition focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20 resize-y min-h-[100px] dark:bg-gray-800",
										placeholder: t("contact.form.messagePlaceholder")
									})] }),
									/* @__PURE__ */ jsxs(Button, {
										type: "submit",
										size: "lg",
										className: "w-full",
										disabled: status === "sending",
										children: [status === "sending" ? /* @__PURE__ */ jsx(Loader2, {
											className: "h-5 w-5 animate-spin",
											"aria-hidden": "true"
										}) : /* @__PURE__ */ jsx(Send, {
											size: 18,
											"aria-hidden": "true"
										}), status === "sending" ? t("contact.form.sending") : t("contact.form.submit")]
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-center text-xs text-muted-foreground",
										children: t("contact.form.redirectNote")
									})
								]
							})
						]
					}), /* @__PURE__ */ jsxs(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .4,
							delay: .1
						},
						children: [
							/* @__PURE__ */ jsx("h2", {
								className: "font-heading text-2xl font-extrabold text-foreground",
								children: t("contact.info.title")
							}),
							/* @__PURE__ */ jsx("div", {
								className: "mt-6 space-y-4",
								children: contactInfo.map((info) => {
									const Icon = info.icon;
									return /* @__PURE__ */ jsxs(info.href ? "a" : "div", {
										...info.href ? {
											href: info.href,
											target: "_blank",
											rel: "noopener noreferrer"
										} : {},
										className: "flex items-start gap-4 rounded-xl border border-border bg-muted/50 p-4 transition hover:shadow-md",
										children: [/* @__PURE__ */ jsx("div", {
											className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-800 text-white dark:bg-primary-700",
											children: /* @__PURE__ */ jsx(Icon, {
												size: 18,
												"aria-hidden": "true"
											})
										}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
											className: "font-heading font-bold text-foreground",
											children: info.title
										}), /* @__PURE__ */ jsx("p", {
											className: "text-sm text-muted-foreground",
											children: info.content
										})] })]
									}, info.title);
								})
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "mt-8",
								children: [/* @__PURE__ */ jsx("h3", {
									className: "font-heading font-bold text-foreground",
									children: t("contact.social.title")
								}), /* @__PURE__ */ jsx("div", {
									className: "mt-3 flex flex-wrap gap-3",
									children: [
										"Facebook",
										"Instagram",
										"YouTube",
										"TikTok",
										"X"
									].map((s) => /* @__PURE__ */ jsx("a", {
										href: "#",
										target: "_blank",
										rel: "noopener noreferrer",
										className: "rounded-full bg-muted px-4 py-2 text-sm font-medium text-primary-700 transition hover:bg-primary-800 hover:text-white dark:text-primary-300 dark:hover:bg-primary-700",
										children: s
									}, s))
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "mt-8",
								children: [
									/* @__PURE__ */ jsx("h3", {
										className: "font-heading font-bold text-foreground",
										children: t("contact.map.title")
									}),
									/* @__PURE__ */ jsx("div", {
										className: "mt-3 overflow-hidden rounded-xl",
										children: /* @__PURE__ */ jsx("iframe", {
											title: t("contact.map.iframeTitle"),
											src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.6961979996663!2d9.7678!3d4.0511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x106112c4b3f1e1db%3A0x9e0f1e2e3a4b5c6d!2sDouala!5e0!3m2!1sfr!2scm!4v1",
											width: "100%",
											height: "250",
											style: { border: 0 },
											allowFullScreen: true,
											loading: "lazy",
											referrerPolicy: "no-referrer-when-downgrade"
										})
									}),
									/* @__PURE__ */ jsx("p", {
										className: "mt-2 text-xs italic text-muted-foreground",
										children: t("contact.map.location")
									})
								]
							})
						]
					})]
				})
			})
		})
	] });
});
//#endregion
//#region src/pages/NotFound.tsx
var NotFound_exports = /* @__PURE__ */ __exportAll({ default: () => NotFound_default });
var containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: .15,
			delayChildren: .1
		}
	}
};
var itemVariants = {
	hidden: {
		opacity: 0,
		y: 24
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: .5,
			ease: "easeOut"
		}
	}
};
var numberVariants = {
	hidden: {
		opacity: 0,
		scale: .5,
		rotate: -6
	},
	visible: {
		opacity: 1,
		scale: 1,
		rotate: 0,
		transition: {
			duration: .5,
			ease: "easeOut"
		}
	}
};
var NotFound_default = UNSAFE_withComponentProps(function NotFound() {
	const { t } = useTranslation();
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(SEO, { title: t("notFound.seoTitle") }), /* @__PURE__ */ jsx("section", {
		className: "flex min-h-[70vh] items-center justify-center bg-white dark:bg-gray-950",
		children: /* @__PURE__ */ jsxs(motion.div, {
			className: "text-center",
			variants: containerVariants,
			initial: "hidden",
			animate: "visible",
			children: [
				/* @__PURE__ */ jsx(motion.span, {
					variants: numberVariants,
					className: "inline-block font-heading text-8xl font-extrabold text-primary-800 dark:text-primary-400",
					children: "404"
				}),
				/* @__PURE__ */ jsx(motion.h1, {
					variants: itemVariants,
					className: "mt-4 font-heading text-2xl font-bold text-foreground",
					children: t("notFound.title")
				}),
				/* @__PURE__ */ jsx(motion.p, {
					variants: itemVariants,
					className: "mt-2 text-muted-foreground",
					children: t("notFound.message")
				}),
				/* @__PURE__ */ jsx(motion.div, {
					variants: itemVariants,
					className: "mt-6",
					children: /* @__PURE__ */ jsxs(Link, {
						to: "/",
						className: "group inline-flex items-center gap-2 rounded-full bg-primary-800 px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-primary-700 hover:shadow-xl",
						children: [/* @__PURE__ */ jsx(Home, {
							size: 16,
							"aria-hidden": "true",
							className: "transition group-hover:-translate-x-1"
						}), t("notFound.button")]
					})
				})
			]
		})
	})] });
});
//#endregion
//#region \0virtual:react-router/server-manifest
var server_manifest_default = {
	"entry": {
		"module": "/assets/entry.client-C4uaqE-G.js",
		"imports": [
			"/assets/jsx-runtime-Bsf_swfW.js",
			"/assets/errorBoundaries-Bbu02qOb.js",
			"/assets/i18next-BZ5GV2SN.js"
		],
		"css": ["/assets/entry-oSsQtaLr.css"]
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
			"module": "/assets/root-C4kTsjaH.js",
			"imports": [
				"/assets/jsx-runtime-Bsf_swfW.js",
				"/assets/errorBoundaries-Bbu02qOb.js",
				"/assets/i18next-BZ5GV2SN.js",
				"/assets/lib-DLzQ_dr5.js",
				"/assets/Trans-BKonLIzI.js",
				"/assets/createLucideIcon-SUsox98q.js",
				"/assets/proxy-DE6kuGH7.js",
				"/assets/src-Cr-w0hM-.js",
				"/assets/Button-V-YlDOWY.js",
				"/assets/FireEffect-geflExA3.js",
				"/assets/dist-IvYBVv6m.js"
			],
			"css": ["/assets/entry-oSsQtaLr.css"],
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
			"module": "/assets/Home-iBS-dIVV.js",
			"imports": [
				"/assets/jsx-runtime-Bsf_swfW.js",
				"/assets/lib-DLzQ_dr5.js",
				"/assets/Trans-BKonLIzI.js",
				"/assets/createLucideIcon-SUsox98q.js",
				"/assets/proxy-DE6kuGH7.js",
				"/assets/useScrollReveal-gJL3eDeX.js",
				"/assets/src-Cr-w0hM-.js",
				"/assets/FireEffect-geflExA3.js",
				"/assets/dist-IvYBVv6m.js",
				"/assets/Badge-DJA8_dCM.js",
				"/assets/CTAButton-C9iHJ1ii.js",
				"/assets/SEO-CcmqX6Cj.js",
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
			"module": "/assets/ConstructionMetallique-B93Wld0c.js",
			"imports": [
				"/assets/jsx-runtime-Bsf_swfW.js",
				"/assets/createLucideIcon-SUsox98q.js",
				"/assets/SEO-CcmqX6Cj.js",
				"/assets/formationData-BLvqhryv.js",
				"/assets/FormationDetail-Ajsztjgn.js",
				"/assets/Trans-BKonLIzI.js",
				"/assets/proxy-DE6kuGH7.js",
				"/assets/FireEffect-geflExA3.js",
				"/assets/Badge-DJA8_dCM.js",
				"/assets/CTAButton-C9iHJ1ii.js",
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
			"module": "/assets/GestionFinances-ArZLv0tq.js",
			"imports": [
				"/assets/jsx-runtime-Bsf_swfW.js",
				"/assets/createLucideIcon-SUsox98q.js",
				"/assets/SEO-CcmqX6Cj.js",
				"/assets/formationData-BLvqhryv.js",
				"/assets/FormationDetail-Ajsztjgn.js",
				"/assets/Trans-BKonLIzI.js",
				"/assets/proxy-DE6kuGH7.js",
				"/assets/FireEffect-geflExA3.js",
				"/assets/Badge-DJA8_dCM.js",
				"/assets/CTAButton-C9iHJ1ii.js",
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
			"module": "/assets/Electricite-BRfVdwr4.js",
			"imports": [
				"/assets/jsx-runtime-Bsf_swfW.js",
				"/assets/createLucideIcon-SUsox98q.js",
				"/assets/SEO-CcmqX6Cj.js",
				"/assets/formationData-BLvqhryv.js",
				"/assets/FormationDetail-Ajsztjgn.js",
				"/assets/Trans-BKonLIzI.js",
				"/assets/proxy-DE6kuGH7.js",
				"/assets/FireEffect-geflExA3.js",
				"/assets/Badge-DJA8_dCM.js",
				"/assets/CTAButton-C9iHJ1ii.js",
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
			"module": "/assets/About-CjQvRgDO.js",
			"imports": [
				"/assets/jsx-runtime-Bsf_swfW.js",
				"/assets/Trans-BKonLIzI.js",
				"/assets/createLucideIcon-SUsox98q.js",
				"/assets/useScrollReveal-gJL3eDeX.js",
				"/assets/src-Cr-w0hM-.js",
				"/assets/Badge-DJA8_dCM.js",
				"/assets/SEO-CcmqX6Cj.js",
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
			"module": "/assets/Contact-WtNhWvKg.js",
			"imports": [
				"/assets/jsx-runtime-Bsf_swfW.js",
				"/assets/createLucideIcon-SUsox98q.js",
				"/assets/proxy-DE6kuGH7.js",
				"/assets/Button-V-YlDOWY.js",
				"/assets/FireEffect-geflExA3.js",
				"/assets/Badge-DJA8_dCM.js",
				"/assets/SEO-CcmqX6Cj.js",
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
			"module": "/assets/NotFound-DD05Pah4.js",
			"imports": [
				"/assets/jsx-runtime-Bsf_swfW.js",
				"/assets/lib-DLzQ_dr5.js",
				"/assets/createLucideIcon-SUsox98q.js",
				"/assets/proxy-DE6kuGH7.js",
				"/assets/SEO-CcmqX6Cj.js",
				"/assets/errorBoundaries-Bbu02qOb.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		}
	},
	"url": "/assets/manifest-9567582b.js",
	"version": "9567582b",
	"sri": void 0
};
//#endregion
//#region \0virtual:react-router/server-build
var assetsBuildDirectory = "build\\client";
var basename = "/";
var future = { "unstable_optimizeDeps": false };
var ssr = true;
var isSpaMode = false;
var prerender = [];
var routeDiscovery = {
	"mode": "lazy",
	"manifestPath": "/__manifest"
};
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
		module: Home_exports
	},
	"pages/ConstructionMetallique": {
		id: "pages/ConstructionMetallique",
		parentId: "root",
		path: "/formations/construction-metallique",
		index: void 0,
		caseSensitive: void 0,
		module: ConstructionMetallique_exports
	},
	"pages/GestionFinances": {
		id: "pages/GestionFinances",
		parentId: "root",
		path: "/formations/gestion-finances-management",
		index: void 0,
		caseSensitive: void 0,
		module: GestionFinances_exports
	},
	"pages/Electricite": {
		id: "pages/Electricite",
		parentId: "root",
		path: "/formations/electricite",
		index: void 0,
		caseSensitive: void 0,
		module: Electricite_exports
	},
	"pages/About": {
		id: "pages/About",
		parentId: "root",
		path: "/a-propos",
		index: void 0,
		caseSensitive: void 0,
		module: About_exports
	},
	"pages/Contact": {
		id: "pages/Contact",
		parentId: "root",
		path: "/contact",
		index: void 0,
		caseSensitive: void 0,
		module: Contact_exports
	},
	"pages/NotFound": {
		id: "pages/NotFound",
		parentId: "root",
		path: "*",
		index: void 0,
		caseSensitive: void 0,
		module: NotFound_exports
	}
};
var allowedActionOrigins = false;
//#endregion
export { allowedActionOrigins, server_manifest_default as assets, assetsBuildDirectory, basename, entry, future, isSpaMode, prerender, publicPath, routeDiscovery, routes, ssr };
