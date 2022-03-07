"use strict";(self.webpackChunkgeel_website=self.webpackChunkgeel_website||[]).push([[579],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),p=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,f=c["".concat(d,".").concat(m)]||c[m]||u[m]||i;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8349:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return s},default:function(){return c}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={},d="Title: Prediction Model and Analyses",p={type:"mdx",permalink:"/geelabeler-website/analysis/Analysis-Report",source:"@site/src/pages/analysis/Analysis-Report.md",title:"Title: Prediction Model and Analyses",description:"Author: Ivan Cano",frontMatter:{}},s=[{value:"Author: Ivan Cano",id:"author-ivan-cano",children:[],level:3},{value:"Date: 3/5/2022",id:"date-352022",children:[],level:3},{value:"Predictive Model",id:"predictive-model",children:[],level:2},{value:"Analyses of Prediction Model",id:"analyses-of-prediction-model",children:[],level:2},{value:"dates dates to days",id:"dates-dates-to-days",children:[],level:2},{value:"Testing for linear relationship",id:"testing-for-linear-relationship",children:[],level:2}],u={toc:s};function c(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"title-prediction-model-and-analyses"},"Title: Prediction Model and Analyses"),(0,i.kt)("h3",{id:"author-ivan-cano"},"Author: Ivan Cano"),(0,i.kt)("h3",{id:"date-352022"},"Date: 3/5/2022"),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"predictive-model"},"Predictive Model"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"INSERT ML MODEL PORTION HERE"),(0,i.kt)("h2",{id:"analyses-of-prediction-model"},"Analyses of Prediction Model"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Here we used our ml model we made in the previous step and processed the saved data we have in our testing_data/full_img/, already filled in the data_collection portion of this project. Although any tif files of the same dimensions as the images used for our train model could theoreticaly be used."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"from os import listdir\nfrom os.path import isfile, join\n\nonlyfiles = [f for f in listdir(full_directory) if isfile(join(full_directory, f))]\n\nmodel_predictions = []\nfor i in onlyfiles:\n    with rasterio.open('testing_data/full_img/'  + i) as src:\n    #     print(src.shape)\n        img = src.read()\n#     img.flatten(order = 'C')\n    \n        img_test = np.rollaxis(img.reshape(16,e_dims[1]*e_dims[2]),0,2)\n\n        model_predictions.append(fclf.predict(img_test))\n")),(0,i.kt)("p",null,"Here, we parse through the labels that we went acquired through our ml model. We then counted all the urban labels and and non_urban labels and created a ratio from these two value, where the length of urban labels was divided over the length of non_urban labels to get our desaired ratio."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"urban_ratio = []\nfor i in model_predictions:\n    urban_count = 0\n    for j in i:\n        if j == 'urban':\n            urban_count += 1\n#     print(urban_count)\n    non_urban_count  = len(i) - urban_count\n    urban_ratio.append(urban_count/non_urban_count)\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"import datetime\n")),(0,i.kt)("p",null,"Here we pull all the names of the images we used for our ml model so that we could extract the dates associated with each tif file.  We were able to extract the dates from the images by slicing their names which contained their associated dates and appended those dates to a list. We then formated and changed data type of the dates to datetime.date objects to better process the dates in our analyses."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'onlyfiles[0][6:16]\ndates = []\nfor i in onlyfiles:\n    dates.append(i[6:16])\n\nx_values = [datetime.datetime.strptime(d,"%Y-%m-%d").date() for d in dates]\nx_values\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"plt.plot(x_values, urban_ratio)\n")),(0,i.kt)("p",null,"FIRST IMAGE HERE"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"import numpy as np\nimport scipy.stats as st\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"year_list = []\nfor i in x_values:\n    year_list.append(i.year)\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"years = np.unique(year_list)\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"year_avg = {}\nfor i in years:\n    year_avg[i] = []\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"pd.Series(year_list).value_counts()\nfor count, value in enumerate(urban_ratio):\n    year_avg[year_list[count]].append(value)\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"list_year_average = []\nfor i in year_avg:\n    list_year_average.append(np.mean(year_avg[i]))\nlist_year_average\n")),(0,i.kt)("p",null,"[0.8932386322805885,\n0.5961964284060416,\n2.541952400843471,\n3.257714599207024,\n1.249241606661275,\n1.3375268946199286,\n1.0263152629146564,\n1.1877434043813473,\n1.450091265543045,\n2.5116910229645093]"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"urban_ratio_corrected  = urban_ratio.copy()\nbad_index = []\nx_values_corrected = x_values.copy()\nfor i in urban_ratio_corrected:\n   if i > 4:\n       outlier_index = urban_ratio_corrected.index(i)\n       bad_index.append(outlier_index)\ncount = 0\nfor i in bad_index:\n   urban_ratio_corrected.pop(i - count)\n   x_values_corrected.pop(i - count)\n   count += 1\n")),(0,i.kt)("p",null,"SECOND IMAGE"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"plt.plot(x_values_corrected, urban_ratio_corrected)\n")),(0,i.kt)("h2",{id:"dates-dates-to-days"},"dates dates to days"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"import datetime\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"my_date = x_values_corrected[0]\nx_datetime = [datetime.datetime(i.year, i.month, i.day).timestamp() for i in x_values_corrected]\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"x_datetime_start = min(x_datetime)\nx_datetime_days = [(x - x_datetime_start)/(60 * 60 * 24) for x in x_datetime]\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"x_minutes_reshaped = np.array(x_datetime_days).reshape((-1, 1))\n")),(0,i.kt)("h2",{id:"testing-for-linear-relationship"},"Testing for linear relationship"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"import numpy as np\nfrom sklearn.linear_model import LinearRegression\nreg = LinearRegression().fit(x_minutes_reshaped, urban_ratio_corrected)\nreg.score(x_minutes_reshaped, urban_ratio_corrected\n")),(0,i.kt)("p",null,"0.05540008335192936"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"reg.intercept_\n")),(0,i.kt)("p",null,"0.7142641939421813"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"reg.coef_\n")),(0,i.kt)("p",null,"array(","[0.000236]",")"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"reg.coef_ * 365\n")))}c.isMDXComponent=!0}}]);