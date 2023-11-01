import { useEffect, useRef } from 'react';

interface Adfit {
  display: (unit: string) => void;
  destroy: (unit: string) => void;
  refresh: (unit: string) => void;
}

interface Props {
  unit: string;
  width: string;
  height: string;
  disabled: boolean;
}

declare global {
  interface Window {
    adfit?: Adfit;
  }
}

const KakaoAdfit = ({ unit, width, height, disabled }: Props) => {
  const scriptElementWrapper = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!disabled) {
      const script = document.createElement('script');
      script.setAttribute('src', 'https://t1.daumcdn.net/kas/static/ba.min.js');
      script.setAttribute('async', 'true');
      scriptElementWrapper.current?.appendChild(script);

      return () => {
        const globalAdfit = 'adfit' in window ? window.adfit : null;
        if (globalAdfit) globalAdfit.destroy(unit);
      };
    }
  }, []);

  return (
    <div ref={scriptElementWrapper} style={{ width: '100%', height: '100%' }}>
      <ins
        className="kakao_ad_area"
        style={{ display: 'none' }}
        data-ad-unit={unit}
        data-ad-width={width}
        data-ad-height={height}
      />
    </div>
  );
};

export default KakaoAdfit;
