export default function Print(el,hideEl){
  if(!el) return window.print()
  const dom = document.querySelector(el)
  const cloneDom = dom.cloneNode(true)
  let style = document.createElement('style')
  style.type = 'text/css'
  let css = ''
  if(hideEl){
    if(Array.isArray(hideEl)){
      hideEl.forEach(it=>{
        css += `${it}{display:none !important} `
      })  
    }else{
      css =`${hideEl}{display:none !important} `
    }
    try{
      style.appendChild(document.createTextNode(css))
    }catch{
      style.styleSheet.cssText = css
    }
  }
  document.body.style.display ='none'
  document.head.appendChild(style)
  document.body.parentNode.appendChild(cloneDom)
  window.print()
  document.body.style.display ='inline-block'
  document.head.removeChild(document.head.lastChild||document.head.lastElementChild)
  document.body.parentNode.removeChild(cloneDom)
}