import { useEffect, useState } from 'react';
import Card from "../Card/Card";
import InterfaceAPI from '../../interfaces/ApiInterface';
import Loading from '../Loading/Loading';

export default function Main(): JSX.Element {
  const [api, setApi]= useState([]);
  const [loading, setLoading] = useState(true);

  const requestApi = async () => {
    const url = 'https://mks-challenge-api-frontend.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=DESC';
    const res = await fetch(url);
    const data = await res.json();
    setApi(data.products);
  };

  useEffect(() => {
    requestApi()
  }, [])
  console.log(api);

  (setTimeout(() =>  setLoading(false), 2000))

  return (
    loading ? (<Loading />)
      : (
        <main>
          {api.map((obj: InterfaceAPI) => <Card key={obj.id} products={obj} />)}
        </main >
      )

  )
}
