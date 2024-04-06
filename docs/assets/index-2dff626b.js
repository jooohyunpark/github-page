(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const eo="153",Ri={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ci={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ph=0,Uo=1,mh=2,Tc=1,_h=2,Rn=3,Kn=0,Pe=1,Ln=2,Xn=0,Ji=1,Io=2,No=3,Oo=4,gh=5,Yi=100,vh=101,xh=102,Fo=103,Bo=104,Mh=200,Sh=201,Eh=202,yh=203,bc=204,Ac=205,Th=206,bh=207,Ah=208,wh=209,Rh=210,Ch=0,Ph=1,Lh=2,Ra=3,Dh=4,Uh=5,Ih=6,Nh=7,wc=0,Oh=1,Fh=2,Un=0,Bh=1,zh=2,Gh=3,kh=4,Hh=5,Rc=300,ir=301,rr=302,Ca=303,Pa=304,Rs=306,La=1e3,on=1001,Da=1002,we=1003,zo=1004,Gs=1005,je=1006,Vh=1007,Cr=1008,qn=1009,Wh=1010,Xh=1011,no=1012,Cc=1013,Gn=1014,kn=1015,Pr=1016,Pc=1017,Lc=1018,pi=1020,qh=1021,ln=1023,Yh=1024,jh=1025,mi=1026,sr=1027,Kh=1028,Dc=1029,Zh=1030,Uc=1031,Ic=1033,ks=33776,Hs=33777,Vs=33778,Ws=33779,Go=35840,ko=35841,Ho=35842,Vo=35843,$h=36196,Wo=37492,Xo=37496,qo=37808,Yo=37809,jo=37810,Ko=37811,Zo=37812,$o=37813,Jo=37814,Qo=37815,tl=37816,el=37817,nl=37818,il=37819,rl=37820,sl=37821,Xs=36492,Jh=36283,al=36284,ol=36285,ll=36286,Nc=3e3,_i=3001,Qh=3200,tf=3201,Oc=0,ef=1,gi="",Rt="srgb",vn="srgb-linear",Fc="display-p3",qs=7680,nf=519,rf=512,sf=513,af=514,of=515,lf=516,cf=517,uf=518,hf=519,cl=35044,ul="300 es",Ua=1035,Dn=2e3,xs=2001;class Ai{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,t);t.target=null}}}const xe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ys=Math.PI/180,Ia=180/Math.PI;function zr(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(xe[r&255]+xe[r>>8&255]+xe[r>>16&255]+xe[r>>24&255]+"-"+xe[t&255]+xe[t>>8&255]+"-"+xe[t>>16&15|64]+xe[t>>24&255]+"-"+xe[e&63|128]+xe[e>>8&255]+"-"+xe[e>>16&255]+xe[e>>24&255]+xe[n&255]+xe[n>>8&255]+xe[n>>16&255]+xe[n>>24&255]).toLowerCase()}function Re(r,t,e){return Math.max(t,Math.min(e,r))}function ff(r,t){return(r%t+t)%t}function js(r,t,e){return(1-e)*r+e*t}function hl(r){return(r&r-1)===0&&r!==0}function Na(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Xr(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Be(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Ct{constructor(t=0,e=0){Ct.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*i+t.x,this.y=s*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class It{constructor(t,e,n,i,s,a,o,l,c){It.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c)}set(t,e,n,i,s,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=i,u[2]=o,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],m=n[5],v=n[8],_=i[0],p=i[3],d=i[6],y=i[1],x=i[4],E=i[7],M=i[2],R=i[5],S=i[8];return s[0]=a*_+o*y+l*M,s[3]=a*p+o*x+l*R,s[6]=a*d+o*E+l*S,s[1]=c*_+u*y+h*M,s[4]=c*p+u*x+h*R,s[7]=c*d+u*E+h*S,s[2]=f*_+m*y+v*M,s[5]=f*p+m*x+v*R,s[8]=f*d+m*E+v*S,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*s*u+n*o*l+i*s*c-i*a*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=u*a-o*c,f=o*l-u*s,m=c*s-a*l,v=e*h+n*f+i*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/v;return t[0]=h*_,t[1]=(i*c-u*n)*_,t[2]=(o*n-i*a)*_,t[3]=f*_,t[4]=(u*e-i*l)*_,t[5]=(i*s-o*e)*_,t[6]=m*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Ks.makeScale(t,e)),this}rotate(t){return this.premultiply(Ks.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ks.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ks=new It;function Bc(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Lr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}const fl={};function br(r){r in fl||(fl[r]=!0,console.warn(r))}function Qi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Zs(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const df=new It().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),pf=new It().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function mf(r){return r.convertSRGBToLinear().applyMatrix3(pf)}function _f(r){return r.applyMatrix3(df).convertLinearToSRGB()}const gf={[vn]:r=>r,[Rt]:r=>r.convertSRGBToLinear(),[Fc]:mf},vf={[vn]:r=>r,[Rt]:r=>r.convertLinearToSRGB(),[Fc]:_f},en={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(r){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!r},get workingColorSpace(){return vn},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,t,e){if(this.enabled===!1||t===e||!t||!e)return r;const n=gf[t],i=vf[e];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${t}" to "${e}".`);return i(n(r))},fromWorkingColorSpace:function(r,t){return this.convert(r,this.workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this.workingColorSpace)}};let Pi;class zc{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Pi===void 0&&(Pi=Lr("canvas")),Pi.width=t.width,Pi.height=t.height;const n=Pi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Pi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Lr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Qi(s[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Qi(e[n]/255)*255):e[n]=Qi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let xf=0;class Gc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xf++}),this.uuid=zr(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push($s(i[a].image)):s.push($s(i[a]))}else s=$s(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function $s(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?zc.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Mf=0;class Le extends Ai{constructor(t=Le.DEFAULT_IMAGE,e=Le.DEFAULT_MAPPING,n=on,i=on,s=je,a=Cr,o=ln,l=qn,c=Le.DEFAULT_ANISOTROPY,u=gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Mf++}),this.uuid=zr(),this.name="",this.source=new Gc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ct(0,0),this.repeat=new Ct(1,1),this.center=new Ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new It,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(br("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===_i?Rt:gi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Rc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case La:t.x=t.x-Math.floor(t.x);break;case on:t.x=t.x<0?0:1;break;case Da:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case La:t.y=t.y-Math.floor(t.y);break;case on:t.y=t.y<0?0:1;break;case Da:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return br("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Rt?_i:Nc}set encoding(t){br("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===_i?Rt:gi}}Le.DEFAULT_IMAGE=null;Le.DEFAULT_MAPPING=Rc;Le.DEFAULT_ANISOTROPY=1;class me{constructor(t=0,e=0,n=0,i=1){me.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],m=l[5],v=l[9],_=l[2],p=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(v-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(v+p)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,E=(m+1)/2,M=(d+1)/2,R=(u+f)/4,S=(h+_)/4,A=(v+p)/4;return x>E&&x>M?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=R/n,s=S/n):E>M?E<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(E),n=R/i,s=A/i):M<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(M),n=S/s,i=A/s),this.set(n,i,s,e),this}let y=Math.sqrt((p-v)*(p-v)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(p-v)/y,this.y=(h-_)/y,this.z=(f-u)/y,this.w=Math.acos((c+m+d-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ei extends Ai{constructor(t=1,e=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new me(0,0,t,e),this.scissorTest=!1,this.viewport=new me(0,0,t,e);const i={width:t,height:e,depth:1};n.encoding!==void 0&&(br("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===_i?Rt:gi),this.texture=new Le(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:je,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Gc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class kc extends Le{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=we,this.minFilter=we,this.wrapR=on,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Sf extends Le{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=we,this.minFilter=we,this.wrapR=on,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yi{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=s[a+0],m=s[a+1],v=s[a+2],_=s[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(o===1){t[e+0]=f,t[e+1]=m,t[e+2]=v,t[e+3]=_;return}if(h!==_||l!==f||c!==m||u!==v){let p=1-o;const d=l*f+c*m+u*v+h*_,y=d>=0?1:-1,x=1-d*d;if(x>Number.EPSILON){const M=Math.sqrt(x),R=Math.atan2(M,d*y);p=Math.sin(p*R)/M,o=Math.sin(o*R)/M}const E=o*y;if(l=l*p+f*E,c=c*p+m*E,u=u*p+v*E,h=h*p+_*E,p===1-o){const M=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=M,c*=M,u*=M,h*=M}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[a],f=s[a+1],m=s[a+2],v=s[a+3];return t[e]=o*v+u*h+l*m-c*f,t[e+1]=l*v+u*f+c*h-o*m,t[e+2]=c*v+u*m+o*f-l*h,t[e+3]=u*v-o*h-l*f-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const n=t._x,i=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),h=o(s/2),f=l(n/2),m=l(i/2),v=l(s/2);switch(a){case"XYZ":this._x=f*u*h+c*m*v,this._y=c*m*h-f*u*v,this._z=c*u*v+f*m*h,this._w=c*u*h-f*m*v;break;case"YXZ":this._x=f*u*h+c*m*v,this._y=c*m*h-f*u*v,this._z=c*u*v-f*m*h,this._w=c*u*h+f*m*v;break;case"ZXY":this._x=f*u*h-c*m*v,this._y=c*m*h+f*u*v,this._z=c*u*v+f*m*h,this._w=c*u*h-f*m*v;break;case"ZYX":this._x=f*u*h-c*m*v,this._y=c*m*h+f*u*v,this._z=c*u*v-f*m*h,this._w=c*u*h+f*m*v;break;case"YZX":this._x=f*u*h+c*m*v,this._y=c*m*h+f*u*v,this._z=c*u*v-f*m*h,this._w=c*u*h-f*m*v;break;case"XZY":this._x=f*u*h-c*m*v,this._y=c*m*h-f*u*v,this._z=c*u*v+f*m*h,this._w=c*u*h+f*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=n+o+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(a-i)*m}else if(n>o&&n>h){const m=2*Math.sqrt(1+n-o-h);this._w=(u-l)/m,this._x=.25*m,this._y=(i+a)/m,this._z=(s+c)/m}else if(o>h){const m=2*Math.sqrt(1+o-n-h);this._w=(s-c)/m,this._x=(i+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+h-n-o);this._w=(a-i)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Re(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+i*c-s*l,this._y=i*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-e;return this._w=m*a+e*this._w,this._x=m*n+e*this._x,this._y=m*i+e*this._y,this._z=m*s+e*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(s),n*Math.cos(s),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(t=0,e=0,n=0){N.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(dl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(dl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=l*e+a*i-o*n,u=l*n+o*e-s*i,h=l*i+s*n-a*e,f=-s*e-a*n-o*i;return this.x=c*l+f*-s+u*-o-h*-a,this.y=u*l+f*-a+h*-s-c*-o,this.z=h*l+f*-o+c*-a-u*-s,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Js.copy(this).projectOnVector(t),this.sub(Js)}reflect(t){return this.sub(Js.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Js=new N,dl=new yi;class Gr{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(yn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(yn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=yn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){if(t.updateWorldMatrix(!1,!1),t.boundingBox!==void 0)t.boundingBox===null&&t.computeBoundingBox(),Li.copy(t.boundingBox),Li.applyMatrix4(t.matrixWorld),this.union(Li);else{const i=t.geometry;if(i!==void 0)if(e&&i.attributes!==void 0&&i.attributes.position!==void 0){const s=i.attributes.position;for(let a=0,o=s.count;a<o;a++)yn.fromBufferAttribute(s,a).applyMatrix4(t.matrixWorld),this.expandByPoint(yn)}else i.boundingBox===null&&i.computeBoundingBox(),Li.copy(i.boundingBox),Li.applyMatrix4(t.matrixWorld),this.union(Li)}const n=t.children;for(let i=0,s=n.length;i<s;i++)this.expandByObject(n[i],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,yn),yn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(gr),qr.subVectors(this.max,gr),Di.subVectors(t.a,gr),Ui.subVectors(t.b,gr),Ii.subVectors(t.c,gr),On.subVectors(Ui,Di),Fn.subVectors(Ii,Ui),ii.subVectors(Di,Ii);let e=[0,-On.z,On.y,0,-Fn.z,Fn.y,0,-ii.z,ii.y,On.z,0,-On.x,Fn.z,0,-Fn.x,ii.z,0,-ii.x,-On.y,On.x,0,-Fn.y,Fn.x,0,-ii.y,ii.x,0];return!Qs(e,Di,Ui,Ii,qr)||(e=[1,0,0,0,1,0,0,0,1],!Qs(e,Di,Ui,Ii,qr))?!1:(Yr.crossVectors(On,Fn),e=[Yr.x,Yr.y,Yr.z],Qs(e,Di,Ui,Ii,qr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,yn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(yn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(En[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),En[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),En[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),En[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),En[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),En[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),En[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),En[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(En),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const En=[new N,new N,new N,new N,new N,new N,new N,new N],yn=new N,Li=new Gr,Di=new N,Ui=new N,Ii=new N,On=new N,Fn=new N,ii=new N,gr=new N,qr=new N,Yr=new N,ri=new N;function Qs(r,t,e,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){ri.fromArray(r,s);const o=i.x*Math.abs(ri.x)+i.y*Math.abs(ri.y)+i.z*Math.abs(ri.z),l=t.dot(ri),c=e.dot(ri),u=n.dot(ri);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Ef=new Gr,vr=new N,ta=new N;class Cs{constructor(t=new N,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Ef.setFromPoints(t).getCenter(n);let i=0;for(let s=0,a=t.length;s<a;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;vr.subVectors(t,this.center);const e=vr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(vr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ta.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(vr.copy(t.center).add(ta)),this.expandByPoint(vr.copy(t.center).sub(ta))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Tn=new N,ea=new N,jr=new N,Bn=new N,na=new N,Kr=new N,ia=new N;class io{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Tn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Tn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Tn.copy(this.origin).addScaledVector(this.direction,e),Tn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){ea.copy(t).add(e).multiplyScalar(.5),jr.copy(e).sub(t).normalize(),Bn.copy(this.origin).sub(ea);const s=t.distanceTo(e)*.5,a=-this.direction.dot(jr),o=Bn.dot(this.direction),l=-Bn.dot(jr),c=Bn.lengthSq(),u=Math.abs(1-a*a);let h,f,m,v;if(u>0)if(h=a*l-o,f=a*o-l,v=s*u,h>=0)if(f>=-v)if(f<=v){const _=1/u;h*=_,f*=_,m=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=s,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*l)+c;else f<=-v?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+c):f<=v?(h=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+c):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+c);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(ea).addScaledVector(jr,f),m}intersectSphere(t,e){Tn.subVectors(t.center,this.origin);const n=Tn.dot(this.direction),i=Tn.dot(Tn)-n*n,s=t.radius*t.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),u>=0?(s=(t.min.y-f.y)*u,a=(t.max.y-f.y)*u):(s=(t.max.y-f.y)*u,a=(t.min.y-f.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),h>=0?(o=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(o=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Tn)!==null}intersectTriangle(t,e,n,i,s){na.subVectors(e,t),Kr.subVectors(n,t),ia.crossVectors(na,Kr);let a=this.direction.dot(ia),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Bn.subVectors(this.origin,t);const l=o*this.direction.dot(Kr.crossVectors(Bn,Kr));if(l<0)return null;const c=o*this.direction.dot(na.cross(Bn));if(c<0||l+c>a)return null;const u=-o*Bn.dot(ia);return u<0?null:this.at(u/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class oe{constructor(t,e,n,i,s,a,o,l,c,u,h,f,m,v,_,p){oe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c,u,h,f,m,v,_,p)}set(t,e,n,i,s,a,o,l,c,u,h,f,m,v,_,p){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=i,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=m,d[7]=v,d[11]=_,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new oe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Ni.setFromMatrixColumn(t,0).length(),s=1/Ni.setFromMatrixColumn(t,1).length(),a=1/Ni.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const f=a*u,m=a*h,v=o*u,_=o*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=m+v*c,e[5]=f-_*c,e[9]=-o*l,e[2]=_-f*c,e[6]=v+m*c,e[10]=a*l}else if(t.order==="YXZ"){const f=l*u,m=l*h,v=c*u,_=c*h;e[0]=f+_*o,e[4]=v*o-m,e[8]=a*c,e[1]=a*h,e[5]=a*u,e[9]=-o,e[2]=m*o-v,e[6]=_+f*o,e[10]=a*l}else if(t.order==="ZXY"){const f=l*u,m=l*h,v=c*u,_=c*h;e[0]=f-_*o,e[4]=-a*h,e[8]=v+m*o,e[1]=m+v*o,e[5]=a*u,e[9]=_-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const f=a*u,m=a*h,v=o*u,_=o*h;e[0]=l*u,e[4]=v*c-m,e[8]=f*c+_,e[1]=l*h,e[5]=_*c+f,e[9]=m*c-v,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,m=a*c,v=o*l,_=o*c;e[0]=l*u,e[4]=_-f*h,e[8]=v*h+m,e[1]=h,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=m*h+v,e[10]=f-_*h}else if(t.order==="XZY"){const f=a*l,m=a*c,v=o*l,_=o*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+_,e[5]=a*u,e[9]=m*h-v,e[2]=v*h-m,e[6]=o*u,e[10]=_*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(yf,t,Tf)}lookAt(t,e,n){const i=this.elements;return ze.subVectors(t,e),ze.lengthSq()===0&&(ze.z=1),ze.normalize(),zn.crossVectors(n,ze),zn.lengthSq()===0&&(Math.abs(n.z)===1?ze.x+=1e-4:ze.z+=1e-4,ze.normalize(),zn.crossVectors(n,ze)),zn.normalize(),Zr.crossVectors(ze,zn),i[0]=zn.x,i[4]=Zr.x,i[8]=ze.x,i[1]=zn.y,i[5]=Zr.y,i[9]=ze.y,i[2]=zn.z,i[6]=Zr.z,i[10]=ze.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],m=n[13],v=n[2],_=n[6],p=n[10],d=n[14],y=n[3],x=n[7],E=n[11],M=n[15],R=i[0],S=i[4],A=i[8],g=i[12],T=i[1],U=i[5],H=i[9],D=i[13],O=i[2],F=i[6],q=i[10],k=i[14],X=i[3],Q=i[7],Z=i[11],ft=i[15];return s[0]=a*R+o*T+l*O+c*X,s[4]=a*S+o*U+l*F+c*Q,s[8]=a*A+o*H+l*q+c*Z,s[12]=a*g+o*D+l*k+c*ft,s[1]=u*R+h*T+f*O+m*X,s[5]=u*S+h*U+f*F+m*Q,s[9]=u*A+h*H+f*q+m*Z,s[13]=u*g+h*D+f*k+m*ft,s[2]=v*R+_*T+p*O+d*X,s[6]=v*S+_*U+p*F+d*Q,s[10]=v*A+_*H+p*q+d*Z,s[14]=v*g+_*D+p*k+d*ft,s[3]=y*R+x*T+E*O+M*X,s[7]=y*S+x*U+E*F+M*Q,s[11]=y*A+x*H+E*q+M*Z,s[15]=y*g+x*D+E*k+M*ft,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],m=t[14],v=t[3],_=t[7],p=t[11],d=t[15];return v*(+s*l*h-i*c*h-s*o*f+n*c*f+i*o*m-n*l*m)+_*(+e*l*m-e*c*f+s*a*f-i*a*m+i*c*u-s*l*u)+p*(+e*c*h-e*o*m-s*a*h+n*a*m+s*o*u-n*c*u)+d*(-i*o*u-e*l*h+e*o*f+i*a*h-n*a*f+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],m=t[11],v=t[12],_=t[13],p=t[14],d=t[15],y=h*p*c-_*f*c+_*l*m-o*p*m-h*l*d+o*f*d,x=v*f*c-u*p*c-v*l*m+a*p*m+u*l*d-a*f*d,E=u*_*c-v*h*c+v*o*m-a*_*m-u*o*d+a*h*d,M=v*h*l-u*_*l-v*o*f+a*_*f+u*o*p-a*h*p,R=e*y+n*x+i*E+s*M;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/R;return t[0]=y*S,t[1]=(_*f*s-h*p*s-_*i*m+n*p*m+h*i*d-n*f*d)*S,t[2]=(o*p*s-_*l*s+_*i*c-n*p*c-o*i*d+n*l*d)*S,t[3]=(h*l*s-o*f*s-h*i*c+n*f*c+o*i*m-n*l*m)*S,t[4]=x*S,t[5]=(u*p*s-v*f*s+v*i*m-e*p*m-u*i*d+e*f*d)*S,t[6]=(v*l*s-a*p*s-v*i*c+e*p*c+a*i*d-e*l*d)*S,t[7]=(a*f*s-u*l*s+u*i*c-e*f*c-a*i*m+e*l*m)*S,t[8]=E*S,t[9]=(v*h*s-u*_*s-v*n*m+e*_*m+u*n*d-e*h*d)*S,t[10]=(a*_*s-v*o*s+v*n*c-e*_*c-a*n*d+e*o*d)*S,t[11]=(u*o*s-a*h*s-u*n*c+e*h*c+a*n*m-e*o*m)*S,t[12]=M*S,t[13]=(u*_*i-v*h*i+v*n*f-e*_*f-u*n*p+e*h*p)*S,t[14]=(v*o*i-a*_*i-v*n*l+e*_*l+a*n*p-e*o*p)*S,t[15]=(a*h*i-u*o*i+u*n*l-e*h*l-a*n*f+e*o*f)*S,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,a=t.x,o=t.y,l=t.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,a){return this.set(1,n,s,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,u=a+a,h=o+o,f=s*c,m=s*u,v=s*h,_=a*u,p=a*h,d=o*h,y=l*c,x=l*u,E=l*h,M=n.x,R=n.y,S=n.z;return i[0]=(1-(_+d))*M,i[1]=(m+E)*M,i[2]=(v-x)*M,i[3]=0,i[4]=(m-E)*R,i[5]=(1-(f+d))*R,i[6]=(p+y)*R,i[7]=0,i[8]=(v+x)*S,i[9]=(p-y)*S,i[10]=(1-(f+_))*S,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=Ni.set(i[0],i[1],i[2]).length();const a=Ni.set(i[4],i[5],i[6]).length(),o=Ni.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],nn.copy(this);const c=1/s,u=1/a,h=1/o;return nn.elements[0]*=c,nn.elements[1]*=c,nn.elements[2]*=c,nn.elements[4]*=u,nn.elements[5]*=u,nn.elements[6]*=u,nn.elements[8]*=h,nn.elements[9]*=h,nn.elements[10]*=h,e.setFromRotationMatrix(nn),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,i,s,a,o=Dn){const l=this.elements,c=2*s/(e-t),u=2*s/(n-i),h=(e+t)/(e-t),f=(n+i)/(n-i);let m,v;if(o===Dn)m=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===xs)m=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,a,o=Dn){const l=this.elements,c=1/(e-t),u=1/(n-i),h=1/(a-s),f=(e+t)*c,m=(n+i)*u;let v,_;if(o===Dn)v=(a+s)*h,_=-2*h;else if(o===xs)v=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ni=new N,nn=new oe,yf=new N(0,0,0),Tf=new N(1,1,1),zn=new N,Zr=new N,ze=new N,pl=new oe,ml=new yi;class Ps{constructor(t=0,e=0,n=0,i=Ps.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],m=i[10];switch(e){case"XYZ":this._y=Math.asin(Re(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Re(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Re(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Re(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Re(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Re(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return pl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(pl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ml.setFromEuler(this),this.setFromQuaternion(ml,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ps.DEFAULT_ORDER="XYZ";class ro{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let bf=0;const _l=new N,Oi=new yi,bn=new oe,$r=new N,xr=new N,Af=new N,wf=new yi,gl=new N(1,0,0),vl=new N(0,1,0),xl=new N(0,0,1),Rf={type:"added"},Ml={type:"removed"};class _e extends Ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bf++}),this.uuid=zr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_e.DEFAULT_UP.clone();const t=new N,e=new Ps,n=new yi,i=new N(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new oe},normalMatrix:{value:new It}}),this.matrix=new oe,this.matrixWorld=new oe,this.matrixAutoUpdate=_e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=_e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new ro,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Oi.setFromAxisAngle(t,e),this.quaternion.multiply(Oi),this}rotateOnWorldAxis(t,e){return Oi.setFromAxisAngle(t,e),this.quaternion.premultiply(Oi),this}rotateX(t){return this.rotateOnAxis(gl,t)}rotateY(t){return this.rotateOnAxis(vl,t)}rotateZ(t){return this.rotateOnAxis(xl,t)}translateOnAxis(t,e){return _l.copy(t).applyQuaternion(this.quaternion),this.position.add(_l.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(gl,t)}translateY(t){return this.translateOnAxis(vl,t)}translateZ(t){return this.translateOnAxis(xl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(bn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?$r.copy(t):$r.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),xr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bn.lookAt(xr,$r,this.up):bn.lookAt($r,xr,this.up),this.quaternion.setFromRotationMatrix(bn),i&&(bn.extractRotation(i.matrixWorld),Oi.setFromRotationMatrix(bn),this.quaternion.premultiply(Oi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Rf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ml)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(Ml)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),bn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),bn.multiply(t.parent.matrixWorld)),t.applyMatrix4(bn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e){let n=[];this[t]===e&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectsByProperty(t,e);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xr,t,Af),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xr,wf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++){const o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(t.shapes,h)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));i.material=o}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),h=a(t.shapes),f=a(t.skeletons),m=a(t.animations),v=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),v.length>0&&(n.nodes=v)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}_e.DEFAULT_UP=new N(0,1,0);_e.DEFAULT_MATRIX_AUTO_UPDATE=!0;_e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const rn=new N,An=new N,ra=new N,wn=new N,Fi=new N,Bi=new N,Sl=new N,sa=new N,aa=new N,oa=new N;let Jr=!1;class an{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),rn.subVectors(t,e),i.cross(rn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){rn.subVectors(i,e),An.subVectors(n,e),ra.subVectors(t,e);const a=rn.dot(rn),o=rn.dot(An),l=rn.dot(ra),c=An.dot(An),u=An.dot(ra),h=a*c-o*o;if(h===0)return s.set(-2,-1,-1);const f=1/h,m=(c*l-o*u)*f,v=(a*u-o*l)*f;return s.set(1-m-v,v,m)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,wn),wn.x>=0&&wn.y>=0&&wn.x+wn.y<=1}static getUV(t,e,n,i,s,a,o,l){return Jr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Jr=!0),this.getInterpolation(t,e,n,i,s,a,o,l)}static getInterpolation(t,e,n,i,s,a,o,l){return this.getBarycoord(t,e,n,i,wn),l.setScalar(0),l.addScaledVector(s,wn.x),l.addScaledVector(a,wn.y),l.addScaledVector(o,wn.z),l}static isFrontFacing(t,e,n,i){return rn.subVectors(n,e),An.subVectors(t,e),rn.cross(An).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return rn.subVectors(this.c,this.b),An.subVectors(this.a,this.b),rn.cross(An).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return an.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return an.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,s){return Jr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Jr=!0),an.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}getInterpolation(t,e,n,i,s){return an.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return an.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return an.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let a,o;Fi.subVectors(i,n),Bi.subVectors(s,n),sa.subVectors(t,n);const l=Fi.dot(sa),c=Bi.dot(sa);if(l<=0&&c<=0)return e.copy(n);aa.subVectors(t,i);const u=Fi.dot(aa),h=Bi.dot(aa);if(u>=0&&h<=u)return e.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(Fi,a);oa.subVectors(t,s);const m=Fi.dot(oa),v=Bi.dot(oa);if(v>=0&&m<=v)return e.copy(s);const _=m*c-l*v;if(_<=0&&c>=0&&v<=0)return o=c/(c-v),e.copy(n).addScaledVector(Bi,o);const p=u*v-m*h;if(p<=0&&h-u>=0&&m-v>=0)return Sl.subVectors(s,i),o=(h-u)/(h-u+(m-v)),e.copy(i).addScaledVector(Sl,o);const d=1/(p+_+f);return a=_*d,o=f*d,e.copy(n).addScaledVector(Fi,a).addScaledVector(Bi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let Cf=0;class dr extends Ai{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cf++}),this.uuid=zr(),this.name="",this.type="Material",this.blending=Ji,this.side=Kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=bc,this.blendDst=Ac,this.blendEquation=Yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ra,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qs,this.stencilZFail=qs,this.stencilZPass=qs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ji&&(n.blending=this.blending),this.side!==Kn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=i(t.textures),a=i(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Hc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},sn={h:0,s:0,l:0},Qr={h:0,s:0,l:0};function la(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class Gt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Rt){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,en.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=en.workingColorSpace){return this.r=t,this.g=e,this.b=n,en.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=en.workingColorSpace){if(t=ff(t,1),e=Re(e,0,1),n=Re(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=la(a,s,t+1/3),this.g=la(a,s,t),this.b=la(a,s,t-1/3)}return en.toWorkingColorSpace(this,i),this}setStyle(t,e=Rt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Rt){const n=Hc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Qi(t.r),this.g=Qi(t.g),this.b=Qi(t.b),this}copyLinearToSRGB(t){return this.r=Zs(t.r),this.g=Zs(t.g),this.b=Zs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Rt){return en.fromWorkingColorSpace(Me.copy(this),t),Math.round(Re(Me.r*255,0,255))*65536+Math.round(Re(Me.g*255,0,255))*256+Math.round(Re(Me.b*255,0,255))}getHexString(t=Rt){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=en.workingColorSpace){en.fromWorkingColorSpace(Me.copy(this),e);const n=Me.r,i=Me.g,s=Me.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=en.workingColorSpace){return en.fromWorkingColorSpace(Me.copy(this),e),t.r=Me.r,t.g=Me.g,t.b=Me.b,t}getStyle(t=Rt){en.fromWorkingColorSpace(Me.copy(this),t);const e=Me.r,n=Me.g,i=Me.b;return t!==Rt?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(sn),sn.h+=t,sn.s+=e,sn.l+=n,this.setHSL(sn.h,sn.s,sn.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(sn),t.getHSL(Qr);const n=js(sn.h,Qr.h,e),i=js(sn.s,Qr.s,e),s=js(sn.l,Qr.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Me=new Gt;Gt.NAMES=Hc;class Vc extends dr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=wc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const re=new N,ts=new Ct;class _n{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=cl,this.updateRange={offset:0,count:-1},this.gpuType=kn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ts.fromBufferAttribute(this,e),ts.applyMatrix3(t),this.setXY(e,ts.x,ts.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)re.fromBufferAttribute(this,e),re.applyMatrix3(t),this.setXYZ(e,re.x,re.y,re.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)re.fromBufferAttribute(this,e),re.applyMatrix4(t),this.setXYZ(e,re.x,re.y,re.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)re.fromBufferAttribute(this,e),re.applyNormalMatrix(t),this.setXYZ(e,re.x,re.y,re.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)re.fromBufferAttribute(this,e),re.transformDirection(t),this.setXYZ(e,re.x,re.y,re.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Xr(e,this.array)),e}setX(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Xr(e,this.array)),e}setY(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Xr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Xr(e,this.array)),e}setW(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Be(e,this.array),n=Be(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Be(e,this.array),n=Be(n,this.array),i=Be(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=Be(e,this.array),n=Be(n,this.array),i=Be(i,this.array),s=Be(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==cl&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Wc extends _n{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Xc extends _n{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class De extends _n{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Pf=0;const Xe=new oe,ca=new _e,zi=new N,Ge=new Gr,Mr=new Gr,pe=new N;class Mn extends Ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Pf++}),this.uuid=zr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Bc(t)?Xc:Wc)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new It().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Xe.makeRotationFromQuaternion(t),this.applyMatrix4(Xe),this}rotateX(t){return Xe.makeRotationX(t),this.applyMatrix4(Xe),this}rotateY(t){return Xe.makeRotationY(t),this.applyMatrix4(Xe),this}rotateZ(t){return Xe.makeRotationZ(t),this.applyMatrix4(Xe),this}translate(t,e,n){return Xe.makeTranslation(t,e,n),this.applyMatrix4(Xe),this}scale(t,e,n){return Xe.makeScale(t,e,n),this.applyMatrix4(Xe),this}lookAt(t){return ca.lookAt(t),ca.updateMatrix(),this.applyMatrix4(ca.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zi).negate(),this.translate(zi.x,zi.y,zi.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new De(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];Ge.setFromBufferAttribute(s),this.morphTargetsRelative?(pe.addVectors(this.boundingBox.min,Ge.min),this.boundingBox.expandByPoint(pe),pe.addVectors(this.boundingBox.max,Ge.max),this.boundingBox.expandByPoint(pe)):(this.boundingBox.expandByPoint(Ge.min),this.boundingBox.expandByPoint(Ge.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new N,1/0);return}if(t){const n=this.boundingSphere.center;if(Ge.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];Mr.setFromBufferAttribute(o),this.morphTargetsRelative?(pe.addVectors(Ge.min,Mr.min),Ge.expandByPoint(pe),pe.addVectors(Ge.max,Mr.max),Ge.expandByPoint(pe)):(Ge.expandByPoint(Mr.min),Ge.expandByPoint(Mr.max))}Ge.getCenter(n);let i=0;for(let s=0,a=t.count;s<a;s++)pe.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(pe));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)pe.fromBufferAttribute(o,c),l&&(zi.fromBufferAttribute(t,c),pe.add(zi)),i=Math.max(i,n.distanceToSquared(pe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,s=e.normal.array,a=e.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _n(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let T=0;T<o;T++)c[T]=new N,u[T]=new N;const h=new N,f=new N,m=new N,v=new Ct,_=new Ct,p=new Ct,d=new N,y=new N;function x(T,U,H){h.fromArray(i,T*3),f.fromArray(i,U*3),m.fromArray(i,H*3),v.fromArray(a,T*2),_.fromArray(a,U*2),p.fromArray(a,H*2),f.sub(h),m.sub(h),_.sub(v),p.sub(v);const D=1/(_.x*p.y-p.x*_.y);isFinite(D)&&(d.copy(f).multiplyScalar(p.y).addScaledVector(m,-_.y).multiplyScalar(D),y.copy(m).multiplyScalar(_.x).addScaledVector(f,-p.x).multiplyScalar(D),c[T].add(d),c[U].add(d),c[H].add(d),u[T].add(y),u[U].add(y),u[H].add(y))}let E=this.groups;E.length===0&&(E=[{start:0,count:n.length}]);for(let T=0,U=E.length;T<U;++T){const H=E[T],D=H.start,O=H.count;for(let F=D,q=D+O;F<q;F+=3)x(n[F+0],n[F+1],n[F+2])}const M=new N,R=new N,S=new N,A=new N;function g(T){S.fromArray(s,T*3),A.copy(S);const U=c[T];M.copy(U),M.sub(S.multiplyScalar(S.dot(U))).normalize(),R.crossVectors(A,U);const D=R.dot(u[T])<0?-1:1;l[T*4]=M.x,l[T*4+1]=M.y,l[T*4+2]=M.z,l[T*4+3]=D}for(let T=0,U=E.length;T<U;++T){const H=E[T],D=H.start,O=H.count;for(let F=D,q=D+O;F<q;F+=3)g(n[F+0]),g(n[F+1]),g(n[F+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new _n(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const i=new N,s=new N,a=new N,o=new N,l=new N,c=new N,u=new N,h=new N;if(t)for(let f=0,m=t.count;f<m;f+=3){const v=t.getX(f+0),_=t.getX(f+1),p=t.getX(f+2);i.fromBufferAttribute(e,v),s.fromBufferAttribute(e,_),a.fromBufferAttribute(e,p),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),o.fromBufferAttribute(n,v),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),o.add(u),l.add(u),c.add(u),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=e.count;f<m;f+=3)i.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)pe.fromBufferAttribute(t,e),pe.normalize(),t.setXYZ(e,pe.x,pe.y,pe.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let m=0,v=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?m=l[_]*o.data.stride+o.offset:m=l[_]*u;for(let d=0;d<u;d++)f[v++]=c[m++]}return new _n(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Mn,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],m=t(f,n);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const m=c[h];u.push(m.toJSON(t.data))}u.length>0&&(i[l]=u,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,m=h.length;f<m;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const El=new oe,si=new io,es=new Cs,yl=new N,Gi=new N,ki=new N,Hi=new N,ua=new N,ns=new N,is=new Ct,rs=new Ct,ss=new Ct,Tl=new N,bl=new N,Al=new N,as=new N,os=new N;class pn extends _e{constructor(t=new Mn,e=new Vc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(s&&o){ns.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(ua.fromBufferAttribute(h,t),a?ns.addScaledVector(ua,u):ns.addScaledVector(ua.sub(e),u))}e.add(ns)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),es.copy(n.boundingSphere),es.applyMatrix4(s),si.copy(t.ray).recast(t.near),!(es.containsPoint(si.origin)===!1&&(si.intersectSphere(es,yl)===null||si.origin.distanceToSquared(yl)>(t.far-t.near)**2))&&(El.copy(s).invert(),si.copy(t.ray).applyMatrix4(El),!(n.boundingBox!==null&&si.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,si)))}_computeIntersections(t,e,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,_=f.length;v<_;v++){const p=f[v],d=a[p.materialIndex],y=Math.max(p.start,m.start),x=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let E=y,M=x;E<M;E+=3){const R=o.getX(E),S=o.getX(E+1),A=o.getX(E+2);i=ls(this,d,t,n,c,u,h,R,S,A),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const v=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let p=v,d=_;p<d;p+=3){const y=o.getX(p),x=o.getX(p+1),E=o.getX(p+2);i=ls(this,a,t,n,c,u,h,y,x,E),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,_=f.length;v<_;v++){const p=f[v],d=a[p.materialIndex],y=Math.max(p.start,m.start),x=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let E=y,M=x;E<M;E+=3){const R=E,S=E+1,A=E+2;i=ls(this,d,t,n,c,u,h,R,S,A),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const v=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=v,d=_;p<d;p+=3){const y=p,x=p+1,E=p+2;i=ls(this,a,t,n,c,u,h,y,x,E),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}}function Lf(r,t,e,n,i,s,a,o){let l;if(t.side===Pe?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,t.side===Kn,o),l===null)return null;os.copy(o),os.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(os);return c<e.near||c>e.far?null:{distance:c,point:os.clone(),object:r}}function ls(r,t,e,n,i,s,a,o,l,c){r.getVertexPosition(o,Gi),r.getVertexPosition(l,ki),r.getVertexPosition(c,Hi);const u=Lf(r,t,e,n,Gi,ki,Hi,as);if(u){i&&(is.fromBufferAttribute(i,o),rs.fromBufferAttribute(i,l),ss.fromBufferAttribute(i,c),u.uv=an.getInterpolation(as,Gi,ki,Hi,is,rs,ss,new Ct)),s&&(is.fromBufferAttribute(s,o),rs.fromBufferAttribute(s,l),ss.fromBufferAttribute(s,c),u.uv1=an.getInterpolation(as,Gi,ki,Hi,is,rs,ss,new Ct),u.uv2=u.uv1),a&&(Tl.fromBufferAttribute(a,o),bl.fromBufferAttribute(a,l),Al.fromBufferAttribute(a,c),u.normal=an.getInterpolation(as,Gi,ki,Hi,Tl,bl,Al,new N),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new N,materialIndex:0};an.getNormal(Gi,ki,Hi,h.normal),u.face=h}return u}class kr extends Mn{constructor(t=1,e=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,m=0;v("z","y","x",-1,-1,n,e,t,a,s,0),v("z","y","x",1,-1,n,e,-t,a,s,1),v("x","z","y",1,1,t,n,e,i,a,2),v("x","z","y",1,-1,t,n,-e,i,a,3),v("x","y","z",1,-1,t,e,n,i,s,4),v("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new De(c,3)),this.setAttribute("normal",new De(u,3)),this.setAttribute("uv",new De(h,2));function v(_,p,d,y,x,E,M,R,S,A,g){const T=E/S,U=M/A,H=E/2,D=M/2,O=R/2,F=S+1,q=A+1;let k=0,X=0;const Q=new N;for(let Z=0;Z<q;Z++){const ft=Z*U-D;for(let B=0;B<F;B++){const tt=B*T-H;Q[_]=tt*y,Q[p]=ft*x,Q[d]=O,c.push(Q.x,Q.y,Q.z),Q[_]=0,Q[p]=0,Q[d]=R>0?1:-1,u.push(Q.x,Q.y,Q.z),h.push(B/S),h.push(1-Z/A),k+=1}}for(let Z=0;Z<A;Z++)for(let ft=0;ft<S;ft++){const B=f+ft+F*Z,tt=f+ft+F*(Z+1),J=f+(ft+1)+F*(Z+1),at=f+(ft+1)+F*Z;l.push(B,tt,at),l.push(tt,J,at),X+=6}o.addGroup(m,X,g),m+=X,f+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new kr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ar(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ae(r){const t={};for(let e=0;e<r.length;e++){const n=ar(r[e]);for(const i in n)t[i]=n[i]}return t}function Df(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function qc(r){return r.getRenderTarget()===null?r.outputColorSpace:vn}const Uf={clone:ar,merge:Ae};var If=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Nf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ti extends dr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=If,this.fragmentShader=Nf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ar(t.uniforms),this.uniformsGroups=Df(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Yc extends _e{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new oe,this.projectionMatrix=new oe,this.projectionMatrixInverse=new oe,this.coordinateSystem=Dn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ke extends Yc{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ia*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ys*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ia*2*Math.atan(Math.tan(Ys*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ys*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Vi=-90,Wi=1;class Of extends _e{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null;const i=new Ke(Vi,Wi,t,e);i.layers=this.layers,this.add(i);const s=new Ke(Vi,Wi,t,e);s.layers=this.layers,this.add(s);const a=new Ke(Vi,Wi,t,e);a.layers=this.layers,this.add(a);const o=new Ke(Vi,Wi,t,e);o.layers=this.layers,this.add(o);const l=new Ke(Vi,Wi,t,e);l.layers=this.layers,this.add(l);const c=new Ke(Vi,Wi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===Dn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===xs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[i,s,a,o,l,c]=this.children,u=t.getRenderTarget(),h=t.toneMapping,f=t.xr.enabled;t.toneMapping=Un,t.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0),t.render(e,i),t.setRenderTarget(n,1),t.render(e,s),t.setRenderTarget(n,2),t.render(e,a),t.setRenderTarget(n,3),t.render(e,o),t.setRenderTarget(n,4),t.render(e,l),n.texture.generateMipmaps=m,t.setRenderTarget(n,5),t.render(e,c),t.setRenderTarget(u),t.toneMapping=h,t.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class jc extends Le{constructor(t,e,n,i,s,a,o,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:ir,super(t,e,n,i,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ff extends Ei{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];e.encoding!==void 0&&(br("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===_i?Rt:gi),this.texture=new jc(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:je}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new kr(5,5,5),s=new Ti({name:"CubemapFromEquirect",uniforms:ar(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Pe,blending:Xn});s.uniforms.tEquirect.value=e;const a=new pn(i,s),o=e.minFilter;return e.minFilter===Cr&&(e.minFilter=je),new Of(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(s)}}const ha=new N,Bf=new N,zf=new It;class ci{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=ha.subVectors(n,e).cross(Bf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ha),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||zf.getNormalMatrix(t),i=this.coplanarPoint(ha).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ai=new Cs,cs=new N;class so{constructor(t=new ci,e=new ci,n=new ci,i=new ci,s=new ci,a=new ci){this.planes=[t,e,n,i,s,a]}set(t,e,n,i,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Dn){const n=this.planes,i=t.elements,s=i[0],a=i[1],o=i[2],l=i[3],c=i[4],u=i[5],h=i[6],f=i[7],m=i[8],v=i[9],_=i[10],p=i[11],d=i[12],y=i[13],x=i[14],E=i[15];if(n[0].setComponents(l-s,f-c,p-m,E-d).normalize(),n[1].setComponents(l+s,f+c,p+m,E+d).normalize(),n[2].setComponents(l+a,f+u,p+v,E+y).normalize(),n[3].setComponents(l-a,f-u,p-v,E-y).normalize(),n[4].setComponents(l-o,f-h,p-_,E-x).normalize(),e===Dn)n[5].setComponents(l+o,f+h,p+_,E+x).normalize();else if(e===xs)n[5].setComponents(o,h,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ai.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ai.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ai)}intersectsSprite(t){return ai.center.set(0,0,0),ai.radius=.7071067811865476,ai.applyMatrix4(t.matrixWorld),this.intersectsSphere(ai)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(cs.x=i.normal.x>0?t.max.x:t.min.x,cs.y=i.normal.y>0?t.max.y:t.min.y,cs.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(cs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Kc(){let r=null,t=!1,e=null,n=null;function i(s,a){e(s,a),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function Gf(r,t){const e=t.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,f=c.usage,m=r.createBuffer();r.bindBuffer(u,m),r.bufferData(u,h,f),c.onUploadCallback();let v;if(h instanceof Float32Array)v=r.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)v=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)v=r.SHORT;else if(h instanceof Uint32Array)v=r.UNSIGNED_INT;else if(h instanceof Int32Array)v=r.INT;else if(h instanceof Int8Array)v=r.BYTE;else if(h instanceof Uint8Array)v=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)v=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:v,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,h){const f=u.array,m=u.updateRange;r.bindBuffer(h,c),m.count===-1?r.bufferSubData(h,0,f):(e?r.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):r.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(r.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,i(c,u)):h.version<c.version&&(s(h.buffer,c,u),h.version=c.version)}return{get:a,remove:o,update:l}}class ao extends Mn{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,h=t/o,f=e/l,m=[],v=[],_=[],p=[];for(let d=0;d<u;d++){const y=d*f-a;for(let x=0;x<c;x++){const E=x*h-s;v.push(E,-y,0),_.push(0,0,1),p.push(x/o),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let y=0;y<o;y++){const x=y+c*d,E=y+c*(d+1),M=y+1+c*(d+1),R=y+1+c*d;m.push(x,E,R),m.push(E,M,R)}this.setIndex(m),this.setAttribute("position",new De(v,3)),this.setAttribute("normal",new De(_,3)),this.setAttribute("uv",new De(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ao(t.width,t.height,t.widthSegments,t.heightSegments)}}var kf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Hf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Wf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,qf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yf="vec3 transformed = vec3( position );",jf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Kf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Zf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,$f=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Jf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Qf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,td=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ed=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,nd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,id=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,rd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,sd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,ad=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,od=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ld=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,cd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ud=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dd="gl_FragColor = linearToOutputTexel( gl_FragColor );",pd=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,md=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,_d=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,gd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,vd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Md=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Sd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ed=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Td=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,bd=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Ad=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Rd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Cd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Pd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ld=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Dd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ud=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Id=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Nd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,Od=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Fd=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Bd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,zd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Gd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Vd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Wd=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,Xd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Yd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Kd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Zd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$d=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Jd=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Qd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,tp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,ep=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,np=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ip=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,sp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ap=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,op=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,lp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,up=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,fp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_p=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,xp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Mp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Sp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ep=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Tp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ap=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Rp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Cp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Pp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Lp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Dp=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Up=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ip=`#ifdef USE_UV
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Np=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Op=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Fp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Bp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Gp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Hp=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Vp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Wp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Xp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,qp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Yp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,jp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Kp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Zp=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,$p=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,em=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,im=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,rm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,am=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,om=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,um=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,hm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fm=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,pm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,mm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Dt={alphamap_fragment:kf,alphamap_pars_fragment:Hf,alphatest_fragment:Vf,alphatest_pars_fragment:Wf,aomap_fragment:Xf,aomap_pars_fragment:qf,begin_vertex:Yf,beginnormal_vertex:jf,bsdfs:Kf,iridescence_fragment:Zf,bumpmap_pars_fragment:$f,clipping_planes_fragment:Jf,clipping_planes_pars_fragment:Qf,clipping_planes_pars_vertex:td,clipping_planes_vertex:ed,color_fragment:nd,color_pars_fragment:id,color_pars_vertex:rd,color_vertex:sd,common:ad,cube_uv_reflection_fragment:od,defaultnormal_vertex:ld,displacementmap_pars_vertex:cd,displacementmap_vertex:ud,emissivemap_fragment:hd,emissivemap_pars_fragment:fd,encodings_fragment:dd,encodings_pars_fragment:pd,envmap_fragment:md,envmap_common_pars_fragment:_d,envmap_pars_fragment:gd,envmap_pars_vertex:vd,envmap_physical_pars_fragment:Pd,envmap_vertex:xd,fog_vertex:Md,fog_pars_vertex:Sd,fog_fragment:Ed,fog_pars_fragment:yd,gradientmap_pars_fragment:Td,lightmap_fragment:bd,lightmap_pars_fragment:Ad,lights_lambert_fragment:wd,lights_lambert_pars_fragment:Rd,lights_pars_begin:Cd,lights_toon_fragment:Ld,lights_toon_pars_fragment:Dd,lights_phong_fragment:Ud,lights_phong_pars_fragment:Id,lights_physical_fragment:Nd,lights_physical_pars_fragment:Od,lights_fragment_begin:Fd,lights_fragment_maps:Bd,lights_fragment_end:zd,logdepthbuf_fragment:Gd,logdepthbuf_pars_fragment:kd,logdepthbuf_pars_vertex:Hd,logdepthbuf_vertex:Vd,map_fragment:Wd,map_pars_fragment:Xd,map_particle_fragment:qd,map_particle_pars_fragment:Yd,metalnessmap_fragment:jd,metalnessmap_pars_fragment:Kd,morphcolor_vertex:Zd,morphnormal_vertex:$d,morphtarget_pars_vertex:Jd,morphtarget_vertex:Qd,normal_fragment_begin:tp,normal_fragment_maps:ep,normal_pars_fragment:np,normal_pars_vertex:ip,normal_vertex:rp,normalmap_pars_fragment:sp,clearcoat_normal_fragment_begin:ap,clearcoat_normal_fragment_maps:op,clearcoat_pars_fragment:lp,iridescence_pars_fragment:cp,output_fragment:up,packing:hp,premultiplied_alpha_fragment:fp,project_vertex:dp,dithering_fragment:pp,dithering_pars_fragment:mp,roughnessmap_fragment:_p,roughnessmap_pars_fragment:gp,shadowmap_pars_fragment:vp,shadowmap_pars_vertex:xp,shadowmap_vertex:Mp,shadowmask_pars_fragment:Sp,skinbase_vertex:Ep,skinning_pars_vertex:yp,skinning_vertex:Tp,skinnormal_vertex:bp,specularmap_fragment:Ap,specularmap_pars_fragment:wp,tonemapping_fragment:Rp,tonemapping_pars_fragment:Cp,transmission_fragment:Pp,transmission_pars_fragment:Lp,uv_pars_fragment:Dp,uv_pars_vertex:Up,uv_vertex:Ip,worldpos_vertex:Np,background_vert:Op,background_frag:Fp,backgroundCube_vert:Bp,backgroundCube_frag:zp,cube_vert:Gp,cube_frag:kp,depth_vert:Hp,depth_frag:Vp,distanceRGBA_vert:Wp,distanceRGBA_frag:Xp,equirect_vert:qp,equirect_frag:Yp,linedashed_vert:jp,linedashed_frag:Kp,meshbasic_vert:Zp,meshbasic_frag:$p,meshlambert_vert:Jp,meshlambert_frag:Qp,meshmatcap_vert:tm,meshmatcap_frag:em,meshnormal_vert:nm,meshnormal_frag:im,meshphong_vert:rm,meshphong_frag:sm,meshphysical_vert:am,meshphysical_frag:om,meshtoon_vert:lm,meshtoon_frag:cm,points_vert:um,points_frag:hm,shadow_vert:fm,shadow_frag:dm,sprite_vert:pm,sprite_frag:mm},st={common:{diffuse:{value:new Gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new It}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new It}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new It}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new It},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new It},normalScale:{value:new Ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new It},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new It}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new It}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new It}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0},uvTransform:{value:new It}},sprite:{diffuse:{value:new Gt(16777215)},opacity:{value:1},center:{value:new Ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}}},fn={basic:{uniforms:Ae([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.fog]),vertexShader:Dt.meshbasic_vert,fragmentShader:Dt.meshbasic_frag},lambert:{uniforms:Ae([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Dt.meshlambert_vert,fragmentShader:Dt.meshlambert_frag},phong:{uniforms:Ae([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new Gt(0)},specular:{value:new Gt(1118481)},shininess:{value:30}}]),vertexShader:Dt.meshphong_vert,fragmentShader:Dt.meshphong_frag},standard:{uniforms:Ae([st.common,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.roughnessmap,st.metalnessmap,st.fog,st.lights,{emissive:{value:new Gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Dt.meshphysical_vert,fragmentShader:Dt.meshphysical_frag},toon:{uniforms:Ae([st.common,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.gradientmap,st.fog,st.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Dt.meshtoon_vert,fragmentShader:Dt.meshtoon_frag},matcap:{uniforms:Ae([st.common,st.bumpmap,st.normalmap,st.displacementmap,st.fog,{matcap:{value:null}}]),vertexShader:Dt.meshmatcap_vert,fragmentShader:Dt.meshmatcap_frag},points:{uniforms:Ae([st.points,st.fog]),vertexShader:Dt.points_vert,fragmentShader:Dt.points_frag},dashed:{uniforms:Ae([st.common,st.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Dt.linedashed_vert,fragmentShader:Dt.linedashed_frag},depth:{uniforms:Ae([st.common,st.displacementmap]),vertexShader:Dt.depth_vert,fragmentShader:Dt.depth_frag},normal:{uniforms:Ae([st.common,st.bumpmap,st.normalmap,st.displacementmap,{opacity:{value:1}}]),vertexShader:Dt.meshnormal_vert,fragmentShader:Dt.meshnormal_frag},sprite:{uniforms:Ae([st.sprite,st.fog]),vertexShader:Dt.sprite_vert,fragmentShader:Dt.sprite_frag},background:{uniforms:{uvTransform:{value:new It},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Dt.background_vert,fragmentShader:Dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Dt.backgroundCube_vert,fragmentShader:Dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Dt.cube_vert,fragmentShader:Dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Dt.equirect_vert,fragmentShader:Dt.equirect_frag},distanceRGBA:{uniforms:Ae([st.common,st.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Dt.distanceRGBA_vert,fragmentShader:Dt.distanceRGBA_frag},shadow:{uniforms:Ae([st.lights,st.fog,{color:{value:new Gt(0)},opacity:{value:1}}]),vertexShader:Dt.shadow_vert,fragmentShader:Dt.shadow_frag}};fn.physical={uniforms:Ae([fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new It},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new It},clearcoatNormalScale:{value:new Ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new It},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new It},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new It},sheen:{value:0},sheenColor:{value:new Gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new It},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new It},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new It},transmissionSamplerSize:{value:new Ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new It},attenuationDistance:{value:0},attenuationColor:{value:new Gt(0)},specularColor:{value:new Gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new It},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new It},anisotropyVector:{value:new Ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new It}}]),vertexShader:Dt.meshphysical_vert,fragmentShader:Dt.meshphysical_frag};const us={r:0,b:0,g:0};function _m(r,t,e,n,i,s,a){const o=new Gt(0);let l=s===!0?0:1,c,u,h=null,f=0,m=null;function v(p,d){let y=!1,x=d.isScene===!0?d.background:null;switch(x&&x.isTexture&&(x=(d.backgroundBlurriness>0?e:t).get(x)),x===null?_(o,l):x&&x.isColor&&(_(x,1),y=!0),r.xr.getEnvironmentBlendMode()){case"opaque":y=!0;break;case"additive":n.buffers.color.setClear(0,0,0,1,a),y=!0;break;case"alpha-blend":n.buffers.color.setClear(0,0,0,0,a),y=!0;break}(r.autoClear||y)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Rs)?(u===void 0&&(u=new pn(new kr(1,1,1),new Ti({name:"BackgroundCubeMaterial",uniforms:ar(fn.backgroundCube.uniforms),vertexShader:fn.backgroundCube.vertexShader,fragmentShader:fn.backgroundCube.fragmentShader,side:Pe,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,S,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=x.colorSpace!==Rt,(h!==x||f!==x.version||m!==r.toneMapping)&&(u.material.needsUpdate=!0,h=x,f=x.version,m=r.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new pn(new ao(2,2),new Ti({name:"BackgroundMaterial",uniforms:ar(fn.background.uniforms),vertexShader:fn.background.vertexShader,fragmentShader:fn.background.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=x.colorSpace!==Rt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||f!==x.version||m!==r.toneMapping)&&(c.material.needsUpdate=!0,h=x,f=x.version,m=r.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function _(p,d){p.getRGB(us,qc(r)),n.buffers.color.setClear(us.r,us.g,us.b,d,a)}return{getClearColor:function(){return o},setClearColor:function(p,d=1){o.set(p),l=d,_(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,_(o,l)},render:v}}function gm(r,t,e,n){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},l=p(null);let c=l,u=!1;function h(O,F,q,k,X){let Q=!1;if(a){const Z=_(k,q,F);c!==Z&&(c=Z,m(c.object)),Q=d(O,k,q,X),Q&&y(O,k,q,X)}else{const Z=F.wireframe===!0;(c.geometry!==k.id||c.program!==q.id||c.wireframe!==Z)&&(c.geometry=k.id,c.program=q.id,c.wireframe=Z,Q=!0)}X!==null&&e.update(X,r.ELEMENT_ARRAY_BUFFER),(Q||u)&&(u=!1,A(O,F,q,k),X!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function f(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function m(O){return n.isWebGL2?r.bindVertexArray(O):s.bindVertexArrayOES(O)}function v(O){return n.isWebGL2?r.deleteVertexArray(O):s.deleteVertexArrayOES(O)}function _(O,F,q){const k=q.wireframe===!0;let X=o[O.id];X===void 0&&(X={},o[O.id]=X);let Q=X[F.id];Q===void 0&&(Q={},X[F.id]=Q);let Z=Q[k];return Z===void 0&&(Z=p(f()),Q[k]=Z),Z}function p(O){const F=[],q=[],k=[];for(let X=0;X<i;X++)F[X]=0,q[X]=0,k[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:q,attributeDivisors:k,object:O,attributes:{},index:null}}function d(O,F,q,k){const X=c.attributes,Q=F.attributes;let Z=0;const ft=q.getAttributes();for(const B in ft)if(ft[B].location>=0){const J=X[B];let at=Q[B];if(at===void 0&&(B==="instanceMatrix"&&O.instanceMatrix&&(at=O.instanceMatrix),B==="instanceColor"&&O.instanceColor&&(at=O.instanceColor)),J===void 0||J.attribute!==at||at&&J.data!==at.data)return!0;Z++}return c.attributesNum!==Z||c.index!==k}function y(O,F,q,k){const X={},Q=F.attributes;let Z=0;const ft=q.getAttributes();for(const B in ft)if(ft[B].location>=0){let J=Q[B];J===void 0&&(B==="instanceMatrix"&&O.instanceMatrix&&(J=O.instanceMatrix),B==="instanceColor"&&O.instanceColor&&(J=O.instanceColor));const at={};at.attribute=J,J&&J.data&&(at.data=J.data),X[B]=at,Z++}c.attributes=X,c.attributesNum=Z,c.index=k}function x(){const O=c.newAttributes;for(let F=0,q=O.length;F<q;F++)O[F]=0}function E(O){M(O,0)}function M(O,F){const q=c.newAttributes,k=c.enabledAttributes,X=c.attributeDivisors;q[O]=1,k[O]===0&&(r.enableVertexAttribArray(O),k[O]=1),X[O]!==F&&((n.isWebGL2?r:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](O,F),X[O]=F)}function R(){const O=c.newAttributes,F=c.enabledAttributes;for(let q=0,k=F.length;q<k;q++)F[q]!==O[q]&&(r.disableVertexAttribArray(q),F[q]=0)}function S(O,F,q,k,X,Q,Z){Z===!0?r.vertexAttribIPointer(O,F,q,X,Q):r.vertexAttribPointer(O,F,q,k,X,Q)}function A(O,F,q,k){if(n.isWebGL2===!1&&(O.isInstancedMesh||k.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;x();const X=k.attributes,Q=q.getAttributes(),Z=F.defaultAttributeValues;for(const ft in Q){const B=Q[ft];if(B.location>=0){let tt=X[ft];if(tt===void 0&&(ft==="instanceMatrix"&&O.instanceMatrix&&(tt=O.instanceMatrix),ft==="instanceColor"&&O.instanceColor&&(tt=O.instanceColor)),tt!==void 0){const J=tt.normalized,at=tt.itemSize,ct=e.get(tt);if(ct===void 0)continue;const gt=ct.buffer,Lt=ct.type,St=ct.bytesPerElement,Qt=n.isWebGL2===!0&&(Lt===r.INT||Lt===r.UNSIGNED_INT||tt.gpuType===Cc);if(tt.isInterleavedBufferAttribute){const Nt=tt.data,z=Nt.stride,le=tt.offset;if(Nt.isInstancedInterleavedBuffer){for(let vt=0;vt<B.locationSize;vt++)M(B.location+vt,Nt.meshPerAttribute);O.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=Nt.meshPerAttribute*Nt.count)}else for(let vt=0;vt<B.locationSize;vt++)E(B.location+vt);r.bindBuffer(r.ARRAY_BUFFER,gt);for(let vt=0;vt<B.locationSize;vt++)S(B.location+vt,at/B.locationSize,Lt,J,z*St,(le+at/B.locationSize*vt)*St,Qt)}else{if(tt.isInstancedBufferAttribute){for(let Nt=0;Nt<B.locationSize;Nt++)M(B.location+Nt,tt.meshPerAttribute);O.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let Nt=0;Nt<B.locationSize;Nt++)E(B.location+Nt);r.bindBuffer(r.ARRAY_BUFFER,gt);for(let Nt=0;Nt<B.locationSize;Nt++)S(B.location+Nt,at/B.locationSize,Lt,J,at*St,at/B.locationSize*Nt*St,Qt)}}else if(Z!==void 0){const J=Z[ft];if(J!==void 0)switch(J.length){case 2:r.vertexAttrib2fv(B.location,J);break;case 3:r.vertexAttrib3fv(B.location,J);break;case 4:r.vertexAttrib4fv(B.location,J);break;default:r.vertexAttrib1fv(B.location,J)}}}}R()}function g(){H();for(const O in o){const F=o[O];for(const q in F){const k=F[q];for(const X in k)v(k[X].object),delete k[X];delete F[q]}delete o[O]}}function T(O){if(o[O.id]===void 0)return;const F=o[O.id];for(const q in F){const k=F[q];for(const X in k)v(k[X].object),delete k[X];delete F[q]}delete o[O.id]}function U(O){for(const F in o){const q=o[F];if(q[O.id]===void 0)continue;const k=q[O.id];for(const X in k)v(k[X].object),delete k[X];delete q[O.id]}}function H(){D(),u=!0,c!==l&&(c=l,m(c.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:H,resetDefaultState:D,dispose:g,releaseStatesOfGeometry:T,releaseStatesOfProgram:U,initAttributes:x,enableAttribute:E,disableUnusedAttributes:R}}function vm(r,t,e,n){const i=n.isWebGL2;let s;function a(c){s=c}function o(c,u){r.drawArrays(s,c,u),e.update(u,s,1)}function l(c,u,h){if(h===0)return;let f,m;if(i)f=r,m="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](s,c,u,h),e.update(u,s,h)}this.setMode=a,this.render=o,this.renderInstances=l}function xm(r,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const S=t.get("EXT_texture_filter_anisotropic");n=r.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(S){if(S==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let o=e.precision!==void 0?e.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||t.has("WEBGL_draw_buffers"),u=e.logarithmicDepthBuffer===!0,h=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),f=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_TEXTURE_SIZE),v=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),p=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),d=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),x=f>0,E=a||t.has("OES_texture_float"),M=x&&E,R=a?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:v,maxAttributes:_,maxVertexUniforms:p,maxVaryings:d,maxFragmentUniforms:y,vertexTextures:x,floatFragmentTextures:E,floatVertexTextures:M,maxSamples:R}}function Mm(r){const t=this;let e=null,n=0,i=!1,s=!1;const a=new ci,o=new It,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const m=h.length!==0||f||n!==0||i;return i=f,n=h.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,m){const v=h.clippingPlanes,_=h.clipIntersection,p=h.clipShadows,d=r.get(h);if(!i||v===null||v.length===0||s&&!p)s?u(null):c();else{const y=s?0:n,x=y*4;let E=d.clippingState||null;l.value=E,E=u(v,f,x,m);for(let M=0;M!==x;++M)E[M]=e[M];d.clippingState=E,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,m,v){const _=h!==null?h.length:0;let p=null;if(_!==0){if(p=l.value,v!==!0||p===null){const d=m+_*4,y=f.matrixWorldInverse;o.getNormalMatrix(y),(p===null||p.length<d)&&(p=new Float32Array(d));for(let x=0,E=m;x!==_;++x,E+=4)a.copy(h[x]).applyMatrix4(y,o),a.normal.toArray(p,E),p[E+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function Sm(r){let t=new WeakMap;function e(a,o){return o===Ca?a.mapping=ir:o===Pa&&(a.mapping=rr),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===Ca||o===Pa)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Ff(l.height/2);return c.fromEquirectangularTexture(r,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class Zc extends Yc{constructor(t=-1,e=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ji=4,wl=[.125,.215,.35,.446,.526,.582],fi=20,fa=new Zc,Rl=new Gt;let da=null;const ui=(1+Math.sqrt(5))/2,Xi=1/ui,Cl=[new N(1,1,1),new N(-1,1,1),new N(1,1,-1),new N(-1,1,-1),new N(0,ui,Xi),new N(0,ui,-Xi),new N(Xi,0,ui),new N(-Xi,0,ui),new N(ui,Xi,0),new N(-ui,Xi,0)];class Pl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){da=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ul(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(da),t.scissorTest=!1,hs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ir||t.mapping===rr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),da=this._renderer.getRenderTarget();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:je,minFilter:je,generateMipmaps:!1,type:Pr,format:ln,colorSpace:vn,depthBuffer:!1},i=Ll(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ll(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Em(s)),this._blurMaterial=ym(s,t,e)}return i}_compileMaterial(t){const e=new pn(this._lodPlanes[0],t);this._renderer.compile(e,fa)}_sceneToCubeUV(t,e,n,i){const o=new Ke(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Rl),u.toneMapping=Un,u.autoClear=!1;const m=new Vc({name:"PMREM.Background",side:Pe,depthWrite:!1,depthTest:!1}),v=new pn(new kr,m);let _=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,_=!0):(m.color.copy(Rl),_=!0);for(let d=0;d<6;d++){const y=d%3;y===0?(o.up.set(0,l[d],0),o.lookAt(c[d],0,0)):y===1?(o.up.set(0,0,l[d]),o.lookAt(0,c[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,c[d]));const x=this._cubeSize;hs(i,y*x,d>2?x:0,x,x),u.setRenderTarget(i),_&&u.render(v,o),u.render(t,o)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===ir||t.mapping===rr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ul()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Dl());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new pn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;hs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,fa)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=Cl[(i-1)%Cl.length];this._blur(t,i-1,i,s,a)}e.autoClear=n}_blur(t,e,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",s),this._halfBlur(a,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new pn(this._lodPlanes[i],c),f=c.uniforms,m=this._sizeLods[n]-1,v=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*fi-1),_=s/v,p=isFinite(s)?1+Math.floor(u*_):fi;p>fi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${fi}`);const d=[];let y=0;for(let S=0;S<fi;++S){const A=S/_,g=Math.exp(-A*A/2);d.push(g),S===0?y+=g:S<p&&(y+=2*g)}for(let S=0;S<d.length;S++)d[S]=d[S]/y;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:x}=this;f.dTheta.value=v,f.mipInt.value=x-n;const E=this._sizeLods[i],M=3*E*(i>x-ji?i-x+ji:0),R=4*(this._cubeSize-E);hs(e,M,R,3*E,2*E),l.setRenderTarget(e),l.render(h,fa)}}function Em(r){const t=[],e=[],n=[];let i=r;const s=r-ji+1+wl.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>r-ji?l=wl[a-r+ji-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,v=6,_=3,p=2,d=1,y=new Float32Array(_*v*m),x=new Float32Array(p*v*m),E=new Float32Array(d*v*m);for(let R=0;R<m;R++){const S=R%3*2/3-1,A=R>2?0:-1,g=[S,A,0,S+2/3,A,0,S+2/3,A+1,0,S,A,0,S+2/3,A+1,0,S,A+1,0];y.set(g,_*v*R),x.set(f,p*v*R);const T=[R,R,R,R,R,R];E.set(T,d*v*R)}const M=new Mn;M.setAttribute("position",new _n(y,_)),M.setAttribute("uv",new _n(x,p)),M.setAttribute("faceIndex",new _n(E,d)),t.push(M),i>ji&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ll(r,t,e){const n=new Ei(r,t,e);return n.texture.mapping=Rs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function hs(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function ym(r,t,e){const n=new Float32Array(fi),i=new N(0,1,0);return new Ti({name:"SphericalGaussianBlur",defines:{n:fi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:oo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function Dl(){return new Ti({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:oo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function Ul(){return new Ti({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:oo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function oo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Tm(r){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Ca||l===Pa,u=l===ir||l===rr;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=t.get(o);return e===null&&(e=new Pl(r)),h=c?e.fromEquirectangular(o,h):e.fromCubemap(o,h),t.set(o,h),h.texture}else{if(t.has(o))return t.get(o).texture;{const h=o.image;if(c&&h&&h.height>0||u&&h&&i(h)){e===null&&(e=new Pl(r));const f=c?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,f),o.addEventListener("dispose",s),f.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function bm(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Am(r,t,e,n){const i={},s=new WeakMap;function a(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const v in f.attributes)t.remove(f.attributes[v]);for(const v in f.morphAttributes){const _=f.morphAttributes[v];for(let p=0,d=_.length;p<d;p++)t.remove(_[p])}f.removeEventListener("dispose",a),delete i[f.id];const m=s.get(f);m&&(t.remove(m),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(h,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,e.memory.geometries++),f}function l(h){const f=h.attributes;for(const v in f)t.update(f[v],r.ARRAY_BUFFER);const m=h.morphAttributes;for(const v in m){const _=m[v];for(let p=0,d=_.length;p<d;p++)t.update(_[p],r.ARRAY_BUFFER)}}function c(h){const f=[],m=h.index,v=h.attributes.position;let _=0;if(m!==null){const y=m.array;_=m.version;for(let x=0,E=y.length;x<E;x+=3){const M=y[x+0],R=y[x+1],S=y[x+2];f.push(M,R,R,S,S,M)}}else{const y=v.array;_=v.version;for(let x=0,E=y.length/3-1;x<E;x+=3){const M=x+0,R=x+1,S=x+2;f.push(M,R,R,S,S,M)}}const p=new(Bc(f)?Xc:Wc)(f,1);p.version=_;const d=s.get(h);d&&t.remove(d),s.set(h,p)}function u(h){const f=s.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function wm(r,t,e,n){const i=n.isWebGL2;let s;function a(f){s=f}let o,l;function c(f){o=f.type,l=f.bytesPerElement}function u(f,m){r.drawElements(s,m,o,f*l),e.update(m,s,1)}function h(f,m,v){if(v===0)return;let _,p;if(i)_=r,p="drawElementsInstanced";else if(_=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[p](s,m,o,f*l,v),e.update(m,s,v)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=h}function Rm(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case r.TRIANGLES:e.triangles+=o*(s/3);break;case r.LINES:e.lines+=o*(s/2);break;case r.LINE_STRIP:e.lines+=o*(s-1);break;case r.LINE_LOOP:e.lines+=o*s;break;case r.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Cm(r,t){return r[0]-t[0]}function Pm(r,t){return Math.abs(t[1])-Math.abs(r[1])}function Lm(r,t,e){const n={},i=new Float32Array(8),s=new WeakMap,a=new me,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,h){const f=c.morphTargetInfluences;if(t.isWebGL2===!0){const v=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=v!==void 0?v.length:0;let p=s.get(u);if(p===void 0||p.count!==_){let F=function(){D.dispose(),s.delete(u),u.removeEventListener("dispose",F)};var m=F;p!==void 0&&p.texture.dispose();const x=u.morphAttributes.position!==void 0,E=u.morphAttributes.normal!==void 0,M=u.morphAttributes.color!==void 0,R=u.morphAttributes.position||[],S=u.morphAttributes.normal||[],A=u.morphAttributes.color||[];let g=0;x===!0&&(g=1),E===!0&&(g=2),M===!0&&(g=3);let T=u.attributes.position.count*g,U=1;T>t.maxTextureSize&&(U=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);const H=new Float32Array(T*U*4*_),D=new kc(H,T,U,_);D.type=kn,D.needsUpdate=!0;const O=g*4;for(let q=0;q<_;q++){const k=R[q],X=S[q],Q=A[q],Z=T*U*4*q;for(let ft=0;ft<k.count;ft++){const B=ft*O;x===!0&&(a.fromBufferAttribute(k,ft),H[Z+B+0]=a.x,H[Z+B+1]=a.y,H[Z+B+2]=a.z,H[Z+B+3]=0),E===!0&&(a.fromBufferAttribute(X,ft),H[Z+B+4]=a.x,H[Z+B+5]=a.y,H[Z+B+6]=a.z,H[Z+B+7]=0),M===!0&&(a.fromBufferAttribute(Q,ft),H[Z+B+8]=a.x,H[Z+B+9]=a.y,H[Z+B+10]=a.z,H[Z+B+11]=Q.itemSize===4?a.w:1)}}p={count:_,texture:D,size:new Ct(T,U)},s.set(u,p),u.addEventListener("dispose",F)}let d=0;for(let x=0;x<f.length;x++)d+=f[x];const y=u.morphTargetsRelative?1:1-d;h.getUniforms().setValue(r,"morphTargetBaseInfluence",y),h.getUniforms().setValue(r,"morphTargetInfluences",f),h.getUniforms().setValue(r,"morphTargetsTexture",p.texture,e),h.getUniforms().setValue(r,"morphTargetsTextureSize",p.size)}else{const v=f===void 0?0:f.length;let _=n[u.id];if(_===void 0||_.length!==v){_=[];for(let E=0;E<v;E++)_[E]=[E,0];n[u.id]=_}for(let E=0;E<v;E++){const M=_[E];M[0]=E,M[1]=f[E]}_.sort(Pm);for(let E=0;E<8;E++)E<v&&_[E][1]?(o[E][0]=_[E][0],o[E][1]=_[E][1]):(o[E][0]=Number.MAX_SAFE_INTEGER,o[E][1]=0);o.sort(Cm);const p=u.morphAttributes.position,d=u.morphAttributes.normal;let y=0;for(let E=0;E<8;E++){const M=o[E],R=M[0],S=M[1];R!==Number.MAX_SAFE_INTEGER&&S?(p&&u.getAttribute("morphTarget"+E)!==p[R]&&u.setAttribute("morphTarget"+E,p[R]),d&&u.getAttribute("morphNormal"+E)!==d[R]&&u.setAttribute("morphNormal"+E,d[R]),i[E]=S,y+=S):(p&&u.hasAttribute("morphTarget"+E)===!0&&u.deleteAttribute("morphTarget"+E),d&&u.hasAttribute("morphNormal"+E)===!0&&u.deleteAttribute("morphNormal"+E),i[E]=0)}const x=u.morphTargetsRelative?1:1-y;h.getUniforms().setValue(r,"morphTargetBaseInfluence",x),h.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function Dm(r,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=t.get(l,u);return i.get(h)!==c&&(t.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER)),h}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}const $c=new Le,Jc=new kc,Qc=new Sf,tu=new jc,Il=[],Nl=[],Ol=new Float32Array(16),Fl=new Float32Array(9),Bl=new Float32Array(4);function pr(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=Il[i];if(s===void 0&&(s=new Float32Array(i),Il[i]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(s,o)}return s}function ue(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function he(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Ls(r,t){let e=Nl[t];e===void 0&&(e=new Int32Array(t),Nl[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function Um(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function Im(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ue(e,t))return;r.uniform2fv(this.addr,t),he(e,t)}}function Nm(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ue(e,t))return;r.uniform3fv(this.addr,t),he(e,t)}}function Om(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ue(e,t))return;r.uniform4fv(this.addr,t),he(e,t)}}function Fm(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(ue(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),he(e,t)}else{if(ue(e,n))return;Bl.set(n),r.uniformMatrix2fv(this.addr,!1,Bl),he(e,n)}}function Bm(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(ue(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),he(e,t)}else{if(ue(e,n))return;Fl.set(n),r.uniformMatrix3fv(this.addr,!1,Fl),he(e,n)}}function zm(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(ue(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),he(e,t)}else{if(ue(e,n))return;Ol.set(n),r.uniformMatrix4fv(this.addr,!1,Ol),he(e,n)}}function Gm(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function km(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ue(e,t))return;r.uniform2iv(this.addr,t),he(e,t)}}function Hm(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ue(e,t))return;r.uniform3iv(this.addr,t),he(e,t)}}function Vm(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ue(e,t))return;r.uniform4iv(this.addr,t),he(e,t)}}function Wm(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function Xm(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ue(e,t))return;r.uniform2uiv(this.addr,t),he(e,t)}}function qm(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ue(e,t))return;r.uniform3uiv(this.addr,t),he(e,t)}}function Ym(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ue(e,t))return;r.uniform4uiv(this.addr,t),he(e,t)}}function jm(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2D(t||$c,i)}function Km(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Qc,i)}function Zm(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||tu,i)}function $m(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Jc,i)}function Jm(r){switch(r){case 5126:return Um;case 35664:return Im;case 35665:return Nm;case 35666:return Om;case 35674:return Fm;case 35675:return Bm;case 35676:return zm;case 5124:case 35670:return Gm;case 35667:case 35671:return km;case 35668:case 35672:return Hm;case 35669:case 35673:return Vm;case 5125:return Wm;case 36294:return Xm;case 36295:return qm;case 36296:return Ym;case 35678:case 36198:case 36298:case 36306:case 35682:return jm;case 35679:case 36299:case 36307:return Km;case 35680:case 36300:case 36308:case 36293:return Zm;case 36289:case 36303:case 36311:case 36292:return $m}}function Qm(r,t){r.uniform1fv(this.addr,t)}function t_(r,t){const e=pr(t,this.size,2);r.uniform2fv(this.addr,e)}function e_(r,t){const e=pr(t,this.size,3);r.uniform3fv(this.addr,e)}function n_(r,t){const e=pr(t,this.size,4);r.uniform4fv(this.addr,e)}function i_(r,t){const e=pr(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function r_(r,t){const e=pr(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function s_(r,t){const e=pr(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function a_(r,t){r.uniform1iv(this.addr,t)}function o_(r,t){r.uniform2iv(this.addr,t)}function l_(r,t){r.uniform3iv(this.addr,t)}function c_(r,t){r.uniform4iv(this.addr,t)}function u_(r,t){r.uniform1uiv(this.addr,t)}function h_(r,t){r.uniform2uiv(this.addr,t)}function f_(r,t){r.uniform3uiv(this.addr,t)}function d_(r,t){r.uniform4uiv(this.addr,t)}function p_(r,t,e){const n=this.cache,i=t.length,s=Ls(e,i);ue(n,s)||(r.uniform1iv(this.addr,s),he(n,s));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||$c,s[a])}function m_(r,t,e){const n=this.cache,i=t.length,s=Ls(e,i);ue(n,s)||(r.uniform1iv(this.addr,s),he(n,s));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||Qc,s[a])}function __(r,t,e){const n=this.cache,i=t.length,s=Ls(e,i);ue(n,s)||(r.uniform1iv(this.addr,s),he(n,s));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||tu,s[a])}function g_(r,t,e){const n=this.cache,i=t.length,s=Ls(e,i);ue(n,s)||(r.uniform1iv(this.addr,s),he(n,s));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||Jc,s[a])}function v_(r){switch(r){case 5126:return Qm;case 35664:return t_;case 35665:return e_;case 35666:return n_;case 35674:return i_;case 35675:return r_;case 35676:return s_;case 5124:case 35670:return a_;case 35667:case 35671:return o_;case 35668:case 35672:return l_;case 35669:case 35673:return c_;case 5125:return u_;case 36294:return h_;case 36295:return f_;case 36296:return d_;case 35678:case 36198:case 36298:case 36306:case 35682:return p_;case 35679:case 36299:case 36307:return m_;case 35680:case 36300:case 36308:case 36293:return __;case 36289:case 36303:case 36311:case 36292:return g_}}class x_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=Jm(e.type)}}class M_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=v_(e.type)}}class S_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(t,e[o.id],n)}}}const pa=/(\w+)(\])?(\[|\.)?/g;function zl(r,t){r.seq.push(t),r.map[t.id]=t}function E_(r,t,e){const n=r.name,i=n.length;for(pa.lastIndex=0;;){const s=pa.exec(n),a=pa.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){zl(e,c===void 0?new x_(o,r,t):new M_(o,r,t));break}else{let h=e.map[o];h===void 0&&(h=new S_(o),zl(e,h)),e=h}}}class ms{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),a=t.getUniformLocation(e,s.name);E_(s,a,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function Gl(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}let y_=0;function T_(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function b_(r){switch(r){case vn:return["Linear","( value )"];case Rt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),["Linear","( value )"]}}function kl(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+T_(r.getShaderSource(t),a)}else return i}function A_(r,t){const e=b_(t);return"vec4 "+r+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function w_(r,t){let e;switch(t){case Bh:e="Linear";break;case zh:e="Reinhard";break;case Gh:e="OptimizedCineon";break;case kh:e="ACESFilmic";break;case Hh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function R_(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Er).join(`
`)}function C_(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function P_(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:r.getAttribLocation(t,a),locationSize:o}}return e}function Er(r){return r!==""}function Hl(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Vl(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const L_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Oa(r){return r.replace(L_,D_)}function D_(r,t){const e=Dt[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return Oa(e)}const U_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wl(r){return r.replace(U_,I_)}function I_(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Xl(r){let t="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function N_(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Tc?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===_h?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Rn&&(t="SHADOWMAP_TYPE_VSM"),t}function O_(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case ir:case rr:t="ENVMAP_TYPE_CUBE";break;case Rs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function F_(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case rr:t="ENVMAP_MODE_REFRACTION";break}return t}function B_(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case wc:t="ENVMAP_BLENDING_MULTIPLY";break;case Oh:t="ENVMAP_BLENDING_MIX";break;case Fh:t="ENVMAP_BLENDING_ADD";break}return t}function z_(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function G_(r,t,e,n){const i=r.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=N_(e),c=O_(e),u=F_(e),h=B_(e),f=z_(e),m=e.isWebGL2?"":R_(e),v=C_(s),_=i.createProgram();let p,d,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Er).join(`
`),p.length>0&&(p+=`
`),d=[m,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Er).join(`
`),d.length>0&&(d+=`
`)):(p=[Xl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Er).join(`
`),d=[m,Xl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Un?"#define TONE_MAPPING":"",e.toneMapping!==Un?Dt.tonemapping_pars_fragment:"",e.toneMapping!==Un?w_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Dt.encodings_pars_fragment,A_("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Er).join(`
`)),a=Oa(a),a=Hl(a,e),a=Vl(a,e),o=Oa(o),o=Hl(o,e),o=Vl(o,e),a=Wl(a),o=Wl(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",e.glslVersion===ul?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ul?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const x=y+p+a,E=y+d+o,M=Gl(i,i.VERTEX_SHADER,x),R=Gl(i,i.FRAGMENT_SHADER,E);if(i.attachShader(_,M),i.attachShader(_,R),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_),r.debug.checkShaderErrors){const g=i.getProgramInfoLog(_).trim(),T=i.getShaderInfoLog(M).trim(),U=i.getShaderInfoLog(R).trim();let H=!0,D=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(H=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,M,R);else{const O=kl(i,M,"vertex"),F=kl(i,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Program Info Log: `+g+`
`+O+`
`+F)}else g!==""?console.warn("THREE.WebGLProgram: Program Info Log:",g):(T===""||U==="")&&(D=!1);D&&(this.diagnostics={runnable:H,programLog:g,vertexShader:{log:T,prefix:p},fragmentShader:{log:U,prefix:d}})}i.deleteShader(M),i.deleteShader(R);let S;this.getUniforms=function(){return S===void 0&&(S=new ms(i,_)),S};let A;return this.getAttributes=function(){return A===void 0&&(A=P_(i,_)),A},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=y_++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=M,this.fragmentShader=R,this}let k_=0;class H_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new V_(t),e.set(t,n)),n}}class V_{constructor(t){this.id=k_++,this.code=t,this.usedTimes=0}}function W_(r,t,e,n,i,s,a){const o=new ro,l=new H_,c=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,f=i.vertexTextures;let m=i.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(g){return g===0?"uv":`uv${g}`}function p(g,T,U,H,D){const O=H.fog,F=D.geometry,q=g.isMeshStandardMaterial?H.environment:null,k=(g.isMeshStandardMaterial?e:t).get(g.envMap||q),X=k&&k.mapping===Rs?k.image.height:null,Q=v[g.type];g.precision!==null&&(m=i.getMaxPrecision(g.precision),m!==g.precision&&console.warn("THREE.WebGLProgram.getParameters:",g.precision,"not supported, using",m,"instead."));const Z=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,ft=Z!==void 0?Z.length:0;let B=0;F.morphAttributes.position!==void 0&&(B=1),F.morphAttributes.normal!==void 0&&(B=2),F.morphAttributes.color!==void 0&&(B=3);let tt,J,at,ct;if(Q){const ne=fn[Q];tt=ne.vertexShader,J=ne.fragmentShader}else tt=g.vertexShader,J=g.fragmentShader,l.update(g),at=l.getVertexShaderID(g),ct=l.getFragmentShaderID(g);const gt=r.getRenderTarget(),Lt=D.isInstancedMesh===!0,St=!!g.map,Qt=!!g.matcap,Nt=!!k,z=!!g.aoMap,le=!!g.lightMap,vt=!!g.bumpMap,wt=!!g.normalMap,xt=!!g.displacementMap,Vt=!!g.emissiveMap,Ut=!!g.metalnessMap,bt=!!g.roughnessMap,Ht=g.anisotropy>0,ce=g.clearcoat>0,fe=g.iridescence>0,C=g.sheen>0,b=g.transmission>0,Y=Ht&&!!g.anisotropyMap,it=ce&&!!g.clearcoatMap,nt=ce&&!!g.clearcoatNormalMap,P=ce&&!!g.clearcoatRoughnessMap,$=fe&&!!g.iridescenceMap,et=fe&&!!g.iridescenceThicknessMap,W=C&&!!g.sheenColorMap,dt=C&&!!g.sheenRoughnessMap,_t=!!g.specularMap,mt=!!g.specularColorMap,pt=!!g.specularIntensityMap,ut=b&&!!g.transmissionMap,Et=b&&!!g.thicknessMap,Ft=!!g.gradientMap,L=!!g.alphaMap,ot=g.alphaTest>0,V=!!g.extensions,rt=!!F.attributes.uv1,lt=!!F.attributes.uv2,kt=!!F.attributes.uv3;return{isWebGL2:u,shaderID:Q,shaderType:g.type,shaderName:g.name,vertexShader:tt,fragmentShader:J,defines:g.defines,customVertexShaderID:at,customFragmentShaderID:ct,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:m,instancing:Lt,instancingColor:Lt&&D.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:gt===null?r.outputColorSpace:gt.isXRRenderTarget===!0?gt.texture.colorSpace:vn,map:St,matcap:Qt,envMap:Nt,envMapMode:Nt&&k.mapping,envMapCubeUVHeight:X,aoMap:z,lightMap:le,bumpMap:vt,normalMap:wt,displacementMap:f&&xt,emissiveMap:Vt,normalMapObjectSpace:wt&&g.normalMapType===ef,normalMapTangentSpace:wt&&g.normalMapType===Oc,metalnessMap:Ut,roughnessMap:bt,anisotropy:Ht,anisotropyMap:Y,clearcoat:ce,clearcoatMap:it,clearcoatNormalMap:nt,clearcoatRoughnessMap:P,iridescence:fe,iridescenceMap:$,iridescenceThicknessMap:et,sheen:C,sheenColorMap:W,sheenRoughnessMap:dt,specularMap:_t,specularColorMap:mt,specularIntensityMap:pt,transmission:b,transmissionMap:ut,thicknessMap:Et,gradientMap:Ft,opaque:g.transparent===!1&&g.blending===Ji,alphaMap:L,alphaTest:ot,combine:g.combine,mapUv:St&&_(g.map.channel),aoMapUv:z&&_(g.aoMap.channel),lightMapUv:le&&_(g.lightMap.channel),bumpMapUv:vt&&_(g.bumpMap.channel),normalMapUv:wt&&_(g.normalMap.channel),displacementMapUv:xt&&_(g.displacementMap.channel),emissiveMapUv:Vt&&_(g.emissiveMap.channel),metalnessMapUv:Ut&&_(g.metalnessMap.channel),roughnessMapUv:bt&&_(g.roughnessMap.channel),anisotropyMapUv:Y&&_(g.anisotropyMap.channel),clearcoatMapUv:it&&_(g.clearcoatMap.channel),clearcoatNormalMapUv:nt&&_(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:P&&_(g.clearcoatRoughnessMap.channel),iridescenceMapUv:$&&_(g.iridescenceMap.channel),iridescenceThicknessMapUv:et&&_(g.iridescenceThicknessMap.channel),sheenColorMapUv:W&&_(g.sheenColorMap.channel),sheenRoughnessMapUv:dt&&_(g.sheenRoughnessMap.channel),specularMapUv:_t&&_(g.specularMap.channel),specularColorMapUv:mt&&_(g.specularColorMap.channel),specularIntensityMapUv:pt&&_(g.specularIntensityMap.channel),transmissionMapUv:ut&&_(g.transmissionMap.channel),thicknessMapUv:Et&&_(g.thicknessMap.channel),alphaMapUv:L&&_(g.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(wt||Ht),vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUv1s:rt,vertexUv2s:lt,vertexUv3s:kt,pointsUvs:D.isPoints===!0&&!!F.attributes.uv&&(St||L),fog:!!O,useFog:g.fog===!0,fogExp2:O&&O.isFogExp2,flatShading:g.flatShading===!0,sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:D.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:ft,morphTextureStride:B,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:g.dithering,shadowMapEnabled:r.shadowMap.enabled&&U.length>0,shadowMapType:r.shadowMap.type,toneMapping:g.toneMapped?r.toneMapping:Un,useLegacyLights:r.useLegacyLights,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===Ln,flipSided:g.side===Pe,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionDerivatives:V&&g.extensions.derivatives===!0,extensionFragDepth:V&&g.extensions.fragDepth===!0,extensionDrawBuffers:V&&g.extensions.drawBuffers===!0,extensionShaderTextureLOD:V&&g.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:g.customProgramCacheKey()}}function d(g){const T=[];if(g.shaderID?T.push(g.shaderID):(T.push(g.customVertexShaderID),T.push(g.customFragmentShaderID)),g.defines!==void 0)for(const U in g.defines)T.push(U),T.push(g.defines[U]);return g.isRawShaderMaterial===!1&&(y(T,g),x(T,g),T.push(r.outputColorSpace)),T.push(g.customProgramCacheKey),T.join()}function y(g,T){g.push(T.precision),g.push(T.outputColorSpace),g.push(T.envMapMode),g.push(T.envMapCubeUVHeight),g.push(T.mapUv),g.push(T.alphaMapUv),g.push(T.lightMapUv),g.push(T.aoMapUv),g.push(T.bumpMapUv),g.push(T.normalMapUv),g.push(T.displacementMapUv),g.push(T.emissiveMapUv),g.push(T.metalnessMapUv),g.push(T.roughnessMapUv),g.push(T.anisotropyMapUv),g.push(T.clearcoatMapUv),g.push(T.clearcoatNormalMapUv),g.push(T.clearcoatRoughnessMapUv),g.push(T.iridescenceMapUv),g.push(T.iridescenceThicknessMapUv),g.push(T.sheenColorMapUv),g.push(T.sheenRoughnessMapUv),g.push(T.specularMapUv),g.push(T.specularColorMapUv),g.push(T.specularIntensityMapUv),g.push(T.transmissionMapUv),g.push(T.thicknessMapUv),g.push(T.combine),g.push(T.fogExp2),g.push(T.sizeAttenuation),g.push(T.morphTargetsCount),g.push(T.morphAttributeCount),g.push(T.numDirLights),g.push(T.numPointLights),g.push(T.numSpotLights),g.push(T.numSpotLightMaps),g.push(T.numHemiLights),g.push(T.numRectAreaLights),g.push(T.numDirLightShadows),g.push(T.numPointLightShadows),g.push(T.numSpotLightShadows),g.push(T.numSpotLightShadowsWithMaps),g.push(T.shadowMapType),g.push(T.toneMapping),g.push(T.numClippingPlanes),g.push(T.numClipIntersection),g.push(T.depthPacking)}function x(g,T){o.disableAll(),T.isWebGL2&&o.enable(0),T.supportsVertexTextures&&o.enable(1),T.instancing&&o.enable(2),T.instancingColor&&o.enable(3),T.matcap&&o.enable(4),T.envMap&&o.enable(5),T.normalMapObjectSpace&&o.enable(6),T.normalMapTangentSpace&&o.enable(7),T.clearcoat&&o.enable(8),T.iridescence&&o.enable(9),T.alphaTest&&o.enable(10),T.vertexColors&&o.enable(11),T.vertexAlphas&&o.enable(12),T.vertexUv1s&&o.enable(13),T.vertexUv2s&&o.enable(14),T.vertexUv3s&&o.enable(15),T.vertexTangents&&o.enable(16),T.anisotropy&&o.enable(17),g.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.skinning&&o.enable(4),T.morphTargets&&o.enable(5),T.morphNormals&&o.enable(6),T.morphColors&&o.enable(7),T.premultipliedAlpha&&o.enable(8),T.shadowMapEnabled&&o.enable(9),T.useLegacyLights&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),g.push(o.mask)}function E(g){const T=v[g.type];let U;if(T){const H=fn[T];U=Uf.clone(H.uniforms)}else U=g.uniforms;return U}function M(g,T){let U;for(let H=0,D=c.length;H<D;H++){const O=c[H];if(O.cacheKey===T){U=O,++U.usedTimes;break}}return U===void 0&&(U=new G_(r,T,g,s),c.push(U)),U}function R(g){if(--g.usedTimes===0){const T=c.indexOf(g);c[T]=c[c.length-1],c.pop(),g.destroy()}}function S(g){l.remove(g)}function A(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:E,acquireProgram:M,releaseProgram:R,releaseShaderCache:S,programs:c,dispose:A}}function X_(){let r=new WeakMap;function t(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function e(s){r.delete(s)}function n(s,a,o){r.get(s)[a]=o}function i(){r=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function q_(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function ql(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Yl(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function a(h,f,m,v,_,p){let d=r[t];return d===void 0?(d={id:h.id,object:h,geometry:f,material:m,groupOrder:v,renderOrder:h.renderOrder,z:_,group:p},r[t]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=m,d.groupOrder=v,d.renderOrder=h.renderOrder,d.z=_,d.group=p),t++,d}function o(h,f,m,v,_,p){const d=a(h,f,m,v,_,p);m.transmission>0?n.push(d):m.transparent===!0?i.push(d):e.push(d)}function l(h,f,m,v,_,p){const d=a(h,f,m,v,_,p);m.transmission>0?n.unshift(d):m.transparent===!0?i.unshift(d):e.unshift(d)}function c(h,f){e.length>1&&e.sort(h||q_),n.length>1&&n.sort(f||ql),i.length>1&&i.sort(f||ql)}function u(){for(let h=t,f=r.length;h<f;h++){const m=r[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:u,sort:c}}function Y_(){let r=new WeakMap;function t(n,i){const s=r.get(n);let a;return s===void 0?(a=new Yl,r.set(n,[a])):i>=s.length?(a=new Yl,s.push(a)):a=s[i],a}function e(){r=new WeakMap}return{get:t,dispose:e}}function j_(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new Gt};break;case"SpotLight":e={position:new N,direction:new N,color:new Gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new Gt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new Gt,groundColor:new Gt};break;case"RectAreaLight":e={color:new Gt,position:new N,halfWidth:new N,halfHeight:new N};break}return r[t.id]=e,e}}}function K_(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let Z_=0;function $_(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function J_(r,t){const e=new j_,n=K_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new N);const s=new N,a=new oe,o=new oe;function l(u,h){let f=0,m=0,v=0;for(let U=0;U<9;U++)i.probe[U].set(0,0,0);let _=0,p=0,d=0,y=0,x=0,E=0,M=0,R=0,S=0,A=0;u.sort($_);const g=h===!0?Math.PI:1;for(let U=0,H=u.length;U<H;U++){const D=u[U],O=D.color,F=D.intensity,q=D.distance,k=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)f+=O.r*F*g,m+=O.g*F*g,v+=O.b*F*g;else if(D.isLightProbe)for(let X=0;X<9;X++)i.probe[X].addScaledVector(D.sh.coefficients[X],F);else if(D.isDirectionalLight){const X=e.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity*g),D.castShadow){const Q=D.shadow,Z=n.get(D);Z.shadowBias=Q.bias,Z.shadowNormalBias=Q.normalBias,Z.shadowRadius=Q.radius,Z.shadowMapSize=Q.mapSize,i.directionalShadow[_]=Z,i.directionalShadowMap[_]=k,i.directionalShadowMatrix[_]=D.shadow.matrix,E++}i.directional[_]=X,_++}else if(D.isSpotLight){const X=e.get(D);X.position.setFromMatrixPosition(D.matrixWorld),X.color.copy(O).multiplyScalar(F*g),X.distance=q,X.coneCos=Math.cos(D.angle),X.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),X.decay=D.decay,i.spot[d]=X;const Q=D.shadow;if(D.map&&(i.spotLightMap[S]=D.map,S++,Q.updateMatrices(D),D.castShadow&&A++),i.spotLightMatrix[d]=Q.matrix,D.castShadow){const Z=n.get(D);Z.shadowBias=Q.bias,Z.shadowNormalBias=Q.normalBias,Z.shadowRadius=Q.radius,Z.shadowMapSize=Q.mapSize,i.spotShadow[d]=Z,i.spotShadowMap[d]=k,R++}d++}else if(D.isRectAreaLight){const X=e.get(D);X.color.copy(O).multiplyScalar(F),X.halfWidth.set(D.width*.5,0,0),X.halfHeight.set(0,D.height*.5,0),i.rectArea[y]=X,y++}else if(D.isPointLight){const X=e.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity*g),X.distance=D.distance,X.decay=D.decay,D.castShadow){const Q=D.shadow,Z=n.get(D);Z.shadowBias=Q.bias,Z.shadowNormalBias=Q.normalBias,Z.shadowRadius=Q.radius,Z.shadowMapSize=Q.mapSize,Z.shadowCameraNear=Q.camera.near,Z.shadowCameraFar=Q.camera.far,i.pointShadow[p]=Z,i.pointShadowMap[p]=k,i.pointShadowMatrix[p]=D.shadow.matrix,M++}i.point[p]=X,p++}else if(D.isHemisphereLight){const X=e.get(D);X.skyColor.copy(D.color).multiplyScalar(F*g),X.groundColor.copy(D.groundColor).multiplyScalar(F*g),i.hemi[x]=X,x++}}y>0&&(t.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=st.LTC_FLOAT_1,i.rectAreaLTC2=st.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=st.LTC_HALF_1,i.rectAreaLTC2=st.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=m,i.ambient[2]=v;const T=i.hash;(T.directionalLength!==_||T.pointLength!==p||T.spotLength!==d||T.rectAreaLength!==y||T.hemiLength!==x||T.numDirectionalShadows!==E||T.numPointShadows!==M||T.numSpotShadows!==R||T.numSpotMaps!==S)&&(i.directional.length=_,i.spot.length=d,i.rectArea.length=y,i.point.length=p,i.hemi.length=x,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=R,i.spotShadowMap.length=R,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=R+S-A,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=A,T.directionalLength=_,T.pointLength=p,T.spotLength=d,T.rectAreaLength=y,T.hemiLength=x,T.numDirectionalShadows=E,T.numPointShadows=M,T.numSpotShadows=R,T.numSpotMaps=S,i.version=Z_++)}function c(u,h){let f=0,m=0,v=0,_=0,p=0;const d=h.matrixWorldInverse;for(let y=0,x=u.length;y<x;y++){const E=u[y];if(E.isDirectionalLight){const M=i.directional[f];M.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(d),f++}else if(E.isSpotLight){const M=i.spot[v];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(d),M.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(d),v++}else if(E.isRectAreaLight){const M=i.rectArea[_];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(d),o.identity(),a.copy(E.matrixWorld),a.premultiply(d),o.extractRotation(a),M.halfWidth.set(E.width*.5,0,0),M.halfHeight.set(0,E.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),_++}else if(E.isPointLight){const M=i.point[m];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(d),m++}else if(E.isHemisphereLight){const M=i.hemi[p];M.direction.setFromMatrixPosition(E.matrixWorld),M.direction.transformDirection(d),p++}}}return{setup:l,setupView:c,state:i}}function jl(r,t){const e=new J_(r,t),n=[],i=[];function s(){n.length=0,i.length=0}function a(h){n.push(h)}function o(h){i.push(h)}function l(h){e.setup(n,h)}function c(h){e.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Q_(r,t){let e=new WeakMap;function n(s,a=0){const o=e.get(s);let l;return o===void 0?(l=new jl(r,t),e.set(s,[l])):a>=o.length?(l=new jl(r,t),o.push(l)):l=o[a],l}function i(){e=new WeakMap}return{get:n,dispose:i}}class tg extends dr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Qh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class eg extends dr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const ng=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ig=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function rg(r,t,e){let n=new so;const i=new Ct,s=new Ct,a=new me,o=new tg({depthPacking:tf}),l=new eg,c={},u=e.maxTextureSize,h={[Kn]:Pe,[Pe]:Kn,[Ln]:Ln},f=new Ti({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ct},radius:{value:4}},vertexShader:ng,fragmentShader:ig}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const v=new Mn;v.setAttribute("position",new _n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new pn(v,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Tc;let d=this.type;this.render=function(M,R,S){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||M.length===0)return;const A=r.getRenderTarget(),g=r.getActiveCubeFace(),T=r.getActiveMipmapLevel(),U=r.state;U.setBlending(Xn),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const H=d!==Rn&&this.type===Rn,D=d===Rn&&this.type!==Rn;for(let O=0,F=M.length;O<F;O++){const q=M[O],k=q.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);const X=k.getFrameExtents();if(i.multiply(X),s.copy(k.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/X.x),i.x=s.x*X.x,k.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/X.y),i.y=s.y*X.y,k.mapSize.y=s.y)),k.map===null||H===!0||D===!0){const Z=this.type!==Rn?{minFilter:we,magFilter:we}:{};k.map!==null&&k.map.dispose(),k.map=new Ei(i.x,i.y,Z),k.map.texture.name=q.name+".shadowMap",k.camera.updateProjectionMatrix()}r.setRenderTarget(k.map),r.clear();const Q=k.getViewportCount();for(let Z=0;Z<Q;Z++){const ft=k.getViewport(Z);a.set(s.x*ft.x,s.y*ft.y,s.x*ft.z,s.y*ft.w),U.viewport(a),k.updateMatrices(q,Z),n=k.getFrustum(),E(R,S,k.camera,q,this.type)}k.isPointLightShadow!==!0&&this.type===Rn&&y(k,S),k.needsUpdate=!1}d=this.type,p.needsUpdate=!1,r.setRenderTarget(A,g,T)};function y(M,R){const S=t.update(_);f.defines.VSM_SAMPLES!==M.blurSamples&&(f.defines.VSM_SAMPLES=M.blurSamples,m.defines.VSM_SAMPLES=M.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Ei(i.x,i.y)),f.uniforms.shadow_pass.value=M.map.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,r.setRenderTarget(M.mapPass),r.clear(),r.renderBufferDirect(R,null,S,f,_,null),m.uniforms.shadow_pass.value=M.mapPass.texture,m.uniforms.resolution.value=M.mapSize,m.uniforms.radius.value=M.radius,r.setRenderTarget(M.map),r.clear(),r.renderBufferDirect(R,null,S,m,_,null)}function x(M,R,S,A){let g=null;const T=S.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(T!==void 0)g=T;else if(g=S.isPointLight===!0?l:o,r.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const U=g.uuid,H=R.uuid;let D=c[U];D===void 0&&(D={},c[U]=D);let O=D[H];O===void 0&&(O=g.clone(),D[H]=O),g=O}if(g.visible=R.visible,g.wireframe=R.wireframe,A===Rn?g.side=R.shadowSide!==null?R.shadowSide:R.side:g.side=R.shadowSide!==null?R.shadowSide:h[R.side],g.alphaMap=R.alphaMap,g.alphaTest=R.alphaTest,g.map=R.map,g.clipShadows=R.clipShadows,g.clippingPlanes=R.clippingPlanes,g.clipIntersection=R.clipIntersection,g.displacementMap=R.displacementMap,g.displacementScale=R.displacementScale,g.displacementBias=R.displacementBias,g.wireframeLinewidth=R.wireframeLinewidth,g.linewidth=R.linewidth,S.isPointLight===!0&&g.isMeshDistanceMaterial===!0){const U=r.properties.get(g);U.light=S}return g}function E(M,R,S,A,g){if(M.visible===!1)return;if(M.layers.test(R.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&g===Rn)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,M.matrixWorld);const H=t.update(M),D=M.material;if(Array.isArray(D)){const O=H.groups;for(let F=0,q=O.length;F<q;F++){const k=O[F],X=D[k.materialIndex];if(X&&X.visible){const Q=x(M,X,A,g);r.renderBufferDirect(S,null,H,Q,M,k)}}}else if(D.visible){const O=x(M,D,A,g);r.renderBufferDirect(S,null,H,O,M,null)}}const U=M.children;for(let H=0,D=U.length;H<D;H++)E(U[H],R,S,A,g)}}function sg(r,t,e){const n=e.isWebGL2;function i(){let L=!1;const ot=new me;let V=null;const rt=new me(0,0,0,0);return{setMask:function(lt){V!==lt&&!L&&(r.colorMask(lt,lt,lt,lt),V=lt)},setLocked:function(lt){L=lt},setClear:function(lt,kt,Kt,ne,ti){ti===!0&&(lt*=ne,kt*=ne,Kt*=ne),ot.set(lt,kt,Kt,ne),rt.equals(ot)===!1&&(r.clearColor(lt,kt,Kt,ne),rt.copy(ot))},reset:function(){L=!1,V=null,rt.set(-1,0,0,0)}}}function s(){let L=!1,ot=null,V=null,rt=null;return{setTest:function(lt){lt?gt(r.DEPTH_TEST):Lt(r.DEPTH_TEST)},setMask:function(lt){ot!==lt&&!L&&(r.depthMask(lt),ot=lt)},setFunc:function(lt){if(V!==lt){switch(lt){case Ch:r.depthFunc(r.NEVER);break;case Ph:r.depthFunc(r.ALWAYS);break;case Lh:r.depthFunc(r.LESS);break;case Ra:r.depthFunc(r.LEQUAL);break;case Dh:r.depthFunc(r.EQUAL);break;case Uh:r.depthFunc(r.GEQUAL);break;case Ih:r.depthFunc(r.GREATER);break;case Nh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}V=lt}},setLocked:function(lt){L=lt},setClear:function(lt){rt!==lt&&(r.clearDepth(lt),rt=lt)},reset:function(){L=!1,ot=null,V=null,rt=null}}}function a(){let L=!1,ot=null,V=null,rt=null,lt=null,kt=null,Kt=null,ne=null,ti=null;return{setTest:function(Zt){L||(Zt?gt(r.STENCIL_TEST):Lt(r.STENCIL_TEST))},setMask:function(Zt){ot!==Zt&&!L&&(r.stencilMask(Zt),ot=Zt)},setFunc:function(Zt,hn,Te){(V!==Zt||rt!==hn||lt!==Te)&&(r.stencilFunc(Zt,hn,Te),V=Zt,rt=hn,lt=Te)},setOp:function(Zt,hn,Te){(kt!==Zt||Kt!==hn||ne!==Te)&&(r.stencilOp(Zt,hn,Te),kt=Zt,Kt=hn,ne=Te)},setLocked:function(Zt){L=Zt},setClear:function(Zt){ti!==Zt&&(r.clearStencil(Zt),ti=Zt)},reset:function(){L=!1,ot=null,V=null,rt=null,lt=null,kt=null,Kt=null,ne=null,ti=null}}}const o=new i,l=new s,c=new a,u=new WeakMap,h=new WeakMap;let f={},m={},v=new WeakMap,_=[],p=null,d=!1,y=null,x=null,E=null,M=null,R=null,S=null,A=null,g=!1,T=null,U=null,H=null,D=null,O=null;const F=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,k=0;const X=r.getParameter(r.VERSION);X.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(X)[1]),q=k>=1):X.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),q=k>=2);let Q=null,Z={};const ft=r.getParameter(r.SCISSOR_BOX),B=r.getParameter(r.VIEWPORT),tt=new me().fromArray(ft),J=new me().fromArray(B);function at(L,ot,V,rt){const lt=new Uint8Array(4),kt=r.createTexture();r.bindTexture(L,kt),r.texParameteri(L,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(L,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Kt=0;Kt<V;Kt++)n&&(L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY)?r.texImage3D(ot,0,r.RGBA,1,1,rt,0,r.RGBA,r.UNSIGNED_BYTE,lt):r.texImage2D(ot+Kt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,lt);return kt}const ct={};ct[r.TEXTURE_2D]=at(r.TEXTURE_2D,r.TEXTURE_2D,1),ct[r.TEXTURE_CUBE_MAP]=at(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(ct[r.TEXTURE_2D_ARRAY]=at(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ct[r.TEXTURE_3D]=at(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),gt(r.DEPTH_TEST),l.setFunc(Ra),xt(!1),Vt(Uo),gt(r.CULL_FACE),vt(Xn);function gt(L){f[L]!==!0&&(r.enable(L),f[L]=!0)}function Lt(L){f[L]!==!1&&(r.disable(L),f[L]=!1)}function St(L,ot){return m[L]!==ot?(r.bindFramebuffer(L,ot),m[L]=ot,n&&(L===r.DRAW_FRAMEBUFFER&&(m[r.FRAMEBUFFER]=ot),L===r.FRAMEBUFFER&&(m[r.DRAW_FRAMEBUFFER]=ot)),!0):!1}function Qt(L,ot){let V=_,rt=!1;if(L)if(V=v.get(ot),V===void 0&&(V=[],v.set(ot,V)),L.isWebGLMultipleRenderTargets){const lt=L.texture;if(V.length!==lt.length||V[0]!==r.COLOR_ATTACHMENT0){for(let kt=0,Kt=lt.length;kt<Kt;kt++)V[kt]=r.COLOR_ATTACHMENT0+kt;V.length=lt.length,rt=!0}}else V[0]!==r.COLOR_ATTACHMENT0&&(V[0]=r.COLOR_ATTACHMENT0,rt=!0);else V[0]!==r.BACK&&(V[0]=r.BACK,rt=!0);rt&&(e.isWebGL2?r.drawBuffers(V):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(V))}function Nt(L){return p!==L?(r.useProgram(L),p=L,!0):!1}const z={[Yi]:r.FUNC_ADD,[vh]:r.FUNC_SUBTRACT,[xh]:r.FUNC_REVERSE_SUBTRACT};if(n)z[Fo]=r.MIN,z[Bo]=r.MAX;else{const L=t.get("EXT_blend_minmax");L!==null&&(z[Fo]=L.MIN_EXT,z[Bo]=L.MAX_EXT)}const le={[Mh]:r.ZERO,[Sh]:r.ONE,[Eh]:r.SRC_COLOR,[bc]:r.SRC_ALPHA,[Rh]:r.SRC_ALPHA_SATURATE,[Ah]:r.DST_COLOR,[Th]:r.DST_ALPHA,[yh]:r.ONE_MINUS_SRC_COLOR,[Ac]:r.ONE_MINUS_SRC_ALPHA,[wh]:r.ONE_MINUS_DST_COLOR,[bh]:r.ONE_MINUS_DST_ALPHA};function vt(L,ot,V,rt,lt,kt,Kt,ne){if(L===Xn){d===!0&&(Lt(r.BLEND),d=!1);return}if(d===!1&&(gt(r.BLEND),d=!0),L!==gh){if(L!==y||ne!==g){if((x!==Yi||R!==Yi)&&(r.blendEquation(r.FUNC_ADD),x=Yi,R=Yi),ne)switch(L){case Ji:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Io:r.blendFunc(r.ONE,r.ONE);break;case No:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Oo:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Ji:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Io:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case No:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Oo:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}E=null,M=null,S=null,A=null,y=L,g=ne}return}lt=lt||ot,kt=kt||V,Kt=Kt||rt,(ot!==x||lt!==R)&&(r.blendEquationSeparate(z[ot],z[lt]),x=ot,R=lt),(V!==E||rt!==M||kt!==S||Kt!==A)&&(r.blendFuncSeparate(le[V],le[rt],le[kt],le[Kt]),E=V,M=rt,S=kt,A=Kt),y=L,g=!1}function wt(L,ot){L.side===Ln?Lt(r.CULL_FACE):gt(r.CULL_FACE);let V=L.side===Pe;ot&&(V=!V),xt(V),L.blending===Ji&&L.transparent===!1?vt(Xn):vt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),o.setMask(L.colorWrite);const rt=L.stencilWrite;c.setTest(rt),rt&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),bt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?gt(r.SAMPLE_ALPHA_TO_COVERAGE):Lt(r.SAMPLE_ALPHA_TO_COVERAGE)}function xt(L){T!==L&&(L?r.frontFace(r.CW):r.frontFace(r.CCW),T=L)}function Vt(L){L!==ph?(gt(r.CULL_FACE),L!==U&&(L===Uo?r.cullFace(r.BACK):L===mh?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Lt(r.CULL_FACE),U=L}function Ut(L){L!==H&&(q&&r.lineWidth(L),H=L)}function bt(L,ot,V){L?(gt(r.POLYGON_OFFSET_FILL),(D!==ot||O!==V)&&(r.polygonOffset(ot,V),D=ot,O=V)):Lt(r.POLYGON_OFFSET_FILL)}function Ht(L){L?gt(r.SCISSOR_TEST):Lt(r.SCISSOR_TEST)}function ce(L){L===void 0&&(L=r.TEXTURE0+F-1),Q!==L&&(r.activeTexture(L),Q=L)}function fe(L,ot,V){V===void 0&&(Q===null?V=r.TEXTURE0+F-1:V=Q);let rt=Z[V];rt===void 0&&(rt={type:void 0,texture:void 0},Z[V]=rt),(rt.type!==L||rt.texture!==ot)&&(Q!==V&&(r.activeTexture(V),Q=V),r.bindTexture(L,ot||ct[L]),rt.type=L,rt.texture=ot)}function C(){const L=Z[Q];L!==void 0&&L.type!==void 0&&(r.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function b(){try{r.compressedTexImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Y(){try{r.compressedTexImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function it(){try{r.texSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function nt(){try{r.texSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function P(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function $(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function et(){try{r.texStorage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function W(){try{r.texStorage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function dt(){try{r.texImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function _t(){try{r.texImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function mt(L){tt.equals(L)===!1&&(r.scissor(L.x,L.y,L.z,L.w),tt.copy(L))}function pt(L){J.equals(L)===!1&&(r.viewport(L.x,L.y,L.z,L.w),J.copy(L))}function ut(L,ot){let V=h.get(ot);V===void 0&&(V=new WeakMap,h.set(ot,V));let rt=V.get(L);rt===void 0&&(rt=r.getUniformBlockIndex(ot,L.name),V.set(L,rt))}function Et(L,ot){const rt=h.get(ot).get(L);u.get(ot)!==rt&&(r.uniformBlockBinding(ot,rt,L.__bindingPointIndex),u.set(ot,rt))}function Ft(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),f={},Q=null,Z={},m={},v=new WeakMap,_=[],p=null,d=!1,y=null,x=null,E=null,M=null,R=null,S=null,A=null,g=!1,T=null,U=null,H=null,D=null,O=null,tt.set(0,0,r.canvas.width,r.canvas.height),J.set(0,0,r.canvas.width,r.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:gt,disable:Lt,bindFramebuffer:St,drawBuffers:Qt,useProgram:Nt,setBlending:vt,setMaterial:wt,setFlipSided:xt,setCullFace:Vt,setLineWidth:Ut,setPolygonOffset:bt,setScissorTest:Ht,activeTexture:ce,bindTexture:fe,unbindTexture:C,compressedTexImage2D:b,compressedTexImage3D:Y,texImage2D:dt,texImage3D:_t,updateUBOMapping:ut,uniformBlockBinding:Et,texStorage2D:et,texStorage3D:W,texSubImage2D:it,texSubImage3D:nt,compressedTexSubImage2D:P,compressedTexSubImage3D:$,scissor:mt,viewport:pt,reset:Ft}}function ag(r,t,e,n,i,s,a){const o=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),v=new WeakMap;let _;const p=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(C,b){return d?new OffscreenCanvas(C,b):Lr("canvas")}function x(C,b,Y,it){let nt=1;if((C.width>it||C.height>it)&&(nt=it/Math.max(C.width,C.height)),nt<1||b===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const P=b?Na:Math.floor,$=P(nt*C.width),et=P(nt*C.height);_===void 0&&(_=y($,et));const W=Y?y($,et):_;return W.width=$,W.height=et,W.getContext("2d").drawImage(C,0,0,$,et),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+$+"x"+et+")."),W}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function E(C){return hl(C.width)&&hl(C.height)}function M(C){return o?!1:C.wrapS!==on||C.wrapT!==on||C.minFilter!==we&&C.minFilter!==je}function R(C,b){return C.generateMipmaps&&b&&C.minFilter!==we&&C.minFilter!==je}function S(C){r.generateMipmap(C)}function A(C,b,Y,it,nt=!1){if(o===!1)return b;if(C!==null){if(r[C]!==void 0)return r[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let P=b;return b===r.RED&&(Y===r.FLOAT&&(P=r.R32F),Y===r.HALF_FLOAT&&(P=r.R16F),Y===r.UNSIGNED_BYTE&&(P=r.R8)),b===r.RG&&(Y===r.FLOAT&&(P=r.RG32F),Y===r.HALF_FLOAT&&(P=r.RG16F),Y===r.UNSIGNED_BYTE&&(P=r.RG8)),b===r.RGBA&&(Y===r.FLOAT&&(P=r.RGBA32F),Y===r.HALF_FLOAT&&(P=r.RGBA16F),Y===r.UNSIGNED_BYTE&&(P=it===Rt&&nt===!1?r.SRGB8_ALPHA8:r.RGBA8),Y===r.UNSIGNED_SHORT_4_4_4_4&&(P=r.RGBA4),Y===r.UNSIGNED_SHORT_5_5_5_1&&(P=r.RGB5_A1)),(P===r.R16F||P===r.R32F||P===r.RG16F||P===r.RG32F||P===r.RGBA16F||P===r.RGBA32F)&&t.get("EXT_color_buffer_float"),P}function g(C,b,Y){return R(C,Y)===!0||C.isFramebufferTexture&&C.minFilter!==we&&C.minFilter!==je?Math.log2(Math.max(b.width,b.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?b.mipmaps.length:1}function T(C){return C===we||C===zo||C===Gs?r.NEAREST:r.LINEAR}function U(C){const b=C.target;b.removeEventListener("dispose",U),D(b),b.isVideoTexture&&v.delete(b)}function H(C){const b=C.target;b.removeEventListener("dispose",H),F(b)}function D(C){const b=n.get(C);if(b.__webglInit===void 0)return;const Y=C.source,it=p.get(Y);if(it){const nt=it[b.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&O(C),Object.keys(it).length===0&&p.delete(Y)}n.remove(C)}function O(C){const b=n.get(C);r.deleteTexture(b.__webglTexture);const Y=C.source,it=p.get(Y);delete it[b.__cacheKey],a.memory.textures--}function F(C){const b=C.texture,Y=n.get(C),it=n.get(b);if(it.__webglTexture!==void 0&&(r.deleteTexture(it.__webglTexture),a.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++)r.deleteFramebuffer(Y.__webglFramebuffer[nt]),Y.__webglDepthbuffer&&r.deleteRenderbuffer(Y.__webglDepthbuffer[nt]);else{if(r.deleteFramebuffer(Y.__webglFramebuffer),Y.__webglDepthbuffer&&r.deleteRenderbuffer(Y.__webglDepthbuffer),Y.__webglMultisampledFramebuffer&&r.deleteFramebuffer(Y.__webglMultisampledFramebuffer),Y.__webglColorRenderbuffer)for(let nt=0;nt<Y.__webglColorRenderbuffer.length;nt++)Y.__webglColorRenderbuffer[nt]&&r.deleteRenderbuffer(Y.__webglColorRenderbuffer[nt]);Y.__webglDepthRenderbuffer&&r.deleteRenderbuffer(Y.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let nt=0,P=b.length;nt<P;nt++){const $=n.get(b[nt]);$.__webglTexture&&(r.deleteTexture($.__webglTexture),a.memory.textures--),n.remove(b[nt])}n.remove(b),n.remove(C)}let q=0;function k(){q=0}function X(){const C=q;return C>=l&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+l),q+=1,C}function Q(C){const b=[];return b.push(C.wrapS),b.push(C.wrapT),b.push(C.wrapR||0),b.push(C.magFilter),b.push(C.minFilter),b.push(C.anisotropy),b.push(C.internalFormat),b.push(C.format),b.push(C.type),b.push(C.generateMipmaps),b.push(C.premultiplyAlpha),b.push(C.flipY),b.push(C.unpackAlignment),b.push(C.colorSpace),b.join()}function Z(C,b){const Y=n.get(C);if(C.isVideoTexture&&ce(C),C.isRenderTargetTexture===!1&&C.version>0&&Y.__version!==C.version){const it=C.image;if(it===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(it.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{St(Y,C,b);return}}e.bindTexture(r.TEXTURE_2D,Y.__webglTexture,r.TEXTURE0+b)}function ft(C,b){const Y=n.get(C);if(C.version>0&&Y.__version!==C.version){St(Y,C,b);return}e.bindTexture(r.TEXTURE_2D_ARRAY,Y.__webglTexture,r.TEXTURE0+b)}function B(C,b){const Y=n.get(C);if(C.version>0&&Y.__version!==C.version){St(Y,C,b);return}e.bindTexture(r.TEXTURE_3D,Y.__webglTexture,r.TEXTURE0+b)}function tt(C,b){const Y=n.get(C);if(C.version>0&&Y.__version!==C.version){Qt(Y,C,b);return}e.bindTexture(r.TEXTURE_CUBE_MAP,Y.__webglTexture,r.TEXTURE0+b)}const J={[La]:r.REPEAT,[on]:r.CLAMP_TO_EDGE,[Da]:r.MIRRORED_REPEAT},at={[we]:r.NEAREST,[zo]:r.NEAREST_MIPMAP_NEAREST,[Gs]:r.NEAREST_MIPMAP_LINEAR,[je]:r.LINEAR,[Vh]:r.LINEAR_MIPMAP_NEAREST,[Cr]:r.LINEAR_MIPMAP_LINEAR},ct={[rf]:r.NEVER,[hf]:r.ALWAYS,[sf]:r.LESS,[of]:r.LEQUAL,[af]:r.EQUAL,[uf]:r.GEQUAL,[lf]:r.GREATER,[cf]:r.NOTEQUAL};function gt(C,b,Y){if(Y?(r.texParameteri(C,r.TEXTURE_WRAP_S,J[b.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,J[b.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,J[b.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,at[b.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,at[b.minFilter])):(r.texParameteri(C,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(C,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(b.wrapS!==on||b.wrapT!==on)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(C,r.TEXTURE_MAG_FILTER,T(b.magFilter)),r.texParameteri(C,r.TEXTURE_MIN_FILTER,T(b.minFilter)),b.minFilter!==we&&b.minFilter!==je&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),b.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,ct[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const it=t.get("EXT_texture_filter_anisotropic");if(b.magFilter===we||b.minFilter!==Gs&&b.minFilter!==Cr||b.type===kn&&t.has("OES_texture_float_linear")===!1||o===!1&&b.type===Pr&&t.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||n.get(b).__currentAnisotropy)&&(r.texParameterf(C,it.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy)}}function Lt(C,b){let Y=!1;C.__webglInit===void 0&&(C.__webglInit=!0,b.addEventListener("dispose",U));const it=b.source;let nt=p.get(it);nt===void 0&&(nt={},p.set(it,nt));const P=Q(b);if(P!==C.__cacheKey){nt[P]===void 0&&(nt[P]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,Y=!0),nt[P].usedTimes++;const $=nt[C.__cacheKey];$!==void 0&&(nt[C.__cacheKey].usedTimes--,$.usedTimes===0&&O(b)),C.__cacheKey=P,C.__webglTexture=nt[P].texture}return Y}function St(C,b,Y){let it=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(it=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(it=r.TEXTURE_3D);const nt=Lt(C,b),P=b.source;e.bindTexture(it,C.__webglTexture,r.TEXTURE0+Y);const $=n.get(P);if(P.version!==$.__version||nt===!0){e.activeTexture(r.TEXTURE0+Y),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.NONE);const et=M(b)&&E(b.image)===!1;let W=x(b.image,et,!1,u);W=fe(b,W);const dt=E(W)||o,_t=s.convert(b.format,b.colorSpace);let mt=s.convert(b.type),pt=A(b.internalFormat,_t,mt,b.colorSpace);gt(it,b,dt);let ut;const Et=b.mipmaps,Ft=o&&b.isVideoTexture!==!0,L=$.__version===void 0||nt===!0,ot=g(b,W,dt);if(b.isDepthTexture)pt=r.DEPTH_COMPONENT,o?b.type===kn?pt=r.DEPTH_COMPONENT32F:b.type===Gn?pt=r.DEPTH_COMPONENT24:b.type===pi?pt=r.DEPTH24_STENCIL8:pt=r.DEPTH_COMPONENT16:b.type===kn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===mi&&pt===r.DEPTH_COMPONENT&&b.type!==no&&b.type!==Gn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=Gn,mt=s.convert(b.type)),b.format===sr&&pt===r.DEPTH_COMPONENT&&(pt=r.DEPTH_STENCIL,b.type!==pi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=pi,mt=s.convert(b.type))),L&&(Ft?e.texStorage2D(r.TEXTURE_2D,1,pt,W.width,W.height):e.texImage2D(r.TEXTURE_2D,0,pt,W.width,W.height,0,_t,mt,null));else if(b.isDataTexture)if(Et.length>0&&dt){Ft&&L&&e.texStorage2D(r.TEXTURE_2D,ot,pt,Et[0].width,Et[0].height);for(let V=0,rt=Et.length;V<rt;V++)ut=Et[V],Ft?e.texSubImage2D(r.TEXTURE_2D,V,0,0,ut.width,ut.height,_t,mt,ut.data):e.texImage2D(r.TEXTURE_2D,V,pt,ut.width,ut.height,0,_t,mt,ut.data);b.generateMipmaps=!1}else Ft?(L&&e.texStorage2D(r.TEXTURE_2D,ot,pt,W.width,W.height),e.texSubImage2D(r.TEXTURE_2D,0,0,0,W.width,W.height,_t,mt,W.data)):e.texImage2D(r.TEXTURE_2D,0,pt,W.width,W.height,0,_t,mt,W.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Ft&&L&&e.texStorage3D(r.TEXTURE_2D_ARRAY,ot,pt,Et[0].width,Et[0].height,W.depth);for(let V=0,rt=Et.length;V<rt;V++)ut=Et[V],b.format!==ln?_t!==null?Ft?e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,V,0,0,0,ut.width,ut.height,W.depth,_t,ut.data,0,0):e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,V,pt,ut.width,ut.height,W.depth,0,ut.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ft?e.texSubImage3D(r.TEXTURE_2D_ARRAY,V,0,0,0,ut.width,ut.height,W.depth,_t,mt,ut.data):e.texImage3D(r.TEXTURE_2D_ARRAY,V,pt,ut.width,ut.height,W.depth,0,_t,mt,ut.data)}else{Ft&&L&&e.texStorage2D(r.TEXTURE_2D,ot,pt,Et[0].width,Et[0].height);for(let V=0,rt=Et.length;V<rt;V++)ut=Et[V],b.format!==ln?_t!==null?Ft?e.compressedTexSubImage2D(r.TEXTURE_2D,V,0,0,ut.width,ut.height,_t,ut.data):e.compressedTexImage2D(r.TEXTURE_2D,V,pt,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ft?e.texSubImage2D(r.TEXTURE_2D,V,0,0,ut.width,ut.height,_t,mt,ut.data):e.texImage2D(r.TEXTURE_2D,V,pt,ut.width,ut.height,0,_t,mt,ut.data)}else if(b.isDataArrayTexture)Ft?(L&&e.texStorage3D(r.TEXTURE_2D_ARRAY,ot,pt,W.width,W.height,W.depth),e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,W.width,W.height,W.depth,_t,mt,W.data)):e.texImage3D(r.TEXTURE_2D_ARRAY,0,pt,W.width,W.height,W.depth,0,_t,mt,W.data);else if(b.isData3DTexture)Ft?(L&&e.texStorage3D(r.TEXTURE_3D,ot,pt,W.width,W.height,W.depth),e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,W.width,W.height,W.depth,_t,mt,W.data)):e.texImage3D(r.TEXTURE_3D,0,pt,W.width,W.height,W.depth,0,_t,mt,W.data);else if(b.isFramebufferTexture){if(L)if(Ft)e.texStorage2D(r.TEXTURE_2D,ot,pt,W.width,W.height);else{let V=W.width,rt=W.height;for(let lt=0;lt<ot;lt++)e.texImage2D(r.TEXTURE_2D,lt,pt,V,rt,0,_t,mt,null),V>>=1,rt>>=1}}else if(Et.length>0&&dt){Ft&&L&&e.texStorage2D(r.TEXTURE_2D,ot,pt,Et[0].width,Et[0].height);for(let V=0,rt=Et.length;V<rt;V++)ut=Et[V],Ft?e.texSubImage2D(r.TEXTURE_2D,V,0,0,_t,mt,ut):e.texImage2D(r.TEXTURE_2D,V,pt,_t,mt,ut);b.generateMipmaps=!1}else Ft?(L&&e.texStorage2D(r.TEXTURE_2D,ot,pt,W.width,W.height),e.texSubImage2D(r.TEXTURE_2D,0,0,0,_t,mt,W)):e.texImage2D(r.TEXTURE_2D,0,pt,_t,mt,W);R(b,dt)&&S(it),$.__version=P.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function Qt(C,b,Y){if(b.image.length!==6)return;const it=Lt(C,b),nt=b.source;e.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+Y);const P=n.get(nt);if(nt.version!==P.__version||it===!0){e.activeTexture(r.TEXTURE0+Y),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.NONE);const $=b.isCompressedTexture||b.image[0].isCompressedTexture,et=b.image[0]&&b.image[0].isDataTexture,W=[];for(let V=0;V<6;V++)!$&&!et?W[V]=x(b.image[V],!1,!0,c):W[V]=et?b.image[V].image:b.image[V],W[V]=fe(b,W[V]);const dt=W[0],_t=E(dt)||o,mt=s.convert(b.format,b.colorSpace),pt=s.convert(b.type),ut=A(b.internalFormat,mt,pt,b.colorSpace),Et=o&&b.isVideoTexture!==!0,Ft=P.__version===void 0||it===!0;let L=g(b,dt,_t);gt(r.TEXTURE_CUBE_MAP,b,_t);let ot;if($){Et&&Ft&&e.texStorage2D(r.TEXTURE_CUBE_MAP,L,ut,dt.width,dt.height);for(let V=0;V<6;V++){ot=W[V].mipmaps;for(let rt=0;rt<ot.length;rt++){const lt=ot[rt];b.format!==ln?mt!==null?Et?e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+V,rt,0,0,lt.width,lt.height,mt,lt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+V,rt,ut,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Et?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+V,rt,0,0,lt.width,lt.height,mt,pt,lt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+V,rt,ut,lt.width,lt.height,0,mt,pt,lt.data)}}}else{ot=b.mipmaps,Et&&Ft&&(ot.length>0&&L++,e.texStorage2D(r.TEXTURE_CUBE_MAP,L,ut,W[0].width,W[0].height));for(let V=0;V<6;V++)if(et){Et?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,0,0,W[V].width,W[V].height,mt,pt,W[V].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,ut,W[V].width,W[V].height,0,mt,pt,W[V].data);for(let rt=0;rt<ot.length;rt++){const kt=ot[rt].image[V].image;Et?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+V,rt+1,0,0,kt.width,kt.height,mt,pt,kt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+V,rt+1,ut,kt.width,kt.height,0,mt,pt,kt.data)}}else{Et?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,0,0,mt,pt,W[V]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,ut,mt,pt,W[V]);for(let rt=0;rt<ot.length;rt++){const lt=ot[rt];Et?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+V,rt+1,0,0,mt,pt,lt.image[V]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+V,rt+1,ut,mt,pt,lt.image[V])}}}R(b,_t)&&S(r.TEXTURE_CUBE_MAP),P.__version=nt.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function Nt(C,b,Y,it,nt){const P=s.convert(Y.format,Y.colorSpace),$=s.convert(Y.type),et=A(Y.internalFormat,P,$,Y.colorSpace);n.get(b).__hasExternalTextures||(nt===r.TEXTURE_3D||nt===r.TEXTURE_2D_ARRAY?e.texImage3D(nt,0,et,b.width,b.height,b.depth,0,P,$,null):e.texImage2D(nt,0,et,b.width,b.height,0,P,$,null)),e.bindFramebuffer(r.FRAMEBUFFER,C),Ht(b)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,it,nt,n.get(Y).__webglTexture,0,bt(b)):(nt===r.TEXTURE_2D||nt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,it,nt,n.get(Y).__webglTexture,0),e.bindFramebuffer(r.FRAMEBUFFER,null)}function z(C,b,Y){if(r.bindRenderbuffer(r.RENDERBUFFER,C),b.depthBuffer&&!b.stencilBuffer){let it=r.DEPTH_COMPONENT16;if(Y||Ht(b)){const nt=b.depthTexture;nt&&nt.isDepthTexture&&(nt.type===kn?it=r.DEPTH_COMPONENT32F:nt.type===Gn&&(it=r.DEPTH_COMPONENT24));const P=bt(b);Ht(b)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,P,it,b.width,b.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,P,it,b.width,b.height)}else r.renderbufferStorage(r.RENDERBUFFER,it,b.width,b.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,C)}else if(b.depthBuffer&&b.stencilBuffer){const it=bt(b);Y&&Ht(b)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,it,r.DEPTH24_STENCIL8,b.width,b.height):Ht(b)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,it,r.DEPTH24_STENCIL8,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,C)}else{const it=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let nt=0;nt<it.length;nt++){const P=it[nt],$=s.convert(P.format,P.colorSpace),et=s.convert(P.type),W=A(P.internalFormat,$,et,P.colorSpace),dt=bt(b);Y&&Ht(b)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,dt,W,b.width,b.height):Ht(b)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,dt,W,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,W,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function le(C,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,C),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),Z(b.depthTexture,0);const it=n.get(b.depthTexture).__webglTexture,nt=bt(b);if(b.depthTexture.format===mi)Ht(b)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,it,0,nt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,it,0);else if(b.depthTexture.format===sr)Ht(b)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,it,0,nt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,it,0);else throw new Error("Unknown depthTexture format")}function vt(C){const b=n.get(C),Y=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!b.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");le(b.__webglFramebuffer,C)}else if(Y){b.__webglDepthbuffer=[];for(let it=0;it<6;it++)e.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[it]),b.__webglDepthbuffer[it]=r.createRenderbuffer(),z(b.__webglDepthbuffer[it],C,!1)}else e.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=r.createRenderbuffer(),z(b.__webglDepthbuffer,C,!1);e.bindFramebuffer(r.FRAMEBUFFER,null)}function wt(C,b,Y){const it=n.get(C);b!==void 0&&Nt(it.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D),Y!==void 0&&vt(C)}function xt(C){const b=C.texture,Y=n.get(C),it=n.get(b);C.addEventListener("dispose",H),C.isWebGLMultipleRenderTargets!==!0&&(it.__webglTexture===void 0&&(it.__webglTexture=r.createTexture()),it.__version=b.version,a.memory.textures++);const nt=C.isWebGLCubeRenderTarget===!0,P=C.isWebGLMultipleRenderTargets===!0,$=E(C)||o;if(nt){Y.__webglFramebuffer=[];for(let et=0;et<6;et++)Y.__webglFramebuffer[et]=r.createFramebuffer()}else{if(Y.__webglFramebuffer=r.createFramebuffer(),P)if(i.drawBuffers){const et=C.texture;for(let W=0,dt=et.length;W<dt;W++){const _t=n.get(et[W]);_t.__webglTexture===void 0&&(_t.__webglTexture=r.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&C.samples>0&&Ht(C)===!1){const et=P?b:[b];Y.__webglMultisampledFramebuffer=r.createFramebuffer(),Y.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let W=0;W<et.length;W++){const dt=et[W];Y.__webglColorRenderbuffer[W]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Y.__webglColorRenderbuffer[W]);const _t=s.convert(dt.format,dt.colorSpace),mt=s.convert(dt.type),pt=A(dt.internalFormat,_t,mt,dt.colorSpace,C.isXRRenderTarget===!0),ut=bt(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,ut,pt,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+W,r.RENDERBUFFER,Y.__webglColorRenderbuffer[W])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(Y.__webglDepthRenderbuffer=r.createRenderbuffer(),z(Y.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(nt){e.bindTexture(r.TEXTURE_CUBE_MAP,it.__webglTexture),gt(r.TEXTURE_CUBE_MAP,b,$);for(let et=0;et<6;et++)Nt(Y.__webglFramebuffer[et],C,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+et);R(b,$)&&S(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(P){const et=C.texture;for(let W=0,dt=et.length;W<dt;W++){const _t=et[W],mt=n.get(_t);e.bindTexture(r.TEXTURE_2D,mt.__webglTexture),gt(r.TEXTURE_2D,_t,$),Nt(Y.__webglFramebuffer,C,_t,r.COLOR_ATTACHMENT0+W,r.TEXTURE_2D),R(_t,$)&&S(r.TEXTURE_2D)}e.unbindTexture()}else{let et=r.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(o?et=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(et,it.__webglTexture),gt(et,b,$),Nt(Y.__webglFramebuffer,C,b,r.COLOR_ATTACHMENT0,et),R(b,$)&&S(et),e.unbindTexture()}C.depthBuffer&&vt(C)}function Vt(C){const b=E(C)||o,Y=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let it=0,nt=Y.length;it<nt;it++){const P=Y[it];if(R(P,b)){const $=C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,et=n.get(P).__webglTexture;e.bindTexture($,et),S($),e.unbindTexture()}}}function Ut(C){if(o&&C.samples>0&&Ht(C)===!1){const b=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],Y=C.width,it=C.height;let nt=r.COLOR_BUFFER_BIT;const P=[],$=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,et=n.get(C),W=C.isWebGLMultipleRenderTargets===!0;if(W)for(let dt=0;dt<b.length;dt++)e.bindFramebuffer(r.FRAMEBUFFER,et.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+dt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,et.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+dt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,et.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,et.__webglFramebuffer);for(let dt=0;dt<b.length;dt++){P.push(r.COLOR_ATTACHMENT0+dt),C.depthBuffer&&P.push($);const _t=et.__ignoreDepthValues!==void 0?et.__ignoreDepthValues:!1;if(_t===!1&&(C.depthBuffer&&(nt|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&(nt|=r.STENCIL_BUFFER_BIT)),W&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,et.__webglColorRenderbuffer[dt]),_t===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[$]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[$])),W){const mt=n.get(b[dt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,mt,0)}r.blitFramebuffer(0,0,Y,it,0,0,Y,it,nt,r.NEAREST),m&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,P)}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),W)for(let dt=0;dt<b.length;dt++){e.bindFramebuffer(r.FRAMEBUFFER,et.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+dt,r.RENDERBUFFER,et.__webglColorRenderbuffer[dt]);const _t=n.get(b[dt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,et.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+dt,r.TEXTURE_2D,_t,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,et.__webglMultisampledFramebuffer)}}function bt(C){return Math.min(h,C.samples)}function Ht(C){const b=n.get(C);return o&&C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function ce(C){const b=a.render.frame;v.get(C)!==b&&(v.set(C,b),C.update())}function fe(C,b){const Y=C.colorSpace,it=C.format,nt=C.type;return C.isCompressedTexture===!0||C.format===Ua||Y!==vn&&Y!==gi&&(Y===Rt?o===!1?t.has("EXT_sRGB")===!0&&it===ln?(C.format=Ua,C.minFilter=je,C.generateMipmaps=!1):b=zc.sRGBToLinear(b):(it!==ln||nt!==qn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),b}this.allocateTextureUnit=X,this.resetTextureUnits=k,this.setTexture2D=Z,this.setTexture2DArray=ft,this.setTexture3D=B,this.setTextureCube=tt,this.rebindTextures=wt,this.setupRenderTarget=xt,this.updateRenderTargetMipmap=Vt,this.updateMultisampleRenderTarget=Ut,this.setupDepthRenderbuffer=vt,this.setupFrameBufferTexture=Nt,this.useMultisampledRTT=Ht}function og(r,t,e){const n=e.isWebGL2;function i(s,a=gi){let o;if(s===qn)return r.UNSIGNED_BYTE;if(s===Pc)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Lc)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Wh)return r.BYTE;if(s===Xh)return r.SHORT;if(s===no)return r.UNSIGNED_SHORT;if(s===Cc)return r.INT;if(s===Gn)return r.UNSIGNED_INT;if(s===kn)return r.FLOAT;if(s===Pr)return n?r.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===qh)return r.ALPHA;if(s===ln)return r.RGBA;if(s===Yh)return r.LUMINANCE;if(s===jh)return r.LUMINANCE_ALPHA;if(s===mi)return r.DEPTH_COMPONENT;if(s===sr)return r.DEPTH_STENCIL;if(s===Ua)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Kh)return r.RED;if(s===Dc)return r.RED_INTEGER;if(s===Zh)return r.RG;if(s===Uc)return r.RG_INTEGER;if(s===Ic)return r.RGBA_INTEGER;if(s===ks||s===Hs||s===Vs||s===Ws)if(a===Rt)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===ks)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Hs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Vs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ws)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===ks)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Hs)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Vs)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ws)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Go||s===ko||s===Ho||s===Vo)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Go)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ko)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Ho)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Vo)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===$h)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Wo||s===Xo)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Wo)return a===Rt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Xo)return a===Rt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===qo||s===Yo||s===jo||s===Ko||s===Zo||s===$o||s===Jo||s===Qo||s===tl||s===el||s===nl||s===il||s===rl||s===sl)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(s===qo)return a===Rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Yo)return a===Rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===jo)return a===Rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Ko)return a===Rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Zo)return a===Rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===$o)return a===Rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Jo)return a===Rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Qo)return a===Rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===tl)return a===Rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===el)return a===Rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===nl)return a===Rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===il)return a===Rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===rl)return a===Rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===sl)return a===Rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Xs)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(s===Xs)return a===Rt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===Jh||s===al||s===ol||s===ll)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(s===Xs)return o.COMPRESSED_RED_RGTC1_EXT;if(s===al)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===ol)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===ll)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===pi?n?r.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class lg extends Ke{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class fs extends _e{constructor(){super(),this.isGroup=!0,this.type="Group"}}const cg={type:"move"};class ma{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const p=e.getJointPose(_,n),d=this._getHandJoint(c,_);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),m=.02,v=.005;c.inputState.pinching&&f>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(cg)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new fs;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class ug extends Le{constructor(t,e,n,i,s,a,o,l,c,u){if(u=u!==void 0?u:mi,u!==mi&&u!==sr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===mi&&(n=Gn),n===void 0&&u===sr&&(n=pi),super(null,i,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:we,this.minFilter=l!==void 0?l:we,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class hg extends Ai{constructor(t,e){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,m=null,v=null;const _=e.getContextAttributes();let p=null,d=null;const y=[],x=[];let E=null;const M=new Ke;M.layers.enable(1),M.viewport=new me;const R=new Ke;R.layers.enable(2),R.viewport=new me;const S=[M,R],A=new lg;A.layers.enable(1),A.layers.enable(2);let g=null,T=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getCamera=function(){},this.setUserCamera=function(B){E=B},this.getController=function(B){let tt=y[B];return tt===void 0&&(tt=new ma,y[B]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(B){let tt=y[B];return tt===void 0&&(tt=new ma,y[B]=tt),tt.getGripSpace()},this.getHand=function(B){let tt=y[B];return tt===void 0&&(tt=new ma,y[B]=tt),tt.getHandSpace()};function U(B){const tt=x.indexOf(B.inputSource);if(tt===-1)return;const J=y[tt];J!==void 0&&(J.update(B.inputSource,B.frame,c||a),J.dispatchEvent({type:B.type,data:B.inputSource}))}function H(){i.removeEventListener("select",U),i.removeEventListener("selectstart",U),i.removeEventListener("selectend",U),i.removeEventListener("squeeze",U),i.removeEventListener("squeezestart",U),i.removeEventListener("squeezeend",U),i.removeEventListener("end",H),i.removeEventListener("inputsourceschange",D);for(let B=0;B<y.length;B++){const tt=x[B];tt!==null&&(x[B]=null,y[B].disconnect(tt))}g=null,T=null,t.setRenderTarget(p),m=null,f=null,h=null,i=null,d=null,ft.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){s=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){o=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(B){c=B},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return h},this.getFrame=function(){return v},this.getSession=function(){return i},this.setSession=async function(B){if(i=B,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",U),i.addEventListener("selectstart",U),i.addEventListener("selectend",U),i.addEventListener("squeeze",U),i.addEventListener("squeezestart",U),i.addEventListener("squeezeend",U),i.addEventListener("end",H),i.addEventListener("inputsourceschange",D),_.xrCompatible!==!0&&await e.makeXRCompatible(),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const tt={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(i,e,tt),i.updateRenderState({baseLayer:m}),d=new Ei(m.framebufferWidth,m.framebufferHeight,{format:ln,type:qn,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let tt=null,J=null,at=null;_.depth&&(at=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=_.stencil?sr:mi,J=_.stencil?pi:Gn);const ct={colorFormat:e.RGBA8,depthFormat:at,scaleFactor:s};h=new XRWebGLBinding(i,e),f=h.createProjectionLayer(ct),i.updateRenderState({layers:[f]}),d=new Ei(f.textureWidth,f.textureHeight,{format:ln,type:qn,depthTexture:new ug(f.textureWidth,f.textureHeight,J,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0});const gt=t.properties.get(d);gt.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),ft.setContext(i),ft.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function D(B){for(let tt=0;tt<B.removed.length;tt++){const J=B.removed[tt],at=x.indexOf(J);at>=0&&(x[at]=null,y[at].disconnect(J))}for(let tt=0;tt<B.added.length;tt++){const J=B.added[tt];let at=x.indexOf(J);if(at===-1){for(let gt=0;gt<y.length;gt++)if(gt>=x.length){x.push(J),at=gt;break}else if(x[gt]===null){x[gt]=J,at=gt;break}if(at===-1)break}const ct=y[at];ct&&ct.connect(J)}}const O=new N,F=new N;function q(B,tt,J){O.setFromMatrixPosition(tt.matrixWorld),F.setFromMatrixPosition(J.matrixWorld);const at=O.distanceTo(F),ct=tt.projectionMatrix.elements,gt=J.projectionMatrix.elements,Lt=ct[14]/(ct[10]-1),St=ct[14]/(ct[10]+1),Qt=(ct[9]+1)/ct[5],Nt=(ct[9]-1)/ct[5],z=(ct[8]-1)/ct[0],le=(gt[8]+1)/gt[0],vt=Lt*z,wt=Lt*le,xt=at/(-z+le),Vt=xt*-z;tt.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(Vt),B.translateZ(xt),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();const Ut=Lt+xt,bt=St+xt,Ht=vt-Vt,ce=wt+(at-Vt),fe=Qt*St/bt*Ut,C=Nt*St/bt*Ut;B.projectionMatrix.makePerspective(Ht,ce,fe,C,Ut,bt),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}function k(B,tt){tt===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(tt.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCameraXR=function(B){if(i===null)return B;E&&(B=E),A.near=R.near=M.near=B.near,A.far=R.far=M.far=B.far,(g!==A.near||T!==A.far)&&(i.updateRenderState({depthNear:A.near,depthFar:A.far}),g=A.near,T=A.far);const tt=B.parent,J=A.cameras;k(A,tt);for(let at=0;at<J.length;at++)k(J[at],tt);return J.length===2?q(A,M,R):A.projectionMatrix.copy(M.projectionMatrix),E&&X(A,tt),A};function X(B,tt){const J=E;tt===null?J.matrix.copy(B.matrixWorld):(J.matrix.copy(tt.matrixWorld),J.matrix.invert(),J.matrix.multiply(B.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0);const at=J.children;for(let ct=0,gt=at.length;ct<gt;ct++)at[ct].updateMatrixWorld(!0);J.projectionMatrix.copy(B.projectionMatrix),J.projectionMatrixInverse.copy(B.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Ia*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(B){l=B,f!==null&&(f.fixedFoveation=B),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=B)};let Q=null;function Z(B,tt){if(u=tt.getViewerPose(c||a),v=tt,u!==null){const J=u.views;m!==null&&(t.setRenderTargetFramebuffer(d,m.framebuffer),t.setRenderTarget(d));let at=!1;J.length!==A.cameras.length&&(A.cameras.length=0,at=!0);for(let ct=0;ct<J.length;ct++){const gt=J[ct];let Lt=null;if(m!==null)Lt=m.getViewport(gt);else{const Qt=h.getViewSubImage(f,gt);Lt=Qt.viewport,ct===0&&(t.setRenderTargetTextures(d,Qt.colorTexture,f.ignoreDepthValues?void 0:Qt.depthStencilTexture),t.setRenderTarget(d))}let St=S[ct];St===void 0&&(St=new Ke,St.layers.enable(ct),St.viewport=new me,S[ct]=St),St.matrix.fromArray(gt.transform.matrix),St.matrix.decompose(St.position,St.quaternion,St.scale),St.projectionMatrix.fromArray(gt.projectionMatrix),St.projectionMatrixInverse.copy(St.projectionMatrix).invert(),St.viewport.set(Lt.x,Lt.y,Lt.width,Lt.height),ct===0&&(A.matrix.copy(St.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),at===!0&&A.cameras.push(St)}}for(let J=0;J<y.length;J++){const at=x[J],ct=y[J];at!==null&&ct!==void 0&&ct.update(at,tt,c||a)}Q&&Q(B,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),v=null}const ft=new Kc;ft.setAnimationLoop(Z),this.setAnimationLoop=function(B){Q=B},this.dispose=function(){}}}function fg(r,t){function e(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function n(p,d){d.color.getRGB(p.fogColor.value,qc(r)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function i(p,d,y,x,E){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(p,d):d.isMeshToonMaterial?(s(p,d),h(p,d)):d.isMeshPhongMaterial?(s(p,d),u(p,d)):d.isMeshStandardMaterial?(s(p,d),f(p,d),d.isMeshPhysicalMaterial&&m(p,d,E)):d.isMeshMatcapMaterial?(s(p,d),v(p,d)):d.isMeshDepthMaterial?s(p,d):d.isMeshDistanceMaterial?(s(p,d),_(p,d)):d.isMeshNormalMaterial?s(p,d):d.isLineBasicMaterial?(a(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?l(p,d,y,x):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,e(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===Pe&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,e(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===Pe&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,e(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,e(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const y=t.get(d).envMap;if(y&&(p.envMap.value=y,p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;const x=r.useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*x,e(d.lightMap,p.lightMapTransform)}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,p.aoMapTransform))}function a(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform))}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,y,x){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*y,p.scale.value=x*.5,d.map&&(p.map.value=d.map,e(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function u(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function h(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,p.roughnessMapTransform)),t.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,y){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Pe&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,p.specularIntensityMapTransform))}function v(p,d){d.matcap&&(p.matcap.value=d.matcap)}function _(p,d){const y=t.get(d).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function dg(r,t,e,n){let i={},s={},a=[];const o=e.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,x){const E=x.program;n.uniformBlockBinding(y,E)}function c(y,x){let E=i[y.id];E===void 0&&(v(y),E=u(y),i[y.id]=E,y.addEventListener("dispose",p));const M=x.program;n.updateUBOMapping(y,M);const R=t.render.frame;s[y.id]!==R&&(f(y),s[y.id]=R)}function u(y){const x=h();y.__bindingPointIndex=x;const E=r.createBuffer(),M=y.__size,R=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,E),r.bufferData(r.UNIFORM_BUFFER,M,R),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,x,E),E}function h(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const x=i[y.id],E=y.uniforms,M=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,x);for(let R=0,S=E.length;R<S;R++){const A=E[R];if(m(A,R,M)===!0){const g=A.__offset,T=Array.isArray(A.value)?A.value:[A.value];let U=0;for(let H=0;H<T.length;H++){const D=T[H],O=_(D);typeof D=="number"?(A.__data[0]=D,r.bufferSubData(r.UNIFORM_BUFFER,g+U,A.__data)):D.isMatrix3?(A.__data[0]=D.elements[0],A.__data[1]=D.elements[1],A.__data[2]=D.elements[2],A.__data[3]=D.elements[0],A.__data[4]=D.elements[3],A.__data[5]=D.elements[4],A.__data[6]=D.elements[5],A.__data[7]=D.elements[0],A.__data[8]=D.elements[6],A.__data[9]=D.elements[7],A.__data[10]=D.elements[8],A.__data[11]=D.elements[0]):(D.toArray(A.__data,U),U+=O.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,g,A.__data)}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function m(y,x,E){const M=y.value;if(E[x]===void 0){if(typeof M=="number")E[x]=M;else{const R=Array.isArray(M)?M:[M],S=[];for(let A=0;A<R.length;A++)S.push(R[A].clone());E[x]=S}return!0}else if(typeof M=="number"){if(E[x]!==M)return E[x]=M,!0}else{const R=Array.isArray(E[x])?E[x]:[E[x]],S=Array.isArray(M)?M:[M];for(let A=0;A<R.length;A++){const g=R[A];if(g.equals(S[A])===!1)return g.copy(S[A]),!0}}return!1}function v(y){const x=y.uniforms;let E=0;const M=16;let R=0;for(let S=0,A=x.length;S<A;S++){const g=x[S],T={boundary:0,storage:0},U=Array.isArray(g.value)?g.value:[g.value];for(let H=0,D=U.length;H<D;H++){const O=U[H],F=_(O);T.boundary+=F.boundary,T.storage+=F.storage}if(g.__data=new Float32Array(T.storage/Float32Array.BYTES_PER_ELEMENT),g.__offset=E,S>0){R=E%M;const H=M-R;R!==0&&H-T.boundary<0&&(E+=M-R,g.__offset=E)}E+=T.storage}return R=E%M,R>0&&(E+=M-R),y.__size=E,y.__cache={},this}function _(y){const x={boundary:0,storage:0};return typeof y=="number"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function p(y){const x=y.target;x.removeEventListener("dispose",p);const E=a.indexOf(x.__bindingPointIndex);a.splice(E,1),r.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function d(){for(const y in i)r.deleteBuffer(i[y]);a=[],i={},s={}}return{bind:l,update:c,dispose:d}}function pg(){const r=Lr("canvas");return r.style.display="block",r}class eu{constructor(t={}){const{canvas:e=pg(),context:n=null,depth:i=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=a;const m=new Uint32Array(4),v=new Int32Array(4);let _=null,p=null;const d=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Rt,this.useLegacyLights=!0,this.toneMapping=Un,this.toneMappingExposure=1;const x=this;let E=!1,M=0,R=0,S=null,A=-1,g=null;const T=new me,U=new me;let H=null;const D=new Gt(0);let O=0,F=e.width,q=e.height,k=1,X=null,Q=null;const Z=new me(0,0,F,q),ft=new me(0,0,F,q);let B=!1;const tt=new so;let J=!1,at=!1,ct=null;const gt=new oe,Lt=new Ct,St=new N,Qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Nt(){return S===null?k:1}let z=n;function le(w,G){for(let j=0;j<w.length;j++){const I=w[j],K=e.getContext(I,G);if(K!==null)return K}return null}try{const w={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${eo}`),e.addEventListener("webglcontextlost",ot,!1),e.addEventListener("webglcontextrestored",V,!1),e.addEventListener("webglcontextcreationerror",rt,!1),z===null){const G=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&G.shift(),z=le(G,w),z===null)throw le(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}z instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),z.getShaderPrecisionFormat===void 0&&(z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let vt,wt,xt,Vt,Ut,bt,Ht,ce,fe,C,b,Y,it,nt,P,$,et,W,dt,_t,mt,pt,ut,Et;function Ft(){vt=new bm(z),wt=new xm(z,vt,t),vt.init(wt),pt=new og(z,vt,wt),xt=new sg(z,vt,wt),Vt=new Rm(z),Ut=new X_,bt=new ag(z,vt,xt,Ut,wt,pt,Vt),Ht=new Sm(x),ce=new Tm(x),fe=new Gf(z,wt),ut=new gm(z,vt,fe,wt),C=new Am(z,fe,Vt,ut),b=new Dm(z,C,fe,Vt),dt=new Lm(z,wt,bt),$=new Mm(Ut),Y=new W_(x,Ht,ce,vt,wt,ut,$),it=new fg(x,Ut),nt=new Y_,P=new Q_(vt,wt),W=new _m(x,Ht,ce,xt,b,f,l),et=new rg(x,b,wt),Et=new dg(z,Vt,wt,xt),_t=new vm(z,vt,Vt,wt),mt=new wm(z,vt,Vt,wt),Vt.programs=Y.programs,x.capabilities=wt,x.extensions=vt,x.properties=Ut,x.renderLists=nt,x.shadowMap=et,x.state=xt,x.info=Vt}Ft();const L=new hg(x,z);this.xr=L,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const w=vt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=vt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(w){w!==void 0&&(k=w,this.setSize(F,q,!1))},this.getSize=function(w){return w.set(F,q)},this.setSize=function(w,G,j=!0){if(L.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=w,q=G,e.width=Math.floor(w*k),e.height=Math.floor(G*k),j===!0&&(e.style.width=w+"px",e.style.height=G+"px"),this.setViewport(0,0,w,G)},this.getDrawingBufferSize=function(w){return w.set(F*k,q*k).floor()},this.setDrawingBufferSize=function(w,G,j){F=w,q=G,k=j,e.width=Math.floor(w*j),e.height=Math.floor(G*j),this.setViewport(0,0,w,G)},this.getCurrentViewport=function(w){return w.copy(T)},this.getViewport=function(w){return w.copy(Z)},this.setViewport=function(w,G,j,I){w.isVector4?Z.set(w.x,w.y,w.z,w.w):Z.set(w,G,j,I),xt.viewport(T.copy(Z).multiplyScalar(k).floor())},this.getScissor=function(w){return w.copy(ft)},this.setScissor=function(w,G,j,I){w.isVector4?ft.set(w.x,w.y,w.z,w.w):ft.set(w,G,j,I),xt.scissor(U.copy(ft).multiplyScalar(k).floor())},this.getScissorTest=function(){return B},this.setScissorTest=function(w){xt.setScissorTest(B=w)},this.setOpaqueSort=function(w){X=w},this.setTransparentSort=function(w){Q=w},this.getClearColor=function(w){return w.copy(W.getClearColor())},this.setClearColor=function(){W.setClearColor.apply(W,arguments)},this.getClearAlpha=function(){return W.getClearAlpha()},this.setClearAlpha=function(){W.setClearAlpha.apply(W,arguments)},this.clear=function(w=!0,G=!0,j=!0){let I=0;if(w){let K=!1;if(S!==null){const ht=S.texture.format;K=ht===Ic||ht===Uc||ht===Dc}if(K){const ht=S.texture.type,Mt=ht===qn||ht===Gn||ht===no||ht===pi||ht===Pc||ht===Lc,yt=W.getClearColor(),Tt=W.getClearAlpha(),Ot=yt.r,At=yt.g,Pt=yt.b,qt=Ut.get(S).__webglFramebuffer;Mt?(m[0]=Ot,m[1]=At,m[2]=Pt,m[3]=Tt,z.clearBufferuiv(z.COLOR,qt,m)):(v[0]=Ot,v[1]=At,v[2]=Pt,v[3]=Tt,z.clearBufferiv(z.COLOR,qt,v))}else I|=z.COLOR_BUFFER_BIT}G&&(I|=z.DEPTH_BUFFER_BIT),j&&(I|=z.STENCIL_BUFFER_BIT),z.clear(I)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ot,!1),e.removeEventListener("webglcontextrestored",V,!1),e.removeEventListener("webglcontextcreationerror",rt,!1),nt.dispose(),P.dispose(),Ut.dispose(),Ht.dispose(),ce.dispose(),b.dispose(),ut.dispose(),Et.dispose(),Y.dispose(),L.dispose(),L.removeEventListener("sessionstart",Zt),L.removeEventListener("sessionend",hn),ct&&(ct.dispose(),ct=null),Te.stop()};function ot(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function V(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const w=Vt.autoReset,G=et.enabled,j=et.autoUpdate,I=et.needsUpdate,K=et.type;Ft(),Vt.autoReset=w,et.enabled=G,et.autoUpdate=j,et.needsUpdate=I,et.type=K}function rt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function lt(w){const G=w.target;G.removeEventListener("dispose",lt),kt(G)}function kt(w){Kt(w),Ut.remove(w)}function Kt(w){const G=Ut.get(w).programs;G!==void 0&&(G.forEach(function(j){Y.releaseProgram(j)}),w.isShaderMaterial&&Y.releaseShaderCache(w))}this.renderBufferDirect=function(w,G,j,I,K,ht){G===null&&(G=Qt);const Mt=K.isMesh&&K.matrixWorld.determinant()<0,yt=uh(w,G,j,I,K);xt.setMaterial(I,Mt);let Tt=j.index,Ot=1;I.wireframe===!0&&(Tt=C.getWireframeAttribute(j),Ot=2);const At=j.drawRange,Pt=j.attributes.position;let qt=At.start*Ot,te=(At.start+At.count)*Ot;ht!==null&&(qt=Math.max(qt,ht.start*Ot),te=Math.min(te,(ht.start+ht.count)*Ot)),Tt!==null?(qt=Math.max(qt,0),te=Math.min(te,Tt.count)):Pt!=null&&(qt=Math.max(qt,0),te=Math.min(te,Pt.count));const tn=te-qt;if(tn<0||tn===1/0)return;ut.setup(K,I,yt,j,Tt);let Sn,ie=_t;if(Tt!==null&&(Sn=fe.get(Tt),ie=mt,ie.setIndex(Sn)),K.isMesh)I.wireframe===!0?(xt.setLineWidth(I.wireframeLinewidth*Nt()),ie.setMode(z.LINES)):ie.setMode(z.TRIANGLES);else if(K.isLine){let zt=I.linewidth;zt===void 0&&(zt=1),xt.setLineWidth(zt*Nt()),K.isLineSegments?ie.setMode(z.LINES):K.isLineLoop?ie.setMode(z.LINE_LOOP):ie.setMode(z.LINE_STRIP)}else K.isPoints?ie.setMode(z.POINTS):K.isSprite&&ie.setMode(z.TRIANGLES);if(K.isInstancedMesh)ie.renderInstances(qt,tn,K.count);else if(j.isInstancedBufferGeometry){const zt=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Os=Math.min(j.instanceCount,zt);ie.renderInstances(qt,tn,Os)}else ie.render(qt,tn)},this.compile=function(w,G){function j(I,K,ht){I.transparent===!0&&I.side===Ln&&I.forceSinglePass===!1?(I.side=Pe,I.needsUpdate=!0,Wr(I,K,ht),I.side=Kn,I.needsUpdate=!0,Wr(I,K,ht),I.side=Ln):Wr(I,K,ht)}p=P.get(w),p.init(),y.push(p),w.traverseVisible(function(I){I.isLight&&I.layers.test(G.layers)&&(p.pushLight(I),I.castShadow&&p.pushShadow(I))}),p.setupLights(x.useLegacyLights),w.traverse(function(I){const K=I.material;if(K)if(Array.isArray(K))for(let ht=0;ht<K.length;ht++){const Mt=K[ht];j(Mt,w,I)}else j(K,w,I)}),y.pop(),p=null};let ne=null;function ti(w){ne&&ne(w)}function Zt(){Te.stop()}function hn(){Te.start()}const Te=new Kc;Te.setAnimationLoop(ti),typeof self<"u"&&Te.setContext(self),this.setAnimationLoop=function(w){ne=w,L.setAnimationLoop(w),w===null?Te.stop():Te.start()},L.addEventListener("sessionstart",Zt),L.addEventListener("sessionend",hn),this.render=function(w,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),L.enabled===!0&&L.isPresenting===!0&&(G=L.updateCameraXR(G)),w.isScene===!0&&w.onBeforeRender(x,w,G,S),p=P.get(w,y.length),p.init(),y.push(p),gt.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),tt.setFromProjectionMatrix(gt),at=this.localClippingEnabled,J=$.init(this.clippingPlanes,at),_=nt.get(w,d.length),_.init(),d.push(_),wo(w,G,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(X,Q),J===!0&&$.beginShadows();const j=p.state.shadowsArray;if(et.render(j,w,G),J===!0&&$.endShadows(),this.info.autoReset===!0&&this.info.reset(),this.info.render.frame++,W.render(_,w),p.setupLights(x.useLegacyLights),G.isArrayCamera){const I=G.cameras;for(let K=0,ht=I.length;K<ht;K++){const Mt=I[K];Ro(_,w,Mt,Mt.viewport)}}else Ro(_,w,G);S!==null&&(bt.updateMultisampleRenderTarget(S),bt.updateRenderTargetMipmap(S)),w.isScene===!0&&w.onAfterRender(x,w,G),ut.resetDefaultState(),A=-1,g=null,y.pop(),y.length>0?p=y[y.length-1]:p=null,d.pop(),d.length>0?_=d[d.length-1]:_=null};function wo(w,G,j,I){if(w.visible===!1)return;if(w.layers.test(G.layers)){if(w.isGroup)j=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(G);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||tt.intersectsSprite(w)){I&&St.setFromMatrixPosition(w.matrixWorld).applyMatrix4(gt);const Mt=b.update(w),yt=w.material;yt.visible&&_.push(w,Mt,yt,j,St.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||tt.intersectsObject(w))){w.isSkinnedMesh&&w.skeleton.frame!==Vt.render.frame&&(w.skeleton.update(),w.skeleton.frame=Vt.render.frame);const Mt=b.update(w),yt=w.material;if(I&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),St.copy(w.boundingSphere.center)):(Mt.boundingSphere===null&&Mt.computeBoundingSphere(),St.copy(Mt.boundingSphere.center)),St.applyMatrix4(w.matrixWorld).applyMatrix4(gt)),Array.isArray(yt)){const Tt=Mt.groups;for(let Ot=0,At=Tt.length;Ot<At;Ot++){const Pt=Tt[Ot],qt=yt[Pt.materialIndex];qt&&qt.visible&&_.push(w,Mt,qt,j,St.z,Pt)}}else yt.visible&&_.push(w,Mt,yt,j,St.z,null)}}const ht=w.children;for(let Mt=0,yt=ht.length;Mt<yt;Mt++)wo(ht[Mt],G,j,I)}function Ro(w,G,j,I){const K=w.opaque,ht=w.transmissive,Mt=w.transparent;p.setupLightsView(j),J===!0&&$.setGlobalState(x.clippingPlanes,j),ht.length>0&&ch(K,ht,G,j),I&&xt.viewport(T.copy(I)),K.length>0&&Vr(K,G,j),ht.length>0&&Vr(ht,G,j),Mt.length>0&&Vr(Mt,G,j),xt.buffers.depth.setTest(!0),xt.buffers.depth.setMask(!0),xt.buffers.color.setMask(!0),xt.setPolygonOffset(!1)}function ch(w,G,j,I){const K=wt.isWebGL2;ct===null&&(ct=new Ei(1,1,{generateMipmaps:!0,type:vt.has("EXT_color_buffer_half_float")?Pr:qn,minFilter:Cr,samples:K&&o===!0?4:0})),x.getDrawingBufferSize(Lt),K?ct.setSize(Lt.x,Lt.y):ct.setSize(Na(Lt.x),Na(Lt.y));const ht=x.getRenderTarget();x.setRenderTarget(ct),x.getClearColor(D),O=x.getClearAlpha(),O<1&&x.setClearColor(16777215,.5),x.clear();const Mt=x.toneMapping;x.toneMapping=Un,Vr(w,j,I),bt.updateMultisampleRenderTarget(ct),bt.updateRenderTargetMipmap(ct);let yt=!1;for(let Tt=0,Ot=G.length;Tt<Ot;Tt++){const At=G[Tt],Pt=At.object,qt=At.geometry,te=At.material,tn=At.group;if(te.side===Ln&&Pt.layers.test(I.layers)){const Sn=te.side;te.side=Pe,te.needsUpdate=!0,Co(Pt,j,I,qt,te,tn),te.side=Sn,te.needsUpdate=!0,yt=!0}}yt===!0&&(bt.updateMultisampleRenderTarget(ct),bt.updateRenderTargetMipmap(ct)),x.setRenderTarget(ht),x.setClearColor(D,O),x.toneMapping=Mt}function Vr(w,G,j){const I=G.isScene===!0?G.overrideMaterial:null;for(let K=0,ht=w.length;K<ht;K++){const Mt=w[K],yt=Mt.object,Tt=Mt.geometry,Ot=I===null?Mt.material:I,At=Mt.group;yt.layers.test(j.layers)&&Co(yt,G,j,Tt,Ot,At)}}function Co(w,G,j,I,K,ht){w.onBeforeRender(x,G,j,I,K,ht),w.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),K.onBeforeRender(x,G,j,I,w,ht),K.transparent===!0&&K.side===Ln&&K.forceSinglePass===!1?(K.side=Pe,K.needsUpdate=!0,x.renderBufferDirect(j,G,I,K,w,ht),K.side=Kn,K.needsUpdate=!0,x.renderBufferDirect(j,G,I,K,w,ht),K.side=Ln):x.renderBufferDirect(j,G,I,K,w,ht),w.onAfterRender(x,G,j,I,K,ht)}function Wr(w,G,j){G.isScene!==!0&&(G=Qt);const I=Ut.get(w),K=p.state.lights,ht=p.state.shadowsArray,Mt=K.state.version,yt=Y.getParameters(w,K.state,ht,G,j),Tt=Y.getProgramCacheKey(yt);let Ot=I.programs;I.environment=w.isMeshStandardMaterial?G.environment:null,I.fog=G.fog,I.envMap=(w.isMeshStandardMaterial?ce:Ht).get(w.envMap||I.environment),Ot===void 0&&(w.addEventListener("dispose",lt),Ot=new Map,I.programs=Ot);let At=Ot.get(Tt);if(At!==void 0){if(I.currentProgram===At&&I.lightsStateVersion===Mt)return Po(w,yt),At}else yt.uniforms=Y.getUniforms(w),w.onBuild(j,yt,x),w.onBeforeCompile(yt,x),At=Y.acquireProgram(yt,Tt),Ot.set(Tt,At),I.uniforms=yt.uniforms;const Pt=I.uniforms;(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Pt.clippingPlanes=$.uniform),Po(w,yt),I.needsLights=fh(w),I.lightsStateVersion=Mt,I.needsLights&&(Pt.ambientLightColor.value=K.state.ambient,Pt.lightProbe.value=K.state.probe,Pt.directionalLights.value=K.state.directional,Pt.directionalLightShadows.value=K.state.directionalShadow,Pt.spotLights.value=K.state.spot,Pt.spotLightShadows.value=K.state.spotShadow,Pt.rectAreaLights.value=K.state.rectArea,Pt.ltc_1.value=K.state.rectAreaLTC1,Pt.ltc_2.value=K.state.rectAreaLTC2,Pt.pointLights.value=K.state.point,Pt.pointLightShadows.value=K.state.pointShadow,Pt.hemisphereLights.value=K.state.hemi,Pt.directionalShadowMap.value=K.state.directionalShadowMap,Pt.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Pt.spotShadowMap.value=K.state.spotShadowMap,Pt.spotLightMatrix.value=K.state.spotLightMatrix,Pt.spotLightMap.value=K.state.spotLightMap,Pt.pointShadowMap.value=K.state.pointShadowMap,Pt.pointShadowMatrix.value=K.state.pointShadowMatrix);const qt=At.getUniforms(),te=ms.seqWithValue(qt.seq,Pt);return I.currentProgram=At,I.uniformsList=te,At}function Po(w,G){const j=Ut.get(w);j.outputColorSpace=G.outputColorSpace,j.instancing=G.instancing,j.skinning=G.skinning,j.morphTargets=G.morphTargets,j.morphNormals=G.morphNormals,j.morphColors=G.morphColors,j.morphTargetsCount=G.morphTargetsCount,j.numClippingPlanes=G.numClippingPlanes,j.numIntersection=G.numClipIntersection,j.vertexAlphas=G.vertexAlphas,j.vertexTangents=G.vertexTangents,j.toneMapping=G.toneMapping}function uh(w,G,j,I,K){G.isScene!==!0&&(G=Qt),bt.resetTextureUnits();const ht=G.fog,Mt=I.isMeshStandardMaterial?G.environment:null,yt=S===null?x.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:vn,Tt=(I.isMeshStandardMaterial?ce:Ht).get(I.envMap||Mt),Ot=I.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,At=!!j.attributes.tangent&&(!!I.normalMap||I.anisotropy>0),Pt=!!j.morphAttributes.position,qt=!!j.morphAttributes.normal,te=!!j.morphAttributes.color,tn=I.toneMapped?x.toneMapping:Un,Sn=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,ie=Sn!==void 0?Sn.length:0,zt=Ut.get(I),Os=p.state.lights;if(J===!0&&(at===!0||w!==g)){const Fe=w===g&&I.id===A;$.setState(I,w,Fe)}let de=!1;I.version===zt.__version?(zt.needsLights&&zt.lightsStateVersion!==Os.state.version||zt.outputColorSpace!==yt||K.isInstancedMesh&&zt.instancing===!1||!K.isInstancedMesh&&zt.instancing===!0||K.isSkinnedMesh&&zt.skinning===!1||!K.isSkinnedMesh&&zt.skinning===!0||zt.envMap!==Tt||I.fog===!0&&zt.fog!==ht||zt.numClippingPlanes!==void 0&&(zt.numClippingPlanes!==$.numPlanes||zt.numIntersection!==$.numIntersection)||zt.vertexAlphas!==Ot||zt.vertexTangents!==At||zt.morphTargets!==Pt||zt.morphNormals!==qt||zt.morphColors!==te||zt.toneMapping!==tn||wt.isWebGL2===!0&&zt.morphTargetsCount!==ie)&&(de=!0):(de=!0,zt.__version=I.version);let ei=zt.currentProgram;de===!0&&(ei=Wr(I,G,K));let Lo=!1,_r=!1,Fs=!1;const be=ei.getUniforms(),ni=zt.uniforms;if(xt.useProgram(ei.program)&&(Lo=!0,_r=!0,Fs=!0),I.id!==A&&(A=I.id,_r=!0),Lo||g!==w){if(be.setValue(z,"projectionMatrix",w.projectionMatrix),wt.logarithmicDepthBuffer&&be.setValue(z,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),g!==w&&(g=w,_r=!0,Fs=!0),I.isShaderMaterial||I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshStandardMaterial||I.envMap){const Fe=be.map.cameraPosition;Fe!==void 0&&Fe.setValue(z,St.setFromMatrixPosition(w.matrixWorld))}(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial)&&be.setValue(z,"isOrthographic",w.isOrthographicCamera===!0),(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial||I.isShadowMaterial||K.isSkinnedMesh)&&be.setValue(z,"viewMatrix",w.matrixWorldInverse)}if(K.isSkinnedMesh){be.setOptional(z,K,"bindMatrix"),be.setOptional(z,K,"bindMatrixInverse");const Fe=K.skeleton;Fe&&(wt.floatVertexTextures?(Fe.boneTexture===null&&Fe.computeBoneTexture(),be.setValue(z,"boneTexture",Fe.boneTexture,bt),be.setValue(z,"boneTextureSize",Fe.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Bs=j.morphAttributes;if((Bs.position!==void 0||Bs.normal!==void 0||Bs.color!==void 0&&wt.isWebGL2===!0)&&dt.update(K,j,ei),(_r||zt.receiveShadow!==K.receiveShadow)&&(zt.receiveShadow=K.receiveShadow,be.setValue(z,"receiveShadow",K.receiveShadow)),I.isMeshGouraudMaterial&&I.envMap!==null&&(ni.envMap.value=Tt,ni.flipEnvMap.value=Tt.isCubeTexture&&Tt.isRenderTargetTexture===!1?-1:1),_r&&(be.setValue(z,"toneMappingExposure",x.toneMappingExposure),zt.needsLights&&hh(ni,Fs),ht&&I.fog===!0&&it.refreshFogUniforms(ni,ht),it.refreshMaterialUniforms(ni,I,k,q,ct),ms.upload(z,zt.uniformsList,ni,bt)),I.isShaderMaterial&&I.uniformsNeedUpdate===!0&&(ms.upload(z,zt.uniformsList,ni,bt),I.uniformsNeedUpdate=!1),I.isSpriteMaterial&&be.setValue(z,"center",K.center),be.setValue(z,"modelViewMatrix",K.modelViewMatrix),be.setValue(z,"normalMatrix",K.normalMatrix),be.setValue(z,"modelMatrix",K.matrixWorld),I.isShaderMaterial||I.isRawShaderMaterial){const Fe=I.uniformsGroups;for(let zs=0,dh=Fe.length;zs<dh;zs++)if(wt.isWebGL2){const Do=Fe[zs];Et.update(Do,ei),Et.bind(Do,ei)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ei}function hh(w,G){w.ambientLightColor.needsUpdate=G,w.lightProbe.needsUpdate=G,w.directionalLights.needsUpdate=G,w.directionalLightShadows.needsUpdate=G,w.pointLights.needsUpdate=G,w.pointLightShadows.needsUpdate=G,w.spotLights.needsUpdate=G,w.spotLightShadows.needsUpdate=G,w.rectAreaLights.needsUpdate=G,w.hemisphereLights.needsUpdate=G}function fh(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(w,G,j){Ut.get(w.texture).__webglTexture=G,Ut.get(w.depthTexture).__webglTexture=j;const I=Ut.get(w);I.__hasExternalTextures=!0,I.__hasExternalTextures&&(I.__autoAllocateDepthBuffer=j===void 0,I.__autoAllocateDepthBuffer||vt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),I.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,G){const j=Ut.get(w);j.__webglFramebuffer=G,j.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(w,G=0,j=0){S=w,M=G,R=j;let I=!0,K=null,ht=!1,Mt=!1;if(w){const Tt=Ut.get(w);Tt.__useDefaultFramebuffer!==void 0?(xt.bindFramebuffer(z.FRAMEBUFFER,null),I=!1):Tt.__webglFramebuffer===void 0?bt.setupRenderTarget(w):Tt.__hasExternalTextures&&bt.rebindTextures(w,Ut.get(w.texture).__webglTexture,Ut.get(w.depthTexture).__webglTexture);const Ot=w.texture;(Ot.isData3DTexture||Ot.isDataArrayTexture||Ot.isCompressedArrayTexture)&&(Mt=!0);const At=Ut.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(K=At[G],ht=!0):wt.isWebGL2&&w.samples>0&&bt.useMultisampledRTT(w)===!1?K=Ut.get(w).__webglMultisampledFramebuffer:K=At,T.copy(w.viewport),U.copy(w.scissor),H=w.scissorTest}else T.copy(Z).multiplyScalar(k).floor(),U.copy(ft).multiplyScalar(k).floor(),H=B;if(xt.bindFramebuffer(z.FRAMEBUFFER,K)&&wt.drawBuffers&&I&&xt.drawBuffers(w,K),xt.viewport(T),xt.scissor(U),xt.setScissorTest(H),ht){const Tt=Ut.get(w.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+G,Tt.__webglTexture,j)}else if(Mt){const Tt=Ut.get(w.texture),Ot=G||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Tt.__webglTexture,j||0,Ot)}A=-1},this.readRenderTargetPixels=function(w,G,j,I,K,ht,Mt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let yt=Ut.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Mt!==void 0&&(yt=yt[Mt]),yt){xt.bindFramebuffer(z.FRAMEBUFFER,yt);try{const Tt=w.texture,Ot=Tt.format,At=Tt.type;if(Ot!==ln&&pt.convert(Ot)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Pt=At===Pr&&(vt.has("EXT_color_buffer_half_float")||wt.isWebGL2&&vt.has("EXT_color_buffer_float"));if(At!==qn&&pt.convert(At)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_TYPE)&&!(At===kn&&(wt.isWebGL2||vt.has("OES_texture_float")||vt.has("WEBGL_color_buffer_float")))&&!Pt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=w.width-I&&j>=0&&j<=w.height-K&&z.readPixels(G,j,I,K,pt.convert(Ot),pt.convert(At),ht)}finally{const Tt=S!==null?Ut.get(S).__webglFramebuffer:null;xt.bindFramebuffer(z.FRAMEBUFFER,Tt)}}},this.copyFramebufferToTexture=function(w,G,j=0){const I=Math.pow(2,-j),K=Math.floor(G.image.width*I),ht=Math.floor(G.image.height*I);bt.setTexture2D(G,0),z.copyTexSubImage2D(z.TEXTURE_2D,j,0,0,w.x,w.y,K,ht),xt.unbindTexture()},this.copyTextureToTexture=function(w,G,j,I=0){const K=G.image.width,ht=G.image.height,Mt=pt.convert(j.format),yt=pt.convert(j.type);bt.setTexture2D(j,0),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,j.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,j.unpackAlignment),G.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,I,w.x,w.y,K,ht,Mt,yt,G.image.data):G.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,I,w.x,w.y,G.mipmaps[0].width,G.mipmaps[0].height,Mt,G.mipmaps[0].data):z.texSubImage2D(z.TEXTURE_2D,I,w.x,w.y,Mt,yt,G.image),I===0&&j.generateMipmaps&&z.generateMipmap(z.TEXTURE_2D),xt.unbindTexture()},this.copyTextureToTexture3D=function(w,G,j,I,K=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ht=w.max.x-w.min.x+1,Mt=w.max.y-w.min.y+1,yt=w.max.z-w.min.z+1,Tt=pt.convert(I.format),Ot=pt.convert(I.type);let At;if(I.isData3DTexture)bt.setTexture3D(I,0),At=z.TEXTURE_3D;else if(I.isDataArrayTexture)bt.setTexture2DArray(I,0),At=z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,I.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,I.unpackAlignment);const Pt=z.getParameter(z.UNPACK_ROW_LENGTH),qt=z.getParameter(z.UNPACK_IMAGE_HEIGHT),te=z.getParameter(z.UNPACK_SKIP_PIXELS),tn=z.getParameter(z.UNPACK_SKIP_ROWS),Sn=z.getParameter(z.UNPACK_SKIP_IMAGES),ie=j.isCompressedTexture?j.mipmaps[0]:j.image;z.pixelStorei(z.UNPACK_ROW_LENGTH,ie.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ie.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,w.min.x),z.pixelStorei(z.UNPACK_SKIP_ROWS,w.min.y),z.pixelStorei(z.UNPACK_SKIP_IMAGES,w.min.z),j.isDataTexture||j.isData3DTexture?z.texSubImage3D(At,K,G.x,G.y,G.z,ht,Mt,yt,Tt,Ot,ie.data):j.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),z.compressedTexSubImage3D(At,K,G.x,G.y,G.z,ht,Mt,yt,Tt,ie.data)):z.texSubImage3D(At,K,G.x,G.y,G.z,ht,Mt,yt,Tt,Ot,ie),z.pixelStorei(z.UNPACK_ROW_LENGTH,Pt),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,qt),z.pixelStorei(z.UNPACK_SKIP_PIXELS,te),z.pixelStorei(z.UNPACK_SKIP_ROWS,tn),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Sn),K===0&&I.generateMipmaps&&z.generateMipmap(At),xt.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?bt.setTextureCube(w,0):w.isData3DTexture?bt.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?bt.setTexture2DArray(w,0):bt.setTexture2D(w,0),xt.unbindTexture()},this.resetState=function(){M=0,R=0,S=null,xt.reset(),ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Dn}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(t){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!t}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Rt?_i:Nc}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===_i?Rt:vn}}class mg extends eu{}mg.prototype.isWebGL1Renderer=!0;class _g extends _e{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(t){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=t}}class nu extends dr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Gt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Kl=new N,Zl=new N,$l=new oe,_a=new io,ds=new Cs;class gg extends _e{constructor(t=new Mn,e=new nu){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)Kl.fromBufferAttribute(e,i-1),Zl.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Kl.distanceTo(Zl);t.setAttribute("lineDistance",new De(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ds.copy(n.boundingSphere),ds.applyMatrix4(i),ds.radius+=s,t.ray.intersectsSphere(ds)===!1)return;$l.copy(i).invert(),_a.copy(t.ray).applyMatrix4($l);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new N,u=new N,h=new N,f=new N,m=this.isLineSegments?2:1,v=n.index,p=n.attributes.position;if(v!==null){const d=Math.max(0,a.start),y=Math.min(v.count,a.start+a.count);for(let x=d,E=y-1;x<E;x+=m){const M=v.getX(x),R=v.getX(x+1);if(c.fromBufferAttribute(p,M),u.fromBufferAttribute(p,R),_a.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const A=t.ray.origin.distanceTo(f);A<t.near||A>t.far||e.push({distance:A,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const d=Math.max(0,a.start),y=Math.min(p.count,a.start+a.count);for(let x=d,E=y-1;x<E;x+=m){if(c.fromBufferAttribute(p,x),u.fromBufferAttribute(p,x+1),_a.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const R=t.ray.origin.distanceTo(f);R<t.near||R>t.far||e.push({distance:R,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}const Jl=new N,Ql=new N;class vg extends gg{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)Jl.fromBufferAttribute(e,i),Ql.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Jl.distanceTo(Ql);t.setAttribute("lineDistance",new De(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ds extends Mn{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],h=new N,f=new N,m=[],v=[],_=[],p=[];for(let d=0;d<=n;d++){const y=[],x=d/n;let E=0;d===0&&a===0?E=.5/e:d===n&&l===Math.PI&&(E=-.5/e);for(let M=0;M<=e;M++){const R=M/e;h.x=-t*Math.cos(i+R*s)*Math.sin(a+x*o),h.y=t*Math.cos(a+x*o),h.z=t*Math.sin(i+R*s)*Math.sin(a+x*o),v.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),p.push(R+E,1-x),y.push(c++)}u.push(y)}for(let d=0;d<n;d++)for(let y=0;y<e;y++){const x=u[d][y+1],E=u[d][y],M=u[d+1][y],R=u[d+1][y+1];(d!==0||a>0)&&m.push(x,E,R),(d!==n-1||l<Math.PI)&&m.push(E,M,R)}this.setIndex(m),this.setAttribute("position",new De(v,3)),this.setAttribute("normal",new De(_,3)),this.setAttribute("uv",new De(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ds(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class iu extends dr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Gt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Oc,this.normalScale=new Ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const tc={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class xg{constructor(t,e,n){const i=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){o++,s===!1&&i.onStart!==void 0&&i.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const m=c[h],v=c[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return v}return null}}}const Mg=new xg;class ru{constructor(t){this.manager=t!==void 0?t:Mg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}class Sg extends ru{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,a=tc.get(t);if(a!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(a),s.manager.itemEnd(t)},0),a;const o=Lr("img");function l(){u(),tc.add(t,this),e&&e(this),s.manager.itemEnd(t)}function c(h){u(),i&&i(h),s.manager.itemError(t),s.manager.itemEnd(t)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(t),o.src=t,o}}class Eg extends ru{constructor(t){super(t)}load(t,e,n,i){const s=new Le,a=new Sg(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){s.image=o,s.needsUpdate=!0,e!==void 0&&e(s)},n,i),s}}class lo extends _e{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Gt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class yg extends lo{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(_e.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Gt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const ga=new oe,ec=new N,nc=new N;class Tg{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ct(512,512),this.map=null,this.mapPass=null,this.matrix=new oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new so,this._frameExtents=new Ct(1,1),this._viewportCount=1,this._viewports=[new me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;ec.setFromMatrixPosition(t.matrixWorld),e.position.copy(ec),nc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(nc),e.updateMatrixWorld(),ga.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ga),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ga)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class bg extends Tg{constructor(){super(new Zc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ag extends lo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_e.DEFAULT_UP),this.updateMatrix(),this.target=new _e,this.shadow=new bg}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class wg extends lo{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Rg{constructor(t,e,n=0,i=1/0){this.ray=new io(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new ro,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return Fa(t,this,n,e),n.sort(ic),n}intersectObjects(t,e=!0,n=[]){for(let i=0,s=t.length;i<s;i++)Fa(t[i],this,n,e);return n.sort(ic),n}}function ic(r,t){return r.distance-t.distance}function Fa(r,t,e,n){if(r.layers.test(t.layers)&&r.raycast(t,e),n===!0){const i=r.children;for(let s=0,a=i.length;s<a;s++)Fa(i[s],t,e,!0)}}class rc{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Re(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Cg extends vg{constructor(t=1){const e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new Mn;i.setAttribute("position",new De(e,3)),i.setAttribute("color",new De(n,3));const s=new nu({vertexColors:!0,toneMapped:!1});super(i,s),this.type="AxesHelper"}setColors(t,e,n){const i=new Gt,s=this.geometry.attributes.color.array;return i.set(t),i.toArray(s,0),i.toArray(s,3),i.set(e),i.toArray(s,6),i.toArray(s,9),i.set(n),i.toArray(s,12),i.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:eo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=eo);const sc={type:"change"},va={type:"start"},ac={type:"end"};class Pg extends Ai{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ri.ROTATE,MIDDLE:Ri.DOLLY,RIGHT:Ri.PAN},this.touches={ONE:Ci.ROTATE,TWO:Ci.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(P){P.addEventListener("keydown",Ht),this._domElementKeyEvents=P},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Ht),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(sc),n.update(),s=i.NONE},this.update=function(){const P=new N,$=new yi().setFromUnitVectors(t.up,new N(0,1,0)),et=$.clone().invert(),W=new N,dt=new yi,_t=new N,mt=2*Math.PI;return function(){const ut=n.object.position;P.copy(ut).sub(n.target),P.applyQuaternion($),o.setFromVector3(P),n.autoRotate&&s===i.NONE&&g(S()),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let Et=n.minAzimuthAngle,Ft=n.maxAzimuthAngle;return isFinite(Et)&&isFinite(Ft)&&(Et<-Math.PI?Et+=mt:Et>Math.PI&&(Et-=mt),Ft<-Math.PI?Ft+=mt:Ft>Math.PI&&(Ft-=mt),Et<=Ft?o.theta=Math.max(Et,Math.min(Ft,o.theta)):o.theta=o.theta>(Et+Ft)/2?Math.max(Et,o.theta):Math.min(Ft,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),o.radius*=c,o.radius=Math.max(n.minDistance,Math.min(n.maxDistance,o.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),P.setFromSpherical(o),P.applyQuaternion(et),ut.copy(n.target).add(P),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,h||W.distanceToSquared(n.object.position)>a||8*(1-dt.dot(n.object.quaternion))>a||_t.distanceToSquared(n.target)>0?(n.dispatchEvent(sc),W.copy(n.object.position),dt.copy(n.object.quaternion),_t.copy(n.target),h=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",C),n.domElement.removeEventListener("pointerdown",vt),n.domElement.removeEventListener("pointercancel",xt),n.domElement.removeEventListener("wheel",bt),n.domElement.removeEventListener("pointermove",wt),n.domElement.removeEventListener("pointerup",xt),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Ht),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const a=1e-6,o=new rc,l=new rc;let c=1;const u=new N;let h=!1;const f=new Ct,m=new Ct,v=new Ct,_=new Ct,p=new Ct,d=new Ct,y=new Ct,x=new Ct,E=new Ct,M=[],R={};function S(){return 2*Math.PI/60/60*n.autoRotateSpeed}function A(){return Math.pow(.95,n.zoomSpeed)}function g(P){l.theta-=P}function T(P){l.phi-=P}const U=function(){const P=new N;return function(et,W){P.setFromMatrixColumn(W,0),P.multiplyScalar(-et),u.add(P)}}(),H=function(){const P=new N;return function(et,W){n.screenSpacePanning===!0?P.setFromMatrixColumn(W,1):(P.setFromMatrixColumn(W,0),P.crossVectors(n.object.up,P)),P.multiplyScalar(et),u.add(P)}}(),D=function(){const P=new N;return function(et,W){const dt=n.domElement;if(n.object.isPerspectiveCamera){const _t=n.object.position;P.copy(_t).sub(n.target);let mt=P.length();mt*=Math.tan(n.object.fov/2*Math.PI/180),U(2*et*mt/dt.clientHeight,n.object.matrix),H(2*W*mt/dt.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(U(et*(n.object.right-n.object.left)/n.object.zoom/dt.clientWidth,n.object.matrix),H(W*(n.object.top-n.object.bottom)/n.object.zoom/dt.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function O(P){n.object.isPerspectiveCamera?c/=P:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*P)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function F(P){n.object.isPerspectiveCamera?c*=P:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/P)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function q(P){f.set(P.clientX,P.clientY)}function k(P){y.set(P.clientX,P.clientY)}function X(P){_.set(P.clientX,P.clientY)}function Q(P){m.set(P.clientX,P.clientY),v.subVectors(m,f).multiplyScalar(n.rotateSpeed);const $=n.domElement;g(2*Math.PI*v.x/$.clientHeight),T(2*Math.PI*v.y/$.clientHeight),f.copy(m),n.update()}function Z(P){x.set(P.clientX,P.clientY),E.subVectors(x,y),E.y>0?O(A()):E.y<0&&F(A()),y.copy(x),n.update()}function ft(P){p.set(P.clientX,P.clientY),d.subVectors(p,_).multiplyScalar(n.panSpeed),D(d.x,d.y),_.copy(p),n.update()}function B(P){P.deltaY<0?F(A()):P.deltaY>0&&O(A()),n.update()}function tt(P){let $=!1;switch(P.code){case n.keys.UP:P.ctrlKey||P.metaKey||P.shiftKey?T(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):D(0,n.keyPanSpeed),$=!0;break;case n.keys.BOTTOM:P.ctrlKey||P.metaKey||P.shiftKey?T(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):D(0,-n.keyPanSpeed),$=!0;break;case n.keys.LEFT:P.ctrlKey||P.metaKey||P.shiftKey?g(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):D(n.keyPanSpeed,0),$=!0;break;case n.keys.RIGHT:P.ctrlKey||P.metaKey||P.shiftKey?g(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):D(-n.keyPanSpeed,0),$=!0;break}$&&(P.preventDefault(),n.update())}function J(){if(M.length===1)f.set(M[0].pageX,M[0].pageY);else{const P=.5*(M[0].pageX+M[1].pageX),$=.5*(M[0].pageY+M[1].pageY);f.set(P,$)}}function at(){if(M.length===1)_.set(M[0].pageX,M[0].pageY);else{const P=.5*(M[0].pageX+M[1].pageX),$=.5*(M[0].pageY+M[1].pageY);_.set(P,$)}}function ct(){const P=M[0].pageX-M[1].pageX,$=M[0].pageY-M[1].pageY,et=Math.sqrt(P*P+$*$);y.set(0,et)}function gt(){n.enableZoom&&ct(),n.enablePan&&at()}function Lt(){n.enableZoom&&ct(),n.enableRotate&&J()}function St(P){if(M.length==1)m.set(P.pageX,P.pageY);else{const et=nt(P),W=.5*(P.pageX+et.x),dt=.5*(P.pageY+et.y);m.set(W,dt)}v.subVectors(m,f).multiplyScalar(n.rotateSpeed);const $=n.domElement;g(2*Math.PI*v.x/$.clientHeight),T(2*Math.PI*v.y/$.clientHeight),f.copy(m)}function Qt(P){if(M.length===1)p.set(P.pageX,P.pageY);else{const $=nt(P),et=.5*(P.pageX+$.x),W=.5*(P.pageY+$.y);p.set(et,W)}d.subVectors(p,_).multiplyScalar(n.panSpeed),D(d.x,d.y),_.copy(p)}function Nt(P){const $=nt(P),et=P.pageX-$.x,W=P.pageY-$.y,dt=Math.sqrt(et*et+W*W);x.set(0,dt),E.set(0,Math.pow(x.y/y.y,n.zoomSpeed)),O(E.y),y.copy(x)}function z(P){n.enableZoom&&Nt(P),n.enablePan&&Qt(P)}function le(P){n.enableZoom&&Nt(P),n.enableRotate&&St(P)}function vt(P){n.enabled!==!1&&(M.length===0&&(n.domElement.setPointerCapture(P.pointerId),n.domElement.addEventListener("pointermove",wt),n.domElement.addEventListener("pointerup",xt)),b(P),P.pointerType==="touch"?ce(P):Vt(P))}function wt(P){n.enabled!==!1&&(P.pointerType==="touch"?fe(P):Ut(P))}function xt(P){Y(P),M.length===0&&(n.domElement.releasePointerCapture(P.pointerId),n.domElement.removeEventListener("pointermove",wt),n.domElement.removeEventListener("pointerup",xt)),n.dispatchEvent(ac),s=i.NONE}function Vt(P){let $;switch(P.button){case 0:$=n.mouseButtons.LEFT;break;case 1:$=n.mouseButtons.MIDDLE;break;case 2:$=n.mouseButtons.RIGHT;break;default:$=-1}switch($){case Ri.DOLLY:if(n.enableZoom===!1)return;k(P),s=i.DOLLY;break;case Ri.ROTATE:if(P.ctrlKey||P.metaKey||P.shiftKey){if(n.enablePan===!1)return;X(P),s=i.PAN}else{if(n.enableRotate===!1)return;q(P),s=i.ROTATE}break;case Ri.PAN:if(P.ctrlKey||P.metaKey||P.shiftKey){if(n.enableRotate===!1)return;q(P),s=i.ROTATE}else{if(n.enablePan===!1)return;X(P),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(va)}function Ut(P){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;Q(P);break;case i.DOLLY:if(n.enableZoom===!1)return;Z(P);break;case i.PAN:if(n.enablePan===!1)return;ft(P);break}}function bt(P){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(P.preventDefault(),n.dispatchEvent(va),B(P),n.dispatchEvent(ac))}function Ht(P){n.enabled===!1||n.enablePan===!1||tt(P)}function ce(P){switch(it(P),M.length){case 1:switch(n.touches.ONE){case Ci.ROTATE:if(n.enableRotate===!1)return;J(),s=i.TOUCH_ROTATE;break;case Ci.PAN:if(n.enablePan===!1)return;at(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case Ci.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;gt(),s=i.TOUCH_DOLLY_PAN;break;case Ci.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Lt(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(va)}function fe(P){switch(it(P),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;St(P),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;Qt(P),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;z(P),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;le(P),n.update();break;default:s=i.NONE}}function C(P){n.enabled!==!1&&P.preventDefault()}function b(P){M.push(P)}function Y(P){delete R[P.pointerId];for(let $=0;$<M.length;$++)if(M[$].pointerId==P.pointerId){M.splice($,1);return}}function it(P){let $=R[P.pointerId];$===void 0&&($=new Ct,R[P.pointerId]=$),$.set(P.pageX,P.pageY)}function nt(P){const $=P.pointerId===M[0].pointerId?M[1]:M[0];return R[$.pointerId]}n.domElement.addEventListener("contextmenu",C),n.domElement.addEventListener("pointerdown",vt),n.domElement.addEventListener("pointercancel",xt),n.domElement.addEventListener("wheel",bt,{passive:!1}),this.update()}}function Cn(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function su(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}/*!
 * GSAP 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Ve={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},or={duration:.5,overwrite:!1,delay:0},co,Ee,$t,Ze=1e8,Xt=1/Ze,Ba=Math.PI*2,Lg=Ba/4,Dg=0,au=Math.sqrt,Ug=Math.cos,Ig=Math.sin,ge=function(t){return typeof t=="string"},Jt=function(t){return typeof t=="function"},In=function(t){return typeof t=="number"},uo=function(t){return typeof t>"u"},xn=function(t){return typeof t=="object"},Ue=function(t){return t!==!1},ho=function(){return typeof window<"u"},ps=function(t){return Jt(t)||ge(t)},ou=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},ye=Array.isArray,za=/(?:-?\.?\d|\.)+/gi,lu=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ki=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,xa=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,cu=/[+-]=-?[.\d]+/,uu=/[^,'"\[\]\s]+/gi,Ng=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Yt,Ye,Ga,fo,We={},Ms={},hu,fu=function(t){return(Ms=bi(t,We))&&Oe},po=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Ss=function(t,e){return!e&&console.warn(t)},du=function(t,e){return t&&(We[t]=e)&&Ms&&(Ms[t]=e)||We},Dr=function(){return 0},Og={suppressEvents:!0,isStart:!0,kill:!1},_s={suppressEvents:!0,kill:!1},Fg={suppressEvents:!0},mo={},Yn=[],ka={},pu,ke={},Ma={},oc=30,gs=[],_o="",go=function(t){var e=t[0],n,i;if(xn(e)||Jt(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=gs.length;i--&&!gs[i].targetTest(e););n=gs[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Bu(t[i],n)))||t.splice(i,1);return t},vi=function(t){return t._gsap||go($e(t))[0]._gsap},mu=function(t,e,n){return(n=t[e])&&Jt(n)?t[e]():uo(n)&&t.getAttribute&&t.getAttribute(e)||n},Ie=function(t,e){return(t=t.split(",")).forEach(e)||t},ee=function(t){return Math.round(t*1e5)/1e5||0},ve=function(t){return Math.round(t*1e7)/1e7||0},tr=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},Bg=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},Es=function(){var t=Yn.length,e=Yn.slice(0),n,i;for(ka={},Yn.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},_u=function(t,e,n,i){Yn.length&&!Ee&&Es(),t.render(e,n,i||Ee&&e<0&&(t._initted||t._startAt)),Yn.length&&!Ee&&Es()},gu=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(uu).length<2?e:ge(t)?t.trim():t},vu=function(t){return t},Qe=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},zg=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},bi=function(t,e){for(var n in e)t[n]=e[n];return t},lc=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=xn(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},ys=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},Ar=function(t){var e=t.parent||Yt,n=t.keyframes?zg(ye(t.keyframes)):Qe;if(Ue(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},Gg=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},xu=function(t,e,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=t[i],o;if(s)for(o=e[s];a&&a[s]>o;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=a,e.parent=e._dp=t,e},Us=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,a=e._next;s?s._next=a:t[n]===e&&(t[n]=a),a?a._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},Zn=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},xi=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},kg=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Ha=function(t,e,n,i){return t._startAt&&(Ee?t._startAt.revert(_s):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},Hg=function r(t){return!t||t._ts&&r(t.parent)},cc=function(t){return t._repeat?lr(t._tTime,t=t.duration()+t._rDelay)*t:0},lr=function(t,e){var n=Math.floor(t/=e);return t&&n===t?n-1:n},Ts=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Is=function(t){return t._end=ve(t._start+(t._tDur/Math.abs(t._ts||t._rts||Xt)||0))},Ns=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=ve(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Is(t),n._dirty||xi(n,t)),t},Mu=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=Ts(t.rawTime(),e),(!e._dur||Hr(0,e.totalDuration(),n)-e._tTime>Xt)&&e.render(n,!0)),xi(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Xt}},dn=function(t,e,n,i){return e.parent&&Zn(e),e._start=ve((In(n)?n:n||t!==Yt?qe(t,n,e):t._time)+e._delay),e._end=ve(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),xu(t,e,"_first","_last",t._sort?"_start":0),Va(e)||(t._recent=e),i||Mu(t,e),t._ts<0&&Ns(t,t._tTime),t},Su=function(t,e){return(We.ScrollTrigger||po("scrollTrigger",e))&&We.ScrollTrigger.create(e,t)},Eu=function(t,e,n,i,s){if(xo(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!Ee&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&pu!==He.frame)return Yn.push(t),t._lazy=[s,i],1},Vg=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},Va=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},Wg=function(t,e,n,i){var s=t.ratio,a=e<0||!e&&(!t._start&&Vg(t)&&!(!t._initted&&Va(t))||(t._ts<0||t._dp._ts<0)&&!Va(t))?0:1,o=t._rDelay,l=0,c,u,h;if(o&&t._repeat&&(l=Hr(0,t._tDur,e),u=lr(l,o),t._yoyo&&u&1&&(a=1-a),u!==lr(t._tTime,o)&&(s=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==s||Ee||i||t._zTime===Xt||!e&&t._zTime){if(!t._initted&&Eu(t,e,i,n,l))return;for(h=t._zTime,t._zTime=e||(n?Xt:0),n||(n=e&&!h),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=l,c=t._pt;c;)c.r(a,c.d),c=c._next;e<0&&Ha(t,e,n,!0),t._onUpdate&&!n&&Je(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&Je(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&Zn(t,1),!n&&!Ee&&(Je(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},Xg=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},cr=function(t,e,n,i){var s=t._repeat,a=ve(e)||0,o=t._tTime/t._tDur;return o&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=s?s<0?1e10:ve(a*(s+1)+t._rDelay*s):a,o>0&&!i&&Ns(t,t._tTime=t._tDur*o),t.parent&&Is(t),n||xi(t.parent,t),t},uc=function(t){return t instanceof Ce?xi(t):cr(t,t._dur)},qg={_start:0,endTime:Dr,totalDuration:Dr},qe=function r(t,e,n){var i=t.labels,s=t._recent||qg,a=t.duration()>=Ze?s.endTime(!1):t._dur,o,l,c;return ge(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",o=e.indexOf("="),l==="<"||l===">"?(o>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(e in i||(i[e]=a),i[e]):(l=parseFloat(e.charAt(o-1)+e.substr(o+1)),c&&n&&(l=l/100*(ye(n)?n[0]:n).totalDuration()),o>1?r(t,e.substr(0,o-1),n)+l:a+l)):e==null?a:+e},wr=function(t,e,n){var i=In(e[1]),s=(i?2:1)+(t<2?0:1),a=e[s],o,l;if(i&&(a.duration=e[1]),a.parent=n,t){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Ue(l.vars.inherit)&&l.parent;a.immediateRender=Ue(o.immediateRender),t<2?a.runBackwards=1:a.startAt=e[s-1]}return new ae(e[0],a,e[s+1])},Qn=function(t,e){return t||t===0?e(t):e},Hr=function(t,e,n){return n<t?t:n>e?e:n},Se=function(t,e){return!ge(t)||!(e=Ng.exec(t))?"":e[1]},Yg=function(t,e,n){return Qn(n,function(i){return Hr(t,e,i)})},Wa=[].slice,yu=function(t,e){return t&&xn(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&xn(t[0]))&&!t.nodeType&&t!==Ye},jg=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return ge(i)&&!e||yu(i,1)?(s=n).push.apply(s,$e(i)):n.push(i)})||n},$e=function(t,e,n){return $t&&!e&&$t.selector?$t.selector(t):ge(t)&&!n&&(Ga||!ur())?Wa.call((e||fo).querySelectorAll(t),0):ye(t)?jg(t,n):yu(t)?Wa.call(t,0):t?[t]:[]},Xa=function(t){return t=$e(t)[0]||Ss("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return $e(e,n.querySelectorAll?n:n===t?Ss("Invalid scope")||fo.createElement("div"):t)}},Tu=function(t){return t.sort(function(){return .5-Math.random()})},bu=function(t){if(Jt(t))return t;var e=xn(t)?t:{each:t},n=Mi(e.ease),i=e.from||0,s=parseFloat(e.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=e.axis,u=i,h=i;return ge(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],h=i[1]),function(f,m,v){var _=(v||e).length,p=a[_],d,y,x,E,M,R,S,A,g;if(!p){if(g=e.grid==="auto"?0:(e.grid||[1,Ze])[1],!g){for(S=-Ze;S<(S=v[g++].getBoundingClientRect().left)&&g<_;);g--}for(p=a[_]=[],d=l?Math.min(g,_)*u-.5:i%g,y=g===Ze?0:l?_*h/g-.5:i/g|0,S=0,A=Ze,R=0;R<_;R++)x=R%g-d,E=y-(R/g|0),p[R]=M=c?Math.abs(c==="y"?E:x):au(x*x+E*E),M>S&&(S=M),M<A&&(A=M);i==="random"&&Tu(p),p.max=S-A,p.min=A,p.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(g>_?_-1:c?c==="y"?_/g:g:Math.max(g,_/g))||0)*(i==="edges"?-1:1),p.b=_<0?s-_:s,p.u=Se(e.amount||e.each)||0,n=n&&_<0?Nu(n):n}return _=(p[f]-p.min)/p.max||0,ve(p.b+(n?n(_):_)*p.v)+p.u}},qa=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=ve(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(In(n)?0:Se(n))}},Au=function(t,e){var n=ye(t),i,s;return!n&&xn(t)&&(i=n=t.radius||Ze,t.values?(t=$e(t.values),(s=!In(t[0]))&&(i*=i)):t=qa(t.increment)),Qn(e,n?Jt(t)?function(a){return s=t(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=Ze,u=0,h=t.length,f,m;h--;)s?(f=t[h].x-o,m=t[h].y-l,f=f*f+m*m):f=Math.abs(t[h]-o),f<c&&(c=f,u=h);return u=!i||c<=i?t[u]:a,s||u===a||In(a)?u:u+Se(a)}:qa(t))},wu=function(t,e,n,i){return Qn(ye(t)?!e:n===!0?!!(n=0):!i,function(){return ye(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},Kg=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,a){return a(s)},i)}},Zg=function(t,e){return function(n){return t(parseFloat(n))+(e||Se(n))}},$g=function(t,e,n){return Cu(t,e,0,1,n)},Ru=function(t,e,n){return Qn(n,function(i){return t[~~e(i)]})},Jg=function r(t,e,n){var i=e-t;return ye(t)?Ru(t,r(0,t.length),e):Qn(n,function(s){return(i+(s-t)%i)%i+t})},Qg=function r(t,e,n){var i=e-t,s=i*2;return ye(t)?Ru(t,r(0,t.length-1),e):Qn(n,function(a){return a=(s+(a-t)%s)%s||0,t+(a>i?s-a:a)})},Ur=function(t){for(var e=0,n="",i,s,a,o;~(i=t.indexOf("random(",e));)a=t.indexOf(")",i),o=t.charAt(i+7)==="[",s=t.substr(i+7,a-i-7).match(o?uu:za),n+=t.substr(e,i-e)+wu(o?s:+s[0],o?0:+s[1],+s[2]||1e-5),e=a+1;return n+t.substr(e,t.length-e)},Cu=function(t,e,n,i,s){var a=e-t,o=i-n;return Qn(s,function(l){return n+((l-t)/a*o||0)})},t0=function r(t,e,n,i){var s=isNaN(t+e)?0:function(m){return(1-m)*t+m*e};if(!s){var a=ge(t),o={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),a)t={p:t},e={p:e};else if(ye(t)&&!ye(e)){for(u=[],h=t.length,f=h-2,c=1;c<h;c++)u.push(r(t[c-1],t[c]));h--,s=function(v){v*=h;var _=Math.min(f,~~v);return u[_](v-_)},n=e}else i||(t=bi(ye(t)?[]:{},t));if(!u){for(l in e)vo.call(o,t,l,"get",e[l]);s=function(v){return Eo(v,o)||(a?t.p:t)}}}return Qn(n,s)},hc=function(t,e,n){var i=t.labels,s=Ze,a,o,l;for(a in i)o=i[a]-e,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},Je=function(t,e,n){var i=t.vars,s=i[e],a=$t,o=t._ctx,l,c,u;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&Yn.length&&Es(),o&&($t=o),u=l?s.apply(c,l):s.call(c),$t=a,u},yr=function(t){return Zn(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Ee),t.progress()<1&&Je(t,"onInterrupt"),t},Zi,Pu=[],Lu=function(t){if(ho()&&t){t=!t.name&&t.default||t;var e=t.name,n=Jt(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:Dr,render:Eo,add:vo,kill:_0,modifier:m0,rawVars:0},a={targetTest:0,get:0,getSetter:So,aliases:{},register:0};if(ur(),t!==i){if(ke[e])return;Qe(i,Qe(ys(t,s),a)),bi(i.prototype,bi(s,ys(t,a))),ke[i.prop=e]=i,t.targetTest&&(gs.push(i),mo[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}du(e,i),t.register&&t.register(Oe,i,Ne)}else t&&Pu.push(t)},Wt=255,Tr={aqua:[0,Wt,Wt],lime:[0,Wt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Wt],navy:[0,0,128],white:[Wt,Wt,Wt],olive:[128,128,0],yellow:[Wt,Wt,0],orange:[Wt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Wt,0,0],pink:[Wt,192,203],cyan:[0,Wt,Wt],transparent:[Wt,Wt,Wt,0]},Sa=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*Wt+.5|0},Du=function(t,e,n){var i=t?In(t)?[t>>16,t>>8&Wt,t&Wt]:0:Tr.black,s,a,o,l,c,u,h,f,m,v;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Tr[t])i=Tr[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),a=t.charAt(2),o=t.charAt(3),t="#"+s+s+a+a+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&Wt,i&Wt,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&Wt,t&Wt]}else if(t.substr(0,3)==="hsl"){if(i=v=t.match(za),!e)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,i.length>3&&(i[3]*=1),i[0]=Sa(l+1/3,s,a),i[1]=Sa(l,s,a),i[2]=Sa(l-1/3,s,a);else if(~t.indexOf("="))return i=t.match(lu),n&&i.length<4&&(i[3]=1),i}else i=t.match(za)||Tr.transparent;i=i.map(Number)}return e&&!v&&(s=i[0]/Wt,a=i[1]/Wt,o=i[2]/Wt,h=Math.max(s,a,o),f=Math.min(s,a,o),u=(h+f)/2,h===f?l=c=0:(m=h-f,c=u>.5?m/(2-h-f):m/(h+f),l=h===s?(a-o)/m+(a<o?6:0):h===a?(o-s)/m+2:(s-a)/m+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Uu=function(t){var e=[],n=[],i=-1;return t.split(jn).forEach(function(s){var a=s.match(Ki)||[];e.push.apply(e,a),n.push(i+=a.length+1)}),e.c=n,e},fc=function(t,e,n){var i="",s=(t+i).match(jn),a=e?"hsla(":"rgba(",o=0,l,c,u,h;if(!s)return t;if(s=s.map(function(f){return(f=Du(f,e,1))&&a+(e?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=Uu(t),l=n.c,l.join(i)!==u.c.join(i)))for(c=t.replace(jn,"1").split(Ki),h=c.length-1;o<h;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=t.split(jn),h=c.length-1;o<h;o++)i+=c[o]+s[o];return i+c[h]},jn=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Tr)r+="|"+t+"\\b";return new RegExp(r+")","gi")}(),e0=/hsl[a]?\(/,Iu=function(t){var e=t.join(" "),n;if(jn.lastIndex=0,jn.test(e))return n=e0.test(e),t[1]=fc(t[1],n),t[0]=fc(t[0],n,Uu(t[1])),!0},Ir,He=function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,u,h,f,m,v=function _(p){var d=r()-i,y=p===!0,x,E,M,R;if(d>t&&(n+=d-e),i+=d,M=i-n,x=M-a,(x>0||y)&&(R=++h.frame,f=M-h.time*1e3,h.time=M=M/1e3,a+=x+(x>=s?4:s-x),E=1),y||(l=c(_)),E)for(m=0;m<o.length;m++)o[m](M,f,R,p)};return h={time:0,frame:0,tick:function(){v(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){hu&&(!Ga&&ho()&&(Ye=Ga=window,fo=Ye.document||{},We.gsap=Oe,(Ye.gsapVersions||(Ye.gsapVersions=[])).push(Oe.version),fu(Ms||Ye.GreenSockGlobals||!Ye.gsap&&Ye||{}),u=Ye.requestAnimationFrame,Pu.forEach(Lu)),l&&h.sleep(),c=u||function(p){return setTimeout(p,a-h.time*1e3+1|0)},Ir=1,v(2))},sleep:function(){(u?Ye.cancelAnimationFrame:clearTimeout)(l),Ir=0,c=Dr},lagSmoothing:function(p,d){t=p||1/0,e=Math.min(d||33,t)},fps:function(p){s=1e3/(p||240),a=h.time*1e3+s},add:function(p,d,y){var x=d?function(E,M,R,S){p(E,M,R,S),h.remove(x)}:p;return h.remove(p),o[y?"unshift":"push"](x),ur(),x},remove:function(p,d){~(d=o.indexOf(p))&&o.splice(d,1)&&m>=d&&m--},_listeners:o},h}(),ur=function(){return!Ir&&He.wake()},Bt={},n0=/^[\d.\-M][\d.\-,\s]/,i0=/["']/g,r0=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),e[i]=isNaN(c)?c.replace(i0,"").trim():+c,i=l.substr(o+1).trim();return e},s0=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},a0=function(t){var e=(t+"").split("("),n=Bt[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[r0(e[1])]:s0(t).split(",").map(gu)):Bt._CE&&n0.test(t)?Bt._CE("",t):n},Nu=function(t){return function(e){return 1-t(1-e)}},Ou=function r(t,e){for(var n=t._first,i;n;)n instanceof Ce?r(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?r(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},Mi=function(t,e){return t&&(Jt(t)?t:Bt[t]||a0(t))||e},wi=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},a;return Ie(t,function(o){Bt[o]=We[o]=s,Bt[a=o.toLowerCase()]=n;for(var l in s)Bt[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Bt[o+"."+l]=s[l]}),s},Fu=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Ea=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),a=s/Ba*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*Ig((u-a)*s)+1},l=t==="out"?o:t==="in"?function(c){return 1-o(1-c)}:Fu(o);return s=Ba/s,l.config=function(c,u){return r(t,c,u)},l},ya=function r(t,e){e===void 0&&(e=1.70158);var n=function(a){return a?--a*a*((e+1)*a+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:Fu(n);return i.config=function(s){return r(t,s)},i};Ie("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;wi(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});Bt.Linear.easeNone=Bt.none=Bt.Linear.easeIn;wi("Elastic",Ea("in"),Ea("out"),Ea());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(o){return o<e?r*o*o:o<n?r*Math.pow(o-1.5/t,2)+.75:o<i?r*(o-=2.25/t)*o+.9375:r*Math.pow(o-2.625/t,2)+.984375};wi("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);wi("Expo",function(r){return r?Math.pow(2,10*(r-1)):0});wi("Circ",function(r){return-(au(1-r*r)-1)});wi("Sine",function(r){return r===1?1:-Ug(r*Lg)+1});wi("Back",ya("in"),ya("out"),ya());Bt.SteppedEase=Bt.steps=We.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,a=1-Xt;return function(o){return((i*Hr(0,a,o)|0)+s)*n}}};or.ease=Bt["quad.out"];Ie("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return _o+=r+","+r+"Params,"});var Bu=function(t,e){this.id=Dg++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:mu,this.set=e?e.getSetter:So},Nr=function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,cr(this,+e.duration,1,1),this.data=e.data,$t&&(this._ctx=$t,$t.data.push(this)),Ir||He.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,cr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(ur(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Ns(this,n),!s._dp||s.parent||Mu(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&dn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Xt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),_u(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+cc(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+cc(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?lr(this._tTime,s)+1:1},t.timeScale=function(n){if(!arguments.length)return this._rts===-Xt?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?Ts(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Xt?0:this._rts,this.totalTime(Hr(-Math.abs(this._delay),this._tDur,i),!0),Is(this),kg(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ur(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Xt&&(this._tTime-=Xt)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&dn(i,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Ue(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ts(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=Fg);var i=Ee;return Ee=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Ee=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(i._ts||1),i=i._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1/0:this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,uc(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,uc(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(qe(this,n),Ue(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Ue(i))},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Xt:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Xt,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Xt)},t.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},t.then=function(n){var i=this;return new Promise(function(s){var a=Jt(n)?n:vu,o=function(){var c=i.then;i.then=null,Jt(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=c),s(a),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?o():i._prom=o})},t.kill=function(){yr(this)},r}();Qe(Nr.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Xt,_prom:0,_ps:!1,_rts:1});var Ce=function(r){su(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Ue(n.sortChildren),Yt&&dn(n.parent||Yt,Cn(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Su(Cn(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,a){return wr(0,arguments,this),this},e.from=function(i,s,a){return wr(1,arguments,this),this},e.fromTo=function(i,s,a,o){return wr(2,arguments,this),this},e.set=function(i,s,a){return s.duration=0,s.parent=this,Ar(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new ae(i,s,qe(this,a),1),this},e.call=function(i,s,a){return dn(this,ae.delayedCall(0,i,s),a)},e.staggerTo=function(i,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new ae(i,a,qe(this,l)),this},e.staggerFrom=function(i,s,a,o,l,c,u){return a.runBackwards=1,Ar(a).immediateRender=Ue(a.immediateRender),this.staggerTo(i,s,a,o,l,c,u)},e.staggerFromTo=function(i,s,a,o,l,c,u,h){return o.startAt=a,Ar(o).immediateRender=Ue(o.immediateRender),this.staggerTo(i,s,o,l,c,u,h)},e.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:ve(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,m,v,_,p,d,y,x,E,M,R,S;if(this!==Yt&&u>l&&i>=0&&(u=l),u!==this._tTime||a||h){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),f=u,E=this._start,x=this._ts,d=!x,h&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(R=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,a);if(f=ve(u%p),u===l?(_=this._repeat,f=c):(_=~~(u/p),_&&_===u/p&&(f=c,_--),f>c&&(f=c)),M=lr(this._tTime,p),!o&&this._tTime&&M!==_&&this._tTime-M*p-this._dur<=0&&(M=_),R&&_&1&&(f=c-f,S=1),_!==M&&!this._lock){var A=R&&M&1,g=A===(R&&_&1);if(_<M&&(A=!A),o=A?0:u%c?c:u,this._lock=1,this.render(o||(S?0:ve(_*p)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Je(this,"onRepeat"),this.vars.repeatRefresh&&!S&&(this.invalidate()._lock=1),o&&o!==this._time||d!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,g&&(this._lock=2,o=A?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!S&&this.invalidate()),this._lock=0,!this._ts&&!d)return this;Ou(this,S)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=Xg(this,ve(o),ve(f)),y&&(u-=f-(f=y._start))),this._tTime=u,this._time=f,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&f&&!s&&!_&&(Je(this,"onStart"),this._tTime!==u))return this;if(f>=o&&i>=0)for(m=this._first;m;){if(v=m._next,(m._act||f>=m._start)&&m._ts&&y!==m){if(m.parent!==this)return this.render(i,s,a);if(m.render(m._ts>0?(f-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(f-m._start)*m._ts,s,a),f!==this._time||!this._ts&&!d){y=0,v&&(u+=this._zTime=-Xt);break}}m=v}else{m=this._last;for(var T=i<0?i:f;m;){if(v=m._prev,(m._act||T<=m._end)&&m._ts&&y!==m){if(m.parent!==this)return this.render(i,s,a);if(m.render(m._ts>0?(T-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(T-m._start)*m._ts,s,a||Ee&&(m._initted||m._startAt)),f!==this._time||!this._ts&&!d){y=0,v&&(u+=this._zTime=T?-Xt:Xt);break}}m=v}}if(y&&!s&&(this.pause(),y.render(f>=o?0:-Xt)._zTime=f>=o?1:-1,this._ts))return this._start=E,Is(this),this.render(i,s,a);this._onUpdate&&!s&&Je(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(E===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Zn(this,1),!s&&!(i<0&&!o)&&(u||o||!l)&&(Je(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var a=this;if(In(s)||(s=qe(this,s,i)),!(i instanceof Nr)){if(ye(i))return i.forEach(function(o){return a.add(o,s)}),this;if(ge(i))return this.addLabel(i,s);if(Jt(i))i=ae.delayedCall(0,i);else return this}return this!==i?dn(this,i,s):this},e.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-Ze);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof ae?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},e.remove=function(i){return ge(i)?this.removeLabel(i):Jt(i)?this.killTweensOf(i):(Us(this,i),i===this._recent&&(this._recent=this._last),xi(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ve(He.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=qe(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,a){var o=ae.delayedCall(0,s||Dr,a);return o.data="isPause",this._hasPause=1,dn(this,o,qe(this,i))},e.removePause=function(i){var s=this._first;for(i=qe(this,i);s;)s._start===i&&s.data==="isPause"&&Zn(s),s=s._next},e.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)Hn!==o[l]&&o[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var a=[],o=$e(i),l=this._first,c=In(s),u;l;)l instanceof ae?Bg(l._targets,o)&&(c?(!Hn||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},e.tweenTo=function(i,s){s=s||{};var a=this,o=qe(a,i),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,m,v=ae.to(a,Qe({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||Xt,onStart:function(){if(a.pause(),!m){var p=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());v._dur!==p&&cr(v,p,0,1).render(v._time,!0,!0),m=1}u&&u.apply(v,h||[])}},s));return f?v.render(0):v},e.tweenFromTo=function(i,s,a){return this.tweenTo(s,Qe({startAt:{time:qe(this,i)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),hc(this,qe(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),hc(this,qe(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Xt)},e.shiftChildren=function(i,s,a){a===void 0&&(a=0);for(var o=this._first,l=this.labels,c;o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return xi(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),xi(this)},e.totalDuration=function(i){var s=0,a=this,o=a._last,l=Ze,c,u,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(h=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,dn(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=u/a._ts,a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;cr(a,a===Yt&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(i){if(Yt._ts&&(_u(Yt,Ts(i,Yt)),pu=He.frame),He.frame>=oc){oc+=Ve.autoSleep||120;var s=Yt._first;if((!s||!s._ts)&&Ve.autoSleep&&He._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||He.sleep()}}},t}(Nr);Qe(Ce.prototype,{_lock:0,_hasPause:0,_forcing:0});var o0=function(t,e,n,i,s,a,o){var l=new Ne(this._pt,t,e,0,1,Wu,null,s),c=0,u=0,h,f,m,v,_,p,d,y;for(l.b=n,l.e=i,n+="",i+="",(d=~i.indexOf("random("))&&(i=Ur(i)),a&&(y=[n,i],a(y,t,e),n=y[0],i=y[1]),f=n.match(xa)||[];h=xa.exec(i);)v=h[0],_=i.substring(c,h.index),m?m=(m+1)%5:_.substr(-5)==="rgba("&&(m=1),v!==f[u++]&&(p=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:p,c:v.charAt(1)==="="?tr(p,v)-p:parseFloat(v)-p,m:m&&m<4?Math.round:0},c=xa.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(cu.test(i)||d)&&(l.e=0),this._pt=l,l},vo=function(t,e,n,i,s,a,o,l,c,u){Jt(i)&&(i=i(s||0,t,a));var h=t[e],f=n!=="get"?n:Jt(h)?c?t[e.indexOf("set")||!Jt(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():h,m=Jt(h)?c?f0:Hu:Mo,v;if(ge(i)&&(~i.indexOf("random(")&&(i=Ur(i)),i.charAt(1)==="="&&(v=tr(f,i)+(Se(f)||0),(v||v===0)&&(i=v))),!u||f!==i||Ya)return!isNaN(f*i)&&i!==""?(v=new Ne(this._pt,t,e,+f||0,i-(f||0),typeof h=="boolean"?p0:Vu,0,m),c&&(v.fp=c),o&&v.modifier(o,this,t),this._pt=v):(!h&&!(e in t)&&po(e,i),o0.call(this,t,e,f,i,m,l||Ve.stringFilter,c))},l0=function(t,e,n,i,s){if(Jt(t)&&(t=Rr(t,s,e,n,i)),!xn(t)||t.style&&t.nodeType||ye(t)||ou(t))return ge(t)?Rr(t,s,e,n,i):t;var a={},o;for(o in t)a[o]=Rr(t[o],s,e,n,i);return a},zu=function(t,e,n,i,s,a){var o,l,c,u;if(ke[t]&&(o=new ke[t]).init(s,o.rawVars?e[t]:l0(e[t],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new Ne(n._pt,s,t,0,1,o.render,o,0,o.priority),n!==Zi))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},Hn,Ya,xo=function r(t,e,n){var i=t.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.onUpdateParams,h=i.callbackScope,f=i.runBackwards,m=i.yoyoEase,v=i.keyframes,_=i.autoRevert,p=t._dur,d=t._startAt,y=t._targets,x=t.parent,E=x&&x.data==="nested"?x.vars.targets:y,M=t._overwrite==="auto"&&!co,R=t.timeline,S,A,g,T,U,H,D,O,F,q,k,X,Q;if(R&&(!v||!s)&&(s="none"),t._ease=Mi(s,or.ease),t._yEase=m?Nu(Mi(m===!0?s:m,or.ease)):0,m&&t._yoyo&&!t._repeat&&(m=t._yEase,t._yEase=t._ease,t._ease=m),t._from=!R&&!!i.runBackwards,!R||v&&!i.stagger){if(O=y[0]?vi(y[0]).harness:0,X=O&&i[O.prop],S=ys(i,mo),d&&(d._zTime<0&&d.progress(1),e<0&&f&&o&&!_?d.render(-1,!0):d.revert(f&&p?_s:Og),d._lazy=0),a){if(Zn(t._startAt=ae.set(y,Qe({data:"isStart",overwrite:!1,parent:x,immediateRender:!0,lazy:!d&&Ue(l),startAt:null,delay:0,onUpdate:c,onUpdateParams:u,callbackScope:h,stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Ee||!o&&!_)&&t._startAt.revert(_s),o&&p&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(f&&p&&!d){if(e&&(o=!1),g=Qe({overwrite:!1,data:"isFromStart",lazy:o&&!d&&Ue(l),immediateRender:o,stagger:0,parent:x},S),X&&(g[O.prop]=X),Zn(t._startAt=ae.set(y,g)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Ee?t._startAt.revert(_s):t._startAt.render(-1,!0)),t._zTime=e,!o)r(t._startAt,Xt,Xt);else if(!e)return}for(t._pt=t._ptCache=0,l=p&&Ue(l)||l&&!p,A=0;A<y.length;A++){if(U=y[A],D=U._gsap||go(y)[A]._gsap,t._ptLookup[A]=q={},ka[D.id]&&Yn.length&&Es(),k=E===y?A:E.indexOf(U),O&&(F=new O).init(U,X||S,t,k,E)!==!1&&(t._pt=T=new Ne(t._pt,U,F.name,0,1,F.render,F,0,F.priority),F._props.forEach(function(Z){q[Z]=T}),F.priority&&(H=1)),!O||X)for(g in S)ke[g]&&(F=zu(g,S,t,k,U,E))?F.priority&&(H=1):q[g]=T=vo.call(t,U,g,"get",S[g],k,E,0,i.stringFilter);t._op&&t._op[A]&&t.kill(U,t._op[A]),M&&t._pt&&(Hn=t,Yt.killTweensOf(U,q,t.globalTime(e)),Q=!t.parent,Hn=0),t._pt&&l&&(ka[D.id]=1)}H&&Xu(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!Q,v&&e<=0&&R.render(Ze,!0,!0)},c0=function(t,e,n,i,s,a,o){var l=(t._pt&&t._ptCache||(t._ptCache={}))[e],c,u,h,f;if(!l)for(l=t._ptCache[e]=[],h=t._ptLookup,f=t._targets.length;f--;){if(c=h[f][e],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==e&&c.fp!==e;)c=c._next;if(!c)return Ya=1,t.vars[e]="+=0",xo(t,o),Ya=0,1;l.push(c)}for(f=l.length;f--;)u=l[f],c=u._pt||u,c.s=(i||i===0)&&!s?i:c.s+(i||0)+a*c.c,c.c=n-c.s,u.e&&(u.e=ee(n)+Se(u.e)),u.b&&(u.b=c.s+Se(u.b))},u0=function(t,e){var n=t[0]?vi(t[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return e;s=bi({},e);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},h0=function(t,e,n,i){var s=e.ease||i||"power1.inOut",a,o;if(ye(e))o=n[t]||(n[t]=[]),e.forEach(function(l,c){return o.push({t:c/(e.length-1)*100,v:l,e:s})});else for(a in e)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(t),v:e[a],e:s})},Rr=function(t,e,n,i,s){return Jt(t)?t.call(e,n,i,s):ge(t)&&~t.indexOf("random(")?Ur(t):t},Gu=_o+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",ku={};Ie(Gu+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return ku[r]=1});var ae=function(r){su(t,r);function t(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:Ar(i))||this;var l=o.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,m=l.overwrite,v=l.keyframes,_=l.defaults,p=l.scrollTrigger,d=l.yoyoEase,y=i.parent||Yt,x=(ye(n)||ou(n)?In(n[0]):"length"in i)?[n]:$e(n),E,M,R,S,A,g,T,U;if(o._targets=x.length?go(x):Ss("GSAP target "+n+" not found. https://greensock.com",!Ve.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=m,v||f||ps(c)||ps(u)){if(i=o.vars,E=o.timeline=new Ce({data:"nested",defaults:_||{},targets:y&&y.data==="nested"?y.vars.targets:x}),E.kill(),E.parent=E._dp=Cn(o),E._start=0,f||ps(c)||ps(u)){if(S=x.length,T=f&&bu(f),xn(f))for(A in f)~Gu.indexOf(A)&&(U||(U={}),U[A]=f[A]);for(M=0;M<S;M++)R=ys(i,ku),R.stagger=0,d&&(R.yoyoEase=d),U&&bi(R,U),g=x[M],R.duration=+Rr(c,Cn(o),M,g,x),R.delay=(+Rr(u,Cn(o),M,g,x)||0)-o._delay,!f&&S===1&&R.delay&&(o._delay=u=R.delay,o._start+=u,R.delay=0),E.to(g,R,T?T(M,g,x):0),E._ease=Bt.none;E.duration()?c=u=0:o.timeline=0}else if(v){Ar(Qe(E.vars.defaults,{ease:"none"})),E._ease=Mi(v.ease||i.ease||"none");var H=0,D,O,F;if(ye(v))v.forEach(function(q){return E.to(x,q,">")}),E.duration();else{R={};for(A in v)A==="ease"||A==="easeEach"||h0(A,v[A],R,v.easeEach);for(A in R)for(D=R[A].sort(function(q,k){return q.t-k.t}),H=0,M=0;M<D.length;M++)O=D[M],F={ease:O.e,duration:(O.t-(M?D[M-1].t:0))/100*c},F[A]=O.v,E.to(x,F,H),H+=F.duration;E.duration()<c&&E.to({},{duration:c-E.duration()})}}c||o.duration(c=E.duration())}else o.timeline=0;return m===!0&&!co&&(Hn=Cn(o),Yt.killTweensOf(x),Hn=0),dn(y,Cn(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(h||!c&&!v&&o._start===ve(y._time)&&Ue(h)&&Hg(Cn(o))&&y.data!=="nested")&&(o._tTime=-Xt,o.render(Math.max(0,-u)||0)),p&&Su(Cn(o),p),o}var e=t.prototype;return e.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-Xt&&!u?l:i<Xt?0:i,f,m,v,_,p,d,y,x,E;if(!c)Wg(this,i,s,a);else if(h!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(f=h,x=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,a);if(f=ve(h%_),h===l?(v=this._repeat,f=c):(v=~~(h/_),v&&v===h/_&&(f=c,v--),f>c&&(f=c)),d=this._yoyo&&v&1,d&&(E=this._yEase,f=c-f),p=lr(this._tTime,_),f===o&&!a&&this._initted)return this._tTime=h,this;v!==p&&(x&&this._yEase&&Ou(x,d),this.vars.repeatRefresh&&!d&&!this._lock&&(this._lock=a=1,this.render(ve(_*v),!0).invalidate()._lock=0))}if(!this._initted){if(Eu(this,u?i:f,a,s,h))return this._tTime=0,this;if(o!==this._time)return this;if(c!==this._dur)return this.render(i,s,a)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=y=(E||this._ease)(f/c),this._from&&(this.ratio=y=1-y),f&&!o&&!s&&!v&&(Je(this,"onStart"),this._tTime!==h))return this;for(m=this._pt;m;)m.r(y,m.d),m=m._next;x&&x.render(i<0?i:!f&&d?-Xt:x._dur*x._ease(f/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&Ha(this,i,s,a),Je(this,"onUpdate")),this._repeat&&v!==p&&this.vars.onRepeat&&!s&&this.parent&&Je(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Ha(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Zn(this,1),!s&&!(u&&!o)&&(h||o||d)&&(Je(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,a,o){Ir||He.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||xo(this,l),c=this._ease(l/this._dur),c0(this,i,s,a,o,c,l)?this.resetTo(i,s,a,o):(Ns(this,0),this.parent||xu(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?yr(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Hn&&Hn.vars.overwrite!==!0)._first||yr(this),this.parent&&a!==this.timeline.totalDuration()&&cr(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?$e(i):o,c=this._ptLookup,u=this._pt,h,f,m,v,_,p,d;if((!s||s==="all")&&Gg(o,l))return s==="all"&&(this._pt=0),yr(this);for(h=this._op=this._op||[],s!=="all"&&(ge(s)&&(_={},Ie(s,function(y){return _[y]=1}),s=_),s=u0(o,s)),d=o.length;d--;)if(~l.indexOf(o[d])){f=c[d],s==="all"?(h[d]=s,v=f,m={}):(m=h[d]=h[d]||{},v=s);for(_ in v)p=f&&f[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&Us(this,p,"_pt"),delete f[_]),m!=="all"&&(m[_]=1)}return this._initted&&!this._pt&&u&&yr(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return wr(1,arguments)},t.delayedCall=function(i,s,a,o){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},t.fromTo=function(i,s,a){return wr(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,a){return Yt.killTweensOf(i,s,a)},t}(Nr);Qe(ae.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Ie("staggerTo,staggerFrom,staggerFromTo",function(r){ae[r]=function(){var t=new Ce,e=Wa.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var Mo=function(t,e,n){return t[e]=n},Hu=function(t,e,n){return t[e](n)},f0=function(t,e,n,i){return t[e](i.fp,n)},d0=function(t,e,n){return t.setAttribute(e,n)},So=function(t,e){return Jt(t[e])?Hu:uo(t[e])&&t.setAttribute?d0:Mo},Vu=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},p0=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Wu=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},Eo=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},m0=function(t,e,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(t,e,n),s=a},_0=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?Us(this,e,"_pt"):e.dep||(n=1),e=i;return!n},g0=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},Xu=function(t){for(var e=t._pt,n,i,s,a;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:a)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:a=e,e=n}t._pt=s},Ne=function(){function r(e,n,i,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||Vu,this.d=l||this,this.set=c||Mo,this.pr=u||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=g0,this.m=n,this.mt=s,this.tween=i},r}();Ie(_o+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return mo[r]=1});We.TweenMax=We.TweenLite=ae;We.TimelineLite=We.TimelineMax=Ce;Yt=new Ce({sortChildren:!1,defaults:or,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ve.stringFilter=Iu;var Si=[],vs={},v0=[],dc=0,x0=0,Ta=function(t){return(vs[t]||v0).map(function(e){return e()})},ja=function(){var t=Date.now(),e=[];t-dc>2&&(Ta("matchMediaInit"),Si.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=Ye.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&e.push(n))}),Ta("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n)}),dc=t,Ta("matchMedia"))},qu=function(){function r(e,n){this.selector=n&&Xa(n),this.data=[],this._r=[],this.isReverted=!1,this.id=x0++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){Jt(n)&&(s=i,i=n,n=Jt);var a=this,o=function(){var c=$t,u=a.selector,h;return c&&c!==a&&c.data.push(a),s&&(a.selector=Xa(s)),$t=a,h=i.apply(a,arguments),Jt(h)&&a._r.push(h),$t=c,a.selector=u,a.isReverted=!1,h};return a.last=o,n===Jt?o(a):n?a[n]=o:o},t.ignore=function(n){var i=$t;$t=null,n(this),$t=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof ae&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n){var a=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}))}),a.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,c){return c.g-l.g||-1/0}).forEach(function(l){return l.t.revert(n)}),this.data.forEach(function(l){return!(l instanceof ae)&&l.revert&&l.revert(n)}),this._r.forEach(function(l){return l(n,s)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),i)for(var o=Si.length;o--;)Si[o].id===this.id&&Si.splice(o,1)},t.revert=function(n){this.kill(n||{})},r}(),M0=function(){function r(e){this.contexts=[],this.scope=e}var t=r.prototype;return t.add=function(n,i,s){xn(n)||(n={matches:n});var a=new qu(0,s||this.scope),o=a.conditions={},l,c,u;$t&&!a.selector&&(a.selector=$t.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=Ye.matchMedia(n[c]),l&&(Si.indexOf(a)<0&&Si.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(ja):l.addEventListener("change",ja)));return u&&i(a),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),bs={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return Lu(i)})},timeline:function(t){return new Ce(t)},getTweensOf:function(t,e){return Yt.getTweensOf(t,e)},getProperty:function(t,e,n,i){ge(t)&&(t=$e(t)[0]);var s=vi(t||{}).get,a=n?vu:gu;return n==="native"&&(n=""),t&&(e?a((ke[e]&&ke[e].get||s)(t,e,n,i)):function(o,l,c){return a((ke[o]&&ke[o].get||s)(t,o,l,c))})},quickSetter:function(t,e,n){if(t=$e(t),t.length>1){var i=t.map(function(u){return Oe.quickSetter(u,e,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}t=t[0]||{};var a=ke[e],o=vi(t),l=o.harness&&(o.harness.aliases||{})[e]||e,c=a?function(u){var h=new a;Zi._pt=0,h.init(t,n?u+n:u,Zi,0,[t]),h.render(1,h),Zi._pt&&Eo(1,Zi)}:o.set(t,l);return a?c:function(u){return c(t,l,n?u+n:u,o,1)}},quickTo:function(t,e,n){var i,s=Oe.to(t,bi((i={},i[e]="+=0.1",i.paused=!0,i),n||{})),a=function(l,c,u){return s.resetTo(e,l,c,u)};return a.tween=s,a},isTweening:function(t){return Yt.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Mi(t.ease,or.ease)),lc(or,t||{})},config:function(t){return lc(Ve,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,a=t.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!ke[o]&&!We[o]&&Ss(e+" effect requires "+o+" plugin.")}),Ma[e]=function(o,l,c){return n($e(o),Qe(l||{},s),c)},a&&(Ce.prototype[e]=function(o,l,c){return this.add(Ma[e](o,xn(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){Bt[t]=Mi(e)},parseEase:function(t,e){return arguments.length?Mi(t,e):Bt},getById:function(t){return Yt.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Ce(t),i,s;for(n.smoothChildTiming=Ue(t.smoothChildTiming),Yt.remove(n),n._dp=0,n._time=n._tTime=Yt._time,i=Yt._first;i;)s=i._next,(e||!(!i._dur&&i instanceof ae&&i.vars.onComplete===i._targets[0]))&&dn(n,i,i._start-i._delay),i=s;return dn(Yt,n,0),n},context:function(t,e){return t?new qu(t,e):$t},matchMedia:function(t){return new M0(t)},matchMediaRefresh:function(){return Si.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||ja()},addEventListener:function(t,e){var n=vs[t]||(vs[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=vs[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:Jg,wrapYoyo:Qg,distribute:bu,random:wu,snap:Au,normalize:$g,getUnit:Se,clamp:Yg,splitColor:Du,toArray:$e,selector:Xa,mapRange:Cu,pipe:Kg,unitize:Zg,interpolate:t0,shuffle:Tu},install:fu,effects:Ma,ticker:He,updateRoot:Ce.updateRoot,plugins:ke,globalTimeline:Yt,core:{PropTween:Ne,globals:du,Tween:ae,Timeline:Ce,Animation:Nr,getCache:vi,_removeLinkedListItem:Us,reverting:function(){return Ee},context:function(t){return t&&$t&&($t.data.push(t),t._ctx=$t),$t},suppressOverwrites:function(t){return co=t}}};Ie("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return bs[r]=ae[r]});He.add(Ce.updateRoot);Zi=bs.to({},{duration:0});var S0=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},E0=function(t,e){var n=t._targets,i,s,a;for(i in e)for(s=n.length;s--;)a=t._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=S0(a,i)),a&&a.modifier&&a.modifier(e[i],t,n[s],i))},ba=function(t,e){return{name:t,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(ge(s)&&(l={},Ie(s,function(u){return l[u]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}E0(o,s)}}}},Oe=bs.registerPlugin({name:"attr",init:function(t,e,n,i,s){var a,o,l;this.tween=n;for(a in e)l=t.getAttribute(a)||"",o=this.add(t,"setAttribute",(l||0)+"",e[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(t,e){for(var n=e._pt;n;)Ee?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},ba("roundProps",qa),ba("modifiers"),ba("snap",Au))||bs;ae.version=Ce.version=Oe.version="3.12.2";hu=1;ho()&&ur();Bt.Power0;Bt.Power1;Bt.Power2;Bt.Power3;Bt.Power4;Bt.Linear;Bt.Quad;Bt.Cubic;Bt.Quart;Bt.Quint;Bt.Strong;Bt.Elastic;Bt.Back;Bt.SteppedEase;Bt.Bounce;Bt.Sine;Bt.Expo;Bt.Circ;/*!
 * CSSPlugin 3.12.2
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var pc,Vn,er,yo,di,mc,To,y0=function(){return typeof window<"u"},Nn={},hi=180/Math.PI,nr=Math.PI/180,qi=Math.atan2,_c=1e8,bo=/([A-Z])/g,T0=/(left|right|width|margin|padding|x)/i,b0=/[\s,\(]\S/,mn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Ka=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},A0=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},w0=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},R0=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},Yu=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},ju=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},C0=function(t,e,n){return t.style[e]=n},P0=function(t,e,n){return t.style.setProperty(e,n)},L0=function(t,e,n){return t._gsap[e]=n},D0=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},U0=function(t,e,n,i,s){var a=t._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},I0=function(t,e,n,i,s){var a=t._gsap;a[e]=n,a.renderTransform(s,a)},jt="transform",cn=jt+"Origin",N0=function r(t,e){var n=this,i=this.target,s=i.style;if(t in Nn&&s){if(this.tfm=this.tfm||{},t!=="transform")t=mn[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=Pn(i,a)}):this.tfm[t]=i._gsap.x?i._gsap[t]:Pn(i,t);else return mn.transform.split(",").forEach(function(a){return r.call(n,a,e)});if(this.props.indexOf(jt)>=0)return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(cn,e,"")),t=jt}(s||e)&&this.props.push(t,e,s[t])},Ku=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},O0=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,a;for(s=0;s<t.length;s+=3)t[s+1]?e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(bo,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=To(),(!s||!s.isStart)&&!n[jt]&&(Ku(n),i.uncache=1)}},Zu=function(t,e){var n={target:t,props:[],revert:O0,save:N0};return t._gsap||Oe.core.getCache(t),e&&e.split(",").forEach(function(i){return n.save(i)}),n},$u,Za=function(t,e){var n=Vn.createElementNS?Vn.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Vn.createElement(t);return n.style?n:Vn.createElement(t)},gn=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(bo,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,hr(e)||e,1)||""},gc="O,Moz,ms,Ms,Webkit".split(","),hr=function(t,e,n){var i=e||di,s=i.style,a=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(gc[a]+t in s););return a<0?null:(a===3?"ms":a>=0?gc[a]:"")+t},$a=function(){y0()&&window.document&&(pc=window,Vn=pc.document,er=Vn.documentElement,di=Za("div")||{style:{}},Za("div"),jt=hr(jt),cn=jt+"Origin",di.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",$u=!!hr("perspective"),To=Oe.core.reverting,yo=1)},Aa=function r(t){var e=Za("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,s=this.style.cssText,a;if(er.appendChild(e),e.appendChild(this),this.style.display="block",t)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=r}catch{}else this._gsapBBox&&(a=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),er.removeChild(e),this.style.cssText=s,a},vc=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Ju=function(t){var e;try{e=t.getBBox()}catch{e=Aa.call(t,!0)}return e&&(e.width||e.height)||t.getBBox===Aa||(e=Aa.call(t,!0)),e&&!e.width&&!e.x&&!e.y?{x:+vc(t,["x","cx","x1"])||0,y:+vc(t,["y","cy","y1"])||0,width:0,height:0}:e},Qu=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Ju(t))},Or=function(t,e){if(e){var n=t.style;e in Nn&&e!==cn&&(e=jt),n.removeProperty?((e.substr(0,2)==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(e.replace(bo,"-$1").toLowerCase())):n.removeAttribute(e)}},Wn=function(t,e,n,i,s,a){var o=new Ne(t._pt,e,n,0,1,a?ju:Yu);return t._pt=o,o.b=i,o.e=s,t._props.push(n),o},xc={deg:1,rad:1,turn:1},F0={grid:1,flex:1},$n=function r(t,e,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=di.style,l=T0.test(e),c=t.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",m=i==="%",v,_,p,d;return i===a||!s||xc[i]||xc[a]?s:(a!=="px"&&!f&&(s=r(t,e,n,"px")),d=t.getCTM&&Qu(t),(m||a==="%")&&(Nn[e]||~e.indexOf("adius"))?(v=d?t.getBBox()[l?"width":"height"]:t[u],ee(m?s/v*h:s/100*v)):(o[l?"width":"height"]=h+(f?a:i),_=~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,d&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===Vn||!_.appendChild)&&(_=Vn.body),p=_._gsap,p&&m&&p.width&&l&&p.time===He.time&&!p.uncache?ee(s/p.width*h):((m||a==="%")&&!F0[gn(_,"display")]&&(o.position=gn(t,"position")),_===t&&(o.position="static"),_.appendChild(di),v=di[u],_.removeChild(di),o.position="absolute",l&&m&&(p=vi(_),p.time=He.time,p.width=_[u]),ee(f?v*s/h:v&&s?h/v*s:0))))},Pn=function(t,e,n,i){var s;return yo||$a(),e in mn&&e!=="transform"&&(e=mn[e],~e.indexOf(",")&&(e=e.split(",")[0])),Nn[e]&&e!=="transform"?(s=Br(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:ws(gn(t,cn))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=As[e]&&As[e](t,e,n)||gn(t,e)||mu(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?$n(t,e,s,n)+n:s},B0=function(t,e,n,i){if(!n||n==="none"){var s=hr(e,t,1),a=s&&gn(t,s,1);a&&a!==n?(e=s,n=a):e==="borderColor"&&(n=gn(t,"borderTopColor"))}var o=new Ne(this._pt,t.style,e,0,1,Wu),l=0,c=0,u,h,f,m,v,_,p,d,y,x,E,M;if(o.b=n,o.e=i,n+="",i+="",i==="auto"&&(t.style[e]=i,i=gn(t,e)||i,t.style[e]=n),u=[n,i],Iu(u),n=u[0],i=u[1],f=n.match(Ki)||[],M=i.match(Ki)||[],M.length){for(;h=Ki.exec(i);)p=h[0],y=i.substring(l,h.index),v?v=(v+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(v=1),p!==(_=f[c++]||"")&&(m=parseFloat(_)||0,E=_.substr((m+"").length),p.charAt(1)==="="&&(p=tr(m,p)+E),d=parseFloat(p),x=p.substr((d+"").length),l=Ki.lastIndex-x.length,x||(x=x||Ve.units[e]||E,l===i.length&&(i+=x,o.e+=x)),E!==x&&(m=$n(t,e,_,x)||0),o._pt={_next:o._pt,p:y||c===1?y:",",s:m,c:d-m,m:v&&v<4||e==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=e==="display"&&i==="none"?ju:Yu;return cu.test(i)&&(o.e=0),this._pt=o,o},Mc={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},z0=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=Mc[n]||n,e[1]=Mc[i]||i,e.join(" ")},G0=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],Nn[o]&&(l=1,o=o==="transformOrigin"?cn:jt),Or(n,o);l&&(Or(n,jt),a&&(a.svg&&n.removeAttribute("transform"),Br(n,1),a.uncache=1,Ku(i)))}},As={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var a=t._pt=new Ne(t._pt,e,n,0,0,G0);return a.u=i,a.pr=-10,a.tween=s,t._props.push(n),1}}},Fr=[1,0,0,1,0,0],th={},eh=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Sc=function(t){var e=gn(t,jt);return eh(e)?Fr:e.substr(7).match(lu).map(ee)},Ao=function(t,e){var n=t._gsap||vi(t),i=t.style,s=Sc(t),a,o,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Fr:s):(s===Fr&&!t.offsetParent&&t!==er&&!n.svg&&(l=i.display,i.display="block",a=t.parentNode,(!a||!t.offsetParent)&&(c=1,o=t.nextElementSibling,er.appendChild(t)),s=Sc(t),l?i.display=l:Or(t,"display"),c&&(o?a.insertBefore(t,o):a?a.appendChild(t):er.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Ja=function(t,e,n,i,s,a){var o=t._gsap,l=s||Ao(t,!0),c=o.xOrigin||0,u=o.yOrigin||0,h=o.xOffset||0,f=o.yOffset||0,m=l[0],v=l[1],_=l[2],p=l[3],d=l[4],y=l[5],x=e.split(" "),E=parseFloat(x[0])||0,M=parseFloat(x[1])||0,R,S,A,g;n?l!==Fr&&(S=m*p-v*_)&&(A=E*(p/S)+M*(-_/S)+(_*y-p*d)/S,g=E*(-v/S)+M*(m/S)-(m*y-v*d)/S,E=A,M=g):(R=Ju(t),E=R.x+(~x[0].indexOf("%")?E/100*R.width:E),M=R.y+(~(x[1]||x[0]).indexOf("%")?M/100*R.height:M)),i||i!==!1&&o.smooth?(d=E-c,y=M-u,o.xOffset=h+(d*m+y*_)-d,o.yOffset=f+(d*v+y*p)-y):o.xOffset=o.yOffset=0,o.xOrigin=E,o.yOrigin=M,o.smooth=!!i,o.origin=e,o.originIsAbsolute=!!n,t.style[cn]="0px 0px",a&&(Wn(a,o,"xOrigin",c,E),Wn(a,o,"yOrigin",u,M),Wn(a,o,"xOffset",h,o.xOffset),Wn(a,o,"yOffset",f,o.yOffset)),t.setAttribute("data-svg-origin",E+" "+M)},Br=function(t,e){var n=t._gsap||new Bu(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(t),c=gn(t,cn)||"0",u,h,f,m,v,_,p,d,y,x,E,M,R,S,A,g,T,U,H,D,O,F,q,k,X,Q,Z,ft,B,tt,J,at;return u=h=f=_=p=d=y=x=E=0,m=v=1,n.svg=!!(t.getCTM&&Qu(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[jt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[jt]!=="none"?l[jt]:"")),i.scale=i.rotate=i.translate="none"),S=Ao(t,n.svg),n.svg&&(n.uncache?(X=t.getBBox(),c=n.xOrigin-X.x+"px "+(n.yOrigin-X.y)+"px",k=""):k=!e&&t.getAttribute("data-svg-origin"),Ja(t,k||c,!!k||n.originIsAbsolute,n.smooth!==!1,S)),M=n.xOrigin||0,R=n.yOrigin||0,S!==Fr&&(U=S[0],H=S[1],D=S[2],O=S[3],u=F=S[4],h=q=S[5],S.length===6?(m=Math.sqrt(U*U+H*H),v=Math.sqrt(O*O+D*D),_=U||H?qi(H,U)*hi:0,y=D||O?qi(D,O)*hi+_:0,y&&(v*=Math.abs(Math.cos(y*nr))),n.svg&&(u-=M-(M*U+R*D),h-=R-(M*H+R*O))):(at=S[6],tt=S[7],Z=S[8],ft=S[9],B=S[10],J=S[11],u=S[12],h=S[13],f=S[14],A=qi(at,B),p=A*hi,A&&(g=Math.cos(-A),T=Math.sin(-A),k=F*g+Z*T,X=q*g+ft*T,Q=at*g+B*T,Z=F*-T+Z*g,ft=q*-T+ft*g,B=at*-T+B*g,J=tt*-T+J*g,F=k,q=X,at=Q),A=qi(-D,B),d=A*hi,A&&(g=Math.cos(-A),T=Math.sin(-A),k=U*g-Z*T,X=H*g-ft*T,Q=D*g-B*T,J=O*T+J*g,U=k,H=X,D=Q),A=qi(H,U),_=A*hi,A&&(g=Math.cos(A),T=Math.sin(A),k=U*g+H*T,X=F*g+q*T,H=H*g-U*T,q=q*g-F*T,U=k,F=X),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,d=180-d),m=ee(Math.sqrt(U*U+H*H+D*D)),v=ee(Math.sqrt(q*q+at*at)),A=qi(F,q),y=Math.abs(A)>2e-4?A*hi:0,E=J?1/(J<0?-J:J):0),n.svg&&(k=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!eh(gn(t,jt)),k&&t.setAttribute("transform",k))),Math.abs(y)>90&&Math.abs(y)<270&&(s?(m*=-1,y+=_<=0?180:-180,_+=_<=0?180:-180):(v*=-1,y+=y<=0?180:-180)),e=e||n.uncache,n.x=u-((n.xPercent=u&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+a,n.y=h-((n.yPercent=h&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-h)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+a,n.z=f+a,n.scaleX=ee(m),n.scaleY=ee(v),n.rotation=ee(_)+o,n.rotationX=ee(p)+o,n.rotationY=ee(d)+o,n.skewX=y+o,n.skewY=x+o,n.transformPerspective=E+a,(n.zOrigin=parseFloat(c.split(" ")[2])||0)&&(i[cn]=ws(c)),n.xOffset=n.yOffset=0,n.force3D=Ve.force3D,n.renderTransform=n.svg?H0:$u?nh:k0,n.uncache=0,n},ws=function(t){return(t=t.split(" "))[0]+" "+t[1]},wa=function(t,e,n){var i=Se(e);return ee(parseFloat(e)+parseFloat($n(t,"x",n+"px",i)))+i},k0=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,nh(t,e)},oi="0deg",Sr="0px",li=") ",nh=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,m=n.skewY,v=n.scaleX,_=n.scaleY,p=n.transformPerspective,d=n.force3D,y=n.target,x=n.zOrigin,E="",M=d==="auto"&&t&&t!==1||d===!0;if(x&&(h!==oi||u!==oi)){var R=parseFloat(u)*nr,S=Math.sin(R),A=Math.cos(R),g;R=parseFloat(h)*nr,g=Math.cos(R),a=wa(y,a,S*g*-x),o=wa(y,o,-Math.sin(R)*-x),l=wa(y,l,A*g*-x+x)}p!==Sr&&(E+="perspective("+p+li),(i||s)&&(E+="translate("+i+"%, "+s+"%) "),(M||a!==Sr||o!==Sr||l!==Sr)&&(E+=l!==Sr||M?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+li),c!==oi&&(E+="rotate("+c+li),u!==oi&&(E+="rotateY("+u+li),h!==oi&&(E+="rotateX("+h+li),(f!==oi||m!==oi)&&(E+="skew("+f+", "+m+li),(v!==1||_!==1)&&(E+="scale("+v+", "+_+li),y.style[jt]=E||"translate(0, 0)"},H0=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,m=n.target,v=n.xOrigin,_=n.yOrigin,p=n.xOffset,d=n.yOffset,y=n.forceCSS,x=parseFloat(a),E=parseFloat(o),M,R,S,A,g;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=nr,c*=nr,M=Math.cos(l)*h,R=Math.sin(l)*h,S=Math.sin(l-c)*-f,A=Math.cos(l-c)*f,c&&(u*=nr,g=Math.tan(c-u),g=Math.sqrt(1+g*g),S*=g,A*=g,u&&(g=Math.tan(u),g=Math.sqrt(1+g*g),M*=g,R*=g)),M=ee(M),R=ee(R),S=ee(S),A=ee(A)):(M=h,A=f,R=S=0),(x&&!~(a+"").indexOf("px")||E&&!~(o+"").indexOf("px"))&&(x=$n(m,"x",a,"px"),E=$n(m,"y",o,"px")),(v||_||p||d)&&(x=ee(x+v-(v*M+_*S)+p),E=ee(E+_-(v*R+_*A)+d)),(i||s)&&(g=m.getBBox(),x=ee(x+i/100*g.width),E=ee(E+s/100*g.height)),g="matrix("+M+","+R+","+S+","+A+","+x+","+E+")",m.setAttribute("transform",g),y&&(m.style[jt]=g)},V0=function(t,e,n,i,s){var a=360,o=ge(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?hi:1),c=l-i,u=i+c+"deg",h,f;return o&&(h=s.split("_")[1],h==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),h==="cw"&&c<0?c=(c+a*_c)%a-~~(c/a)*a:h==="ccw"&&c>0&&(c=(c-a*_c)%a-~~(c/a)*a)),t._pt=f=new Ne(t._pt,e,n,i,c,A0),f.e=u,f.u="deg",t._props.push(n),f},Ec=function(t,e){for(var n in e)t[n]=e[n];return t},W0=function(t,e,n){var i=Ec({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,h,f,m,v;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[jt]=e,o=Br(n,1),Or(n,jt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[jt],a[jt]=e,o=Br(n,1),a[jt]=c);for(l in Nn)c=i[l],u=o[l],c!==u&&s.indexOf(l)<0&&(m=Se(c),v=Se(u),h=m!==v?$n(n,l,c,v):parseFloat(c),f=parseFloat(u),t._pt=new Ne(t._pt,o,l,h,f-h,Ka),t._pt.u=v||0,t._props.push(l));Ec(o,i)};Ie("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",a=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(o){return t<2?r+o:"border"+o+r});As[t>1?"border"+r:r]=function(o,l,c,u,h){var f,m;if(arguments.length<4)return f=a.map(function(v){return Pn(o,v,c)}),m=f.join(" "),m.split(f[0]).length===5?f[0]:m;f=(u+"").split(" "),m={},a.forEach(function(v,_){return m[v]=f[_]=f[_]||f[(_-1)/2|0]}),o.init(l,m,h)}});var ih={name:"css",register:$a,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var a=this._props,o=t.style,l=n.vars.startAt,c,u,h,f,m,v,_,p,d,y,x,E,M,R,S,A;yo||$a(),this.styles=this.styles||Zu(t),A=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(u=e[_],!(ke[_]&&zu(_,e,n,i,t,s)))){if(m=typeof u,v=As[_],m==="function"&&(u=u.call(n,i,t,s),m=typeof u),m==="string"&&~u.indexOf("random(")&&(u=Ur(u)),v)v(this,t,_,u,n)&&(S=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),u+="",jn.lastIndex=0,jn.test(c)||(p=Se(c),d=Se(u)),d?p!==d&&(c=$n(t,_,c,d)+d):p&&(u+=p),this.add(o,"setProperty",c,u,i,s,0,0,_),a.push(_),A.push(_,0,o[_]);else if(m!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,t,s):l[_],ge(c)&&~c.indexOf("random(")&&(c=Ur(c)),Se(c+"")||(c+=Ve.units[_]||Se(Pn(t,_))||""),(c+"").charAt(1)==="="&&(c=Pn(t,_))):c=Pn(t,_),f=parseFloat(c),y=m==="string"&&u.charAt(1)==="="&&u.substr(0,2),y&&(u=u.substr(2)),h=parseFloat(u),_ in mn&&(_==="autoAlpha"&&(f===1&&Pn(t,"visibility")==="hidden"&&h&&(f=0),A.push("visibility",0,o.visibility),Wn(this,o,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=mn[_],~_.indexOf(",")&&(_=_.split(",")[0]))),x=_ in Nn,x){if(this.styles.save(_),E||(M=t._gsap,M.renderTransform&&!e.parseTransform||Br(t,e.parseTransform),R=e.smoothOrigin!==!1&&M.smooth,E=this._pt=new Ne(this._pt,o,jt,0,1,M.renderTransform,M,0,-1),E.dep=1),_==="scale")this._pt=new Ne(this._pt,M,"scaleY",M.scaleY,(y?tr(M.scaleY,y+h):h)-M.scaleY||0,Ka),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){A.push(cn,0,o[cn]),u=z0(u),M.svg?Ja(t,u,0,R,0,this):(d=parseFloat(u.split(" ")[2])||0,d!==M.zOrigin&&Wn(this,M,"zOrigin",M.zOrigin,d),Wn(this,o,_,ws(c),ws(u)));continue}else if(_==="svgOrigin"){Ja(t,u,1,R,0,this);continue}else if(_ in th){V0(this,M,_,f,y?tr(f,y+u):u);continue}else if(_==="smoothOrigin"){Wn(this,M,"smooth",M.smooth,u);continue}else if(_==="force3D"){M[_]=u;continue}else if(_==="transform"){W0(this,u,t);continue}}else _ in o||(_=hr(_)||_);if(x||(h||h===0)&&(f||f===0)&&!b0.test(u)&&_ in o)p=(c+"").substr((f+"").length),h||(h=0),d=Se(u)||(_ in Ve.units?Ve.units[_]:p),p!==d&&(f=$n(t,_,c,d)),this._pt=new Ne(this._pt,x?M:o,_,f,(y?tr(f,y+h):h)-f,!x&&(d==="px"||_==="zIndex")&&e.autoRound!==!1?R0:Ka),this._pt.u=d||0,p!==d&&d!=="%"&&(this._pt.b=c,this._pt.r=w0);else if(_ in o)B0.call(this,t,_,c,y?y+u:u);else if(_ in t)this.add(t,_,c||t[_],y?y+u:u,i,s);else if(_!=="parseTransform"){po(_,u);continue}x||(_ in o?A.push(_,0,o[_]):A.push(_,1,c||t[_])),a.push(_)}}S&&Xu(this)},render:function(t,e){if(e.tween._time||!To())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Pn,aliases:mn,getSetter:function(t,e,n){var i=mn[e];return i&&i.indexOf(",")<0&&(e=i),e in Nn&&e!==cn&&(t._gsap.x||Pn(t,"x"))?n&&mc===n?e==="scale"?D0:L0:(mc=n||{})&&(e==="scale"?U0:I0):t.style&&!uo(t.style[e])?C0:~e.indexOf("-")?P0:So(t,e)},core:{_removeProperty:Or,_getMatrix:Ao}};Oe.utils.checkPrefix=hr;Oe.core.getStyleSaver=Zu;(function(r,t,e,n){var i=Ie(r+","+t+","+e,function(s){Nn[s]=1});Ie(t,function(s){Ve.units[s]="deg",th[s]=1}),mn[i[13]]=r+","+t,Ie(n,function(s){var a=s.split(":");mn[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Ie("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Ve.units[r]="px"});Oe.registerPlugin(ih);var $i=Oe.registerPlugin(ih)||Oe;$i.core.Tween;var X0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function q0(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Qa={exports:{}};(function(r,t){(function(e,n){{var i=n();r&&r.exports&&(t=r.exports=i),t.randomColor=i}})(X0,function(){var e=null,n={};d();var i=[],s=function(S){if(S=S||{},S.seed!==void 0&&S.seed!==null&&S.seed===parseInt(S.seed,10))e=S.seed;else if(typeof S.seed=="string")e=M(S.seed);else{if(S.seed!==void 0&&S.seed!==null)throw new TypeError("The seed value must be an integer or string");e=null}var A,g,T;if(S.count!==null&&S.count!==void 0){for(var U=S.count,H=[],D=0;D<S.count;D++)i.push(!1);for(S.count=null;U>H.length;){var O=s(S);e!==null&&(S.seed=e),H.push(O)}return S.count=U,H}return A=a(S),g=o(A,S),T=l(A,g,S),c([A,g,T],S)};function a(S){if(i.length>0){var A=R(S.hue),g=v(A),T=(A[1]-A[0])/i.length,U=parseInt((g-A[0])/T);i[U]===!0?U=(U+2)%i.length:i[U]=!0;var H=(A[0]+U*T)%359,D=(A[0]+(U+1)*T)%359;return A=[H,D],g=v(A),g<0&&(g=360+g),g}else{var A=h(S.hue);return g=v(A),g<0&&(g=360+g),g}}function o(S,A){if(A.hue==="monochrome")return 0;if(A.luminosity==="random")return v([0,100]);var g=f(S),T=g[0],U=g[1];switch(A.luminosity){case"bright":T=55;break;case"dark":T=U-10;break;case"light":U=55;break}return v([T,U])}function l(S,A,g){var T=u(S,A),U=100;switch(g.luminosity){case"dark":U=T+20;break;case"light":T=(U+T)/2;break;case"random":T=0,U=100;break}return v([T,U])}function c(S,A){switch(A.format){case"hsvArray":return S;case"hslArray":return E(S);case"hsl":var g=E(S);return"hsl("+g[0]+", "+g[1]+"%, "+g[2]+"%)";case"hsla":var T=E(S),D=A.alpha||Math.random();return"hsla("+T[0]+", "+T[1]+"%, "+T[2]+"%, "+D+")";case"rgbArray":return y(S);case"rgb":var U=y(S);return"rgb("+U.join(", ")+")";case"rgba":var H=y(S),D=A.alpha||Math.random();return"rgba("+H.join(", ")+", "+D+")";default:return _(S)}}function u(S,A){for(var g=m(S).lowerBounds,T=0;T<g.length-1;T++){var U=g[T][0],H=g[T][1],D=g[T+1][0],O=g[T+1][1];if(A>=U&&A<=D){var F=(O-H)/(D-U),q=H-F*U;return F*A+q}}return 0}function h(S){if(typeof parseInt(S)=="number"){var A=parseInt(S);if(A<360&&A>0)return[A,A]}if(typeof S=="string"){if(n[S]){var g=n[S];if(g.hueRange)return g.hueRange}else if(S.match(/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i)){var T=x(S)[0];return[T,T]}}return[0,360]}function f(S){return m(S).saturationRange}function m(S){S>=334&&S<=360&&(S-=360);for(var A in n){var g=n[A];if(g.hueRange&&S>=g.hueRange[0]&&S<=g.hueRange[1])return n[A]}return"Color not found"}function v(S){if(e===null){var A=.618033988749895,g=Math.random();return g+=A,g%=1,Math.floor(S[0]+g*(S[1]+1-S[0]))}else{var T=S[1]||1,U=S[0]||0;e=(e*9301+49297)%233280;var H=e/233280;return Math.floor(U+H*(T-U))}}function _(S){var A=y(S);function g(U){var H=U.toString(16);return H.length==1?"0"+H:H}var T="#"+g(A[0])+g(A[1])+g(A[2]);return T}function p(S,A,g){var T=g[0][0],U=g[g.length-1][0],H=g[g.length-1][1],D=g[0][1];n[S]={hueRange:A,lowerBounds:g,saturationRange:[T,U],brightnessRange:[H,D]}}function d(){p("monochrome",null,[[0,0],[100,0]]),p("red",[-26,18],[[20,100],[30,92],[40,89],[50,85],[60,78],[70,70],[80,60],[90,55],[100,50]]),p("orange",[18,46],[[20,100],[30,93],[40,88],[50,86],[60,85],[70,70],[100,70]]),p("yellow",[46,62],[[25,100],[40,94],[50,89],[60,86],[70,84],[80,82],[90,80],[100,75]]),p("green",[62,178],[[30,100],[40,90],[50,85],[60,81],[70,74],[80,64],[90,50],[100,40]]),p("blue",[178,257],[[20,100],[30,86],[40,80],[50,74],[60,60],[70,52],[80,44],[90,39],[100,35]]),p("purple",[257,282],[[20,100],[30,87],[40,79],[50,70],[60,65],[70,59],[80,52],[90,45],[100,42]]),p("pink",[282,334],[[20,100],[30,90],[40,86],[60,84],[80,80],[90,75],[100,73]])}function y(S){var A=S[0];A===0&&(A=1),A===360&&(A=359),A=A/360;var g=S[1]/100,T=S[2]/100,U=Math.floor(A*6),H=A*6-U,D=T*(1-g),O=T*(1-H*g),F=T*(1-(1-H)*g),q=256,k=256,X=256;switch(U){case 0:q=T,k=F,X=D;break;case 1:q=O,k=T,X=D;break;case 2:q=D,k=T,X=F;break;case 3:q=D,k=O,X=T;break;case 4:q=F,k=D,X=T;break;case 5:q=T,k=D,X=O;break}var Q=[Math.floor(q*255),Math.floor(k*255),Math.floor(X*255)];return Q}function x(S){S=S.replace(/^#/,""),S=S.length===3?S.replace(/(.)/g,"$1$1"):S;var A=parseInt(S.substr(0,2),16)/255,g=parseInt(S.substr(2,2),16)/255,T=parseInt(S.substr(4,2),16)/255,U=Math.max(A,g,T),H=U-Math.min(A,g,T),D=U?H/U:0;switch(U){case A:return[60*((g-T)/H%6)||0,D,U];case g:return[60*((T-A)/H+2)||0,D,U];case T:return[60*((A-g)/H+4)||0,D,U]}}function E(S){var A=S[0],g=S[1]/100,T=S[2]/100,U=(2-g)*T;return[A,Math.round(g*T/(U<1?U:2-U)*1e4)/100,U/2*100]}function M(S){for(var A=0,g=0;g!==S.length&&!(A>=Number.MAX_SAFE_INTEGER);g++)A+=S.charCodeAt(g);return A}function R(S){if(isNaN(S)){if(typeof S=="string"){if(n[S]){var g=n[S];if(g.hueRange)return g.hueRange}else if(S.match(/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i)){var T=x(S)[0];return m(T).hueRange}}}else{var A=parseInt(S);if(A<360&&A>0)return m(S).hueRange}return[0,360]}return s})})(Qa,Qa.exports);var Y0=Qa.exports;const rh=q0(Y0),j0=document.querySelector("#app"),mr=new eu({antialias:!0});mr.setPixelRatio(window.devicePixelRatio);mr.setSize(window.innerWidth,window.innerHeight);j0.appendChild(mr.domElement);const Jn=new _g;Jn.background=new Gt("white");const fr=new Ke(35,window.innerWidth/window.innerHeight,1,1e3);fr.position.set(0,0,100);const sh=new Cg(5);sh.position.y=.001;Jn.add(sh);const K0=new wg("white",.2),Z0=new yg("#ffffff","#ff00ff",.8),ah=new Ag("white",.8);ah.position.set(-1,1,1);Jn.add(K0,ah,Z0);const un=new Pg(fr,mr.domElement);un.enableDamping=!0;un.dampingFactor=.05;un.screenSpacePanning=!1;un.enableRotate=!0;un.rotateSpeed=.5;un.enableZoom=!0;un.zoomSpeed=.5;un.minDistance=100;un.maxDistance=500;un.target=new N(0,0,0);const $0=()=>{fr.aspect=window.innerWidth/window.innerHeight,fr.updateProjectionMatrix(),mr.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("resize",$0);const J0=new Ds(2,128,128),Q0=new iu({color:"black",roughness:.8,metalness:.2});for(let r=0;r<1e3;r++){const t=new pn(J0,Q0.clone()),e=100-Math.random()*200,n=100-Math.random()*200,i=100-Math.random()*200;t.position.set(e,n,i),t.rotation.set(Math.random()*Math.PI*2,Math.random()*Math.PI*2,Math.random()*Math.PI*2),t.name="sphere",t.isAnimating=!1,Jn.add(t)}const yc=new Rg,to=new Ct,tv=r=>{to.x=r.clientX/window.innerWidth*2-1,to.y=-(r.clientY/window.innerHeight)*2+1};window.addEventListener("pointermove",tv);let se;const oh=()=>{requestAnimationFrame(oh),yc.setFromCamera(to,fr);const r=yc.intersectObjects(Jn.children);r.length>0?r[0].object.name==="sphere"&&se!==r[0].object&&(se&&se.material.emissive.setHex(se.currentHex),se=r[0].object,se.currentHex=se.material.emissive.getHex(),se.material.emissive.setHex(65535)):(se&&se.material.emissive.setHex(se.currentHex),se=null),mr.render(Jn,fr),un.update()};oh();const ev=()=>{if(se)if(se.isAnimating)$i.to(se.scale,{x:1,y:1,z:1,duration:.5,ease:"power2.inOut",overwrite:!0}),$i.to(se.material.color,{r:0,g:0,b:0,duration:.5,ease:"power2.inOut",overwrite:!0}),se.isAnimating=!1;else{$i.to(se.scale,{x:"random(0, 3)",y:"random(0, 3)",z:"random(0, 3)",duration:"random(2, 5)",ease:"power2.inOut",repeat:-1,yoyo:!0});const r=rh({hue:"#0000FF",luminosity:"bright"}),{r:t,g:e,b:n}=new Gt(r);$i.to(se.material.color,{r:t,g:e,b:n,duration:1,ease:"power2.inOut"}),se.isAnimating=!0}};window.addEventListener("click",ev);const nv=document.querySelector("#bg-button"),iv=()=>{const r=rh({luminosity:"bright"}),{r:t,g:e,b:n}=new Gt(r);$i.to(Jn.background,{r:t,g:e,b:n,duration:1,ease:"linear"})};nv.addEventListener("click",iv);const lh=new Eg().load("/hubble_telescope_picture.jpg");lh.colorSpace=Rt;const rv=new Ds(5,128,128),sv=new iu({color:"white",map:lh}),av=new pn(rv,sv);Jn.add(av);
