export const HomeSection = () =>{
    return(
          <section className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden">
        <video
          autoPlay
          muted
          loop
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/15794-266811402_medium.mp4" type="video/mp4" />
        </video>

        <div className="absolute top-0 left-0 w-full h-full bg-black/60"></div>

        {/* Navbar */}
        <div className="absolute top-0 w-full flex justify-between items-center p-4 z-10">
          <img src="/logo.png" className="w-12 h-12 rounded-full" />

          <div className="flex gap-8 text-sm">
            <a href="#">Home</a>
            <a href="#about">About</a>
            <a href="#">Articles</a>
          </div>

          <a className="px-5 py-1 bg-blue-500 rounded-full">Contact</a>
        </div>

        {/* Hero Text */}
        <h1 className="text-8xl font-bold z-10">
          <span className="text-blue-500">K</span>UPPIYA
        </h1>

        <p className="text-zinc-200 text-sm mt-2 z-10 text-center">
          Your daily bite of facts, tech rumors & hidden stories.
        </p>

        <a className="mt-5 border-2 border-blue-500 px-10 py-2 rounded-full z-10 hover:bg-blue-500 transition">
          Discover Kuppiya
        </a>
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
      </section>
    )
}