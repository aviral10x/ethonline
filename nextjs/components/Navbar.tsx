import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-2xl font-bold">
          NOIR EXPLORER
        </Link>

        <div className="flex">
          <div className="mr-4">
            <Link href="/CompilePage">
              <h2 className="text-xl font-bold">Deploy</h2>
            </Link>
          </div>
          <div className="mr-4">
            <h2 className="text-xl font-bold">Verify</h2>
          </div>
          <div>
            <h2 className="text-xl font-bold">Interact</h2>
          </div>
        </div>

        <div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Connect Wallet
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
