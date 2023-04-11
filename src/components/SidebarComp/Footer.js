import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <p>
        &copy; {new Date().getFullYear()} created by{" "}
        <span style={{ borderBottom: "1px solid var(--themeColor)" }}>
          Supratim Chanda
        </span>
      </p>
    </div>
  );
}
