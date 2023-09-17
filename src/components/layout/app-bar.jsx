export const AppBar = () => {
  return (
    <nav
      style={{
        height: '5vh',
        top: 0,
        left: 0,
        zIndex: 10000,
      }}
      className=" bg-indigo-800 flex px-12 justify-between align-middle"
    >
      <h1 className="h-full text-white pt-2 text-xl font-bold">BAZAR PLAZA</h1>
      <h1 className="h-full text-white pt-2 text-xl font-bold">
        Zobacz lokacje
      </h1>
    </nav>
  );
};
