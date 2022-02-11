export const logActions = store => next => actionInfo => {
    console.log('actionInfo', actionInfo);
    return next(actionInfo);
}