import React from 'react';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-gray-200/70 bg-white/70 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-gray-500 sm:flex-row">
        <p className="order-2 sm:order-1">© {year} Chatterly. All rights reserved.</p>
        <div className="order-1 flex items-center gap-5 sm:order-2">
          <a href="#" className="hover:text-gray-800">Privacy</a>
          <a href="#" className="hover:text-gray-800">Terms</a>
          <a href="#" className="hover:text-gray-800">Contact</a>
        </div>
      </div>
    </footer>
  );
}
