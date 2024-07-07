/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/Cky5Y8Ww5qb
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

import Link from "next/link"
import { Progress } from "@/components/ui/progress"
import { TrophyIcon, PinIcon, PowerIcon, BoltIcon, TrophyIcon as MedalIcon, StarIcon } from "@/components/shared/icons"
import Navbar from "@/components/portfolio/navbar"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { getUserData } from "@/services/user-service"

export default async function Portfolio() {
  const user = await getUserData();

  return (
    <div className="flex sm:ms-14 flex-col min-h-[100dvh]">
      <Navbar />
      <main className="flex-1">
        <section id="home" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-[#1e3a8a] to-[#0284c7]">
          <div className="container-fluid px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              {/* <img
                src="/placeholder.svg"
                width="550"
                height="550"
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              /> */}
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">{user?.name}</h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    {user?.title}
                  </p>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  {user?.summary}
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#projects"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    View Projects
                  </Link>
                  <Link
                    href="#contact"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Get in Touch
                  </Link>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Dashboard</h3>
                  <p className="text-muted-foreground">
                    Explore insightful analytics and data visualizations showcasing my expertise and impact in the AI
                    industry.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Skills</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center justify-between">
                          <span>Natural Language Processing</span>
                          <Progress value={90} aria-label="90% proficiency" />
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Computer Vision</span>
                          <Progress value={85} aria-label="85% proficiency" />
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Predictive Analytics</span>
                          <Progress value={92} aria-label="92% proficiency" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Analytics</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center justify-between">
                          <span>Projects Completed</span>
                          <span>32</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Clients Served</span>
                          <span>18</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Awards Received</span>
                          <span>5</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container-fluid px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div id="projects-id" className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Featured Projects</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Innovative Solutions</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore a selection of my cutting-edge AI and machine learning projects that showcase my expertise and
                  innovative approach.
                </p>
              </div>
            </div>
            {/* className="mx-auto grid gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" */}
            <div className="px-7">
            <Carousel opts={{ align: "start" }} className="w-full">
            <CarouselContent>
              {user.projects && user.projects.map((project: any, index: number) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                   <Card className="flex flex-col justify-between hover:scale-105">
                   <CardHeader>
                     <CardTitle>{project.name}</CardTitle>
                     <CardDescription>
                       {project.description.join("\n")}
                     </CardDescription>
                   </CardHeader>
                   <CardContent>
                     <div className="grid gap-2">
                       <div className="flex items-center gap-2">
                         <PinIcon className="h-5 w-5 text-muted-foreground" />
                         <span className="text-muted-foreground"><a href={project?.link}>Link</a></span>
                       </div>
                     </div>
                   </CardContent>
                 </Card>
                 </div>
                 </CarouselItem>
              ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
              </Carousel>
            {/* <Card className="flex flex-col justify-between">
                <CardHeader>
                  <CardTitle>Predictive Maintenance System</CardTitle>
                  <CardDescription>
                    Developed a machine learning-based predictive maintenance system to optimize equipment uptime and
                    reduce maintenance costs for a leading manufacturing company.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2">
                    <div className="flex items-center gap-2">
                      <PinIcon className="h-5 w-5 text-muted-foreground" />
                      <span className="text-muted-foreground">Predictive Modeling</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <PowerIcon className="h-5 w-5 text-muted-foreground" />
                      <span className="text-muted-foreground">Sensor Data Analysis</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BoltIcon className="h-5 w-5 text-muted-foreground" />
                      <span className="text-muted-foreground">Anomaly Detection</span>
                    </div>
                  </div>
                </CardContent>
              </Card> */}
          </div>
          </div>
        </section>
        <section id="achievements" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container-fluid px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div id="achievements-id" className="inline-block rounded-lg px-3 py-1 text-sm bg-background">Achievements</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Recognized for Excellence</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I have been honored with various awards and recognitions for my contributions to the field of AI and
                  machine learning.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center justify-center space-y-4">
                <TrophyIcon className="w-12 h-12 text-primary" />
                <div className="space-y-2 text-center">
                  <h3 className="text-2xl font-bold">Best Paper Award</h3>
                  <p className="text-muted-foreground">
                    Recognized for my groundbreaking research at the prestigious AI Conference.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4">
                <MedalIcon className="w-12 h-12 text-primary" />
                <div className="space-y-2 text-center">
                  <h3 className="text-2xl font-bold">Top Innovator</h3>
                  <p className="text-muted-foreground">
                    Awarded for my innovative contributions to the field of deep learning.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4">
                <StarIcon className="w-12 h-12 text-primary" />
                <div className="space-y-2 text-center">
                  <h3 className="text-2xl font-bold">Thought Leader</h3>
                  <p className="text-muted-foreground">Recognized as a leading expert in the AI community.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="research" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container-fluid px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div id="research-id" className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Research</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Advancing the Frontiers of AI</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I am actively engaged in cutting-edge research to push the boundaries of what's possible with
                  artificial intelligence.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <img
                src="/placeholder.svg"
                width="550"
                height="310"
                alt="Research Image"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Reinforcement Learning</h3>
                  <p className="text-muted-foreground">
                    Exploring novel algorithms and techniques to enable autonomous decision-making in complex
                    environments.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Generative AI</h3>
                  <p className="text-muted-foreground">
                    Developing advanced models for generating realistic images, text, and other media content.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Ethical AI</h3>
                  <p className="text-muted-foreground">
                    Exploring ways to ensure AI systems are designed and deployed responsibly, with a focus on fairness,
                    transparency, and accountability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="blogs" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container-fluid px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div id="blogs-id" className="inline-block rounded-lg bg-background px-3 py-1 text-sm">Blogs</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Sharing Knowledge and Insights</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Check out my latest blog posts where I share my thoughts, experiences, and learnings in the field of
                  AI and machine learning.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-start justify-between space-y-4 rounded-lg border bg-background p-6 shadow-sm">
                <div>
                  <h3 className="text-xl font-bold">Unleashing the Power of Generative AI</h3>
                  <p className="text-muted-foreground">
                    Explore the latest advancements in generative AI and how they are transforming various industries.
                  </p>
                </div>
                <Link
                  href="#"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Read More
                </Link>
              </div>
              <div className="flex flex-col items-start justify-between space-y-4 rounded-lg border bg-background p-6 shadow-sm">
                <div>
                  <h3 className="text-xl font-bold">Ethical Considerations in AI Development</h3>
                  <p className="text-muted-foreground">
                    Dive into the importance of ethical AI and how to ensure responsible development and deployment.
                  </p>
                </div>
                <Link
                  href="#"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Read More
                </Link>
              </div>
              <div className="flex flex-col items-start justify-between space-y-4 rounded-lg border bg-background p-6 shadow-sm">
                <div>
                  <h3 className="text-xl font-bold">Revolutionizing Healthcare with AI</h3>
                  <p className="text-muted-foreground">
                    Explore how AI is transforming the healthcare industry and improving patient outcomes.
                  </p>
                </div>
                <Link
                  href="#"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container-fluid px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
            <div id="contact-id" className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Contact</div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Get in Touch</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
                Have a project in mind or want to learn more about my work? Fill out the form below and I'll get back to
                you as soon as possible.
              </p>
            </div>
          </div>
          <div className="mx-auto w-full max-w-md space-y-2 py-12">
            <form className="grid gap-4">
              <input type="text" placeholder="Name" className="w-full" />
              <input type="email" placeholder="Email" className="w-full" />
              <textarea placeholder="Message" className="w-full" />
              <button type="submit" className="w-full">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
      </main>
    </div>
  )
}