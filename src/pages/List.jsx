import { useDispatch, useSelector } from "react-redux";

import Loader from "../components/Loader";
import ReactPaginate from "react-paginate";
import { useState } from "react";

const List = ({ setDetailId }) => {
  const { flights, isLoading, error } = useSelector((store) => store.flight);
  const dispatch = useDispatch();
  //* Görüntülenecek ilk elemanın dizideki sırası.
  const [start, setStart] = useState();
  //* Sayfa başına gösterilecek elamanın sayısı.
  const perPage = 10;
  //* Görüntülenecek son elemanın dizideki sırası.
  const end = start + perPage;

  //* slice ile başlangıç ve bitiş arasını keseceğiz.(alacağız)
  const currentFlights = flights.slice(start, end);
  //* Toplam sayfa sayısını hesaplayacağız.
  const pageCount = Math.ceil(flights.length / perPage);
  //* Sayfa değiştiğinde state'i güncelleyeceğiz.
  const handleChange = (event) => {
    console.log(event);
    setStart(event.selected * perPage);
  };
  if (isLoading)
    return (
      <div className="m-5">
        <Loader />
      </div>
    );
  if (error)
    return (
      <div>
        <Error info={error} />
      </div>
    );
  return (
    <div className="p-3 p-md-4">
      <table className="table table-dark table-striped table-hover table-responsive mt-1">
        <thead>
          <tr>
            <th>id</th>
            <th>Kuyruk Kodu</th>
            <th>Enlem</th>
            <th>Boylam</th>
            <th>Derece</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {currentFlights.map((flight) => (
            <tr>
              <td>{flight.id}</td>
              <td>{flight.code}</td>
              <td>{flight.lat}</td>
              <td>{flight.lng}</td>
              <td>{flight.deg}</td>
              <td>
                <button onClick={() => setDetailId(flight.id)}>Detail</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ReactPaginate
        className="pagination"
        breakLabel="..."
        nextLabel="ileri >"
        onPageChange={handleChange}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< geri"
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default List;
