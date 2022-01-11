export const getResponseUser = (user) => {
  const { password, ...responseUser } = user;
  return responseUser;
};

// https://developer.mozilla.org/ru/docs/Glossary/Base64
function b64EncodeUnicode(str) {
  return btoa(
    encodeURIComponent(str).replace(
      /%([0-9A-F]{2})/g,
      function toSolidBytes(match, p1) {
        return String.fromCharCode("0x" + p1);
      }
    )
  );
}
function b64DecodeUnicode(str) {
  return decodeURIComponent(
    atob(str)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );
}

export const encodeToken = b64EncodeUnicode;
export const decodeToken = b64DecodeUnicode;
