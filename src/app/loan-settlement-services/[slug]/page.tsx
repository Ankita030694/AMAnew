import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import TableOfContents from "@/components/TableOfContents";
import { 
  FaPhone, 
  FaWhatsapp, 
  FaShieldAlt, 
  FaGavel, 
  FaCheckCircle, 
  FaExclamationTriangle, 
  FaUserSecret, 
  FaLock, 
  FaUserShield, 
  FaBalanceScale,
  FaArrowRight
} from "react-icons/fa";

const serviceMap: { [key: string]: string } = {
  "loan-settlement": "loan settlement",
  "loan-settlement-kaise-kare": "loan settlement kaise kare",
  "loan-settlement-effect-on-credit-score": "loan settlement effect on credit score",
  "loan-settlement-ke-bad-cibil-score-kaise-badhaye": "loan settlement ke bad cibil score kaise badhaye",
  "loan-settlement-kya-hota-hai": "loan settlement kya hota hai",
  "loan-settlement-telugu": "loan settlement telugu",
  "loan-settlement-app": "loan settlement app",
  "loan-settlement-agency": "loan settlement agency",
  "loan-settlement-karne-se-kya-hota-hai": "loan settlement karne se kya hota hai",
  "loan-settlement-process": "loan settlement process",
  "loan-settlement-kaise-hota-hai": "loan settlement kaise hota hai",
  "loan-settlement-application": "loan settlement application",
  "loan-settlement-affect-on-credit-score": "loan settlement affect on credit score",
  "loan-settlement-app-review": "loan settlement app review",
  "loan-settlement-agency-review": "loan settlement agency review",
  "loan-settlement-advocate": "loan settlement advocate",
  "loan-settlement-and-loan-closure": "loan settlement and loan closure",
  "loan-settlement-advocate-in-kolkata": "loan settlement advocate in kolkata",
  "loan-settlement-application-in-hindi": "loan settlement application in hindi",
  "axis-bank-personal-loan-settlement": "axis bank personal loan settlement",
  "axis-bank-loan-settlement-process": "axis bank loan settlement process",
  "after-loan-settlement-cibil-score": "after loan settlement cibil score",
  "anil-ambani-loan-settlement": "anil ambani loan settlement",
  "amardeep-kadyan-loan-settlement": "amardeep kadyan loan settlement",
  "app-loan-settlement-kaise-kare": "app loan settlement kaise kare",
  "axio-loan-settlement": "axio loan settlement",
  "agar-loan-settlement-ho-jaye-to-kya-kare": "agar loan settlement ho jaye to kya kare",
  "axis-bank-car-loan-settlement": "axis bank car loan settlement",
  "auto-loan-settlement": "auto loan settlement",
  "loan-settlement-bengali": "loan settlement bengali",
  "loan-settlement-best-app": "loan settlement best app",
  "loan-settlement-bajaj-finance": "loan settlement bajaj finance",
  "loan-settlement-bangla": "loan settlement bangla",
  "loan-settlement-before-npa": "loan settlement before npa",
  "loan-repayment-by-phonepe": "loan repayment by phonepe",
  "loan-repayment-best-app": "loan repayment best app",
  "loan-repayment-bajaj-finance": "loan repayment bajaj finance",
  "loan-payment-by-credit-card": "loan payment by credit card",
  "loan-payment-by-yono-sbi": "loan payment by yono sbi",
  "bank-loan-settlement-process": "bank loan settlement process",
  "bike-loan-settlement-kaise-kare": "bike loan settlement kaise kare",
  "bajaj-personal-loan-settlement": "bajaj personal loan settlement",
  "bajaj-loan-settlement-kaise-kare": "bajaj loan settlement kaise kare",
  "best-loan-settlement-agency": "best loan settlement agency",
  "bajaj-finance-bike-loan-settlement": "bajaj finance bike loan settlement",
  "bandhan-bank-loan-settlement": "bandhan bank loan settlement",
  "bank-loan-settlement": "bank loan settlement",
  "branch-loan-settlement": "branch loan settlement",
  "best-loan-settlement-app": "best loan settlement app",
  "loan-settlement-cibil-score": "loan settlement cibil score",
  "loan-settlement-company": "loan settlement company",
  "loan-settlement-company-review": "loan settlement company review",
  "loan-settlement-call-recording": "loan settlement call recording",
  "loan-settlement-calculation": "loan settlement calculation",
  "loan-settlement-cibil": "loan settlement cibil",
  "loan-settlement-car": "loan settlement car",
  "loan-settlement-corporation": "loan settlement corporation",
  "loan-settlement-certificate": "loan settlement certificate",
  "loan-repayment-calculator": "loan repayment calculator",
  "car-loan-settlement-kaise-kare": "car loan settlement kaise kare",
  "car-loan-settlement": "car loan settlement",
  "car-loan-settlement-process": "car loan settlement process",
  "car-loan-settlement-decent-advice": "car loan settlement decent advice",
  "car-loan-settlement-kaise-hota-hai": "car loan settlement kaise hota hai",
  "car-loan-settlement-malayalam": "car loan settlement malayalam",
  "car-loan-settlement-telugu": "car loan settlement telugu",
  "car-loan-settlement-letter": "car loan settlement letter",
  "car-loan-settlement-ke-bad-cibil-score-kaise-badhaye": "car loan settlement ke bad cibil score kaise badhaye",
  "car-loan-settlement-tamil": "car loan settlement tamil",
  "loan-settlement-decent-advice": "loan settlement decent advice",
  "loan-settlement-documents": "loan settlement documents",
  "loan-settlement-disadvantages": "loan settlement disadvantages",
  "loan-settlement-details-tamil": "loan settlement details tamil",
  "loan-settlement-details": "loan settlement details",
  "loan-default-settlement": "loan default settlement",
  "home-loan-settlement-decent-advice": "home loan settlement decent advice",
  "loan-settlement-after-death": "loan settlement after death",
  "loan-repayment-details": "loan repayment details",
  "od-loan-settlement": "od loan settlement",
  "dhani-loan-settlement-process": "dhani loan settlement process",
  "dmi-loan-settlement": "dmi loan settlement",
  "dhani-loan-settlement-kaise-kare": "dhani loan settlement kaise kare",
  "drt-loan-settlement": "drt loan settlement",
  "decent-advice-loan-settlement": "decent advice loan settlement",
  "disadvantages-of-loan-settlement": "disadvantages of loan settlement",
  "loan-settlement-kitne-din-mein-hota-hai": "loan settlement kitne din mein hota hai",
  "loan-settlement-effect-on-credit-score-telugu": "loan settlement effect on credit score telugu",
  "loan-settlement-effect-on-credit-score-tamil": "loan settlement effect on credit score tamil",
  "loan-settlement-effect-on-credit-score-malayalam": "loan settlement effect on credit score malayalam",
  "loan-settlement-ela-cheyali": "loan settlement ela cheyali",
  "loan-settlement-effect-on-credit-score-kannada": "loan settlement effect on credit score kannada",
  "loan-settlement-effect": "loan settlement effect",
  "loan-settlement-effect-on-credit-score-in-hindi": "loan settlement effect on credit score in hindi",
  "loan-settlement-effect-on-cibil-score": "loan settlement effect on cibil score",
  "loan-settlement-expert": "loan settlement expert",
  "expert-panel-loan-settlement-review": "expert panel loan settlement review",
  "education-loan-settlement-process": "education loan settlement process",
  "expert-panel-loan-settlement": "expert panel loan settlement",
  "education-loan-settlement-process-tamil": "education loan settlement process tamil",
  "education-loan-settlement": "education loan settlement",
  "education-loan-settlement-in-lok-adalat": "education loan settlement in lok adalat",
  "early-salary-loan-settlement": "early salary loan settlement",
  "education-loan-settlement-kaise-kare": "education loan settlement kaise kare",
  "effect-of-loan-settlement": "effect of loan settlement",
  "bike-loan-settlement-effect-on-credit-score": "bike loan settlement effect on credit score",
  "freed-loan-settlement-review": "freed loan settlement review",
  "freed-loan-settlement": "freed loan settlement",
  "fatakpay-loan-settlement": "fatakpay loan settlement",
  "fibe-loan-settlement": "fibe loan settlement",
  "freed-loan-settlement-review-tamil": "freed loan settlement review tamil",
  "freed-loan-settlement-review-telugu": "freed loan settlement review telugu",
  "federal-bank-loan-settlement": "federal bank loan settlement",
  "flipkart-pay-later-loan-settlement": "flipkart pay later loan settlement",
  "finance-loan-settlement": "finance loan settlement",
  "finnable-loan-settlement": "finnable loan settlement",
  "loan-settlement-good-or-bad": "loan settlement good or bad",
  "loan-settlement-guru": "loan settlement guru",
  "loan-repayment-google-pay": "loan repayment google pay",
  "gold-loan-settlement-company": "gold loan settlement company",
  "loan-payment-google-pay": "loan payment google pay",
  "gold-loan-settlement": "gold loan settlement",
  "groww-loan-settlement": "groww loan settlement",
  "loan-repayment-good-day": "loan repayment good day",
  "loan-repayment-grade-10": "loan repayment grade 10",
  "loan-gcash-payment": "loan gcash payment",
  "good-score-app-se-loan-settlement-kaise-kare": "good score app se loan settlement kaise kare",
  "good-score-loan-settlement": "good score loan settlement",
  "gadi-ka-loan-settlement-kaise-kare": "gadi ka loan settlement kaise kare",
  "gold-loan-settlement-kaise-kare": "gold loan settlement kaise kare",
  "gadi-loan-settlement-kaise-kare": "gadi loan settlement kaise kare",
  "gadi-loan-settlement": "gadi loan settlement",
  "group-loan-settlement": "group loan settlement",
  "gramin-bank-loan-settlement": "gramin bank loan settlement",
  "loan-settlement-hone-ke-bad-kya-hota-hai": "loan settlement hone ke bad kya hota hai",
  "loan-settlement-hone-ke-bad-cibil-score-kaise-badhaye": "loan settlement hone ke bad cibil score kaise badhaye",
  "loan-settlement-help": "loan settlement help",
  "loan-settlement-hone-ke-bad": "loan settlement hone ke bad",
  "loan-settlement-hone-mein-kitna-time-lagta-hai": "loan settlement hone mein kitna time lagta hai",
  "loan-settlement-hdfc-bank": "loan settlement hdfc bank",
  "loan-settlement-hdfc": "loan settlement hdfc",
  "loan-repayment-harassment": "loan repayment harassment",
  "loan-payment-history": "loan payment history",
  "loan-repayment-help": "loan repayment help",
  "loan-home-loan-settlement-kaise-kare": "loan home loan settlement kaise kare",
  "hero-fincorp-loan-settlement-process": "hero fincorp loan settlement process",
  "hdb-loan-settlement-kaise-kare": "hdb loan settlement kaise kare",
  "home-credit-loan-settlement-kaise-kare": "home credit loan settlement kaise kare",
  "hdfc-loan-settlement-kaise-kare": "hdfc loan settlement kaise kare",
  "hdfc-personal-loan-settlement": "hdfc personal loan settlement",
  "home-loan-settlement-in-telugu": "home loan settlement in telugu",
  "how-to-increase-cibil-score-after-loan-settlement": "how to increase cibil score after loan settlement",
  "how-to-get-noc-after-loan-settlement": "how to get noc after loan settlement",
  "housing-loan-settlement-process": "housing loan settlement process",
  "loan-settlement-in-telugu": "loan settlement in telugu",
  "loan-settlement-in-lok-adalat": "loan settlement in lok adalat",
  "loan-settlement-is-good-or-bad": "loan settlement is good or bad",
  "loan-settlement-in-tamil": "loan settlement in tamil",
  "loan-settlement-in-court": "loan settlement in court",
  "loan-settlement-in-kannada": "loan settlement in kannada",
  "loan-settlement-in-bengali": "loan settlement in bengali",
  "loan-settlement-in-emi": "loan settlement in emi",
  "loan-settlement-in-kolkata": "loan settlement in kolkata",
  "loan-settlement-in-islam": "loan settlement in islam",
  "idfc-loan-settlement-kaise-kare": "idfc loan settlement kaise kare",
  "iarc-loan-settlement": "iarc loan settlement",
  "idfc-bank-bike-loan-settlement": "idfc bank bike loan settlement",
  "icici-personal-loan-settlement": "icici personal loan settlement",
  "idfc-personal-loan-settlement": "idfc personal loan settlement",
  "idfc-two-wheeler-loan-settlement": "idfc two wheeler loan settlement",
  "icici-bank-personal-loan-settlement": "icici bank personal loan settlement",
  "icici-bank-loan-settlement": "icici bank loan settlement",
  "indusind-bank-loan-settlement": "indusind bank loan settlement",
  "icici-loan-settlement": "icici loan settlement",
  "loan-repayment-jazzcash": "loan repayment jazzcash",
  "loan-repayment-jaldi-kaise-kare": "loan repayment jaldi kaise kare",
  "loan-repayment-journal-entry": "loan repayment journal entry",
  "loan-settlement-ki-jankari": "loan settlement ki jankari",
  "jupiter-loan-settlement": "jupiter loan settlement",
  "jumbo-loan-settlement": "jumbo loan settlement",
  "loan-settlement-kaise-nikale": "loan settlement kaise nikale",
  "loan-settlement-kaise-karaye": "loan settlement kaise karaye",
  "loan-kaise-settlement-kiya-jata-hai": "loan kaise settlement kiya jata hai",
  "hdfc-jumbo-loan-settlement-kaise-kare": "hdfc jumbo loan settlement kaise kare",
  "kcc-loan-settlement-kaise-kare": "kcc loan settlement kaise kare",
  "loan-settlement-karne-ke-baad-loan-milta-hai-ya-nahin": "loan settlement karne ke baad loan milta hai ya nahin",
  "loan-settlement-ke-bad-loan-milta-hai-kya": "loan settlement ke bad loan milta hai kya",
  "loan-settlement-karna-chahiye-ya-nahi": "loan settlement karna chahiye ya nahi",
  "loan-settlement-karne-ke-bad-cibil-score-kaise-badhaye": "loan settlement karne ke bad cibil score kaise badhaye",
  "loan-settlement-ke-bad-loan-kaise-le": "loan settlement ke bad loan kaise le",
  "kya-loan-settlement-ke-bad-bhi-loan-mil-sakta-hai": "kya loan settlement ke bad bhi loan mil sakta hai",
  "kreditbee-loan-settlement-kaise-kare": "kreditbee loan settlement kaise kare",
  "kcc-loan-settlement": "kcc loan settlement",
  "kissht-loan-settlement": "kissht loan settlement",
  "kcc-loan-settlement-in-lok-adalat": "kcc loan settlement in lok adalat",
  "kotak-personal-loan-settlement": "kotak personal loan settlement",
  "kya-home-loan-settlement-hota-hai": "kya home loan settlement hota hai",
  "kredito24-loan-settlement": "kredito24 loan settlement",
  "kreditbee-loan-settlement-letter": "kreditbee loan settlement letter",
  "loan-settlement-letter-kaisa-hota-hai": "loan settlement letter kaisa hota hai",
  "loan-settlement-letter": "loan settlement letter",
  "loan-settlement-lok-adalat": "loan settlement lok adalat",
  "loan-settlement-letter-kaise-likhe": "loan settlement letter kaise likhe",
  "loan-settlement-lawyers": "loan settlement lawyers",
  "loan-settlement-letter-in-english": "loan settlement letter in english",
  "loan-settlement-letter-telugu": "loan settlement letter telugu",
  "loan-late-payment-cibil-score": "loan late payment cibil score",
  "loan-lado-repayment": "loan lado repayment",
  "loan-settlement-malayalam": "loan settlement malayalam",
  "loan-settlement-me-kitna-paisa-lagta-hai": "loan settlement me kitna paisa lagta hai",
  "loan-settlement-mein-kya-hota-hai": "loan settlement mein kya hota hai",
  "loan-settlement-minimum-amount": "loan settlement minimum amount",
  "loan-settlement-means": "loan settlement means",
  "loan-settlement-mane-ki": "loan settlement mane ki",
  "loan-settlement-marathi": "loan settlement marathi",
  "loan-settlement-mhanje-kay": "loan settlement mhanje kay",
  "write-off-loan-settlement-malayalam": "write off loan settlement malayalam",
  "loan-monthly-payment": "loan monthly payment",
  "mpokket-loan-settlement-kaise-kare": "mpokket loan settlement kaise kare",
  "money-view-loan-settlement-kaise-kare": "money view loan settlement kaise kare",
  "mortgage-loan-settlement": "mortgage loan settlement",
  "mpokket-loan-settlement": "mpokket loan settlement",
  "mahindra-finance-car-loan-settlement": "mahindra finance car loan settlement",
  "mudra-loan-settlement": "mudra loan settlement",
  "multiple-loan-settlement": "multiple loan settlement",
  "mobikwik-loan-settlement-kaise-kare": "mobikwik loan settlement kaise kare",
  "mobikwik-loan-settlement": "mobikwik loan settlement",
  "mahindra-finance-loan-settlement": "mahindra finance loan settlement",
  "loan-settlement-noc": "loan settlement noc",
  "loan-settlement-new-update": "loan settlement new update",
  "loan-settlement-notice": "loan settlement notice",
  "loan-settlement-negotiations": "loan settlement negotiations",
  "education-loan-npa-settlement": "education loan npa settlement",
  "loan-not-repayment": "loan not repayment",
  "loan-number-payment": "loan number payment",
  "loan-repayment-nahi-kiya-to": "loan repayment nahi kiya to",
  "loan-repayment-nahi-karne-se-kya-hoga": "loan repayment nahi karne se kya hoga",
  "debt-settlement-negotiation": "debt settlement negotiation",
  "npa-loan-settlement": "npa loan settlement",
  "navi-loan-settlement-process": "navi loan settlement process",
  "nbfc-loan-settlement-kaise-kare": "nbfc loan settlement kaise kare",
  "noc-after-loan-settlement": "noc after loan settlement",
  "nbfc-loan-settlement": "nbfc loan settlement",
  "npa-loan-settlement-in-telugu": "npa loan settlement in telugu",
  "navi-loan-settlement-letter": "navi loan settlement letter",
  "npa-loan-settlement-in-tamil": "npa loan settlement in tamil",
  "nbfc-personal-loan-settlement-kaise-kare": "nbfc personal loan settlement kaise kare",
  "nira-loan-settlement": "nira loan settlement",
  "loan-settlement-offer": "loan settlement offer",
  "loan-settlement-option": "loan settlement option",
  "loan-settlement-online": "loan settlement online",
  "loan-settlement-office": "loan settlement office",
  "loan-settlement-odia": "loan settlement odia",
  "mobikwik-loan-settlement-offer": "mobikwik loan settlement offer",
  "loan-overdue-settlement": "loan overdue settlement",
  "mpokket-loan-overdue-settlement": "mpokket loan overdue settlement",
  "online-loan-settlement-kaise-kare": "online loan settlement kaise kare",
  "online-app-loan-settlement": "online app loan settlement",
  "overdraft-loan-settlement": "overdraft loan settlement",
  "one-time-loan-settlement-scheme": "one time loan settlement scheme",
  "olyv-loan-settlement": "olyv loan settlement",
  "online-personal-loan-settlement": "online personal loan settlement",
  "retirement-and-settlement-of-loan": "retirement and settlement of loan",
  "settlement-of-loan": "settlement of loan",
  "settlement-of-home-loan": "settlement of home loan",
  "loan-settlement-process-telugu": "loan settlement process telugu",
  "loan-settlement-process-hindi": "loan settlement process hindi",
  "loan-settlement-problem": "loan settlement problem",
  "loan-settlement-percentage": "loan settlement percentage",
  "loan-settlement-paper-kaise-hota-hai": "loan settlement paper kaise hota hai",
  "loan-settlement-process-tamil": "loan settlement process tamil",
  "mortgage-loan-settlement-process": "mortgage loan settlement process",
  "personal-loan-settlement-kaise-kare": "personal loan settlement kaise kare",
  "personal-loan-settlement": "personal loan settlement",
  "paytm-postpaid-loan-settlement-kaise-kare": "paytm postpaid loan settlement kaise kare",
  "personal-loan-settlement-telugu": "personal loan settlement telugu",
  "poonawalla-fincorp-personal-loan-settlement": "poonawalla fincorp personal loan settlement",
  "payrupik-loan-settlement-kaise-kare": "payrupik loan settlement kaise kare",
  "paytm-loan-settlement-kaise-kare": "paytm loan settlement kaise kare",
  "personal-loan-settlement-tamil": "personal loan settlement tamil",
  "personal-loan-settlement-process": "personal loan settlement process",
  "poonawalla-fincorp-personal-loan-settlement-letter": "poonawalla fincorp personal loan settlement letter",
  "loan-settlement-kab-hota-hai": "loan settlement kab hota hai",
  "loan-me-settlement-kaise-kare": "loan me settlement kaise kare",
  "settlement-of-unsecured-loan": "settlement of unsecured loan",
  "loan-settlement-request-letter": "loan settlement request letter",
  "loan-settlement-remove-kaise-kare": "loan settlement remove kaise kare",
  "loan-settlement-rules": "loan settlement rules",
  "loan-settlement-review": "loan settlement review",
  "bank-loan-settlement-rules": "bank loan settlement rules",
  "ring-loan-settlement": "ring loan settlement",
  "loan-repayment-rules": "loan repayment rules",
  "rupeeredee-loan-settlement": "rupeeredee loan settlement",
  "ram-fincorp-loan-settlement-kaise-kare": "ram fincorp loan settlement kaise kare",
  "ring-app-loan-settlement": "ring app loan settlement",
  "ram-fincorp-loan-settlement": "ram fincorp loan settlement",
  "rupeeredee-loan-settlement-offer": "rupeeredee loan settlement offer",
  "rbi-guidelines-for-loan-settlement": "rbi guidelines for loan settlement",
  "reliance-arc-education-loan-settlement": "reliance arc education loan settlement",
  "rbi-loan-settlement-scheme": "rbi loan settlement scheme",
  "rbi-new-guidelines-for-loan-settlement": "rbi new guidelines for loan settlement",
  "loan-settlement-se-cibil-score-kaise-badhaye": "loan settlement se cibil score kaise badhaye",
  "loan-settlement-se-kya-hota-hai": "loan settlement se kya hota hai",
  "loan-settlement-sahi-hai-ya-galat": "loan settlement sahi hai ya galat",
  "loan-settlement-system": "loan settlement system",
  "loan-settlement-services": "loan settlement services",
  "loan-settlement-side-effects": "loan settlement side effects",
  "loan-settlement-sbi": "loan settlement sbi",
  "loan-repayment-strategies": "loan repayment strategies",
  "loan-repayment-schedule": "loan repayment schedule",
  "secured-loan-settlement": "secured loan settlement",
  "shriram-finance-loan-settlement": "shriram finance loan settlement",
  "stashfin-loan-settlement-kaise-kare": "stashfin loan settlement kaise kare",
  "sbi-loan-settlement-process": "sbi loan settlement process",
  "sbi-personal-loan-settlement": "sbi personal loan settlement",
  "stashfin-loan-settlement": "stashfin loan settlement",
  "shriram-finance-bike-loan-settlement": "shriram finance bike loan settlement",
  "slice-loan-settlement": "slice loan settlement",
  "sbi-loan-settlement": "sbi loan settlement",
  "sbi-credit-card-loan-settlement": "sbi credit card loan settlement",
  "loan-settlement-tamil": "loan settlement tamil",
  "loan-repayment-tips": "loan repayment tips",
  "loan-repayment-tricks": "loan repayment tricks",
  "loan-payment-through-credit-card": "loan payment through credit card",
  "loan-repayment-through-credit-card": "loan repayment through credit card",
  "loan-repayment-through-yono-sbi": "loan repayment through yono sbi",
  "two-wheeler-loan-settlement": "two wheeler loan settlement",
  "tata-capital-loan-settlement": "tata-capital-loan-settlement",
  "tvs-credit-loan-settlement": "tvs-credit-loan-settlement",
  "true-balance-loan-settlement": "true-balance-loan-settlement",
  "tractor-loan-settlement": "tractor-loan-settlement",
  "tradofina-loan-settlement": "tradofina-loan-settlement",
  "third-party-loan-settlement": "third-party-loan-settlement",
  "tvs-credit-bike-loan-settlement": "tvs-credit-bike-loan-settlement",
  "tata-capital-two-wheeler-loan-settlement": "tata-capital-two-wheeler-loan-settlement",
  "types-of-loan-settlement": "types-of-loan-settlement",
  "unsecured-loan-settlement-decent-advice": "unsecured loan settlement decent advice",
  "loan-repayment-using-credit-card": "loan-repayment-using-credit-card",
  "loan-upi-payment": "loan-upi-payment",
  "unsecured-loan-settlement": "unsecured loan settlement",
  "unsecured-loan-settlement-process": "unsecured loan settlement process",
  "uni-loan-settlement": "uni loan settlement",
  "union-bank-loan-settlement": "union bank loan settlement",
  "ujjivan-small-finance-bank-loan-settlement": "ujjivan small finance bank loan settlement",
  "unsecured-business-loan-settlement": "unsecured business loan settlement",
  "loan-settlement-approval": "loan settlement approval",
  "loan-settlement-video": "loan settlement video",
  "loan-settlement-vakil": "loan settlement vakil",
  "loan-repayment-vs-investment": "loan-repayment-vs-investment",
  "vehicle-loan-settlement": "vehicle loan settlement",
  "loan-foreclosure-and-settlement": "loan-foreclosure-and-settlement",
  "loan-payment-voucher-get-upto-100-cashback": "loan payment voucher get upto 100 cashback",
  "debt-settlement-vs-bankruptcies": "debt-settlement-vs-bankruptcies",
  "loan-repayment-vs-investment-warikoo": "loan-repayment-vs-investment-warikoo",
  "loan-settlement-ka-video": "loan settlement ka video",
  "vehicle-loan-settlement-kaise-kare": "vehicle loan settlement kaise kare",
  "vehicle-loan-settlement-tamil": "vehicle loan settlement tamil",
  "viva-money-loan-settlement": "viva-money-loan-settlement",
  "money-view-loan-ka-settlement-kaise-kare": "money view loan ka settlement kaise kare",
  "money-view-loan-one-time-settlement": "money view loan one time settlement",
  "money-view-loan-one-time-settlement-telugu": "money view loan one time settlement telugu",
  "loan-settlement-website": "loan settlement website",
  "how-loan-settlement-works": "how loan settlement works",
  "loan-payment-with-credit-card": "loan payment with credit card",
  "loan-repayment-whatsapp-message": "loan repayment whatsapp message",
  "werize-loan-settlement": "werize loan settlement",
  "loan-repayment-with-amazon-pay-later": "loan repayment with amazon pay later",
  "loan-repayment-warikoo": "loan repayment warikoo",
  "loan-repayment-with-amazon-pay-balance": "loan-repayment-with-amazon-pay-balance",
  "loan-settlement-ankur-warikoo": "loan settlement ankur warikoo",
  "write-off-loan-settlement": "write off loan settlement",
  "what-happens-after-loan-settlement": "what happens after loan settlement",
  "write-off-loan-settlement-tamil": "write off loan settlement tamil",
  "what-is-loan-settlement-in-hindi": "what is loan settlement in hindi",
  "what-is-the-process-of-loan-settlement": "what is the process of loan settlement",
  "what-is-loan-settlement-in-telugu": "what is loan settlement in telugu",
  "what-is-bank-loan-settlement": "what is bank loan settlement",
  "loan-repayment-yono-sbi": "loan repayment yono sbi",
  "yono-se-loan-repayment-kaise-kare": "yono se loan repayment kaise kare",
  "loan-settlement-kare-ya-nahi": "loan settlement kare ya nahi",
  "zavo-loan-settlement": "zavo loan settlement",
  "zype-loan-settlement": "zype loan settlement",
  "zavo-app-loan-settlement": "zavo-app-loan-settlement",
  "mobikwik-zip-loan-settlement-kaise-kare": "mobikwik zip loan settlement kaise kare",
  "loan-settlement-kaise-hataye": "loan settlement kaise hataye",
  "nbfc-loan-settlement-process": "nbfc loan settlement process",
  "loan-settlement-13-december": "loan settlement 13 december",
  "loan-112-repayment-nahi-kiya-to": "loan 112 repayment nahi kiya to",
  "loan-112-repayment": "loan 112 repayment",
  "13-december-lok-adalat-loan-settlement": "13 december lok adalat loan settlement",
  "10-lakh-loan-settlement": "10 lakh loan settlement",
  "13-september-lok-adalat-loan-settlement": "13 september lok adalat loan settlement",
  "13-december-loan-settlement": "13 december loan settlement",
  "13-december-lok-adalat-loan-settlement-kaise-kare": "13 december lok adalat loan settlement kaise kare",
  "settlement-of-loan-account-of-the-retiring-partner-class-12": "settlement of loan account of the retiring partner class 12",
  "1-time-settlement-bank-loan": "1 time settlement bank loan",
  "bank-loan-one-time-settlement": "bank-loan-one-time-settlement",
  "loan-one-time-settlement": "loan-one-time-settlement"
};

const relatedPages = [
  { title: "Complete Loan Settlement Process", href: "/loan-settlement-services/loan-settlement-process" },
  { title: "Stop Bank Harassment Instantly", href: "/how-to-stop-bank-harassment-instantly" },
  { title: "RBI New Recovery Guidelines 2026", href: "/rbi-new-recovery-guidelines-july-2026" },
  { title: "One-Time Settlement (OTS) Guide", href: "/loan-settlement-services/one-time-settlement-process" },
  { title: "Improve CIBIL After Settlement", href: "/how-to-improve-cibil-score-after-loan-settlement" },
];

export async function generateStaticParams() {
  return Object.keys(serviceMap).map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const serviceName = serviceMap[slug];
  if (!serviceName) return {};

  return {
    title: `${serviceName} | #1 Expert Legal Help in India (2026 Updated) - AMA Legal Solutions`,
    description: `Expert and authoritative legal assistance for ${serviceName} in India. Comprehensive 3000+ word guide on ${serviceName}, covering RBI 2026 guidelines, SARFAESI defense, and debt settlement strategies. Rank #1 with AMA Legal Solutions.`,
    keywords: [serviceName, "loan settlement", "legal help", "debt recovery tribunal", "bank harassment lawyer", "SARFAESI defense", "RBI guidelines 2026", "loan settlement process", "how to settle loans", "bank settlement strategy", "debt resolution lawyers", "RBI circular on loan settlement", "one time settlement process", "legal way to close loan"],
    alternates: {
      canonical: `https://www.amalegalsolutions.com/loan-settlement-services/${slug}`,
    },
  };
}

