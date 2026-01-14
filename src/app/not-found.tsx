export default function NotFound() {
    return (
        <div className="min-h-[60vh] flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-navy-900 mb-4">404</h1>
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                    Page non trouvée
                </h2>
                <p className="text-gray-600 mb-8">
                    Désolé, la page que vous recherchez n&apos;existe pas.
                </p>
                <a
                    href="/"
                    className="inline-flex items-center px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg transition-colors"
                >
                    Retour à l&apos;accueil
                </a>
            </div>
        </div>
    );
}
