import Link from "next/link"
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"
import { BrainIcon, BriefcaseIcon, TrophyIcon, MicroscopeIcon, BookOpenIcon, FileTextIcon, MailIcon, PinIcon, PowerIcon, BoltIcon, TrophyIcon as MedalIcon, StarIcon } from "@/components/shared/icons"

export default function Navbar() {
    return (
        <header className="fixed bottom-0 sm:inset-y-0 left-0 z-10 w-full sm:w-14 h-fit sm:h-full flex-row md:flex-col border-r bg-background">
        <nav className="mt-auto flex sm:flex-col items-center gap-4 sm:py-5 justify-evenly">
          <TooltipProvider>
            <Link
              href="#"
              className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
              prefetch={false}
            >
              <BrainIcon className="h-4 w-4 transition-all group-hover:scale-110" />
              <span className="sr-only">Saurabh Zinjad Portfolio</span>
            </Link>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#projects"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                  prefetch={false}
                >
                  <BriefcaseIcon className="h-5 w-5" />
                  <span className="sr-only">Projects</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Projects</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#achievements"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                  prefetch={false}
                >
                  <TrophyIcon className="h-5 w-5" />
                  <span className="sr-only">Achievements</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Achievements</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#research"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                  prefetch={false}
                >
                  <MicroscopeIcon className="h-5 w-5" />
                  <span className="sr-only">Research</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Research</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#blogs"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                  prefetch={false}
                >
                  <BookOpenIcon className="h-5 w-5" />
                  <span className="sr-only">Blogs</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12">
                  <div className="flex flex-col justify-center space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold">Blogs</h3>
                      <p className="text-muted-foreground">
                        Check out my latest blog posts where I share my thoughts, experiences, and learnings in the
                        field of AI and machine learning.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold">Analytics</h3>
                      <p className="text-muted-foreground">
                        Explore insightful analytics and data visualizations showcasing my expertise and impact in the
                        AI industry.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold">Skills</h3>
                      <p className="text-muted-foreground">
                        Discover the wide range of skills and technologies I have mastered in the field of artificial
                        intelligence.
                      </p>
                    </div>
                  </div>
                </div>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#resume"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                  prefetch={false}
                >
                  <FileTextIcon className="h-5 w-5" />
                  <span className="sr-only">Resume</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Resume</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#contact"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                  prefetch={false}
                >
                  <MailIcon className="h-5 w-5" />
                  <span className="sr-only">Contact</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Contact</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>
      </header>
    )

}