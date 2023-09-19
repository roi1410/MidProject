import "../css/Sidebar.css";

const Sidebar = () => {
  return (
    <>
      <header className="text-center h-48 bg-white">header</header>

      <div className="flex justify-center bg-gray-200">
        <div className="w-2/3 bg-gray-100">Main</div>

        <aside className="w-1/3">
          <div className="sticky top-0 bg-yellow-200 h-48">widget</div>
        </aside>
      </div>

      <footer className="text-center h-48 bg-white">footer</footer>
    </>
  );
};

export default Sidebar;
