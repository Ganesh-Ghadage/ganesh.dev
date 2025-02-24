import { useState } from "react";
import { Mail, Download, Linkedin, Github } from "lucide-react";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true)
    emailjs
      .send("gmail_service","contact_template", formData, {
        publicKey: import.meta.env.VITE_EMAILIS_PUBLIC_KEY,
      })
      .then(
        () => {
          alert('Message sent succesfully');
          setIsLoading(false)
        },
        () => {
          alert("Something went wrong, Message not sent");
          setIsLoading(false)
        },
      );
    setFormData({ name: "", email: "", message: "" });
    
  };

  return (
    <section id="contact" className="py-8 ">
      <div className="container mx-auto px-4 max-w-2xl text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Let's Get in Touch</h2>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 shadow-lg p-6 rounded-lg">
          <div className="mb-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
            />
          </div>

          <div className="mb-4">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
            />
          </div>

          <div className="mb-4">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              rows={4}
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition`}
          >
            {isLoading ? 'Sending Message...' : 'Send Message'}
          </button>
        </form>

        {/* Contact Buttons */}
        <div className="flex justify-center gap-4 mt-6">
          <a
            href="mailto:ganeshvg22@gmail.com"
            className="flex items-center gap-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white px-4 py-2 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            <Mail size={20} />
            Email Me
          </a>

          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
          >
            <Download size={20} />
            Download Resume
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-6">
          <a href="https://www.linkedin.com/in/ganesh-ghadage/" target="_blank" className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition">
            <Linkedin size={28} />
          </a>
          <a href="https://github.com/Ganesh-Ghadage" target="_blank" className="text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-400 transition">
            <Github size={28} />
          </a>
          {/* <a href="https://twitter.com/yourhandle" target="_blank" className="text-gray-900 dark:text-white hover:text-blue-400 dark:hover:text-blue-300 transition">
            <Twitter size={28} />
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
