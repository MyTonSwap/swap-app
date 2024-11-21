import { Link } from "react-router-dom";
import { useTonConnectUI } from "@tonconnect/ui-react";
import { useEffect, useRef, useState } from "react";
import { createWalletProfile } from "@mytonswap/widget";
import { FiMenu } from "react-icons/fi";
import { IoClose, IoLanguage } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";
import { useMediaQuery, useOnClickOutside } from "usehooks-ts";
import { langs } from "../../constants";
import { useTranslation } from "react-i18next";
import ThemeToggle from "./ThemeToggle";

const setLanguage = (lang: string) => {
    const parsedLang = new URL(location.href);
    parsedLang.searchParams.set("lang", lang);
    window.location.replace(parsedLang.toString());
};

const Navbar = () => {
    const [mobileMenu, setMobileMenu] = useState(false);
    const { t, i18n } = useTranslation();
    const direction = i18n.getResourceBundle(
        i18n.resolvedLanguage!,
        "direction"
    );
    const isDesktop = useMediaQuery("(min-width: 768px)");
    return (
        <div
            dir={direction}
            className="border-b-[1px] border-black/10 dark:border-white/10 dark:bg-zinc-950 py-2"
        >
            <nav className="max-w-screen-lg h-16 flex items-center justify-between mx-auto  px-4">
                <ul className=" dark:text-white flex items-center h-full">
                    <li className="flex items-center px-2">
                        <Link
                            to="https://mytonswap.com"
                            className="flex items-center font-black relative z-30"
                        >
                            <img
                                className="max-w-12 scale-125"
                                src="/logo.png"
                                alt="MyTonSwap Logo"
                            />{" "}
                            <span className="hidden sm:block">MyTonSwap</span>
                        </Link>
                    </li>
                    <li className="hidden sm:block">
                        <Link
                            to="https://docs.mytonswap.com"
                            target="_blank"
                            className="ml-4"
                            data-testid="docs-link"
                        >
                            {t("docs")}
                        </Link>
                    </li>
                    <li className="hidden sm:block">
                        <Link
                            to="https://mytonswap.com/blog"
                            target="_blank"
                            className="ml-4"
                            data-testid="blog-link"
                        >
                            {t("blog")}
                        </Link>
                    </li>
                </ul>
                <div className="max-w-screen-md dark:text-white flex items-center h-full gap-2">
                    <ConnectButton />
                    <div className="z-30">
                        <LangPopover />
                    </div>
                    {mobileMenu ? (
                        <IoClose
                            data-testid="mobile-menu-button-close"
                            className="dark:text-white text-2xl cursor-pointer z-30 md:hidden"
                            onClick={() => setMobileMenu(false)}
                        />
                    ) : (
                        <FiMenu
                            data-testid="mobile-menu-button-open"
                            className="dark:text-white text-2xl cursor-pointer z-30 md:hidden"
                            onClick={() => setMobileMenu(true)}
                        />
                    )}
                    {!isDesktop && <MobileMenu isOpen={mobileMenu} />}
                </div>
            </nav>
        </div>
    );
};

const ConnectButton = () => {
    const [tc] = useTonConnectUI();
    useEffect(() => {
        if (tc) {
            createWalletProfile("wallet-profile", {
                tonConnectInstance: tc,
                theme: {
                    primary_color: "#16A34A",
                    text_black_color: "#000000",
                    text_white_color: "#000000",
                },
                position: "bottom-right",
            });
        }
    }, [tc]);
    return (
        <>
            <div className="z-30" id="wallet-profile"></div>
        </>
    );
};
const MobileMenu = ({ isOpen }: { isOpen: boolean }) => {
    const { t, i18n } = useTranslation();
    const direction = i18n.getResourceBundle(
        i18n.resolvedLanguage!,
        "direction"
    );
    return (
        <motion.div
            data-testid="mobile-menu"
            initial={{
                [direction === "rtl" ? "left" : "right"]: "-100%",
                top: 0,
                opacity: 0,
            }}
            animate={{
                [direction === "rtl" ? "left" : "right"]: isOpen ? 0 : "-100%",
                top: 0,
                opacity: isOpen ? 1 : 0,
            }}
            className={`fixed w-dvw h-dvh ltr:right-[-100%] rtl:left-[-100%] top-0 px-6 pt-20 bg-white dark:bg-black z-20 dark:text-white `}
        >
            <ul className="text-2xl font-bold  flex flex-col gap-8">
                <li>
                    <Link
                        to="https://docs.mytonswap.com"
                        target="_blank"
                        data-testid="docs-link-mobile"
                    >
                        {t("docs")}
                    </Link>
                </li>
                <li>
                    <Link
                        to="https://mytonswap.com/blog"
                        target="_blank"
                        data-testid="blog-link-mobile"
                    >
                        {t("blog")}
                    </Link>
                </li>
            </ul>
            <div className="mt-10">
                <p className="dark:text-white/50">{t("setting")}</p>
                <div className="flex items-center justify-between mt-2">
                    <h1>{t("theme")}</h1>
                    <div className="flex">
                        <ThemeToggle />
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const LangPopover = () => {
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);
    const popoverRef = useRef(null);
    const onIconClick = () => {
        if (!isPopoverOpen) {
            setIsPopoverOpen(true);
        }
    };
    const onClickOutside = (e: MouseEvent | TouchEvent | FocusEvent) => {
        e.stopPropagation();
        setTimeout(() => {
            setIsPopoverOpen(false);
        }, 150);
    };
    useOnClickOutside(popoverRef, onClickOutside);
    return (
        <div className="relative">
            <button className="flex items-center" data-testid="lang-popover">
                <IoLanguage
                    className="text-2xl cursor-pointer select-none"
                    onClick={onIconClick}
                />
            </button>
            <AnimatePresence>
                {isPopoverOpen && (
                    <motion.div
                        ref={popoverRef}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-8 rtl:left-0 ltr:right-0 bg-white shadow-sm dark:bg-zinc-900 border-[1px] border-black/10 dark:border-white/10  rounded-xl min-w-[200px] p-2 z-10"
                    >
                        {langs.map((lang) => (
                            <div
                                key={lang.value}
                                data-testid={`lang-${lang.value}`}
                                className="flex items-center gap-2 cursor-pointer hover:bg-zinc-100 dark:hover:bg-zinc-800 p-1 px-2 transition-all duration-200 rounded-md "
                                onClick={() => setLanguage(lang.value)}
                            >
                                <span>{lang.label}</span>
                            </div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Navbar;
