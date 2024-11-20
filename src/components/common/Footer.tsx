import Logo from "@/assets/logo.png";
import { footer_links } from "@/constants/links";
import { socials } from "@/constants/socials";

const Footer = () => {
    return (
        <div className="max-w-screen-lg dark:text-white mx-auto pb-8">
            <div className="grid grid-cols-1 mx-4 md:grid-cols-footer">
                <div>
                    <div className="flex flex-col gap-y-4">
                        <span className="flex items-center font-bold">
                            <img
                                src={Logo}
                                alt="MyTonSwap Logo"
                                className="w-6"
                            />{" "}
                            MyTonSwap
                        </span>
                        <p className="max-w-[230px]">
                            Swap Toncoin for any token instantly at the best
                            rate.
                        </p>
                        <a
                            className="mt-2"
                            href="https://ton.app/dex/mytonswap?id=2657"
                        >
                            <img
                                src="https://ton.app/a2/badge/topapp?appId=2657"
                                alt="MyTonSwap — #0 Dex in Ton App"
                                loading="lazy"
                                className="w-24"
                            />
                        </a>
                    </div>
                </div>
                {footer_links.map(({ category_name, links }) => {
                    return (
                        <div className="mt-8 md:mt-0">
                            <h1 className="font-semibold">{category_name}</h1>
                            <div className="flex flex-col opacity-50 gap-y-2 mt-2">
                                {links.map((item) => (
                                    <a href={item.link} className="text-sm">
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
            <div>
                <div className="flex items-center gap-x-4 text-xl mt-8 mx-4">
                    {socials.map(({ icon, link, name }) => (
                        <a
                            key={name}
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center transition-all dark:text-white/50 text-black/50 dark:hover:text-green-600 hover:text-green-500"
                        >
                            {icon}
                        </a>
                    ))}
                </div>
            </div>
            <hr className="my-8 opacity-30" />
            <div className="px-4">
                <p className="text-justify text-sm opacity-70">
                    Disclaimer: Nothing on this site is investment advice. All
                    information is for informational purposes only. You should
                    not construe any such information or other material as
                    legal, tax, investment, financial, or other advice. Nothing
                    contained on our site constitutes a solicitation,
                    recommendation, endorsement, or offer by MyTonSwap or any
                    third party service provider to buy or sell any assets,
                    digital coins and tokens, securities or other financial
                    instruments in this or in any other jurisdiction in which
                    such solicitation or offer would be unlawful under the
                    securities laws of such jurisdiction.
                </p>
            </div>
            <hr className="my-8 opacity-30" />
            <div className="text-sm opacity-70 grid grid-cols-2 mx-4">
                <div>
                    <p>Based on TON</p>
                </div>
                <div className="text-right">
                    MyTonSwap © {new Date().getFullYear()}
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default Footer;
