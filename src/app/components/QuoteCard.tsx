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
        >
          다른 명언 보기
        </button>
      </div>
    </div>
  );
};

export default QuoteCard;
