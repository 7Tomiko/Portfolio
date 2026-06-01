import Image from "next/image"
import Link from "next/link";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
    const socialIcon = [
        {
            img: "/portfolio/images/icon/linkedin-icon.svg",
            href: "https://www.linkedin.com/in/paul-caumont-a27a8b263/",
            icon: "LinkedIn"
        },
        {
            img: "/portfolio/images/icon/github-icon.svg",
            href: "https://github.com/7Tomiko",
            icon: "GitHub"
        },
        {
            img: "/portfolio/images/icon/discord-icon.svg",
            href: "https://discord.com/users/364103319184211969",
            icon: "Discord"
        },
    ];
    return (
        <section>
            <div className="container">
                <div className="">
                    <div className="w-full h-72">
                        <Image src={"/portfolio/images/hero-sec/pexels-luis-gomes-166706-546819.jpg"} alt="banner-img" width={1080} height={267} className="w-full h-full object-cover" />
                    </div>
                    <div className="border-x border-primary/10">
                        <div className="relative flex flex-col xs:flex-row items-center xs:items-start justify-center xs:justify-between max-w-3xl mx-auto gap-10 xs:gap-3 px-4 sm:px-7 pt-22 pb-8 sm:pb-12">
                            <div className="absolute top-0 transform -translate-y-1/2">
                                <Image src={"/portfolio/images/hero-sec/pfp.png"} alt="user-img" width={120} height={120} className="border-4 border-white rounded-full" />
                                <span className="absolute bottom-2.5 right-5 w-4 h-4 bg-green-500 border-2 border-white rounded-full" />
                            </div>
                            <div className="flex flex-col gap-2 sm:gap-3 items-center text-center xs:items-start">
                                <h1>Paul Caumont</h1>
                                <p className="text-violet-700 font-normal">Étudiant en informatique</p>
                                <div className="flex items-center gap-2">
                                    <Image src={"/portfolio/images/icon/map-icon.svg"} alt="map-icon" width={20} height={20} />
                                    <p className="text-primary">Le Havre, France</p>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row items-center gap-4">
                                <div className="flex items-center gap-2">
                                    {socialIcon?.map((value, index) => {
                                        return (
                                            <Link href={value?.href} key={index} target="_blank" rel="noopener noreferrer" className="w-fit p-2 sm:p-3 hover:bg-primary/5 border border-primary/10 rounded-full">
                                                <Image src={value?.img} alt={value?.icon} width={27} height={27} />
                                            </Link>
                                        )
                                    })}
                                </div>
                                <Button asChild className="h-auto rounded-full p-0.5!">
                                <Link
                                    href="mailto:paulcaumont76@gmail.com"
                                    className="inline-block p-0.5 rounded-full bg-[linear-gradient(96.09deg,_#2aaea6_12.17%,_#ffc490_90.71%)]"
                                >
                                    <span className="flex items-center gap-3 bg-primary hover:bg-[linear-gradient(96.09deg,_#2aaea6_12.17%,_#ffc490_90.71%)] py-2.5 px-5 rounded-full">
                                        <Image
                                            src="/portfolio/images/icon/spark-icon.svg"
                                            alt="spark-icon"
                                            width={14}
                                            height={14}
                                        />
                                        <span className="text-sm sm:text-base font-semibold text-white">Me contacter</span>
                                    </span>
                                </Link>
                            </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection