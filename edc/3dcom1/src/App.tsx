import { useEffect } from "react"
import { SplineSceneBasic } from "@/components/ui/demo"

function App() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      window.parent.postMessage({
        type: 'iframe_mousemove',
        clientX: e.clientX,
        clientY: e.clientY
      }, '*');
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <main className="w-screen h-screen bg-black overflow-hidden">
      <SplineSceneBasic />
    </main>
  )
}

export default App
