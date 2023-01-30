import type {GetStaticPaths, GetStaticProps, NextPage} from "next";
import type {Schedule as ISchedule, Store} from "../../types";

import {useEffect, useState} from "react";
import Link from "next/link";

import api from "../../api";
import StoreCard from "../../components/StoreCard";
import Schedule from "../../components/Schedule";
import Visitors from "../../components/Visitors";
import Stack from "../../components/Stack";

type Props = {
  store: Store;
};

export const getStaticProps: GetStaticProps<Props, {store: string}> = async ({params}) => {
  const store = await api.store.fetch(params?.store!);

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

    api.store.visitors.fetch(store.id).then(setVisitors);
    api.store.schedule.fetch(store.id, timezone).then(setSchedule);
  }, [store.id]);

  return (
    <Stack>
      <StoreCard store={store} />
      <Visitors>{visitors}</Visitors>
      <Schedule schedule={schedule} />
      <nav
        style={{borderTop: "1px solid var(--dark-500)", paddingTop: 24, display: "flex", gap: 24}}
      >
        <Link href={`/${store.id}`}>☀ schedule</Link>
        <Link href={`/${store.id}/rating`}>★ rating</Link>
      </nav>
    </Stack>
  );
};

export default StorePage;
