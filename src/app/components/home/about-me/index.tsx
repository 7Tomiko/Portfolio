import { Badge } from "@/components/ui/badge";

const AboutMe = () => {
    const servicesBedge = ["HTML / CSS", "React & Next.js", "JavaScript", "Python", "SQL / Bases de données", "Linux & AWS", "Git / GitHub", "Développement d'API"];
    return (
        <section>
            <div className="container">
                <div className="border-x border-primary/10 bg-[url('/images/about-me/about-me-bg.svg')] bg-cover bg-center bg-no-repeat">
                    <div className="flex flex-col gap-9 sm:gap-12 max-w-3xl mx-auto px-4 sm:px-7 py-11 md:py-20">
                        <div className="flex flex-col gap-4">
                            <p className="text-sm tracking-[2px] text-primary uppercase font-medium">À propos</p>
                            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px]">Bonjour, je m'appelle Paul — étudiant en informatique, spécialisé dans le développement applications.</h2>
                        </div>
                        <div className="flex flex-col gap-4">
                            <p className="text-sm text-primary uppercase font-medium">Compétences</p>
                            <div className="flex flex-wrap gap-2 sm:gap-3">
                                {servicesBedge?.map((value, index) => {
                                    return (
                                        <Badge variant={"outline"} key={index} className="py-1.5 px-3 rounded-lg">
                                            <p className="text-xs sm:text-sm font-medium text-primary">{value}</p>
                                        </Badge>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe