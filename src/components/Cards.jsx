import {
  Card,
  CardBody,
  IconButton,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
export default function Cards() {
  const data = [
    {
      title: "Minari",
      director: "Lee Isaac Chung",
      genre: "Drama",
      summary:
        "A Korean American family moves to an Arkansas farm in search of its own American dream. Amidst the challenges of this new life in the strange and rugged Ozarks, they discover the undeniable resilience of family and what really makes a home.",
      image: "https://i.ebayimg.com/images/g/~poAAOSwK21gUpH9/s-l1600.jpg",
    },
    {
      title: "Burning",
      director: "Lee Chang Dong",
      genre: "Drama, Thriller",
      summary:
        "Jong-soo runs into Hae-mi, a girl who once lived in his neighborhood, and she asks him to watch her cat while she's out of town. When she returns, she introduces him to Ben, a man she met on the trip. Ben proceeds to tell Jong-soo about his hobby.",
      image:
        "https://64.media.tumblr.com/3e957bece1dce7591fe3cf523f108f58/tumblr_pldp3tu2I11tk4n0bo3_1280.png",
    },
    {
      title: "John Wick",
      director: "Chad Stahelski",
      genre: "Action",
      summary:
        "Legendary assassin John Wick (Keanu Reeves) retired from his violent career after marrying the love of his life. Her sudden death leaves John in deep mourning. When sadistic mobster Iosef Tarasov (Alfie Allen) and his thugs steal John's prized car and kill the puppy that was a last gift from his wife, John unleashes the remorseless killing machine within and seeks vengeance. Meanwhile, Iosef's father (Michael Nyqvist) -- John's former colleague -- puts a huge bounty on John's head.",
      image:
        "https://filmartgallery.com/cdn/shop/products/John-Wick-Vintage-Movie-Poster-Original-1-Sheet-27x41.jpg?v=1679634117",
    },
    {
      title: "Oldboy",
      director: "Park Chan-wook",
      genre: "Thriller",
      summary:
        "Dae-Su is an obnoxious drunk bailed from the police station yet again by a friend. However, he's abducted from the street and wakes up in a cell, where he remains for the next 15 years, drugged unconscious when human contact is unavoidable, otherwise with only the television as company. And then, suddenly released, he is invited to track down his jailor with a denouement that is simply stunning.",
      image: "https://i.ebayimg.com/images/g/cE4AAOSwdW9Z77tX/s-l1200.webp",
    },
    {
      title: "Sicario",
      director: "Denis Villeneuve",
      genre: "Crime Thriller",
      summary:
        "After rising through the ranks of her male-dominated profession, idealistic FBI agent Kate Macer (Emily Blunt) receives a top assignment. Recruited by mysterious government official Matt Graver (Josh Brolin), Kate joins a task force for the escalating war against drugs. Led by the intense and shadowy Alejandro (Benicio del Toro), the team travels back-and-forth across the U.S.-Mexican border, using one cartel boss (Bernardo Saracino) to flush out a bigger one (Julio Cesar Cedillo).",
      image: "https://m.media-amazon.com/images/I/A1GdxURr+uL.jpg",
    },
    {
      title: "Parasite",
      director: "Bong Joon Ho",
      genre: "Crime Thriller",
      summary:
        "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
      image: "https://i.ebayimg.com/images/g/hBIAAOSwrpRd2XoM/s-l1600.jpg",
    },
    {
      title: "Snowpiercer",
      director: "Bong Joon Ho",
      genre: "Sci-fi",
      summary:
        "Survivors of Earth's second ice age live out their days on a luxury train that ploughs through snow and ice. The train's poorest residents, who live in the squalid caboose, plan to improve their lot by taking over the engine room.",
      image:
        "https://m.media-amazon.com/images/M/MV5BMTQ3NzA1MTY3MV5BMl5BanBnXkFtZTgwNzE2Mzg5MTE@._V1_.jpg",
    },
  ];

  const [favoriteStates, setFavoriteStates] = useState(
    Array(data.length).fill(false),
  );
  const [openStates, setOpenStates] = useState(Array(data.length).fill(false));

  const handleIsFavorite = (index) => {
    setFavoriteStates((prevStates) =>
      prevStates.map((isFav, i) => (i === index ? !isFav : isFav)),
    );
  };
  const handleOpen = (index, shouldOpen) => {
    setOpenStates((prevOpenStates) =>
      prevOpenStates.map((isOpen, i) => (i === index ? shouldOpen : isOpen)),
    );
  };

  return (
    <div className="max-w-[1640px] gap-2 mx-auto flex pb-10 overflow-x-auto no-scrollbar">
      {data.map(({ title, director, genre, summary, image }, index) => {
        return (
          <div key={index} className="p-4">
            <Card className="w-80 p2 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] bg-white">
              <h3 className="font-semibold text-black text-md pt-5 pl-[22px]">
                {title}
              </h3>
              <h3 className="font-light text-black text-sm pl-[22px]">
                Directed by:{" "}
                <span className="font-bold text-indigo-500">{director}</span>
              </h3>
              <CardBody>
                <img
                  src={image}
                  className="h-[25rem] w-full object-cover object-center"
                  alt="Project Image"
                  aria-label="Project Image"
                />
              </CardBody>
              <div className="flex items-center justify-between px-6 pb-3">
                <div className="flex items-center">
                  <Tooltip
                    position="top"
                    content={
                      <Typography
                        className="font-medium dark:text-white"
                        color="blue-gray"
                      >
                        {genre}
                      </Typography>
                    }
                    animate={{
                      mount: { scale: 1, y: 0 },
                      unmount: { scale: 0, y: 25 },
                    }}
                    className="border border-blue-gray-50 dark:border-[#505050] bg-white dark:bg-[#505050] px-3 py-2 shadow-xl shadow-black/10"
                  >
                    <h3 className="cursor-pointer font-bold text-indigo-500 text-sm">
                      Genre
                    </h3>
                  </Tooltip>
                </div>

                <button
                  className="font-bold text-indigo-500 text-sm"
                  onClick={() => handleOpen(index, true)}
                >
                  Summary
                </button>
                <IconButton
                  variant="text"
                  size="sm"
                  color={favoriteStates[index] ? "red" : "blue-gray"} // Use favoriteStates
                  onClick={() => handleIsFavorite(index)} // Pass index                onClick={handleIsFavorite}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                  </svg>
                </IconButton>
              </div>
            </Card>
            <Dialog
              size="md"
              className="p-5"
              open={openStates[index]}
              handler={() =>
                setOpenStates((prevOpenStates) =>
                  prevOpenStates.map((isOpen, i) =>
                    i === index ? !isOpen : isOpen,
                  ),
                )
              }
              animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0.9, y: -100 },
              }}
            >
              <div className="flex justify-between">
                <DialogHeader className="flex justify-between" value={title}>
                  {title}
                </DialogHeader>
                <Button variant="text" onClick={() => handleOpen(index, false)}>
                  <span className="text-lg text-indigo-500">X</span>
                </Button>
              </div>
              <DialogBody value={summary}>{summary}</DialogBody>
              <DialogFooter></DialogFooter>
            </Dialog>
          </div>
        );
      })}
    </div>
  );
}
