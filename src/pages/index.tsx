import { IconName } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { GenericMeta } from 'components/GenericMeta'
import { NowPlayingCard } from 'components/NowPlayingCard'
import { Account, AccountData } from 'data/accounts'
import { MainLayout } from 'layouts/MainLayout'
import { useTheme } from 'next-themes'
import dynamic from 'next/dynamic'
import toast from 'react-hot-toast'
import { v4 as uuidv4 } from 'uuid'
const Time = dynamic(() => import('components/Time'), {
  ssr: false,
})

const SocialLink = ({ name, href, icon, copyEmail }: Account) => {
  return (
    <a
      aria-label={name}
      onClick={() => name === 'Email' && copyEmail()}
      className="cursor-pointer fill-current focus:outline-none transition duration-300 ease-in-out hover:text-indigo-900 dark:hover:text-indigo-200"
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      <FontAwesomeIcon size="1x" icon={icon ? icon : ['fab', name.toLowerCase() as IconName]} />
    </a>
  )
}


const Home = () => {
  const { theme } = useTheme();

  const copyEmail = () => {
    navigator.clipboard.writeText('hi@luhux.xyz');
    theme === 'dark'
      ? toast.success('Copied email to clipboard!', {
        style: {
          background: '#333',
          color: '#fff',
        },
      })
      : toast.success('Copied email to clipboard!');
  };

  return (
    <>
      <GenericMeta
        title="luhux.xyz"
        description="I am a 20 year old student and developer from Turkey. I am currently working on my own projects and trying to learn new things with my team."
      />

      <MainLayout margin={false}>
        <div className="flex">
          {/* Sol Taraf */}
          <div className="flex-1">
            <h1 className="mx-auto max-w-4xl font-display text-3xl sm:text-5xl font-bold tracking-normal text-gray-300 sm:text-6xl">
              Hello, welcome <span className="relative">to</span>
              <span className="relative whitespace-nowrap" style={{ color: '#3730a3' }}>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 418 42"
                  className="absolute top-2/3 left-0 h-[0.58em] w-full fill-current"
                  preserveAspectRatio="none"
                >
                  <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
                </svg>
                <span className="relative"> Luhux's </span>
              </span>
              universe.
            </h1>

            <div className="grid grid-flow-col my-5 gap-2 w-48 mt-8 text-lg">
              {AccountData.map((account) => (
                <SocialLink
                  key={uuidv4()}
                  name={account.name}
                  href={account.href}
                  icon={account.icon}
                  copyEmail={copyEmail}
                />
              ))}
            </div>
            <Time />
            <div>
              <NowPlayingCard />
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default Home;