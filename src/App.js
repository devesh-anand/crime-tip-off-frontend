import './App.css';
import mainImg from './assets/main-img.svg';

function App() {
  return (
    <div className="App">
      <div className="h-screen">

      <nav class="
        relative
        w-full
        flex flex-wrap
        items-center
        justify-between
        py-4
        bg-white
        text-gray-500
        hover:text-black
        focus:text-gray-700
        shadow-lg
        navbar navbar-expand-lg navbar-light
        ">
<div class="container-fluid w-full flex flex-wrap items-center justify-between px-6">
  <h1 className="pl-6 text-xl font-semibold md:pl-16">Tip-Off</h1>
<button class="
    navbar-toggler
    text-gray-500
    border-0
    hover:shadow-none hover:no-underline
    py-2
    px-2.5
    bg-transparent
    focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline
  " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars"
  class="w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
  <path fill="currentColor"
    d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z">
  </path>
</svg>
</button>
<div class="collapse navbar-collapse flex-grow items-center px-8" id="navbarSupportedContent">
<ul class="navbar-nav flex flex-col pl-0 list-style-none ml-auto">
  <li class="nav-item px-2">
    <a class="nav-link active" aria-current="page" href="#">Home</a>
  </li>
  <li class="nav-item pr-2">
    <a class="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0" href="#">Features</a>
  </li>
  <li class="nav-item pr-2">
    <a class="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0" href="#">Pricing</a>
  </li>
  <li class="nav-item pr-2">
    <a class="nav-link disabled text-gray-300 p-0"
      >Disabled</a
    >
  </li>
</ul>
</div>
</div>
      </nav>

    <div className="flex flex-col md:flex-row px-16 py-16 h-full">

        <div className="flex flex-col justify-center basis-1/2 pb-16 lg:pl-16">
              <h1 className="text-4xl lg:text-5xl leading-normal lg:leading-snug font-normal">
                Tip-off crime related information <br/>
                <span className="text-orange-400 font-bold italic">Safely</span> <br/>
                <span className="font-semibold">and</span> <br/>
                <span className="italic">Without</span> <span className="text-orange-400 font-bold italic">fear</span>
              </h1>

              <button type="button" class="px-8 py-3 w-40 my-8 bg-orange-400 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-orange-500 hover:shadow-lg focus:bg-orange-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-500 active:shadow-lg transition duration-150 ease-in-out">SHare Info</button>
        </div>
          
        <div className="flex basis-1/2 justify-center items-center">
          <img src={mainImg} />
        </div>
    </div>  
</div>

      {/* <h1 className="text-xl font-bold">Hello World</h1> */}
    </div>
  );
}

export default App;
