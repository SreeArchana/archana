import { Link } from 'react-router-dom';
import Seo from '../components/ui/Seo.jsx';

export default function NotFound() {
  return (
    <>
      <Seo title="Page not found" />
      <section className="section page-hero not-found">
        <p className="eyebrow">404</p>
        <h1>This page is not part of the portfolio.</h1>
        <p>The main portfolio, project gallery, and contact page are available from the navigation.</p>
        <Link className="button primary" to="/">Back to Home</Link>
      </section>
    </>
  );
}
