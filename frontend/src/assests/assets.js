import header from './header.png'
import profile_pic from './profile_pic.png'
import logo from './logo.svg'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import robot from './Robot.jpg'
import user from './user.png'

export const assets = {
    user,
    robot,
    header,
    profile_pic,
    logo,
    dropdown_icon,
    menu_icon,
    cross_icon,
    chats_icon,
    verified_icon,
    arrow_icon,
    info_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo,
  };

export const interviews = [
  {
    _id: 'session1',
    user: 'user1', // mock user ID
    role: 'Frontend Developer',
    experience: '2 Years',
    topicToFocusOn: 'React.js',
    description: 'Focused session on advanced React concepts, hooks, and optimization techniques.',
    questions: [
      {
        _id: 'q1',
        question: 'What are React hooks and why are they used?',
        answer: 'Hooks let you use state and lifecycle methods in functional components without writing a class.',
        note: 'Explain with useState and useEffect examples.',
        isPinned: true,
      },
      {
        _id: 'q2',
        question: 'How does React’s Virtual DOM work?',
        answer: 'React creates a lightweight copy of the DOM, compares it with the real DOM, and updates only the changed parts.',
        note: 'Mention reconciliation and diffing.',
        isPinned: false,
      },
    ],
  },
  {
    _id: 'session2',
    user: 'user2',
    role: 'Backend Developer',
    experience: '3 Years',
    topicToFocusOn: 'Node.js & MongoDB',
    description: 'Backend interview focusing on APIs, performance, and database optimization.',
    questions: [
      {
        _id: 'q3',
        question: 'What is the event loop in Node.js?',
        answer: 'It handles asynchronous operations by pushing callbacks into a queue and executing them sequentially.',
        note: 'Draw a diagram if possible.',
        isPinned: true,
      },
      {
        _id: 'q4',
        question: 'How do you optimize MongoDB queries?',
        answer: 'Use indexes, avoid unnecessary data fetch, and leverage aggregation pipelines.',
        note: 'Mention indexing strategies.',
        isPinned: false,
      },
    ],
  },
  {
    _id: 'session3',
    user: 'user3',
    role: 'Data Scientist',
    experience: '1 Year',
    topicToFocusOn: 'Python & Machine Learning',
    description: 'Covers basic ML algorithms, Python libraries, and real-world problem-solving.',
    questions: [
      {
        _id: 'q5',
        question: 'What is the difference between supervised and unsupervised learning?',
        answer: 'Supervised learning uses labeled data, unsupervised learning uses unlabeled data.',
        note: 'Give examples: Linear regression vs. K-means.',
        isPinned: false,
      },
      {
        _id: 'q6',
        question: 'Explain overfitting in machine learning.',
        answer: 'When a model performs well on training data but poorly on new data because it learned noise instead of patterns.',
        note: 'Mention cross-validation and regularization.',
        isPinned: true,
      },
    ],
  },
];
