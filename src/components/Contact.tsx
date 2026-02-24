import React, { useState } from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Olá! 👋\n\nNome: ${form.name}\nEmail: ${form.email}\nAssunto: ${form.subject}\nMensagem: ${form.message}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/5511951631729?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "mariafernanda.mfsm8@gmail.com",
      href: "mailto:mariafernanda.mfsm8@gmail.com",
    },
    {
      icon: Phone,
      label: "Telefone",
      value: "+55 (11) 95163-1729",
      href: "tel:+5511951631729",
    },
    {
      icon: MapPin,
      label: "Localização",
      value: "São Paulo, Brasil",
      href: "#",
    },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/nandamyrita", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/maria-fernanda-439137202/",
      label: "LinkedIn",
    },
  ];

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-pink-400 to-orange-500 bg-clip-text text-transparent">
            Vamos Conversar?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-2">
            Tem uma ideia incrível ou quer colaborar em um projeto? Entre em contato!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* Informações de contato */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-6"
          >
            {/* Card de informações */}
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-white/80 dark:from-gray-800/50 to-gray-100/80 dark:to-gray-900/50 backdrop-blur border border-pink-500/20 rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 hover:border-pink-400/40 transition-all duration-300 shadow-lg dark:shadow-none"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gradient-to-r from-pink-500 to-orange-500 w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center">
                  <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                  Informações de Contato
                </h3>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 p-3 sm:p-4 bg-pink-500/10 rounded-lg sm:rounded-xl border border-pink-500/20 hover:border-pink-400/40 hover:bg-pink-500/20 transition-all duration-300 group"
                  >
                    <div className="bg-gradient-to-r from-pink-500 to-orange-500 w-10 h-10 sm:w-11 sm:h-11 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                      <info.icon className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm">{info.label}</p>
                      <p className="text-gray-900 dark:text-white font-medium text-sm sm:text-base truncate group-hover:text-pink-500 dark:group-hover:text-pink-300 transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Redes sociais */}
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-white/80 dark:from-gray-800/50 to-gray-100/80 dark:to-gray-900/50 backdrop-blur border border-pink-500/20 rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 hover:border-pink-400/40 transition-all duration-300 shadow-lg dark:shadow-none"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-pink-500 mb-4 sm:mb-6">
                Redes Sociais
              </h3>
              <div className="flex gap-3 sm:gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 p-3 sm:p-4 bg-pink-500/10 rounded-lg sm:rounded-xl border border-pink-500/20 hover:border-pink-400/40 hover:bg-pink-500/20 transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 group"
                  >
                    <social.icon className="h-5 w-5 sm:h-6 sm:w-6 text-pink-500 dark:text-pink-400 group-hover:text-pink-400 dark:group-hover:text-pink-300" />
                    <span className="text-gray-600 dark:text-gray-300 font-medium text-sm sm:text-base group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                      {social.label}
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Formulário de contato */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.form
              onSubmit={handleSubmit}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-white/80 dark:from-gray-800/50 to-gray-100/80 dark:to-gray-900/50 backdrop-blur border border-pink-500/20 rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 hover:border-pink-400/40 transition-all duration-300 h-full shadow-lg dark:shadow-none"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gradient-to-r from-pink-500 to-orange-500 w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center">
                  <Send className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                  Envie uma Mensagem
                </h3>
              </div>

              <div className="space-y-4 sm:space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-gray-600 dark:text-gray-300 text-sm sm:text-base font-medium">
                      Nome
                    </label>
                    <Input
                      name="name"
                      placeholder="Seu nome"
                      value={form.name}
                      onChange={handleChange}
                      className="bg-white/80 dark:bg-gray-800/50 border-pink-500/30 focus:border-pink-400 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 h-10 sm:h-11 text-sm sm:text-base rounded-lg"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-gray-600 dark:text-gray-300 text-sm sm:text-base font-medium">
                      Email
                    </label>
                    <Input
                      name="email"
                      type="email"
                      placeholder="seu@email.com"
                      value={form.email}
                      onChange={handleChange}
                      className="bg-white/80 dark:bg-gray-800/50 border-pink-500/30 focus:border-pink-400 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 h-10 sm:h-11 text-sm sm:text-base rounded-lg"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-gray-600 dark:text-gray-300 text-sm sm:text-base font-medium">
                    Assunto
                  </label>
                  <Input
                    name="subject"
                    placeholder="Sobre o que quer conversar?"
                    value={form.subject}
                    onChange={handleChange}
                    className="bg-white/80 dark:bg-gray-800/50 border-pink-500/30 focus:border-pink-400 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 h-10 sm:h-11 text-sm sm:text-base rounded-lg"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-gray-600 dark:text-gray-300 text-sm sm:text-base font-medium">
                    Mensagem
                  </label>
                  <Textarea
                    name="message"
                    placeholder="Conte-me sobre seu projeto ou ideia..."
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    className="bg-white/80 dark:bg-gray-800/50 border-pink-500/30 focus:border-pink-400 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 resize-none text-sm sm:text-base rounded-lg"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-gradient-to-br from-pink-500/20 to-orange-500/20 border border-pink-500/40 hover:border-pink-400 hover:shadow-lg hover:shadow-pink-500/30 transition-all duration-300"
                  >
                    <Send className="h-4 w-4 text-pink-400" />
                    <span className="text-sm font-medium text-pink-400 hover:text-pink-300 transition-colors">Enviar via WhatsApp</span>
                  </button>
                </div>
              </div>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
