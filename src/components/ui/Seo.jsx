import { Helmet } from 'react-helmet';

export default function Seo({ title, description }) {
  const fullTitle = title ? `${title} | Sree Archana Yanamadala` : 'Sree Archana Yanamadala | Frontend Developer';
  const metaDescription = description || 'Frontend Developer in France building responsive React applications with clean components, API integration, and recruiter-ready project work.';

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_US" />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
}
