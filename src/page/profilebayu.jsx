import "./page.css";
import fotoprofile from "../assets/fotoprofile.jpg";

function Profile() {
  return (
    <>
      <div className="tengah">
        <img src={fotoprofile} className="fotoprofile" alt="fotobayu" />
        <p>Hello saya Bayu Fajrin</p>
      </div>
    </>
  );
}

export default Profile;
