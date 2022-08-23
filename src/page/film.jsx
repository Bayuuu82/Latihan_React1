import "./page.css";
import docs from "../assets/filmdoctorstrange.jpg";
import cekts from "../assets/filmcektokosebelah.jpg";
import cicipan from "../assets/filmcicipan.jpg";
import limit from "../assets/filmlimitless.jpg";

function Filmfavorite() {
  return (
    <>
      <div className="tengah">
        <p>Ini beberapa film Favorite saya</p>
        <div className="containerfilm">
          <div className="cardfilm">
            <img src={docs} className="fotofilm" alt="Docter Strange" />
            <p>Docter Strange</p>
          </div>
          <div className="cardfilm">
            <img src={cekts} className="fotofilm" alt="" />
            <p>Cek Toko Sebelah</p>
          </div>
          <div className="cardfilm">
            <img src={cicipan} className="fotofilm" alt="" />
            <p>Cicipan</p>
          </div>
          <div className="cardfilm">
            <img src={limit} className="fotofilm" alt="" />
            <p>Limitless</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Filmfavorite;
