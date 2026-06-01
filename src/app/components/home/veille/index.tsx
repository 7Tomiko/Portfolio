"use client";

const articlesVR = [
  { 
    id: 1, 
    titre: "Impact de la VR sur la gestion de la douleur : Outil transformateur", 
    date: "Novembre 2025", 
    resume: "Analyse clinique des effets analgésiques de la réalité virtuelle, démontrant qu'elle module les réseaux sensoriels et émotionnels lors des soins intensifs et des brûlures graves.", 
    lien: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12401454/" 
  },
  { 
    id: 2, 
    titre: "Efficacité de la réalité augmentée et mixte dans l'éducation médicale", 
    date: "Novembre 2025", 
    resume: "Une méta-analyse prouvant que les simulateurs XR réduisent significativement les taux d'échec et accélèrent le temps d'exécution lors de l'apprentissage des gestes médicaux complexes.", 
    lien: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12613513/" 
  },
  { 
    id: 3, 
    titre: "La réalité virtuelle immersive par visiocasque en chirurgie", 
    date: "Novembre 2025", 
    resume: "Une revue systématique confirmant la supériorité de la VR pour la rétention des connaissances à long terme dans l'apprentissage de l'anatomie et de la chirurgie.", 
    lien: "https://pubmed.ncbi.nlm.nih.gov/41233820/" 
  },
  { 
    id: 4, 
    titre: "Améliorer la confiance des étudiants via la simulation chirurgicale", 
    date: "Décembre 2025", 
    resume: "Étude transversale utilisant le système 'Precision OS' pour former de jeunes étudiants en médecine à la chirurgie orthopédique (comme la pose de clous intramédullaires) sans risque pour le patient.", 
    lien: "https://pubmed.ncbi.nlm.nih.gov/41317507/" 
  },
  { 
    id: 5, 
    titre: "Formation en communication infirmière et médicale via la VR", 
    date: "Janvier 2026", 
    resume: "Une étude européenne multi-pays validant l'utilisation de scénarios virtuels difficiles pour améliorer l'intelligence émotionnelle et l'annonce de diagnostics aux patients.", 
    lien: "https://pubmed.ncbi.nlm.nih.gov/41547319/" 
  },
  { 
    id: 6, 
    titre: "Impact de la simulation 3D et VR sur la prise de décision chirurgicale", 
    date: "Janvier 2026", 
    resume: "Évaluation de l'influence de la réalité virtuelle sur les attentes, le niveau de stress et la satisfaction postopératoire des patientes en chirurgie esthétique et réparatrice.", 
    lien: "https://pubmed.ncbi.nlm.nih.gov/41518093/" 
  },
  { 
    id: 7, 
    titre: "Effet de la réalité virtuelle sur les résultats postopératoires chez l'enfant", 
    date: "Février 2026", 
    resume: "Une revue systématique confirmant l'efficacité de la VR comme outil non pharmacologique pour réduire la détresse, les pleurs et la douleur postopératoire en pédiatrie.", 
    lien: "https://pubmed.ncbi.nlm.nih.gov/41758097/" 
  },
  { 
    id: 8, 
    titre: "Éducation à la traumatologie maxillo-faciale face aux techniques classiques", 
    date: "Février 2026", 
    resume: "Essai clinique démontrant que la VR aide les étudiants à identifier des lésions osseuses craniennes qui ne sont pas perceptibles avec les visualisations médicales 3D classiques.", 
    lien: "https://pubmed.ncbi.nlm.nih.gov/41759581/" 
  },
  { 
    id: 9, 
    titre: "Expériences des étudiants avec la simulation clinique VR", 
    date: "Février 2026", 
    resume: "Analyse qualitative au Royaume-Uni soulignant l'immersion accrue apportée par la VR tout en étudiant comment les soignants gèrent la surcharge cognitive en environnement virtuel.", 
    lien: "https://pubmed.ncbi.nlm.nih.gov/41672483/" 
  },
  { 
    id: 10, 
    titre: "L'évolution numérique de la planification chirurgicale (Technologies immersives)", 
    date: "Février 2026", 
    resume: "Analyse de 30 études montrant que la VR permet aux chirurgiens de modifier et sécuriser leurs plans préopératoires dans 32 % à 52 % des cas graves (ex: chirurgies thoraciques).", 
    lien: "https://pubmed.ncbi.nlm.nih.gov/41835258/" 
  },
  { 
    id: 11, 
    titre: "La VR comme outil d'amélioration des compétences cliniques et relationnelles", 
    date: "Mars 2026", 
    resume: "Revue bibliographique démontrant comment la VR permet aux étudiants d'avoir une pratique sûre, répétitive et avec des retours objectifs (tracking) pour perfectionner leurs gestes.", 
    lien: "https://www.mdpi.com/2504-3900/137/1/128" 
  },
  { 
    id: 12, 
    titre: "Haute satisfaction de la formation VR en reconstruction ligamentaire", 
    date: "Mars 2026", 
    resume: "Étude pilote sur l'utilisation du casque de réalité virtuelle pour simuler les opérations du ligament croisé antérieur chez les jeunes internes en orthopédie.", 
    lien: "https://pubmed.ncbi.nlm.nih.gov/41791594/" 
  },
  { 
    id: 13, 
    titre: "La réalité virtuelle pour renforcer les compétences en génomique en Afrique", 
    date: "Mai 2026", 
    resume: "Un article détaillant comment la VR permet de compenser le manque de matériel physique (laboratoires sous-équipés) pour former les biologistes aux manipulations PCR.", 
    lien: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12887066/" 
  },
  { 
    id: 14, 
    titre: "Améliorer les pratiques de soins palliatifs grâce à un programme VR", 
    date: "Mai 2026", 
    resume: "Preuves scientifiques que l'immersion VR améliore significativement les connaissances, l'empathie et les attitudes des professionnels accompagnant les patients en fin de vie.", 
    lien: "https://pubmed.ncbi.nlm.nih.gov/42097867/" 
  },
  { 
    id: 15, 
    titre: "L'impact perçu de la Réalité Virtuelle et Augmentée sur la formation", 
    date: "Mai 2026", 
    resume: "Application de la théorie de Kolb prouvant que l'environnement immersif (XR) aide les futurs chirurgiens à bâtir une confiance opératoire solide avant de toucher leur premier patient.", 
    lien: "https://pubmed.ncbi.nlm.nih.gov/42084191/" 
  }
];

