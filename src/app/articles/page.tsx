import Image, { type ImageProps } from 'next/image'
import { type Metadata } from 'next'

import { SimpleLayout } from '@/components/SimpleLayout'

import logoIntel from '@/images/logos/intel.png'
import logoBritannica from '@/images/logos/britannica.png'
import logoASU from '@/images/logos/asu.svg'
import logoUIUC from '@/images/logos/uiuc.png'

interface Role {
  company: string
  title: string
  logo: ImageProps['src']
  start: string | { label: string; dateTime: string }
  end: string | { label: string; dateTime: string }
}

const roles = [
  {
    company: 'Intel',
    title: 'Graduate Full-Stack Engineer Intern',
    logo: logoIntel,
    start: 'December 2023',
    end: {
      label: 'Present',
      dateTime: new Date().getFullYear().toString(),
    },
  },
  {
    company: 'Encyclopedia Britannica',
    title: 'Graduate Machine Learning Engineer Intern',
    logo: logoBritannica,
    start: 'August 2023',
    end: 'October 2023',
  },
  {
    company: 'Intel',
    title: 'Full-Stack Engineer Intern',
    logo: logoIntel,
    start: 'May 2020',
    end: 'May 2023',
  },
  {
    company: 'Intel',
    title: 'High School Summer Intern',
    logo: logoIntel,
    start: 'June 2019',
    end: 'August 2019',
  },
]

const education = [
  {
    company: 'Univeristy of Illinois Urbana-Champaign',
    title: 'Master of Science, Computer Science',
    logo: logoUIUC,
    start: 'August 2023',
    end: {
      label: 'Present',
      dateTime: new Date().getFullYear().toString(),
    },
  },
  {
    company: 'Barrett, The Honors College at Arizona State University',
    title: 'Bachelor of Science, Computer Science',
    logo: logoASU,
    start: 'August 2019',
    end: 'May 2023',
  },
]

interface Role {
  company: string
  title: string
  logo: ImageProps['src']
  start: string | { label: string; dateTime: string }
  end: string | { label: string; dateTime: string }
}

function Role({ role }: { role: Role }) {
  let startLabel =
    typeof role.start === 'string' ? role.start : role.start.label
  let startDate =
    typeof role.start === 'string' ? role.start : role.start.dateTime

  let endLabel = typeof role.end === 'string' ? role.end : role.end.label
  let endDate = typeof role.end === 'string' ? role.end : role.end.dateTime

  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <Image
          src={role.logo}
          alt=""
          className="h-7 w-7 rounded-full object-cover"
          unoptimized
        />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {role.company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
          {role.title}
        </dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
          aria-label={`${startLabel} until ${endLabel}`}
        >
          <time dateTime={startDate}>{startLabel}</time>{' '}
          <span aria-hidden="true">—</span>{' '}
          <time dateTime={endDate}>{endLabel}</time>
        </dd>
      </dl>
    </li>
  )
}

export const metadata: Metadata = {
  title: 'Timeline',
  description: 'My journey through software.',
}

export default function Timeline() {
  return (
    <SimpleLayout
      title="My journey through software."
      intro="I'm currently seeking a new role in Frontend Development where I can collaborate with the best developers in the industry to learn and grow in the field."
    >
      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <h2 className="text-xl font-semibold">Work Experience</h2>
        <div className="flex max-w-3xl flex-col space-y-16">
          <ol className="mt-6 space-y-4">
            {roles.map((role, roleIndex) => (
              <Role key={roleIndex} role={role} />
            ))}
          </ol>
        </div>
        <h2 className="mt-8 text-xl font-semibold">Education</h2>
        <div className="flex max-w-3xl flex-col space-y-16">
          <ol className="mt-6 space-y-4">
            {education.map((role, roleIndex) => (
              <Role key={roleIndex} role={role} />
            ))}
          </ol>
        </div>
      </div>
    </SimpleLayout>
  )
}
