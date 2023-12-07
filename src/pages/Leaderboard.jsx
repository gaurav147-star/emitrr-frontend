import React, { useEffect, useState } from "react";
import LeaderTable from "../components/Leader/LeaderTable";
import Navbar from "../components/Navbar";
import { Container } from "@mui/material";
import Header from "../components/Leader/Header";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProgress } from "../actions/progressAction";
import { fetchUserById } from "../actions/authAction";

const Leaderboard = () => {
  const [lang, setLang] = useState("english");
  const dispatch = useDispatch();
  const progressAll = useSelector((state) => state.progressAll);
  const userDetails = useSelector((state) => state.authByid);
  const data = [
    { rank: 1, name: "John", score: 95, language: "English" },
    { rank: 2, name: "Alice", score: 90, language: "English" },
    // Add more data as needed
  ];
  // useEffect(() => {
  //   dispatch(fetchAllProgress());
  // }, [dispatch]);

  // const fetchDetails = (userId) => {
  //   dispatch(fetchUserById(userId));
  // };

  // const filteredProgress = progressAll
  //   ? progressAll.allProgress.filter((item) => item.record.some((entry) => entry.lang === lang))
  //   : [];

  // // Create the data array
  // const data = filteredProgress.map((item, index) => {
  //   const userId = item.userId;
  //   if (!userDetails || userDetails.id !== userId) {
  //     fetchDetails(userId);
  //   }
  //   return {
  //     rank: index + 1,
  //     name: userDetails && userDetails.id === userId ? userDetails.name : '',
  //     email: userDetails && userDetails.id === userId ? userDetails.email : '',
  //     score: item.record.find((entry) => entry.lang === lang)?.score || 0,
  //     language: lang,
  //   };
  // });

  return (
    <>
      <div
        style={{
          display: "flex",
          minHeight: "100vh",
          justifyContent: "space-between",
        }}
      >
        <Navbar />
        <Container maxWidth="xl" sx={{ margin: "0%" }}>
          <Header setLang={setLang} lang={lang} />
          <LeaderTable data={data} />
        </Container>
      </div>
    </>
  );
};

export default Leaderboard;
