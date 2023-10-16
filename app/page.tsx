import Image from 'next/image';
import MailchimpForm from './components/MailchimpForm';
import VideoCover from './components/VideoCover';

export default function Home() {
    return (
        <main className="text-body">
            <div className="p-6 lg:p-16">
                <Image
                    alt="Camban Logo"
                    className="block mx-auto mb-20 md:mb-32"
                    height={193}
                    priority
                    src="/camban-tagline.svg"
                    width={750}
                />

                <div className="flex flex-wrap lg:flex-nowrap justify-center items-center mb-8 lg:mb-12">
                    <div className="w-full sm:w-auto lg:pr-8 mb-8 lg:mb-0">
                        <VideoCover
                            backgroundImage="/camban-video-bg.png"
                            playButtonText="Learn more about Camban (0:36)"
                            videoId="4mrhurHm8k"
                        >
                            <Image
                                alt="Camban"
                                className="block mx-auto w-52 lg:w-64"
                                height={56}
                                priority
                                src="/camban-logo.svg"
                                width={328}
                            />
                        </VideoCover>
                    </div>

                    <div className="max-w-md text-xl">
                        <p className="mb-4"><strong className="font-medium">Camban</strong> is an agile project management tool for the masses.</p>

                        <p className="mb-4">It allows you to customize each stage of your workflow, allowing you to focus on the tasks that matter and get more done faster.</p>

                        <p>Camban: the easier way to do.</p>
                    </div>
                </div>
            </div>

            <div className="bg-gradient-to-b from-[#f8f8f8] to-white p-6 lg:p-16">
                <h2 className="mb-8 text-3xl text-center">Join our beta waitlist</h2>
                <p className="max-w-md mx-auto mb-8">Camban is still being developed, but you can register below to receive updates about its development, including when it is ready to launch.</p>
                <MailchimpForm />
            </div>
        </main>
    )
}
