function validateHttpRequest(obj){
  const validObj = {
    'method': ["GET", "POST", "DELETE", "CONNECT"],
    'version': ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0" ],
  }
  const regexURI = /^[a-zA-Z.0-9]+$/gm;
  const regexMESSAGE = /[<>&'"\\]/gm;

  if (!obj.hasOwnProperty('method') || !validObj.method.includes(obj.method)){
    throw new Error ("Invalid request header: Invalid Method");
  }
  if (!obj.hasOwnProperty('uri') || !regexURI.test(obj.uri) || obj.uri === ""){
    throw new Error ("Invalid request header: Invalid URI");
  }
  if (!obj.hasOwnProperty('version') || !validObj.version.includes(obj.version)){
    throw new Error ("Invalid request header: Invalid Version")
  }
  if (!obj.hasOwnProperty('message') || regexMESSAGE.test(obj.message)){
    throw new Error ("Invalid request header: Invalid Message")
  }
  return obj;

};

console.log(validateHttpRequest({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
  }
  ));
  