import { ReferralCardProps } from '../../types/referralTypes';

export const ReferralCard: React.FC<ReferralCardProps> = ({ icon, title, description }) => (
  <article className="flex flex-col p-4 rounded border border-slate-700 min-w-[240px] w-[202px] backdrop-blur-[8px]">
    <img loading="lazy" src={icon} alt={title} className="w-[46px] aspect-square mb-6" />
    <h3 className="text-base font-medium text-gray-50">{title}</h3>
    <p className="mt-2 text-sm leading-6 text-stone-300">{description}</p>
  </article>
);