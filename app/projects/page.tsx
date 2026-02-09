import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';

async function getProjects() {
    try {
        const res = await fetch('http://localhost:3000/api/projects', {
            cache: 'no-store'
        });
        if (!res.ok) return [];
        return res.json();
    } catch (error) {
        console.error('Error fetching projects:', error);
        return [];
    }
}

export default async function ProjectsPage() {
    const projects = await getProjects();

    return (
        <div className="min-h-screen bg-white flex flex-col">
            <Navbar />

            <main className="flex-grow pt-24 pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Projects</h1>
                        <p className="text-xl text-gray-600">Explore our portfolio of completed construction projects</p>
                    </div>

                    {projects.length === 0 ? (
                        <div className="text-center py-20">
                            <p className="text-xl text-gray-500">No projects available yet.</p>
                            <p className="text-gray-400 mt-2">Check back soon for our latest work!</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {projects.map((project: any) => (
                                <ProjectCard key={project.id} project={project} />
                            ))}
                        </div>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
}
