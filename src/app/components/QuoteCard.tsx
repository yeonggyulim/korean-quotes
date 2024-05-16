"use client";

interface QuoteCardProps {
  author: string;
  authorProfile: string;
  quote: string;
}

const QuoteCard: React.FC<QuoteCardProps> = ({
  author,
  authorProfile,
  quote,
}) => {
  const handleButtonClick = () => {
    window.location.reload();
  };

  const handleShearKakao = () => {
    const { Kakao, location } = window;
    Kakao.Share.sendScrap({
      requestUrl: location.href,
    });
  };

  return (
    <div className="p-6">
      <p className="text-lg font-medium mb-4 text-center">{quote}</p>
      <div className="flex flex-col items-center justify-center">
        <div className="text-center">
          <p className="font-semibold">{`- ${author} -`}</p>
          <p className="text-sm">{authorProfile}</p>
        </div>
        <button
          className="text-white font-bold py-2 px-4 rounded inline-block mt-4"
          style={{ backgroundColor: "#676767" }}
          onClick={handleButtonClick}
        >
          다른 명언 보기
        </button>
        <button
          className="text-white font-bold py-2 px-4 rounded inline-block mt-4"
          style={{ backgroundColor: "#676767" }}
          onClick={handleShearKakao}
        >
          카카오톡 공유하기
        </button>
      </div>
    </div>
  );
};

export default QuoteCard;
