import React, { useContext, useEffect, useState } from "react";
import { MovieContext } from "../../context/movie";
import { Box } from "./styled";
export const Movie = () => {
  const [state, setState] = useContext(MovieContext);
//   const [datas, setDatas] = useState([]);
//   useEffect(() => {
//     fetch("http://fakeapi.jsonparseronline.com/posts")
//       .then((res) => res.json())
//       .then((red) => setDatas(red));
//     // console.log(red);
//   }, []);
//   console.log(datas, "skls");
  return (
    <Box>
      {state.map(({ id ,src, title, user, view })=>{
    //   {datas.map(({ id, imageUrl, title, hits }) => {
        // console.log(imageUrl, "sdsdsd");
        return (
          <Box.K key={id}>
            <Box.Img src={src} ></Box.Img>
            {/* <img src="https://i.picsum.photos/id/348/600/300.jpg" alt="mmmmm" /> */}
            <Box.D>
              <Box.I src={user.img} />
              <div>
                <Box.T>{title}</Box.T>
                <Box.N>{user.name} {user.surname}</Box.N>
                {/* <Box.N>wsdsdsdsdsdsdsdsdds</Box.N> */}
                <Box.V>{view}</Box.V>
              </div>
            </Box.D>
          </Box.K>
        );
      })}
    </Box>
  );
};
export default Movie;