const Veille = () => {
    return (
        <section id="veille" className="py-12 bg-white dark:bg-black">
            <div className="container mx-auto px-4">
                <div className="border-x border-primary/10">
                    <div className="flex flex-col max-w-3xl mx-auto py-10 text-center">
                        <p className="text-sm tracking-[2px] text-primary uppercase font-medium">Veille Technologique - Oct 2025 à Juin 2026</p>
                        <h2 className="text-3xl font-bold mt-2">Réalité Virtuelle au service de la Médecine</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 border-t border-primary/10">
                        {articlesVR.map((article, index) => (
                            <div key={article.id} className={`p-8 hover:bg-primary/5 transition-all border-b border-primary/10 ${index % 2 === 1 ? 'md:border-l' : ''}`}>
                                <div className="flex justify-between items-center mb-3">
                                    <span className="text-xs font-bold text-primary px-2 py-1 bg-primary/10 rounded">{article.date}</span>
                                </div>
                                <h4 className="text-xl font-bold leading-tight">{article.titre}</h4>
                                <p className="text-sm opacity-70 mt-3 leading-relaxed">{article.resume}</p>
                                <a 
                                    href={article.lien} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-sm font-semibold text-blue-600 underline mt-5 inline-block hover:text-primary transition-colors"
                                >
                                    Lire l'étude clinique
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Veille;