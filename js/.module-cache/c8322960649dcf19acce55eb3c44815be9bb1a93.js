const   openNewTab =(e,url)=> {
  e.preventDefault();
  chrome.tabs.create({url:url})
}

export default openNewTab