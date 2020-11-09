import { useEffect, useState } from "react";
import {getTVShow} from '../api/tmdb-api'


const useTv = id => {
  const [tv, setTv] = useState(null);
  useEffect(() => {
  getTVShow(id).then(tv => {
    setTv(tv);
    });}, [id]);
  return [tv, setTv];
};
export default useTv