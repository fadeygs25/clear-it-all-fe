// src/components/ReferralCard/ReferralCard.tsx
import { ReferralCardProps } from '../../types/referralTypes';
import Image from 'next/image';

export const ReferralCard: React.FC<ReferralCardProps> = ({ icon, title, description }) => (
  <article className="flex flex-col grow shrink self-stretch my-auto rounded border border-solid backdrop-blur-[7.84346866607666px] border-slate-700 min-w-[240px] w-[202px]">
    <div className="flex flex-col py-4 pr-3.5 pl-4 w-full rounded-sm">
      <Image
        src={icon}
        alt={title}
        width={46}
        height={46}
        className="mb-6"
        priority
      />
      <div className="flex flex-col mt-6 max-w-full w-[222px]">
        <h3 className="text-base font-medium text-gray-50">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-stone-300">{description}</p>
      </div>
    </div>
  </article>
);
