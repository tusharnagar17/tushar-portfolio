export interface ProjectListProps {
  title: string;
  description: string;
  githubLink: string;
  techStack: string[];
  liveLink: string;
  imageLink: string;
  category?: string[];
}

export const web2List: ProjectListProps[] = [
  {
    title: 'Chatify',
    description:
      'Chatify is a real-time web application for instant messaging, built with Socket.IO and Node.js. This application demonstrates the capabilities of WebSockets to facilitate live, bidirectional communication between users.',
    githubLink: 'https://github.com/tusharnagar17/chatify',
    techStack: [
      'tailwindCSS',
      'typescript',
      'react-ts',
      'express.js',
      'docker',
      'node.js',
      'mongoDB',
    ],
    liveLink: 'https://chatify-web.onrender.com',
    imageLink:
      'https://github.com/tusharnagar17/chatify/raw/main/readme/fullscreen.JPG',
    category: ['all', 'web2'],
  },
  {
    title: 'Apple 3d Website',
    description:
      'I developed an interactive website using GSAP (GreenSock Animation Platform) and Three.js, showcasing Apple products in 3D. The site features smooth animations powered by GSAP and realistic 3D renderings created with Three.js, offering a dynamic and immersive user experience.',
    githubLink: 'https://github.com/tusharnagar17/apple-3d-website',
    techStack: ['three.js', 'gsap', 'react', 'tailwind'],
    liveLink: 'https://apple-3d-website-pepw.onrender.com/',
    imageLink: '/apple-3d.png',
  },

  // {
  //   title: 'coinTX',
  //   description:
  //     'CoinTX is your one-stop destination for staying updated on the latest cryptocurrency trends and statistics',
  //   githubLink: 'https://github.com/tusharnagar17/coinTX',
  //   techStack: ['tailwindCSS', 'typescript', 'react.js', 'chart.js', 'ShadCN'],
  //   liveLink: 'https://cointx.vercel.app/',
  //   imageLink:
  //     'https://github.com/tusharnagar17/coinTX/raw/main/public/github/3.jpg',
  //   category: ['all', 'landing page'],
  // },
  // {
  //   title: 'codeit',
  //   description: 'Landing page for app development agency named Codeit',
  //   githubLink: 'https://github.com/tusharnagar17/coinTX',
  //   techStack: ['tailwindCSS', 'typescript', 'next.js'],
  //   liveLink: 'https://codeit-tech.vercel.app/',
  //   imageLink:
  //     'https://github.com/tusharnagar17/codeit/raw/main/public/project/codeit/1.png',
  //   category: ['all', 'landing page'],
  // },
];
export const reactNativeList: ProjectListProps[] = [
  {
    title: 'React Native Job App',
    description:
      'React-native-job-app is a app built with free RAPID API key. This app helps in listing jobs, search job and add them to favourites. ..',
    githubLink: 'https://github.com/tusharnagar17/React-Native-Job-app',
    techStack: ['react-native', 'styled components', 'expo', 'javascript'],
    liveLink: '',
    imageLink:
      'https://github.com/tusharnagar17/React-Native-Job-app/raw/main/assets/github.jpg',
    category: ['all', 'app', 'react-native'],
  },
  {
    title: 'expenseTracker',
    description:
      'Expense Tracker is a mobile application built with React Native that helps users easily track their expenses on the go',
    githubLink: 'https://github.com/tusharnagar17/expenseTracker',
    techStack: ['redux', 'expo', 'styled components', 'typescript'],
    liveLink: '',
    imageLink:
      'https://github.com/tusharnagar17/expenseTracker/raw/main/asset/snapshot/1.jpg',
    category: ['all', 'app', 'react-native'],
  },
  {
    title: 'myWeather',
    description:
      'myWeather is a mobile application built with React Native that helps users easily track their daily weather on the current and weekly.',
    githubLink: 'https://github.com/tusharnagar17/myWeather',
    techStack: ['tailwindCSS', 'typescript', 'react-native', 'native-wind'],
    liveLink: 'https://github.com/tusharnagar17/myWeather',
    imageLink:
      'https://github.com/tusharnagar17/myWeather/raw/main/assets/github.jpg',
    category: ['all', 'react-native'],
  },
];

export const web3List: ProjectListProps[] = [
  {
    title: 'Nft Marketplace',
    description:
      'This decentralized marketplace is built on the Sepolia testnet, enabling users to trade NFTs in a secure and transparent manner. The platform supports listing, buying, and selling of NFTs, providing a smooth user experience with reliable blockchain interactions',
    githubLink: 'https://github.com/tusharnagar17/Nft-Marketplace',
    techStack: ['rainbowkit', 'nextjs', 'tailwindcss', 'ethers.js', 'hardhat'],
    liveLink: 'https://nft-marketplace-puce-tau.vercel.app/',
    imageLink:
      'https://github.com/tusharnagar17/Nft-Marketplace/raw/main/public/Marketplace.png',
  },
  {
    title: 'Donate Dapp',
    description:
      'Donate Dapp is a user-friendly platform that allows individuals to make charitable contributions securely and transparently using blockchain technology. It empowers users to donate to various causes and track their contributions with ease.',
    githubLink: 'https://github.com/tusharnagar17/donate-dapp',
    techStack: ['tailwindCSS', 'react-vite', 'ethers.js', 'hardhat'],
    liveLink: 'https://donate-dapp.vercel.app/',
    imageLink:
      'https://github.com/tusharnagar17/donate-dapp/raw/main/public/product.png',
  },
];
