import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Politique de Confidentialité",
    description: "Politique de confidentialité et protection des données personnelles - lecoindesartisans.fr",
};

export default function PolitiqueConfidentialitePage() {
    return (
        <div className="bg-gray-50 py-12 md:py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <article className="bg-white rounded-xl border border-gray-100 p-6 md:p-10">
                    <h1 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
                        Politique de Confidentialité et Données Personnelles
                    </h1>
                    <p className="text-gray-500 mb-8">
                        <em>Dernière mise à jour : 14 Janvier 2026</em>
                    </p>

                    <div className="prose max-w-none">
                        <h2>1. Responsable du traitement</h2>
                        <p>
                            Le responsable du traitement des données collectées sur ce site est la société <strong>WADE STUDIO LTD</strong>, sise au 432 Ave Bounty, Morcellement Balaclava, MAURITIUS (BRN: C25227533).
                        </p>

                        <h2>2. Nature des données collectées</h2>
                        <p>
                            Dans le cadre de l&apos;utilisation du service de demande de devis, nous sommes amenés à collecter les données suivantes :
                        </p>
                        <ul>
                            <li><strong>Identité :</strong> Nom, Prénom.</li>
                            <li><strong>Coordonnées :</strong> Adresse email, Numéro de téléphone, Code postal, Ville.</li>
                            <li><strong>Projet :</strong> Type de travaux, surface, échéance.</li>
                        </ul>

                        <h2>3. Finalité du traitement</h2>
                        <p>Vos données sont collectées pour :</p>
                        <ul>
                            <li><strong>Mise en relation :</strong> Transmettre votre demande de devis à nos partenaires professionnels (artisans et régies d&apos;affiliation) en France afin qu&apos;ils puissent chiffrer votre projet.</li>
                            <li><strong>Gestion de la relation client :</strong> Suivi de votre demande.</li>
                        </ul>

                        <h2>4. Transmission des données à des tiers</h2>
                        <p>
                            En utilisant le service de demande de devis, l&apos;utilisateur accepte expressément que ses données soient transmises à des partenaires commerciaux situés en France (Entreprises de BTP, Courtiers, Plateformes de mise en relation type Travaux.com/HabitatPresto) dans le seul but de répondre à sa demande.
                        </p>
                        <p>
                            <strong>WADE STUDIO LTD</strong> s&apos;engage à ne pas vendre vos données à des tiers pour des usages sans lien avec votre projet de travaux.
                        </p>

                        <h2>5. Transfert de données hors UE</h2>
                        <p>
                            L&apos;éditeur du site étant établi à Maurice, les données peuvent transiter techniquement hors de l&apos;Union Européenne. WADE STUDIO LTD s&apos;engage à prendre toutes les mesures de sécurité nécessaires pour garantir un niveau de protection des données conforme aux standards du RGPD lors de ces traitements techniques.
                        </p>

                        <h2>6. Vos droits (RGPD)</h2>
                        <p>
                            Conformément à la réglementation européenne, vous disposez d&apos;un droit d&apos;accès, de rectification, de suppression et d&apos;opposition concernant vos données.
                        </p>
                        <p>
                            Pour exercer ce droit, contactez-nous à : <a href="mailto:contact@lecoindesartisans.fr" className="text-amber-600 hover:underline">contact@lecoindesartisans.fr</a> ou par courrier à notre siège social.
                        </p>

                        <h2>7. Cookies</h2>
                        <p>
                            Le site utilise des cookies pour le fonctionnement technique et le suivi de l&apos;affiliation (nécessaire pour rémunérer notre service d&apos;apporteur d&apos;affaires gratuit pour l&apos;utilisateur).
                        </p>
                    </div>
                </article>
            </div>
        </div>
    );
}
