import React from 'react';
import { Rocket } from 'lucide-react';

export default function CTA() {
  return (
    <section id="demo" className="relative py-20">
      <div className="mx-auto max-w-5xl rounded-3xl border border-gray-200 bg-white px-8 py-12 text-center shadow-sm">
        <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Ready to chat with our friendly bot?</h3>
        <p className="mx-auto mt-3 max-w-2xl text-gray-600">Spin up a playful assistant in minutes. Perfect for landing pages, help desks, and fun experiments.</p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-emerald-600">
            <Rocket size={18} /> Start free
          </button>
          <a href="#faq" className="rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50">Learn more</a>
        </div>
      </div>
    </section>
  );
}
