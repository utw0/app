module.exports = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    domains: ['lastfm.freetls.fastly.net'],
  },
  async redirects() {
    return [
      {
        source: '/github',
        destination: 'https://github.com/utw0',
        permanent: true,
      },
      {
        source: '/linkedin',
        destination: 'https://www.linkedin.com/in/luhux/',
        permanent: true,
      },
      {
        source: '/discord',
        destination: 'https://discord.com/users/341592492224806914',
        permanent: true,
      },
      {
        source: '/spotify',
        destination: 'https://open.spotify.com/user/aoj0e0b3twag42g0h8nxqm4ms?si=eae27e85e55449e8',
        permanent: true,
      },
      {
        source: '/instagram',
        destination: 'https://www.instagram.com/utkukosemm/',
        permanent: true,
      },
    ]
  },
}
