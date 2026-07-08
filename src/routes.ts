import { type RouteConfig } from '@react-router/dev/routes'

export default [
  { path: '/', file: 'pages/Home.tsx' },
  { path: '/formations/construction-metallique', file: 'pages/ConstructionMetallique.tsx' },
  { path: '/formations/gestion-finances-management', file: 'pages/GestionFinances.tsx' },
  { path: '/formations/electricite', file: 'pages/Electricite.tsx' },
  { path: '/about', file: 'pages/About.tsx' },
  { path: '/contact', file: 'pages/Contact.tsx' },
  { path: '*', file: 'pages/NotFound.tsx' },
] satisfies RouteConfig
