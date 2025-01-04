import { useParams } from "react-router-dom";
import SEO from "../components/seo/seo";

function Room() {
  const { id } = useParams<{ id: string }>();
  const rooms = {
    1: {
      name: "Living Room",
      description: "A cozy and stylish living room design.",
    },
    2: {
      name: "Bedroom",
      description: "A peaceful and relaxing bedroom setup.",
    },
    3: {
      name: "Kitchen",
      description: "A modern and functional kitchen layout.",
    },
    4: {
      name: "Bathroom",
      description: "An elegant and spa-like bathroom design.",
    },
  };

  const room = rooms[id] || {
    name: "Unknown Room",
    description: "Room not found.",
  };

  return (
    <>
      <SEO
        title={`${room.name} - InteriorDecor`}
        description={room.description}
        type="article"
        name={room.name}
      />
      <div>
        <h1 className="text-3xl font-bold mb-4">{room.name}</h1>
        <p className="text-lg">{room.description}</p>
        <img
          src={`https://via.placeholder.com/800x400?text=${room.name.replace(
            " ",
            "+"
          )}`}
          alt={room.name}
          className="mt-4 w-full h-64 object-cover rounded-lg"
        />
      </div>
    </>
  );
}

export default Room;
