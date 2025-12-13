import React from 'react';
import Image from 'next/image';
import userData from '../lib/userData';

type HelpData = {
  title: string;
  subtitle?: string;
  ctaLabel: string;
  ctaLink?: string;
  illustrationUrl?: string;
};

const defaultData: HelpData = {
  title: 'Need Help?\nConnect with our Executive',
  ctaLabel: 'Connect',
  ctaLink: '#',
  illustrationUrl: '/icons/ThumbsUpFooter.svg',
};

export default function ProfileFooter({ data }: { data?: HelpData }) {
  const { title, subtitle, ctaLabel, ctaLink, illustrationUrl } = data || defaultData;

  const textStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    flex: 1,
  };

  const titleStyle: React.CSSProperties = {
    margin: 0,
    whiteSpace: 'pre-line',
    fontSize: 20,
    lineHeight: '28px',
    color: '#0f172a',
    fontWeight: 600,
  };

  const btnStyle: React.CSSProperties = {
    display: 'inline-block',
    background: '#000',
    color: '#fff',
    padding: '12px 36px',
    minWidth: 140,
    borderRadius: 9999,
    textDecoration: 'none',
    fontSize: 14,
    textAlign: 'center',
  };

  const imgWrapperStyle: React.CSSProperties = {
    flex: '0 0 170px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    overflow: 'hidden',
  };

  return (
    <section className="relative rounded-2xl bg-white p-6 shadow-md w-full max-w-md mx-auto overflow-hidden">
      {/* Absolute SVG in bottom-left touching the card edge */}
      {illustrationUrl ? (
        <div className="absolute left-0 bottom-0 w-40 h-28 rounded-bl-2xl overflow-hidden flex items-end">
          <Image src={illustrationUrl} alt="Help illustration" width={170} height={120} style={{ objectFit: 'cover' }} />
        </div>
      ) : null}

      <div className="flex items-start gap-5">
        <div className="flex-1 flex flex-col gap-3 ml-44">
          <h3 className="m-0 whitespace-pre-line text-lg leading-7 text-slate-900 font-semibold">{title}</h3>
          {subtitle ? <p className="m-0 text-sm text-slate-500">{subtitle}</p> : null}
          <div>
            <a href={ctaLink} role="button" aria-label={`${title} — ${ctaLabel}`} className="inline-block bg-black text-white px-9 py-3 rounded-full text-sm min-w-[140px] text-center">
              {ctaLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
