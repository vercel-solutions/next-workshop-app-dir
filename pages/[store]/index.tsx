import type {GetStaticPaths, GetStaticProps, NextPage} from "next";
import type {Schedule as ISchedule, Store} from "../../types";

import {useEffect, useState} from "react";
import Link from "next/link";

import serverApi from "../../api/server";
import clientApi from "../../api/client";
import StoreCard from "../../components/StoreCard";
import Schedule from "../../components/Schedule";

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

const StorePage: NextPage<Props> = ({store}) => {
  const [visitors, setVisitors] = useState<number>(0);
  const [schedule, setSchedule] = useState<ISchedule[]>([]);

  useEffect(() => {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    clientApi.visitors.fetch(store.id).then(setVisitors);
    clientApi.schedule.fetch(store.id, timezone).then(setSchedule);
  }, [store.id]);

  return (
    <div>
      <StoreCard store={store} />
      <p>Visitors: {visitors}</p>
      <Schedule schedule={schedule} />
      <hr />
      <nav>
        <Link href={`/${store.id}/rating`}>rating</Link>
      </nav>
    </div>
  );
};

export default StorePage;
