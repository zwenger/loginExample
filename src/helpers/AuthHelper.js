import jwtDecode from 'jwt-decode';
const jwtToken = 'jwtToken';
const permissions = 'permissions'

const storeJwtToken = (token) => localStorage.setItem(jwtToken, token);

const getDecodedToken = () => jwtDecode(localStorage.getItem(jwtToken));

const storeUserPermissions = (userPermissions) =>
  localStorage.setItem(permissions, JSON.stringify(userPermissions));

const getUserPermissions = () => JSON.parse(localStorage.getItem(permissions));

export {
  storeJwtToken,
  getDecodedToken,
  storeUserPermissions,
  getUserPermissions
}