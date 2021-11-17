import sanityClient from '@sanity/client'

const myClient = sanityClient({ projectId: 'kk2d333s', dataset: 'production', useCdn: true })

export default myClient