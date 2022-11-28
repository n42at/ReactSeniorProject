import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu "+(menuOpen && "active")}>
      <ul>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#portfolio">Add patient</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#works">Upload a scan</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#testimonials">Update info</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}