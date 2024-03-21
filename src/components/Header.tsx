import { Link } from 'react-router-dom';
import Logo from './Logo';

export default function Header() {
  return (
    <header className="flex flex-row">
      <div className="p-3">
        <Link to="/">
          <Logo/>
        </Link>
      </div>
      test test
    </header>
  );
}