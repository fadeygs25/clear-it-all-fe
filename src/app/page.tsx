// src/app/referral/page.tsx
import * as React from 'react';
import { ReferralCard } from '@/components/ReferralCard/ReferralCard';
import { referralData } from '@/services/referralService';

const ReferralManager: React.FC = () => (
  <main className="flex flex-col items-center bg-slate-950 pb-4">
    <header className="w-full border-b border-slate-700 px-11 py-4 bg-opacity-60 backdrop-blur-[3px]">
      <div className="flex gap-5 max-md:flex-col">
        <section className="flex flex-col max-md:w-full w-1/2">
          <h1 className="text-2xl font-bold text-gray-50">Unlock Rewards with the Copin Referral Program</h1>
          <p className="mt-3 text-stone-300">
            Earn rebates and commissions by inviting friends.<br />
            Grow your network and benefit from our 6-tier reward system.
          </p>
          <button className="mt-3 text-blue-300 font-semibold flex items-center gap-2">
            View referral Ranking
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d5f2fa3e3bc95659b347bbde783b1eb32db180cbb99e0730b3e5e8e8563b2b3b?placeholderIfAbsent=true&apiKey=96fc5fc9f166424d9d32db07e1947910" alt="" className="w-4 aspect-square" />
          </button>
        </section>
        <section className="flex w-1/2 justify-center">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/52b565348d05b086e1ff3e698a2ddeaa45bc4fada2aecfc24102ca22d6f12dd8?placeholderIfAbsent=true&apiKey=96fc5fc9f166424d9d32db07e1947910" alt="Referral program illustration" className="w-full aspect-[1.52] rounded" />
        </section>
      </div>
    </header>

    <section className="mt-4 max-w-[1029px] w-full">
      <h2 className="flex gap-2 text-gray-50 text-base font-medium items-center mb-3">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/41ee5cb87ef303b9d622cb1aafd5fb22128f654873cd3c62985e6a591f714d62?placeholderIfAbsent=true&apiKey=96fc5fc9f166424d9d32db07e1947910" alt="How it works icon" className="w-6" />
        How It Works?
      </h2>
      <div className="flex flex-wrap gap-2">
        {referralData.map((data, index) => (
          <ReferralCard key={index} {...data} />
        ))}
      </div>
    </section>

    <section className="bg-gray-900 py-12 px-5 mt-4 w-full max-w-[1029px] text-center">
      <h2 className="text-base font-bold text-gray-50 mb-2">Apply Copin Affiliate Program to get more benefits!</h2>
      <button className="text-blue-400 font-semibold text-sm">Contact us</button>
    </section>
  </main>
);

export default ReferralManager;
