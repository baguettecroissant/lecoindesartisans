import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Mentions Légales",
    description: "Mentions légales du site lecoindesartisans.fr - Éditeur, hébergement, propriété intellectuelle et responsabilité.",
};

export default function MentionsLegalesPage() {
    return (
        <div className="bg-gray-50 py-12 md:py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <article className="bg-white rounded-xl border border-gray-100 p-6 md:p-10">
                    <h1 className="text-3xl md:text-4xl font-bold text-navy-900 mb-8">
                        Mentions Légales
                    </h1>

                    <div className="prose max-w-none">
                        <h2>1. Éditeur du site</h2>
                        <p>
                            Le site <strong>lecoindesartisans.fr</strong> est édité par la société :
                        </p>
                        <p>
                            <strong>WADE STUDIO LTD</strong><br />
                            Société enregistrée auprès du Registrar of Companies de Maurice.<br />
                            Business Registration Number (BRN) : <strong>C25227533</strong><br />
                            File No : C227533<br />
                            Siège social : 432 Ave Bounty, Morcellement Balaclava, MAURITIUS.
                        </p>
                        <p>
                            Email de contact : <a href="mailto:contact@lecoindesartisans.fr" className="text-amber-600 hover:underline">contact@lecoindesartisans.fr</a><br />
                            Directeur de la publication : Wade Timothy
                        </p>

                        <h2>2. Hébergement</h2>
                        <p>
                            Le site est hébergé par la société <strong>Vercel Inc.</strong><br />
                            Adresse : 340 S Lemon Ave #4133 Walnut, CA 91789, USA.<br />
                            Le stockage des données est assuré sur des serveurs sécurisés.
                        </p>

                        <h2>3. Propriété intellectuelle</h2>
                        <p>
                            L&apos;ensemble de ce site relève de la législation internationale sur le droit d&apos;auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés. La marque &quot;WADE STUDIO LTD&quot; et le nom de domaine &quot;lecoindesartisans.fr&quot; sont la propriété exclusive de l&apos;éditeur.
                        </p>

                        <h2>4. Limitation de responsabilité</h2>
                        <p>
                            Le site <strong>lecoindesartisans.fr</strong> agit en tant qu&apos;intermédiaire technique (apporteur d&apos;affaires). Il a pour but de faciliter la mise en relation entre des particuliers et des professionnels du bâtiment via des partenaires affiliés.
                        </p>
                        <p>
                            La société <strong>WADE STUDIO LTD</strong> n&apos;est pas une entreprise de bâtiment et n&apos;effectue aucun travaux.
                        </p>
                        <p>
                            En conséquence, la responsabilité de l&apos;éditeur ne saurait être engagée en cas de litige relatif à l&apos;exécution des travaux (malfaçon, retard, prix) qui reste de la responsabilité exclusive de l&apos;artisan sélectionné par l&apos;utilisateur.
                        </p>
                    </div>
                </article>
            </div>
        </div>
    );
}
