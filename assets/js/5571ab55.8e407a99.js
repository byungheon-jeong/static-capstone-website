"use strict";(self.webpackChunkgeel_website=self.webpackChunkgeel_website||[]).push([[961],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return d}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(a),d=r,g=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return a?n.createElement(g,l(l({ref:t},p),{},{components:a})):n.createElement(g,l({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4651:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),l=["components"],o={},c=void 0,s={unversionedId:"tutorial-Napari/Dataset Setup",id:"tutorial-Napari/Dataset Setup",title:"Dataset Setup",description:"This tutorial walks through the process of labeling the TIFF dataset. The tutorial assumes the TIFF dataset is already extracted from Google Earth Engine.",source:"@site/docs/tutorial-Napari/Dataset Setup.md",sourceDirName:"tutorial-Napari",slug:"/tutorial-Napari/Dataset Setup",permalink:"/static-capstone-website/docs/tutorial-Napari/Dataset Setup",editUrl:"https://github.com/byungheon-jeong/google-eartheingine-labeler/docs/tutorial-Napari/Dataset Setup.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Data Collection and Filtering: NDVI band",permalink:"/static-capstone-website/docs/tutorial-Google Earth Engine/SelectBands"},next:{title:"Script Tutorial",permalink:"/static-capstone-website/docs/tutorial-Napari/Script Tutorial"}},p=[{value:"Dataset Location in Project Repo",id:"dataset-location-in-project-repo",children:[{value:"TREE",id:"tree",children:[],level:4}],level:3},{value:"Dataset Configuration",id:"dataset-configuration",children:[],level:3}],u={toc:p};function m(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This tutorial walks through the process of labeling the TIFF dataset. The tutorial assumes the TIFF dataset is already extracted from Google Earth Engine. "),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f ",(0,i.kt)("strong",{parentName:"p"},"If you are running the labeling script"),": Activate the Conda virtual enviromnent!")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"dataset-location-in-project-repo"},"Dataset Location in Project Repo"),(0,i.kt)("p",null,"How to set up dataset for labeling"),(0,i.kt)("h4",{id:"tree"},"TREE"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},".\n\u251c\u2500\u2500 example_dataset\n\u2502\xa0\xa0 \u251c\u2500\u2500 full_img\n\u2502\xa0\xa0 \u2514\u2500\u2500 label_img\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 requirements.txt\n\u251c\u2500\u2500 src\n\u2502\xa0\xa0 \u251c\u2500\u2500 checkpoint_data\n\u2502\xa0\xa0 \u251c\u2500\u2500 __pycache__\n\u2502\xa0\xa0 \u2514\u2500\u2500 run_annotation.py\n\u251c\u2500\u2500 testing_data\n\u2502\xa0\xa0 \u251c\u2500\u2500 checkpoints\n\u2502\xa0\xa0 \u251c\u2500\u2500 data_loader.ipynb\n\u2502\xa0\xa0 \u251c\u2500\u2500 full_img\n\u2502\xa0\xa0 \u2514\u2500\u2500 label_img\n\u2514\u2500\u2500 tests\n    \u251c\u2500\u2500 polygon_mask_test.pickle\n    \u251c\u2500\u2500 test_config.yml\n    \u2514\u2500\u2500 test_run_annotation.py\n\n")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"testing_data is the offical format for a (labeled) dataset")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Example_dataset will be our example for this tutorial")),(0,i.kt)("h3",{id:"dataset-configuration"},"Dataset Configuration"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"./example_dataset\n\u251c\u2500\u2500 full_img\n\u2502\xa0\xa0 \u251c\u2500\u2500 Engilchek_glacier_1999-07-09.tif\n\u2502\xa0\xa0 \u251c\u2500\u2500 Engilchek_glacier_1999-08-10.tif\n\u2502\xa0\xa0 \u251c\u2500\u2500 Engilchek_glacier_1999-08-26.tif\n\u2502\xa0\xa0 \u2514\u2500\u2500 Engilchek_glacier_1999-10-13.tif\n\u2514\u2500\u2500 label_img\n    \u251c\u2500\u2500 Engilchek_glacier_1999-07-09.tif\n    \u251c\u2500\u2500 Engilchek_glacier_1999-08-10.tif\n    \u251c\u2500\u2500 Engilchek_glacier_1999-08-26.tif\n    \u2514\u2500\u2500 Engilchek_glacier_1999-10-13.tif\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f ",(0,i.kt)("strong",{parentName:"p"},"The full_img file name must be the same as the ones label_img"))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("table",{parentName:"div"},(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"subdirectory"),(0,i.kt)("th",{parentName:"tr",align:null},"description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"full_img"),(0,i.kt)("td",{parentName:"tr",align:null},"This subdirectory is where the TIFF image file with ALL the bands are present")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"label_img"),(0,i.kt)("td",{parentName:"tr",align:null},"This subdirectory is where the TIFF image files that will be used to label (only consist of a few bands) are present")))),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/byungheon-jeong/geelabeler-website/master/geel-website/images/image_shapes-full.PNG",alt:"image shapes"})))))}m.isMDXComponent=!0}}]);