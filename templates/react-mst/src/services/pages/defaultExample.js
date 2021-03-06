import axios from '@/utils/axios';

export async function getRoleMenuTree(params) {
  return axios({
    url: 'defaultExample/getRoleMenuTree',
    method: 'get',
    params,
    errorTitle: '获取角色权限数据'
  });
}

export async function getRoleManagementData(params) {
  return axios({
    url: 'defaultExample/getRoleManagementData',
    method: 'get',
    params,
    errorTitle: '获取角色管理数据'
  });
}

export async function searchRole(params) {
  return axios({
    url: 'defaultExample/searchRole',
    method: 'get',
    params,
    errorTitle: '获取角色数据'
  });
}

export async function saveRole(params) {
  return axios({
    url: 'defaultExample/saveRole',
    method: 'post',
    data: params,
    errorTitle: '添加角色数据'
  });
}

export async function saveRolePermission(params) {
  return axios({
    url: 'defaultExample/saveRolePermission',
    method: 'post',
    data: params,
    errorTitle: '添加角色权限数据'
  });
}

export async function deleteRole(params) {
  return axios({
    url: 'defaultExample/deleteRole',
    method: 'post',
    data: params,
    errorTitle: '删除角色数据'
  });
}
