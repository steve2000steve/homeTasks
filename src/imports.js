const countries = [
  {
    country: "Afghanistan",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/AF.svg",
  },
  {
    country: "Albania",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/AL.svg",
  },
  {
    country: "Algeria",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/DZ.svg",
  },
  {
    country: "American Samoa",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/AS.svg",
  },
  {
    country: "Andorra",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/AD.svg",
  },
  {
    country: "Angola",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/AO.svg",
  },
  {
    country: "Antigua and Barbuda",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/AI.svg",
  },
  {
    country: "Angola",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/AG.svg",
  },
  {
    country: "Argentina",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/AR.svg",
  },
  {
    country: "Armenia",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/AM.svg",
  },
  {
    country: "Aruba",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/AW.svg",
  },
  {
    country: "Australia",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/AU.svg",
  },
  {
    country: "Austria",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/AT.svg",
  },
  {
    country: "Azerbaijan",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/AZ.svg",
  },
  {
    country: "Bangladesh",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/BD.svg",
  },
  {
    country: "Barbados",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/BB.svg",
  },
  {
    country: "Bahamas",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/BS.svg",
  },
  {
    country: "Bahrain",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/BH.svg",
  },
  {
    country: "Belarus",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/BY.svg",
  },
  {
    country: "Belgium",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/BE.svg",
  },
  {
    country: "Belize",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/BZ.svg",
  },
  {
    country: "Benin",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/BJ.svg",
  },
  {
    country: "Bermuda",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/BM.svg",
  },
  {
    country: "Bhutan",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/BT.svg",
  },
  {
    country: "Bolivia",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/BO.svg",
  },
  {
    country: "Bosnia and Herzegovina",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/BA.svg",
  },
  {
    country: "Botswana",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/BW.svg",
  },
  {
    country: "Bouvet Island",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/BV.svg",
  },
  {
    country: "Brazil",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/BR.svg",
  },
  {
    country: "British Indian Ocean Territory",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/IO.svg",
  },
  {
    country: "Bulgaria",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/BG.svg",
  },
  {
    country: "Burkina Faso",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/BF.svg",
  },
  {
    country: "Burundi",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/BI.svg",
  },
  {
    country: "Cambodia",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/KH.svg",
  },
  {
    country: "Cameroon",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/CM.svg",
  },
  {
    country: "Canada",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/CA.svg",
  },
  {
    country: "Cape Verde",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/CV.svg",
  },
  {
    country: "Cayman Islands",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/KY.svg",
  },
  {
    country: "Central African Republic",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/CF.svg",
  },
  {
    country: "Chad",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/TD.svg",
  },
  {
    country: "Chile",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/CL.svg",
  },
  {
    country: "China",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/CN.svg",
  },
  {
    country: "Christmas Island",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/CX.svg",
  },
  {
    country: "Cocos (Keeling) Islands",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/CC.svg",
  },
  {
    country: "Colombia",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/CO.svg",
  },
  {
    country: "Comoros",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/KM.svg",
  },
  {
    country: "Cook Islands",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/CK.svg",
  },
  {
    country: "Costa Rica",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/CR.svg",
  },
  {
    country: "Croatia",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/HR.svg",
  },
  {
    country: "Cyprus",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/CY.svg",
  },
  {
    country: "Czech Republic",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/CZ.svg",
  },
  {
    country: "Denmark",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/DK.svg",
  },
  {
    country: "Djibouti",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/DJ.svg",
  },
  {
    country: "Dominica",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/DM.svg",
  },
  {
    country: "Dominican Republic",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/DO.svg",
  },
  {
    country: "Ecuador",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/EC.svg",
  },
  {
    country: "El Salvador",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/SV.svg",
  },
  {
    country: "Egypt",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/EG.svg",
  },
  {
    country: "Equatorial Guinea",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/GQ.svg",
  },
  {
    country: "Eritrea",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/ER.svg",
  },
  {
    country: "Estonia",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/EE.svg",
  },
  {
    country: "Ethiopia",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/ET.svg",
  },
  {
    country: "Falkland Islands(Malvinas)",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/FK.svg",
  },
  {
    country: "Faroe Islands",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/FO.svg",
  },
  {
    country: "Fiji",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/FJ.svg",
  },
  {
    country: "Finland",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/FI.svg",
  },
  {
    country: "France",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/FR.svg",
  },
  {
    country: "French Guiana",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/GF.svg",
  },
  {
    country: "French Polynesia",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/PF.svg",
  },
  {
    country: "Gabon",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/GA.svg",
  },
  {
    country: "Gambia",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/GM.svg",
  },
  {
    country: "Georgia",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/GE.svg",
  },
  {
    country: "Germany",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/DE.svg",
  },
  {
    country: "Ghana",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/GH.svg",
  },
  {
    country: "Gibraltar",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/GI.svg",
  },
  {
    country: "Greece",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/GR.svg",
  },
  {
    country: "Greenland",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/GL.svg",
  },
  {
    country: "Grenada",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/GD.svg",
  },
  {
    country: "Guadeloupe",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/GP.svg",
  },
  {
    country: "Guam",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/GU.svg",
  },
  {
    country: "Guatemala",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/GT.svg",
  },
  {
    country: "Guinea",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/GN.svg",
  },
  {
    country: "Guinea-Bissau",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/GW.svg",
  },
  {
    country: "Guyana",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/GY.svg",
  },
  {
    country: "Haiti",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/HT.svg",
  },
  {
    country: "Honduras",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/HN.svg",
  },
  {
    country: "Hong Kong",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/HK.svg",
  },
  {
    country: "Hungary",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/HK.svg",
  },
  {
    country: "Iceland",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/IS.svg",
  },
  {
    country: "India",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/IN.svg",
  },
  {
    country: "Indonesia",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/ID.svg",
  },
  {
    country: "Iraq",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/IQ.svg",
  },
  {
    country: "Ireland",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/IE.svg",
  },
  {
    country: "Israel",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/IL.svg",
  },
  {
    country: "Italy",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/IT.svg",
  },
  {
    country: "Jamaica",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/JM.svg",
  },
  {
    country: "Japan",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/JP.svg",
  },
  {
    country: "Jordan",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/JO.svg",
  },
  {
    country: "Kazakhstan",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/KZ.svg",
  },
  {
    country: "Kenya",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/KE.svg",
  },
  {
    country: "Kiribati",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/KI.svg",
  },
  {
    country: "Korea, Republic of",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/KR.svg",
  },
  {
    country: "Kuwait",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/KW.svg",
  },
  {
    country: "Kyrgyzstan",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/KG.svg",
  },
  {
    country: "Latvia",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/LV.svg",
  },
  {
    country: "Lebanon",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/LB.svg",
  },
  {
    country: "Lesotho",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/LS.svg",
  },
  {
    country: "Liberia",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/LR.svg",
  },
  {
    country: "Liechtenstein",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/LI.svg",
  },
  {
    country: "Lithuania",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/LT.svg",
  },
  {
    country: "Luxembourg",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/LX.svg",
  },
  {
    country: "Macao",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/MO.svg",
  },
  {
    country: "Macedonia, the Former Yugoslav Republic of",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/MK.svg",
  },
  {
    country: "Madagascar",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/MG.svg",
  },
  {
    country: "Malawi",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/MW.svg",
  },
  {
    country: "Malaysia",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/MY.svg",
  },
  {
    country: "Maldives",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/MV.svg",
  },
  {
    country: "Mali",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/ML.svg",
  },
  {
    country: "Malta",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/MT.svg",
  },
  {
    country: "Marshall Islands",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/MH.svg",
  },
  {
    country: "Martinique",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/MQ.svg",
  },
  {
    country: "Mauritania",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/MR.svg",
  },
  {
    country: "Mauritius",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/MU.svg",
  },
  {
    country: "Mayotte",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/YT.svg",
  },
  {
    country: "Mexico",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/MX.svg",
  },
  {
    country: "Moldova",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/MD.svg",
  },
  {
    country: "Monaco",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/MC.svg",
  },
  {
    country: "Mongolia",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/MN.svg",
  },
  {
    country: "Montenegro",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/ME.svg",
  },
  {
    country: "Montserrat",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/MS.svg",
  },
  {
    country: "Morocco",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/MA.svg",
  },
  {
    country: "Mozambique",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/MZ.svg",
  },
  {
    country: "Namibia",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/NA.svg",
  },
  {
    country: "Nauru",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/NR.svg",
  },
  {
    country: "Nepal",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/NP.svg",
  },
  {
    country: "Netherlands",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/NL.svg",
  },
  {
    country: "New Caledonia",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/NC.svg",
  },
  {
    country: "New Zealand",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/NZ.svg",
  },
  {
    country: "Nicaragua",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/NI.svg",
  },
  {
    country: "Niger",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/NE.svg",
  },
  {
    country: "Nigeria",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/NG.svg",
  },
  {
    country: "Niue",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/NU.svg",
  },
  {
    country: "Norfolk Island",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/NF.svg",
  },
  {
    country: "Northern Mariana Islands",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/MP.svg",
  },
  {
    country: "Norway",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/NO.svg",
  },
  {
    country: "Oman",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/OM.svg",
  },
  {
    country: "Pakistan",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/PK.svg",
  },
  {
    country: "Palau",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/PW.svg",
  },
  {
    country: "Panama",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/PA.svg",
  },
  {
    country: "Papua New Guinea",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/PG.svg",
  },
  {
    country: "Paraguay",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/PY.svg",
  },
  {
    country: "Peru",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/PE.svg",
  },
  {
    country: "Philippines",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/PH.svg",
  },
  {
    country: "Pitcairn",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/PN.svg",
  },
  {
    country: "Poland",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/PL.svg",
  },
  {
    country: "Portugal",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/PT.svg",
  },
  {
    country: "Puerto Rico",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/PR.svg",
  },
  {
    country: "Qatar",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/QA.svg",
  },
  {
    country: "Reunion",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/RE.svg",
  },
  {
    country: "Romania",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/RO.svg",
  },
  {
    country: "Russian Federation",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/RU.svg",
  },
  {
    country: "Rwanda",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/RW.svg",
  },
  {
    country: "Saint Helena",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/SH.svg",
  },
  {
    country: "Saint Kitts and Nevis",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/KN.svg",
  },
  {
    country: "Saint Lucia",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/LC.svg",
  },
  {
    country: "Saint Pierre and Miquelon",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/PM.svg",
  },
  {
    country: "Saint Vincent and the Grenadines",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/VC.svg",
  },
  {
    country: "Samoa",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/WS.svg",
  },
  {
    country: "San Marino",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/SM.svg",
  },
  {
    country: "Sao Tome and Principe",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/ST.svg",
  },
  {
    country: "Saudi Arabia",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/SA.svg",
  },
  {
    country: "Senegal",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/SN.svg",
  },
  {
    country: "Serbia",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/RS.svg",
  },
  {
    country: "Seychelles",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/SC.svg",
  },
  {
    country: "Sierra Leone",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/SL.svg",
  },
  {
    country: "Singapore",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/SG.svg",
  },
  {
    country: "Slovakia",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/SK.svg",
  },
  {
    country: "Slovenia",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/SI.svg",
  },
  {
    country: "Solomon Islands",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/SB.svg",
  },
  {
    country: "Somalia",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/SO.svg",
  },
  {
    country: "South Africa",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/ZA.svg",
  },
  {
    country: "South Georgia and the South Sandwich Islands",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/GS.svg",
  },
  {
    country: "Spain",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/ES.svg",
  },
  {
    country: "Sri Lanka",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/LK.svg",
  },
  {
    country: "Sudan",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/SD.svg",
  },
  {
    country: "Suriname",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/SR.svg",
  },
  {
    country: "Svalbard and Jan Mayen",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/SJ.svg",
  },
  {
    country: "Sweden",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/SE.svg",
  },
  {
    country: "Swaziland",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/SZ.svg",
  },
  {
    country: "Switzerland",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/CH.svg",
  },
  {
    country: "Syria Arab Republic",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/SY.svg",
  },
  {
    country: "Taiwan, Province of China",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/TW.svg",
  },
  {
    country: "Tajikistan",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/TJ.svg",
  },
  {
    country: "Tanzania, United Republic of",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/TZ.svg",
  },
  {
    country: "Thailand",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/TH.svg",
  },
  {
    country: "Togo",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/TG.svg",
  },
  {
    country: "Tokelau",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/TK.svg",
  },
  {
    country: "Tonga",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/TO.svg",
  },
  {
    country: "Trinidad and Tobago",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/TT.svg",
  },
  {
    country: "Tunisia",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/TN.svg",
  },
  {
    country: "Turkey",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/TR.svg",
  },
  {
    country: "Turkmenistan",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/TM.svg",
  },
  {
    country: "Turks and Caicos Islands",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/TC.svg",
  },
  {
    country: "Tuvalu",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/TV.svg",
  },
  {
    country: "Uganda",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/UG.svg",
  },
  {
    country: "Ukraine",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/UA.svg",
  },
  {
    country: "United Arab Emirates",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/AE.svg",
  },
  {
    country: "United Kingdom",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/GB.svg",
  },
  {
    country: "United States",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/US.svg",
  },
  {
    country: "Uruguay",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/UY.svg",
  },
  {
    country: "Uzbekistan",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/UZ.svg",
  },
  {
    country: "Vanuatu",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/VU.svg",
  },
  {
    country: "Viet Nam",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/VN.svg",
  },
  {
    country: "Venezuela",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/VE.svg",
  },
  {
    country: "Wallis and Futuna",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/WF.svg",
  },
  {
    country: "Western Sahara",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/EH.svg",
  },
  {
    country: "Yemen",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/YE.svg",
  },
  {
    country: "Zambia",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/ZM.svg",
  },
  {
    country: "Zimbabwe",
    flag: "http://client.hypernet.pro/assets/images/flagpack/m/ZW.svg",
  },
];
const objCountries = [];

let i = 0;
for (i; i < countries.length; i++) {
  objCountries.push({ name: countries[i].country, code: countries[i].flag });
}

export default objCountries;
