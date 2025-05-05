import "@splidejs/react-splide/css";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";

const Gallery = ({ data }) => {
  return (
    <div className="slider">
      {data.large.length > 0 ? (
        <Splide>
          {data?.large?.map((item) => (
            <SplideSlide>
              <img src={item.src} alt="plane" />
            </SplideSlide>
          ))}
        </Splide>
      ) : (
        <div className="no-image">
          <p>Fotoğraf İçeriği Bulunmamaktadır.</p>
        </div>
      )}
    </div>
  );
};

export default Gallery;