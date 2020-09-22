export interface PropsIRoute {
  // 图标
  icon?: string;
  // 菜单名
  name?: string;
  // 路由
  path?: string;
  // 组件
  component?: any;
  // 子路由
  routes?: PropsIRoute[];
  // 精确匹配
  exact?: boolean;
  // 重定向地址
  redirect?: string;
  // 不作为节点显示在菜单
  hideInMenu?: boolean;
  // 子路由不作为节点显示在菜单上
  hideChildrenInMenu?: boolean;
}

export interface RouteWithProps {
  path: string;
  exact?: boolean;
  strict?: boolean;
  render: (props: any) => any;
  location?: any;
  rest?: [];
}
