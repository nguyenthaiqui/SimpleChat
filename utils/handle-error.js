function internalError(error, status){
  return {
    code: status,
    message: "Try again",
    error: error.message
  }
}
function userNotFound(status){
  return {
    code: status,
    message: "Wrong username or password",
  }
}
function missingParameters(status){
  return {
    code: status,
    message: "Missing parametter"
  }
}
module.exports = {
  internalError,
  userNotFound,
  missingParameters
}