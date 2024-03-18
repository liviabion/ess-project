export interface AppRoute {
  name: string;
  path: string;
}

export const appUserRoutes: AppRoute[] = [
  {
    name: 'Início',
    path: '/'
  },
  {
    name: 'Blusas',
    path: '/blusas'
  },
  {
    name: 'Calças',
    path: '/calcas'
  },
  {
    name: 'Vestidos',
    path: '/vestidos'
  },
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

export const appDeliveryRoutes: AppRoute[] = [
  {
    name: 'Entregas disponíveis',
    path: '/disponiveis'
  },
  {
    name: 'Meu histórico',
    path: '/historico'
  }
];