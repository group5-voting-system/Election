import { Link } from "react-router-dom";

function Header() {
  return (
    <header
      style={{ backgroundColor: "#555", padding: "20px", textAlign: "center" }}
    >
      <nav>
        <Link
          to=""
          style={{ color: "white", margin: "0 15px", textDecoration: "none" }}
        >
          {" "}
          صوت
        </Link>
        <Link
          to=""
          style={{ color: "white", margin: "0 15px", textDecoration: "none" }}
        >
          قدم طلب ترشيح{" "}
        </Link>
        <Link
          to=""
          style={{ color: "white", margin: "0 15px", textDecoration: "none" }}
        >
          {" "}
          خدماتنا
        </Link>
        <Link
          to=""
          style={{ color: "white", margin: "0 15px", textDecoration: "none" }}
        >
          {" "}
          النتائج
        </Link>
        <Link
          to=""
          style={{ color: "white", margin: "0 15px", textDecoration: "none" }}
        >
          تواصل معنا{" "}
        </Link>
      </nav>
    </header>
  );
}

export default Header;
