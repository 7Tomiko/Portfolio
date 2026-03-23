import { NextResponse } from "next/server";

const featureWork = [
    {
        title: "La réalité augmentée dans la médecine",
        description: "Exploration de l'application de la réalité augmentée dans le domaine médical.",
        roles: ["UX Designer", "Framer Designer"],
        image: "/images/feature-work/feature-img-1.png"
    },
    {
        title: "Conception d'une identité visuelle pour un fournisseur de soins de santé innovant",
        description: "Création d'une identité visuelle distinctive et d'un langage de conception pour construire la confiance et l'empathie chez un prestataire de soins de santé à l'esprit innovant.",
        roles: ["UX Designer", "Framer Designer"],
        image: "/images/feature-work/feature-img-2.png"
    }
]

export const GET = async () => {
    return NextResponse.json({
        featureWork
    });
};