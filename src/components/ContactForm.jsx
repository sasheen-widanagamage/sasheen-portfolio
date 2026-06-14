import { useState } from 'react';
import { FiSend } from 'react-icons/fi';
import { profile } from '../data/portfolio';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const update = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const submit = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(form.subject || 'Portfolio contact');
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  const inputClass = 'focus-ring w-full rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-sm font-medium text-ink placeholder:text-slate-400 transition focus:border-primary-400 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-slate-500';

  return (
    <form onSubmit={submit} className="glass-card rounded-[2rem] p-5 sm:p-7">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-bold text-slate-700 dark:text-slate-200">
          Your name
          <input required name="name" value={form.name} onChange={update} className={`${inputClass} mt-2`} placeholder="Enter your name" />
        </label>
        <label className="text-sm font-bold text-slate-700 dark:text-slate-200">
          Email address
          <input required type="email" name="email" value={form.email} onChange={update} className={`${inputClass} mt-2`} placeholder="name@example.com" />
        </label>
      </div>
      <label className="mt-4 block text-sm font-bold text-slate-700 dark:text-slate-200">
        Subject
        <input required name="subject" value={form.subject} onChange={update} className={`${inputClass} mt-2`} placeholder="Internship opportunity" />
      </label>
      <label className="mt-4 block text-sm font-bold text-slate-700 dark:text-slate-200">
        Message
        <textarea required name="message" value={form.message} onChange={update} rows="5" className={`${inputClass} mt-2 resize-y`} placeholder="Write your message" />
      </label>
      <button
        type="submit"
        className="focus-ring mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary-600 px-5 py-3 text-sm font-extrabold text-white transition hover:bg-primary-700 sm:w-auto"
      >
        Send message <FiSend aria-hidden="true" />
      </button>
    </form>
  );
}
