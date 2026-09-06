const $ = (s, r = document) => r.querySelector(s),
  $$ = (s, r = document) => [...r.querySelectorAll(s)];
const translations = {
  en: {},
  hi: {
    brandSub: "सूचना का अधिकार, आसान बनाया",
    navHow: "यह कैसे काम करता है",
    navAsk: "मैं क्या पूछ सकता हूँ?",
    track: "आवेदन ट्रैक करें",
    lite: "लाइट",
    eyebrow: "नागरिक-प्रथम RTI अनुभव",
    heroLine1: "आपका सवाल।",
    heroLine2: "जानना आपका अधिकार।",
    heroIntro:
      "किसी भी केंद्रीय सरकारी लोक प्राधिकरण से अपनी भाषा में, किसी भी फ़ोन से जानकारी माँगें।",
    start: "RTI आवेदन करें",
    startSub: "सरकार से जानकारी माँगें",
    trackSub: "जवाब या भुगतान की स्थिति देखें",
    appeal: "पहली अपील करें",
    appealSub: "30 दिन में जवाब न मिले तो",
    officialRules: "आधिकारिक RTI नियमों पर आधारित",
    officialRulesSub: "केवल केंद्र सरकार के आवेदन",
    noAccount: "खाता आवश्यक नहीं · ड्राफ्ट इस डिवाइस पर सहेजा जाता है",
    quickGuide: "आपकी आसान मार्गदर्शिका",
    guideTitle: "पहले बताएं, आपका सवाल किसके लिए है",
    guideBody:
      "हम सही सरकारी प्राधिकरण चुनने में मदद करेंगे। विभाग का नाम जानना ज़रूरी नहीं।",
    helpChoose: "चुनने में मदद करें",
    fee: "मानक शुल्क",
    days: "उत्तर के दिन*",
    lowData: "कम डेटा पर चलता है",
    lowDataSub: "भारी चित्र या वीडियो नहीं",
    languages: "22 भारतीय भाषाएँ",
    languagesSub: "सभी २२ भाषाओं में मुख्य सेवाएँ",
    accessible: "सभी के लिए सुलभ",
    accessibleSub: "कीबोर्ड, स्क्रीन रीडर और बड़े अक्षर",
    offline: "ऑफलाइन ड्राफ्ट",
    offlineSub: "सिग्नल आने पर जमा करें",
    simpleProcess: "एक सरल प्रक्रिया",
    threeSteps: "सवाल से जवाब तक, तीन स्पष्ट कदम।",
    step1Title: "अपने शब्दों में पूछें",
    step1Body:
      "बताएं कि आपको क्या जानकारी चाहिए। उपयोगी संकेत इसे स्पष्ट RTI में बदलेंगे।",
    step2Title: "सही जगह पहुँचाएँ",
    step2Body: "दो आसान सवालों से सही केंद्रीय या राज्य प्राधिकरण तक पहुँचें।",
    step3Title: "हर अपडेट देखें",
    step3Body: "एक संदर्भ नंबर से उत्तर, अतिरिक्त शुल्क और अपील तिथि देखें।",
    askLabel: "मैं क्या पूछ सकता हूँ?",
    examplesTitle: "सार्वजनिक जानकारी जनता की है।",
    examplesBody:
      "रिकॉर्ड, दस्तावेज़, रिपोर्ट या सरकारी काम की स्थिति माँगें। ऐसे विचार या कारण न पूछें जो रिकॉर्ड में नहीं हैं।",
    tryQuestion: "अपना सवाल आज़माएँ",
    category1: "सार्वजनिक निर्माण",
    category2: "कल्याण योजना",
    category3: "शिकायत की स्थिति",
    readyLabel: "जब आप तैयार हों",
    ctaTitle: "एक सवाल बदलाव शुरू कर सकता है।",
    ctaBody: "जमा करने तक आपका ड्राफ्ट इसी डिवाइस पर रहता है।",
    prototype: "स्वतंत्र हैकाथॉन प्रोटोटाइप। भारत सरकार की आधिकारिक सेवा नहीं।",
    guidedRequest: "निर्देशित आवेदन",
    requestTitle: "आइए सही रास्ता खोजें।",
    levelQuestion:
      "जानकारी केंद्र सरकार के पास है या राज्य/स्थानीय निकाय के पास?",
    levelHelp:
      "उदाहरण: रेलवे और पासपोर्ट केंद्रीय हैं। पंचायत, स्थानीय पुलिस और राज्य बिजली बोर्ड आमतौर पर राज्य के हैं।",
    central: "केंद्र सरकार",
    centralExamples: "रेलवे, आयकर, पासपोर्ट, राष्ट्रीय मंत्रालय",
    state: "राज्य या स्थानीय प्राधिकरण",
    stateExamples: "पंचायत, नगरपालिका, स्थानीय पुलिस, राज्य सेवाएँ",
    unsure: "मुझे पक्का नहीं",
    unsureHelp: "समस्या बताएं, हम रास्ता सुझाएँगे",
    continue: "आगे बढ़ें",
    back: "पीछे",
    saved: "इस डिवाइस पर सहेजा गया",
    topicLabel: "आपका सवाल किस बारे में है?",
    chooseTopic: "विषय चुनें",
    authorityLabel: "संबंधित विभाग या स्थान",
    routeTip:
      "सही अधिकारी का नाम ज़रूरी नहीं। जहाँ लागू हो, प्राधिकरण को आवेदन सही अधिकारी तक भेजना होता है।",
    questionLabel: "आपको कौन-सी जानकारी चाहिए?",
    improve: "इसे स्पष्ट बनाने में मदद करें",
    attach: "सहायक दस्तावेज़ जोड़ें",
    attachSub: "वैकल्पिक · PDF या चित्र · अधिकतम 1 MB",
    reviewTitle: "आपका ड्राफ्ट तैयार है",
    reviewBody:
      "नीचे विवरण जाँचें। यह प्रोटोटाइप डेमो संदर्भ बनाएगा; सरकार को डेटा नहीं भेजेगा।",
    citizenConfirm: "मैं भारतीय नागरिक हूँ और ऊपर की जानकारी सही है।",
    applicationFee: "आवेदन शुल्क",
    bplNote: "वैध BPL प्रमाण वाले आवेदकों के लिए ₹0",
    stateRouteTitle: "इस आवेदन के लिए राज्य RTI पोर्टल चाहिए।",
    stateRouteBody:
      "केंद्रीय पोर्टल की चेतावनी है कि राज्य आवेदन बिना वापसी के लौटाए जा सकते हैं। सही राज्य पोर्टल खोजें।",
    findState: "मेरा राज्य पोर्टल खोजें ↗",
    createDemo: "डेमो आवेदन बनाएँ",
    demoComplete: "डेमो पूरा",
    draftSaved: "आपका RTI ड्राफ्ट सहेजा गया।",
    demoWarning:
      "सरकार को कुछ नहीं भेजा गया। आवेदन के लिए आधिकारिक पोर्टल उपयोग करें।",
    demoReference: "डेमो संदर्भ",
    officialPortal: "आधिकारिक पोर्टल पर जाएँ",
    done: "पूर्ण",
    statusLookup: "स्थिति खोज",
    trackTitle: "अपना आवेदन ट्रैक करें",
    trackHelp:
      "आधिकारिक पंजीकरण संख्या डालें। हम सुरक्षित सरकारी स्थिति पेज खोलेंगे।",
    registrationNo: "पंजीकरण संख्या",
    checkOfficial: "आधिकारिक पोर्टल पर देखें",
    privacy: "यह प्रोटोटाइप आपका नंबर सहेजता या भेजता नहीं।",
    offlineNow: "आप ऑफलाइन हैं",
    offlineNowSub: "लिखते रहें। आपका ड्राफ्ट सुरक्षित है।",
    workspaceLabel: "आपका निजी कार्यक्षेत्र",
    workspaceTitle: "तैयारी, बचत और अगला कदम—एक ही जगह।",
    workspaceBody:
      "कोई खाता या सरकारी पहचान नहीं। आधिकारिक पोर्टल चुनने तक ड्राफ्ट और डेमो आवेदन केवल इसी डिवाइस पर रहते हैं।",
    prepareBody: "सही प्राधिकरण का सुझाव और आवेदन की स्पष्टता जाँचें।",
    casesAction: "मेरे सहेजे आवेदन",
    casesBody: "इस फ़ोन पर सहेजे ड्राफ्ट, तारीख और अगला कदम देखें।",
    stateAction: "मेरा राज्य पोर्टल खोजें",
    stateCardBody: "राज्य या स्थानीय RTI को गलती से केंद्रीय पोर्टल पर भेजने से बचें।",
    casesTitle: "मेरा RTI कार्यक्षेत्र",
    casesPrivacy: "स्थानीय रूप से सहेजा गया। RTI Saathi यह इतिहास अपलोड नहीं करता।",
    stateTitle: "अपना राज्य RTI पोर्टल खोजें",
    stateModalBody:
      "प्राधिकरण का राज्य चुनें। हम आपको आधिकारिक DoPT राज्य RTI निर्देशिका तक ले जाएंगे।",
    stateSelectLabel: "राज्य या केंद्र शासित प्रदेश",
  },
  bn: {
    heroLine1: "আপনার প্রশ্ন।",
    heroLine2: "জানার অধিকার আপনার।",
    heroIntro: "সহজ ভাষায়, যেকোনো ফোন থেকে কেন্দ্রীয় সরকারের কাছে তথ্য চান।",
    start: "RTI আবেদন শুরু করুন",
    track: "আবেদন ট্র্যাক করুন",
    startSub: "সরকারি তথ্য চান",
    trackSub: "উত্তর বা পেমেন্ট দেখুন",
    appeal: "প্রথম আপিল করুন",
    appealSub: "৩০ দিনে উত্তর না পেলে",
    navHow: "কীভাবে কাজ করে",
    navAsk: "কী জানতে পারি?",
    lowData: "কম ডেটায় চলে",
    languages: "২২টি ভারতীয় ভাষা",
    offline: "অফলাইন খসড়া",
    prototype: "স্বাধীন হ্যাকাথন প্রোটোটাইপ। ভারত সরকারের সরকারি পরিষেবা নয়।",
  },
  ta: {
    heroLine1: "உங்கள் கேள்வி.",
    heroLine2: "அறிவது உங்கள் உரிமை.",
    heroIntro:
      "எந்த தொலைபேசியிலிருந்தும் எளிய மொழியில் மத்திய அரசிடம் தகவல் கேளுங்கள்.",
    start: "RTI கோரிக்கையைத் தொடங்குங்கள்",
    track: "கோரிக்கையைக் கண்காணிக்க",
    startSub: "அரசுத் தகவலைக் கேளுங்கள்",
    trackSub: "பதில் அல்லது கட்டண நிலை",
    appeal: "முதல் மேல்முறையீடு",
    appealSub: "30 நாட்களில் பதில் இல்லை எனில்",
    navHow: "இது எப்படி வேலை செய்கிறது",
    navAsk: "நான் என்ன கேட்கலாம்?",
    lowData: "குறைந்த தரவில் இயங்கும்",
    languages: "22 இந்திய மொழிகள்",
    offline: "ஆஃப்லைன் வரைவு",
    prototype:
      "சுயாதீன ஹேக்கத்தான் முன்மாதிரி. இந்திய அரசின் அதிகாரப்பூர்வ சேவை அல்ல.",
  },
  te: {
    heroLine1: "మీ ప్రశ్న.",
    heroLine2: "తెలుసుకోవడం మీ హక్కు.",
    heroIntro:
      "ఏ ఫోన్ నుంచైనా సరళమైన భాషలో కేంద్ర ప్రభుత్వ సమాచారాన్ని అడగండి.",
    start: "RTI అభ్యర్థన ప్రారంభించండి",
    track: "అభ్యర్థనను ట్రాక్ చేయండి",
    startSub: "ప్రభుత్వ సమాచారాన్ని అడగండి",
    trackSub: "సమాధానం లేదా చెల్లింపు చూడండి",
    appeal: "మొదటి అప్పీల్ చేయండి",
    appealSub: "30 రోజుల్లో సమాధానం లేకపోతే",
    navHow: "ఇది ఎలా పనిచేస్తుంది",
    navAsk: "నేను ఏమి అడగగలను?",
    lowData: "తక్కువ డేటాలో పనిచేస్తుంది",
    languages: "22 భారతీయ భాషలు",
    offline: "ఆఫ్‌లైన్ డ్రాఫ్ట్",
    prototype: "స్వతంత్ర హ్యాకథాన్ నమూనా. భారత ప్రభుత్వ అధికారిక సేవ కాదు.",
  },
  mr: {
    heroLine1: "तुमचा प्रश्न.",
    heroLine2: "जाणून घेणे तुमचा हक्क.",
    heroIntro: "कोणत्याही फोनवरून सोप्या भाषेत केंद्र सरकारकडे माहिती मागा.",
    start: "RTI अर्ज सुरू करा",
    track: "अर्जाचा मागोवा घ्या",
    startSub: "सरकारी माहिती मागा",
    trackSub: "उत्तर किंवा पेमेंट स्थिती पहा",
    appeal: "पहिले अपील करा",
    appealSub: "३० दिवसांत उत्तर न मिळाल्यास",
    navHow: "हे कसे चालते",
    navAsk: "मी काय विचारू शकतो?",
    lowData: "कमी डेटावर चालते",
    languages: "२२ भारतीय भाषा",
    offline: "ऑफलाइन मसुदा",
    prototype: "स्वतंत्र हॅकाथॉन नमुना. भारत सरकारची अधिकृत सेवा नाही.",
  },
  gu: {
    heroLine1: "તમારો પ્રશ્ન.",
    heroLine2: "જાણવું તમારો અધિકાર.",
    heroIntro: "કોઈપણ ફોનથી સરળ ભાષામાં કેન્દ્ર સરકાર પાસે માહિતી માંગો.",
    start: "RTI અરજી શરૂ કરો",
    track: "અરજી ટ્રૅક કરો",
    startSub: "સરકારી માહિતી માંગો",
    trackSub: "જવાબ અથવા ચુકવણી જુઓ",
    appeal: "પ્રથમ અપીલ કરો",
    appealSub: "30 દિવસમાં જવાબ ન મળે તો",
    navHow: "કેવી રીતે કામ કરે છે",
    navAsk: "હું શું પૂછી શકું?",
    lowData: "ઓછા ડેટા પર ચાલે છે",
    languages: "22 ભારતીય ભાષાઓ",
    offline: "ઓફલાઇન ડ્રાફ્ટ",
    prototype: "સ્વતંત્ર હેકાથોન પ્રોટોટાઇપ. ભારત સરકારની અધિકૃત સેવા નથી.",
  },
  kn: {
    heroLine1: "ನಿಮ್ಮ ಪ್ರಶ್ನೆ.",
    heroLine2: "ತಿಳಿಯುವುದು ನಿಮ್ಮ ಹಕ್ಕು.",
    heroIntro:
      "ಯಾವುದೇ ಫೋನ್‌ನಿಂದ ಸರಳ ಭಾಷೆಯಲ್ಲಿ ಕೇಂದ್ರ ಸರ್ಕಾರದ ಮಾಹಿತಿಯನ್ನು ಕೇಳಿ.",
    start: "RTI ವಿನಂತಿ ಪ್ರಾರಂಭಿಸಿ",
    track: "ವಿನಂತಿ ಟ್ರ್ಯಾಕ್ ಮಾಡಿ",
    startSub: "ಸರ್ಕಾರಿ ಮಾಹಿತಿ ಕೇಳಿ",
    trackSub: "ಉತ್ತರ ಅಥವಾ ಪಾವತಿ ಸ್ಥಿತಿ ನೋಡಿ",
    appeal: "ಮೊದಲ ಮೇಲ್ಮನವಿ ಸಲ್ಲಿಸಿ",
    appealSub: "30 ದಿನಗಳಲ್ಲಿ ಉತ್ತರ ಇಲ್ಲದಿದ್ದರೆ",
    navHow: "ಇದು ಹೇಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ",
    navAsk: "ನಾನು ಏನು ಕೇಳಬಹುದು?",
    lowData: "ಕಡಿಮೆ ಡೇಟಾದಲ್ಲಿ ಕೆಲಸ",
    languages: "22 ಭಾರತೀಯ ಭಾಷೆಗಳು",
    offline: "ಆಫ್‌ಲೈನ್ ಕರಡು",
    prototype: "ಸ್ವತಂತ್ರ ಹ್ಯಾಕಥಾನ್ ಮಾದರಿ. ಭಾರತ ಸರ್ಕಾರದ ಅಧಿಕೃತ ಸೇವೆಯಲ್ಲ.",
  },
  ml: {
    heroLine1: "നിങ്ങളുടെ ചോദ്യം.",
    heroLine2: "അറിയുക നിങ്ങളുടെ അവകാശം.",
    heroIntro:
      "ഏത് ഫോണിൽ നിന്നും ലളിതമായ ഭാഷയിൽ കേന്ദ്ര സർക്കാരിനോട് വിവരങ്ങൾ ചോദിക്കുക.",
    start: "RTI അപേക്ഷ ആരംഭിക്കുക",
    track: "അപേക്ഷ ട്രാക്ക് ചെയ്യുക",
    startSub: "സർക്കാർ വിവരങ്ങൾ ചോദിക്കുക",
    trackSub: "മറുപടി അല്ലെങ്കിൽ പണം നില കാണുക",
    appeal: "ആദ്യ അപ്പീൽ നൽകുക",
    appealSub: "30 ദിവസത്തിൽ മറുപടി ഇല്ലെങ്കിൽ",
    navHow: "ഇത് എങ്ങനെ പ്രവർത്തിക്കുന്നു",
    navAsk: "എന്ത് ചോദിക്കാം?",
    lowData: "കുറഞ്ഞ ഡാറ്റയിൽ പ്രവർത്തിക്കുന്നു",
    languages: "22 ഇന്ത്യൻ ഭാഷകൾ",
    offline: "ഓഫ്‌ലൈൻ ഡ്രാഫ്റ്റ്",
    prototype:
      "സ്വതന്ത്ര ഹാക്കത്തോൺ മാതൃക. ഇന്ത്യാ സർക്കാരിന്റെ ഔദ്യോഗിക സേവനമല്ല.",
  },
  pa: {
    heroLine1: "ਤੁਹਾਡਾ ਸਵਾਲ।",
    heroLine2: "ਜਾਣਨਾ ਤੁਹਾਡਾ ਹੱਕ।",
    heroIntro: "ਕਿਸੇ ਵੀ ਫ਼ੋਨ ਤੋਂ ਸੌਖੀ ਭਾਸ਼ਾ ਵਿੱਚ ਕੇਂਦਰ ਸਰਕਾਰ ਤੋਂ ਜਾਣਕਾਰੀ ਮੰਗੋ।",
    start: "RTI ਬੇਨਤੀ ਸ਼ੁਰੂ ਕਰੋ",
    track: "ਬੇਨਤੀ ਟਰੈਕ ਕਰੋ",
    startSub: "ਸਰਕਾਰੀ ਜਾਣਕਾਰੀ ਮੰਗੋ",
    trackSub: "ਜਵਾਬ ਜਾਂ ਭੁਗਤਾਨ ਵੇਖੋ",
    appeal: "ਪਹਿਲੀ ਅਪੀਲ ਕਰੋ",
    appealSub: "30 ਦਿਨਾਂ ਵਿੱਚ ਜਵਾਬ ਨਾ ਮਿਲੇ",
    navHow: "ਇਹ ਕਿਵੇਂ ਕੰਮ ਕਰਦਾ ਹੈ",
    navAsk: "ਮੈਂ ਕੀ ਪੁੱਛ ਸਕਦਾ ਹਾਂ?",
    lowData: "ਘੱਟ ਡੇਟਾ 'ਤੇ ਚੱਲਦਾ ਹੈ",
    languages: "22 ਭਾਰਤੀ ਭਾਸ਼ਾਵਾਂ",
    offline: "ਆਫਲਾਈਨ ਖਰੜਾ",
    prototype: "ਸੁਤੰਤਰ ਹੈਕਾਥਾਨ ਪ੍ਰੋਟੋਟਾਈਪ। ਭਾਰਤ ਸਰਕਾਰ ਦੀ ਅਧਿਕਾਰਤ ਸੇਵਾ ਨਹੀਂ।",
  },
  ur: {
    heroLine1: "آپ کا سوال۔",
    heroLine2: "جاننا آپ کا حق۔",
    heroIntro: "کسی بھی فون سے آسان زبان میں مرکزی حکومت سے معلومات مانگیں۔",
    start: "RTI درخواست شروع کریں",
    track: "درخواست ٹریک کریں",
    startSub: "سرکاری معلومات مانگیں",
    trackSub: "جواب یا ادائیگی دیکھیں",
    appeal: "پہلی اپیل کریں",
    appealSub: "30 دن میں جواب نہ ملے تو",
    navHow: "یہ کیسے کام کرتا ہے",
    navAsk: "میں کیا پوچھ سکتا ہوں؟",
    lowData: "کم ڈیٹا پر کام کرتا ہے",
    languages: "22 بھارتی زبانیں",
    offline: "آف لائن مسودہ",
    prototype: "آزاد ہیکاتھون نمونہ۔ حکومت ہند کی سرکاری سروس نہیں۔",
  },
  or: {
    heroLine1: "ଆପଣଙ୍କ ପ୍ରଶ୍ନ।",
    heroLine2: "ଜାଣିବା ଆପଣଙ୍କ ଅଧିକାର।",
    start: "RTI ଅନୁରୋଧ ଆରମ୍ଭ କରନ୍ତୁ",
    track: "ଅନୁରୋଧ ଟ୍ରାକ୍ କରନ୍ତୁ",
    startSub: "ସରକାରୀ ସୂଚନା ମାଗନ୍ତୁ",
    trackSub: "ଉତ୍ତର କିମ୍ବା ପେମେଣ୍ଟ ଦେଖନ୍ତୁ",
    appeal: "ପ୍ରଥମ ଅପିଲ୍ କରନ୍ତୁ",
    appealSub: "30 ଦିନରେ ଉତ୍ତର ନ ମିଳିଲେ",
    lowData: "କମ୍ ଡାଟାରେ କାମ କରେ",
    languages: "22 ଭାରତୀୟ ଭାଷା",
    offline: "ଅଫଲାଇନ୍ ଡ୍ରାଫ୍ଟ",
  },
  as: {
    heroLine1: "আপোনাৰ প্ৰশ্ন।",
    heroLine2: "জনাটো আপোনাৰ অধিকাৰ।",
    heroIntro: "যিকোনো ফোনৰ পৰা সহজ ভাষাত কেন্দ্ৰীয় চৰকাৰৰ তথ্য বিচাৰক।",
    start: "RTI আবেদন কৰক",
    track: "আবেদন অনুসৰণ কৰক",
    startSub: "চৰকাৰী তথ্য বিচাৰক",
    trackSub: "উত্তৰ বা পৰিশোধৰ স্থিতি চাওক",
    appeal: "প্ৰথম আপীল কৰক",
    appealSub: "৩০ দিনত উত্তৰ নাপালে",
    navHow: "কেনেকৈ কাম কৰে",
    navAsk: "মই কি সুধিব পাৰোঁ?",
    lowData: "কম ডাটাত কাম কৰে",
    languages: "২২টা ভাৰতীয় ভাষা",
    offline: "অফলাইন খচৰা",
    prototype: "স্বতন্ত্ৰ হেকাথন আৰ্হি। ভাৰত চৰকাৰৰ চৰকাৰী সেৱা নহয়।",
  },
  sa: {
    heroLine1: "भवदीयः प्रश्नः।",
    heroLine2: "ज्ञातुं भवदीयः अधिकारः।",
    heroIntro:
      "कस्यापि दूरभाषस्य उपयोगेन सरलभाषया केन्द्रसरकारात् सूचनां याचत।",
    start: "RTI आवेदनं आरभत",
    track: "आवेदनस्य स्थितिं पश्यत",
    startSub: "सर्वकारीयां सूचनां याचत",
    trackSub: "उत्तरं शुल्कस्थितिं वा पश्यत",
    appeal: "प्रथमं निवेदनं कुरुत",
    appealSub: "३० दिनेषु उत्तरं न प्राप्यते चेत्",
    navHow: "कथं कार्यं करोति",
    navAsk: "किं प्रष्टुं शक्नोमि?",
    lowData: "अल्पदत्तांशेन कार्यं करोति",
    languages: "२२ भारतीयभाषाः",
    offline: "असंजालस्थः प्रारूपः",
    prototype:
      "स्वतन्त्रं हैकाथन-प्रारूपम्। भारतसर्वकारस्य आधिकारिकसेवा नास्ति।",
  },
  ks: {
    heroLine1: "تُہند سوال۔",
    heroLine2: "زانُن چھُ تُہند حق۔",
    heroIntro:
      "کانہہ تہِ فونہٕ پٮ۪ٹھ سادٕ زبانہٕ منز مرکزی سرکارس نِش معلومات پریژھیو۔",
    start: "RTI درخواست دِیو",
    track: "درخواستچ حالت وُچھِو",
    startSub: "سرکاری معلومات پریژھیو",
    trackSub: "جواب یا ادایگی وُچھِو",
    appeal: "گۄڈنِچ اپیل کٔریو",
    appealSub: "۳۰ دۄہن منز جواب نہٕ مِلیو",
    navHow: "یہِ کِتھ پٲٹھۍ چھُ چلان",
    navAsk: "بہٕ کیاہ پُرٛژھِتھ ہیکہٕ؟",
    lowData: "کم ڈیٹا پٮ۪ٹھ چھُ چلان",
    languages: "۲۲ ہندوستانی زبانہٕ",
    offline: "آفلاین مسودٕ",
    prototype: "آزاد ہیکاتھون نمونہٕ۔ یہِ چھُنہٕ بھارت سرکارچ سرکاری خدمت۔",
  },
  ne: {
    heroLine1: "तपाईंको प्रश्न।",
    heroLine2: "जान्नु तपाईंको अधिकार।",
    heroIntro: "जुनसुकै फोनबाट सरल भाषामा केन्द्र सरकारसँग सूचना माग्नुहोस्।",
    start: "RTI निवेदन दिनुहोस्",
    track: "निवेदन हेर्नुहोस्",
    startSub: "सरकारी सूचना माग्नुहोस्",
    trackSub: "जवाफ वा भुक्तानी स्थिति हेर्नुहोस्",
    appeal: "पहिलो पुनरावेदन दिनुहोस्",
    appealSub: "३० दिनमा जवाफ नआएमा",
    navHow: "यसले कसरी काम गर्छ",
    navAsk: "म के सोध्न सक्छु?",
    lowData: "कम डाटामा चल्छ",
    languages: "२२ भारतीय भाषा",
    offline: "अफलाइन मस्यौदा",
    prototype: "स्वतन्त्र ह्याकाथन नमुना। भारत सरकारको आधिकारिक सेवा होइन।",
  },
  sd: {
    heroLine1: "اوهان جو سوال۔",
    heroLine2: "ڄاڻڻ اوهان جو حق۔",
    heroIntro: "ڪنهن به فون تان سادي ٻوليءَ ۾ مرڪزي سرڪار کان معلومات گهرو۔",
    start: "RTI درخواست ڏيو",
    track: "درخواست ڏسو",
    startSub: "سرڪاري معلومات گهرو",
    trackSub: "جواب يا ادائيگي ڏسو",
    appeal: "پهرين اپيل ڏيو",
    appealSub: "30 ڏينهن ۾ جواب نه ملي ته",
    navHow: "هي ڪيئن ڪم ڪري ٿو",
    navAsk: "مان ڇا پڇي سگهان ٿو؟",
    lowData: "گهٽ ڊيٽا تي هلي ٿو",
    languages: "22 ڀارتي ٻوليون",
    offline: "آف لائن مسودو",
    prototype: "آزاد هيڪاٿون نمونو۔ ڀارت سرڪار جي سرڪاري خدمت ناهي۔",
  },
  kok: {
    heroLine1: "तुमचो प्रस्न।",
    heroLine2: "जाणप तुमचो अधिकार।",
    heroIntro: "खंयच्याय फोनांतल्यान सोप्या भाशेन केंद्र सरकाराक माहिती मागात।",
    start: "RTI अर्ज करात",
    track: "अर्जाची स्थिती पळयात",
    startSub: "सरकारी माहिती मागात",
    trackSub: "जाप वा पैशांची स्थिती पळयात",
    appeal: "पयली अपील करात",
    appealSub: "३० दिसांनी जाप मेळना जाल्यार",
    navHow: "हें कशें चलता",
    navAsk: "हांव कितें विचारूं येता?",
    lowData: "उण्या डेटाचेर चलता",
    languages: "२२ भारतीय भासो",
    offline: "ऑफलाइन मसुदो",
    prototype: "स्वतंत्र हॅकाथॉन नमुनो। भारत सरकाराची अधिकृत सेवा न्हय।",
  },
  mni: {
    heroLine1: "নহাক্কী ৱাহং।",
    heroLine2: "খঙবা নহাক্কী হক।",
    heroIntro:
      "ফোন অমত্তগী লায়না লৈবা লোনদা কেন্দ্র সরকারদগী ঈ-পাউ হংজিনবিয়ু।",
    start: "RTI দরখাস্ত তৌবিয়ু",
    track: "দরখাস্তকী ফিভম য়েংবিয়ু",
    startSub: "সরকারগী ঈ-পাউ হংবিয়ু",
    trackSub: "পাউখুম নত্রগা শেল পীবগী ফিভম য়েংবিয়ু",
    appeal: "অহানবা আপীল তৌবিয়ু",
    appealSub: "নুমিৎ ৩০ দা পাউখুম ফংদ্রবদি",
    navHow: "মসি করম্না থবক তৌই",
    navAsk: "ঐনা করি হংবা য়াই?",
    lowData: "দাতা তেনা থবক তৌই",
    languages: "ভারতকী লোন ২২",
    offline: "অফলাইন দরখাস্ত",
    prototype:
      "মসী হেকাথোন প্রোটোটাইপ অমনি। ভারত সরকারগী অফিসিয়েল সার্ভিস নত্তে।",
  },
  brx: {
    heroLine1: "नोंथांनि सोंलु।",
    heroLine2: "मोननो नोंथांनि मोनथाय।",
    heroIntro:
      "जायखिजाया फननिफ्राय गोरलै रावजों भारत सरकारनिफ्राय फोरमायथिहोग्रा बिथोन सों।",
    start: "RTI आरजलाय हो",
    track: "आरजलायनि थासारि नाय",
    startSub: "सरकारि फोरमायथिहोग्रा सों",
    trackSub: "फिननाय एबा रां होनाय नाय",
    appeal: "गिबि आरजलाय हो",
    appealSub: "३० साननि गेजेराव फिननाय मोनाब्ला",
    navHow: "बेयो माबोरै खामानि मावो",
    navAsk: "आं मा सोंनो हायो?",
    lowData: "खम डाटायाव खामानि मावो",
    languages: "२२ भारतारि राव",
    offline: "अफलाइन खस्रा",
    prototype: "उदां हेकाथन नमुना। भारत सरकारनि अफिसियेल सिबिथाय नङा।",
  },
  doi: {
    heroLine1: "तुंदा सवाल।",
    heroLine2: "जानना तुंदा हक ऐ।",
    heroIntro: "कुसै बी फोन थमां सादी भाशा च केंद्र सरकार कोला जानकारी मंगो।",
    start: "RTI दरखास्त देओ",
    track: "दरखास्त दी स्थिति दिक्खो",
    startSub: "सरकारी जानकारी मंगो",
    trackSub: "जवाब जां भुगतान दिक्खो",
    appeal: "पैह्ली अपील करो",
    appealSub: "३० दिनें च जवाब नेईं मिले तां",
    navHow: "एह् कि'यां कम्म करदा ऐ",
    navAsk: "में केह् पुच्छी सकनां?",
    lowData: "घट्ट डेटा पर चलदा ऐ",
    languages: "२२ भारती भाशां",
    offline: "ऑफलाइन मसौदा",
    prototype: "आजाद हैकाथन नमूना। भारत सरकार दी सरकारी सेवा नेईं।",
  },
  sat: {
    heroLine1: "ᱟᱢᱟᱜ ᱠᱩᱠᱞᱤ।",
    heroLine2: "ᱵᱟᱰᱟᱭ ᱟᱢᱟᱜ ᱦᱚᱠ।",
    heroIntro:
      "ᱡᱟᱦᱟᱱ ᱯᱷᱳᱱ ᱠᱷᱚᱱ ᱟᱞᱜᱟ ᱯᱟᱹᱨᱥᱤᱛᱮ ᱠᱮᱱᱫᱨᱚ ᱥᱚᱨᱠᱟᱨ ᱴᱷᱮᱱ ᱞᱟᱹᱭ ᱠᱚᱡᱚᱜ ᱢᱮ।",
    start: "RTI ᱟᱨᱡᱤ ᱮᱢ ᱢᱮ",
    track: "ᱟᱨᱡᱤ ᱚᱵᱚᱥᱛᱟ ᱧᱮᱞ ᱢᱮ",
    startSub: "ᱥᱚᱨᱠᱟᱨᱤ ᱞᱟᱹᱭ ᱠᱚᱡᱚᱜ ᱢᱮ",
    trackSub: "ᱛᱮᱞᱟ ᱟᱨ ᱯᱟᱭᱢᱮᱱᱴ ᱧᱮᱞ ᱢᱮ",
    appeal: "ᱯᱩᱭᱞᱩ ᱟᱯᱤᱞ ᱮᱢ ᱢᱮ",
    appealSub: "৩০ ᱢᱟᱦᱟ ᱨᱮ ᱛᱮᱞᱟ ᱵᱟᱢ ᱧᱟᱢ ᱞᱮᱱᱠᱷᱟᱱ",
    navHow: "ᱱᱚᱣᱟ ᱪᱮᱞᱠᱟ ᱠᱟᱹᱢᱤᱭᱟ",
    navAsk: "ᱤᱧ ᱪᱮᱫ ᱠᱩᱠᱞᱤ ᱫᱟᱲᱮᱭᱟ?",
    lowData: "ᱠᱚᱢ ᱰᱟᱴᱟ ᱨᱮ ᱪᱟᱞᱟᱜ-ᱟ",
    languages: "২২ ᱵᱷᱟᱨᱚᱛᱤᱭᱟᱹ ᱯᱟᱹᱨᱥᱤ",
    offline: "ᱚᱯᱷᱞᱟᱭᱤᱱ ᱠᱷᱚᱥᱨᱟ",
    prototype: "ᱱᱚᱣᱟ ᱢᱤᱫ ᱦᱮᱠᱟᱛᱷᱚᱱ ᱱᱟᱢᱩᱱᱟ। ᱵᱷᱟᱨᱚᱛ ᱥᱚᱨᱠᱟᱨᱟᱜ ᱚᱯᱷᱤᱥᱤᱭᱟᱞ ᱥᱮᱵᱟ ᱵᱟᱝ।",
  },
};
const defaultCopy = Object.fromEntries(
  $$("[data-i18n]").map((el) => [el.dataset.i18n, el.textContent.trim()]),
);
let currentStep = 1,
  lastFocus = null;
