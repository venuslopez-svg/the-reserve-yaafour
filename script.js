/* =========================================================
   THE RESERVE YAAFOUR
   FINAL JAVASCRIPT
   ENGLISH + ARABIC
   ========================================================= */


/* =========================================================
   TRANSLATIONS
   ========================================================= */

const translations = {

    en: {

        /* HEADER */

        brand: "THE RESERVE",
        locationName: "YAAFOUR",

        navProject: "Project",
        navResidences: "Residences",
        navPlans: "Floor Plans",
        navGallery: "Gallery",
        navUpdates: "Site Updates",
        navContact: "Contact",


        /* HERO */

        heroEyebrow:
            "EXCLUSIVE LUXURY VILLAS · YAAFOUR",

        heroTitle1:
            "Crafted for the few.",

        heroTitle2:
            "Designed for life.",

        heroLead:
            "A limited collection of two signature villas created around privacy, timeless architecture and exceptional quality.",

        explore:
            "Explore the villas",

        download:
            "Download brochure",

        discover:
            "Discover",


        /* PROJECT */

        projectKicker:
            "THE PROJECT",

        projectTitle:
            "A private sanctuary just beyond the city.",

        projectBody:
            "Designed for modern living, each villa combines timeless architecture, spacious interiors and natural elegance to offer comfort, privacy and lasting value.",

        statVillas:
            "Signature Villas",

        statLand:
            "Total Land per Estate",

        statBuilt:
            "Built Area",

        statPool:
            "Private Pool",


        /* LOCATION */

        locationKicker:
            "LOCATION",

        locationTitle:
            "Yaafour, moments from Damascus.",

        locationBody:
            "A sophisticated haven designed for absolute privacy, with convenient access to the city and key routes.",

        minutes:
            "minutes",

        cityCenter:
            "Damascus City Center",

        beirutHighway:
            "Beirut Highway",

        airport:
            "International Airport",

        mapLink:
            "View location on Google Maps →",


        /* ARCHITECTURE */

        architectureKicker:
            "ARCHITECTURE",

        architectureTitle:
            "Contemporary by nature. Timeless by design.",

        architectureBody:
            "A refined composition of natural materials, crafted details and generous open spaces that connect the home to its surrounding landscape.",

        featurePrivacy:
            "Privacy without compromise",

        featureSpace:
            "Space without limit",

        featureNature:
            "Nature as part of life",

        featureQuality:
            "Quality in every detail",


        /* LIFESTYLE */

        lifestyleKicker:
            "LIFESTYLE",

        lifestyleTitle:
            "Spaces made for living beautifully.",

        outdoorTitle:
            "Outdoor Living",

        outdoorBody:
            "Outdoor lounge, dining pavilion, swimming pool and outdoor kitchen designed for effortless entertaining.",

        livingTitle:
            "Formal Living",

        livingBody:
            "Refined finishes and a warm atmosphere created for elegant gatherings and relaxation.",

        majlisTitle:
            "Private Majlis",

        majlisBody:
            "A sophisticated gathering space balancing hospitality, comfort and contemporary luxury.",

        diningTitle:
            "Dining & Show Kitchen",

        diningBody:
            "A refined setting for daily dining, entertaining and family gatherings.",

        bedroomTitle:
            "Private Bedrooms",

        bedroomBody:
            "Calm, elegant private retreats designed around comfort, privacy and natural light.",

        prepKitchenTitle:
            "Preparation Kitchen",

        prepKitchenBody:
            "A practical secondary kitchen designed for preparation, storage and everyday use.",

        poolTitle:
            "Private Pool",

        poolBody:
            "A private pool framed by landscaped outdoor areas for relaxation and entertaining.",


        /* VILLA SPECIFICATIONS */

        specKicker:
            "VILLA SPECIFICATION",

        specTitle:
            "Designed generously, down to every detail.",

        specIntro:
            "Each villa is designed around generous living spaces, privacy and everyday comfort, with dedicated areas for family life, guests and service functions.",

        bedrooms:
            "Bedrooms",

        halls:
            "Halls",

        parking:
            "Garage Parking",

        majlis:
            "External Majlis",

        maids:
            "Maid's Rooms",

        guards:
            "Guard's Rooms",

        driver:
            "Driver's Room",

        basementHall:
            "Multi-purpose Basement Hall",


        /* FLOOR PLANS */

        plansKicker:
            "FLOOR PLANS",

        plansTitle:
            "Explore the residence.",

        plansIntro:
            "Discover the layout of each level and the overall relationship between the villa, landscape and private outdoor spaces.",

        masterPlan:
            "Master Plan",

        groundFloor:
            "Ground Floor",

        firstFloor:
            "First Floor",

        basement:
            "Basement",

        planLabel:
            "PLAN",


        /* FACILITIES & TECHNOLOGY */

        facKicker:
            "FACILITIES & TECHNOLOGY",

        facTitle:
            "Comfort engineered for every season.",

        facIntro:
            "Integrated systems and carefully selected technologies provide comfort, efficiency and convenience throughout each residence.",

        fac1:
            "Centralized AC",

        fac1Desc:
            "Climate control designed for consistent comfort throughout the residence.",

        fac2:
            "VRF System",

        fac2Desc:
            "Efficient zoned temperature management for improved comfort and energy performance.",

        fac3:
            "Underfloor Heating",

        fac3Desc:
            "Integrated floor heating delivers discreet and comfortable warmth during colder seasons.",

        fac4:
            "Swimming Pool Heating",

        fac4Desc:
            "Pool heating extends comfort and usability throughout the year.",

        fac5:
            "Prepared Kitchen Equipment",

        fac6:
            "Elevator",

        fac6Desc:
            "Private internal access provides comfortable movement between all villa levels.",

        fac7:
            "Premium Sanitaryware",

        fac7Desc:
            "Carefully selected fittings and sanitaryware complete the villa's refined interiors.",

        fac8:
            "Smart Home",

        fac8Desc:
            "Smart systems provide convenient control of selected home functions.",

        fac9:
            "Solar Panel System",

        fac9Desc:
            "Solar technology contributes to a more efficient and sustainable residence.",

        facBrands:
            "SELECTED SYSTEMS & BRANDS",


        /* GALLERY */

        galleryKicker:
            "GALLERY",

        galleryTitle:
            "Explore the interiors.",

        galleryIntro:
            "A closer look at the living spaces, dining areas, majlis and private bedrooms of The Reserve.",

        filterAll:
            "All",

        filterLiving:
            "Living",

        filterDining:
            "Dining & Kitchen",

        filterMajlis:
            "Majlis",

        filterBedrooms:
            "Bedrooms",


        /* MATERIALS & FINISHES */

        materialsKicker:
            "MATERIALS & FINISHES",

        materialsTitle:
            "A refined palette, inside and out.",

        materialsIntro:
            "Carefully selected materials, textures and finishes create a cohesive architectural language throughout every residence.",

        materialsExterior:
            "Exterior Materials",

        materialsExteriorDesc:
            "Natural tones and textured architectural finishes establish an elegant and timeless exterior identity.",

        materialsInterior:
            "Interior Palette",

        materialsInteriorDesc:
            "Warm and balanced materials create a calm, refined atmosphere across the living spaces.",

        materialsFinishes:
            "Selected Finishes",

        materialsFinishesDesc:
            "Carefully coordinated surfaces, details and fixtures complete the architectural character.",


        /* PROJECT UPDATES */

        updatesKicker:
            "LIVE PROJECT",

        updatesTitle:
            "Follow construction progress.",

        updatesBody:
            "View the latest site photographs and project updates through the dedicated project folder.",

        siteUpdate:
            "Open Site Updates",

        renderings:
            "View 3D Renderings",


        /* CONTACT */

        contactKicker:
            "PRIVATE ENQUIRIES",

        contactTitle:
            "Request more information.",

        contactBody:
            "For availability, pricing, private viewings and further project information, contact our sales representative.",

        salesName:
            "Abdullah Al Tahan",

        name:
            "Name",

        phone:
            "Phone / WhatsApp",

        email:
            "Email",

        message:
            "Message",

        send:
            "Send Enquiry",

        sendWhatsApp:
            "Send via WhatsApp",

        whatsappDirect:
            "Contact on WhatsApp →",

        formNote:
            "Your enquiry will open in WhatsApp and can be sent directly to Abdullah Al Tahan.",


        /* FOOTER */

        backTop:
            "Back to top ↑",

        rights:
            "All rights reserved."

    },


    /* =====================================================
       ARABIC
       ===================================================== */

    ar: {

        /* HEADER */

        brand:
            "ذا ريزيرف",

        locationName:
            "يعفور",

        navProject:
            "المشروع",

        navResidences:
            "الفلل",

        navPlans:
            "المخططات",

        navGallery:
            "الصور",

        navUpdates:
            "تحديثات الموقع",

        navContact:
            "تواصل معنا",


        /* HERO */

        heroEyebrow:
            "فلل فاخرة حصرية · يعفور",

        heroTitle1:
            "صُممت لصفوة مختارة.",

        heroTitle2:
            "وصُنعت لحياة استثنائية.",

        heroLead:
            "مجموعة محدودة من فيلتين مميزتين تجمعان بين الخصوصية والعمارة الخالدة والجودة الاستثنائية.",

        explore:
            "استكشف الفلل",

        download:
            "تحميل البروشور",

        discover:
            "اكتشف",


        /* PROJECT */

        projectKicker:
            "المشروع",

        projectTitle:
            "ملاذ خاص على مقربة من المدينة.",

        projectBody:
            "صُممت كل فيلا للحياة العصرية، لتجمع بين العمارة الأنيقة والمساحات الرحبة والطابع الطبيعي، بما يحقق الراحة والخصوصية والقيمة طويلة الأمد.",

        statVillas:
            "فيلتان مميزتان",

        statLand:
            "مساحة الأرض لكل عقار",

        statBuilt:
            "المساحة المبنية",

        statPool:
            "مسبح خاص",


        /* LOCATION */

        locationKicker:
            "الموقع",

        locationTitle:
            "يعفور، على بُعد دقائق من دمشق.",

        locationBody:
            "وجهة راقية صُممت لتحقيق أقصى درجات الخصوصية، مع سهولة الوصول إلى المدينة والطرق الرئيسية.",

        minutes:
            "دقيقة",

        cityCenter:
            "وسط مدينة دمشق",

        beirutHighway:
            "طريق بيروت السريع",

        airport:
            "المطار الدولي",

        mapLink:
            "عرض الموقع على خرائط Google ←",


        /* ARCHITECTURE */

        architectureKicker:
            "العمارة",

        architectureTitle:
            "معاصرة بطبيعتها، خالدة بتصميمها.",

        architectureBody:
            "تكوين راقٍ من المواد الطبيعية والتفاصيل المتقنة والمساحات المفتوحة التي تربط المنزل بالمشهد المحيط.",

        featurePrivacy:
            "خصوصية بلا تنازل",

        featureSpace:
            "مساحات بلا قيود",

        featureNature:
            "الطبيعة جزء من الحياة",

        featureQuality:
            "جودة في كل تفصيل",


        /* LIFESTYLE */

        lifestyleKicker:
            "أسلوب الحياة",

        lifestyleTitle:
            "مساحات صُممت لحياة أجمل.",

        outdoorTitle:
            "المعيشة الخارجية",

        outdoorBody:
            "جلسة خارجية، جناح للطعام، مسبح ومطبخ خارجي لتجربة ضيافة متكاملة.",

        livingTitle:
            "غرفة المعيشة الرسمية",

        livingBody:
            "تشطيبات راقية وأجواء دافئة مناسبة للتجمعات الأنيقة والاسترخاء.",

        majlisTitle:
            "مجلس خاص",

        majlisBody:
            "مساحة ضيافة راقية تجمع بين حسن الاستقبال والراحة والفخامة المعاصرة.",

        diningTitle:
            "منطقة الطعام والمطبخ الاستعراضي",

        diningBody:
            "مساحة راقية للطعام اليومي والضيافة والتجمعات العائلية.",

        bedroomTitle:
            "غرف النوم الخاصة",

        bedroomBody:
            "مساحات هادئة وأنيقة صُممت للراحة والخصوصية والاستفادة من الضوء الطبيعي.",

        prepKitchenTitle:
            "مطبخ التحضير",

        prepKitchenBody:
            "مطبخ ثانوي عملي مخصص للتحضير والتخزين والاستخدام اليومي.",

        poolTitle:
            "المسبح الخاص",

        poolBody:
            "مسبح خاص تحيط به مساحات خارجية منسقة للاسترخاء واستقبال الضيوف.",


        /* VILLA SPECIFICATIONS */

        specKicker:
            "مواصفات الفيلا",

        specTitle:
            "رحابة مدروسة حتى أدق التفاصيل.",

        specIntro:
            "صُممت كل فيلا بمساحات معيشة رحبة وخصوصية وراحة يومية، مع مناطق مخصصة للعائلة والضيوف والخدمات.",

        bedrooms:
            "غرف نوم",

        halls:
            "صالات",

        parking:
            "مواقف داخل المرآب",

        majlis:
            "مجلس خارجي",

        maids:
            "غرف خادمة",

        guards:
            "غرف حراسة",

        driver:
            "غرفة سائق",

        basementHall:
            "صالة متعددة الاستخدامات في القبو",


        /* FLOOR PLANS */

        plansKicker:
            "المخططات",

        plansTitle:
            "استكشف تفاصيل الفيلا.",

        plansIntro:
            "اكتشف توزيع كل طابق والعلاقة بين الفيلا والمناظر الطبيعية والمساحات الخارجية الخاصة.",

        masterPlan:
            "المخطط العام",

        groundFloor:
            "الطابق الأرضي",

        firstFloor:
            "الطابق الأول",

        basement:
            "القبو",

        planLabel:
            "المخطط",


        /* FACILITIES & TECHNOLOGY */

        facKicker:
            "المرافق والتقنيات",

        facTitle:
            "راحة هندسية لكل فصول السنة.",

        facIntro:
            "أنظمة متكاملة وتقنيات مختارة بعناية توفر الراحة والكفاءة وسهولة الاستخدام في جميع أنحاء الفيلا.",

        fac1:
            "تكييف مركزي",

        fac1Desc:
            "نظام تحكم بالمناخ يوفر مستوى متناسقاً من الراحة في مختلف أنحاء المنزل.",

        fac2:
            "نظام VRF",

        fac2Desc:
            "إدارة فعالة لدرجات الحرارة حسب المناطق لتحقيق راحة أكبر وكفاءة أفضل في استهلاك الطاقة.",

        fac3:
            "تدفئة أرضية",

        fac3Desc:
            "تدفئة أرضية متكاملة توفر دفئاً مريحاً وغير ظاهر خلال المواسم الباردة.",

        fac4:
            "تدفئة المسبح",

        fac4Desc:
            "نظام تدفئة للمسبح يتيح الاستمتاع به لفترات أطول خلال العام.",

        fac5:
            "تجهيزات مطبخ مجهزة",

        fac6:
            "مصعد",

        fac6Desc:
            "مصعد داخلي خاص يوفر سهولة وراحة في التنقل بين جميع مستويات الفيلا.",

        fac7:
            "أدوات صحية فاخرة",

        fac7Desc:
            "تجهيزات وأدوات صحية مختارة بعناية تكمل أناقة المساحات الداخلية.",

        fac8:
            "منزل ذكي",

        fac8Desc:
            "أنظمة ذكية تتيح التحكم بسهولة في مجموعة من وظائف المنزل.",

        fac9:
            "نظام طاقة شمسية",

        fac9Desc:
            "تقنيات الطاقة الشمسية تساهم في رفع كفاءة الفيلا وتعزيز الاستدامة.",

        facBrands:
            "الأنظمة والعلامات التجارية المختارة",


        /* GALLERY */

        galleryKicker:
            "معرض الصور",

        galleryTitle:
            "استكشف المساحات الداخلية.",

        galleryIntro:
            "نظرة أقرب على مساحات المعيشة والطعام والمجلس وغرف النوم الخاصة في ذا ريزيرف.",

        filterAll:
            "الكل",

        filterLiving:
            "المعيشة",

        filterDining:
            "الطعام والمطبخ",

        filterMajlis:
            "المجلس",

        filterBedrooms:
            "غرف النوم",


        /* MATERIALS & FINISHES */

        materialsKicker:
            "المواد والتشطيبات",

        materialsTitle:
            "تناغم راقٍ في المواد، من الداخل والخارج.",

        materialsIntro:
            "مجموعة مختارة بعناية من المواد والخامات والتشطيبات تمنح كل فيلا طابعاً معمارياً متناسقاً.",

        materialsExterior:
            "مواد الواجهات الخارجية",

        materialsExteriorDesc:
            "ألوان طبيعية وخامات معمارية غنية تمنح الواجهات طابعاً أنيقاً وخالداً.",

        materialsInterior:
            "لوحة المواد الداخلية",

        materialsInteriorDesc:
            "خامات دافئة ومتوازنة تخلق أجواء هادئة وراقية في مختلف المساحات الداخلية.",

        materialsFinishes:
            "التشطيبات المختارة",

        materialsFinishesDesc:
            "أسطح وتفاصيل وتجهيزات منسقة بعناية تكمل الهوية المعمارية للفيلا.",


        /* PROJECT UPDATES */

        updatesKicker:
            "المشروع قيد التنفيذ",

        updatesTitle:
            "تابع تقدم أعمال الإنشاء.",

        updatesBody:
            "اطّلع على أحدث صور الموقع وتحديثات المشروع من خلال مجلد المشروع المخصص.",

        siteUpdate:
            "فتح تحديثات الموقع",

        renderings:
            "عرض التصاميم ثلاثية الأبعاد",


        /* CONTACT */

        contactKicker:
            "استفسارات خاصة",

        contactTitle:
            "اطلب المزيد من المعلومات.",

        contactBody:
            "للاستفسار عن التوفر والأسعار والزيارات الخاصة وتفاصيل المشروع، تواصل مع ممثل المبيعات.",

        salesName:
            "عبدالله الطحان",

        name:
            "الاسم",

        phone:
            "الهاتف / واتساب",

        email:
            "البريد الإلكتروني",

        message:
            "الرسالة",

        send:
            "إرسال الاستفسار",

        sendWhatsApp:
            "إرسال عبر واتساب",

        whatsappDirect:
            "تواصل عبر واتساب ←",

        formNote:
            "سيتم فتح استفسارك في واتساب لإرساله مباشرة إلى عبدالله الطحان.",


        /* FOOTER */

        backTop:
            "العودة للأعلى ↑",

        rights:
            "جميع الحقوق محفوظة."

    }

};


