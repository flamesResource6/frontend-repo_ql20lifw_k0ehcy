import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative isolate">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-20 md:grid-cols-2 md:py-28">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-600 shadow-sm">
            <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
            Meet your friendly AI sidekick
          </div>
          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            A playful, futuristic chatbot for everyone
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-gray-600 md:text-lg">
            Build delightful conversations with an expressive robot that moves with your cursor. Smart, curious, and always ready to help—without the corporate fuss.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#demo" className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-emerald-600">
              Try the demo
            </a>
            <a href="#features" className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50">
              See features
            </a>
          </div>
          <div className="mt-6 flex items-center gap-3 text-xs text-gray-500">
            <img src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=100&auto=format&fit=crop" alt="avatar" className="h-6 w-6 rounded-full object-cover" />
            <span>Trusted by makers at 500+ startups</span>
          </div>
        </div>
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-b from-gray-50 to-gray-100">
          <Spline
            scene="https://prod.spline.design/OG17yM2eUIs8MUmA/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/60 via-white/10 to-transparent" />
        </div>
      </div>

      <div className="absolute inset-0 -z-0 select-none overflow-hidden">
        <div className="pointer-events-none absolute -left-1/2 top-[-10%] h-[60rem] w-[60rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.15),transparent_60%)] blur-3xl" />
        <div className="pointer-events-none absolute -right-1/2 top-1/3 h-[60rem] w-[60rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.15),transparent_60%)] blur-3xl" />
      </div>
    </section>
  );
}
