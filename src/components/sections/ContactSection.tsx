'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillMail } from 'react-icons/ai';
import { HiArrowRight, HiCheck, HiExclamationCircle } from 'react-icons/hi';
import { fadeInUp, staggerContainer } from '../../constants/animations';

const contactMethods = [
  {
    icon: AiFillMail,
    label: 'Email',
    value: 'senan996@gmail.com',
    link: 'mailto:senan996@gmail.com',
  },
  {
    icon: AiFillLinkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/sanan-abbasov/',
    link: 'https://linkedin.com/in/sanan-abbasov/',
  },
  {
    icon: AiFillGithub,
    label: 'GitHub',
    value: 'github.com/SenanAbb',
    link: 'https://github.com/SenanAbb',
  },
];

export const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const isFormValid = Object.values(formData).every((v) => v.trim() !== '');

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isFormValid) return;
    setSending(true);
    setError('');

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const contentType = res.headers.get('content-type');
      const hasJSON = contentType && contentType.includes('application/json');
      const data = hasJSON ? await res.json() : null;

      if (res.ok) {
        setSent(true);
        setFormData({ name: '', email: '', message: '' });
      } else if (res.status === 429) {
        setError('Demasiadas solicitudes. Intenta más tarde.');
      } else if (res.status === 400 && data?.error) {
        setError(`Error en el formulario: ${data.error}`);
      } else {
        setError('Error al enviar el mensaje. Intenta de nuevo.');
      }
    } catch (err) {
      console.error(err);
      setError('Error de conexión. Verifica tu internet.');
    } finally {
      setSending(false);
    }
  };

  useEffect(() => {
    if (sent) {
      const t = setTimeout(() => setSent(false), 5000);
      return () => clearTimeout(t);
    }
  }, [sent]);

  useEffect(() => {
    if (error) {
      const t = setTimeout(() => setError(''), 8000);
      return () => clearTimeout(t);
    }
  }, [error]);

  return (
    <section
      id="contact"
      data-section="contact"
      className="relative py-24 md:py-32 border-t-2 border-border"
    >
      <div className="container-edge">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="max-w-3xl mx-auto flex flex-col items-center text-center"
        >
          <motion.div variants={fadeInUp} className="mb-8">
            <span className="section-label">06 / Contacto</span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="font-display font-black uppercase tracking-tighter leading-[0.85] text-balance"
            style={{ fontSize: 'clamp(3rem, 11vw, 10rem)' }}
          >
            Hablemos<span className="text-accent">.</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-lg sm:text-xl text-fg/80 leading-relaxed mt-8 max-w-xl"
          >
            Abierto a oportunidades, colaboraciones o simplemente charlar sobre
            tecnología. Respuesta en menos de 24 h.
          </motion.p>

          <motion.ul
            variants={fadeInUp}
            className="w-full max-w-2xl mt-12 border-2 border-border divide-y-2 divide-border bg-bg text-left"
          >
            {contactMethods.map((m) => {
              const Icon = m.icon;
              return (
                <li key={m.label}>
                  <a
                    href={m.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-4 p-5 sm:p-6 hover:bg-fg hover:text-bg transition-colors group"
                  >
                    <Icon className="w-6 h-6 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="font-mono text-[10px] uppercase tracking-widest text-muted-fg group-hover:text-bg/70">
                        {m.label}
                      </p>
                      <p className="font-display font-bold text-base sm:text-lg truncate">
                        {m.value}
                      </p>
                    </div>
                    <HiArrowRight className="w-4 h-4 flex-shrink-0 transition-transform group-hover:translate-x-1" />
                  </a>
                </li>
              );
            })}
          </motion.ul>

          <motion.form
            variants={fadeInUp}
            onSubmit={handleSubmit}
            className="w-full max-w-2xl mt-8 text-left"
          >
            <div className="border-2 border-border bg-bg p-6 sm:p-8 space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block font-mono text-[10px] uppercase tracking-widest text-muted-fg mb-2"
                >
                  Nombre *
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={sending}
                  placeholder="Tu nombre"
                  className="w-full bg-transparent border-b-2 border-border focus:border-accent outline-none py-3 text-base sm:text-lg placeholder:text-muted-fg/60 transition-colors disabled:opacity-50"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block font-mono text-[10px] uppercase tracking-widest text-muted-fg mb-2"
                >
                  Email *
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={sending}
                  placeholder="tu@email.com"
                  className="w-full bg-transparent border-b-2 border-border focus:border-accent outline-none py-3 text-base sm:text-lg placeholder:text-muted-fg/60 transition-colors disabled:opacity-50"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block font-mono text-[10px] uppercase tracking-widest text-muted-fg mb-2"
                >
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  required
                  disabled={sending}
                  placeholder="Cuéntame en qué puedo ayudarte..."
                  className="w-full bg-transparent border-b-2 border-border focus:border-accent outline-none py-3 text-base sm:text-lg placeholder:text-muted-fg/60 resize-none transition-colors disabled:opacity-50"
                />
              </div>

              {error && (
                <div
                  role="alert"
                  className="flex items-center gap-3 p-3 border-2 border-red-500 text-red-600 dark:text-red-400 text-sm"
                >
                  <HiExclamationCircle className="w-5 h-5 flex-shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              {sent && (
                <div
                  role="status"
                  className="flex items-center gap-3 p-3 border-2 border-green-500 text-green-600 dark:text-green-400 text-sm"
                >
                  <HiCheck className="w-5 h-5 flex-shrink-0" />
                  <span>Mensaje enviado. Te respondo pronto.</span>
                </div>
              )}

              <button
                type="submit"
                disabled={!isFormValid || sending}
                className="btn btn-accent w-full disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-accent disabled:hover:text-accent-fg disabled:hover:border-accent"
              >
                {sending ? (
                  <>
                    <motion.span
                      className="w-4 h-4 border-2 border-current border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                    />
                    Enviando
                  </>
                ) : (
                  <>
                    Enviar mensaje <HiArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};
