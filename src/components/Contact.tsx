import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
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
      value: "+55 (11)95163-1729",
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
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-orange-500 bg-clip-text text-transparent">
            Vamos Conversar?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Tenho uma ideia incrível ou quer colaborar em um projeto? Entre em
            contato!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Informações de contato */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur border border-pink-500/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-pink-400 mb-6">
                Informações de Contato
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-center gap-4 p-4 bg-pink-500/10 rounded-xl border border-pink-500/20 hover:border-pink-400/40 hover:bg-pink-500/20 transition-all duration-300 group"
                  >
                    <div className="bg-gradient-to-r from-pink-500 to-orange-500 w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{info.label}</p>
                      <p className="text-white font-medium">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Redes sociais */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur border border-pink-500/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-pink-400 mb-6">
                Redes Sociais
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-4 bg-gradient-to-r from-pink-500/20 to-orange-500/20 rounded-xl border border-pink-500/30 hover:border-pink-400/50 hover:bg-pink-500/30 transition-all duration-300 group"
                  >
                    <social.icon className="h-6 w-6 text-pink-400 group-hover:text-pink-300" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Formulário de contato */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur border border-pink-500/20 rounded-2xl p-8 space-y-6"
            >
              <h3 className="text-2xl font-bold text-pink-400 mb-6">
                Envie uma Mensagem
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-gray-300">Nome</label>
                  <Input
                    name="name"
                    placeholder="Seu nome"
                    value={form.name}
                    onChange={handleChange}
                    className="bg-gray-800/50 border-pink-500/30 focus:border-pink-400 text-white placeholder:text-gray-500"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-gray-300">Email</label>
                  <Input
                    name="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={form.email}
                    onChange={handleChange}
                    className="bg-gray-800/50 border-pink-500/30 focus:border-pink-400 text-white placeholder:text-gray-500"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-gray-300">Assunto</label>
                <Input
                  name="subject"
                  placeholder="Assunto da mensagem"
                  value={form.subject}
                  onChange={handleChange}
                  className="bg-gray-800/50 border-pink-500/30 focus:border-pink-400 text-white placeholder:text-gray-500"
                />
              </div>

              <div className="space-y-2">
                <label className="text-gray-300">Mensagem</label>
                <Textarea
                  name="message"
                  placeholder="Descreva sua ideia ou projeto..."
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  className="bg-gray-800/50 border-pink-500/30 focus:border-pink-400 text-white placeholder:text-gray-500 resize-none"
                />
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 border-0 text-white py-6 text-lg rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/25 group"
                >
                  <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  Enviar Mensagem
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
