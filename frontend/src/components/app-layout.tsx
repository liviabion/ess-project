export interface AppRoute {
  name: string;
  path: string;
}

export const appUserRoutes: AppRoute[] = [
  {
    name: 'Início',
    path: '/home'
  },
  {
    name: 'Blusas',
    path: '/blusas'
  }
];

export const appAdminRoutes: AppRoute[] = [
  {
    name: 'Itens',
    path: '/itens'
  },
  {
    name: 'Categorias',
    path: '/categorias'
  },
  {
    name: 'Cupons',
    path: '/cupons'
  },
  {
    name: 'Entregadores',
    path: '/deliveryPerson'
  },
  {
    name: 'Entregas',
    path: '/entregas'
  }
];