import React from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import {
	FaInstagram,
	FaGithub,
	FaLinkedin,
	FaDiscord,
} from "react-icons/fa";

const contacts = [
	{
		id: 1,
		name: "Email",
		username: "shubham09anand@gmail.com",
		icon: Mail,
		link: "mailto:shubham09anand@gmail.com",
	},
	{
		id: 2,
		name: "Instagram",
		username: "shubham09anand",
		icon: FaInstagram,
		link: "https://www.instagram.com/shubham09anand/",
	},
	{
		id: 3,
		name: "GitHub",
		username: "shubham09anand",
		icon: FaGithub,
		link: "https://github.com/shubham09anand",
	},
	{
		id: 4,
		name: "LinkedIn",
		username: "shubham09anand",
		icon: FaLinkedin,
		link: "https://www.linkedin.com/in/shubham09anand/",
	},
];

const SocialContacts = () => {
	return (
		<section className="mt-20 text-neutral-100">
			<p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-neutral-500">
				( Get in touch )
			</p>

			<h3 className="mb-5 text-2xl font-semibold tracking-tight text-white">
				Contact me.
			</h3>

			<div className="flex flex-wrap gap-2">
				{contacts.map((contact, index) => {
					const Icon = contact.icon;

					const content = (
						<>
							<Icon size={17} />
							<span className="text-sm font-medium">
								{contact.username}
							</span>
						</>
					);

					const className =
						"group inline-flex items-center gap-2 rounded-full border border-white/10 bg-neutral-900/80 px-4 py-2.5 text-neutral-400 transition-all duration-300 hover:-translate-y-1 hover:border-lime-400/60 hover:bg-lime-400/10 hover:text-lime-300";

					return contact.link ? (
						<motion.a
							key={contact.id}
							href={contact.link}
							target={contact.link.startsWith("mailto:") ? undefined : "_blank"}
							rel="noopener noreferrer"
							aria-label={contact.name}
							initial={{ opacity: 0, y: 10 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.05 }}
							className={className}
						>
							{content}
						</motion.a>
					) : (
						<motion.div
							key={contact.id}
							title={contact.name}
							initial={{ opacity: 0, y: 10 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.05 }}
							className={className}
						>
							{content}
						</motion.div>
					);
				})}
			</div>
		</section>
	);
};

export default SocialContacts;