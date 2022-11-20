export interface CardData {
  title: string
  description: string
  image: string
}

export const cards: CardData[] = [
  {
    title: 'Animation',
    description:
      'Learn the latest animation techniques to create stunning motion design and captivate your audience.',
    image: '/assets/icon-animation.svg',
  },
  {
    title: 'Design',
    description:
      'Create beautiful, usable interfaces to help shape the future of how the web looks.',
    image: '/assets/icon-design.svg',
  },
  {
    title: 'Photography',
    description:
      'Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos.',
    image: '/assets/icon-photography.svg',
  },
  {
    title: 'Crypto',
    description:
      'All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course.',
    image: '/assets/icon-crypto.svg',
  },
  {
    title: 'Business',
    description:
      'A step-by-step playbook to help you start, scale, and sustain your business without outside investment.',
    image: '/assets/icon-business.svg',
  },
]
