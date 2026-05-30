import { useState } from 'react';
import { FiMail, FiMapPin, FiSend } from 'react-icons/fi';
import Seo from '../components/ui/Seo.jsx';
import { profile } from '../data/profile.js';
import { hasEmailConfig, sendContactEmail } from '../services/emailService.js';

const emptyForm = { name: '', email: '', subject: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState('');
  const configured = hasEmailConfig();

  const update = (event) => setForm((current) => ({ ...current, [event.target.name]: event.target.value }));

  const submit = async (event) => {
    event.preventDefault();
    if (!form.name || !form.email || !form.subject || !form.message) {
      setStatus('Please complete all fields before sending.');
      return;
    }
    try {
      const result = await sendContactEmail(form);
      setStatus(result.skipped ? 'EmailJS is not configured yet. Please use the direct email link for now.' : 'Message sent. Thank you for reaching out.');
      if (!result.skipped) setForm(emptyForm);
    } catch {
      setStatus('The form could not send right now. Please use the direct email link.');
    }
  };

  return (
    <>
      <Seo title="Contact" description="Contact Sree Archana Yanamadala for frontend developer roles, React projects, and recruiter conversations in France and Europe." />
      <section className="section contact-page">
        <div>
          <p className="eyebrow">Contact</p>
          <h1>Let’s talk about frontend opportunities.</h1>
          <p>I am based in {profile.location} and open to React-focused frontend roles, freelance discussions, and recruiter conversations.</p>
          <div className="contact-details">
            <a href={`mailto:${profile.email}`}><FiMail /> {profile.email}</a>
            <span><FiMapPin /> {profile.location}</span>
          </div>
        </div>
        <form className="contact-form" onSubmit={submit}>
          {!configured && <p className="form-note">EmailJS environment variables are not set yet, so the form will show a safe fallback message.</p>}
          <label>Name<input name="name" value={form.name} onChange={update} autoComplete="name" /></label>
          <label>Email<input name="email" value={form.email} onChange={update} autoComplete="email" type="email" /></label>
          <label>Subject<input name="subject" value={form.subject} onChange={update} /></label>
          <label>Message<textarea name="message" value={form.message} onChange={update} rows="6" /></label>
          <button className="button primary" type="submit">Send Message <FiSend /></button>
          {status && <p className="form-status" role="status">{status}</p>}
        </form>
      </section>
    </>
  );
}
