'use client';

import Section from './ui/Section';
import Card from './ui/Card';
import { Mail, Send, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <Section id="contact" className="mb-20">
      <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
        <span className="text-secondary">05.</span> Get In Touch
      </h2>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <p className="text-lg text-gray-300 leading-relaxed">
            I&apos;m currently looking for new opportunities. Whether you have a question, 
            a project idea, or just want to say hi, I&apos;ll try my best to get back to you!
          </p>
          
          <div className="flex flex-col gap-4">
            <a href="mailto:abner.rds01@gmail.com" className="flex items-center gap-3 text-gray-300 hover:text-primary transition-colors p-4 rounded-xl bg-card border border-white/5 hover:border-primary/30">
              <Mail className="text-secondary" />
              <span>abner.rds01@gmail.com</span>
            </a>
            <a href="https://linkedin.com/in/abner-rodrigues-dev" target="_blank" className="flex items-center gap-3 text-gray-300 hover:text-primary transition-colors p-4 rounded-xl bg-card border border-white/5 hover:border-primary/30">
              <Linkedin className="text-secondary" />
              <span>LinkedIn Profile</span>
            </a>
             <a href="https://github.com/AbnerRS" target="_blank" className="flex items-center gap-3 text-gray-300 hover:text-primary transition-colors p-4 rounded-xl bg-card border border-white/5 hover:border-primary/30">
              <Github className="text-secondary" />
              <span>Github Profile</span>
            </a>
          </div>
        </div>

        <Card>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Name</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 focus:outline-none focus:border-primary transition-colors" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Email</label>
                <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 focus:outline-none focus:border-primary transition-colors" placeholder="john@example.com" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400">Message</label>
              <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-lg p-3 focus:outline-none focus:border-primary transition-colors" placeholder="Your message..." />
            </div>
            <button className="w-full bg-linear-to-r from-primary to-secondary text-white font-bold py-4 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
              Send Message <Send size={18} />
            </button>
          </form>
        </Card>
      </div>
    </Section>
  );
}
