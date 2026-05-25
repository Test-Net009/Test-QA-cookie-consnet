
let userLang = (navigator.language || (navigator).userLanguage || 'en').split('-')[0];
console.log("Browser Language Code: ", userLang);
window.klaroConfig = {
  "consentManagerId": "6a14024743f3e55957ab7be6",
  "uuid": "63bb804d-481a-41ba-a3a2-aa9cf421c1c9",
  "domain": "https://starhealth.pre-dataprivacy.com/cmapi",
  "version": 1,
  "elementID": "SEQRITE",
  lang: userLang,
  "storageMethod": "cookie",
  "storageName": "https://test-qa-cookie-consnet.netlify.app/",
  "cookieExpiresAfterDays": 365,
  "default": true,
  "mustConsent": false,
  "acceptAll": true,
  "hideDeclineAll": false,
  "hideLearnMore": false,
  "disablePoweredBy": false,
  "translations": {
    "english": {
      "acceptAll": "Accept all",
      "accept": "Accept",
      "decline": "Reject All",
      "acceptSelected": "Accept Selected",
      "ok": "Accept All",
      "consentNotice": {
        "description": "<p><strong>We respect your privacy</strong></p><p>We store cookies to enable essential site functionality, as well as marketing, personalization and analytics. By clicking “Accept All”, you consent to our use of cookies. You can change your settings at any time. <a href=\"https://www.google.com/\" title=\"https://www.google.com/\" target=\"_blank\"><u>Cookie Policy.</u></a></p>",
        "learnMore": "Customize",
        "changeDescription": " "
      },
      "save": "Accept",
      "consentModal": {
        "title": "Customize Consent Preferences",
        "description": "We use cookies to help you navigate between pages efficiently, storing your preferences, and generally improving your experience of a website.  However, we acknowledge  your right to privacy and hence you can choose not to allow some types of cookies. Click on the different category headings to find out more and change our default settings. Please note that blocking certain types of cookies might affect your experience of the site. ",
        "buttons": {
          "save": "Accept",
          "acceptAll": "Accept all",
          "decline": "Reject All"
        }
      },
      "poweredBy": "Powered by Seqrite",
      "purposes": {},
      "service": {
        "disableAll": {
          "description": "Reject All",
          "title": "Reject All"
        },
        "optOut": {
          "description": "Opt Out",
          "title": "Opt Out"
        }
      },
      "purposeItem": {
        "service": "Cookie",
        "services": "Cookies"
      },
      "contextualConsent": {
        "description": "To show this content, we need your consent. Please accept the relevant cookies.",
        "acceptOnce": "Accept once",
        "acceptAlways": "Accept always"
      },
      "analytics": {
        "title": "Analytics",
        "description": "<p>These cookies help us analyze website traffic, user behavior, and engagement patterns. The insights gathered allow us to optimize content, enhance usability, and improve overall site performance.</p><details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga_89RWJTCPLZ</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div></div></details>"
      },
      "marketing": {
        "title": "Marketing",
        "description": "<p>These cookies are used by our advertising partners to deliver personalized ads and measure the effectiveness of marketing campaigns. They help provide relevant promotions based on user interests and browsing behavior.</p><details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">6 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_fbp</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Facebook/Meta Pixel</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_gcl_au</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Google Ads</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_fbc</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Facebook/Meta Pixel</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_uetsid</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Microsoft Clarity</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_uetvid</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Microsoft Clarity</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;MUID</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div></div></details>"
      },
      "others": {
        "title": "Others",
        "description": "<p>This category includes cookies that do not fit into the predefined categories but may be necessary for certain website functionalities or improvements.</p><details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">3 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;user_prefs</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;session_id</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;marketing_id</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      }
    },
    "en": {
      "acceptAll": "Accept all",
      "accept": "Accept",
      "decline": "Reject All",
      "acceptSelected": "Accept Selected",
      "ok": "Accept All",
      "consentNotice": {
        "description": "<p><strong>We respect your privacy</strong></p><p>We store cookies to enable essential site functionality, as well as marketing, personalization and analytics. By clicking “Accept All”, you consent to our use of cookies. You can change your settings at any time. <a href=\"https://www.google.com/\" title=\"https://www.google.com/\" target=\"_blank\"><u>Cookie Policy.</u></a></p>",
        "learnMore": "Customize",
        "changeDescription": " "
      },
      "save": "Accept",
      "consentModal": {
        "title": "Customize Consent Preferences",
        "description": "We use cookies to help you navigate between pages efficiently, storing your preferences, and generally improving your experience of a website.  However, we acknowledge  your right to privacy and hence you can choose not to allow some types of cookies. Click on the different category headings to find out more and change our default settings. Please note that blocking certain types of cookies might affect your experience of the site. ",
        "buttons": {
          "save": "Accept",
          "acceptAll": "Accept all",
          "decline": "Reject All"
        }
      },
      "poweredBy": "Powered by Seqrite",
      "purposes": {},
      "service": {
        "disableAll": {
          "description": "Reject All",
          "title": "Reject All"
        },
        "optOut": {
          "description": "Opt Out",
          "title": "Opt Out"
        }
      },
      "purposeItem": {
        "service": "Cookie",
        "services": "Cookies"
      },
      "contextualConsent": {
        "description": "To show this content, we need your consent. Please accept the relevant cookies.",
        "acceptOnce": "Accept once",
        "acceptAlways": "Accept always"
      },
      "analytics": {
        "title": "Analytics",
        "description": "<p>These cookies help us analyze website traffic, user behavior, and engagement patterns. The insights gathered allow us to optimize content, enhance usability, and improve overall site performance.</p><details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga_89RWJTCPLZ</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div></div></details>"
      },
      "marketing": {
        "title": "Marketing",
        "description": "<p>These cookies are used by our advertising partners to deliver personalized ads and measure the effectiveness of marketing campaigns. They help provide relevant promotions based on user interests and browsing behavior.</p><details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">6 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_fbp</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Facebook/Meta Pixel</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_gcl_au</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Google Ads</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_fbc</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Facebook/Meta Pixel</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_uetsid</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Microsoft Clarity</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_uetvid</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Microsoft Clarity</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;MUID</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div></div></details>"
      },
      "others": {
        "title": "Others",
        "description": "<p>This category includes cookies that do not fit into the predefined categories but may be necessary for certain website functionalities or improvements.</p><details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">3 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;user_prefs</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;session_id</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;marketing_id</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      }
    },
    "zz": {
      "acceptAll": "Accept all",
      "accept": "Accept",
      "decline": "Reject All",
      "acceptSelected": "Accept Selected",
      "ok": "Accept All",
      "consentNotice": {
        "description": "<p><strong>We respect your privacy</strong></p><p>We store cookies to enable essential site functionality, as well as marketing, personalization and analytics. By clicking “Accept All”, you consent to our use of cookies. You can change your settings at any time. <a href=\"https://www.google.com/\" title=\"https://www.google.com/\" target=\"_blank\"><u>Cookie Policy.</u></a></p>",
        "learnMore": "Customize",
        "changeDescription": " "
      },
      "save": "Accept",
      "consentModal": {
        "title": "Customize Consent Preferences",
        "description": "We use cookies to help you navigate between pages efficiently, storing your preferences, and generally improving your experience of a website.  However, we acknowledge  your right to privacy and hence you can choose not to allow some types of cookies. Click on the different category headings to find out more and change our default settings. Please note that blocking certain types of cookies might affect your experience of the site. ",
        "buttons": {
          "save": "Accept",
          "acceptAll": "Accept all",
          "decline": "Reject All"
        }
      },
      "poweredBy": "Powered by Seqrite",
      "purposes": {},
      "service": {
        "disableAll": {
          "description": "Reject All",
          "title": "Reject All"
        },
        "optOut": {
          "description": "Opt Out",
          "title": "Opt Out"
        }
      },
      "purposeItem": {
        "service": "Cookie",
        "services": "Cookies"
      },
      "contextualConsent": {
        "description": "To show this content, we need your consent. Please accept the relevant cookies.",
        "acceptOnce": "Accept once",
        "acceptAlways": "Accept always"
      },
      "analytics": {
        "title": "Analytics",
        "description": "<p>These cookies help us analyze website traffic, user behavior, and engagement patterns. The insights gathered allow us to optimize content, enhance usability, and improve overall site performance.</p><details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga_89RWJTCPLZ</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div></div></details>"
      },
      "marketing": {
        "title": "Marketing",
        "description": "<p>These cookies are used by our advertising partners to deliver personalized ads and measure the effectiveness of marketing campaigns. They help provide relevant promotions based on user interests and browsing behavior.</p><details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">6 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_fbp</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Facebook/Meta Pixel</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_gcl_au</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Google Ads</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_fbc</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Facebook/Meta Pixel</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_uetsid</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Microsoft Clarity</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_uetvid</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Microsoft Clarity</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;MUID</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div></div></details>"
      },
      "others": {
        "title": "Others",
        "description": "<p>This category includes cookies that do not fit into the predefined categories but may be necessary for certain website functionalities or improvements.</p><details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">3 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;user_prefs</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;session_id</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;marketing_id</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      }
    },
    "doi": {
      "acceptAll": "सब स्वीकार करो",
      "accept": "मंजूर करो",
      "decline": "सब को खारिज कर दे",
      "acceptSelected": "चयनित स्वीकार करना",
      "ok": "सब स्वीकार करो",
      "consentNotice": {
        "description": "अस तुंदी गोपनीयता दा आदर करने आं अस कुकीज़ गी संग्रहीत करदे आं तां जे जरूरी साइट दी कार्यक्षमता गी सक्षम बनाया जाई सकै, ते कन्नै गै मार्केटिंग, निजीकरण ते विश्लेषण बी। &quot;सभनें गी स्वीकार करो&quot; पर क्लिक करियै, तुस कुकीज़ दे साढ़े इस्तेमाल लेई सहमति दिंदे ओ। तुस कुसै बी समें उप्पर अपनी सेटिंग्स बदली सकदे ओ। कुकी नीति।",
        "learnMore": "अनुकूलित करो",
        "changeDescription": " "
      },
      "save": "मंजूर करो",
      "consentModal": {
        "title": "सहमति प्राथमिकताएं गी अनुकूलित करो",
        "description": "अस कुकीज़ दा इस्तेमाल तुसेंगी पन्नें दे बिच्च कुशलता कन्नै नेविगेट करने, तुंदी पसंद गी संग्रहीत करने ते आमतौर पर कुसै वेबसाइट दे तुंदे अनुभव गी बेहतर बनाने च मदद करने आस्तै करदे आं। हालांकि, अस तुंदे गोपनीयता दे अधिकार गी स्वीकार करने आं ते इसलेई तुस किश किस्म दे कुकीज़ दी अनुमति नेईं देने दा विकल्प चुन सकदे ओ। होर जानने लेई ते साढ़ी डिफाल्ट सेटिंग्स बदलने लेई बक्ख-बक्ख श्रेणी हेडिंगें पर क्लिक करो। कृपा करियै ध्यान देओ जे किश किस्म दे कुकीज़ गी ब्लॉक करने कन्नै साइट दे तुंदे अनुभव गी प्रभावित करी सकदा ऐ।",
        "buttons": {
          "save": "मंजूर करो",
          "acceptAll": "सब स्वीकार करो",
          "decline": "सब को खारिज कर दे"
        }
      },
      "poweredBy": "Powered by Seqrite",
      "purposes": {},
      "service": {
        "disableAll": {
          "description": "सब को खारिज कर दे",
          "title": "सब को खारिज कर दे"
        },
        "optOut": {
          "description": "Opt Out",
          "title": "Opt Out"
        }
      },
      "purposeItem": {
        "service": "Cookie",
        "services": "Cookies"
      },
      "contextualConsent": {
        "description": "To show this content, we need your consent. Please accept the relevant cookies.",
        "acceptOnce": "Accept once",
        "acceptAlways": "Accept always"
      },
      "analytics": {
        "title": "Analytics",
        "description": "एह् कुकीज़ असेंगी वेबसाइट ट्रैफिक, बरतूनी व्यवहार, ते रूज्झे दे पैटर्न दा विश्लेषण करने च मदद करदियां न। इकट्ठी कीती गेदी अंतर्दृष्टि असेंगी सामग्री गी अनुकूल बनाने, उपयोगिता गी बधाने ते समग्र साइट दे प्रदर्शन च सुधार करने दी अनुमति दिंदी ऐ।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga_89RWJTCPLZ</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div></div></details>"
      },
      "marketing": {
        "title": "Marketing",
        "description": "इनें कुकीज़ दा इस्तेमाल साढ़े विज्ञापन साझेदारें आसेआ निजीकृत विज्ञापन देने ते विपणन अभियानें दी प्रभावशीलता गी मापने लेई कीता जंदा ऐ। एह् बरतूनी दी रुचि ते ब्राउज़िंग व्यवहार दे आधार उप्पर प्रासंगिक प्रचार देने च मदद करदे न।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">6 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_fbp</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Facebook/Meta Pixel</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_gcl_au</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Google Ads</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_fbc</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Facebook/Meta Pixel</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_uetsid</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Microsoft Clarity</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_uetvid</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Microsoft Clarity</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;MUID</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div></div></details>"
      },
      "others": {
        "title": "Others",
        "description": "इस श्रेणी च कुकीज़ शामल न जेह् ड़ियां पैह् ले थमां गै परिभाशत श्रेणियें च फिट नेईं होंदियां न पर किश वेबसाइटें दी कार्यक्षमताएं जां सुधारें लेई जरूरी होई सकदियां न।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">3 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;user_prefs</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;session_id</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;marketing_id</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      }
    },
    "gom": {
      "acceptAll": "सगळें मान्य करचें",
      "accept": "स्विकार",
      "decline": "सगळें न्हयकारचें",
      "acceptSelected": "निवडून घेतिल्लें मान्य करचें",
      "ok": "सगळें मान्य करचें",
      "consentNotice": {
        "description": "आमी तुमच्या गुप्ततायेचो आदर करतात आमी गरजेची साइट कार्यक्षमताय सक्षम करपाक, तशेंच विपणन, वैयक्तीकीकरण आनी विश्लेशण सक्षम करपाक कुकीज सांठयतात. “सगले मान्य करात” क्लिक करून, तुमी आमच्या कुकीज वापराक संमती दितात. तुमी तुमचीं मांडावळी खंयच्याय वेळार बदलूं येतात. कुकी धोरण.",
        "learnMore": "सानुकूल करचें",
        "changeDescription": " "
      },
      "save": "स्विकार",
      "consentModal": {
        "title": "संमती प्राधान्यां पसंतीचीं करात",
        "description": "तुमकां पानांतल्यान कार्यक्षमतेन नेव्हिगेट करपाक, तुमचीं पसंती सांठोवपाक आनी सादारणपणान तुमचो वेबसायटीचो अणभव सुदारपाक आमी कुकीज वापरतात. पूण, आमी तुमचो गुप्ततायेचो हक्क मान्य करतात आनी देखून तुमी कांय प्रकारच्या कुकीजांक परवानगी दिवंक ना अशें निवडूंक शकतात. चड जाणून घेवपाक आनी आमचीं मुलभूत मांडावळी बदलपाक वेगवेगळ्या श्रेणी शीर्षकां वयल्यान क्लिक करात. उपकार करून लक्षांत दवरात की कांय प्रकारच्यो कुकीज आडायल्यार तुमच्या साइटच्या अणभवाचेर परिणाम जावं येता.",
        "buttons": {
          "save": "स्विकार",
          "acceptAll": "सगळें मान्य करचें",
          "decline": "सगळें न्हयकारचें"
        }
      },
      "poweredBy": "Powered by Seqrite",
      "purposes": {},
      "service": {
        "disableAll": {
          "description": "सगळें न्हयकारचें",
          "title": "सगळें न्हयकारचें"
        },
        "optOut": {
          "description": "Opt Out",
          "title": "Opt Out"
        }
      },
      "purposeItem": {
        "service": "Cookie",
        "services": "Cookies"
      },
      "contextualConsent": {
        "description": "To show this content, we need your consent. Please accept the relevant cookies.",
        "acceptOnce": "Accept once",
        "acceptAlways": "Accept always"
      },
      "analytics": {
        "title": "Analytics",
        "description": "हे कुकीज आमकां वेबसायटीची येरादारी, वापरप्यांची वागणूक, आनी संलग्नताय नमुन्यांचे विश्लेशण करपाक मदत करतात. एकठांय केल्ली अंतर्दृष्टी आमकां सामुग्री अनुकूल करपाक, वापरपाची तांक वाडोवपाक आनी एकंदर साइट कार्यक्षमताय सुदारपाक परवानगी दिता.<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga_89RWJTCPLZ</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div></div></details>"
      },
      "marketing": {
        "title": "Marketing",
        "description": "वैयक्तीक जायराती दिवपाक आनी विपणन मोहिमांची परिणामकारकता मेजपाक आमच्या जायरात भागीदारांनी ह्यो कुकीज वापरतात. वापरप्यांच्या आवडीचेर आनी ब्राउझिंग वागणुकेक आदारीत संबंदीत प्रचार दिवपाक ते मदत करतात.<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">6 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_fbp</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Facebook/Meta Pixel</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_gcl_au</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Google Ads</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_fbc</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Facebook/Meta Pixel</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_uetsid</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Microsoft Clarity</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_uetvid</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Microsoft Clarity</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;MUID</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div></div></details>"
      },
      "others": {
        "title": "Others",
        "description": "ह्या वर्गांत पूर्वनिर्धारीत वर्गांत बसनात पूण कांय संकेतथळ कार्यक्षमताय वा सुदारणां खातीर गरजेचीं आसूं येतात अशीं कुकीज आसपावीत आसात.<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">3 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;user_prefs</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;session_id</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;marketing_id</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      }
    },
    "ur": {
      "acceptAll": "سب قبول کریں۔",
      "accept": "قبول کریں۔",
      "decline": "سب کو مسترد کریں۔",
      "acceptSelected": "منتخب شدہ کو قبول کریں۔",
      "ok": "سب کو قبول کریں۔",
      "consentNotice": {
        "description": "ہم آپ کی پرائیویسی کا احترام کرتے ہیں ہم سائٹ کی ضروری فعالیت کے ساتھ ساتھ مارکیٹنگ، پرسنلائزیشن اور تجزیات کو فعال کرنے کے لیے کوکیز اسٹور کرتے ہیں۔ &quot;سب کو قبول کریں&quot; پر کلک کرکے، آپ ہماری کوکیز کے استعمال سے اتفاق کرتے ہیں۔ آپ کسی بھی وقت اپنی ترتیبات تبدیل کر سکتے ہیں۔ کوکی پالیسی۔",
        "learnMore": "حسب ضرورت بنائیں",
        "changeDescription": " "
      },
      "save": "قبول کریں۔",
      "consentModal": {
        "title": "رضامندی کی ترجیحات کو حسب ضرورت بنائیں",
        "description": "ہم آپ کو صفحات کے درمیان موثر انداز میں تشریف لے جانے، آپ کی ترجیحات کو ذخیرہ کرنے، اور عام طور پر کسی ویب سائٹ کے بارے میں آپ کے تجربے کو بہتر بنانے میں مدد کے لیے کوکیز کا استعمال کرتے ہیں۔ تاہم، ہم آپ کے رازداری کے حق کو تسلیم کرتے ہیں اور اس لیے آپ کچھ قسم کی کوکیز کی اجازت نہ دینے کا انتخاب کر سکتے ہیں۔ مزید جاننے کے لیے مختلف زمرہ کے عنوانات پر کلک کریں اور ہماری ڈیفالٹ سیٹنگز کو تبدیل کریں۔ براہ کرم نوٹ کریں کہ مخصوص قسم کی کوکیز کو مسدود کرنا آپ کے سائٹ کے تجربے کو متاثر کر سکتا ہے۔",
        "buttons": {
          "save": "قبول کریں۔",
          "acceptAll": "سب قبول کریں۔",
          "decline": "سب کو مسترد کریں۔"
        }
      },
      "poweredBy": "Powered by Seqrite",
      "purposes": {},
      "service": {
        "disableAll": {
          "description": "سب کو مسترد کریں۔",
          "title": "سب کو مسترد کریں۔"
        },
        "optOut": {
          "description": "Opt Out",
          "title": "Opt Out"
        }
      },
      "purposeItem": {
        "service": "Cookie",
        "services": "Cookies"
      },
      "contextualConsent": {
        "description": "To show this content, we need your consent. Please accept the relevant cookies.",
        "acceptOnce": "Accept once",
        "acceptAlways": "Accept always"
      },
      "analytics": {
        "title": "Analytics",
        "description": "یہ کوکیز ویب سائٹ ٹریفک، صارف کے رویے، اور مشغولیت کے نمونوں کا تجزیہ کرنے میں ہماری مدد کرتی ہیں۔ جمع کی گئی بصیرتیں ہمیں مواد کو بہتر بنانے، استعمال کو بڑھانے اور سائٹ کی مجموعی کارکردگی کو بہتر بنانے کی اجازت دیتی ہیں۔<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga_89RWJTCPLZ</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div></div></details>"
      },
      "marketing": {
        "title": "Marketing",
        "description": "یہ کوکیز ہمارے اشتہاری پارٹنرز کے ذریعے ذاتی نوعیت کے اشتہارات فراہم کرنے اور مارکیٹنگ کی مہموں کی تاثیر کی پیمائش کے لیے استعمال کی جاتی ہیں۔ وہ صارف کی دلچسپیوں اور براؤزنگ رویے کی بنیاد پر متعلقہ پروموشنز فراہم کرنے میں مدد کرتے ہیں۔<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">6 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_fbp</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Facebook/Meta Pixel</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_gcl_au</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Google Ads</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_fbc</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Facebook/Meta Pixel</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_uetsid</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Microsoft Clarity</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_uetvid</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Microsoft Clarity</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;MUID</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div></div></details>"
      },
      "others": {
        "title": "Others",
        "description": "اس زمرے میں ایسی کوکیز شامل ہیں جو پہلے سے طے شدہ زمروں میں فٹ نہیں ہوتی ہیں لیکن ویب سائٹ کی کچھ خصوصیات یا بہتری کے لیے ضروری ہو سکتی ہیں۔<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">3 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;user_prefs</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;session_id</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;marketing_id</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      }
    },
    "mr": {
      "acceptAll": "सर्व स्वीकारा",
      "accept": "स्वीकारा",
      "decline": "सर्व नाकारा",
      "acceptSelected": "निवडलेले स्वीकारा",
      "ok": "सर्व स्वीकारा",
      "consentNotice": {
        "description": "<p>आम्ही तुमच्या गोपनीयतेचा आदर करतो. आम्ही साइटची आवश्यक कार्यक्षमता सक्षम करण्यासाठी, तसेच विपणन, वैयक्तिकरण आणि विश्लेषणासाठी कुकीज साठवतो. “सर्व स्वीकारा” वर क्लिक करून, तुम्ही आमच्या कुकीजच्या वापरास संमती देता. तुम्ही तुमची सेटिंग्ज कधीही बदलू शकता. कुकी धोरण.</p>",
        "learnMore": "सानुकूल करा",
        "changeDescription": " "
      },
      "save": "स्वीकारा",
      "consentModal": {
        "title": "<p>संमती प्राधान्ये सानुकूलित करा</p>",
        "description": "<p>आम्ही तुम्हाला पानांमध्ये कार्यक्षमतेने नेव्हिगेट करण्यास मदत करण्यासाठी, तुमच्या पसंती जतन करण्यासाठी आणि सर्वसाधारणपणे वेबसाइटवरील तुमचा अनुभव सुधारण्यासाठी कुकीजचा वापर करतो. तथापि, आम्ही तुमच्या गोपनीयतेच्या अधिकाराचा आदर करतो आणि म्हणूनच तुम्ही काही प्रकारच्या कुकीजना परवानगी न देण्याचा पर्याय निवडू शकता. अधिक माहिती मिळवण्यासाठी आणि आमच्या डीफॉल्ट सेटिंग्ज बदलण्यासाठी वेगवेगळ्या श्रेणींच्या शीर्षकांवर क्लिक करा. कृपया लक्षात घ्या की काही विशिष्ट प्रकारच्या कुकीज ब्लॉक केल्याने साइटवरील तुमच्या अनुभवावर परिणाम होऊ शकतो.</p>",
        "buttons": {
          "save": "स्वीकारा",
          "acceptAll": "सर्व स्वीकारा",
          "decline": "सर्व नाकारा"
        }
      },
      "poweredBy": "Powered by Seqrite",
      "purposes": {},
      "service": {
        "disableAll": {
          "description": "सर्व नाकारा",
          "title": "सर्व नाकारा"
        },
        "optOut": {
          "description": "Opt Out",
          "title": "Opt Out"
        }
      },
      "purposeItem": {
        "service": "Cookie",
        "services": "Cookies"
      },
      "contextualConsent": {
        "description": "To show this content, we need your consent. Please accept the relevant cookies.",
        "acceptOnce": "Accept once",
        "acceptAlways": "Accept always"
      },
      "analytics": {
        "title": "Analytics",
        "description": "या कुकीज आम्हाला वेबसाइटवरील रहदारी, वापरकर्त्याचे वर्तन आणि सहभागाच्या पद्धतींचे विश्लेषण करण्यास मदत करतात. यातून मिळवलेल्या माहितीमुळे आम्हाला सामग्री अनुकूलित करणे, वापरसुलभता वाढवणे आणि साइटची एकूण कामगिरी सुधारणे शक्य होते.<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga_89RWJTCPLZ</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div></div></details>"
      },
      "marketing": {
        "title": "Marketing",
        "description": "या कुकीजचा वापर आमच्या जाहिरात भागीदारांकडून वैयक्तिकृत जाहिराती देण्यासाठी आणि विपणन मोहिमांची परिणामकारकता मोजण्यासाठी केला जातो. त्या वापरकर्त्याच्या आवडीनिवडी आणि ब्राउझिंग वर्तनावर आधारित संबंधित जाहिरात योजना पुरवण्यास मदत करतात.<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">6 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_fbp</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Facebook/Meta Pixel</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_gcl_au</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Google Ads</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_fbc</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Facebook/Meta Pixel</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_uetsid</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Microsoft Clarity</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_uetvid</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Microsoft Clarity</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;MUID</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div></div></details>"
      },
      "others": {
        "title": "Others",
        "description": "या श्रेणीमध्ये अशा कुकीजचा समावेश आहे ज्या पूर्वनिर्धारित श्रेणींमध्ये बसत नाहीत, परंतु वेबसाइटच्या विशिष्ट कार्यप्रणाली किंवा सुधारणांसाठी आवश्यक असू शकतात.<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">3 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;user_prefs</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;session_id</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;marketing_id</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      }
    },
    "mai": {
      "acceptAll": "सब स्वीकार करू",
      "accept": "स्वीकार",
      "decline": "सब के अस्वीकार करू",
      "acceptSelected": "स्वीकार करू चयनित",
      "ok": "सब स्वीकार करू",
      "consentNotice": {
        "description": "हम अहां कें गोपनीयता कें सम्मान करय छी हम आवश्यक साइट कार्यक्षमता कें सक्षम करय कें लेल कुकीज़ संग्रहीत करय छी, साथ ही साथ विपणन, व्यक्तिगतकरण आ विश्लेषणात्मकता. “सब स्वीकार करू” पर क्लिक करला सं, अहां हमर कुकीज़ कें उपयोग कें लेल सहमति दयत छी. अहां अपन सेटिंग्स कखनो बदलि सकय छी. कुकी नीति।",
        "learnMore": "अनुकूलित करू",
        "changeDescription": " "
      },
      "save": "स्वीकार",
      "consentModal": {
        "title": "सहमति वरीयता अनुकूलित करू",
        "description": "हम कुकीज़ कें उपयोग अहां कें पन्नाक कें बीच कुशलता सं नेविगेट करय मे मदद करय कें लेल करय छै, अहां कें पसंद कें संग्रहीत करय मे, आ आम तौर पर कोनों वेबसाइट कें अहां कें अनुभव मे सुधार करय कें लेल करय छै. मुदा, हम अहां कें गोपनीयता कें अधिकार कें स्वीकार करय छी आ अइ कारण सं अहां किछ प्रकार कें कुकीज़ कें अनुमति नहि देनाय चुन सकय छी. अधिक जानकारी आरू हमरऽ डिफ़ॉल्ट सेटिंग बदलै लेली अलग-अलग कैटेगरी हेडिंग प॑ क्लिक करऽ । कृपया ध्यान राखब जे किछु खास तरहक कुकीज़ के अवरुद्ध करला सं साइट के अहां के अनुभव प्रभावित भ सकैत अछि.",
        "buttons": {
          "save": "स्वीकार",
          "acceptAll": "सब स्वीकार करू",
          "decline": "सब के अस्वीकार करू"
        }
      },
      "poweredBy": "Powered by Seqrite",
      "purposes": {},
      "service": {
        "disableAll": {
          "description": "सब के अस्वीकार करू",
          "title": "सब के अस्वीकार करू"
        },
        "optOut": {
          "description": "Opt Out",
          "title": "Opt Out"
        }
      },
      "purposeItem": {
        "service": "Cookie",
        "services": "Cookies"
      },
      "contextualConsent": {
        "description": "To show this content, we need your consent. Please accept the relevant cookies.",
        "acceptOnce": "Accept once",
        "acceptAlways": "Accept always"
      },
      "analytics": {
        "title": "Analytics",
        "description": "ई कुकीज़ हमरा वेबसाइट ट्रैफिक, उपयोगकर्ता व्यवहार, आरू जुड़ाव पैटर्न कें विश्लेषण करय मे मदद करय छै. एकत्रित अंतर्दृष्टि हमरा सामग्री क॑ अनुकूलित करै, उपयोगिता बढ़ाबै, आरू समग्र साइट प्रदर्शन म॑ सुधार करै के अनुमति दै छै ।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga_89RWJTCPLZ</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div></div></details>"
      },
      "marketing": {
        "title": "Marketing",
        "description": "इ कुकीज़ कें उपयोग हमर विज्ञापन भागीदारक द्वारा व्यक्तिगत विज्ञापन पहुंचाबय आ विपणन अभियानक कें प्रभावशीलता कें माप कें लेल कैल जायत छै. इ उपयोगकर्ताक कें रुचि आ ब्राउजिंग व्यवहार कें आधार पर प्रासंगिक प्रचार प्रदान करय मे मदद करय छै.<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">6 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_fbp</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Facebook/Meta Pixel</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_gcl_au</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Google Ads</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_fbc</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Facebook/Meta Pixel</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_uetsid</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Microsoft Clarity</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_uetvid</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Microsoft Clarity</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;MUID</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div></div></details>"
      },
      "others": {
        "title": "Others",
        "description": "ई श्रेणी म॑ कुकीज़ शामिल छै जे पूर्व परिभाषित श्रेणी म॑ फिट नै होय छै लेकिन कुछ वेबसाइट कार्यक्षमता या सुधार लेली आवश्यक होय सकै छै.<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">3 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;user_prefs</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;session_id</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;marketing_id</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      }
    },
    "as": {
      "acceptAll": "সকলো গ্ৰহণ কৰক",
      "accept": "গ্ৰহণ কৰা",
      "decline": "সকলোকে নাকচ কৰক",
      "acceptSelected": "নিৰ্বাচিত গ্ৰহণ কৰক",
      "ok": "সকলোকে গ্ৰহণ কৰক",
      "consentNotice": {
        "description": "আমি আপোনাৰ গোপনীয়তাক সন্মান কৰো আমি কুকীজসমূহ অত্যাৱশ্যকীয় চাইটৰ কাৰ্য্যক্ষমতা সক্ষম কৰিবলৈ সংৰক্ষণ কৰোঁ, লগতে বিপণন, ব্যক্তিগতকৰণ আৰু বিশ্লেষণো৷ “সকলো গ্ৰহণ কৰক” ক্লিক কৰি, আপুনি আমাৰ কুকীজৰ ব্যৱহাৰত সন্মতি দিছে৷ আপুনি যিকোনো সময়তে আপোনাৰ ছেটিংছ সলনি কৰিব পাৰে। কুকি নীতি।",
        "learnMore": "কাষ্টমাইজ কৰক",
        "changeDescription": " "
      },
      "save": "গ্ৰহণ কৰা",
      "consentModal": {
        "title": "সন্মতি পছন্দসমূহ কাষ্টমাইজ কৰক",
        "description": "আমি কুকীজ ব্যৱহাৰ কৰো যাতে আপোনাক পৃষ্ঠাসমূহৰ মাজত দক্ষতাৰে নেভিগেট কৰাত সহায় কৰে, আপোনাৰ পছন্দসমূহ সংৰক্ষণ কৰে, আৰু সাধাৰণতে এটা ৱেবছাইটৰ অভিজ্ঞতা উন্নত কৰে৷ কিন্তু, আমি আপোনাৰ গোপনীয়তাৰ অধিকাৰ স্বীকাৰ কৰোঁ আৰু সেয়েহে আপুনি কিছুমান ধৰণৰ কুকিজৰ অনুমতি নিদিয়াটো বাছি ল&#39;ব পাৰে৷ অধিক জানিবলৈ আৰু আমাৰ অবিকল্পিত ছেটিংছ সলনি কৰিবলৈ বিভিন্ন শ্ৰেণীৰ শিৰোনামত ক্লিক কৰক। অনুগ্ৰহ কৰি মন কৰক যে কিছুমান বিশেষ ধৰণৰ কুকীজ ব্লক কৰিলে আপোনাৰ চাইটটোৰ অভিজ্ঞতাত প্ৰভাৱ পৰিব পাৰে।",
        "buttons": {
          "save": "গ্ৰহণ কৰা",
          "acceptAll": "সকলো গ্ৰহণ কৰক",
          "decline": "সকলোকে নাকচ কৰক"
        }
      },
      "poweredBy": "Powered by Seqrite",
      "purposes": {},
      "service": {
        "disableAll": {
          "description": "সকলোকে নাকচ কৰক",
          "title": "সকলোকে নাকচ কৰক"
        },
        "optOut": {
          "description": "Opt Out",
          "title": "Opt Out"
        }
      },
      "purposeItem": {
        "service": "Cookie",
        "services": "Cookies"
      },
      "contextualConsent": {
        "description": "To show this content, we need your consent. Please accept the relevant cookies.",
        "acceptOnce": "Accept once",
        "acceptAlways": "Accept always"
      },
      "analytics": {
        "title": "Analytics",
        "description": "এই কুকীজসমূহে আমাক ৱেবছাইটৰ ট্ৰেফিক, ব্যৱহাৰকাৰীৰ আচৰণ, আৰু নিয়োজিততাৰ আৰ্হি বিশ্লেষণ কৰাত সহায় কৰে৷ সংগ্ৰহ কৰা অন্তৰ্দৃষ্টিসমূহে আমাক বিষয়বস্তু অনুকূল কৰিবলৈ, ব্যৱহাৰযোগ্যতা বৃদ্ধি কৰিবলৈ, আৰু সামগ্ৰিক চাইটৰ পৰিৱেশন উন্নত কৰিবলৈ অনুমতি দিয়ে।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga_89RWJTCPLZ</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div></div></details>"
      },
      "marketing": {
        "title": "Marketing",
        "description": "এই কুকীজসমূহ আমাৰ বিজ্ঞাপন অংশীদাৰসকলে ব্যক্তিগতকৃত বিজ্ঞাপন প্ৰদান কৰিবলৈ আৰু বিপণন অভিযানৰ ফলপ্ৰসূতা জুখিবলৈ ব্যৱহাৰ কৰে। ইহঁতে ব্যৱহাৰকাৰীৰ আগ্ৰহ আৰু ব্ৰাউজিং আচৰণৰ ওপৰত ভিত্তি কৰি প্ৰাসংগিক প্ৰচাৰ প্ৰদান কৰাত সহায় কৰে।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">6 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_fbp</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Facebook/Meta Pixel</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_gcl_au</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Google Ads</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_fbc</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Facebook/Meta Pixel</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_uetsid</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Microsoft Clarity</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_uetvid</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Microsoft Clarity</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;MUID</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div></div></details>"
      },
      "others": {
        "title": "Others",
        "description": "এই শ্ৰেণীত এনে কুকীজ অন্তৰ্ভুক্ত কৰা হৈছে যিবোৰ পূৰ্বনিৰ্ধাৰিত শ্ৰেণীসমূহত খাপ নাখায় কিন্তু কিছুমান ৱেবছাইটৰ কাৰ্য্যকৰীতা বা উন্নতিৰ বাবে প্ৰয়োজনীয় হ&#39;ব পাৰে।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">3 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;user_prefs</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;session_id</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;marketing_id</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      }
    },
    "or": {
      "acceptAll": "ସବୁ ସ୍ୱୀକାର କରନ୍ତୁ",
      "accept": "ଗ୍ରହଣ କରନ୍ତୁ",
      "decline": "ସମସ୍ତଙ୍କୁ ପ୍ରତ୍ୟାଖ୍ୟାନ କରନ୍ତୁ",
      "acceptSelected": "ଚୟନିତକୁ ଗ୍ରହଣ କରନ୍ତୁ",
      "ok": "ସବୁ ଗ୍ରହଣ କରନ୍ତୁ",
      "consentNotice": {
        "description": "ଆମେ ଆପଣଙ୍କର ଗୋପନୀୟତାକୁ ସମ୍ମାନ କରୁ | ଆମେ ଜରୁରୀ ସାଇଟ୍ କାର୍ଯ୍ୟକ୍ଷମତା, ମାର୍କେଟିଂ, ବ୍ୟକ୍ତିଗତକରଣ ଏବଂ ବିଶ୍ଳେଷଣକୁ ସକ୍ଷମ କରିବା ପାଇଁ କୁକିଜ୍ ସଂରକ୍ଷଣ କରୁ | &quot;ସମସ୍ତକୁ ଗ୍ରହଣ କରନ୍ତୁ&quot; କ୍ଲିକ୍ କରି, ଆପଣ ଆମର କୁକିଜ୍ ବ୍ୟବହାର ପାଇଁ ସମ୍ମତି ଦେଉଛନ୍ତି | ଆପଣ ଯେକୌଣସି ସମୟରେ ଆପଣଙ୍କର ସେଟିଂସ୍ ପରିବର୍ତ୍ତନ କରିପାରିବେ | କୁକି ନୀତି |",
        "learnMore": "କଷ୍ଟମାଇଜ୍‌ କରନ୍ତୁ",
        "changeDescription": " "
      },
      "save": "ଗ୍ରହଣ କରନ୍ତୁ",
      "consentModal": {
        "title": "ସମ୍ମତି ପସନ୍ଦଗୁଡ଼ିକୁ କଷ୍ଟମାଇଜ୍ କରନ୍ତୁ",
        "description": "ଆମେ ଆପଣଙ୍କୁ ପୃଷ୍ଠାଗୁଡ଼ିକ ମଧ୍ୟରେ ଦକ୍ଷତାର ସହ ନେଭିଗେଟ୍ କରିବା, ଆପଣଙ୍କର ପସନ୍ଦଗୁଡ଼ିକୁ ସଂରକ୍ଷଣ କରିବା ଏବଂ ସାଧାରଣତଃ ଏକ ୱେବସାଇଟ୍ ବିଷୟରେ ଆପଣଙ୍କର ଅଭିଜ୍ଞତାକୁ ଉନ୍ନତ କରିବାରେ ସାହାଯ୍ୟ କରିବା ପାଇଁ କୁକିଜ୍ ବ୍ୟବହାର କରୁ। ତଥାପି, ଆମେ ଆପଣଙ୍କର ଗୋପନୀୟତାର ଅଧିକାରକୁ ସ୍ୱୀକାର କରୁଛୁ ଏବଂ ତେଣୁ ଆପଣ କିଛି ପ୍ରକାରର କୁକିଜ୍ ଅନୁମତି ନଦେବାକୁ ବାଛିପାରିବେ। ଅଧିକ ଜାଣିବା ପାଇଁ ଏବଂ ଆମର ଡିଫଲ୍ଟ ସେଟିଂସ୍ ପରିବର୍ତ୍ତନ କରିବା ପାଇଁ ବିଭିନ୍ନ ବର୍ଗ ଶୀର୍ଷକ ଉପରେ କ୍ଲିକ୍ କରନ୍ତୁ। ଦୟାକରି ଧ୍ୟାନ ଦିଅନ୍ତୁ ଯେ କିଛି ପ୍ରକାରର କୁକିଜ୍ ଅବରୋଧ କରିବା ଦ୍ଵାରା ସାଇଟ୍ ବିଷୟରେ ଆପଣଙ୍କର ଅଭିଜ୍ଞତା ପ୍ରଭାବିତ ହୋଇପାରେ।",
        "buttons": {
          "save": "ଗ୍ରହଣ କରନ୍ତୁ",
          "acceptAll": "ସବୁ ସ୍ୱୀକାର କରନ୍ତୁ",
          "decline": "ସମସ୍ତଙ୍କୁ ପ୍ରତ୍ୟାଖ୍ୟାନ କରନ୍ତୁ"
        }
      },
      "poweredBy": "Powered by Seqrite",
      "purposes": {},
      "service": {
        "disableAll": {
          "description": "ସମସ୍ତଙ୍କୁ ପ୍ରତ୍ୟାଖ୍ୟାନ କରନ୍ତୁ",
          "title": "ସମସ୍ତଙ୍କୁ ପ୍ରତ୍ୟାଖ୍ୟାନ କରନ୍ତୁ"
        },
        "optOut": {
          "description": "Opt Out",
          "title": "Opt Out"
        }
      },
      "purposeItem": {
        "service": "Cookie",
        "services": "Cookies"
      },
      "contextualConsent": {
        "description": "To show this content, we need your consent. Please accept the relevant cookies.",
        "acceptOnce": "Accept once",
        "acceptAlways": "Accept always"
      },
      "analytics": {
        "title": "Analytics",
        "description": "ଏହି କୁକିଜ୍ ଆମକୁ ୱେବସାଇଟ୍ ଟ୍ରାଫିକ୍, ଉପଭୋକ୍ତା ଆଚରଣ ଏବଂ ଏନଗେଜମେଣ୍ଟ ପ୍ୟାଟର୍ନ ବିଶ୍ଳେଷଣ କରିବାରେ ସାହାଯ୍ୟ କରେ। ସଂଗୃହୀତ ଅନ୍ତର୍ଦୃଷ୍ଟି ଆମକୁ ବିଷୟବସ୍ତୁକୁ ଅପ୍ଟିମାଇଜ୍ କରିବାକୁ, ବ୍ୟବହାରଯୋଗ୍ୟତା ବୃଦ୍ଧି କରିବାକୁ ଏବଂ ସାମଗ୍ରିକ ସାଇଟ୍ କାର୍ଯ୍ୟଦକ୍ଷତାକୁ ଉନ୍ନତ କରିବାକୁ ଅନୁମତି ଦିଏ।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga_89RWJTCPLZ</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div></div></details>"
      },
      "marketing": {
        "title": "Marketing",
        "description": "ଏହି କୁକିଜ୍ ଆମର ବିଜ୍ଞାପନ ଅଂଶୀଦାରମାନଙ୍କ ଦ୍ୱାରା ବ୍ୟକ୍ତିଗତ ବିଜ୍ଞାପନ ପ୍ରଦାନ କରିବା ଏବଂ ମାର୍କେଟିଂ ଅଭିଯାନର ପ୍ରଭାବ ମାପିବା ପାଇଁ ବ୍ୟବହାର କରାଯାଏ। ଏଗୁଡ଼ିକ ଉପଭୋକ୍ତା ଆଗ୍ରହ ଏବଂ ବ୍ରାଉଜିଂ ଆଚରଣ ଉପରେ ଆଧାରିତ ପ୍ରାସଙ୍ଗିକ ପ୍ରଚାର ପ୍ରଦାନ କରିବାରେ ସାହାଯ୍ୟ କରନ୍ତି।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">6 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_fbp</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Facebook/Meta Pixel</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_gcl_au</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Google Ads</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_fbc</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Facebook/Meta Pixel</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_uetsid</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Microsoft Clarity</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_uetvid</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Microsoft Clarity</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;MUID</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div></div></details>"
      },
      "others": {
        "title": "Others",
        "description": "ଏହି ବର୍ଗରେ ଏପରି କୁକିଜ୍ ଅନ୍ତର୍ଭୁକ୍ତ ଯାହା ପୂର୍ବନିର୍ଦ୍ଧାରିତ ବର୍ଗରେ ଫିଟ୍ ହୁଏ ନାହିଁ କିନ୍ତୁ କିଛି ୱେବସାଇଟ୍ କାର୍ଯ୍ୟକାରିତା କିମ୍ବା ଉନ୍ନତି ପାଇଁ ଆବଶ୍ୟକ ହୋଇପାରେ।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">3 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;user_prefs</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;session_id</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;marketing_id</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      }
    },
    "ta": {
      "acceptAll": "அனைத்தையும் ஏற்கவும்",
      "accept": "ஏற்றுக்கொள்",
      "decline": "அனைத்தையும் நிராகரிக்கவும்",
      "acceptSelected": "தேர்ந்தெடுக்கப்பட்டதை ஏற்கவும்",
      "ok": "அனைத்தையும் ஏற்கவும்",
      "consentNotice": {
        "description": "உங்கள் தனியுரிமையை நாங்கள் மதிக்கிறோம். தளத்தின் அத்தியாவசிய செயல்பாடுகளை இயக்குவதற்கும், சந்தைப்படுத்தல், தனிப்பயனாக்கம் மற்றும் பகுப்பாய்வுகளுக்கும் நாங்கள் குக்கீகளைச் சேமிக்கிறோம். “அனைத்தையும் ஏற்கவும்” என்பதைக் கிளிக் செய்வதன் மூலம், எங்கள் குக்கீகளின் பயன்பாட்டிற்கு நீங்கள் ஒப்புதல் அளிக்கிறீர்கள். உங்கள் அமைப்புகளை நீங்கள் எப்போது வேண்டுமானாலும் மாற்றிக்கொள்ளலாம். குக்கீ கொள்கை.",
        "learnMore": "தனிப்பயனாக்கு",
        "changeDescription": " "
      },
      "save": "ஏற்றுக்கொள்",
      "consentModal": {
        "title": "ஒப்புதல் விருப்பங்களைத் தனிப்பயனாக்குங்கள்",
        "description": "பக்கங்களுக்கு இடையே திறமையாக உலாவவும், உங்கள் விருப்பங்களைச் சேமிக்கவும், பொதுவாக ஒரு வலைத்தளத்தில் உங்கள் அனுபவத்தை மேம்படுத்தவும் நாங்கள் குக்கீகளைப் பயன்படுத்துகிறோம். இருப்பினும், உங்கள் தனியுரிமைக்கான உரிமையை நாங்கள் மதிக்கிறோம், எனவே சில வகையான குக்கீகளை அனுமதிக்காமல் இருக்க நீங்கள் தேர்வு செய்யலாம். மேலும் அறியவும் எங்கள் இயல்புநிலை அமைப்புகளை மாற்றவும் வெவ்வேறு வகை தலைப்புகளில் கிளிக் செய்யவும். சில வகையான குக்கீகளைத் தடுப்பது தளத்தில் உங்கள் அனுபவத்தைப் பாதிக்கக்கூடும் என்பதை நினைவில் கொள்ளவும்.",
        "buttons": {
          "save": "ஏற்றுக்கொள்",
          "acceptAll": "அனைத்தையும் ஏற்கவும்",
          "decline": "அனைத்தையும் நிராகரிக்கவும்"
        }
      },
      "poweredBy": "Powered by Seqrite",
      "purposes": {},
      "service": {
        "disableAll": {
          "description": "அனைத்தையும் நிராகரிக்கவும்",
          "title": "அனைத்தையும் நிராகரிக்கவும்"
        },
        "optOut": {
          "description": "Opt Out",
          "title": "Opt Out"
        }
      },
      "purposeItem": {
        "service": "Cookie",
        "services": "Cookies"
      },
      "contextualConsent": {
        "description": "To show this content, we need your consent. Please accept the relevant cookies.",
        "acceptOnce": "Accept once",
        "acceptAlways": "Accept always"
      },
      "analytics": {
        "title": "Analytics",
        "description": "இந்தக் குக்கீகள் இணையதளப் போக்குவரத்து, பயனர் நடத்தை மற்றும் ஈடுபாட்டு முறைகளைப் பகுப்பாய்வு செய்ய எங்களுக்கு உதவுகின்றன. இதன் மூலம் சேகரிக்கப்படும் தகவல்கள், உள்ளடக்கத்தை மேம்படுத்தவும், பயன்பாட்டுத்தன்மையை அதிகரிக்கவும், தளத்தின் ஒட்டுமொத்த செயல்திறனை மேம்படுத்தவும் எங்களுக்கு உதவுகின்றன.<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga_89RWJTCPLZ</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div></div></details>"
      },
      "marketing": {
        "title": "Marketing",
        "description": "தனிப்பயனாக்கப்பட்ட விளம்பரங்களை வழங்கவும், சந்தைப்படுத்தல் பிரச்சாரங்களின் செயல்திறனை அளவிடவும் எங்கள் விளம்பரக் கூட்டாளர்களால் இந்தக் குக்கீகள் பயன்படுத்தப்படுகின்றன. பயனரின் ஆர்வங்கள் மற்றும் உலாவல் நடத்தை ஆகியவற்றின் அடிப்படையில் பொருத்தமான விளம்பரங்களை வழங்க அவை உதவுகின்றன.<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">6 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_fbp</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Facebook/Meta Pixel</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_gcl_au</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Google Ads</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_fbc</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Facebook/Meta Pixel</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_uetsid</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Microsoft Clarity</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_uetvid</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Microsoft Clarity</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;MUID</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div></div></details>"
      },
      "others": {
        "title": "Others",
        "description": "இந்த வகை, முன்னரே வரையறுக்கப்பட்ட வகைகளில் பொருந்தாத, ஆனால் இணையதளத்தின் சில செயல்பாடுகளுக்கோ அல்லது மேம்பாடுகளுக்கோ தேவைப்படக்கூடிய குக்கீகளை உள்ளடக்கியது.<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">3 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;user_prefs</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;session_id</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;marketing_id</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      }
    },
    "sd": {
      "acceptAll": "سڀ قبول ڪريو",
      "accept": "قبول ڪريو",
      "decline": "سڀ رد ڪريو",
      "acceptSelected": "چونڊيل قبول ڪريو",
      "ok": "سڀ قبول ڪريو",
      "consentNotice": {
        "description": "اسان توهان جي رازداري جو احترام ڪريون ٿا اسان ڪوڪيز کي ذخيرو ڪريون ٿا ته جيئن سائيٽ جي ضروري ڪارڪردگي، انهي سان گڏ مارڪيٽنگ، ذاتي ڪرڻ ۽ تجزياتي کي فعال بڻائي سگهجي. &quot;سڀ قبول ڪريو&quot; تي ڪلڪ ڪندي، توهان ڪوڪيز جي اسان جي استعمال تي رضامند آهيو. توهان ڪنهن به وقت پنهنجون سيٽنگون تبديل ڪري سگهو ٿا. ڪوڪيز پاليسي.",
        "learnMore": "ترتيب ڏيو",
        "changeDescription": " "
      },
      "save": "قبول ڪريو",
      "consentModal": {
        "title": "رضامندي ترجيحن کي ترتيب ڏيو",
        "description": "اسين ڪوڪيز استعمال ڪندا آهيون ته جيئن توهان کي صفحن جي وچ ۾ موثر طريقي سان نيويگيٽ ڪرڻ، توهان جي ترجيحن کي محفوظ ڪرڻ، ۽ عام طور تي ويب سائيٽ جي تجربي کي بهتر بڻائڻ ۾ مدد ملي سگهي. بهرحال، اسان توهان جي رازداري جي حق کي تسليم ڪريون ٿا ۽ تنهن ڪري توهان ڪجهه قسمن جي ڪوڪيز کي اجازت نه ڏيڻ جو انتخاب ڪري سگهو ٿا. وڌيڪ ڄاڻڻ ۽ اسان جي ڊفالٽ سيٽنگون تبديل ڪرڻ لاءِ مختلف ڪيٽيگري هيڊنگ تي ڪلڪ ڪريو. مهرباني ڪري نوٽ ڪريو ته ڪجهه قسمن جي ڪوڪيز کي بلاڪ ڪرڻ سان سائيٽ جي توهان جي تجربي تي اثر پئجي سگهي ٿو.",
        "buttons": {
          "save": "قبول ڪريو",
          "acceptAll": "سڀ قبول ڪريو",
          "decline": "سڀ رد ڪريو"
        }
      },
      "poweredBy": "Powered by Seqrite",
      "purposes": {},
      "service": {
        "disableAll": {
          "description": "سڀ رد ڪريو",
          "title": "سڀ رد ڪريو"
        },
        "optOut": {
          "description": "Opt Out",
          "title": "Opt Out"
        }
      },
      "purposeItem": {
        "service": "Cookie",
        "services": "Cookies"
      },
      "contextualConsent": {
        "description": "To show this content, we need your consent. Please accept the relevant cookies.",
        "acceptOnce": "Accept once",
        "acceptAlways": "Accept always"
      },
      "analytics": {
        "title": "Analytics",
        "description": "هي ڪوڪيز اسان کي ويب سائيٽ ٽرئفڪ، صارف جي رويي، ۽ مصروفيت جي نمونن جو تجزيو ڪرڻ ۾ مدد ڪن ٿيون. گڏ ڪيل بصيرت اسان کي مواد کي بهتر ڪرڻ، استعمال جي قابليت کي وڌائڻ، ۽ مجموعي سائيٽ جي ڪارڪردگي کي بهتر بڻائڻ جي اجازت ڏين ٿيون.<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga_89RWJTCPLZ</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div></div></details>"
      },
      "marketing": {
        "title": "Marketing",
        "description": "اهي ڪوڪيز اسان جي اشتهارن جي ڀائيوارن پاران ذاتي اشتهارن کي پهچائڻ ۽ مارڪيٽنگ مهم جي اثرائتي کي ماپڻ لاءِ استعمال ڪيون وينديون آهن. اهي صارف جي دلچسپين ۽ برائوزنگ رويي جي بنياد تي لاڳاپيل پروموشن مهيا ڪرڻ ۾ مدد ڪن ٿيون.<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">6 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_fbp</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Facebook/Meta Pixel</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_gcl_au</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Google Ads</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_fbc</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Facebook/Meta Pixel</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_uetsid</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Microsoft Clarity</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_uetvid</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Microsoft Clarity</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;MUID</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div></div></details>"
      },
      "others": {
        "title": "Others",
        "description": "هن ڪيٽيگري ۾ اهڙيون ڪوڪيز شامل آهن جيڪي اڳواٽ بيان ڪيل ڪيٽيگريز ۾ نه ٿيون اچن پر ڪجهه ويب سائيٽ جي ڪارڪردگي يا بهتري لاءِ ضروري ٿي سگهن ٿيون.<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">3 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;user_prefs</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;session_id</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;marketing_id</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      }
    },
    "bn": {
      "acceptAll": "সব গ্রহণ করুন",
      "accept": "গ্রহণ করুন",
      "decline": "সব প্রত্যাখ্যান করুন",
      "acceptSelected": "নির্বাচিত গ্রহণ করুন",
      "ok": "সব গ্রহণ করুন",
      "consentNotice": {
        "description": "আমরা আপনার গোপনীয়তাকে সম্মান করি। সাইটের অপরিহার্য কার্যকারিতা, সেইসাথে মার্কেটিং, পার্সোনালাইজেশন এবং অ্যানালিটিক্স সক্ষম করার জন্য আমরা কুকি সংরক্ষণ করি। “সব গ্রহণ করুন”-এ ক্লিক করার মাধ্যমে, আপনি আমাদের কুকি ব্যবহারে সম্মতি দিচ্ছেন। আপনি যেকোনো সময় আপনার সেটিংস পরিবর্তন করতে পারেন। কুকি নীতি।",
        "learnMore": "কাস্টমাইজ করুন",
        "changeDescription": " "
      },
      "save": "গ্রহণ করুন",
      "consentModal": {
        "title": "সম্মতি পছন্দগুলি কাস্টমাইজ করুন",
        "description": "আমরা আপনাকে পৃষ্ঠাগুলির মধ্যে দক্ষতার সাথে চলাচল করতে সাহায্য করতে, আপনার পছন্দগুলি সংরক্ষণ করতে এবং সাধারণভাবে একটি ওয়েবসাইটে আপনার অভিজ্ঞতা উন্নত করতে কুকি ব্যবহার করি। তবে, আমরা আপনার গোপনীয়তার অধিকারকে সম্মান করি এবং তাই আপনি কিছু ধরণের কুকি অনুমোদন না করার সিদ্ধান্ত নিতে পারেন। আরও জানতে এবং আমাদের ডিফল্ট সেটিংস পরিবর্তন করতে বিভিন্ন বিভাগের শিরোনামে ক্লিক করুন। অনুগ্রহ করে মনে রাখবেন যে নির্দিষ্ট ধরণের কুকি ব্লক করলে সাইটটিতে আপনার অভিজ্ঞতা প্রভাবিত হতে পারে।",
        "buttons": {
          "save": "গ্রহণ করুন",
          "acceptAll": "সব গ্রহণ করুন",
          "decline": "সব প্রত্যাখ্যান করুন"
        }
      },
      "poweredBy": "Powered by Seqrite",
      "purposes": {},
      "service": {
        "disableAll": {
          "description": "সব প্রত্যাখ্যান করুন",
          "title": "সব প্রত্যাখ্যান করুন"
        },
        "optOut": {
          "description": "Opt Out",
          "title": "Opt Out"
        }
      },
      "purposeItem": {
        "service": "Cookie",
        "services": "Cookies"
      },
      "contextualConsent": {
        "description": "To show this content, we need your consent. Please accept the relevant cookies.",
        "acceptOnce": "Accept once",
        "acceptAlways": "Accept always"
      },
      "analytics": {
        "title": "Analytics",
        "description": "এই কুকিগুলো আমাদের ওয়েবসাইটের ট্র্যাফিক, ব্যবহারকারীর আচরণ এবং সম্পৃক্ততার ধরণ বিশ্লেষণ করতে সাহায্য করে। সংগৃহীত তথ্য আমাদের কনটেন্ট অপ্টিমাইজ করতে, ব্যবহারযোগ্যতা বাড়াতে এবং সাইটের সার্বিক পারফরম্যান্স উন্নত করতে সহায়তা করে।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga_89RWJTCPLZ</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div></div></details>"
      },
      "marketing": {
        "title": "Marketing",
        "description": "এই কুকিগুলো আমাদের বিজ্ঞাপন অংশীদাররা ব্যক্তিগতকৃত বিজ্ঞাপন সরবরাহ করতে এবং বিপণন প্রচারণার কার্যকারিতা পরিমাপ করতে ব্যবহার করে। এগুলো ব্যবহারকারীর আগ্রহ এবং ব্রাউজিং আচরণের উপর ভিত্তি করে প্রাসঙ্গিক প্রচারণা প্রদানে সহায়তা করে।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">6 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_fbp</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Facebook/Meta Pixel</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_gcl_au</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Google Ads</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_fbc</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Facebook/Meta Pixel</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_uetsid</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Microsoft Clarity</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_uetvid</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Microsoft Clarity</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;MUID</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div></div></details>"
      },
      "others": {
        "title": "Others",
        "description": "এই বিভাগে এমন কুকিগুলো অন্তর্ভুক্ত রয়েছে যা পূর্বনির্ধারিত বিভাগগুলোর অন্তর্ভুক্ত নয়, কিন্তু ওয়েবসাইটের নির্দিষ্ট কার্যকারিতা বা উন্নতির জন্য প্রয়োজনীয় হতে পারে।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">3 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;user_prefs</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;session_id</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;marketing_id</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      }
    },
    "te": {
      "acceptAll": "అన్నింటినీ అంగీకరించండి",
      "accept": "అంగీకరించు",
      "decline": "అన్నింటినీ తిరస్కరించండి",
      "acceptSelected": "ఎంచుకున్న వాటిని అంగీకరించండి",
      "ok": "అన్నింటినీ అంగీకరించండి",
      "consentNotice": {
        "description": "మేము మీ గోప్యతను గౌరవిస్తాము. సైట్ యొక్క ముఖ్యమైన కార్యాచరణను, అలాగే మార్కెటింగ్, వ్యక్తిగతీకరణ మరియు విశ్లేషణలను ప్రారంభించడానికి మేము కుకీలను నిల్వ చేస్తాము. “అన్నింటినీ అంగీకరించు”పై క్లిక్ చేయడం ద్వారా, మీరు మా కుకీల వినియోగానికి సమ్మతిస్తున్నారు. మీరు మీ సెట్టింగ్‌లను ఎప్పుడైనా మార్చుకోవచ్చు. కుకీ విధానం.",
        "learnMore": "అనుకూలీకరించండి",
        "changeDescription": " "
      },
      "save": "అంగీకరించు",
      "consentModal": {
        "title": "సమ్మతి ప్రాధాన్యతలను అనుకూలీకరించండి",
        "description": "పేజీల మధ్య సమర్థవంతంగా నావిగేట్ చేయడానికి, మీ ప్రాధాన్యతలను నిల్వ చేయడానికి, మరియు సాధారణంగా వెబ్‌సైట్‌తో మీ అనుభవాన్ని మెరుగుపరచడానికి మేము కుకీలను ఉపయోగిస్తాము. అయితే, మేము మీ గోప్యతా హక్కును గుర్తిస్తాము, కాబట్టి మీరు కొన్ని రకాల కుకీలను అనుమతించకూడదని ఎంచుకోవచ్చు. మరింత తెలుసుకోవడానికి మరియు మా డిఫాల్ట్ సెట్టింగ్‌లను మార్చడానికి వివిధ వర్గాల శీర్షికలపై క్లిక్ చేయండి. దయచేసి గమనించండి, కొన్ని రకాల కుకీలను బ్లాక్ చేయడం వలన సైట్‌తో మీ అనుభవం ప్రభావితం కావచ్చు.",
        "buttons": {
          "save": "అంగీకరించు",
          "acceptAll": "అన్నింటినీ అంగీకరించండి",
          "decline": "అన్నింటినీ తిరస్కరించండి"
        }
      },
      "poweredBy": "Powered by Seqrite",
      "purposes": {},
      "service": {
        "disableAll": {
          "description": "అన్నింటినీ తిరస్కరించండి",
          "title": "అన్నింటినీ తిరస్కరించండి"
        },
        "optOut": {
          "description": "Opt Out",
          "title": "Opt Out"
        }
      },
      "purposeItem": {
        "service": "Cookie",
        "services": "Cookies"
      },
      "contextualConsent": {
        "description": "To show this content, we need your consent. Please accept the relevant cookies.",
        "acceptOnce": "Accept once",
        "acceptAlways": "Accept always"
      },
      "analytics": {
        "title": "Analytics",
        "description": "ఈ కుకీలు వెబ్‌సైట్ ట్రాఫిక్, వినియోగదారు ప్రవర్తన మరియు ఎంగేజ్‌మెంట్ ప్యాటర్న్‌లను విశ్లేషించడానికి మాకు సహాయపడతాయి. సేకరించిన అంతర్దృష్టులు కంటెంట్‌ను ఆప్టిమైజ్ చేయడానికి, వినియోగ సౌలభ్యాన్ని మెరుగుపరచడానికి మరియు మొత్తం సైట్ పనితీరును మెరుగుపరచడానికి మాకు వీలు కల్పిస్తాయి.<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga_89RWJTCPLZ</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div></div></details>"
      },
      "marketing": {
        "title": "Marketing",
        "description": "మా ప్రకటనల భాగస్వాములు వ్యక్తిగతీకరించిన ప్రకటనలను అందించడానికి మరియు మార్కెటింగ్ ప్రచారాల ప్రభావాన్ని కొలవడానికి ఈ కుకీలను ఉపయోగిస్తారు. ఇవి వినియోగదారుల ఆసక్తులు మరియు బ్రౌజింగ్ ప్రవర్తన ఆధారంగా సంబంధిత ప్రమోషన్‌లను అందించడంలో సహాయపడతాయి.<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">6 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_fbp</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Facebook/Meta Pixel</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_gcl_au</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Google Ads</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_fbc</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Facebook/Meta Pixel</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_uetsid</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Microsoft Clarity</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_uetvid</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Microsoft Clarity</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;MUID</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div></div></details>"
      },
      "others": {
        "title": "Others",
        "description": "ఈ వర్గంలో ముందుగా నిర్వచించిన వర్గాలలోకి సరిపోని కుకీలు ఉంటాయి, కానీ అవి కొన్ని వెబ్‌సైట్ కార్యాచరణలకు లేదా మెరుగుదలలకు అవసరం కావచ్చు.<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">3 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;user_prefs</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;session_id</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;marketing_id</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      }
    },
    "gu": {
      "acceptAll": "બધા સ્વીકારો",
      "accept": "સ્વીકારો",
      "decline": "બધાને નકારો",
      "acceptSelected": "પસંદ કરેલ સ્વીકારો",
      "ok": "બધા સ્વીકારો",
      "consentNotice": {
        "description": "અમે તમારી ગોપનીયતાનો આદર કરીએ છીએ. અમે સાઇટની આવશ્યક કાર્યક્ષમતા, તેમજ માર્કેટિંગ, વૈયક્તિકરણ અને વિશ્લેષણને સક્ષમ કરવા માટે કૂકીઝનો સંગ્રહ કરીએ છીએ. &quot;બધા સ્વીકારો&quot; પર ક્લિક કરીને, તમે કૂકીઝના અમારા ઉપયોગ માટે સંમતિ આપો છો. તમે કોઈપણ સમયે તમારી સેટિંગ્સ બદલી શકો છો. કૂકી નીતિ.",
        "learnMore": "કસ્ટમાઇઝ કરો",
        "changeDescription": " "
      },
      "save": "સ્વીકારો",
      "consentModal": {
        "title": "સંમતિ પસંદગીઓને કસ્ટમાઇઝ કરો",
        "description": "અમે કૂકીઝનો ઉપયોગ તમને પૃષ્ઠો વચ્ચે કાર્યક્ષમ રીતે નેવિગેટ કરવામાં, તમારી પસંદગીઓને સંગ્રહિત કરવામાં અને સામાન્ય રીતે વેબસાઇટના તમારા અનુભવને સુધારવામાં મદદ કરવા માટે કરીએ છીએ. જો કે, અમે તમારા ગોપનીયતાના અધિકારને સ્વીકારીએ છીએ અને તેથી તમે અમુક પ્રકારની કૂકીઝને મંજૂરી ન આપવાનું પસંદ કરી શકો છો. વધુ જાણવા અને અમારી ડિફોલ્ટ સેટિંગ્સ બદલવા માટે વિવિધ શ્રેણીના શીર્ષકો પર ક્લિક કરો. કૃપા કરીને નોંધ લો કે ચોક્કસ પ્રકારની કૂકીઝને અવરોધિત કરવાથી સાઇટના તમારા અનુભવને અસર થઈ શકે છે.",
        "buttons": {
          "save": "સ્વીકારો",
          "acceptAll": "બધા સ્વીકારો",
          "decline": "બધાને નકારો"
        }
      },
      "poweredBy": "Powered by Seqrite",
      "purposes": {},
      "service": {
        "disableAll": {
          "description": "બધાને નકારો",
          "title": "બધાને નકારો"
        },
        "optOut": {
          "description": "Opt Out",
          "title": "Opt Out"
        }
      },
      "purposeItem": {
        "service": "Cookie",
        "services": "Cookies"
      },
      "contextualConsent": {
        "description": "To show this content, we need your consent. Please accept the relevant cookies.",
        "acceptOnce": "Accept once",
        "acceptAlways": "Accept always"
      },
      "analytics": {
        "title": "Analytics",
        "description": "આ કૂકીઝ અમને વેબસાઇટ ટ્રાફિક, વપરાશકર્તા વર્તણૂક અને જોડાણ પેટર્નનું વિશ્લેષણ કરવામાં મદદ કરે છે. એકત્રિત કરેલી આંતરદૃષ્ટિ અમને સામગ્રીને ઑપ્ટિમાઇઝ કરવા, ઉપયોગીતા વધારવા અને એકંદર સાઇટ પ્રદર્શનને સુધારવાની મંજૂરી આપે છે.<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga_89RWJTCPLZ</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div></div></details>"
      },
      "marketing": {
        "title": "Marketing",
        "description": "આ કૂકીઝનો ઉપયોગ અમારા જાહેરાત ભાગીદારો દ્વારા વ્યક્તિગત જાહેરાતો પહોંચાડવા અને માર્કેટિંગ ઝુંબેશની અસરકારકતા માપવા માટે કરવામાં આવે છે. તે વપરાશકર્તાની રુચિઓ અને બ્રાઉઝિંગ વર્તણૂકના આધારે સંબંધિત પ્રમોશન પ્રદાન કરવામાં મદદ કરે છે.<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">6 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_fbp</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Facebook/Meta Pixel</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_gcl_au</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Google Ads</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_fbc</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Facebook/Meta Pixel</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_uetsid</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Microsoft Clarity</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_uetvid</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Microsoft Clarity</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;MUID</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div></div></details>"
      },
      "others": {
        "title": "Others",
        "description": "આ શ્રેણીમાં એવી કૂકીઝનો સમાવેશ થાય છે જે પૂર્વવ્યાખ્યાયિત શ્રેણીઓમાં બંધબેસતી નથી પરંતુ ચોક્કસ વેબસાઇટ કાર્યક્ષમતા અથવા સુધારાઓ માટે જરૂરી હોઈ શકે છે.<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">3 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;user_prefs</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;session_id</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;marketing_id</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      }
    },
    "kn": {
      "acceptAll": "ಎಲ್ಲವನ್ನೂ ಸ್ವೀಕರಿಸಿ",
      "accept": "ಸ್ವೀಕರಿಸಿ",
      "decline": "ಎಲ್ಲವನ್ನೂ ತಿರಸ್ಕರಿಸಿ",
      "acceptSelected": "ಆಯ್ಕೆ ಮಾಡಿರುವುದನ್ನು ಸ್ವೀಕರಿಸಿ",
      "ok": "ಎಲ್ಲವನ್ನೂ ಸ್ವೀಕರಿಸಿ",
      "consentNotice": {
        "description": "ನಿಮ್ಮ ಗೌಪ್ಯತೆಯನ್ನು ನಾವು ಗೌರವಿಸುತ್ತೇವೆ ಅಗತ್ಯ ಸೈಟ್ ಕಾರ್ಯವನ್ನು ಸಕ್ರಿಯಗೊಳಿಸಲು ನಾವು ಕುಕೀಗಳನ್ನು ಸಂಗ್ರಹಿಸುತ್ತೇವೆ, ಜೊತೆಗೆ ಮಾರ್ಕೆಟಿಂಗ್, ವೈಯಕ್ತೀಕರಣ ಮತ್ತು ವಿಶ್ಲೇಷಣೆಯನ್ನು ಸಕ್ರಿಯಗೊಳಿಸುತ್ತೇವೆ. &quot;ಎಲ್ಲವನ್ನೂ ಸ್ವೀಕರಿಸಿ&quot; ಕ್ಲಿಕ್ ಮಾಡುವ ಮೂಲಕ, ನೀವು ನಮ್ಮ ಕುಕೀಗಳ ಬಳಕೆಗೆ ಸಮ್ಮತಿಸುತ್ತೀರಿ. ನೀವು ಯಾವುದೇ ಸಮಯದಲ್ಲಿ ನಿಮ್ಮ ಸೆಟ್ಟಿಂಗ್‌ಗಳನ್ನು ಬದಲಾಯಿಸಬಹುದು. ಕುಕೀ ನೀತಿ.",
        "learnMore": "ಕಸ್ಟಮೈಸ್ ಮಾಡಿ",
        "changeDescription": " "
      },
      "save": "ಸ್ವೀಕರಿಸಿ",
      "consentModal": {
        "title": "ಸಮ್ಮತಿ ಆದ್ಯತೆಗಳನ್ನು ಕಸ್ಟಮೈಸ್ ಮಾಡಿ",
        "description": "ಪುಟಗಳ ನಡುವೆ ಪರಿಣಾಮಕಾರಿಯಾಗಿ ನ್ಯಾವಿಗೇಟ್ ಮಾಡಲು, ನಿಮ್ಮ ಆದ್ಯತೆಗಳನ್ನು ಸಂಗ್ರಹಿಸಲು ಮತ್ತು ಸಾಮಾನ್ಯವಾಗಿ ನಿಮ್ಮ ವೆಬ್‌ಸೈಟ್ ಅನುಭವವನ್ನು ಸುಧಾರಿಸಲು ನಾವು ಕುಕೀಗಳನ್ನು ಬಳಸುತ್ತೇವೆ. ಆದಾಗ್ಯೂ, ನಿಮ್ಮ ಗೌಪ್ಯತೆಯ ಹಕ್ಕನ್ನು ನಾವು ಒಪ್ಪಿಕೊಳ್ಳುತ್ತೇವೆ ಮತ್ತು ಆದ್ದರಿಂದ ನೀವು ಕೆಲವು ರೀತಿಯ ಕುಕೀಗಳನ್ನು ಅನುಮತಿಸದಿರಲು ಆಯ್ಕೆ ಮಾಡಬಹುದು. ಇನ್ನಷ್ಟು ತಿಳಿದುಕೊಳ್ಳಲು ಮತ್ತು ನಮ್ಮ ಡೀಫಾಲ್ಟ್ ಸೆಟ್ಟಿಂಗ್‌ಗಳನ್ನು ಬದಲಾಯಿಸಲು ವಿಭಿನ್ನ ವರ್ಗದ ಶೀರ್ಷಿಕೆಗಳ ಮೇಲೆ ಕ್ಲಿಕ್ ಮಾಡಿ. ಕೆಲವು ರೀತಿಯ ಕುಕೀಗಳನ್ನು ನಿರ್ಬಂಧಿಸುವುದರಿಂದ ಸೈಟ್‌ನ ನಿಮ್ಮ ಅನುಭವದ ಮೇಲೆ ಪರಿಣಾಮ ಬೀರಬಹುದು ಎಂಬುದನ್ನು ದಯವಿಟ್ಟು ಗಮನಿಸಿ.",
        "buttons": {
          "save": "ಸ್ವೀಕರಿಸಿ",
          "acceptAll": "ಎಲ್ಲವನ್ನೂ ಸ್ವೀಕರಿಸಿ",
          "decline": "ಎಲ್ಲವನ್ನೂ ತಿರಸ್ಕರಿಸಿ"
        }
      },
      "poweredBy": "Powered by Seqrite",
      "purposes": {},
      "service": {
        "disableAll": {
          "description": "ಎಲ್ಲವನ್ನೂ ತಿರಸ್ಕರಿಸಿ",
          "title": "ಎಲ್ಲವನ್ನೂ ತಿರಸ್ಕರಿಸಿ"
        },
        "optOut": {
          "description": "Opt Out",
          "title": "Opt Out"
        }
      },
      "purposeItem": {
        "service": "Cookie",
        "services": "Cookies"
      },
      "contextualConsent": {
        "description": "To show this content, we need your consent. Please accept the relevant cookies.",
        "acceptOnce": "Accept once",
        "acceptAlways": "Accept always"
      },
      "analytics": {
        "title": "Analytics",
        "description": "ಈ ಕುಕೀಗಳು ವೆಬ್‌ಸೈಟ್ ಟ್ರಾಫಿಕ್, ಬಳಕೆದಾರರ ನಡವಳಿಕೆ ಮತ್ತು ತೊಡಗಿಸಿಕೊಳ್ಳುವಿಕೆಯ ಮಾದರಿಗಳನ್ನು ವಿಶ್ಲೇಷಿಸಲು ನಮಗೆ ಸಹಾಯ ಮಾಡುತ್ತವೆ. ಸಂಗ್ರಹಿಸಿದ ಒಳನೋಟಗಳು ವಿಷಯವನ್ನು ಅತ್ಯುತ್ತಮವಾಗಿಸಲು, ಉಪಯುಕ್ತತೆಯನ್ನು ಹೆಚ್ಚಿಸಲು ಮತ್ತು ಒಟ್ಟಾರೆ ಸೈಟ್ ಕಾರ್ಯಕ್ಷಮತೆಯನ್ನು ಸುಧಾರಿಸಲು ನಮಗೆ ಅವಕಾಶ ಮಾಡಿಕೊಡುತ್ತವೆ.<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga_89RWJTCPLZ</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div></div></details>"
      },
      "marketing": {
        "title": "Marketing",
        "description": "ಈ ಕುಕೀಗಳನ್ನು ನಮ್ಮ ಜಾಹೀರಾತು ಪಾಲುದಾರರು ವೈಯಕ್ತಿಕಗೊಳಿಸಿದ ಜಾಹೀರಾತುಗಳನ್ನು ನೀಡಲು ಮತ್ತು ಮಾರ್ಕೆಟಿಂಗ್ ಅಭಿಯಾನಗಳ ಪರಿಣಾಮಕಾರಿತ್ವವನ್ನು ಅಳೆಯಲು ಬಳಸುತ್ತಾರೆ. ಬಳಕೆದಾರರ ಆಸಕ್ತಿಗಳು ಮತ್ತು ಬ್ರೌಸಿಂಗ್ ನಡವಳಿಕೆಯ ಆಧಾರದ ಮೇಲೆ ಸಂಬಂಧಿತ ಪ್ರಚಾರಗಳನ್ನು ಒದಗಿಸಲು ಅವು ಸಹಾಯ ಮಾಡುತ್ತವೆ.<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">6 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_fbp</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Facebook/Meta Pixel</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_gcl_au</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Google Ads</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_fbc</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Facebook/Meta Pixel</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_uetsid</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Microsoft Clarity</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_uetvid</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Microsoft Clarity</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;MUID</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div></div></details>"
      },
      "others": {
        "title": "Others",
        "description": "ಈ ವರ್ಗವು ಪೂರ್ವನಿರ್ಧರಿತ ವರ್ಗಗಳಿಗೆ ಹೊಂದಿಕೆಯಾಗದ ಕುಕೀಗಳನ್ನು ಒಳಗೊಂಡಿದೆ ಆದರೆ ಕೆಲವು ವೆಬ್‌ಸೈಟ್ ಕಾರ್ಯಚಟುವಟಿಕೆಗಳು ಅಥವಾ ಸುಧಾರಣೆಗಳಿಗೆ ಅಗತ್ಯವಾಗಬಹುದು.<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">3 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;user_prefs</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;session_id</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;marketing_id</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      }
    },
    "pa": {
      "acceptAll": "ਸਭ ਸਵੀਕਾਰ ਕਰੋ",
      "accept": "ਸਵੀਕਾਰ ਕਰੋ",
      "decline": "ਸਭ ਨੂੰ ਅਸਵੀਕਾਰ ਕਰੋ",
      "acceptSelected": "ਚੁਣੇ ਹੋਏ ਨੂੰ ਸਵੀਕਾਰ ਕਰੋ",
      "ok": "ਸਭ ਸਵੀਕਾਰ ਕਰੋ",
      "consentNotice": {
        "description": "ਅਸੀਂ ਤੁਹਾਡੀ ਗੋਪਨੀਯਤਾ ਦਾ ਸਤਿਕਾਰ ਕਰਦੇ ਹਾਂ ਅਸੀਂ ਜ਼ਰੂਰੀ ਸਾਈਟ ਕਾਰਜਸ਼ੀਲਤਾ ਦੇ ਨਾਲ-ਨਾਲ ਮਾਰਕੀਟਿੰਗ, ਵਿਅਕਤੀਗਤਕਰਨ ਅਤੇ ਵਿਸ਼ਲੇਸ਼ਣ ਨੂੰ ਸਮਰੱਥ ਬਣਾਉਣ ਲਈ ਕੂਕੀਜ਼ ਸਟੋਰ ਕਰਦੇ ਹਾਂ। &quot;ਸਭ ਸਵੀਕਾਰ ਕਰੋ&quot; &#39;ਤੇ ਕਲਿੱਕ ਕਰਕੇ, ਤੁਸੀਂ ਕੂਕੀਜ਼ ਦੀ ਸਾਡੀ ਵਰਤੋਂ ਲਈ ਸਹਿਮਤੀ ਦਿੰਦੇ ਹੋ। ਤੁਸੀਂ ਕਿਸੇ ਵੀ ਸਮੇਂ ਆਪਣੀਆਂ ਸੈਟਿੰਗਾਂ ਬਦਲ ਸਕਦੇ ਹੋ। ਕੂਕੀ ਨੀਤੀ।",
        "learnMore": "ਅਨੁਕੂਲਿਤ ਕਰੋ",
        "changeDescription": " "
      },
      "save": "ਸਵੀਕਾਰ ਕਰੋ",
      "consentModal": {
        "title": "ਸਹਿਮਤੀ ਤਰਜੀਹਾਂ ਨੂੰ ਅਨੁਕੂਲਿਤ ਕਰੋ",
        "description": "ਅਸੀਂ ਕੂਕੀਜ਼ ਦੀ ਵਰਤੋਂ ਪੰਨਿਆਂ ਵਿਚਕਾਰ ਕੁਸ਼ਲਤਾ ਨਾਲ ਨੈਵੀਗੇਟ ਕਰਨ, ਤੁਹਾਡੀਆਂ ਤਰਜੀਹਾਂ ਨੂੰ ਸਟੋਰ ਕਰਨ ਅਤੇ ਆਮ ਤੌਰ &#39;ਤੇ ਕਿਸੇ ਵੈੱਬਸਾਈਟ ਦੇ ਤੁਹਾਡੇ ਅਨੁਭਵ ਨੂੰ ਬਿਹਤਰ ਬਣਾਉਣ ਵਿੱਚ ਤੁਹਾਡੀ ਮਦਦ ਕਰਨ ਲਈ ਕਰਦੇ ਹਾਂ। ਹਾਲਾਂਕਿ, ਅਸੀਂ ਤੁਹਾਡੇ ਗੋਪਨੀਯਤਾ ਦੇ ਅਧਿਕਾਰ ਨੂੰ ਸਵੀਕਾਰ ਕਰਦੇ ਹਾਂ ਅਤੇ ਇਸ ਲਈ ਤੁਸੀਂ ਕੁਝ ਕਿਸਮਾਂ ਦੀਆਂ ਕੂਕੀਜ਼ ਨੂੰ ਆਗਿਆ ਨਾ ਦੇਣਾ ਚੁਣ ਸਕਦੇ ਹੋ। ਹੋਰ ਜਾਣਨ ਅਤੇ ਸਾਡੀਆਂ ਡਿਫੌਲਟ ਸੈਟਿੰਗਾਂ ਨੂੰ ਬਦਲਣ ਲਈ ਵੱਖ-ਵੱਖ ਸ਼੍ਰੇਣੀਆਂ ਦੇ ਸਿਰਲੇਖਾਂ &#39;ਤੇ ਕਲਿੱਕ ਕਰੋ। ਕਿਰਪਾ ਕਰਕੇ ਧਿਆਨ ਦਿਓ ਕਿ ਕੁਝ ਕਿਸਮਾਂ ਦੀਆਂ ਕੂਕੀਜ਼ ਨੂੰ ਬਲੌਕ ਕਰਨ ਨਾਲ ਸਾਈਟ ਦੇ ਤੁਹਾਡੇ ਅਨੁਭਵ &#39;ਤੇ ਅਸਰ ਪੈ ਸਕਦਾ ਹੈ।",
        "buttons": {
          "save": "ਸਵੀਕਾਰ ਕਰੋ",
          "acceptAll": "ਸਭ ਸਵੀਕਾਰ ਕਰੋ",
          "decline": "ਸਭ ਨੂੰ ਅਸਵੀਕਾਰ ਕਰੋ"
        }
      },
      "poweredBy": "Powered by Seqrite",
      "purposes": {},
      "service": {
        "disableAll": {
          "description": "ਸਭ ਨੂੰ ਅਸਵੀਕਾਰ ਕਰੋ",
          "title": "ਸਭ ਨੂੰ ਅਸਵੀਕਾਰ ਕਰੋ"
        },
        "optOut": {
          "description": "Opt Out",
          "title": "Opt Out"
        }
      },
      "purposeItem": {
        "service": "Cookie",
        "services": "Cookies"
      },
      "contextualConsent": {
        "description": "To show this content, we need your consent. Please accept the relevant cookies.",
        "acceptOnce": "Accept once",
        "acceptAlways": "Accept always"
      },
      "analytics": {
        "title": "Analytics",
        "description": "ਇਹ ਕੂਕੀਜ਼ ਸਾਨੂੰ ਵੈੱਬਸਾਈਟ ਟ੍ਰੈਫਿਕ, ਉਪਭੋਗਤਾ ਵਿਵਹਾਰ, ਅਤੇ ਸ਼ਮੂਲੀਅਤ ਪੈਟਰਨਾਂ ਦਾ ਵਿਸ਼ਲੇਸ਼ਣ ਕਰਨ ਵਿੱਚ ਮਦਦ ਕਰਦੀਆਂ ਹਨ। ਇਕੱਠੀ ਕੀਤੀ ਗਈ ਸੂਝ ਸਾਨੂੰ ਸਮੱਗਰੀ ਨੂੰ ਅਨੁਕੂਲ ਬਣਾਉਣ, ਵਰਤੋਂਯੋਗਤਾ ਵਧਾਉਣ ਅਤੇ ਸਮੁੱਚੀ ਸਾਈਟ ਪ੍ਰਦਰਸ਼ਨ ਨੂੰ ਬਿਹਤਰ ਬਣਾਉਣ ਦੀ ਆਗਿਆ ਦਿੰਦੀ ਹੈ।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga_89RWJTCPLZ</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div></div></details>"
      },
      "marketing": {
        "title": "Marketing",
        "description": "ਇਹਨਾਂ ਕੂਕੀਜ਼ ਦੀ ਵਰਤੋਂ ਸਾਡੇ ਵਿਗਿਆਪਨ ਭਾਈਵਾਲਾਂ ਦੁਆਰਾ ਵਿਅਕਤੀਗਤ ਇਸ਼ਤਿਹਾਰ ਪ੍ਰਦਾਨ ਕਰਨ ਅਤੇ ਮਾਰਕੀਟਿੰਗ ਮੁਹਿੰਮਾਂ ਦੀ ਪ੍ਰਭਾਵਸ਼ੀਲਤਾ ਨੂੰ ਮਾਪਣ ਲਈ ਕੀਤੀ ਜਾਂਦੀ ਹੈ। ਇਹ ਉਪਭੋਗਤਾ ਦੀਆਂ ਰੁਚੀਆਂ ਅਤੇ ਬ੍ਰਾਊਜ਼ਿੰਗ ਵਿਵਹਾਰ ਦੇ ਆਧਾਰ &#39;ਤੇ ਸੰਬੰਧਿਤ ਪ੍ਰਚਾਰ ਪ੍ਰਦਾਨ ਕਰਨ ਵਿੱਚ ਮਦਦ ਕਰਦੇ ਹਨ।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">6 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_fbp</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Facebook/Meta Pixel</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_gcl_au</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Google Ads</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_fbc</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Facebook/Meta Pixel</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_uetsid</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Microsoft Clarity</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_uetvid</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Microsoft Clarity</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;MUID</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div></div></details>"
      },
      "others": {
        "title": "Others",
        "description": "ਇਸ ਸ਼੍ਰੇਣੀ ਵਿੱਚ ਉਹ ਕੂਕੀਜ਼ ਸ਼ਾਮਲ ਹਨ ਜੋ ਪਹਿਲਾਂ ਤੋਂ ਨਿਰਧਾਰਤ ਸ਼੍ਰੇਣੀਆਂ ਵਿੱਚ ਨਹੀਂ ਫਿੱਟ ਹੁੰਦੀਆਂ ਪਰ ਕੁਝ ਵੈੱਬਸਾਈਟ ਕਾਰਜਕੁਸ਼ਲਤਾਵਾਂ ਜਾਂ ਸੁਧਾਰਾਂ ਲਈ ਜ਼ਰੂਰੀ ਹੋ ਸਕਦੀਆਂ ਹਨ।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">3 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;user_prefs</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;session_id</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;marketing_id</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      }
    },
    "ne": {
      "acceptAll": "सबै स्वीकार गर्नुहोस्",
      "accept": "स्वीकार गर्नुहोस्",
      "decline": "सबै अस्वीकार गर्नुहोस्",
      "acceptSelected": "चयन गरिएको स्वीकार गर्नुहोस्",
      "ok": "सबै स्वीकार गर्नुहोस्",
      "consentNotice": {
        "description": "हामी तपाईंको गोपनीयताको सम्मान गर्छौं। हामी आवश्यक साइट कार्यक्षमता, साथै मार्केटिंग, निजीकरण र विश्लेषण सक्षम गर्न कुकीहरू भण्डारण गर्छौं। &quot;सबै स्वीकार गर्नुहोस्&quot; मा क्लिक गरेर, तपाईं कुकीहरूको हाम्रो प्रयोगमा सहमत हुनुहुन्छ। तपाईं कुनै पनि समयमा आफ्नो सेटिङहरू परिवर्तन गर्न सक्नुहुन्छ। कुकी नीति।",
        "learnMore": "अनुकूलित गर्नुहोस्",
        "changeDescription": " "
      },
      "save": "स्वीकार गर्नुहोस्",
      "consentModal": {
        "title": "सहमति प्राथमिकताहरू अनुकूलित गर्नुहोस्",
        "description": "हामी तपाईंलाई पृष्ठहरू बीच कुशलतापूर्वक नेभिगेट गर्न, तपाईंको प्राथमिकताहरू भण्डारण गर्न र सामान्यतया वेबसाइटको तपाईंको अनुभव सुधार गर्न मद्दत गर्न कुकीहरू प्रयोग गर्छौं। यद्यपि, हामी तपाईंको गोपनीयताको अधिकारलाई स्वीकार गर्छौं र त्यसैले तपाईं केही प्रकारका कुकीहरूलाई अनुमति नदिने छनौट गर्न सक्नुहुन्छ। थप जान्न र हाम्रो पूर्वनिर्धारित सेटिङहरू परिवर्तन गर्न विभिन्न कोटी शीर्षकहरूमा क्लिक गर्नुहोस्। कृपया ध्यान दिनुहोस् कि निश्चित प्रकारका कुकीहरू ब्लक गर्नाले साइटको तपाईंको अनुभवलाई असर गर्न सक्छ।",
        "buttons": {
          "save": "स्वीकार गर्नुहोस्",
          "acceptAll": "सबै स्वीकार गर्नुहोस्",
          "decline": "सबै अस्वीकार गर्नुहोस्"
        }
      },
      "poweredBy": "Powered by Seqrite",
      "purposes": {},
      "service": {
        "disableAll": {
          "description": "सबै अस्वीकार गर्नुहोस्",
          "title": "सबै अस्वीकार गर्नुहोस्"
        },
        "optOut": {
          "description": "Opt Out",
          "title": "Opt Out"
        }
      },
      "purposeItem": {
        "service": "Cookie",
        "services": "Cookies"
      },
      "contextualConsent": {
        "description": "To show this content, we need your consent. Please accept the relevant cookies.",
        "acceptOnce": "Accept once",
        "acceptAlways": "Accept always"
      },
      "analytics": {
        "title": "Analytics",
        "description": "यी कुकीहरूले हामीलाई वेबसाइट ट्राफिक, प्रयोगकर्ता व्यवहार, र संलग्नता ढाँचाहरूको विश्लेषण गर्न मद्दत गर्छन्। सङ्कलन गरिएका अन्तर्दृष्टिहरूले हामीलाई सामग्री अनुकूलन गर्न, उपयोगिता बढाउन र समग्र साइट कार्यसम्पादन सुधार गर्न अनुमति दिन्छ।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga_89RWJTCPLZ</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div></div></details>"
      },
      "marketing": {
        "title": "Marketing",
        "description": "यी कुकीहरू हाम्रा विज्ञापन साझेदारहरूले व्यक्तिगत विज्ञापनहरू प्रदान गर्न र मार्केटिङ अभियानहरूको प्रभावकारिता मापन गर्न प्रयोग गर्छन्। तिनीहरूले प्रयोगकर्ताको रुचि र ब्राउजिङ व्यवहारमा आधारित सान्दर्भिक प्रचारहरू प्रदान गर्न मद्दत गर्छन्।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">6 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_fbp</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Facebook/Meta Pixel</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_gcl_au</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Google Ads</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_fbc</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Facebook/Meta Pixel</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_uetsid</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Microsoft Clarity</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_uetvid</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Microsoft Clarity</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;MUID</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div></div></details>"
      },
      "others": {
        "title": "Others",
        "description": "यस श्रेणीमा त्यस्ता कुकीहरू समावेश छन् जुन पूर्वनिर्धारित कोटीहरूमा फिट हुँदैनन् तर वेबसाइटको केही कार्यक्षमता वा सुधारहरूको लागि आवश्यक हुन सक्छन्।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">3 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;user_prefs</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;session_id</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;marketing_id</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      }
    },
    "hi": {
      "acceptAll": "सभी स्वीकृत",
      "accept": "स्वीकार करना",
      "decline": "सभी को अस्वीकार करें",
      "acceptSelected": "चयनित स्वीकार करें",
      "ok": "सभी स्वीकृत",
      "consentNotice": {
        "description": "हम आपकी गोपनीयता का सम्मान करते हैं। हम वेबसाइट की आवश्यक कार्यक्षमता, साथ ही मार्केटिंग, वैयक्तिकरण और विश्लेषण के लिए कुकीज़ संग्रहीत करते हैं। &quot;सभी स्वीकार करें&quot; पर क्लिक करके, आप कुकीज़ के हमारे उपयोग के लिए सहमति देते हैं। आप किसी भी समय अपनी सेटिंग बदल सकते हैं। कुकी नीति।",
        "learnMore": "अनुकूलित करें",
        "changeDescription": " "
      },
      "save": "स्वीकार करना",
      "consentModal": {
        "title": "सहमति प्राथमिकताओं को अनुकूलित करें",
        "description": "हम कुकीज़ का उपयोग आपको पेजों के बीच आसानी से नेविगेट करने, आपकी प्राथमिकताओं को सहेजने और वेबसाइट पर आपके अनुभव को बेहतर बनाने में मदद करने के लिए करते हैं। हालांकि, हम आपकी निजता के अधिकार का सम्मान करते हैं और इसलिए आप कुछ प्रकार की कुकीज़ को अस्वीकार करने का विकल्प चुन सकते हैं। अधिक जानकारी प्राप्त करने और हमारी डिफ़ॉल्ट सेटिंग्स को बदलने के लिए विभिन्न श्रेणी शीर्षकों पर क्लिक करें। कृपया ध्यान दें कि कुछ प्रकार की कुकीज़ को ब्लॉक करने से साइट पर आपके अनुभव पर असर पड़ सकता है।",
        "buttons": {
          "save": "स्वीकार करना",
          "acceptAll": "सभी स्वीकृत",
          "decline": "सभी को अस्वीकार करें"
        }
      },
      "poweredBy": "Powered by Seqrite",
      "purposes": {},
      "service": {
        "disableAll": {
          "description": "सभी को अस्वीकार करें",
          "title": "सभी को अस्वीकार करें"
        },
        "optOut": {
          "description": "Opt Out",
          "title": "Opt Out"
        }
      },
      "purposeItem": {
        "service": "Cookie",
        "services": "Cookies"
      },
      "contextualConsent": {
        "description": "To show this content, we need your consent. Please accept the relevant cookies.",
        "acceptOnce": "Accept once",
        "acceptAlways": "Accept always"
      },
      "analytics": {
        "title": "Analytics",
        "description": "ये कुकीज़ हमें वेबसाइट ट्रैफ़िक, उपयोगकर्ता व्यवहार और सहभागिता पैटर्न का विश्लेषण करने में मदद करती हैं। एकत्रित जानकारियों से हमें सामग्री को अनुकूलित करने, उपयोगिता बढ़ाने और समग्र साइट प्रदर्शन में सुधार करने में सहायता मिलती है।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga_89RWJTCPLZ</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div></div></details>"
      },
      "marketing": {
        "title": "Marketing",
        "description": "इन कुकीज़ का उपयोग हमारे विज्ञापन साझेदार व्यक्तिगत विज्ञापन दिखाने और मार्केटिंग अभियानों की प्रभावशीलता मापने के लिए करते हैं। ये कुकीज़ उपयोगकर्ताओं की रुचियों और ब्राउज़िंग व्यवहार के आधार पर प्रासंगिक प्रचार प्रदान करने में सहायक होती हैं।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">6 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_fbp</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Facebook/Meta Pixel</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_gcl_au</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Google Ads</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_fbc</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Facebook/Meta Pixel</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_uetsid</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Microsoft Clarity</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_uetvid</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Microsoft Clarity</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;MUID</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div></div></details>"
      },
      "others": {
        "title": "Others",
        "description": "इस श्रेणी में वे कुकीज़ शामिल हैं जो पूर्वनिर्धारित श्रेणियों में फिट नहीं होती हैं, लेकिन वेबसाइट की कुछ कार्यात्मकताओं या सुधारों के लिए आवश्यक हो सकती हैं।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">3 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;user_prefs</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;session_id</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;marketing_id</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      }
    },
    "mni-mtei": {
      "acceptAll": "ꯄꯨꯝꯅꯃꯛ ꯌꯥꯕꯥ꯫",
      "accept": "ꯌꯥꯕ",
      "decline": "ꯄꯨꯝꯅꯃꯛ ꯔꯤꯖꯦꯛꯇ ꯇꯧꯕꯥ꯫",
      "acceptSelected": "ꯑꯦꯛꯁꯦꯞꯇ ꯇꯧꯕꯥ ꯌꯥꯕꯥ꯫",
      "ok": "ꯄꯨꯝꯅꯃꯛ ꯌꯥꯕꯥ꯫",
      "consentNotice": {
        "description": "ꯑꯩꯈꯣꯌꯅꯥ ꯑꯗꯣꯃꯒꯤ ꯄ꯭ꯔꯥꯏꯕꯦꯁꯤꯕꯨ ꯏꯀꯥꯌ ꯈꯨꯝꯅꯩ ꯑꯩꯈꯣꯌꯅꯥ ꯇꯉꯥꯏ ꯐꯗꯕꯥ ꯁꯥꯏꯠ ꯐꯉ꯭ꯀꯁꯅꯦꯂꯤꯇꯤ, ꯂꯣꯌꯅꯅꯥ ꯃꯥꯔꯀꯦꯇꯤꯡ, ꯄꯔꯁꯣꯅꯦꯂꯥꯏꯖꯦꯁꯟ ꯑꯃꯁꯨꯡ ꯑꯦꯅꯥꯂꯥꯏꯇꯤꯛꯁ ꯏꯅꯦꯕꯜ ꯇꯧꯅꯕꯥ ꯀꯨꯀꯤꯖ ꯁ꯭ꯇꯣꯔ ꯇꯧꯏ꯫ “ꯄꯨꯝꯅꯃꯛ ꯌꯥꯕꯥ” ꯍꯥꯌꯕꯁꯤꯗꯥ ꯀ꯭ꯂꯤꯛ ꯇꯧꯔꯒꯥ, ꯅꯍꯥꯛꯅꯥ ꯑꯩꯈꯣꯌꯅꯥ ꯀꯨꯀꯤꯖ ꯁꯤꯖꯤꯟꯅꯕꯗꯥ ꯑꯌꯥꯕꯥ ꯄꯤꯔꯦ꯫ ꯅꯍꯥꯛꯅꯥ ꯃꯇꯝ ꯑꯃꯠꯇꯗꯥ ꯅꯍꯥꯛꯀꯤ ꯁꯦꯇꯤꯡꯁꯤꯡ ꯍꯣꯡꯗꯣꯀꯄꯥ ꯌꯥꯏ꯫ ꯀꯨꯀꯤ ꯄꯣꯂꯤꯁꯤ꯫",
        "learnMore": "ꯀꯁ꯭ꯇꯃꯁ ꯇꯧꯕꯥ꯫",
        "changeDescription": " "
      },
      "save": "ꯌꯥꯕ",
      "consentModal": {
        "title": "ꯑꯌꯥꯕꯥ ꯄꯤꯕꯥ ꯄꯁꯟꯗꯁꯤꯡ ꯀꯁ꯭ꯇꯃꯁ ꯇꯧꯕꯥ꯫",
        "description": "ꯑꯩꯈꯣꯌꯅꯥ ꯀꯨꯀꯤꯖ ꯑꯁꯤ ꯑꯗꯣꯃꯕꯨ ꯄꯦꯖꯁꯤꯡꯒꯤ ꯃꯔꯛꯇꯥ ꯏꯐꯤꯁꯤꯌꯦꯟꯇ ꯑꯣꯏꯅꯥ ꯆꯠꯄꯗꯥ ꯃꯇꯦꯡ ꯄꯥꯡꯅꯕꯥ, ꯑꯗꯣꯃꯒꯤ ꯄꯁꯟꯗꯁꯤꯡ ꯊꯝꯅꯕꯥ ꯑꯃꯁꯨꯡ ꯃꯍꯧꯁꯥꯅꯥ ꯋꯦꯕꯁꯥꯏꯠ ꯑꯃꯒꯤ ꯑꯦꯛꯁꯄꯔꯤꯌꯦꯟꯁ ꯐꯒꯠꯍꯅꯕꯗꯥ ꯃꯇꯦꯡ ꯄꯥꯡꯏ꯫ ꯑꯗꯨꯝ ꯑꯣꯏꯅꯃꯛ, ꯑꯩꯈꯣꯌꯅꯥ ꯅꯍꯥꯛꯀꯤ ꯄ꯭ꯔꯥꯏꯚꯦꯁꯤꯒꯤ ꯍꯛ ꯑꯗꯨ ꯌꯥꯔꯦ ꯑꯃꯁꯨꯡ ꯃꯔꯝ ꯑꯁꯤꯅꯥ ꯅꯍꯥꯛꯅꯥ ꯀꯨꯀꯤꯖ ꯃꯈꯜ ꯈꯔꯗꯤ ꯑꯌꯥꯕꯥ ꯄꯤꯗꯅꯕꯥ ꯈꯅꯕꯥ ꯌꯥꯏ꯫ ꯍꯦꯟꯅꯥ ꯈꯪꯅꯕꯒꯤꯗꯃꯛ ꯑꯃꯁꯨꯡ ꯑꯩꯈꯣꯌꯒꯤ ꯗꯤꯐꯣꯜꯇ ꯁꯦꯇꯤꯡꯁꯤꯡ ꯍꯣꯡꯗꯣꯛꯅꯕꯥ ꯇꯣꯉꯥꯟ-ꯇꯣꯉꯥꯅꯕꯥ ꯀꯦꯇꯦꯒꯣꯔꯤꯒꯤ ꯍꯦꯗꯤꯡꯁꯤꯡꯗꯥ ꯀ꯭ꯂꯤꯛ ꯇꯧꯕꯤꯌꯨ꯫ ꯆꯥꯅꯕꯤꯗꯨꯅꯥ ꯈꯪꯖꯤꯅꯕꯤꯌꯨ ꯃꯗꯨꯗꯤ ꯑꯀꯛꯅꯕꯥ ꯃꯈꯂꯒꯤ ꯀꯨꯀꯤꯖ ꯕ꯭ꯂꯣꯛ ꯇꯧꯕꯅꯥ ꯅꯍꯥꯛꯀꯤ ꯁꯥꯏꯠ ꯑꯗꯨꯒꯤ ꯑꯦꯛꯁꯄꯔꯤꯌꯦꯟꯁꯇꯥ ꯑꯀꯥꯌꯕꯥ ꯄꯤꯕꯥ ꯌꯥꯏ꯫",
        "buttons": {
          "save": "ꯌꯥꯕ",
          "acceptAll": "ꯄꯨꯝꯅꯃꯛ ꯌꯥꯕꯥ꯫",
          "decline": "ꯄꯨꯝꯅꯃꯛ ꯔꯤꯖꯦꯛꯇ ꯇꯧꯕꯥ꯫"
        }
      },
      "poweredBy": "Powered by Seqrite",
      "purposes": {},
      "service": {
        "disableAll": {
          "description": "ꯄꯨꯝꯅꯃꯛ ꯔꯤꯖꯦꯛꯇ ꯇꯧꯕꯥ꯫",
          "title": "ꯄꯨꯝꯅꯃꯛ ꯔꯤꯖꯦꯛꯇ ꯇꯧꯕꯥ꯫"
        },
        "optOut": {
          "description": "Opt Out",
          "title": "Opt Out"
        }
      },
      "purposeItem": {
        "service": "Cookie",
        "services": "Cookies"
      },
      "contextualConsent": {
        "description": "To show this content, we need your consent. Please accept the relevant cookies.",
        "acceptOnce": "Accept once",
        "acceptAlways": "Accept always"
      },
      "analytics": {
        "title": "Analytics",
        "description": "ꯀꯨꯀꯤꯖꯁꯤꯡ ꯑꯁꯤꯅꯥ ꯑꯩꯈꯣꯌꯗꯥ ꯋꯦꯕꯁꯥꯏꯠꯀꯤ ꯇ꯭ꯔꯥꯐꯤꯛ, ꯌꯨꯖꯔꯒꯤ ꯂꯃꯆꯠ-ꯁꯥꯖꯠ, ꯑꯃꯁꯨꯡ ꯑꯦꯉ꯭ꯒꯦꯖꯃꯦꯟꯇ ꯄꯦꯇꯔꯅꯁꯤꯡ ꯑꯦꯅꯥꯂꯥꯏꯖ ꯇꯧꯕꯗꯥ ꯃꯇꯦꯡ ꯄꯥꯡꯏ꯫ ꯈꯣꯃꯖꯤꯜꯂꯀꯄꯥ ꯋꯥꯈꯜꯂꯣꯅꯁꯤꯡ ꯑꯁꯤꯅꯥ ꯑꯩꯈꯣꯌꯗꯥ ꯀꯟꯇꯦꯟꯇ ꯑꯣꯞꯇꯤꯃꯥꯏꯖ ꯇꯧꯕꯥ, ꯌꯨꯖꯕꯦꯂꯤꯇꯤ ꯍꯦꯅꯒꯠꯍꯅꯕꯥ ꯑꯃꯁꯨꯡ ꯑꯄꯨꯅꯕꯥ ꯁꯥꯏꯠꯀꯤ ꯄꯔꯐꯣꯃꯦꯟꯁ ꯐꯒꯠꯍꯅꯕꯥ ꯉꯃꯍꯜꯂꯤ꯫<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga_89RWJTCPLZ</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div></div></details>"
      },
      "marketing": {
        "title": "Marketing",
        "description": "ꯀꯨꯀꯤꯖꯁꯤꯡ ꯑꯁꯤ ꯑꯩꯈꯣꯌꯒꯤ ꯑꯦꯗꯚꯥꯔꯇꯥꯏꯖꯃꯦꯟꯇ ꯄꯥꯔꯇꯅꯔꯁꯤꯡꯅꯥ ꯄꯔꯁꯣꯅꯦꯂꯥꯏꯖ ꯇꯧꯔꯕꯥ ꯑꯦꯗꯁꯤꯡ ꯄꯤꯅꯕꯥ ꯑꯃꯁꯨꯡ ꯃꯥꯔꯀꯦꯇꯤꯡ ꯀꯦꯝꯄꯦꯅꯁꯤꯡꯒꯤ ꯏꯐꯦꯛꯇꯤꯕꯅꯦꯁ ꯑꯗꯨ ꯌꯦꯡꯁꯤꯟꯅꯕꯥ ꯁꯤꯖꯤꯟꯅꯩ꯫ ꯃꯈꯣꯌꯅꯥ ꯌꯨꯖꯔꯒꯤ ꯏꯟꯇꯔꯦꯁ꯭ꯠ ꯑꯃꯁꯨꯡ ꯕ꯭ꯔꯥꯎꯖꯤꯡ ꯕꯤꯍꯦꯕꯤꯌꯔꯗꯥ ꯌꯨꯝꯐꯝ ꯑꯣꯏꯕꯥ ꯃꯔꯤ ꯂꯩꯅꯕꯥ ꯄ꯭ꯔꯣꯃꯣꯁꯅꯁꯤꯡ ꯄꯤꯕꯗꯥ ꯃꯇꯦꯡ ꯄꯥꯡꯏ꯫<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">6 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_fbp</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Facebook/Meta Pixel</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_gcl_au</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Google Ads</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_fbc</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Facebook/Meta Pixel</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_uetsid</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Microsoft Clarity</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_uetvid</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Microsoft Clarity</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;MUID</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div></div></details>"
      },
      "others": {
        "title": "Others",
        "description": "ꯀꯦꯇꯦꯒꯣꯔꯤ ꯑꯁꯤꯗꯥ ꯃꯃꯥꯡꯗꯥ ꯁꯦꯃꯗꯣꯛ-ꯁꯦꯃꯖꯤꯟ ꯇꯧꯔꯕꯥ ꯀꯦꯇꯦꯒꯣꯔꯤꯁꯤꯡꯗꯥ ꯌꯥꯎꯗꯕꯥ ꯑꯗꯨꯕꯨ ꯑꯀꯛꯅꯕꯥ ꯋꯦꯕꯁꯥꯏꯇꯀꯤ ꯐꯉ꯭ꯀꯁꯅꯦꯂꯤꯇꯤꯁꯤꯡ ꯅꯠꯠꯔꯒꯥ ꯑꯍꯣꯡꯕꯥ ꯄꯨꯔꯛꯅꯕꯒꯤꯗꯃꯛ ꯃꯊꯧ ꯇꯥꯕꯥ ꯀꯨꯀꯤꯖꯁꯤꯡ ꯌꯥꯎꯏ꯫<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">3 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;user_prefs</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;session_id</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;marketing_id</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      }
    },
    "ms": {
      "acceptAll": "Terima semua",
      "accept": "Terima",
      "decline": "Tolak Semua",
      "acceptSelected": "Terima Dipilih",
      "ok": "Terima Semua",
      "consentNotice": {
        "description": "Kami menghormati privasi anda. Kami menyimpan kuki untuk mendayakan fungsi penting laman web, serta pemasaran, pemperibadian dan analitik. Dengan mengklik “Terima Semua”, anda bersetuju dengan penggunaan kuki kami. Anda boleh menukar tetapan anda pada bila-bila masa. Dasar Kuki.",
        "learnMore": "Sesuaikan",
        "changeDescription": " "
      },
      "save": "Terima",
      "consentModal": {
        "title": "Sesuaikan Keutamaan Persetujuan",
        "description": "Kami menggunakan kuki untuk membantu anda menavigasi antara halaman dengan cekap, menyimpan pilihan anda dan secara amnya meningkatkan pengalaman anda di laman web. Walau bagaimanapun, kami mengakui hak privasi anda dan oleh itu anda boleh memilih untuk tidak membenarkan beberapa jenis kuki. Klik pada tajuk kategori yang berbeza untuk mengetahui lebih lanjut dan menukar tetapan lalai kami. Sila ambil perhatian bahawa menyekat jenis kuki tertentu mungkin menjejaskan pengalaman anda di laman web ini.",
        "buttons": {
          "save": "Terima",
          "acceptAll": "Terima semua",
          "decline": "Tolak Semua"
        }
      },
      "poweredBy": "Powered by Seqrite",
      "purposes": {},
      "service": {
        "disableAll": {
          "description": "Tolak Semua",
          "title": "Tolak Semua"
        },
        "optOut": {
          "description": "Opt Out",
          "title": "Opt Out"
        }
      },
      "purposeItem": {
        "service": "Cookie",
        "services": "Cookies"
      },
      "contextualConsent": {
        "description": "To show this content, we need your consent. Please accept the relevant cookies.",
        "acceptOnce": "Accept once",
        "acceptAlways": "Accept always"
      },
      "analytics": {
        "title": "Analytics",
        "description": "Kuki ini membantu kami menganalisis trafik laman web, tingkah laku pengguna dan corak penglibatan. Wawasan yang dikumpul membolehkan kami mengoptimumkan kandungan, meningkatkan kebolehgunaan dan meningkatkan prestasi keseluruhan laman web.<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga_89RWJTCPLZ</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div></div></details>"
      },
      "marketing": {
        "title": "Marketing",
        "description": "Kuki ini digunakan oleh rakan kongsi pengiklanan kami untuk menyampaikan iklan yang diperibadikan dan mengukur keberkesanan kempen pemasaran. Kuki ini membantu menyediakan promosi yang berkaitan berdasarkan minat pengguna dan tingkah laku melayari.<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">6 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_fbp</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Facebook/Meta Pixel</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_gcl_au</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Google Ads</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_fbc</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Facebook/Meta Pixel</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_uetsid</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Microsoft Clarity</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_uetvid</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Microsoft Clarity</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;MUID</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div></div></details>"
      },
      "others": {
        "title": "Others",
        "description": "Kategori ini termasuk kuki yang tidak termasuk dalam kategori yang telah ditetapkan tetapi mungkin diperlukan untuk fungsi atau penambahbaikan laman web tertentu.<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">3 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;user_prefs</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;session_id</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;marketing_id</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      }
    },
    "sa": {
      "acceptAll": "सर्वान् स्वीकुरुत",
      "accept": "स्वीकरोतु",
      "decline": "सर्वं निराकरोतु",
      "acceptSelected": "चयनितं स्वीकुर्वन्तु",
      "ok": "सर्वान् स्वीकुरुत",
      "consentNotice": {
        "description": "वयं भवतः गोपनीयतायाः सम्मानं कुर्मः वयं कुकीजं संगृह्णामः यत् आवश्यकं साइट् कार्यक्षमतां सक्षमं कर्तुं, तथैव विपणनं, व्यक्तिगतीकरणं, विश्लेषणं च सक्षमं कुर्मः। “सर्वं स्वीकुर्वन्तु” इति क्लिक् कृत्वा भवान् अस्माकं कुकीज-उपयोगाय सहमतिम् अददात् । भवान् कदापि स्वस्य सेटिङ्ग्स् परिवर्तयितुं शक्नोति । कुकी नीति।",
        "learnMore": "अनुकूलितं कुर्वन्तु",
        "changeDescription": " "
      },
      "save": "स्वीकरोतु",
      "consentModal": {
        "title": "सहमतिप्राथमिकता अनुकूलितं कुर्वन्तु",
        "description": "वयं कुकीजस्य उपयोगं कुर्मः यत् भवतः पृष्ठानां मध्ये कुशलतापूर्वकं भ्रमणं कर्तुं, भवतः प्राधान्यानि संग्रहीतुं, सामान्यतया च भवतः वेबसाइटस्य अनुभवं सुधारयितुम्। तथापि वयं भवतः गोपनीयतायाः अधिकारं स्वीकुर्मः अतः भवान् केषाञ्चन प्रकाराणां कुकीजस्य अनुमतिं न दातुं चयनं कर्तुं शक्नोति । अधिकं ज्ञातुं अस्माकं पूर्वनिर्धारितसेटिंग्स् परिवर्तयितुं च भिन्न-भिन्न-वर्ग-शीर्षकेषु क्लिक् कुर्वन्तु । कृपया ज्ञातव्यं यत् कतिपयप्रकारस्य कुकीजस्य अवरोधेन भवतः साइट्-अनुभवः प्रभावितः भवितुम् अर्हति ।",
        "buttons": {
          "save": "स्वीकरोतु",
          "acceptAll": "सर्वान् स्वीकुरुत",
          "decline": "सर्वं निराकरोतु"
        }
      },
      "poweredBy": "Powered by Seqrite",
      "purposes": {},
      "service": {
        "disableAll": {
          "description": "सर्वं निराकरोतु",
          "title": "सर्वं निराकरोतु"
        },
        "optOut": {
          "description": "Opt Out",
          "title": "Opt Out"
        }
      },
      "purposeItem": {
        "service": "Cookie",
        "services": "Cookies"
      },
      "contextualConsent": {
        "description": "To show this content, we need your consent. Please accept the relevant cookies.",
        "acceptOnce": "Accept once",
        "acceptAlways": "Accept always"
      },
      "analytics": {
        "title": "Analytics",
        "description": "एतानि कुकीजः अस्मान् वेबसाइट्-यातायातस्य, उपयोक्तृव्यवहारस्य, सङ्गति-प्रतिमानस्य च विश्लेषणं कर्तुं साहाय्यं कुर्वन्ति । एकत्रिताः अन्वेषणाः अस्मान् सामग्रीं अनुकूलितुं, उपयोगिता वर्धयितुं, समग्रं साइट् कार्यक्षमतां च सुधारयितुं च शक्नुवन्ति ।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga_89RWJTCPLZ</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div></div></details>"
      },
      "marketing": {
        "title": "Marketing",
        "description": "एतानि कुकीजानि अस्माकं विज्ञापनसाझेदाराः व्यक्तिगतविज्ञापनं वितरितुं विपणन-अभियानानां प्रभावशीलतां मापनार्थं च उपयुज्यन्ते । ते उपयोक्तृरुचिं ब्राउजिंग् व्यवहारं च आधारितं प्रासंगिकं प्रचारं प्रदातुं साहाय्यं कुर्वन्ति ।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">6 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_fbp</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Facebook/Meta Pixel</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_gcl_au</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Google Ads</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_fbc</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Facebook/Meta Pixel</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_uetsid</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Microsoft Clarity</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_uetvid</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Microsoft Clarity</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;MUID</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div></div></details>"
      },
      "others": {
        "title": "Others",
        "description": "अस्मिन् वर्गे एतादृशाः कुकीजाः सन्ति ये पूर्वनिर्धारितवर्गेषु न उपयुज्यन्ते परन्तु कतिपयानां वेबसाइट् कार्यक्षमतायाः अथवा सुधारणानां कृते आवश्यकाः भवितुम् अर्हन्ति ।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">3 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;user_prefs</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;session_id</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;marketing_id</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      }
    }
  },
  "styling": {
    "theme": [
      "light",
      "custom"
    ]
  },
  "htmlTexts": true,
  "embedded": false,
  "declarative": false,
  "groupByPurpose": false,
  "hideToggleAll": false,
  "appName": "test1",
  "description": "We respects your privacy and is committed to protecting your personal data.",
  "companyName": "test1",
  "companyAddress": " ",
  "services": [
    {
      "name": "analytics",
      "title": "Analytics",
      "description": "<p>These cookies help us analyze website traffic, user behavior, and engagement patterns. The insights gathered allow us to optimize content, enhance usability, and improve overall site performance.</p><details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga_89RWJTCPLZ</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div></div></details>",
      "purposes": [],
      "required": false,
      "default": true,
      "optOut": false,
      "onlyOnce": true,
      "cookies": [
        "_ga",
        "_ga_89RWJTCPLZ"
      ]
    },
    {
      "name": "marketing",
      "title": "Marketing",
      "description": "<p>These cookies are used by our advertising partners to deliver personalized ads and measure the effectiveness of marketing campaigns. They help provide relevant promotions based on user interests and browsing behavior.</p><details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">6 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_fbp</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Facebook/Meta Pixel</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_gcl_au</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Google Ads</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_fbc</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Facebook/Meta Pixel</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_uetsid</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Microsoft Clarity</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_uetvid</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Microsoft Clarity</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;MUID</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div></div></details>",
      "purposes": [],
      "required": false,
      "default": true,
      "optOut": false,
      "onlyOnce": true,
      "cookies": [
        "_fbp",
        "_gcl_au",
        "_fbc",
        "_uetsid",
        "_uetvid",
        "MUID"
      ]
    },
    {
      "name": "others",
      "title": "Others",
      "description": "<p>This category includes cookies that do not fit into the predefined categories but may be necessary for certain website functionalities or improvements.</p><details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">3 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;user_prefs</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;session_id</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;marketing_id</div><div><b>Host:</b>&nbsp;test-qa-cookie-consnet.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>",
      "purposes": [],
      "required": false,
      "default": true,
      "optOut": false,
      "onlyOnce": true,
      "cookies": [
        "user_prefs",
        "session_id",
        "marketing_id"
      ]
    }
  ]
};
showCookie();