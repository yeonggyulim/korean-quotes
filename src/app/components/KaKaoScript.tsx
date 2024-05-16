"use client";

import Script from "next/script";

function KakaoScript() {
  const onLoad = () => {
    window.Kakao.init("83c11d4743a9200e053ac589c743140c");
  };

  return (
    <Script
      src="https://developers.kakao.com/sdk/js/kakao.js"
      async
      onLoad={onLoad}
    />
  );
}

export default KakaoScript;
