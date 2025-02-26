export default function Navbar() {
    return (
      <nav className="bg-orange-500 p-2 m-2 max-h-6  " style={{"line-height":"2pt"}} >
        <div className="flex items-center gap-2">
          <div className="bg-white p-1">
            <span className="font-bold text-black">Y</span>
          </div>
          <div className="flex gap-4 items-center">
            <span className="font-bold text-black">Hacker News</span>
            <a href="#" className="text-black hover:underline">new</a>
            <span className="text-black">|</span>
            <a href="#" className="text-black hover:underline">past</a>
            <span className="text-black">|</span>
            <a href="#" className="text-black hover:underline">comments</a>
            <span className="text-black">|</span>
            <a href="#" className="text-black hover:underline">ask</a>
            <span className="text-black">|</span>
            <a href="#" className="text-black hover:underline">show</a>
            <span className="text-black">|</span>
            <a href="#" className="text-black hover:underline">jobs</a>
            <span className="text-black">|</span>
            <a href="#" className="text-black hover:underline">submit</a>
          </div>
        </div>
      </nav>
    );
  }