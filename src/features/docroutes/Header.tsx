function Header({ data }: { data: string }) {
  return (
    <>
      <div>
        <h1 className="text-2xl font-semibold capitalize">{data}</h1>
      </div>
    </>
  );
}

export default Header;
