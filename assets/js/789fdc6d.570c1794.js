"use strict";(self.webpackChunkgeel_website=self.webpackChunkgeel_website||[]).push([[539],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(a),m=r,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9371:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return c},default:function(){return u}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=["components"],s={},l="Prediction Model and Analyses",d={type:"mdx",permalink:"/static-capstone-website/analysis/Final_Report_Updated",source:"@site/src/pages/analysis/Final_Report_Updated.md",title:"Prediction Model and Analyses",description:"Author: Ivan Cano",frontMatter:{}},c=[{value:"Data Cleaning",id:"data-cleaning",children:[],level:2},{value:"Training Random Forest Classifier",id:"training-random-forest-classifier",children:[],level:2},{value:"Analyses of Prediction Model",id:"analyses-of-prediction-model",children:[],level:2},{value:"Converting dates to days",id:"converting-dates-to-days",children:[],level:2},{value:"Testing for Positive Trends",id:"testing-for-positive-trends",children:[],level:2}],p={toc:c};function u(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"prediction-model-and-analyses"},"Prediction Model and Analyses"),(0,o.kt)("p",null,"Author: Ivan Cano"),(0,o.kt)("p",null,"Date: 3/8/2022"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"With the turn of the 21st century, the world has seen advancements in medicine,\ntechnology, and more equitable living standards in many parts of the world. And with this\nincrease of human population, also comes expansion into human development, much of it in the\nform of housing and urban infrastructure. Although, in some cases, people may build settlements\nunsanctioned by the state, and these people may suffer many vulnerabilities, including increased\ncrimes, and water and food insecurities in times of drought, natural disasters\nOur team believes that tracking human development can prove useful in helping these people\nthat live on the fringes of society. By using satellite images, from the landsat 8 repository (a\nNASA satellite image database), our team has created labeling service to be able to classify urban\nsettlement and expansion over periods of urban growth. In this markdown file we will be using information that we have gathered using our classification service on the Xiong An New District in Hebei, China to be able to accurately predict future growth by utiliying (machine learning) models. We hope that by creating an ml model to predict the urban expansion of this region in China we can prove the efectiveness of our labeling service and the accuracy of the service itself. Moreover, we will be analyzing the results found, to test if it aligns with general trends of the urban developement of the region to further test its our models accuracy. We hope that through the analyses we conduct in this project, we can promote people to use our service to aid communities. that live in rural areas across the world."),(0,o.kt)("h2",{id:"data-cleaning"},"Data Cleaning"),(0,o.kt)("hr",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"import sklearn as sk\nimport numpy as np\nimport pandas as pd\nimport rasterio, os, napari\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.ensemble import RandomForestClassifier\nfrom sklearn.svm import SVC\nfrom sklearn.cluster import KMeans\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.datasets import load_iris\nimport functools\n")),(0,o.kt)("p",null,"To begin, we conducted some data cleaning procedures with some replacement methods, removing any typos that could have occured in the labeling of urban and non_urban regions."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"labels = pd.Series(labels).replace('non_urbn','non_urban').replace('non urban','non_urban').replace('Shapes','urban').replace('urban [1]', 'urban')\nlabels.value_counts()\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"labels = labels.replace('non_urban','temp')\nlabels = labels.replace('urban','temp_2')\nlabels = labels.replace('temp','urban')\nlabels = labels.replace('temp_2','non_urban') \n")),(0,o.kt)("h2",{id:"training-random-forest-classifier"},"Training Random Forest Classifier"),(0,o.kt)("p",null,"Here we split the data with a training and a test set, with a 80% 20% split. This will allow us to train our model effectively, while still being able to test its performance."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"}," X_train, X_test, y_train, y_test = train_test_split(data,labels, test_size=0.2)\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"%matplotlib inline\nimport matplotlib.pyplot as plt\nplt.style.use('seaborn-whitegrid')\nimport numpy as np\n")),(0,o.kt)("p",null,"This is where we begin our hyperparameter optimization by testing a wide range of inputs and choosing the best performing input of the ones we tested. Much of the hyperparemeter tuning we performed here follows this logic, so for the sake of conciseness I won't be reitering this for the rest of the parameter tuning. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"scores_depth = []\nfor i in range(1,50):\n    fclf = RandomForestClassifier(max_depth=i, n_estimators=10, max_features=1)\n    fclf.fit(X_train, y_train)\n    scores_depth.append(fclf.score(X_test, y_test))\n")),(0,o.kt)("p",null,"In this example it turned out the max depth was 25. In this example we added 1 to the location of the index of the highest score to compensate for the range we used starting at 1."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/IcanDXD/DSC_180_images/2697105594db4bae67695fb38933927411721f8e/image_1.png",alt:"ml_image_1"})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"max_score = max(scores_estimators)\nscores_estimators.index(max_score)\nmax_depth = scores_estimators.index(max_score)\nmax_depth += 1\nmax_depth\n")),(0,o.kt)("p",null,"25"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"scores_estimators = []\nfor i in range(1,30):\n    fclf = RandomForestClassifier(max_depth= max_depth, n_estimators=i, max_features=1)\n    fclf.fit(data, labels)\n    scores_estimators.append(fclf.score(data, labels))\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'plt.plot(range(1,30), scores_estimators)\nplt.title("Number of Estimators over Accuracy Score")\nplt.xlabel("Number of Estimators")\nplt.ylabel("Accuracy in Percents");\n')),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/IcanDXD/DSC_180_images/2697105594db4bae67695fb38933927411721f8e/image_2.png",alt:"ml_image_2"})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"max_score = max(scores_estimators)\nmax_estimators = scores_estimators.index(max_score)\nmax_estimators += 1\nmax_estimators\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"score_features = []\nfor i in range(1,10):\n    fclf = RandomForestClassifier(max_depth = max_depth, n_estimators=max_estimators, max_features=i)\n    fclf.fit(X_train, y_train)\n    score_features.append(fclf.score(X_test, y_test))\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'plt.plot(range(1,10), score_features)\nplt.title("Number of Max features over Accuracy Score")\nplt.xlabel("Number of Max Features")\nplt.ylabel("Accuracy in Percents");\n')),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/IcanDXD/DSC_180_images/2697105594db4bae67695fb38933927411721f8e/image_3.png",alt:"ml_image_3"})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"max_score = max(score_features)\nscore_features.index(max_score)\nmax_features = score_features.index(max_score)\nmax_features += 1\nmax_features\n")),(0,o.kt)("p",null,"5"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"score_min_samples = []\nfor i in range(2,10):\n    fclf = RandomForestClassifier(max_depth = max_depth, n_estimators=max_estimators, max_features=max_features, min_samples_leaf = i)\n    fclf.fit(X_train, y_train)\n    score_min_samples.append(fclf.score(X_test, y_test))\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'plt.plot(range(2,10), score_min_samples)\nplt.title("Minimum Number of Samples Splits over Accuracy Score")\nplt.xlabel("Minimum Number of Samples Splits")\nplt.ylabel("Accuracy in Percents");\n')),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/IcanDXD/DSC_180_images/2697105594db4bae67695fb38933927411721f8e/image_4.png",alt:"ml_image_4"})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"max_score = max(score_min_samples )\nscore_min_samples.index(max_score)\nmin_samples = score_min_samples.index(max_score)\nmin_samples += 2\nmin_samples\n")),(0,o.kt)("p",null,"Here we test our values that we got from the  hyperparameter optimization and fit them into our final rRandomForestClassifier. Theoreticaly this model should be well suited to classify regions based on urban and non_urban regions with with similar geographic properties as the Xiong An New District we used for our classifcation model."),(0,o.kt)("p",null,"Testing our model on the training dataset we can see that we scored a significantly high score of 98.7% accuracy. This definitily promising to applying our models on other regions of Hebei that are like Xiong An New District. That being said it should be mentioned that our model had not shown to perform significantly well in other datasets that do not share similar geographic properties. For example, as our first datasets includes many areas that are marsh like, from the large rice fields in Xiong An New District, it may not perform as well in other regions that have dry soil. Noteabley, for our second datset it was observed that our model perform significantly worse the region of Xushui District that do not share the same agricultural farmlands as the Xiong An New District. Therefore, our model should only be used in consideration of geographic regions that mimic the region we used as it may be prone to decreases in accuracy if used in ill suited regions. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"fclf = RandomForestClassifier(max_depth = max_depth, n_estimators=max_estimators, max_features=max_features, min_samples_leaf = min_samples)\nfclf.fit(X_train, y_train)\nfclf.score(X_test, y_test)\n")),(0,o.kt)("p",null,"0.987948551000602\n]"),(0,o.kt)("h2",{id:"analyses-of-prediction-model"},"Analyses of Prediction Model"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Here we used our ml model we made in the previous step and processed the saved data we have in our testing_data/full_img/, already filled in the data_collection portion of this project. Although any tif files of the same dimensions as the images used for our train model could theoreticaly be used."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"from os import listdir\nfrom os.path import isfile, join\n\nonlyfiles = [f for f in listdir(full_directory) if isfile(join(full_directory, f))]\n\nmodel_predictions = []\nfor i in onlyfiles:\n    with rasterio.open('testing_data/full_img/'  + i) as src:\n    #     print(src.shape)\n        img = src.read()\n#     img.flatten(order = 'C')\n    \n        img_test = np.rollaxis(img.reshape(16,e_dims[1]*e_dims[2]),0,2)\n\n        model_predictions.append(fclf.predict(img_test))\n")),(0,o.kt)("p",null,"Here, we parse through the labels that we went acquired through our ml model. We then counted all the urban labels and and non_urban labels and created a ratio from these two value, where the length of urban labels was divided over the length of non_urban labels to get our desaired ratio."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"urban_ratio = []\nfor i in model_predictions:\n    urban_count = 0\n    for j in i:\n        if j == 'urban':\n            urban_count += 1\n#     print(urban_count)\n    non_urban_count  = len(i) - urban_count\n    urban_ratio.append(urban_count/non_urban_count)\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"import datetime\n")),(0,o.kt)("p",null,"Here we pull all the names of the images we used for our ml model so that we could extract the dates associated with each tif file.  We were able to extract the dates from the images by slicing their names which contained their associated dates and appended those dates to a list. We then formated and changed data type of the dates to datetime.date objects to better process the dates in our analyses."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'onlyfiles[0][6:16]\ndates = []\nfor i in onlyfiles:\n    dates.append(i[6:16])\n\nx_values = [datetime.datetime.strptime(d,"%Y-%m-%d").date() for d in dates]\nx_values\n')),(0,o.kt)("p",null,"This graph represents the raw distribution of the data between the years April 10, 2013 to present day. Notable outliers can be observed here."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"plt.plot(x_values, urban_ratio)\n")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/IcanDXD/DSC_180_images/10ab8cfba9286d05b11ad9db86757504eb67091d/graph_1.png",alt:"analyses_image_1"})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"import numpy as np\nimport scipy.stats as st\n")),(0,o.kt)("p",null,"The following lines are code to be able to be able to average out the urban ratios for every datapoint to be able to observe any discernable trend."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"year_list = []\nfor i in x_values:\n    year_list.append(i.year)\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"years = np.unique(year_list)\n")),(0,o.kt)("p",null,"Here we initialize a dictionary to be able to classify the unique years in our datasets and set them as keys."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"year_avg = {}\nfor i in years:\n    year_avg[i] = []\n")),(0,o.kt)("p",null,"We then fill these dictionaries with the values associated to every year."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pd.Series(year_list).value_counts()\nfor count, value in enumerate(urban_ratio):\n    year_avg[year_list[count]].append(value)\n")),(0,o.kt)("p",null,"Bellow we average out the data, and print out the output. Each value bellow is chronological where the first entry is the average of year 2013, and the last being the average of year 2022."),(0,o.kt)("p",null,"Unfortunrately because of some extreem outliers that could be seen earlier in our data, some years have, such as April have higher than average scores."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"list_year_average = []\nfor i in year_avg:\n    list_year_average.append(np.mean(year_avg[i]))\nlist_year_average\n")),(0,o.kt)("p",null,"[0.8932386322805885,\n0.5961964284060416,\n2.541952400843471,\n3.257714599207024,\n1.249241606661275,\n1.3375268946199286,\n1.0263152629146564,\n1.1877434043813473,\n1.450091265543045,\n2.5116910229645093]"),(0,o.kt)("p",null," To correct the discrepency in the data we decided to filter for any extreem outlier. As very few points scored higher than a 4, we decided to remove any outlier higher than this limit."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"urban_ratio_corrected  = urban_ratio.copy()\nbad_index = []\nx_values_corrected = x_values.copy()\nfor i in urban_ratio_corrected:\n   if i > 4:\n       outlier_index = urban_ratio_corrected.index(i)\n       bad_index.append(outlier_index)\ncount = 0\nfor i in bad_index:\n   urban_ratio_corrected.pop(i - count)\n   x_values_corrected.pop(i - count)\n   count += 1\n")),(0,o.kt)("p",null,"After removing any significant outliers the data took a form easier to interpret. The characteristics of the data seem to be ociliating respective to the beginings and ends of years. Additionaly there does seem to be a gradual increase to our urban score. It doesn't seem very drastic but it does seem present."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"plt.plot(x_values_corrected, urban_ratio_corrected)\nplt.title('urban ratio over time')\nplt.xlabel('years')\nplt.ylabel('(urban/non urban) ratio')\nplt.show()\n")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/IcanDXD/DSC_180_images/10ab8cfba9286d05b11ad9db86757504eb67091d/graph_2.png",alt:"analyses_image_2"})),(0,o.kt)("h2",{id:"converting-dates-to-days"},"Converting dates to days"),(0,o.kt)("p",null,"TO further progress with the analyses of the data it was necessary to convert the values we have in our datetime.date objects to that of integers to be able to better process the data, and to test for further relationships it could have."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"import datetime\n")),(0,o.kt)("p",null," Bellow we converted all the datetime.date objects to datetime.datetime using the timestop method in datetime."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"my_date = x_values_corrected[0]\nx_datetime = [datetime.datetime(i.year, i.month, i.day).timestamp() for i in x_values_corrected]\n")),(0,o.kt)("p",null," Once we had converted our object type to a datetime.datetime we then processed the tie in seconds to then be represented to time in minutes."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"x_datetime_start = min(x_datetime)\nx_datetime_days = [(x - x_datetime_start)/(60 * 60 * 24) for x in x_datetime]\n")),(0,o.kt)("h2",{id:"testing-for-positive-trends"},"Testing for Positive Trends"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"x_minutes_reshaped = np.array(x_datetime_days).reshape((-1, 1))\n")),(0,o.kt)("p",null,"Bellow we inputed our values into a linear regression model to see if our urban scores had any positive relationship over time. Analyzing our resulst we can see that there did seem to be positive coefficient of determination of 0.055, and a daily coefficient increase of 0.000236. COnverting the days into years yields a coefficient of a 0.086 increase of urban/non urban growth over a year. This certainly does seem to bode well for our classifcation service as an increase to urban/non urban growth indicates a growth in ubranization, as it should be considering that the Xiong An New District, the area from where our data is from is a new growing, and developing region in China that is suspected to have these kinda of growth."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"import numpy as np\nfrom sklearn.linear_model import LinearRegression\nreg = LinearRegression().fit(x_minutes_reshaped, urban_ratio_corrected)\nreg.score(x_minutes_reshaped, urban_ratio_corrected\n")),(0,o.kt)("p",null,"0.05540008335192936"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"reg.intercept_\n")),(0,o.kt)("p",null,"0.7142641939421813"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"reg.coef_\n")),(0,o.kt)("p",null,"array(","[0.000236]",")"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"reg.coef_ * 365\n")),(0,o.kt)("p",null,"array(","[0.08614175]",")"),(0,o.kt)("p",null,"To visualized the relationship the linear relationship that our urban score has over time we displayed our information through a line graph. As our coeficients entailed, a positive coorelation can be observed to be illustrated in our graph through the red line. As iterated prior, this trend in the data indicating an increase in (urban labels/non urban labels) as time in days pass by (beginning from April 10, 2013) is indicative of urban expansion over time. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"plt.plot(x_datetime_days, linear_relationship, label = \"line 1\", color = 'red')\nplt.plot(x_datetime_days, urban_ratio_corrected)\nplt.title('urban ratio over time')\nplt.xlabel('days since April 10, 2013')\nplt.ylabel('(urban/non urban) ratio')\nplt.show()\n")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/IcanDXD/DSC_180_images/10ab8cfba9286d05b11ad9db86757504eb67091d/graph_3.png",alt:"analyses_image_3"})),(0,o.kt)("h3",{id:""}),(0,o.kt)("p",null,"The following image is just a reiteration of our previouse data visualized but under a scater plot to observe the data under a different visual output. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"!conda install --yes seaborn\n\nx_series = pd.Series(x_datetime_days, name = 'x_datetime_days')\ny_series = pd.Series(urban_ratio_corrected, name = 'urban_ratio_corrected')\ndf = pd.concat([x_series, y_series], axis=1)\n\nimport seaborn as sns\n\nsns.lmplot(x='x_datetime_days', y='urban_ratio_corrected', data = df, fit_reg=True, ci=0, n_boot=1000, line_kws={'color': 'red'})\nplt.title('scatter plot of urban ratio over time')\nplt.xlabel('days since April 10, 2013')\nplt.ylabel('(urban/non urban) ratio')\nplt.show()\n")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/IcanDXD/DSC_180_images/10ab8cfba9286d05b11ad9db86757504eb67091d/graph_4.png",alt:"analyses_image_4"})),(0,o.kt)("p",null,"To adress some of the concerns we had about the ocilation in the data we decided to test for seasonality in the data as there seemed to be a pattern of regular patterns in increases and decreases in the urban scores in the data. It was suspected that this ocilation could be linked to different tempeture and weathers that change depending on the seasons of the year. This would make sense as our use in the NDSI band to label our image was intended to be used diferenciate between vegetation and urban areas in our data. Therefore it would also be logical to conclude that much of our labels of non_urban areas would also be highly dense in vegetation as that would be the regions in our labeling service that were most visualy diferentiable and would thus have been classified as non_urban. As such, our non_urban label variable would be highly susceptible to seasonal changes such in weather, especialy tempeture."),(0,o.kt)("p",null,"To test for this theory we went ahead and detrended the data to see if we could observe any notable changes in pattern to the graph."),(0,o.kt)("p",null,"After detrending the data bellow, by removing any linear relationship between our two variables we plotted our data to test for seasonality. It can be observed that the data continuose to have a regular ocilating pattern that have regular intervals of increasing urban scores and decreasing urban scores, signifying possible trends to seasonality."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"deseasonlized = (urban_ratio_corrected - linear_relationship) + reg.intercept_\nplt.plot(x_datetime_days, deseasonlized)\nplt.title('urban ratio over time: detrended')\nplt.xlabel('days since April 10, 2013')\nplt.ylabel('(urban/non urban) ratio')\nplt.show()\n")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/IcanDXD/DSC_180_images/10ab8cfba9286d05b11ad9db86757504eb67091d/graph_5.png",alt:null})),(0,o.kt)("p",null,"Although to make sure that our prediction that our data included seasonal trends, we wanted to average out the data to see if we would still have that ocilation pattern that we have been observing thus far. "),(0,o.kt)("p",null,"The processes to accomplish this was were simply to seperate all the dates to the months they pertained with, and to then average out their urban scores within datapoints of the same month.  "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"month_list = []\nfor i in x_values:\n    month_list.append(i.month)\nmonths = np.unique(month_list)\n")),(0,o.kt)("p",null,"Here is where parsed through the months and saved their urban score."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"months_avg_corrected = {}\n# year_avg.keys = years\nfor i in months:\n    months_avg_corrected[i] = []\nmonths_avg_corrected\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"months_list_corrected = []\nfor i in x_values_corrected:\n    months_list_corrected.append(i.month)\nlen(months_list_corrected)\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"for count, value in enumerate(urban_ratio_corrected):\n    months_avg_corrected[months_list_corrected[count]].append(value)\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"months_avg_corrected_2 = {}\nfor i in months_avg_corrected:\n    months_avg_corrected_2[i] = np.mean(months_avg_corrected[i])\n")),(0,o.kt)("p",null,"After averaging the data by months it can be observed that the urban score decreases as it aproaches the hoter dates in Hebei (May 10 to September 19), the province which our region is located in, and increases as it aproaches the colder dates (November 25 to February 24)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"month_names = ['Jan', 'Feb', 'March', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']\nyear_avg_corrected = plt.plot(month_names,months_avg_corrected_2.values())\nplt.title('Urban Score Shift Over a Yearly Cycle')\nplt.xlabel('months')\nplt.ylabel('(urban/non urban) ratio')\nplt.show()\n")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/IcanDXD/DSC_180_images/10ab8cfba9286d05b11ad9db86757504eb67091d/graph_6.png",alt:"anaylyses_image_6"})),(0,o.kt)("p",null,"Furthermore, meterological trends back up our findings.weatherspark, a weather related database has very similar graphical representations that align with our studies. Unfortunately our team does not have access to this data to compare our statistical findings to their. And because of the time constraint of our project we were unable to do further research into seasonality. So we can only reference visual representation as that is what time and resources permits in our project."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/IcanDXD/DSC_180_images/2090d5f67b5f53637858edf74602825c60845558/Average%20High%20and%20Low%20Temperature%20in%20Hebei.png",alt:"analyses_image_7"})),(0,o.kt)("p",null,"In summary, through the random forest classifier it was found that urban expansion seemed to take place between the years 2013 and 2022 in the Xiong An New District we gathered from the banded data collected in the data processing portion of our project. We were able to accomplish analyzing this trend by creating a scoring system using based on a frequency of urban to non urban ratio we gathered after classifying our data into these two cattegories. Once we processed the data and extracted the dates for these urban scores, we were able to graph the progression of the data over time, which revealed to have a positive coefficient of 0.055. These results can be interpreted as there being an increase of urban expansion over time as the urban score of urban labels/non_urban labels increased over time. Additionaly it was found out that, some additional trends such as the oscillation in the data distribution could be attributed to seasonal changes. Fortunately this oscilation did not affect the results of our finding in relation to our models positive coorelation between time and urban expansion."))}u.isMDXComponent=!0}}]);