/* =========================================================
   LANGUAGE SYSTEM
   ========================================================= */

const root =
    document.documentElement;

const switcher =
    document.getElementById("langSwitch");

let lang =
    localStorage.getItem("reserveLang") || "en";


function t(key) {

    return (
        translations[lang]?.[key] ||
        translations.en[key] ||
        key
    );

}


function setLang(next) {

    lang =
        next === "ar"
            ? "ar"
            : "en";


    root.lang =
        lang;


    root.dir =
        lang === "ar"
            ? "rtl"
            : "ltr";


    document
        .querySelectorAll("[data-i18n]")
        .forEach(function (element) {

            const key =
                element.dataset.i18n;

            if (
                translations[lang] &&
                translations[lang][key]
            ) {

                element.textContent =
                    translations[lang][key];

            }

        });


    if (switcher) {

        switcher.textContent =
            lang === "en"
                ? "عربي"
                : "EN";

    }


    localStorage.setItem(
        "reserveLang",
        lang
    );


updateBrochureLinks();

updateFloorPlanLanguage();

const facilitiesImage =
    document.getElementById("facilitiesImage");

if (facilitiesImage) {
    facilitiesImage.src =
        lang === "ar"
            ? "./assets/facilities-full-ar.jpg"
            : "./assets/facilities-full.jpg";
}

const exteriorImage =
    document.getElementById("exteriorMaterialsImage");

if (exteriorImage) {
    exteriorImage.src =
        lang === "ar"
            ? "./assets/exterior-materials-ar.jpg"
            : "./assets/exterior-materials.jpg";
}

const interiorImage =
    document.getElementById("interiorMaterialsImage");

if (interiorImage) {
    interiorImage.src =
        lang === "ar"
            ? "./assets/interior-materials-ar.jpg"
            : "./assets/interior-materials.jpg";
}

const finishesImage =
    document.getElementById("finishesImage");

if (finishesImage) {
    finishesImage.src =
        lang === "ar"
            ? "./assets/finishes-ar.jpg"
            : "./assets/finishes.jpg";
}

}


