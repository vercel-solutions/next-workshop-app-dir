import type {GetStaticPaths, GetStaticProps, NextPage} from "next";
import type {Store} from "../../types";

import {useEffect, useState} from "react";
import Link from "next/link";

import serverApi from "../../api/server";
import clientApi from "../../api/client";
import StoreCard from "../../components/StoreCard";
import Rating from "../../components/Rating";

type Props = {
  store: Store;
};

export const getStaticProps: GetStaticProps<Props, {store: string}> = async ({params}) => {
  const store = await serverApi.store.fetch(params?.store!);

  return {
    props: {store},
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

const StoreRatingPage: NextPage<Props> = ({store}) => {
  const [visitors, setVisitors] = useState<number>(0);
  const [rating, setRating] = useState<number>(0);

  function handleRatingChange(value: number) {
    clientApi.rating.update(store.id, value).then((value) => {
      setRating(value);
      alert("Thank you for your feedback!");
    });
  }

  useEffect(() => {
    clientApi.visitors.fetch(store.id).then(setVisitors);
    clientApi.rating.fetch(store.id).then(setRating);
  }, [store.id]);

  return (
    <div>
      <StoreCard store={store} />
      <p>Visitors: {visitors}</p>
      <Rating value={rating} onChange={handleRatingChange} />
      <hr />
      <nav>
        <Link href={`/${store.id}`}>schedule</Link>
      </nav>
    </div>
  );
};

export default StoreRatingPage;