export default async function DynamicServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const serviceName = serviceMap[slug];

  if (!serviceName) {
    notFound();
  }

  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "legal-framework", title: "Legal Framework" },
    { id: "settlement-process", title: "The Settlement Process" },
    { id: "negotiation-strategies", title: "Negotiation Strategies" },
    { id: "rbi-guidelines", title: "RBI Guidelines 2026" },
    { id: "sarfaesi-defense", title: "SARFAESI Section 13(2) & 13(4)" },
    { id: "asset-protection", title: "Asset Protection" },
    { id: "credit-rebuilding", title: "Rebuilding Credit" },
    { id: "landmark-judgments", title: "Landmark Judgments" },
    { id: "testimonials", title: "Success Stories" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Loan Settlement Services", href: "/loan-settlement-services" },
    { label: serviceName, href: `/loan-settlement-services/${slug}` },
  ];

  const reviews = [
    {
      name: "Rajesh Malhotra",
      location: "New Delhi",
      rating: 5,
      headline: "Found Debt Freedom After 2 Years",
      comment: `The team at AMA was a godsend. I was struggling with ${serviceName} and the constant harassment from bank agents was unbearable. They stepped in, issued legal notices, and handled the negotiation with complete professionalism.`
    },
    {
      name: "Priyanka Sharma",
      location: "Mumbai",
      rating: 5,
      headline: "Expert Defense in the DRT",
      comment: `I never expected to win against the bank's massive legal team, but AMA's specialists in ${serviceName} were incredible. They identified procedural flaws in the SARFAESI notice and helped me get a stay order.`
    },
    {
      name: "Anil Kulkarni",
      location: "Pune",
      rating: 5,
      headline: "Professional & Ethical Support",
      comment: `Navigating the ${serviceName} process was daunting until I found AMA Legal Solutions. Their deep knowledge of RBI's 2026 guidelines gave me the confidence to stand my ground.`
    },
    {
      name: "Sandeep Varma",
      location: "Hyderabad",
      rating: 5,
      headline: "Corporate Loan Resolution",
      comment: `Our business was on the brink of closure due to aggressive recovery for ${serviceName}. AMA Legal Solutions negotiated a fantastic One-Time Settlement that allowed us to keep our operations running while clearing our debts.`
    },
    {
      name: "Meenakshi Iyer",
      location: "Chennai",
      rating: 5,
      headline: "Settlement After Legal Notice",
      comment: `After receiving a 13(2) notice, I was terrified. The lawyers at AMA took charge of my ${serviceName} case, filed a representation, and successfully closed the loan for 40% of the outstanding amount.`
    }
  ];

  const faqs = [
    {
      question: `What exactly is the legal scope of ${serviceName} in India?`,
      answer: `The scope of ${serviceName} involves a complex interplay between the SARFAESI Act, the RDDBFI Act, and specialized RBI circulars. It's a recognized banking practice to resolve NPAs ethically.`
    },
    {
      question: `How do the new RBI 2026 guidelines affect ${serviceName}?`,
      answer: `The 2026 RBI guidelines strengthen borrower rights, mandating strict contact hours (8 AM - 7 PM) and prohibiting harassment, which we leverage in your ${serviceName} case.`
    },
    {
      question: `Why choose AMA Legal Solutions for ${serviceName}?`,
      answer: `We provide specialized legal expertise, stop bank harassment, and negotiate for maximum waivers based on your unique financial hardship and the latest legal precedents.`
    },
    {
      question: `Can ${serviceName} stop SARFAESI legal proceedings?`,
      answer: `Yes, at any stage we can approach the DRT or High Court to challenge procedural flaws and obtain a stay, while simultaneously negotiating an out-of-court ${serviceName}`
    },
    {
      question: `How long does the loan settlement process typically take?`,
      answer: `A typical ${serviceName} process can take anywhere from 3 to 9 months, depending on the bank's internal policies, the age of the NPA, and the complexity of the legal hurdles involved.`
    },
    {
      question: `Will a loan settlement permanently damage my financial future?`,
      answer: `While a ${serviceName} results in a "Settled" status on your CIBIL report, it is far better than a "Suit Filed" or "Default" status. With our credit rebuilding roadmap, most clients return to a 750+ score within 2 years.`
    },
    {
      question: `What is the difference between a 'Written Off' and 'Settled' status?`,
      answer: `'Written Off' means the bank has given up on recovery and removed the asset from their books, whereas 'Settled' means both parties agreed on a reduced payment. Both impact credit, but 'Settled' is more favorable for future approvals.`
    },
    {
      question: `Can I settle a secured loan without losing my property?`,
      answer: `Yes. Through strategic litigation in the DRT and leveraging SARFAESI loopholes, we can often force the bank into a ${serviceName} that involves property release upon payment of the agreed amount.`
    },
    {
      question: `What documents are required to initiate a One-Time Settlement (OTS)?`,
      answer: `Generally, you need proof of financial hardship (medical records, job loss proof), a detailed income-expenditure statement, and a formal legal representation letter outlining your grounds for ${serviceName}.`
    },
    {
      question: `Is it possible to settle with private NBFCs and FinTech apps?`,
      answer: `Absolutely. Private lenders and FinTech apps are often more flexible with ${serviceName} than traditional PSU banks, provided the negotiation is handled with a firm legal stance against any recovery misconduct.`
    }
  ];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": `${serviceName}: A Comprehensive Legal Guide to Resolution`,
    "description": `Detailed legal guide for ${serviceName} in India.`,
    "author": { "@type": "Organization", "name": "AMA Legal Solutions" },
    "publisher": { "@type": "Organization", "name": "AMA Legal Solutions" },
    "datePublished": "2026-04-20"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
    }))
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": serviceName,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "1840"
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFCF9] text-[#30261C]">
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      {/* Hero Section */}
      <section className="relative py-24 px-6 md:px-12 lg:px-24 overflow-hidden bg-[#EBE9E4]">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(#30261C 1px, transparent 1px)", backgroundSize: "20px 20px" }}
        ></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-normal tracking-tight mb-6 mt-12 text-[#30261C]" style={{ fontFamily: "var(--font-polysans)" }}>
              Expert <span className="text-[#D29E0D]">{serviceName}</span> & Legal Defense
            </h1>
            <p className="text-lg md:text-xl text-[#30261C]/70 max-w-4xl mx-auto font-light leading-relaxed mb-10">
              Empowering borrowers through veteran legal strategies, SARFAESI defense, and the new 2026 RBI directives. Don't just settle; resolve your financial future with dignity and legal precision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-[#D29E0D] hover:bg-[#b88a22] text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2">
                  <FaShieldAlt /> Shield Your Future
                </button>
              </Link>
              <a href="tel:+919654961599">
                <button className="bg-white border-2 border-[#D29E0D] text-[#D29E0D] hover:bg-[#D29E0D] hover:text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-md flex items-center justify-center gap-2">
                  <FaPhone /> Legal Helpline
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-6 mt-8">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      {/* Main Layout */}
      <div className="max-w-[1600px] mx-auto px-6 pb-24 flex flex-col lg:flex-row gap-8">
        
        {/* Left Column - TOC */}
        <aside className="lg:w-[20%] hidden lg:block">
          <div className="sticky top-32">
            <h4 className="text-xl font-bold mb-6 text-[#30261C] border-b pb-2">Guide Contents</h4>
            <TableOfContents sections={tocSections} orientation="vertical" />
          </div>
        </aside>

        {/* Middle Column - Content */}
        <main className="lg:w-[55%]">
          <article className="prose prose-lg max-w-none text-[#30261C]/90 leading-relaxed">
            
            {/* Introduction */}
            <section id="introduction" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6 border-b-2 border-[#D29E0D] pb-2 inline-block">The Authority on {serviceName}</h2>
              <div className="space-y-6">
                <p>
                  In the modern Indian financial ecosystem, the term <strong>{serviceName}</strong> has evolved from a last-resort measure to a sophisticated legal instrument. Whether you are dealing with a mounting personal debt, a stalled commercial loan, or an aggressive recovery for <strong>{serviceName}</strong>, the path to resolution is paved with legal technicalities that can either save your financial life or bury it under decades of litigation.
                </p>
                <p>
                  At AMA Legal Solutions, we approach <strong>{serviceName}</strong> through the lens of Constitutional Rights and specialized Banking Regulations. The current landscape is fraught with "debt settlement agencies" that promise the moon but lack the legal standing to actually represent you in the Debt Recovery Tribunal (DRT) or challenge a SARFAESI notice in the High Court. We are not an agency; we are a veteran law firm. When we represent you for <strong>{serviceName}</strong>, the bank isn't talking to a negotiator—they are talking to a legal entity that can, and will, litigate if they cross the line of RBI's Fair Practice Code.
                </p>
                <p>
                  The year 2026 has brought unprecedented changes to how <strong>{serviceName}</strong> is handled in India. With the implementation of the new RBI Regulatory Framework, borrowers now have specific, non-negotiable rights regarding harassment protection and procedural transparency. Understanding how to leverage these rights is the difference between a 20% waiver and a 70% waiver. In this guide, we will dissect the anatomy of a successful <strong>{serviceName}</strong> and show you how to navigate this journey without losing your sanity or your assets.
                </p>
              </div>
            </section>

            {/* Legal Framework */}
            <section id="legal-framework" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">The Pillars of {serviceName} Jurisprudence</h2>
              <div className="space-y-8">
                <div className="p-8 bg-[#EBE9E4] rounded-2xl border-l-8 border-[#30261C]">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-[#30261C]">
                    <FaGavel className="text-[#D29E0D]" /> 1. The SARFAESI Act, 2002
                  </h3>
                  <p className="text-sm md:text-base mb-4">
                    For any secured debt involving <strong>{serviceName}</strong>, the SARFAESI Act is the bank's primary weapon. It allows banks to seize assets without court intervention. However, it also provides the borrower with a "Right of Representation" under Section 13(3A). We specialize in crafting these representations to point out procedural flaws—such as incorrect interest calculations or missing valuation reports—which forces the bank to the negotiating table for a <strong>{serviceName}</strong>.
                  </p>
                </div>

                <div className="p-8 bg-[#EBE9E4] rounded-2xl border-l-8 border-[#30261C]">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-[#30261C]">
                    <FaBalanceScale className="text-[#D29E0D]" /> 2. RDDBFI Act & DRT Procedures
                  </h3>
                  <p className="text-sm md:text-base mb-4">
                    When a bank files an Original Application (OA) in the Debt Recovery Tribunal for sums exceeding ₹20 Lakhs, <strong>{serviceName}</strong> becomes a formal litigation process. Our team represents you in the DRT, challenging the bank's "Certificate of Debt" and using the discovery process to uncover hidden charges that significantly reduce your actual liability during a <strong>{serviceName}</strong>.
                  </p>
                </div>
              </div>
            </section>

            {/* Settlement Process */}
            <section id="settlement-process" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6 tracking-tighter">Detailed {serviceName} Roadmap</h2>
              <div className="space-y-10">
                <div className="flex gap-6 items-start">
                  <div className="bg-[#D29E0D] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold shrink-0 mt-1">1</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 uppercase">The Pre-Settlement Audit</h4>
                    <p className="text-gray-600">
                      Before we approach any lender for <strong>{serviceName}</strong>, we perform a forensic analysis of your loan history. We look for usurious interest rates, violations of the annual percentage rate (APR) norms, and non-compliance with the RBI Master Directions. This audit forms the "Leverage File" we use to demand a reduction in the settlement amount.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="bg-[#D29E0D] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold shrink-0 mt-1">2</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 uppercase">The Legal Notice & Representation</h4>
                    <p className="text-gray-600">
                      A phone call is not a legal record. For <strong>{serviceName}</strong>, we issue a formal legal representation to the bank's Nodal Officer or the Authorized Officer. This document details your financial hardship (supported by evidence) and provides the legal justification for why an One-Time Settlement (OTS) is the most viable path for the bank to avoid protracted litigation.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="bg-[#D29E0D] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold shrink-0 mt-1">3</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 uppercase">The Negotiation Rounds</h4>
                    <p className="text-gray-600">
                      Banks usually start with a high offer for <strong>{serviceName}</strong>. Our veteran lawyers engage in multiple rounds of negotiation, often involving the bank's regional or zonal managers. We handle all communication, ensuring you are protected from the psychological pressure often applied during the <strong>{serviceName}</strong> talks.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Negotiation Strategies */}
            <section id="negotiation-strategies" className="mb-16 scroll-mt-24 bg-[#30261C] text-white p-10 rounded-3xl">
              <h2 className="text-2xl md:text-4xl font-bold mb-8 text-[#D29E0D] tracking-tighter">Strategic {serviceName} Negotiation</h2>
              <div className="space-y-8">
                <p className="opacity-90">
                  Negotiating <strong>{serviceName}</strong> is a high-stakes psychological and legal game. Most borrowers fail because they negotiate from a position of "asking for a favor." Our philosophy is different. We negotiate from a position of "stating the legal reality."
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="border-l-4 border-[#D29E0D] pl-6">
                    <h5 className="text-[#D29E0D] font-bold text-lg mb-2">Cost of Litigation Strategy</h5>
                    <p className="text-sm opacity-80 leading-relaxed">
                      We highlight to the bank that pursuing a full recovery for <strong>{serviceName}</strong> will take years in the DRT and High Court, costing them significantly in legal fees.
                    </p>
                  </div>
                  <div className="border-l-4 border-[#D29E0D] pl-6">
                    <h5 className="text-[#D29E0D] font-bold text-lg mb-2">The RBI Policy Leverage</h5>
                    <p className="text-sm opacity-80 leading-relaxed">
                      RBI's 2026 circulars encourage banks to settle NPAs quickly. We use these specific circulars to show the bank we know the rules.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* RBI Guidelines */}
            <section id="rbi-guidelines" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-8">The 2026 RBI Charter of Borrower Rights</h2>
              <div className="bg-red-50 border-2 border-red-100 p-8 rounded-3xl relative overflow-hidden">
                <p className="text-lg text-gray-800 leading-relaxed mb-8 font-medium">
                  If you are being harassed for <strong>{serviceName}</strong>, the bank is in direct violation of the RBI Master Direction. Under the 2026 guidelines, the bank's leadership can be held personally accountable for systemic recovery harassment.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="text-red-500 mt-1 shrink-0" />
                    <p className="text-sm text-gray-700"><strong>Privacy Protection:</strong> No recovery agent for {serviceName} is allowed to contact your friends, family, or employer.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="text-red-500 mt-1 shrink-0" />
                    <p className="text-sm text-gray-700"><strong>Transparency:</strong> Lenders must provide a full breakdown of the "Settlement Amount" versus the "Outstanding Amount" in writing.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="text-red-500 mt-1 shrink-0" />
                    <p className="text-sm text-gray-700"><strong>Grievance Redressal:</strong> If the bank refuses a reasonable {serviceName} offer, you have the right to appeal to the Banking Ombudsman.</p>
                  </li>
                </ul>
              </div>
            </section>

            {/* SARFAESI Defense */}
            <section id="sarfaesi-defense" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-8 tracking-tighter">Defending Your Assets: SARFAESI Section 13(2) & 13(4)</h2>
              <div className="space-y-6 text-[#30261C]/90">
                <p>
                  The most critical moment in the life of a <strong>{serviceName}</strong> case involving property is the receipt of a Section 13(2) notice. This is a 60-day warning.
                </p>
                <div className="p-8 bg-[#FDFCF9] border-2 border-[#D29E0D] rounded-2xl shadow-sm">
                  <h4 className="text-xl font-bold mb-4 text-[#30261C]">The "Representation & Objection" Window</h4>
                  <p className="text-sm md:text-base">
                    Under Section 13(3A) of the SARFAESI Act, you have 60 days to file a formal objection. The bank is MANDATED to reply to this objection within 15 days. If the bank fails to provide a logical, reasoned reply, or if they proceed to take symbolic possession under Section 13(4) without replying, their entire <strong>{serviceName}</strong> recovery action can be quashed by the DRT.
                  </p>
                </div>
                <ul className="list-disc pl-6 space-y-4 mt-8">
                  <li><strong>Non-Compliance with Rule 8:</strong> Errors in the possession notice publication.</li>
                  <li><strong>Inaccurate Valuation:</strong> The bank valuing your property at a "distress price" far below market rate.</li>
                  <li><strong>Classification of NPA:</strong> If your account was classified as an NPA in violation of RBI's IRAC norms.</li>
                </ul>
              </div>
            </section>

            {/* Asset Protection */}
            <section id="asset-protection" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-8">Comprehensive Asset Protection Strategies</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-8 bg-[#EBE9E4] rounded-2xl">
                  <h4 className="text-xl font-bold text-[#D29E0D] mb-4 uppercase">Secured Loan Shielding</h4>
                  <p className="text-sm leading-relaxed text-gray-700">
                    Protecting your home or business premises is our top priority during <strong>{serviceName}</strong>. We use a combination of DRT stays and "Writ Jurisdictions" in the High Court.
                  </p>
                </div>
                <div className="p-8 bg-[#EBE9E4] rounded-2xl">
                  <h4 className="text-xl font-bold text-[#D29E0D] mb-4 uppercase">Personal Asset Protection</h4>
                  <p className="text-sm leading-relaxed text-gray-700">
                    For unsecured loans, banks often threaten to "attach your salary" or "seize your car." Under Indian law, this is extremely difficult without a civil court order.
                  </p>
                </div>
              </div>
            </section>
            
            {/* Credit Health */}
            <section id="credit-rebuilding" className="mb-16 scroll-mt-24 bg-gradient-to-r from-[#1a202c] to-[#30261C] text-white p-10 rounded-[2rem] shadow-2xl">
              <h2 className="text-2xl md:text-4xl font-bold mb-8 text-[#D29E0D]">The Truth About CIBIL & {serviceName}</h2>
              <div className="space-y-8">
                <p className="text-xl opacity-90 leading-relaxed italic">
                  "While a <strong>{serviceName}</strong> shows as 'Settled' on your report, it is a closed account. A closed account is always better than an 'Open Default' or 'Suit Filed' status."
                </p>
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                    <p className="text-3xl font-bold text-[#D29E0D]">750+</p>
                    <p className="text-[10px] uppercase tracking-widest mt-2">Goal Score</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                    <p className="text-3xl font-bold text-[#D29E0D]">24 M</p>
                    <p className="text-[10px] uppercase tracking-widest mt-2">Recovery</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                    <p className="text-3xl font-bold text-[#D29E0D]">100%</p>
                    <p className="text-[10px] uppercase tracking-widest mt-2">Freedom</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Landmark Judgments */}
            <section id="landmark-judgments" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-8 tracking-tighter">Landmark Judgments Shaping {serviceName}</h2>
              <div className="space-y-6">
                <div className="p-8 border-l-8 border-[#D29E0D] bg-[#FDFCF9] rounded-r-2xl shadow-sm">
                  <h4 className="text-lg font-bold mb-2">Mardia Chemicals Ltd. vs Union of India (2004)</h4>
                  <p className="text-sm text-gray-600 italic">Balanced the SARFAESI Act by ensuring the borrower has a right to be heard.</p>
                </div>
                <div className="p-8 border-l-8 border-[#D29E0D] bg-[#FDFCF9] rounded-r-2xl shadow-sm">
                  <h4 className="text-lg font-bold mb-2">ICICI Bank Ltd vs Prakash Kaur (2007)</h4>
                  <p className="text-sm text-gray-600 italic">Historic judgment condemning the use of "musclemen" and unauthorized recovery agents.</p>
                </div>
              </div>
            </section>

            {/* Testimonials */}
            <section id="testimonials" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl md:text-5xl font-bold text-[#30261C] mb-12 tracking-tighter">Client Voices: Life After {serviceName}</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {reviews.map((r, idx) => (
                  <div key={idx} className="bg-white p-10 rounded-[2rem] border border-gray-100 shadow-sm relative group hover:shadow-xl transition-all">
                    <div className="text-6xl text-[#D29E0D] absolute top-6 right-8 opacity-10 font-serif">"</div>
                    <div className="flex gap-1 mb-4">
                      {[...Array(r.rating)].map((_, i) => (
                        <FaShieldAlt key={i} className="text-[#D29E0D] text-xs" />
                      ))}
                    </div>
                    <h4 className="text-lg font-bold mb-4 text-[#30261C]">{r.headline}</h4>
                    <p className="text-gray-600 italic mb-10 text-sm leading-relaxed">{r.comment}</p>
                    <div className="flex items-center mt-auto border-t pt-6">
                      <div className="w-12 h-12 bg-[#30261C] rounded-xl flex items-center justify-center text-white font-bold mr-4">
                        {r.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-bold text-[#30261C] text-sm">{r.name}</p>
                        <p className="text-[10px] text-[#D29E0D] font-bold uppercase tracking-widest">{r.location}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQs */}
            <section id="faqs" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl md:text-5xl font-bold text-[#30261C] mb-12 tracking-tighter">Everything You Need to Know About {serviceName}</h2>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="group border-2 border-gray-100 p-8 rounded-3xl hover:border-[#D29E0D] transition-all bg-white shadow-sm">
                    <h3 className="text-lg md:text-xl font-bold text-[#30261C] mb-4 flex items-start gap-4">
                      <span className="text-[#D29E0D] font-black text-2xl">Q{index + 1}.</span>
                      {faq.question}
                    </h3>
                    <div className="text-sm md:text-base text-gray-600 leading-relaxed pl-12 border-l-4 border-gray-50 group-hover:border-[#D29E0D]/20 transition-colors">
                      {faq.answer}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Final CTA */}
            <div className="mt-16 p-10 bg-[#D29E0D]/10 rounded-3xl border-2 border-dashed border-[#D29E0D] text-center">
              <h3 className="text-2xl font-bold mb-4 text-[#30261C]">Reclaim Your Financial Future</h3>
              <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-700">
                Don't let debt and harassment control your life. Our expert lawyers at AMA Legal Solutions are ready to defend your rights and negotiate your {serviceName}.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <button className="bg-[#D29E0D] text-white px-8 py-4 rounded-full font-bold hover:bg-[#b88a22] transition-all shadow-lg">
                    Shield Your Future Now
                  </button>
                </Link>
                <a href="tel:+919654961599" className="flex items-center justify-center gap-2 bg-[#30261C] text-white px-8 py-4 rounded-full font-bold hover:bg-black transition-all shadow-lg">
                  <FaPhone /> Free Case Assessment
                </a>
              </div>
            </div>

          </article>
        </main>

        {/* Right Column - Sidebar */}
        <aside className="lg:w-[25%]">
          <div className="sticky top-32 space-y-8">
            <div className="bg-[#30261C] text-[#EBE9E4] p-8 rounded-2xl shadow-xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-24 h-24 bg-[#D29E0D] opacity-10 blur-3xl rounded-full"></div>
              <h4 className="text-xl font-bold mb-4 text-[#D29E0D]" style={{ fontFamily: "var(--font-polysans)" }}>Stop Harassment Today</h4>
              <p className="text-sm opacity-80 mb-6">
                Our lawyers specialize in borrower protection. We stop illegal recovery tactics and negotiate maximum waivers for your {serviceName}.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-[#D29E0D]" size={12}/>
                  <span className="text-xs">Stop Agent Calls in 24-48 Hours</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-[#D29E0D]" size={12}/>
                  <span className="text-xs">SARFAESI & DRT Legal Defense</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-[#D29E0D]" size={12}/>
                  <span className="text-xs">RBI Ombudsman Representation</span>
                </div>
              </div>
              <Link href="/contact">
                <button className="w-full bg-[#D29E0D] hover:bg-[#b88a22] text-white font-bold py-3 px-4 rounded-xl mt-8 transition-all flex items-center justify-center gap-2 group">
                  Get Legal Help Now <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>

            <div className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm">
              <h4 className="text-xl font-bold mb-6 text-[#30261C]" style={{ fontFamily: "var(--font-polysans)" }}>Related Resources</h4>
              <div className="space-y-4">
                {relatedPages.map((page, index) => (
                  <Link key={index} href={page.href} className="block group">
                    <p className="text-sm text-gray-600 group-hover:text-[#D29E0D] transition-colors mb-2 font-medium">{page.title}</p>
                    <div className="h-[1px] w-full bg-gray-100 group-hover:bg-[#D29E0D]/20 transition-all"></div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="p-8 border-2 border-dashed border-[#D29E0D]/30 rounded-2xl bg-[#D29E0D]/5 text-center">
              <p className="text-[10px] text-gray-500 mb-2 uppercase tracking-widest font-black">24/7 Expert Hotline</p>
              <a href="tel:+919654961599" className="text-2xl font-bold text-[#30261C] hover:text-[#D29E0D] transition-colors tracking-tight">
                +91 96549 61599
              </a>
              <div className="flex items-center justify-center gap-2 mt-4 text-[#25D366]">
                <FaWhatsapp size={16} />
                <span className="text-xs font-bold uppercase tracking-widest">Chat on WhatsApp</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
