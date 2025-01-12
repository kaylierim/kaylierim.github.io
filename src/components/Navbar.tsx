function Navbar() {
  return (
    <div className="flex justify-between text-3xl font-vanilla-ravioli text-[#2F4156] mb-28">
      <h1>Kaylie Rim</h1>
      <div className="flex gap-6">
        <a href="/">Home</a>
        <a href="/library">Library</a>
      </div>
    </div>
  );
}

export default Navbar;
