export const select = (project) => {
  return{
    type: 'PROJ_SELECTED',
      payload: project
  }
}
