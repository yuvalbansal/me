import data from '../data.json';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <p>{data.footer.text}</p>
    </footer>
  );
}
