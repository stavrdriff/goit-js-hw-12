import{a as m,i,S as p}from"./assets/vendor-32598135.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const u="/goit-js-hw-12/assets/octagone-x-mark-9267c734.svg",d=async(r,t)=>{const s="https://pixabay.com/api/",e="?key=10296847-2cb755935dd8ca79d5cc29426",o=r;await m.get(`${s}${e}&q=${o}`,{params:{image_type:"photo",orientation:"horizontal",safesearch:"true",page:t,per_page:15}}).then(l=>{_(l.data,r,t)}).catch(l=>i.error({class:"popup-message",theme:"dark",backgroundColor:"#ef4040",messageColor:"#fff",iconUrl:u,position:"topRight",pauseOnHover:!0,timeout:3e3,message:`${l}`}))},f=new p(".gallery a",{spinner:!1,overlayOpacity:.8,navText:['<svg xmlns="http://www.w3.org/2000/svg" width="12" height="20" viewBox="0 0 12 20" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.031 0.468998C11.1008 0.538667 11.1563 0.62143 11.1941 0.712548C11.2319 0.803665 11.2513 0.901347 11.2513 0.999998C11.2513 1.09865 11.2319 1.19633 11.1941 1.28745C11.1563 1.37857 11.1008 1.46133 11.031 1.531L2.5605 10L11.031 18.469C11.1718 18.6098 11.2509 18.8008 11.2509 19C11.2509 19.1992 11.1718 19.3902 11.031 19.531C10.8902 19.6718 10.6992 19.7509 10.5 19.7509C10.3008 19.7509 10.1098 19.6718 9.969 19.531L0.968997 10.531C0.899153 10.4613 0.843738 10.3786 0.805928 10.2874C0.768119 10.1963 0.748657 10.0986 0.748657 10C0.748657 9.90135 0.768119 9.80367 0.805928 9.71255C0.843738 9.62143 0.899153 9.53867 0.968997 9.469L9.969 0.468998C10.0387 0.399153 10.1214 0.343739 10.2125 0.305929C10.3037 0.26812 10.4013 0.248657 10.5 0.248657C10.5986 0.248657 10.6963 0.26812 10.7874 0.305929C10.8786 0.343739 10.9613 0.399153 11.031 0.468998Z" fill="currentColor"/></svg>','<svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22" fill="none"><path d="M5.32223 0.822998L5.32223 0.822999L5.32312 0.822104C5.34634 0.798823 5.37393 0.780351 5.4043 0.767748C5.43468 0.755145 5.46724 0.748657 5.50012 0.748657C5.533 0.748657 5.56556 0.755145 5.59594 0.767748C5.62631 0.780351 5.6539 0.798823 5.67712 0.822105L5.67757 0.822551L14.6776 9.82255L14.678 9.823C14.7013 9.84622 14.7198 9.87381 14.7324 9.90418C14.745 9.93456 14.7515 9.96711 14.7515 10C14.7515 10.0329 14.745 10.0654 14.7324 10.0958C14.7198 10.1262 14.7013 10.1538 14.678 10.177L14.6776 10.1774L5.67757 19.1774C5.63051 19.2245 5.56668 19.2509 5.50012 19.2509C5.43356 19.2509 5.36973 19.2245 5.32267 19.1774C5.27561 19.1304 5.24917 19.0666 5.24917 19C5.24917 18.9334 5.27561 18.8696 5.32267 18.8226L13.7931 10.3536L14.1468 10L13.7931 9.64641L5.32264 1.17741L5.32223 1.177C5.29894 1.15377 5.28047 1.12619 5.26787 1.09581C5.25527 1.06544 5.24878 1.03288 5.24878 0.999998C5.24878 0.967112 5.25527 0.934552 5.26787 0.904181C5.28047 0.873809 5.29894 0.846221 5.32223 0.822998Z" stroke="currentColor"/></svg>']}),y=()=>{const r=document.querySelector(".gallery__list").firstElementChild.getBoundingClientRect().height;window.scrollBy({top:r*2+48,left:0,behavior:"smooth"})},c=(r,t,s)=>{const a=document.querySelector(".gallery");if(r){a.insertAdjacentHTML("beforeend",'<button class="gallery__action" type="button">Load more</button>');const e=a.querySelector(".gallery__action");e.addEventListener("click",()=>{s+=1,e.remove(),n(!0),setTimeout(async()=>{await d(t,s),y()},500)})}else{const e=a.querySelector(".gallery__action");if(!e)return;e.remove()}},h=(r,t,s)=>{const a=[...document.querySelectorAll(".gallery__item")],e=document.querySelector(".gallery__action"),o=document.querySelector(".gallery");console.log(r),!(!a.length||e)&&(a.length<r?c(!0,t,s):(c(!1),o.insertAdjacentHTML("beforeend",`<p class="gallery__meassage">We're sorry, but you've reached the end of search results.</p>`)))},n=r=>{const t=document.querySelector(".gallery");if(r)t.insertAdjacentHTML("beforeend",'<div class="loader"></div>');else{const s=t.querySelector(".loader");if(!s)return;s.remove()}},C=()=>{const r=document.querySelector(".gallery__list");if(!r)return;r.innerHTML="";const t=document.querySelector(".gallery__meassage");t&&t.remove()},_=({hits:r,totalHits:t},s,a)=>{const e=document.querySelector(".gallery__list");if(!e)return;r.length||(i.error({class:"popup-message",theme:"dark",backgroundColor:"#ef4040",messageColor:"#fff",iconUrl:u,position:"topRight",pauseOnHover:!0,timeout:3e3,message:"Sorry, there are no images matching your search query. Please, try again!"}),n(!1));const o=[];r.map(l=>{const g=`<li class="gallery__item">
      <div class="gallery-card">
        <a class="gallery-card__link" href="${l.largeImageURL}" aria-label="Open image in modal">
          <img class="gallery-card__image" src="${l.webformatURL}" alt="${l.tags}">
        </a>
        <div class="gallery-card__caption">
          <p class="gallery-card__text">Likes <span>${l.likes}</span></p>
          <p class="gallery-card__text">Views <span>${l.views}</span></p>
          <p class="gallery-card__text">Comments <span>${l.comments}</span></p>
          <p class="gallery-card__text">Downloads <span>${l.downloads}</span></p>
        </div>
      </div>
    </li>`;o.push(g)}),n(!1),e.insertAdjacentHTML("beforeend",o.join("")),f.refresh(),h(t,s,a)},v=()=>{const r=document.querySelector(".form"),t=r.querySelector(".form__input");!r||!t||r.addEventListener("submit",s=>{if(s.preventDefault(),!t.value.length)return;const a=t.value.trim().split(" ").join("+");C(),n(!0),c(!1,a),setTimeout(()=>{d(a,1)},500),t.value=""})};document.addEventListener("DOMContentLoaded",()=>{v()});
//# sourceMappingURL=commonHelpers.js.map
