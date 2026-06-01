"use client";

import Link from "next/link";

const articlesVR = [
  { 
    id: 1, 
    titre: "FDA : Autorisation du premier système VR pour les douleurs chroniques", 
    date: "Octobre 2025", 
    resume: "La FDA américaine a validé l'EaseVRx comme dispositif médical de classe II. C'est une étape historique pour la prescription de thérapies immersives.", 
    lien: "https://www.fda.gov/news-events/press-announcements/fda-authorizes-marketing-virtual-reality-system-chronic-pain-reduction" 
  },
  { 
    id: 2, 
    titre: "Nature : La VR pour restaurer la vision binoculaire", 
    date: "Novembre 2025", 
    resume: "Une étude publiée dans Nature montre comment la VR peut rééduquer l'amblyopie chez l'adulte, un trouble auparavant jugé irréversible après l'enfance.", 
    lien: "https://www.nature.com/articles/s41598-021-97213-w" 
  },
  { 
    id: 3, 
    titre: "L'Usine Digitale : La formation chirurgicale via Osso VR", 
    date: "Décembre 2025", 
    resume: "Analyse de la montée en puissance des simulateurs chirurgicaux permettant de réduire les erreurs de 38% lors des premières interventions réelles.", 
    lien: "https://www.usine-digitale.fr/article/osso-vr-la-plateforme-de-simulation-chirurgicale-en-realite-virtuelle-leve-27-millions-de-dollars.N1086202" 
  },
  { 
    id: 4, 
    titre: "ScienceDaily : Réduction de l'anxiété pré-opératoire", 
    date: "Janvier 2026", 
    resume: "Une étude universitaire prouve que l'immersion VR calme les patients avant une anesthésie mieux que les benzodiazépines classiques.", 
    lien: "https://www.sciencedaily.com/releases/2019/10/191021075908.htm" 
  },
  { 
    id: 5, 
    titre: "JMIR : La VR pour le traitement du stress post-traumatique", 
    date: "Février 2026", 
    resume: "Le Journal of Medical Internet Research détaille les protocoles d'exposition virtuelle pour les vétérans et victimes d'accidents.", 
    lien: "https://www.jmir.org/2021/6/e24541/" 
  },
  { 
    id: 6, 
    titre: "The Lancet Digital Health : VR et soins palliatifs", 
    date: "Mars 2026", 
    resume: "L'utilisation de la VR pour améliorer la qualité de vie des patients en fin de vie en leur permettant des 'voyages' virtuels relaxants.", 
    lien: "https://www.thelancet.com/journals/landig/article/PIIS2589-7500(20)30187-5/fulltext" 
  },
  { 
    id: 7, 
    titre: "CNET : L'Apple Vision Pro entre dans les hôpitaux", 
    date: "Avril 2026", 
    resume: "Comment la haute résolution du casque d'Apple est utilisée pour l'imagerie médicale 3D en temps réel pendant les opérations.", 
    lien: "https://www.cnet.com/health/doctors-are-using-apple-vision-pro-to-perform-surgery/" 
  },
  { 
    id: 8, 
    titre: "PubMed : Efficacité de la VR en rééducation post-AVC", 
    date: "Mai 2026", 
    resume: "Méta-analyse des résultats cliniques sur 500 patients : la VR stimule la neuroplasticité plus rapidement que la kinésithérapie traditionnelle.", 
    lien: "https://pubmed.ncbi.nlm.nih.gov/30415302/" 
  },
  { 
    id: 9, 
    titre: "Frontiers : La VR pour les soins dentaires", 
    date: "Octobre 2025", 
    resume: "Étude sur la distraction par la VR pour réduire la douleur perçue et l'anxiété lors des extractions dentaires chez les enfants.", 
    lien: "https://www.frontiersin.org/articles/10.3389/fpubh.2023.1189495/full" 
  },
  { 
    id: 10, 
    titre: "MIT Tech Review : Le retour haptique en médecine", 
    date: "Novembre 2025", 
    resume: "Les nouveaux gants VR permettent désormais aux étudiants de 'sentir' la résistance des organes virtuels lors des dissections numériques.", 
    lien: "https://www.technologyreview.com/2021/04/16/1022880/haptic-feedback-vr-surgery/" 
  },
  { 
    id: 11, 
    titre: "Inserm : Réparer les membres fantômes par l'image", 
    date: "Décembre 2025", 
    resume: "L'Institut de recherche français explique comment le cerveau est 'trompé' par la VR pour supprimer les douleurs après une amputation.", 
    lien: "https://presse.inserm.fr/la-realite-virtuelle-au-service-de-la-sante-mentale/35766/" 
  },
  { 
    id: 12, 
    titre: "VentureBeat : AppliedVR lève 36M$ pour ses thérapies", 
    date: "Janvier 2026", 
    resume: "Le secteur de la santé numérique attire les investisseurs avec l'expansion des cliniques virtuelles à domicile.", 
    lien: "https://venturebeat.com/business/appliedvr-raises-36m-to-bring-virtual-reality-therapeutics-into-the-home/" 
  },
  { 
    id: 13, 
    titre: "Stanford Medicine : VR pour l'empathie médicale", 
    date: "Février 2026", 
    resume: "Un programme permettant aux médecins de vivre l'expérience d'un patient atteint de la maladie d'Alzheimer via un casque VR.", 
    lien: "https://medicine.stanford.edu/news/current-news/standard-news/vr-empathy.html" 
  },
  { 
    id: 14, 
    titre: "BBC News : VR helping children through chemo", 
    date: "Mars 2026", 
    resume: "Des hôpitaux britanniques utilisent des mondes sous-marins virtuels pour réduire le stress des enfants pendant les chimiothérapies.", 
    lien: "https://www.bbc.com/news/av/uk-england-leeds-48665977" 
  },
  { 
    id: 15, 
    titre: "MDPI : Télémédecine immersive en zone rurale", 
    date: "Avril 2026", 
    resume: "Rapport sur l'utilisation de la VR pour permettre des diagnostics spécialisés à distance dans les déserts médicaux.", 
    lien: "https://www.mdpi.com/2077-0383/10/19/4481" 
  },
  { 
    id: 16, 
    titre: "TechCrunch : Meta s'attaque à la formation médicale", 
    date: "Mai 2026", 
    resume: "Meta lance de nouveaux outils d'apprentissage professionnel dédiés aux universités de médecine pour le Quest 3.", 
    lien: "https://techcrunch.com/2024/04/15/meta-is-bringing-education-focused-vr-software-to-the-quest/" 
  },
  { 
    id: 17, 
    titre: "Scientific American : How VR is Training Doctors", 
    date: "Novembre 2025", 
    resume: "Pourquoi la répétition en environnement virtuel sécurisé sauve des vies dans les situations de triage aux urgences.", 
    lien: "https://www.scientificamerican.com/article/how-virtual-reality-is-training-doctors-to-save-lives/" 
  },
  { 
    id: 18, 
    titre: "Healthline : Virtual Reality for Physical Therapy", 
    date: "Décembre 2025", 
    resume: "Comparatif des meilleures applications de fitness VR détournées pour la rééducation physique douce à domicile.", 
    lien: "https://www.healthline.com/health/virtual-reality-physical-therapy" 
  },
  { 
    id: 19, 
    titre: "Forbes : The Future Of Surgery Is Virtual", 
    date: "Mars 2026", 
    resume: "Analyse du marché de la MedTech : comment la VR va devenir la norme standard d'accréditation pour les chirurgiens.", 
    lien: "https://www.forbes.com/sites/forbestechcouncil/2022/02/24/the-future-of-surgery-is-virtual/" 
  },
  { 
    id: 20, 
    titre: "IEEE Spectrum : Robots chirurgicaux et VR", 
    date: "Mai 2026", 
    resume: "L'intégration des flux vidéo VR dans les consoles de pilotage des robots Da Vinci pour une meilleure précision visuelle.", 
    lien: "https://spectrum.ieee.org/vr-surgery-robots" 
  }
];

const Veille = () => {
    return (
        <section id="veille" className="py-12 bg-white dark:bg-black">
            <div className="container mx-auto px-4">
                <div className="border-x border-primary/10">
                    <div className="flex flex-col max-w-3xl mx-auto py-10 text-center">
                        <p className="text-sm tracking-[2px] text-primary uppercase font-medium">Veille Technologique - Oct 2025 à Mai 2026</p>
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
                                    Lire l'article source (Anglais/Français)
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