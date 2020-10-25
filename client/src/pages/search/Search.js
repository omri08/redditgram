import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { searchSubs } from "../../utils/reddit";
import Spin from "../../components/Spin/Spin";
import SearchResult from "../../components/searchResult/SearchResult";
import styles from "./Search.module.scss";

export default function Search() {
  const { query } = useParams();
  const [subs, setSubs] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function loadSubs() {
      setLoading(true);
      const data = await searchSubs(query);
      setSubs(data.data.children);
      setLoading(false);
    }
    loadSubs();
  }, [query]);

  if (loading) return <Spin tip="Searching" />;

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {subs.map((sub) => (
          <SearchResult key={sub.id} sub={sub.data} />
        ))}
      </div>
    </div>
  );
}
