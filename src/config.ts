import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
	website: "https://darshi1337.vercel.app",
	author: "Priyadarshi Annupam",
	desc: "PhD in instagram osint (self given)",
	title: "darshi.1337",
	ogImage: "astropaper-og.jpg",
	lightAndDarkMode: true,
	postPerPage: 3,
};

export const LOCALE = "en-EN"; // set to [] to use the environment default

export const LOGO_IMAGE = {
	enable: false,
	svg: true,
	width: 216,
	height: 46,
};

export const SOCIALS: SocialObjects = [
	{
		name: "Github",
		href: "https://github.com/darshi1337",
		linkTitle: ` ${SITE.title} on Github`,
		active: true,
	},
	{
		name: "Twitter",
		href: "https://twitter.com/darshi1337",
		linkTitle: `${SITE.title} on Twitter`,
		active: true,
	},
	{
		name: "Discord",
		href: "https://discord.com/users/1063317657396453456",
		linkTitle: `${SITE.title} on Discord`,
		active: true,
	},
];
