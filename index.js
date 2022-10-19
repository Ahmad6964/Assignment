async function getHtmlSection(path){
const getSection = await fetch(path);
return await getSection.text();

}
function injectSection(id,sec){
const target = document.getElementById(id)
 target.innerHTML += sec

}
async function load () {
 const headerSec = await getHtmlSection("./header.html")
 injectSection('main', headerSec)
 const leftSidebarSec = await getHtmlSection("./leftSidebar.html")   
 injectSection('container', leftSidebarSec)
 const middleSec = await getHtmlSection("./middle.html")   
 injectSection('container', middleSec)
 const rightSidebarSec = await getHtmlSection("./rightSidebar.html")   
 injectSection('container', rightSidebarSec)
}