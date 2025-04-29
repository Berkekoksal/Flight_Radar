import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Map from "./pages/Map";
import List from "./pages/List";
import { useDispatch } from "react-redux";
import { getFlights } from "./redux/actions";
import Modal from "./components/Modal/index";
const App = () => {
  const [detailId, setDetailId] = useState(null);
  const dispatch = useDispatch();
  /* setInterval ile Real Time Fetch Data yaparak canlı vari sağlayabiliriz. Ama bunu sadece Map sayafsında yapmamız lazım. clearInterval ile interval'i kaldırabiliriz. Bu şekilde sayfada performans sağlarız.  */
  useEffect(() => {
    dispatch(getFlights());
  }, []);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Map setDetailId={setDetailId} />} />
        <Route path="/list" element={<List setDetailId={setDetailId} />} />
      </Routes>
      {/*   detailId state'i doluysa ekrana modal bas ve id propu gönder. */}
      {detailId && <Modal id={detailId} close={() => setDetailId(null)} />}
    </BrowserRouter>
  );
};

export default App;
