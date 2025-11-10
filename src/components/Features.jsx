import React from 'react';
import { Sparkles, MousePointer, ShieldCheck, PlugZap } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'Expressive personality',
    desc: 'A friendly tone, playful micro-interactions, and delightful responses that feel alive.'
  },
  {
    icon: MousePointer,
    title: 'Interactive 3D hero',
    desc: 'The robot follows your cursor with smooth motion for an engaging first impression.'
  },
  {
    icon: ShieldCheck,
    title: 'Privacy-first',
    desc: 'Clear controls and safe defaults keep your data protected and conversations secure.'
  },
  {
    icon: PlugZap,
    title: 'Easy to integrate',
    desc: 'Drop-in widget or full SDK for web apps. Works with your existing stack.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative mx-auto max-w-7xl px-6 py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Designed to be fun and helpful</h2>
        <p className="mt-3 text-gray-600">Built with a clean, cartoonish aesthetic and bright accents that keep things approachable.</p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-emerald-400/20 to-sky-500/20 text-emerald-600 ring-1 ring-emerald-500/30">
              <Icon size={22} />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
            <p className="mt-2 text-sm text-gray-600">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
