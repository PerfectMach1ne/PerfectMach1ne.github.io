
function getElementByXPath(path) {
  return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

const latestAside = document.getElementById("latest-aside");
const latestHeader = getElementByXPath("//header[@id=\"latest-header\"]/strong");
let latestVersion = latestAside.innerHTML.split('\n')[0].substring(2);
latestHeader.innerHTML = latestVersion;
console.log(latestHeader.innerHTML)

// console.log(latest.innerHTML.replace(/<\/?[^>]+(>|$)/g, ""))
// "This regex looks for <, an optional slash /, one or more characters that are not >, then either >
// or $ (the end of the line)""
// why yes, i yoinked that from scrapoverflow