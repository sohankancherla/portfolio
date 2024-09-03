import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

import { SiHtml5 } from 'react-icons/si'
import { SiCss3 } from 'react-icons/si'
import { SiJavascript } from 'react-icons/si'
import { SiTypescript } from 'react-icons/si'
import { SiReact } from 'react-icons/si'
import { SiTailwindcss } from 'react-icons/si'
import { SiNextdotjs } from 'react-icons/si'
import { MdLockPerson } from 'react-icons/md'
import { BsStripe } from 'react-icons/bs'
import { SiPython } from 'react-icons/si'
import { SiFlask } from 'react-icons/si'
import { SiNodedotjs } from 'react-icons/si'
import { SiExpress } from 'react-icons/si'
import { SiMongodb } from 'react-icons/si'
import { BiLogoPostgresql } from 'react-icons/bi'
import { SiSupabase } from 'react-icons/si'
import { SiPrisma } from 'react-icons/si'
import { SiGit } from 'react-icons/si'
import { SiGithub } from 'react-icons/si'
import { SiVercel } from 'react-icons/si'
import { FaAws } from 'react-icons/fa6'
import { SiDocker } from 'react-icons/si'
import { SiKubernetes } from 'react-icons/si'
import { SiCloudflare } from 'react-icons/si'

const frontend = [
  {
    name: 'HTML',
    logo: SiHtml5,
  },
  {
    name: 'CSS',
    logo: SiCss3,
  },
  {
    name: 'JavaScript',
    logo: SiJavascript,
  },
  {
    name: 'TypeScript',
    logo: SiTypescript,
  },
  {
    name: 'React',
    logo: SiReact,
  },
  {
    name: 'Tailwind CSS',
    logo: SiTailwindcss,
  },
  {
    name: 'Next.js',
    logo: SiNextdotjs,
  },
  {
    name: 'NextAuth.js',
    logo: MdLockPerson,
  },
  {
    name: 'Stripe',
    logo: BsStripe,
  },
]

const backend = [
  {
    name: 'Python',
    logo: SiPython,
  },
  {
    name: 'Flask',
    logo: SiFlask,
  },
  {
    name: 'Node.js',
    logo: SiNodedotjs,
  },
  {
    name: 'Express',
    logo: SiExpress,
  },
  {
    name: 'MongoDB',
    logo: SiMongodb,
  },
  {
    name: 'PostgreSQL',
    logo: BiLogoPostgresql,
  },
  {
    name: 'Supabase',
    logo: SiSupabase,
  },
  {
    name: 'Prisma ORM',
    logo: SiPrisma,
  },
]

const deployment = [
  {
    name: 'Git',
    logo: SiGit,
  },
  {
    name: 'GitHub',
    logo: SiGithub,
  },
  {
    name: 'Vercel',
    logo: SiVercel,
  },
  {
    name: 'AWS',
    logo: FaAws,
  },
  {
    name: 'Docker',
    logo: SiDocker,
  },
  {
    name: 'Kubernetes',
    logo: SiKubernetes,
  },
  {
    name: 'Cloudflare',
    logo: SiCloudflare,
  },
]

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

export const metadata = {
  title: 'Skills',
  description: "What I've learned over the years.",
}

export default function Uses() {
  return (
    <SimpleLayout
      title="The things I am proficient in."
      intro="I've spent a lot of time over the years honing my skills and finding the best tools for the job. Here are the things I use on a daily basis to get my work done."
    >
      <div className="space-y-20">
        <ToolsSection title="Frontend">
          <div className="grid grid-cols-4 gap-8 text-zinc-600 dark:text-zinc-400">
            {frontend.map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center justify-center gap-1"
              >
                <skill.logo className="h-8 w-8" />
                <span className="text-xs font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </ToolsSection>
        <ToolsSection title="Backend">
          <div className="grid grid-cols-4 gap-8 text-zinc-600 dark:text-zinc-400">
            {backend.map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center justify-center gap-1"
              >
                <skill.logo className="h-8 w-8" />
                <span className="text-xs font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </ToolsSection>
        <ToolsSection title="Deployment">
          <div className="grid grid-cols-4 gap-8 text-zinc-600 dark:text-zinc-400">
            {deployment.map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center justify-center gap-1"
              >
                <skill.logo className="h-8 w-8" />
                <span className="text-xs font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