if (switcher) {

    switcher.addEventListener(
        "click",
        function () {

            setLang(
                lang === "en"
                    ? "ar"
                    : "en"
            );

        }
    );

}


/* =========================================================
   BILINGUAL BROCHURE
   ========================================================= */

function updateBrochureLinks() {

    const links =
        document.querySelectorAll(
            ".brochure-download"
        );


    links.forEach(
        function (link) {

            link.href =
                lang === "ar"
                    ? "Reserve-Villa-Brochure-AR.pdf"
                    : "Reserve-Villa-Brochure.pdf";

        }
    );

}


/* =========================================================
   HEADER
   ========================================================= */

const header =
    document.querySelector(
        ".site-header"
    );


if (header) {

    function updateHeader() {

        header.classList.toggle(
            "scrolled",
            window.scrollY > 50
        );

    }


    window.addEventListener(
        "scroll",
        updateHeader,
        {
            passive: true
        }
    );


    updateHeader();

}


/* =========================================================
   MOBILE MENU
   ========================================================= */

const menuToggle =
    document.getElementById(
        "menuToggle"
    );

const mobileMenu =
    document.getElementById(
        "mobileMenu"
    );


if (
    menuToggle &&
    mobileMenu
) {

    menuToggle.addEventListener(
        "click",
        function () {

            mobileMenu.classList.toggle(
                "open"
            );


            document.body.classList.toggle(

                "menu-open",

                mobileMenu.classList.contains(
                    "open"
                )

            );

        }
    );


    mobileMenu
        .querySelectorAll("a")
        .forEach(function (link) {

            link.addEventListener(
                "click",
                function () {

                    mobileMenu.classList.remove(
                        "open"
                    );

                    document.body.classList.remove(
                        "menu-open"
                    );

                }
            );

        });

}


