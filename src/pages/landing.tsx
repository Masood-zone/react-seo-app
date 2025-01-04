import SEO from "../components/seo/seo";

export default function LandingPage() {
  return (
    <>
      <SEO
        title="Interior Decor - Home"
        description="Welcome to InteriorDecor, your source for beautiful interior design inspiration"
        type="website"
        name="Cool Landing Page"
      />
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to InteriorDecor</h1>
        <p className="text-xl">
          Discover beautiful interior design ideas for your home.
        </p>
      </div>
    </>
  );
}
