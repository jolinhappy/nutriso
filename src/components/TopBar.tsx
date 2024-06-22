import { Link } from 'react-router-dom';

const TopBar = () => {
  return (
    <div className="drop-shadow-lg bg-white px-4 py-3 flex items-center h-[75px]">
      <Link className="" to={{ pathname: '/' }}>
        <img className="h-[50px]" src="SRC/assets/logo.png" alt="" />
      </Link>
    </div>
  );
};

export default TopBar;