/* =========================================================
   REVEAL ANIMATION
   ========================================================= */

if (
    "IntersectionObserver" in window
) {

    const observer =
        new IntersectionObserver(

            function (entries) {

                entries.forEach(
                    function (entry) {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "visible"
                            );

                            observer.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },

            {
                threshold: 0.08
            }

        );


    document
        .querySelectorAll(".reveal")
        .forEach(
            function (element) {

                observer.observe(
                    element
                );

            }
        );

} else {

    document
        .querySelectorAll(".reveal")
        .forEach(
            function (element) {

                element.classList.add(
                    "visible"
                );

            }
        );

}


/* =========================================================
   FLOOR PLANS
   ========================================================= */

const floorplanTabs =
    document.querySelectorAll(
        ".floorplan-tab"
    );

const floorplanImage =
    document.getElementById(
        "floorplanImage"
    );

const floorplanTitle =
    document.getElementById(
        "floorplanTitle"
    );


function getPlanKey(button) {

    if (
        button.dataset.planKey
    ) {

        return button.dataset.planKey;

    }


    const title =
        (
            button.dataset.planTitle ||
            button.textContent ||
            ""
        )
        .trim()
        .toLowerCase();


    if (
        title.includes("ground")
    ) {

        return "groundFloor";

    }


    if (
        title.includes("first")
    ) {

        return "firstFloor";

    }


    if (
        title.includes("basement")
    ) {

        return "basement";

    }


    return "masterPlan";

}


function updateFloorPlanLanguage() {

    floorplanTabs.forEach(
        function (button) {

            const key =
                getPlanKey(button);

            button.textContent =
                t(key);

        }
    );


    if (
        floorplanTitle
    ) {

        const active =
            document.querySelector(
                ".floorplan-tab.active"
            );


        const key =
            active
                ? getPlanKey(active)
                : "masterPlan";


        floorplanTitle.textContent =
            t(key);

    }


    const captionLabel =
        document.querySelector(
            ".floorplans-caption span"
        );


    if (
        captionLabel
    ) {

        captionLabel.textContent =
            t("planLabel");

    }

}


if (
    floorplanTabs.length &&
    floorplanImage &&
    floorplanTitle
) {

    floorplanTabs.forEach(
        function (button) {

            button.addEventListener(
                "click",
                function () {

                    floorplanTabs.forEach(
                        function (tab) {

                            tab.classList.remove(
                                "active"
                            );

                        }
                    );


                    this.classList.add(
                        "active"
                    );


                    const newImage =
                        this.dataset.planImage;


                    const key =
                        getPlanKey(this);


                    if (
                        newImage
                    ) {

                        floorplanImage.classList.add(
                            "switching"
                        );


                        setTimeout(
                            function () {

                                floorplanImage.src =
                                    newImage;

                                floorplanImage.alt =
                                    t(key);

                                floorplanImage.classList.remove(
                                    "switching"
                                );

                            },
                            160
                        );

                    }


                    floorplanTitle.textContent =
                        t(key);

                }
            );

        }
    );

}


/* =========================================================
   GALLERY FILTER
   ========================================================= */

const filterButtons =
    document.querySelectorAll(
        ".gallery-filter"
    );

const galleryItems =
    document.querySelectorAll(
        ".gallery-item"
    );


filterButtons.forEach(
    function (button) {

        button.addEventListener(
            "click",
            function () {

                const selectedFilter =
                    this.dataset.filter;


                filterButtons.forEach(
                    function (btn) {

                        btn.classList.remove(
                            "active"
                        );

                    }
                );


                this.classList.add(
                    "active"
                );


                galleryItems.forEach(
                    function (item) {

                        const category =
                            item.dataset.category;


                        const show =
                            selectedFilter === "all" ||
                            category === selectedFilter;


                        item.classList.toggle(
                            "gallery-hidden",
                            !show
                        );

                    }
                );

            }
        );

    }
);


/* =========================================================
   GALLERY LIGHTBOX
   ========================================================= */

const galleryLightbox =
    document.getElementById(
        "galleryLightbox"
    );

const galleryLightboxImage =
    document.getElementById(
        "galleryLightboxImage"
    );

const galleryClose =
    document.getElementById(
        "galleryClose"
    );


if (
    galleryLightbox &&
    galleryLightboxImage
) {

    galleryItems.forEach(
        function (item) {

            item.addEventListener(
                "click",
                function () {

                    const image =
                        item.querySelector(
                            "img"
                        );


                    if (
                        !image
                    ) {

                        return;

                    }


                    galleryLightboxImage.src =
                        image.src;

                    galleryLightboxImage.alt =
                        image.alt;


                    galleryLightbox.classList.add(
                        "open"
                    );


                    document.body.style.overflow =
                        "hidden";

                }
            );

        }
    );

}


function closeGallery() {

    if (
        !galleryLightbox ||
        !galleryLightboxImage
    ) {

        return;

    }


    galleryLightbox.classList.remove(
        "open"
    );


    galleryLightboxImage.src =
        "";


    document.body.style.overflow =
        "";

}


if (
    galleryClose
) {

    galleryClose.addEventListener(
        "click",
        closeGallery
    );

}


if (
    galleryLightbox
) {

    galleryLightbox.addEventListener(
        "click",
        function (event) {

            if (
                event.target ===
                galleryLightbox
            ) {

                closeGallery();

            }

        }
    );

}


document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape" &&
            galleryLightbox &&
            galleryLightbox.classList.contains(
                "open"
            )
        ) {

            closeGallery();

        }

    }
);


