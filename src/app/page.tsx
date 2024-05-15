import QuoteCard from "./components/QuoteCard";

const quote_endpoint = "https://korean-advice-open-api.vercel.app/api/advice";

async function getQuote() {
  const res = await fetch(quote_endpoint, { cache: "no-store" });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const { author, authorProfile, message } = await getQuote();

  return (
    <div
      className="flex items-center justify-center min-h-screen text-white"
      style={{ backgroundColor: "#212121" }}
    >
      <QuoteCard
        author={author}
        authorProfile={authorProfile}
        quote={message}
      />
    </div>
  );
}
