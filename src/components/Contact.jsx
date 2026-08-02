import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

// ---------------------------------------------------------------------------
// EmailJS setup (https://www.emailjs.com — free tier is enough for a portfolio):
//   1. Create an account, add an Email Service (e.g. Gmail) → copy the Service ID.
//   2. Create an Email Template with {{from_name}}, {{from_email}}, {{subject}},
//      {{message}} variables → copy the Template ID.
//   3. Account → General → copy your Public Key.
//   4. Paste all three below. Until then, the form will show a friendly error
//      instead of silently failing.
// ---------------------------------------------------------------------------
const EMAILJS_SERVICE_ID = 'service_3takm8v';
const EMAILJS_TEMPLATE_ID = 'template_stq0e3g';
const EMAILJS_PUBLIC_KEY = '-ky1xEZU3MECSJ4Uf';

const INFO = [
  { icon: FaEnvelope, label: 'Email', value: 'chandrasekharsamal981@gmail.com', href: 'mailto:chandrasekharsamal981@gmail.com' },
  { icon: FaGithub, label: 'GitHub', value: 'github.com/Chandrasekhar0707', href: 'https://github.com/Chandrasekhar0707' },
  { icon: FaLinkedin, label: 'LinkedIn', value: 'in/chandrasekhar-samal-a50356318', href: 'https://www.linkedin.com/in/chandrasekhar-samal-a50356318' },
  { icon: FaMapMarkerAlt, label: 'Location', value: 'Odisha, India', href: null },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const isConfigured =
    EMAILJS_SERVICE_ID !== 'YOUR_SERVICE_ID' &&
    EMAILJS_TEMPLATE_ID !== 'YOUR_TEMPLATE_ID' &&
    EMAILJS_PUBLIC_KEY !== 'YOUR_PUBLIC_KEY';

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isConfigured) {
      // EmailJS keys not set yet — fall back to opening the visitor's mail client.
      const mailto = `mailto:chandrasekharsamal981@gmail.com?subject=${encodeURIComponent(
        form.subject || `Portfolio message from ${form.name}`
      )}&body=${encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)}`;
      window.location.href = mailto;
      setStatus('sent');
      setTimeout(() => setStatus('idle'), 4000);
      return;
    }

    setStatus('sending');
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      setStatus('sent');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
    } finally {
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="section-container">
      <motion.h2
        className="section-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Get In <span className="gradient-text">Touch</span>
      </motion.h2>
      <p className="section-sub">Have an opportunity or an idea? My inbox is open.</p>

      <div className="grid md:grid-cols-2 gap-8">
        <motion.form
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="card p-6 space-y-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              required
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-xl bg-white/70 dark:bg-white/5 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
            />
            <input
              required
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-xl bg-white/70 dark:bg-white/5 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
            />
          </div>
          <input
            required
            name="subject"
            value={form.subject}
            onChange={handleChange}
            placeholder="Subject"
            className="w-full px-4 py-3 rounded-xl bg-white/70 dark:bg-white/5 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
          />
          <textarea
            required
            rows={5}
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="w-full px-4 py-3 rounded-xl bg-white/70 dark:bg-white/5 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm resize-none"
          />
          <button type="submit" disabled={status === 'sending'} className="btn-primary w-full justify-center disabled:opacity-60">
            <FaPaperPlane size={13} /> {status === 'sending' ? 'Sending…' : 'Send Message'}
          </button>

          <AnimatePresence mode="wait">
            {status === 'sent' && (
              <motion.div
                key="sent"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-2 text-sm text-emerald-500 font-medium"
              >
                <FaCheckCircle /> {isConfigured ? 'Message sent — thank you!' : 'Opening your mail app with the message ready to send…'}
              </motion.div>
            )}
            {status === 'error' && (
              <motion.div
                key="error"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-2 text-sm text-red-500 font-medium"
              >
                <FaExclamationCircle /> Something went wrong — please email me directly instead.
              </motion.div>
            )}
          </AnimatePresence>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-4"
        >
          {INFO.map(({ icon: Icon, label, value, href }) => {
            const content = (
              <div className="card card-glow p-5 mb-2 mt-2 flex items-center gap-4 hover:border-primary-500/50 transition-colors">
                <div className="w-11 h-11 rounded-xl bg-primary-500/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="text-primary-500" size={16} />
                </div>
                <div>
                  <p className="text-xs text-slate-400">{label}</p>
                  <p className="text-sm font-medium break-all">{value}</p>
                </div>
              </div>
            );
            return href ? (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer">{content}</a>
            ) : (
              <div key={label}>{content}</div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