/* =========================================================
   WHATSAPP ENQUIRY FORM
   ========================================================= */

const formButton =
    document.getElementById(
        "formButton"
    );


if (
    formButton
) {

    formButton.addEventListener(
        "click",
        function () {

            const name =
                document
                    .getElementById(
                        "contactName"
                    )
                    ?.value
                    .trim() || "-";


            const phone =
                document
                    .getElementById(
                        "contactPhone"
                    )
                    ?.value
                    .trim() || "-";


            const message =
                document
                    .getElementById(
                        "contactMessage"
                    )
                    ?.value
                    .trim();


            let lines;


            if (
                lang === "ar"
            ) {

                lines = [

                    "مرحباً أستاذ عبدالله، أود الاستفسار عن مشروع The Reserve - Yaafour.",

                    "",

                    `الاسم: ${name}`,

                    `رقم التواصل: ${phone}`,

                    `الرسالة: ${
                        message ||
                        "أرغب بالحصول على مزيد من المعلومات عن المشروع."
                    }`

                ];

            } else {

                lines = [

                    "Hello Mr. Abdullah, I would like to enquire about The Reserve - Yaafour.",

                    "",

                    `Name: ${name}`,

                    `Contact: ${phone}`,

                    `Message: ${
                        message ||
                        "I would like to receive more information about the project."
                    }`

                ];

            }


            const text =
                encodeURIComponent(
                    lines.join("\n")
                );


            window.open(

                `https://wa.me/96597616295?text=${text}`,

                "_blank",

                "noopener"

            );

        }
    );

}


/* =========================================================
   START WEBSITE LANGUAGE
   ========================================================= */

setLang(lang);