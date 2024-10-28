// src/app/referral/page.tsx
import * as React from 'react';
import { ReferralCard } from '@/components/ReferralCard/ReferralCard';
import { referralData } from '@/services/referralService';
import Image from 'next/image';
import styles from '../styles/AffiliateProgram.module.css';

const ReferralManager: React.FC = () => (
  <main className="flex overflow-hidden flex-col items-center pb-4 bg-slate-950">
    <header className="self-stretch px-11 py-4 w-full border-b border-solid backdrop-blur-[2.808971643447876px] border-b-slate-700 max-md:px-5 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <section className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch my-auto text-sm leading-6 max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-col w-full max-w-[441px] max-md:max-w-full">
              <h1 className="text-2xl font-bold text-gray-50 max-md:max-w-full">
                Unlock Rewards with the Copin Referral Program
              </h1>
              <p className="mt-3 text-stone-300">
                Earn rebates and commissions by inviting friends.
                <br />
                Grow your network and benefit from our 6-tier reward system.
              </p>
              <button className="flex gap-2 items-center self-start mt-3 font-semibold text-blue-300">
                <span className="self-stretch my-auto">View referral Ranking</span>
                <Image
                  src="/assets/icons/ranking-icon.png"
                  alt="Ranking Icon"
                  width={16}
                  height={16}
                  className="w-4 aspect-square"
                  priority
                />
              </button>
            </div>
          </div>
        </section>
        <section className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <Image
            src="/assets/images/referral-illustration.png"
            alt="Referral program illustration"
            width={500}
            height={330}
            className="w-full aspect-[1.52] rounded"
            priority
          />
        </section>
      </div>
    </header>

    <section className="flex flex-col mt-4 w-full px-11 max-md:max-w-full">
      <div className="flex gap-6 items-center self-start text-base font-medium text-gray-50">
        <div className="flex gap-2 items-center self-stretch my-auto">
          <Image
            src="/assets/icons/how-it-works-icon.png"
            alt="How it works icon"
            width={24}
            height={24}
            className="w-6"
            priority
          />
          <h2 className="self-stretch my-auto">How It Works?</h2>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 items-center mt-3 w-full max-md:max-w-full">
        {referralData.map((data, index) => (
          <ReferralCard key={index} {...data} />
        ))}
      </div>
    </section>

    <section className="flex flex-col justify-center items-center w-full leading-6 px-11 min-h-[177px] max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col justify-center items-center px-80 py-12 mt-4 w-full leading-6 bg-gray-900 min-h-[177px] max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col items-center max-w-full w-[303px]">
          <h2 className={styles.title}>
            Apply <span className={styles.gradientText}>Copin Affiliate Program</span> to get more benefits!
          </h2>

          <button className="flex gap-2 items-center mt-1 text-sm font-semibold text-blue-400">
            <span className="self-stretch my-auto">Contact us</span>
            <span className="flex shrink-0 self-stretch my-auto w-4 h-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  </main>
);

export default ReferralManager;
