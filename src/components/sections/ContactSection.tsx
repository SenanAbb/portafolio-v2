'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { fadeInUp, fadeInLeft, fadeInRight } from '../../constants/animations';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const isFormValid = Object.values(formData).every((val) => val.trim() !== '');

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
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const contentType = res.headers.get('content-type');
      const hasJSON = contentType && contentType.includes('application/json');
      const data = hasJSON ? await res.json() : null;

      if (res.ok) {
        setSent(true);
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      } else if (res.status === 429) {
        setError('Demasiadas solicitudes. Por favor, inténtalo más tarde.');
      } else if (res.status === 400 && data?.error) {
        setError(`Error en el formulario: ${data.error}`);
      } else {
        setError('Error al enviar el mensaje. Por favor, inténtalo de nuevo.');
      }
    } catch (error) {
      console.error('Network or unexpected error:', error);
      setError(
        'Error de conexión. Por favor, verifica tu conexión a internet.'
      );
    } finally {
      setSending(false);
    }
  };

  useEffect(() => {
    if (sending) {
      const timer = setTimeout(() => {
        setSending(false);
      }, 10000); // 10 segundos máximo para timeout
      return () => clearTimeout(timer);
    }
  }, [sending]);

  useEffect(() => {
    if (sent) {
      const timer = setTimeout(() => {
        setSent(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [sent]);

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError('');
      }, 8000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  const contactMethods = [
    {
      icon: '📧',
      label: 'Email',
      value: 'senan@gmail.com',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'linkedin.com/in/sanan-abbasov/',
      gradient: 'from-blue-600 to-blue-700',
    },
    {
      icon: '🐙',
      label: 'GitHub',
      value: 'github.com/SenanAbb',
      gradient: 'from-gray-700 to-gray-900',
    },
  ];

  return (
    <section
      id="contact"
      data-section="contact"
      className="min-h-screen w-screen flex-shrink-0 snap-start flex items-center justify-center bg-gradient-to-br from-blue-50 via-gray-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-indigo-900/20 px-4 sm:px-6 relative"
    >
      {/* Elementos decorativos futuristas */}
      <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-36 sm:w-54 md:w-72 h-36 sm:h-54 md:h-72 bg-gradient-to-r from-blue-400/25 to-cyan-400/25 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-2xl animate-pulse delay-1000"></div>

      {/* Wave pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="waves"
              x="0"
              y="0"
              width="20"
              height="10"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M0 5 Q5 0 10 5 T20 5"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            fill="url(#waves)"
            className="text-blue-500"
          />
        </svg>
      </div>

      {/* Partículas flotantes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 6 + Math.random() * 3,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto relative z-10 w-full">
        <motion.h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-8 sm:mb-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          Hablemos{' '}
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
            Juntos
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInLeft}
            className="order-2 lg:order-1"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white mb-4 sm:mb-6 text-center lg:text-left">
              ¡Conectemos! 🚀
            </h3>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 text-center lg:text-left">
              Estoy siempre abierto a nuevas oportunidades y proyectos
              interesantes. No dudes en contactarme si quieres colaborar o
              simplemente charlar sobre{' '}
              <span className="text-blue-600 dark:text-blue-400 font-semibold">
                tecnología
              </span>
              .
            </p>

            <div className="space-y-4 flex flex-col items-center lg:items-start">
              {contactMethods.map((method) => (
                <motion.div
                  key={method.label}
                  className="flex items-center space-x-4 group cursor-pointer"
                  whileHover={{ scale: 1.05, x: 10 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${method.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                  >
                    <span className="text-white text-xl">{method.icon}</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                      {method.label}
                    </p>
                    <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-base group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {method.value}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.form
            className="space-y-4 sm:space-y-6 order-1 lg:order-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInRight}
            onSubmit={handleSubmit}
          >
            <div className="space-y-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Tu nombre *"
                  required
                  disabled={sending}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm text-sm sm:text-base text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Tu email *"
                  required
                  disabled={sending}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm text-sm sm:text-base text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tu mensaje *"
                  required
                  disabled={sending}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm text-sm sm:text-base text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </motion.div>
            </div>

            {/* Mensajes de estado */}
            {(error || sent) && (
              <div className="min-h-[60px] flex flex-col justify-center">
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center space-x-3 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl text-red-600 dark:text-red-400"
                  >
                    <span className="text-xl">⚠️</span>
                    <p className="text-sm sm:text-base">{error}</p>
                  </motion.div>
                )}

                {sent && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center space-x-3 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl text-green-600 dark:text-green-400"
                  >
                    <span className="text-xl">✅</span>
                    <p className="text-sm sm:text-base">
                      ¡Mensaje enviado correctamente! Te responderé pronto.
                    </p>
                  </motion.div>
                )}
              </div>
            )}

            <motion.button
              type="submit"
              disabled={!isFormValid || sending}
              className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 text-white rounded-xl font-medium shadow-lg text-sm sm:text-base relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={
                !sending && !!isFormValid
                  ? {
                      scale: 1.02,
                      boxShadow: '0 15px 35px rgba(59, 130, 246, 0.4)',
                    }
                  : {}
              }
              whileTap={!sending && !!isFormValid ? { scale: 0.98 } : {}}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <span className="relative z-10 flex items-center justify-center space-x-2">
                {sending ? (
                  <>
                    <motion.div
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: 'linear',
                      }}
                    />
                    <span>Enviando...</span>
                  </>
                ) : (
                  <>
                    <span>Enviar Mensaje</span>
                    <span className="text-lg">🚀</span>
                  </>
                )}
              </span>
              {!sending && (
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
