import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api";

export const getFlights = createAsyncThunk(
  "flights/flight/getFlights",
  async () => {
    //* Parametreleri belirliyoruz.
    const params = {
      bl_lat: "34.558699",
      bl_lng: "25.548568",
      tr_lat: "43.51715",
      tr_lng: "45.287815",
      //* Hızı belirliyoruz.Bu şekilde haraket eden uçuşları görebiliriz.
      /* speed:"1,99999" */
    };
    //* API isteğini atıyoruz.
    const res = await api.get("/flights/list-in-boundary", {
      params,
    });
    //* API'dan gelen veri dizi içerisinde dizi olduğundan projede kullanımı daha kolay olsun diye dizinin içindeki dizileri nesneye çevireceğiz.
    const formatted = res.data.aircraft.map((i) => ({
      id: i[0],
      code: i[1],
      lat: i[2],
      lng: i[3],
      deg: i[4],
    }));
    //* Slice'a aktarılacak payload'ı belirliyoruz.
    return formatted;
  }
);

export const getDetails = createAsyncThunk("detail/getDetails", async (id) => {
  const params = {
    flight: id,
  };
  const res = await api.get("/flights/detail", { params });
  return res.data;
});
