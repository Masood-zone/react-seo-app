import SEO from "../components/seo/seo";

export default function About() {
  return (
    <>
      <SEO
        title="About Us"
        description="This is a cool about page"
        type="article"
        name="About Us"
      />
      <div>
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="text-lg">
          InteriorDecor is dedicated to bringing you the best in interior design
          inspiration and ideas.
        </p>
      </div>
    </>
  );
}
