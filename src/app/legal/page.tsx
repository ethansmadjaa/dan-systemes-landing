import type { Metadata } from 'next';

import { siteDetails } from '@/data/siteDetails';

export const metadata: Metadata = {
    title: 'Mentions légales',
    description:
        "Mentions légales de Dan Systèmes : informations sur l'éditeur, l'hébergeur, la propriété intellectuelle et la protection des données personnelles.",
    alternates: {
        canonical: '/legal'
    },
    openGraph: {
        title: `Mentions légales | ${siteDetails.siteName}`,
        description:
            "Mentions légales de Dan Systèmes : informations sur l'éditeur, l'hébergeur, la propriété intellectuelle et la protection des données personnelles.",
        url: `${siteDetails.siteUrl}/legal`,
        siteName: siteDetails.siteName,
        locale: siteDetails.locale,
        type: 'website'
    },
    twitter: {
        card: 'summary_large_image',
        title: `Mentions légales | ${siteDetails.siteName}`,
        description:
            "Mentions légales de Dan Systèmes : informations sur l'éditeur, l'hébergeur, la propriété intellectuelle et la protection des données personnelles."
    }
};

export default function LegalPage() {
    return (
        <section className='bg-background py-16 md:py-24'>
            <div className='container mx-auto max-w-4xl px-4'>
                <h1 className='text-primary mb-12 text-center text-3xl font-bold md:text-4xl'>Mentions légales</h1>

                <div className='prose prose-lg text-foreground max-w-none space-y-8'>
                    {/* Définitions */}
                    <div>
                        <h2 className='text-primary mb-4 text-2xl font-semibold'>Définitions</h2>
                        <p>
                            <strong>Client :</strong> tout professionnel ou personne physique capable au sens des
                            articles 1123 et suivants du Code civil, ou personne morale, qui visite le Site objet des
                            présentes conditions générales.
                        </p>
                        <p>
                            <strong>Prestations et Services :</strong>{' '}
                            <a href='https://dansystemes.com' className='text-accent hover:underline'>
                                https://dansystemes.com
                            </a>{' '}
                            met à disposition des Clients des prestations et services d&apos;intégration, de conseil et
                            de fourniture de solutions informatiques.
                        </p>
                        <p>
                            <strong>Contenu :</strong> Ensemble des éléments constituant l&apos;information présente sur
                            le Site, notamment textes, images et vidéos.
                        </p>
                        <p>
                            <strong>Informations clients :</strong> Ci-après dénommé « Information(s) » qui
                            correspondent à l&apos;ensemble des données personnelles susceptibles d&apos;être détenues
                            par{' '}
                            <a href='https://dansystemes.com' className='text-accent hover:underline'>
                                https://dansystemes.com
                            </a>{' '}
                            pour la gestion de la relation client et à des fins d&apos;analyses et de statistiques.
                        </p>
                        <p>
                            <strong>Utilisateur :</strong> Internaute se connectant et utilisant le site susnommé.
                        </p>
                        <p>
                            <strong>Informations personnelles :</strong> « Les informations qui permettent, sous quelque
                            forme que ce soit, directement ou non, l&apos;identification des personnes physiques
                            auxquelles elles s&apos;appliquent » (article 4 de la loi n° 78-17 du 6 janvier 1978).
                        </p>
                        <p>
                            Les termes « données à caractère personnel », « personne concernée », « sous-traitant » et «
                            données sensibles » ont le sens défini par le Règlement Général sur la Protection des
                            Données (RGPD : n° 2016-679).
                        </p>
                    </div>

                    {/* Section 1 */}
                    <div>
                        <h2 className='text-primary mb-4 text-2xl font-semibold'>1. Présentation du site internet</h2>
                        <p>
                            En vertu de l&apos;article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans
                            l&apos;économie numérique, il est précisé aux utilisateurs du site internet{' '}
                            <a href='https://dansystemes.com' className='text-accent hover:underline'>
                                https://dansystemes.com
                            </a>{' '}
                            l&apos;identité des différents intervenants dans le cadre de sa réalisation et de son suivi
                            :
                        </p>

                        <div className='mt-4 space-y-4'>
                            <div>
                                <h3 className='text-primary font-semibold'>Propriétaire :</h3>
                                <p>
                                    DAN SYSTÈMES, société à responsabilité limitée (SARL) au capital social de 16 000 €,
                                    <br />
                                    Siège social : 47-49, rue Cartier Bresson – 93500 Pantin – France,
                                    <br />
                                    Immatriculée au Registre du Commerce et des Sociétés de Bobigny sous le numéro 444
                                    979 181,
                                    <br />
                                    Représentée par Monsieur Armand Rossini, agissant en qualité de Gérant.
                                </p>
                            </div>

                            <div>
                                <h3 className='text-primary font-semibold'>Responsable de la publication :</h3>
                                <p>
                                    DAN SYSTÈMES –{' '}
                                    <a href='mailto:info@dansystemes.com' className='text-accent hover:underline'>
                                        info@dansystemes.com
                                    </a>
                                </p>
                            </div>

                            <div>
                                <h3 className='text-primary font-semibold'>Webmaster :</h3>
                                <p>
                                    Armand Rossini –{' '}
                                    <a href='mailto:info@dansystemes.com' className='text-accent hover:underline'>
                                        info@dansystemes.com
                                    </a>
                                </p>
                            </div>

                            <div>
                                <h3 className='text-primary font-semibold'>Hébergeur :</h3>
                                <p>
                                    IONOS SARL
                                    <br />
                                    7, place de la Gare, BP 70109
                                    <br />
                                    57200 Sarreguemines Cedex – France
                                    <br />
                                    RCS Sarreguemines 431 303 775
                                    <br />
                                    Tél. : 0970 808 911
                                    <br />
                                    <a href='mailto:info@ionos.fr' className='text-accent hover:underline'>
                                        info@ionos.fr
                                    </a>
                                </p>
                            </div>

                            <div>
                                <h3 className='text-primary font-semibold'>
                                    Délégué à la protection des données (DPO) :
                                </h3>
                                <p>
                                    Monsieur Armand Rossini
                                    <br />
                                    <a href='mailto:rgpd@dansystemes.com' className='text-accent hover:underline'>
                                        rgpd@dansystemes.com
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Section 2 */}
                    <div>
                        <h2 className='text-primary mb-4 text-2xl font-semibold'>
                            2. Conditions générales d&apos;utilisation du site et des services proposés
                        </h2>
                        <p>
                            Le Site constitue une œuvre de l&apos;esprit protégée par les dispositions du Code de la
                            Propriété Intellectuelle et des réglementations internationales applicables. Le Client ne
                            peut en aucune manière réutiliser, céder ou exploiter pour son propre compte tout ou partie
                            des éléments ou travaux du Site.
                        </p>
                        <p>
                            L&apos;utilisation du site{' '}
                            <a href='https://dansystemes.com' className='text-accent hover:underline'>
                                https://dansystemes.com
                            </a>{' '}
                            implique l&apos;acceptation pleine et entière des conditions générales d&apos;utilisation
                            ci-après décrites. Celles-ci sont susceptibles d&apos;être modifiées ou complétées à tout
                            moment ; les utilisateurs sont donc invités à les consulter régulièrement.
                        </p>
                        <p>
                            Le site est normalement accessible à tout moment. Une interruption pour raison de
                            maintenance technique peut toutefois être décidée par{' '}
                            <a href='https://dansystemes.com' className='text-accent hover:underline'>
                                https://dansystemes.com
                            </a>
                            , qui s&apos;efforcera d&apos;en informer préalablement les utilisateurs.
                        </p>
                    </div>

                    {/* Section 3 */}
                    <div>
                        <h2 className='text-primary mb-4 text-2xl font-semibold'>
                            3. Description des services fournis
                        </h2>
                        <p>
                            Le site{' '}
                            <a href='https://dansystemes.com' className='text-accent hover:underline'>
                                https://dansystemes.com
                            </a>{' '}
                            a pour objet de fournir une information concernant l&apos;ensemble des activités de la
                            société DAN SYSTÈMES.
                        </p>
                        <p>
                            Les informations diffusées sont données à titre indicatif et sont susceptibles
                            d&apos;évoluer. Elles ne sont pas exhaustives et sont communiquées sous réserve de
                            modifications ayant été apportées depuis leur mise en ligne.
                        </p>
                    </div>

                    {/* Section 4 */}
                    <div>
                        <h2 className='text-primary mb-4 text-2xl font-semibold'>
                            4. Limitations contractuelles sur les données techniques
                        </h2>
                        <p>
                            Le site utilise la technologie JavaScript. Le site Internet ne pourra être tenu responsable
                            de dommages matériels liés à l&apos;utilisation du site. L&apos;utilisateur s&apos;engage à
                            accéder au site avec un matériel récent, ne contenant pas de virus et avec un navigateur de
                            dernière génération à jour.
                        </p>
                        <p>
                            Le site est hébergé sur le territoire de l&apos;Union européenne conformément aux
                            dispositions du RGPD.
                        </p>
                    </div>

                    {/* Section 5 */}
                    <div>
                        <h2 className='text-primary mb-4 text-2xl font-semibold'>
                            5. Propriété intellectuelle et contrefaçons
                        </h2>
                        <p>
                            DAN SYSTÈMES est propriétaire des droits de propriété intellectuelle et détient les droits
                            d&apos;usage sur tous les éléments accessibles sur le site, notamment les textes, images,
                            graphismes, logos, vidéos, icônes et sons.
                        </p>
                        <p>
                            Toute reproduction, représentation, modification, publication ou adaptation, totale ou
                            partielle, des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite
                            sans autorisation écrite préalable de DAN SYSTÈMES.
                        </p>
                        <p>
                            Toute exploitation non autorisée sera considérée comme constitutive d&apos;une contrefaçon
                            et poursuivie conformément aux articles L.335-2 et suivants du Code de la propriété
                            intellectuelle.
                        </p>
                    </div>

                    {/* Section 6 */}
                    <div>
                        <h2 className='text-primary mb-4 text-2xl font-semibold'>6. Limitations de responsabilité</h2>
                        <p>
                            DAN SYSTÈMES agit en tant qu&apos;éditeur du site. Elle est responsable de la qualité et de
                            la véracité du contenu publié.
                        </p>
                        <p>
                            Elle ne pourra être tenue responsable des dommages directs ou indirects causés au matériel
                            de l&apos;utilisateur lors de l&apos;accès au site, ni des dommages indirects consécutifs à
                            son utilisation (perte de marché, perte de chance, etc.).
                        </p>
                        <p>
                            Des espaces interactifs sont à la disposition des utilisateurs. DAN SYSTÈMES se réserve le
                            droit de supprimer, sans mise en demeure préalable, tout contenu contraire à la législation
                            française.
                        </p>
                    </div>

                    {/* Section 7 */}
                    <div>
                        <h2 className='text-primary mb-4 text-2xl font-semibold'>
                            7. Gestion des données personnelles
                        </h2>
                        <p>
                            DAN SYSTÈMES respecte la réglementation en vigueur applicable au traitement des données
                            personnelles, notamment le RGPD.
                        </p>

                        <h3 className='text-primary mt-4 font-semibold'>Droits des utilisateurs</h3>
                        <p>
                            Conformément à la réglementation européenne, les utilisateurs disposent des droits
                            d&apos;accès, de rectification, d&apos;effacement, d&apos;opposition, de limitation et de
                            portabilité de leurs données personnelles.
                        </p>
                        <p>
                            Toute demande relative à l&apos;exercice de ces droits peut être adressée à :{' '}
                            <a href='mailto:rgpd@dansystemes.com' className='text-accent hover:underline'>
                                rgpd@dansystemes.com
                            </a>
                        </p>
                        <p>
                            Les utilisateurs disposent également du droit d&apos;introduire une réclamation auprès de la
                            CNIL (
                            <a
                                href='https://www.cnil.fr'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='text-accent hover:underline'>
                                www.cnil.fr
                            </a>
                            ).
                        </p>
                    </div>

                    {/* Section 8 */}
                    <div>
                        <h2 className='text-primary mb-4 text-2xl font-semibold'>8. Cookies</h2>
                        <p>
                            Le site{' '}
                            <a href='https://dansystemes.com' className='text-accent hover:underline'>
                                https://dansystemes.com
                            </a>{' '}
                            peut utiliser des cookies afin d&apos;améliorer l&apos;expérience utilisateur et
                            d&apos;effectuer des statistiques de navigation.
                        </p>
                        <p>L&apos;utilisateur peut configurer son navigateur pour refuser les cookies.</p>
                    </div>

                    {/* Section 9 */}
                    <div>
                        <h2 className='text-primary mb-4 text-2xl font-semibold'>9. Liens hypertextes</h2>
                        <p>
                            Le site peut contenir des liens vers d&apos;autres sites. DAN SYSTÈMES ne dispose
                            d&apos;aucun moyen de contrôle sur ces sites et décline toute responsabilité quant à leur
                            contenu.
                        </p>
                    </div>

                    {/* Section 10 */}
                    <div>
                        <h2 className='text-primary mb-4 text-2xl font-semibold'>
                            10. Droit applicable et attribution de juridiction
                        </h2>
                        <p>
                            Tout litige en relation avec l&apos;utilisation du site{' '}
                            <a href='https://dansystemes.com' className='text-accent hover:underline'>
                                https://dansystemes.com
                            </a>{' '}
                            est soumis au droit français.
                        </p>
                        <p>Il est fait attribution exclusive de juridiction aux tribunaux compétents de Bobigny.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
