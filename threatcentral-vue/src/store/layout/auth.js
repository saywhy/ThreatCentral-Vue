export function forRoleList(auth) {
  auth = auth.data.data;
  let roles = [];
  if(auth == '' || auth == undefined){
    console.log('无权限');

    roles = null;

    //删除token
    //removeToken();
    location.reload();

    return false;

  }else {
    //真实状态
    auth.forEach(function (v,k) {
      roles.push(v.id);
      if(v.child_menu && v.child_menu.length){
        v.child_menu.forEach(function (v1,k1) {
          roles.push(v1.id);
          if(v1.child_menu && v1.child_menu.length){
            v1.child_menu.forEach(function (v2,k2) {
              roles.push(v2.id);
            })
          }
        })
      }
    });
  }
  return roles;
}

export function formatList(asynRoutes,auths) {
  return asynRoutes.filter(route => {
    if(route.meta && auths.includes(route.meta.auth)){
      if(route.children &&route.children.length > 0){
        route.redirect = route.children[0].path;
        route.children = formatList(route.children,auths);
      }
      return true;
    }
  });

}
