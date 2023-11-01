import type {GetStaticPaths, GetStaticProps, InferGetStaticPropsType} from "next";
import type {Schedule as ISchedule, Store} from "../../types";

import {useEffect, useState} from "react";
import Link from "next/link";

import api from "../../api";
import StoreCard from "../../components/StoreCard";

export const getStaticProps: GetStaticProps<
  {
    store: Store;
  },
  {store: string}
> = async ({params}) => {
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

const StorePage = ({store}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [visitors, setVisitors] = useState<number>(0);
  const [schedule, setSchedule] = useState<ISchedule[]>([]);

  useEffect(() => {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    api.store.visitors.fetch(store.id).then(setVisitors);
    api.store.schedule.fetch(store.id, timezone).then(setSchedule);
  }, [store.id]);

  return (
    <div className="flex flex-col gap-6">
      <StoreCard store={store} />
      <span className="font-bold text-white">Visitors: {visitors}</span>;
      <div className="flex flex-col">
        {schedule.map(({date, start, end}, index) => (
          <div key={index} className="flex flex-row">
            <span className="font-bold">{date}</span>:
            <span className="opacity-50">
              {start} - {end}
            </span>
          </div>
        ))}
      </div>
      <nav className="border-t-1 border-primary-500 pt-6 flex gap-6">
        <Link href={`/${store.id}`}>☀ schedule</Link>
        <Link href={`/${store.id}/rating`}>★ rating</Link>
      </nav>
    </div>
  );
};

export default StorePage;