const requestModal = $("#requestModal"),
  trackModal = $("#trackModal"),
  casesModal = $("#casesModal"),
  stateModal = $("#stateModal"),
  form = $("#requestForm");
const stateNames = [
  "Andaman and Nicobar Islands", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chandigarh",
  "Chhattisgarh", "Dadra and Nagar Haveli and Daman and Diu", "Delhi", "Goa", "Gujarat", "Haryana",
  "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka", "Kerala", "Ladakh", "Lakshadweep",
  "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Puducherry",
  "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
];
const localAuthorities = [
  "Ministry of Railways", "Ministry of Education", "Ministry of Health and Family Welfare",
  "Ministry of Rural Development", "Department of Posts", "Employees' Provident Fund Organisation",
  "Ministry of Agriculture and Farmers Welfare", "Unique Identification Authority of India",
  "Election Commission of India", "Central Information Commission",
];
function applyLanguage(lang) {
  const dict = translations[lang] || translations.en;
  document.documentElement.lang = lang;
  document.documentElement.dir =
    lang === "ur" || lang === "ks" || lang === "sd" ? "rtl" : "ltr";
  $$("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    const val = dict[key] || defaultCopy[key];
    if (val) el.textContent = val;
  });
  localStorage.setItem("rti-language", lang);
  updateAssistantLanguage(lang);
}
function openModal(modal) {
  lastFocus = document.activeElement;
  modal.hidden = false;
  document.body.style.overflow = "hidden";
  setTimeout(() => $(".close-button", modal)?.focus(), 0);
}
function closeModal(modal) {
  modal.hidden = true;
  document.body.style.overflow = "";
  lastFocus?.focus();
}
function updateStep(n) {
  currentStep = n;
  $$(".form-step").forEach((x) => (x.hidden = +x.dataset.step !== n));
  $("#stateNotice").hidden = true;
  $("#backButton").hidden = n === 1;
  $("#nextButton").hidden = n === 4;
  $("#submitButton").hidden = n !== 4;
  $("#progressText").textContent = `Step ${n} of 4`;
  $("#progressPercent").textContent = `${n * 25}%`;
  $("#progressFill").style.width = `${n * 25}%`;
  if (n === 4) buildReview();
}
function saveDraft() {
  const fd = new FormData(form),
    data = {};
  for (const [k, v] of fd) if (typeof v === "string") data[k] = v;
  localStorage.setItem("rti-saathi-draft", JSON.stringify(data));
  $("#autosaveText").style.opacity = "1";
  setTimeout(() => ($("#autosaveText").style.opacity = ".55"), 900);
}
function loadDraft() {
  try {
    const d = JSON.parse(localStorage.getItem("rti-saathi-draft"));
    if (!d) return;
    Object.entries(d).forEach(([k, v]) => {
      const el = form.elements[k];
      if (!el) return;
      if (el instanceof RadioNodeList) {
        const r = $(`[name="${k}"][value="${v}"]`);
        if (r) r.checked = true;
      } else el.value = v;
    });
    $("#charCount").textContent = $("#question").value.length;
  } catch {}
}
function validateStep() {
  const area = $(`.form-step[data-step="${currentStep}"]`);
  const required = $$("[required]", area);
  for (const el of required) {
    if (el.type === "radio") {
      if (!$(`[name="${el.name}"]:checked`, area)) {
        el.focus();
        return false;
      }
    } else if (!el.value.trim()) {
      el.focus();
      el.reportValidity();
      return false;
    }
  }
  return true;
}
function buildReview() {
  const data = new FormData(form);
  const items = [
    ["Route", data.get("level")],
    ["Topic", data.get("topic")],
    ["Department", data.get("authority") || "Not specified"],
    ["Question", data.get("question")],
  ];
  $("#reviewList").innerHTML = items
    .map(
      ([a, b]) =>
        `<div><dt>${a}</dt><dd>${String(b || "").replace(/[<>]/g, "")}</dd></div>`,
    )
    .join("");
}
function safeText(value) {
  return String(value || "").replace(/[<>]/g, "");
}
function readCases() {
  try {
    return JSON.parse(localStorage.getItem("rti-saathi-cases")) || [];
  } catch {
    return [];
  }
}
function saveCase(reference) {
  const fd = new FormData(form);
  const cases = readCases();
  cases.unshift({
    reference,
    createdAt: new Date().toISOString(),
    topic: safeText(fd.get("topic")),
    authority: safeText(fd.get("authority")) || "Authority not selected",
    question: safeText(fd.get("question")).slice(0, 3000),
    status: "Draft prepared",
  });
  localStorage.setItem("rti-saathi-cases", JSON.stringify(cases.slice(0, 20)));
}
function renderCases() {
  const cases = readCases();
  $("#caseList").innerHTML = cases.length
    ? cases.map((item) => `<article class="case-item"><div><span>${safeText(item.status)}</span><time>${new Date(item.createdAt).toLocaleDateString()}</time></div><strong>${safeText(item.reference)}</strong><b>${safeText(item.topic)}</b><p>${safeText(item.question)}</p><small>${safeText(item.authority)}</small></article>`).join("")
    : '<div class="empty-state"><span>⌁</span><b>No saved requests yet</b><p>Prepare an RTI and it will appear here on this device.</p></div>';
  $("#clearCases").hidden = cases.length === 0;
}
function localAnalysis(text) {
  let score = 25;
  const tips = [];
  if (text.length >= 80) score += 15; else tips.push("Add enough detail to identify the record you need.");
  if (/\b(19|20)\d{2}\b|\b(from|between|dated|period|month|year)\b/i.test(text)) score += 20; else tips.push("Add a date or date range.");
  if (/\b(copy|copies|record|register|report|order|file|minutes|list|status|amount|sanctioned|spent)\b/i.test(text)) score += 20; else tips.push("Ask for an existing record, report, list, order or status.");
  if (/\b(why|opinion|explain|justify)\b/i.test(text)) { score -= 15; tips.push("Replace opinion questions with a request for records or action taken."); } else score += 10;
  if (/\b(village|district|office|division|department|scheme|complaint|application)\b/i.test(text)) score += 10; else tips.push("Name the place, office, scheme or application involved.");
  score = Math.max(0, Math.min(100, score));
  if (tips.length === 0)
    tips.push("Clear and record-focused. Review names, dates and spellings before filing.");
  return { score, grade: score >= 80 ? "Ready to review" : score >= 55 ? "Almost clear" : "Needs detail", tips: tips.slice(0, 4) };
}
function showAnalysis(result) {
  $("#qualityMeter").hidden = false;
  $("#qualityLabel").textContent = result.grade;
  $("#qualityScore").textContent = `${result.score}/100`;
  $("#qualityFill").style.width = `${result.score}%`;
  $("#qualityTips").innerHTML = result.tips.map((tip) => `<li>${safeText(tip)}</li>`).join("");
}
async function analyzeDraft(text) {
  const fallback = localAnalysis(text);
  if (!window.fetch || !navigator.onLine) return fallback;
  try {
    const response = await fetch("/api/analyze", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ text }) });
    return response.ok ? await response.json() : fallback;
  } catch {
    return fallback;
  }
}
async function findAuthorities(query) {
  const level = $('[name="level"]:checked')?.value || "central";
  if (level === "state") return [];
  if (window.fetch && navigator.onLine) {
    try {
      const response = await fetch(`/api/authorities?q=${encodeURIComponent(query)}&level=central`);
      if (response.ok) return (await response.json()).matches;
    } catch {}
  }
  const lower = query.toLowerCase();
  return localAuthorities.filter((name) => name.toLowerCase().includes(lower)).slice(0, 6).map((name) => ({ name }));
}
function renderAuthorities(matches) {
  const box = $("#authorityResults");
  box.hidden = matches.length === 0;
  box.innerHTML = matches.map((item) => `<button type="button" data-authority="${safeText(item.name)}"><b>${safeText(item.name)}</b><small>Central public authority suggestion</small></button>`).join("");
}
function downloadFilingPack() {
  const latest = readCases()[0];
  if (!latest) return;
  const content = `RTI SAATHI — FILING PREPARATION PACK\nIndependent hackathon prototype — not proof of government submission\n\nDemo reference: ${latest.reference}\nPrepared: ${new Date(latest.createdAt).toLocaleString()}\nTopic: ${latest.topic}\nSuggested authority: ${latest.authority}\n\nINFORMATION REQUESTED\n${latest.question}\n\nNEXT STEPS\n1. Confirm whether this is a Central or State authority.\n2. Copy this request into the correct official portal.\n3. Save the official government registration number separately.\n\nCentral portal: https://rtionline.gov.in/\nState directory: https://rti.dopt.gov.in/rtistatelink.php\n`;
  const url = URL.createObjectURL(new Blob([content], { type: "text/plain;charset=utf-8" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = `${latest.reference}-filing-pack.txt`;
  link.click();
  URL.revokeObjectURL(url);
}
$$('[data-action="start"]').forEach((b) =>
  b.addEventListener("click", () => {
    updateStep(1);
    openModal(requestModal);
  }),
);
$$('[data-action="track"]').forEach((b) =>
  b.addEventListener("click", () => openModal(trackModal)),
);
$$('[data-action="cases"]').forEach((b) =>
  b.addEventListener("click", () => { renderCases(); openModal(casesModal); }),
);
$$('[data-action="state-directory"]').forEach((b) =>
  b.addEventListener("click", () => openModal(stateModal)),
);
$$('[data-action="close-modal"]').forEach((b) =>
  b.addEventListener("click", () => closeModal(requestModal)),
);
$$('[data-action="close-track"]').forEach((b) =>
  b.addEventListener("click", () => closeModal(trackModal)),
);
$$('[data-action="close-cases"]').forEach((b) => b.addEventListener("click", () => closeModal(casesModal)));
$$('[data-action="close-state"]').forEach((b) => b.addEventListener("click", () => closeModal(stateModal)));
$("#nextButton").addEventListener("click", () => {
  if (!validateStep()) return;
  const level = $('[name="level"]:checked')?.value;
  if (currentStep === 1 && level === "state") {
    $("#stateNotice").hidden = false;
    $("#stateNotice").scrollIntoView({ behavior: "smooth", block: "nearest" });
    saveDraft();
    return;
  }
  saveDraft();
  updateStep(Math.min(4, currentStep + 1));
});
$("#backButton").addEventListener("click", () =>
  updateStep(Math.max(1, currentStep - 1)),
);
form.addEventListener("input", (e) => {
  if (e.target.id === "question")
    $("#charCount").textContent = e.target.value.length;
  clearTimeout(window._saveTimer);
  window._saveTimer = setTimeout(saveDraft, 350);
});
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!validateStep()) return;
  $("#requestForm").hidden = true;
  $(".progress-wrap", requestModal).hidden = true;
  $("#successState").hidden = false;
  $("#demoReference").textContent =
    `RTI-DEMO-${new Date().getFullYear()}-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
  saveCase($("#demoReference").textContent);
  localStorage.removeItem("rti-saathi-draft");
});
$("#promptButton").addEventListener("click", async () => {
  const text = $("#question").value.trim();
  const box = $("#promptResult");
  box.hidden = false;
  box.textContent = text ? "Checking clarity…" : "Start with: “Please provide a certified copy of…” Then add the place, date range, and specific record you need.";
  if (text) {
    const result = await analyzeDraft(text);
    box.textContent = `${result.grade}: ${result.tips[0]}`;
    showAnalysis(result);
  }
});
$("#authority").addEventListener("input", (event) => {
  clearTimeout(window._authorityTimer);
  const query = event.target.value.trim();
  if (query.length < 2) return renderAuthorities([]);
  window._authorityTimer = setTimeout(async () => renderAuthorities(await findAuthorities(query)), 220);
});
$("#authorityResults").addEventListener("click", (event) => {
  const button = event.target.closest("[data-authority]");
  if (!button) return;
  $("#authority").value = button.dataset.authority;
  renderAuthorities([]);
  saveDraft();
});
$("#downloadPack").addEventListener("click", downloadFilingPack);
$("#clearCases").addEventListener("click", () => { localStorage.removeItem("rti-saathi-cases"); renderCases(); });
$("#stateSelect").innerHTML += stateNames.map((name) => `<option value="${name}">${name}</option>`).join("");
$("#stateSelect").addEventListener("change", (event) => {
  $("#stateResult").hidden = !event.target.value;
  $("#stateResult").innerHTML = event.target.value ? `<b>${safeText(event.target.value)}</b><p>Use the official DoPT directory to open the current portal for this State or Union Territory.</p>` : "";
});
$("#supportingFile").addEventListener("change", (e) => {
  const f = e.target.files[0];
  if (f && f.size > 1048576) {
    alert("Please choose a file smaller than 1 MB.");
    e.target.value = "";
  }
});
$("#languageSelect").addEventListener("change", (e) =>
  chooseLanguage(e.target.value),
);
function chooseLanguage(lang) {
  $("#languageSelect").value = lang;
  applyLanguage(lang);
  localStorage.setItem("rti-language-onboarded-v2", "1");
  setLanguageGate(false);
}
function setLanguageGate(open) {
  $("#languageGate").hidden = !open;
  $(".site-header").inert = open;
  $("#main").inert = open;
  document.querySelector("body > footer").inert = open;
  document.body.style.overflow = open ? "hidden" : "";
}
$$("[data-lang]").forEach((button) =>
  button.addEventListener("click", () => chooseLanguage(button.dataset.lang)),
);
$("#hearLanguages").addEventListener("click", () => {
  if (!("speechSynthesis" in window)) return;
  speechSynthesis.cancel();
  const message = new SpeechSynthesisUtterance(
    "अपनी भाषा चुनें। Choose the language you read best.",
  );
  message.lang = "hi-IN";
  speechSynthesis.speak(message);
});
$("#menuButton").addEventListener("click", (e) => {
  const open = e.currentTarget.getAttribute("aria-expanded") === "true";
  e.currentTarget.setAttribute("aria-expanded", String(!open));
  $("#mobileMenu").hidden = open;
});
$("#mobileMenu").addEventListener("click", () => {
  $("#mobileMenu").hidden = true;
  $("#menuButton").setAttribute("aria-expanded", "false");
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if (!requestModal.hidden) closeModal(requestModal);
    if (!trackModal.hidden) closeModal(trackModal);
    if (!casesModal.hidden) closeModal(casesModal);
    if (!stateModal.hidden) closeModal(stateModal);
  }
});
function networkState() {
  const offline = !navigator.onLine;
  $("#offlineToast").hidden = !offline;
  document.body.classList.toggle("is-offline", offline);
}
addEventListener("online", networkState);
addEventListener("offline", networkState);
networkState();
if (window.fetch) {
  fetch("/api/health")
    .then((response) => response.ok ? response.json() : Promise.reject())
    .then(() => { $("#systemStatus").classList.add("is-ready"); $("#systemStatus span").textContent = "Helper services ready · requests are not stored"; })
    .catch(() => { $("#systemStatus span").textContent = "Offline helper ready · core drafting still works"; });
} else {
  $("#systemStatus span").textContent = "Offline helper ready · core drafting still works";
}
const assistantLocales = {
  en:["English","en-IN"],hi:["हिन्दी","hi-IN"],bn:["বাংলা","bn-IN"],ta:["தமிழ்","ta-IN"],te:["తెలుగు","te-IN"],mr:["मराठी","mr-IN"],gu:["ગુજરાતી","gu-IN"],kn:["ಕನ್ನಡ","kn-IN"],ml:["മലയാളം","ml-IN"],pa:["ਪੰਜਾਬੀ","pa-IN"],ur:["اردو","ur-IN"],or:["ଓଡ଼ିଆ","or-IN"],as:["অসমীয়া","as-IN"],sa:["संस्कृतम्","sa-IN"],ks:["کٲشُر","ks-IN"],ne:["नेपाली","ne-NP"],sd:["سنڌي","sd-IN"],kok:["कोंकणी","kok-IN"],mni:["মৈতৈলোন্","mni-IN"],brx:["बड़ो","brx-IN"],doi:["डोगरी","doi-IN"],sat:["ᱥᱟᱱᱛᱟᱲᱤ","sat-IN"]
};
const assistantCopy = {
  en:["Ask RTI Saathi","Ask in your language…","Send","I can help you frame an RTI question, find the right authority, or understand the next step.","Which authority?","Improve my question","Central or State?","Text and voice"],
  hi:["RTI साथी से पूछें","अपनी भाषा में पूछें…","भेजें","मैं RTI सवाल लिखने, सही विभाग चुनने और अगला कदम समझने में मदद कर सकता हूँ।","कौन सा विभाग?","मेरा सवाल सुधारें","केंद्र या राज्य?","लिखें या बोलें"],
  bn:["RTI সাথীকে জিজ্ঞাসা করুন","নিজের ভাষায় জিজ্ঞাসা করুন…","পাঠান","আমি RTI প্রশ্ন লিখতে, সঠিক দপ্তর খুঁজতে এবং পরের ধাপ বুঝতে সাহায্য করি।","কোন দপ্তর?","প্রশ্নটি উন্নত করুন","কেন্দ্র না রাজ্য?","লিখুন বা বলুন"],
  ta:["RTI சாத்தியிடம் கேளுங்கள்","உங்கள் மொழியில் கேளுங்கள்…","அனுப்பு","RTI கேள்வியை எழுதவும் சரியான துறையைக் கண்டறியவும் நான் உதவுவேன்.","எந்தத் துறை?","கேள்வியை மேம்படுத்து","மத்தியா மாநிலமா?","எழுதவும் பேசவும்"],
  te:["RTI సాథిని అడగండి","మీ భాషలో అడగండి…","పంపండి","RTI ప్రశ్న రాయడం, సరైన శాఖను కనుగొనడం, తదుపరి దశను అర్థం చేసుకోవడంలో సహాయం చేస్తాను.","ఏ శాఖ?","నా ప్రశ్నను మెరుగుపరచు","కేంద్రమా రాష్ట్రమా?","రాయండి లేదా మాట్లాడండి"],
  mr:["RTI साथीला विचारा","तुमच्या भाषेत विचारा…","पाठवा","RTI प्रश्न लिहिणे, योग्य विभाग शोधणे आणि पुढील पाऊल समजणे यासाठी मी मदत करतो.","कोणता विभाग?","माझा प्रश्न सुधारा","केंद्र की राज्य?","लिहा किंवा बोला"]
};
let assistantMessages = [], assistantConfigured = false, assistantSpeaking = true, assistantLanguage = null, mediaRecorder, audioChunks = [], recordingTimer;
function assistantText(lang = localStorage.getItem("rti-language") || "en") { return assistantCopy[lang] || assistantCopy.en; }
function updateAssistantLanguage(lang) {
  if (!$("#saathiAssistant")) return;
  if (assistantLanguage && assistantLanguage !== lang) {
    assistantMessages = [];
    $("#saathiMessages").replaceChildren();
    if ("speechSynthesis" in window) speechSynthesis.cancel();
  }
  assistantLanguage = lang;
  const copy = assistantText(lang), locale = assistantLocales[lang] || assistantLocales.en;
  $("#saathiTitle").textContent = copy[0];
  $("#saathiLauncherLabel").textContent = copy[0].replace("RTI ", "");
  $("#saathiInput").placeholder = copy[1];
  $("#saathiSend").textContent = copy[2];
  $("#saathiLanguage").textContent = `${locale[0]} · ${copy[7]}`;
  $("#saathiPrompts").innerHTML = copy.slice(4,7).map((x) => `<button type="button">${safeText(x)}</button>`).join("");
  if (!assistantMessages.length) addAssistantMessage("assistant", copy[3], false);
}
function addAssistantMessage(role, text, speak = true) {
  assistantMessages.push({ role, content: String(text).slice(0, 1600) });
  assistantMessages = assistantMessages.slice(-10);
  const item = document.createElement("div");
  item.className = `saathi-message saathi-message--${role}`;
  item.textContent = text;
  $("#saathiMessages").append(item);
  item.scrollIntoView?.({ block:"end" });
  if (role === "assistant" && speak && assistantSpeaking) speakAnswer(text);
}
function setAssistantStatus(text, state = "") {
  $("#saathiStatus span").textContent = text;
  $("#saathiStatus").className = `saathi-status ${state}`.trim();
}
async function getMatchingVoice(locale) {
  const find = () => {
    const voices = speechSynthesis.getVoices();
    return voices.find((v) => v.lang.toLowerCase() === locale.toLowerCase()) ||
      voices.find((v) => v.lang.toLowerCase().startsWith(`${locale.slice(0,2).toLowerCase()}-`));
  };
  let voice = find();
  if (voice) return voice;
  await new Promise((resolve) => {
    const done = () => { speechSynthesis.removeEventListener?.("voiceschanged", done); resolve(); };
    speechSynthesis.addEventListener?.("voiceschanged", done, { once:true });
    setTimeout(done, 900);
  });
  return find();
}
async function speakAnswer(text) {
  if (!("speechSynthesis" in window)) return setAssistantStatus("Text answer ready · no device voice found", "is-warning");
  speechSynthesis.cancel();
  const lang = localStorage.getItem("rti-language") || "en", locale = (assistantLocales[lang] || assistantLocales.en)[1];
  const spokenText = String(text)
    .replace(/https?:\/\/\S+/gi, "")
    .replace(/[*_#`>]/g, "")
    .replace(/^\s*(?:[-•]|\d+[.)])\s+/gm, "")
    .replace(/\s+/g, " ")
    .trim();
  if (!spokenText) return;
  const utterance = new SpeechSynthesisUtterance(spokenText); utterance.lang = locale;
  const voice = await getMatchingVoice(locale);
  if (!voice) return setAssistantStatus(`Answer ready · ${assistantLocales[lang][0]} voice is not installed on this device`, "is-warning");
  if (lang !== (localStorage.getItem("rti-language") || "en")) return;
  utterance.voice = voice;
  utterance.rate = 0.95;
  utterance.onerror = () => setAssistantStatus("The device could not play this voice. The answer is still available as text.", "is-warning");
  speechSynthesis.speak(utterance);
}
function localAssistantReply(question) {
  const q = question.toLowerCase(), lang = localStorage.getItem("rti-language") || "en";
  if (lang === "hi") {
    if (/पंचायत|नगरपालिका|पुलिस|राज्य/.test(q)) return "यह आमतौर पर राज्य या स्थानीय प्राधिकरण का विषय है। अपना राज्य RTI पोर्टल चुनें और रिकॉर्ड, स्थान तथा समय अवधि साफ़ लिखें।";
    return "अच्छा RTI सवाल रिकॉर्ड माँगता है: ‘कृपया [रिकॉर्ड] की प्रमाणित प्रति [तारीख] से [तारीख] तक उपलब्ध कराएँ।’ ऑनलाइन AI अभी उपलब्ध नहीं है, लेकिन आप लिखना जारी रख सकते हैं।";
  }
  return /panchayat|municipal|local police|state/.test(q) ? "This is usually a State or local authority matter. Choose your State RTI portal and name the record, place, and date range." : "A strong RTI asks for an existing record: “Please provide a certified copy of [record] for [place] from [start date] to [end date].” Online AI is unavailable, but you can keep drafting.";
}
async function askAssistant(question) {
  addAssistantMessage("user", question, false); setAssistantStatus("Preparing a short answer…", "is-working");
  $("#saathiSend").disabled = true;
  try {
    const response = await fetch("/api/chat", { method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify({ language:localStorage.getItem("rti-language") || "en", messages:assistantMessages.slice(-8) }) });
    if (!response.ok) throw new Error(String(response.status));
    const data = await response.json(); addAssistantMessage("assistant", data.answer); setAssistantStatus("Groq assistant ready", "is-ready");
  } catch { addAssistantMessage("assistant", localAssistantReply(question)); setAssistantStatus("Low-data guidance · reconnect for AI", "is-warning"); }
  finally { $("#saathiSend").disabled = false; $("#saathiInput").focus(); }
}
async function blobToDataUrl(blob) { return new Promise((resolve,reject) => { const r = new FileReader(); r.onload=()=>resolve(r.result); r.onerror=reject; r.readAsDataURL(blob); }); }
async function transcribeAudio(blob) {
  if (blob.size > 2_000_000) throw new Error("Audio is too long. Please try a shorter question.");
  setAssistantStatus("Turning speech into text…", "is-working");
  const response = await fetch("/api/transcribe", { method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify({ audio:await blobToDataUrl(blob), mimeType:blob.type, language:localStorage.getItem("rti-language") || "en" }) });
  if (!response.ok) throw new Error("Voice transcription needs the online assistant.");
  const data = await response.json();
  const question = String(data.text || "").trim();
  if (!question) throw new Error("I could not hear a clear question. Please try again.");
  $("#saathiInput").value = "";
  setAssistantStatus("Question heard · preparing your answer…", "is-working");
  await askAssistant(question);
}
async function toggleRecording() {
  if (mediaRecorder?.state === "recording") return mediaRecorder.stop();
  if (!navigator.mediaDevices?.getUserMedia || !("MediaRecorder" in window)) return setAssistantStatus("Voice recording is not supported here. Please type your question.", "is-warning");
  try {
    const stream = await navigator.mediaDevices.getUserMedia({audio:true}); audioChunks=[];
    mediaRecorder = new MediaRecorder(stream, { mimeType:MediaRecorder.isTypeSupported("audio/webm;codecs=opus") ? "audio/webm;codecs=opus" : "audio/webm" });
    mediaRecorder.ondataavailable=(e)=>{ if(e.data.size) audioChunks.push(e.data); };
    mediaRecorder.onstop=async()=>{ clearTimeout(recordingTimer); $("#saathiMic").classList.remove("is-recording"); stream.getTracks().forEach(t=>t.stop()); try { await transcribeAudio(new Blob(audioChunks,{type:mediaRecorder.mimeType})); } catch(e) { setAssistantStatus(e.message,"is-warning"); } };
    mediaRecorder.start(); $("#saathiMic").classList.add("is-recording"); setAssistantStatus("Listening… tap the microphone to stop", "is-recording"); recordingTimer=setTimeout(()=>mediaRecorder?.state==="recording"&&mediaRecorder.stop(),30000);
  } catch { setAssistantStatus("Microphone permission was not granted. You can type instead.","is-warning"); }
}
function setAssistantOpen(open) { $("#saathiAssistant").hidden=!open; $("#saathiLauncher").setAttribute("aria-expanded",String(open)); if(open) setTimeout(()=>$("#saathiInput").focus(),0); }
$("#saathiLauncher").addEventListener("click",()=>setAssistantOpen($("#saathiAssistant").hidden));
$("#saathiClose").addEventListener("click",()=>setAssistantOpen(false));
$("#saathiForm").addEventListener("submit",(e)=>{ e.preventDefault(); const q=$("#saathiInput").value.trim(); if(q){ $("#saathiInput").value=""; askAssistant(q); } });
$("#saathiPrompts").addEventListener("click",(e)=>{ if(e.target.matches("button")){ $("#saathiInput").value=e.target.textContent; askAssistant(e.target.textContent); } });
$("#saathiMic").addEventListener("click",toggleRecording);
$("#saathiSpeak").addEventListener("click",(e)=>{ assistantSpeaking=!assistantSpeaking; e.currentTarget.setAttribute("aria-pressed",String(assistantSpeaking)); if(!assistantSpeaking && "speechSynthesis" in window) speechSynthesis.cancel(); });
if (window.fetch) fetch("/api/health").then(r=>r.json()).then(data=>{ assistantConfigured=Boolean(data.aiConfigured); setAssistantStatus(assistantConfigured ? "Groq assistant ready · device voice" : "Low-data guidance · add Groq key for AI", assistantConfigured?"is-ready":"is-warning"); }).catch(()=>setAssistantStatus("Offline guidance ready","is-warning"));

const savedLang = localStorage.getItem("rti-language") || "en";
$("#languageSelect").value = savedLang;
applyLanguage(savedLang);
if (localStorage.getItem("rti-language-onboarded-v2") === "1") {
  setLanguageGate(false);
} else {
  setLanguageGate(true);
  setTimeout(() => $('[data-lang="hi"]')?.focus(), 0);
}
loadDraft();
if (navigator.connection?.saveData)
  document.documentElement.classList.add("data-saver");
if ("serviceWorker" in navigator)
  addEventListener("load", () =>
    navigator.serviceWorker.register("/sw.js").catch(() => {}),
  );
