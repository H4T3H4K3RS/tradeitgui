
const resolveRole = roleId => {
  if (roleId === -1){
    return {
      status: `Banned`,
      chip: { color: 'warning' },
    }
  }
  if (roleId === 1){
    return {
      status: `User`,
      chip: { color: 'success' },
    }
  }
  if (roleId === 2){
    return {
      status: `Moderator`,
      chip: { color: 'primary' },
    }
  }
  if (roleId === 9){
    return {
      status: `Admin`,
      chip: { color: 'error' },
    }
  }
  return {
    status: `Unauthorized`,
    chip: { color: 'info' },
  }
}
export {resolveRole}
