import Posts from "@/app/components/Posts";
import ProjectsDisplay from "@/app/components/ProjectsDisplay";
import Link from "next/link"

export default function Home() {
  return (
    <main>
      <div className="home-section">
        <h2>Hola, soy Alessandro.</h2>
        <p>Bienvenido a mi jardin digital.</p>
        <p>
          Soy un estudiante de matematicas.
          Me gusta programar, aprender y escribir sobre ello.
          Me gusta aprender y luego crear.
          Ah, tambien tengo un canal de youtube.
        </p>
      </div>
      <div className="home-section">
        <div className="header-lasts">
          <h3>Ultimos posts</h3>
          <Link href="/blog">Ver todos</Link>
        </div>
        <Posts numOfPosts={5} />
      </div>
      <div className="home-section">
        <div className="header-lasts">
          <h3>Ultimos projects</h3>
          <Link href="/projects">Ver todos</Link>
        </div>
        <ProjectsDisplay numOfProjects={3} />
      </div>
    </main>
  )
}
