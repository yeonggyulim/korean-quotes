import Script from "next/script";

const KaKaoAdFit: React.FC = () => {
  return (
    <>
      <ins
        className="kakao_ad_area"
        style={{ display: "none" }}
        data-ad-unit="DAN-hZE4cFBieuVwJmKU"
        data-ad-width="320"
        data-ad-height="100"
      ></ins>
      <Script
        type="text/javascript"
        src="//t1.daumcdn.net/kas/static/ba.min.js"
        async
      ></Script>
    </>
  );
};

export default KaKaoAdFit;
