const Header = () => {
  return (
    <>
      <header className="header py-6 mx-10">
        <nav className="flex flex-row items-center justify-between  ">
          <div className="logo basis-2/6 cursor-pointer ">CoffeeStyle</div>
          <ul className="flex basis-3/6 gap-8 items-center font-bold ">
            <li>
              <a href="">Home</a>
            </li>

            <li>
              <a href="">Our Products</a>
            </li>

            <li>
              <a href="">Blog</a>
            </li>

            <li>
              <a href="">About</a>
            </li>

            <li>
              <a href="">Contact</a>
            </li>

            <li>
              <a href="">StyleGuide</a>
            </li>
          </ul>
          <ul>
            <li className="basis-1/6 ">
              <a href="">Cart</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
