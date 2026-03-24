import ModelViewerComponent from '@/components/ModelViewer'

export default function Home() {
  return (
    <main className="flex-1 flex flex-col md:flex-row items-center justify-center p-8 md:p-16 gap-8 md:gap-16 max-w-7xl mx-auto w-full z-10">

      {/* Background Glows */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[radial-gradient(circle,rgba(124,58,237,0.4),transparent_70%)] blur-[80px] -z-10" />
      <div className="absolute -bottom-36 -right-24 w-[32rem] h-[32rem] bg-[radial-gradient(circle,rgba(14,165,233,0.3),transparent_70%)] blur-[100px] -z-10" />

      {/* Header */}
      <header className="absolute top-0 left-0 w-full p-8 md:px-16 flex justify-between items-center z-20">
        <div className="font-bold text-2xl tracking-wide bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
          Vision3D
        </div>
      </header>

      {/* Text Section */}
      <div className="flex-1 flex flex-col gap-6 w-full mt-24 md:mt-0 z-20">
        <div className="self-start bg-white/10 border border-white/20 px-4 py-2 rounded-full text-sm tracking-wider uppercase backdrop-blur-md">
          Next-Gen Web Experience
        </div>
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Explore Our <br />
          <span className="bg-gradient-to-r from-purple-400 to-sky-400 bg-clip-text text-transparent">
            Interactive Robot
          </span>
        </h1>
        <p className="text-lg text-slate-400 leading-relaxed max-w-lg">
          Immerse yourself in high-fidelity 3D rendering right in your browser. Drag to rotate, scroll to zoom, and experience seamless web integration with Next.js.
        </p>
      </div>

      {/* 3D Model Section */}
      <div className="flex-1 relative flex justify-center items-center w-full h-[400px] md:h-[600px] bg-white/[0.03] rounded-[2rem] border border-white/5 backdrop-blur-xl shadow-2xl overflow-hidden mt-8 md:mt-0 z-20">
        <ModelViewerComponent />
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-black/50 px-6 py-2 rounded-full text-sm text-slate-300 border border-white/10 backdrop-blur-sm pointer-events-none">
          Interact with the model
        </div>
      </div>
    </main>
  )
}
