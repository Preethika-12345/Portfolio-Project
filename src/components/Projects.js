import railway from '../assets/railway.jpeg';
import autocorrect from '../assets/autocorrect.jpeg';
import dece from '../assets/dece.jpeg';
import delivery from '../assets/delivery.jpeg';
import pet from '../assets/pet.jpeg';
import blind from '../assets/blind stick.jpeg';

export default function Projects() {

    const config = {
        projects : [
            {
                image: dece,
                description: 'A cloud network with secure, blockchain-based data nodes.',
                link: 'https://github.com/jvlcode/jvlcart'
            },
            {
                image: autocorrect,
                description: 'A smart typing interface showing real-time word suggestions.',
                link: 'https://github.com/jvlcode/food'
            },
            {
                image: railway,
                description: 'A mobile train route planner with real-time tracking.',
                link: 'https://github.com/jvlcode/blog'
            },
            {
                image: delivery,
                description: 'A colorful food delivery app with snack listings and group branding.',
                link: 'https://github.com/jvlcode/blog'
            },
            {
                image: pet,
                description: 'A pet care dashboard with schedules and health tracking.',
                link: 'https://github.com/jvlcode/blog'
            },
            {
                image: blind,
                description: 'A sensor-based stick aiding visually impaired navigation.',
                link: 'https://github.com/jvlcode/blog'
            }
        ]
    }

    return <section id='projects' className="flex  flex-col py-20 px-5 justify-center bg-primary text-white">
        <div className="w-full">
            <div className="flex flex-col px-10 py-5">
                <h1 className="text-4xl border-b-4 border-secondary mb-5 w-[150px] font-bold">Projects</h1>
                <p>These are some of my best projects. I have built these with Python, AI. Check them out.</p>
            </div>
        </div>
        <div className="w-full">
            <div className='flex flex-col md:flex-row px-10 gap-5'>
                {config.projects.map((project) => (
                     <div className='relative'>
                        <img className='h-[200px] w-[500px]' src={project.image}/>
                        <div className='project-desc'>
                            <p className='text-center px-5 py-5'>{project.description}</p>
                            <div className='flex justify-center'>
                               
                            </div>
                        </div>
                    </div>
                ))}
               
               
            </div>
        </div>
    </section>
}