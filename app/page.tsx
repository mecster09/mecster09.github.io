export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Gareth Phillips
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Software Engineering Leader, AI Enthusiast, Tech Geek & Gamer
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="https://github.com/mecster09"
              target="_blank"
              className="bg-foreground text-background px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
            >
              View Projects
            </a>
            <a
              href="mailto:gkp2105@gmail.com"
              className="border border-foreground px-6 py-3 rounded-lg hover:bg-foreground hover:text-background transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-4">Music Master</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              A NextJS web application that enables users to sync playlists between Spotify and YouTube Music. 
              Features OAuth login for both platforms and seamless playlist transfer functionality.
            </p>
            <a
              href="https://github.com/mecster09/music-master"
              target="_blank"
              className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
            >
              Learn more →
            </a>
          </div>

          <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-4">Done-It</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              A responsive NextJS progressive web application designed for efficient task management. 
              Allows users to easily add and manage their tasks with a modern interface.
            </p>
            <a
              href="https://github.com/mecster09/done-it"
              target="_blank"
              className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
            >
              Learn more →
            </a>
          </div>

          <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-4">Godot Game</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              A top-down game created using Godot 4 engine. This project serves as a learning
              experience for game development with the Godot engine.
            </p>
            <a
              href="https://github.com/mecster09/godot-game"
              target="_blank"
              className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
            >
              Learn more →
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            I&apos;m always open to new opportunities and interesting projects.
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/mecster09"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/gkphillips9"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              LinkedIn
            </a>
            <a
              href="mailto:gkp2105@gmail.com"
              className="hover:opacity-80 transition-opacity"
            >
              Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
