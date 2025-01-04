import { Link } from "react-router-dom";
import SEO from "../components/seo/seo";

export default function Gallery() {
  const rooms = [
    {
      id: 1,
      name: "Living Room",
      image: "https://via.placeholder.com/300x200?text=Living+Room",
    },
    {
      id: 2,
      name: "Bedroom",
      image: "https://via.placeholder.com/300x200?text=Bedroom",
    },
    {
      id: 3,
      name: "Kitchen",
      image: "https://via.placeholder.com/300x200?text=Kitchen",
    },
    {
      id: 4,
      name: "Bathroom",
      image: "https://via.placeholder.com/300x200?text=Bathroom",
    },
  ];
  return (
    <>
      <SEO
        title="Gallery"
        description="This is a cool gallery page"
        type="article"
        name="Gallery"
      />
      <div>
        <h1 className="text-3xl font-bold mb-4">Our Gallery</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {rooms.map((room) => (
            <Link key={room.id} to={`/rooms/${room.id}`} className="block">
              <img
                src={room.image}
                alt={room.name}
                className="w-full h-48 object-cover rounded-lg"
              />
              <h2 className="mt-2 text-xl font-semibold">{room.name}</h2>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
