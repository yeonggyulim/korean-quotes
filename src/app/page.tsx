import QuoteCard from "./components/QuoteCard";

const Home: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen text-white bg-gray-800">
      <QuoteCard
        author="author"
        authorProfile="author-profile"
        quote="quote quote quote quote quote quote quote"
      />
    </div>
  );
};

export default Home;
