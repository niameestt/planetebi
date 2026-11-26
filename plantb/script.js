const celestialData = {
    sun: {
        name: "მზე (The Sun)",
        category: "ვარსკვლავი / ყვითელი ჯუჯა",
        mass: "1.989 × 10³⁰ კგ",
        radius: "696,340 კმ",
        distance: "0 კმ (ცენტრი)",
        orbit: "230 მლნ წელი (გალაქტიკური)",
        temp: "5,500°C (ზედაპირი)",
        moons: "8 პლანეტა",
        description: "მზე მზის სისტემის ცენტრალური ვარსკვლავია და სისტემის მთლიანი მასის 99.86%-ს შეადგენს. მის ბირთვში მიმდინარე თერმობირთვული რეაქციები ყოველ წამს ასობით მილიონ ტონა წყალბადს ჰელიუმად გარდაქმნის.",
        atmosphere: "ფოტოსფერო, ქრომოსფერო და გვირგვინი (კორონა), სადაც ტემპერატურა 2 მილიონ გრადუსს აღწევს. ძირითადად შედგება წყალბადისა (73%) და ჰელიუმისგან (25%).",
        facts: [
            "მზის სინათლეს დედამიწამდე მოსაღწევად ზუსტად 8 წუთი და 20 წამი სჭირდება.",
            "მზის შიგნით დაახლოებით 1.3 მილიონი დედამიწის ზომის პლანეტა მოთავსდებოდა.",
            "მზე საკუთარ ღერძზე არაერთგვაროვნად ბრუნავს: ეკვატორზე 25 დღე სჭირდება, პოლუსებთან კი — 35 დღე."
        ]
    },
    mercury: {
        name: "მერკური (Mercury)",
        category: "კლდოვანი პლანეტა",
        mass: "3.301 × 10²³ კგ",
        radius: "2,439.7 კმ",
        distance: "57.9 მლნ კმ",
        orbit: "88 დედამიწის დღე",
        temp: "-180°C-დან +430°C-მდე",
        moons: "0",
        description: "მზესთან ყველაზე ახლოს მდებარე და ზომით ყველაზე პატარა პლანეტა. მისი ზედაპირი დაფარულია უძველესი კრატერებით, რომელთაგან უდიდესი — კალორისის აუზი — 1,550 კმ სიგანისაა.",
        atmosphere: "თითქმის არ გააჩნია; აქვს მხოლოდ უკიდურესად თხელი ეგზოსფერო, რომელიც მზის ქარის მიერ ზედაპირიდან ამოგლეჯილი ჟანგბადის, ნატრიუმისა და წყალბადის ატომებისგან შედგება.",
        facts: [
            "მიუხედავად მზესთან სიახლოვისა, მერკური ყველაზე ცხელი პლანეტა არ არის — ატმოსფეროს უქონლობის გამო ღამით სითბოს ვერ ინარჩუნებს.",
            "მერკურიზე ერთი მზისიერი დღე-ღამე 176 დედამიწის დღეს გრძელდება, რაც მის ორ წელიწადს უდრის.",
            "პლანეტის რკინის ბირთვი მისი მთლიანი მოცულობის დაახლოებით 85%-ს იკავებს."
        ]
    },
    venus: {
        name: "ვენერა (Venus)",
        category: "კლდოვანი პლანეტა",
        mass: "4.867 × 10²⁴ კგ",
        radius: "6,051.8 კმ",
        distance: "108.2 მლნ კმ",
        orbit: "225 დედამიწის დღე",
        temp: "+465°C (მუდმივი)",
        moons: "0",
        description: "ზომითა და მასით დედამიწის ტყუპისცალად წოდებული პლანეტა, თუმცა უკიდურესად მტრული გარემოთი. მისი ზედაპირი დაფარულია ვულკანური დაბლობებითა და მაღალი მთიანეთებით.",
        atmosphere: "უკიდურესად მკვრივი (დედამიწაზე 92-ჯერ მეტი წნევით), შედგება 96.5% ნახშირორჟანგისა და გოგირდმჟავას სქელი ღრუბლებისგან, რაც ძლიერ სათბურის ეფექტს ქმნის.",
        facts: [
            "ვენერა მზის სისტემის ყველაზე ცხელი პლანეტაა — მის ზედაპირზე ტყვიაც კი დნება.",
            "იგი საპირისპირო მიმართულებით (აღმოსავლეთიდან დასავლეთისკენ) ბრუნავს, ამიტომ იქ მზე დასავლეთიდან ამოდის.",
            "ვენერაზე ერთი ღერძული ბრუნი (243 დღე) უფრო ხანგრძლივია, ვიდრე მისი წელიწადი (225 დღე)."
        ]
    },
    earth: {
        name: "დედამიწა (Earth)",
        category: "კლდოვანი პლანეტა",
        mass: "5.972 × 10²⁴ კგ",
        radius: "6,371 კმ",
        distance: "149.6 მლნ კმ",
        orbit: "365.25 დღე",
        temp: "+15°C (საშუალო)",
        moons: "1 (მთვარე)",
        description: "ერთადერთი ცნობილი ციური სხეული სამყაროში, სადაც სიცოცხლე არსებობს. ზედაპირის 71% დაფარულია თხევადი წყლის ოკეანეებით, ხოლო ტექტონიკური ფილები მუდმივად ცვლიან რელიეფს.",
        atmosphere: "78% აზოტი, 21% ჟანგბადი, 0.9% არგონი და მცირე რაოდენობით ნახშირორჟანგი. ოზონის შრე და მაგნიტური ველი იცავს ბიოსფეროს კოსმოსური რადიაციისგან.",
        facts: [
            "დედამიწის ბრუნვა თანდათან ნელდება — ყოველ საუკუნეში დღე-ღამე დაახლოებით 1.8 მილიწამით იზრდება.",
            "პლანეტის ღერძი 23.4 გრადუსითაა დახრილი, რაც წელიწადის დროების ცვლილებას განაპირობებს.",
            "დედამიწა მზის სისტემის ყველაზე მკვრივი პლანეტაა (5.51 გ/სმ³)."
        ]
    },
    moon: {
        name: "მთვარე (Moon)",
        category: "ბუნებრივი თანამგზავრი",
        mass: "7.342 × 10²² კგ",
        radius: "1,737.4 კმ",
        distance: "384,400 კმ დედამიწიდან",
        orbit: "27.3 დედამიწის დღე",
        temp: "-173°C-დან +127°C-მდე",
        moons: "0",
        description: "დედამიწის ერთადერთი ბუნებრივი თანამგზავრი და მზის სისტემაში სიდიდით მეხუთე მთვარე. იგი ასტაბილურებს დედამიწის ღერძის დახრილობას და იწვევს ოკეანის მიქცევა-მოქცევას.",
        atmosphere: "ატმოსფერო არ გააჩნია, რის გამოც ზედაპირი დაუცველია მეტეორიტებისა და მზის ქარისგან.",
        facts: [
            "მთვარე ყოველწლიურად დაახლოებით 3.8 სანტიმეტრით შორდება დედამიწას.",
            "სინქრონული ბრუნვის გამო დედამიწიდან მთვარის ზედაპირის მხოლოდ 59%-ის დანახვაა შესაძლებელი.",
            "მთვარის მტვერს (რეგოლითს) დენთის სუნი აქვს, რაც ასტრონავტებმა ხომალდში დაბრუნებისას შენიშნეს."
        ]
    },
    mars: {
        name: "მარსი (Mars)",
        category: "კლდოვანი პლანეტა",
        mass: "6.417 × 10²³ კგ",
        radius: "3,389.5 კმ",
        distance: "227.9 მლნ კმ",
        orbit: "687 დედამიწის დღე",
        temp: "-63°C (საშუალო)",
        moons: "2 (ფობოსი, დეიმოსი)",
        description: "წითელი პლანეტა, რომელმაც ეს შეფერილობა ნიადაგში რკინის ოქსიდის (ჟანგის) დიდი შემცველობის გამო მიიღო. წარსულში მის ზედაპირზე მდინარეები და ტბები არსებობდა.",
        atmosphere: "გაიშვიათებული (დედამიწის წნევის 1%-ზე ნაკლები), შედგება 95% ნახშირორჟანგის, 2.6% აზოტისა და 1.9% არგონისგან.",
        facts: [
            "მარსზე მდებარეობს მთა ოლიმპოსი — მზის სისტემის უდიდესი ვულკანი, რომლის სიმაღლე 21.9 კმ-ია (თითქმის 3-ჯერ მაღალი ევერესტზე).",
            "მარსზე მზის ჩასვლა ლურჯი ფერისაა ატმოსფეროში შეწონილი წვრილი მტვრის ნაწილაკების გამო.",
            "მარსის თანამგზავრი ფობოსი პლანეტასთან იმდენად ახლოს ბრუნავს, რომ დღეში ორჯერ ამოდის და ჩადის."
        ]
    },
    jupiter: {
        name: "იუპიტერი (Jupiter)",
        category: "გაზის გიგანტი",
        mass: "1.898 × 10²⁷ კგ",
        radius: "69,911 კმ",
        distance: "778.5 მლნ კმ",
        orbit: "11.86 დედამიწის წელი",
        temp: "-110°C (ღრუბლებში)",
        moons: "95 ცნობილი თანამგზავრი",
        description: "მზის სისტემის უდიდესი პლანეტა, რომლის მასა ყველა სხვა პლანეტის ჯამურ მასას 2.5-ჯერ აღემატება. მას არ გააჩნია მყარი ზედაპირი და უზარმაზარი ატმოსფერული შტორმებით გამოირჩევა.",
        atmosphere: "90% წყალბადი და 10% ჰელიუმი, ამიაკის კრისტალებისგან შემდგარი ფერადი ზოლებითა და ქარიშხლებით, სადაც ქარის სიჩქარე 600 კმ/სთ-ს აღწევს.",
        facts: [
            "დიდი წითელი ლაქა გიგანტური ანტიციკლონური შტორმია, რომელიც დედამიწაზე დიდია და სულ მცირე 350 წელია მძვინვარებს.",
            "იუპიტერი ყველაზე სწრაფად მბრუნავი პლანეტაა — ერთი დღე იქ სულ რაღაც 9 საათსა და 55 წუთს გრძელდება.",
            "მის თანამგზავრ ევროპაზე ყინულის ქერქის ქვეშ გლობალური თხევადი ოკეანე მდებარეობს."
        ]
    },
    saturn: {
        name: "სატურნი (Saturn)",
        category: "გაზის გიგანტი",
        mass: "5.683 × 10²⁶ კგ",
        radius: "58,232 კმ",
        distance: "1.434 მლრდ კმ",
        orbit: "29.45 დედამიწის წელი",
        temp: "-140°C",
        moons: "146 ცნობილი თანამგზავრი",
        description: "ცნობილია თავისი თვალწარმტაცი რგოლების სისტემით, რომელიც მილიარდობით ყინულისა და ქვის ნატეხისგან შედგება. რგოლების დიამეტრი 282,000 კმ-ია, სისქე კი ზოგან მხოლოდ 10 მეტრი.",
        atmosphere: "ძირითადად წყალბადი (96%) და ჰელიუმი (3%). ჩრდილოეთ პოლუსზე მდებარეობს უნიკალური ექვსკუთხა (ჰექსაგონალური) ღრუბლოვანი წარმონაქმნი.",
        facts: [
            "სატურნის საშუალო სიმკვრივე წყალზე ნაკლებია (0.687 გ/სმ³) — საკმარისად დიდ ოკეანეში იგი წყალზე იტივტივებდა.",
            "მისი უდიდესი თანამგზავრი ტიტანი ერთადერთი მთვარეა მზის სისტემაში, რომელსაც მკვრივი ატმოსფერო და თხევადი მეთანის ტბები აქვს.",
            "სატურნის რგოლები ასტრონომიული საზომით ახალგაზრდაა და შესაძლოა 100-300 მილიონ წელიწადში გაქრეს."
        ]
    },
    uranus: {
        name: "ურანი (Uranus)",
        category: "ყინულის გიგანტი",
        mass: "8.681 × 10²⁵ კგ",
        radius: "25,362 კმ",
        distance: "2.871 მლრდ კმ",
        orbit: "84 დედამიწის წელი",
        temp: "-195°C",
        moons: "28 ცნობილი თანამგზავრი",
        description: "პირველი პლანეტა, რომელიც ტელესკოპის საშუალებით აღმოაჩინეს (უილიამ ჰერშელმა 1781 წელს). იგი უნიკალურია იმით, რომ ბრუნვის ღერძი თითქმის ორბიტის სიბრტყეში აქვს დახრილი (97.8°).",
        atmosphere: "წყალბადი, ჰელიუმი და 2.3% მეთანი, რომელიც წითელ სინათლეს შთანთქავს და პლანეტას მოცისფრო-მომწვანო ელფერს აძლევს.",
        facts: [
            "ურანი ფაქტობრივად გვერდზე წამოწოლილი ბრუნავს, რის გამოც თითოეულ პოლუსზე 42 წელი უწყვეტი დღეა, შემდეგ კი 42 წელი — უწყვეტი ღამე.",
            "ურანი მზის სისტემის ყველაზე ცივი პლანეტაა, სადაც მინიმალური ტემპერატურა -224°C-მდე ეცემა.",
            "მის 27 თანამგზავრს სახელები უილიამ შექსპირისა და ალექსანდრე პოუპის პერსონაჟების პატივსაცემად დაერქვა."
        ]
    },
    neptune: {
        name: "ნეპტუნი (Neptune)",
        category: "ყინულის გიგანტი",
        mass: "1.024 × 10²⁶ კგ",
        radius: "24,622 კმ",
        distance: "4.495 მლრდ კმ",
        orbit: "164.8 დედამიწის წელი",
        temp: "-200°C",
        moons: "16 ცნობილი თანამგზავრი",
        description: "მზის სისტემის ყველაზე შორეული პლანეტა, რომელიც შეუიარაღებელი თვალით არ ჩანს. იგი პირველი პლანეტაა, რომლის არსებობაც ჯერ მათემატიკური გამოთვლებით იწინასწარმეტყველეს.",
        atmosphere: "წყალბადი, ჰელიუმი და მეთანი. აქ მძვინვარებს მზის სისტემაში ყველაზე ძლიერი ზებგერითი ქარები, რომელთა სიჩქარე 2,100 კმ/სთ-ს აღწევს.",
        facts: [
            "1846 წელს აღმოჩენის შემდეგ, ნეპტუნმა მზის გარშემო თავისი პირველი სრული ბრუნი მხოლოდ 2011 წელს დაასრულა.",
            "ნეპტუნის უდიდესი თანამგზავრი ტრიტონი პლანეტის ბრუნვის საპირისპიროდ მოძრაობს და აზოტის გეიზერებს აფრქვევს.",
            "ნეპტუნის სიღრმეში მაღალი წნევისა და ტემპერატურის გამო ნახშირბადი ალმასის კრისტალებად გარდაიქმნება და წვიმასავით ცვივა."
        ]
    }
};

let scene, camera, renderer, controls;
const celestialObjects = {};
const orbits = [];
let timeSpeed = 1.0;
let isPaused = false;
let orbitsVisible = true;
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
let focusedObject = null;
let isTransitioning = false;
const defaultCameraPosition = new THREE.Vector3(0, 210, 420);
const previousTargetPos = new THREE.Vector3();

const scaleDistances = {
    mercury: 36,
    venus: 58,
    earth: 86,
    mars: 124,
    jupiter: 190,
    saturn: 268,
    uranus: 345,
    neptune: 420
};

const scaleRadii = {
    sun: 16,
    mercury: 1.6,
    venus: 2.7,
    earth: 3.1,
    moon: 0.85,
    mars: 2.2,
    jupiter: 7.8,
    saturn: 6.2,
    uranus: 4.3,
    neptune: 4.1
};

const axialTilts = {
    mercury: 0.03,
    venus: 3.09,
    earth: 0.41,
    mars: 0.44,
    jupiter: 0.05,
    saturn: 0.47,
    uranus: 1.71,
    neptune: 0.49
};

const orbitalSpeeds = {
    mercury: 0.015 * 4.15,
    venus: 0.015 * 1.62,
    earth: 0.015,
    mars: 0.015 * 0.53,
    jupiter: 0.015 * 0.084,
    saturn: 0.015 * 0.034,
    uranus: 0.015 * 0.012,
    neptune: 0.015 * 0.006
};

const rotationalSpeeds = {
    sun: 0.004,
    mercury: 0.001,
    venus: -0.0005,
    earth: 0.02,
    mars: 0.019,
    jupiter: 0.06,
    saturn: 0.055,
    uranus: 0.015,
    neptune: 0.018
};

window.addEventListener('load', () => {
    initThreeEnvironment();
    setupEventListeners();
    animate();
});

function initThreeEnvironment() {
    const container = document.getElementById('canvas-container');

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 6000);
    camera.position.copy(defaultCameraPosition);

    renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: "high-performance" });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    container.appendChild(renderer.domElement);

    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.maxDistance = 1800;
    controls.minDistance = 8;

    const ambientLight = new THREE.AmbientLight(0x223355, 0.55);
    scene.add(ambientLight);

    const sunLight = new THREE.PointLight(0xfff5e0, 2.8, 5000, 0.25);
    sunLight.position.set(0, 0, 0);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 2048;
    sunLight.shadow.mapSize.height = 2048;
    sunLight.shadow.bias = -0.0005;
    scene.add(sunLight);

    createStarfield();
    createSun();
    createPlanetsAndMoons();
    createAsteroidBelt();

    window.addEventListener('resize', onWindowResize);
}

function createPlanetTextures(id, baseColorHex, accentColorHex, secondaryColorHex) {
    const width = 1024;
    const height = 512;

    const colorCanvas = document.createElement('canvas');
    colorCanvas.width = width;
    colorCanvas.height = height;
    const ctx = colorCanvas.getContext('2d');

    const bumpCanvas = document.createElement('canvas');
    bumpCanvas.width = width;
    bumpCanvas.height = height;
    const bCtx = bumpCanvas.getContext('2d');

    ctx.fillStyle = baseColorHex;
    ctx.fillRect(0, 0, width, height);

    bCtx.fillStyle = '#808080';
    bCtx.fillRect(0, 0, width, height);

    if (id === 'jupiter' || id === 'saturn' || id === 'uranus' || id === 'neptune') {
        for (let y = 0; y < height; y += 2) {
            const wave = Math.sin(y * 0.05) * 0.5 + 0.5;
            ctx.fillStyle = wave > 0.5 ? accentColorHex : secondaryColorHex;
            ctx.globalAlpha = Math.random() * 0.25 + 0.08;
            ctx.fillRect(0, y, width, Math.random() * 8 + 2);
        }

        if (id === 'jupiter') {
            ctx.save();
            ctx.beginPath();
            ctx.ellipse(width * 0.65, height * 0.62, 55, 32, 0, 0, Math.PI * 2);
            ctx.fillStyle = '#b84a27';
            ctx.globalAlpha = 0.85;
            ctx.fill();
            ctx.restore();
        }
    } else if (id === 'earth') {
        for (let i = 0; i < 45; i++) {
            const x = Math.random() * width;
            const y = Math.random() * (height * 0.75) + height * 0.12;
            const rx = Math.random() * 90 + 25;
            const ry = Math.random() * 55 + 20;

            ctx.beginPath();
            ctx.ellipse(x, y, rx, ry, Math.random() * Math.PI, 0, Math.PI * 2);
            ctx.fillStyle = i % 3 === 0 ? '#5c7a38' : '#2d6a3e';
            ctx.globalAlpha = 0.85;
            ctx.fill();

            bCtx.beginPath();
            bCtx.ellipse(x, y, rx, ry, 0, 0, Math.PI * 2);
            bCtx.fillStyle = '#c8c8c8';
            bCtx.globalAlpha = 0.6;
            bCtx.fill();
        }

        ctx.fillStyle = '#f8fafc';
        ctx.globalAlpha = 0.9;
        ctx.fillRect(0, 0, width, 28);
        ctx.fillRect(0, height - 28, width, 28);
    } else {
        for (let i = 0; i < 180; i++) {
            const x = Math.random() * width;
            const y = Math.random() * height;
            const r = Math.random() * 24 + 3;

            ctx.beginPath();
            ctx.arc(x, y, r, 0, Math.PI * 2);
            ctx.fillStyle = i % 2 === 0 ? accentColorHex : secondaryColorHex;
            ctx.globalAlpha = Math.random() * 0.35 + 0.1;
            ctx.fill();

            bCtx.beginPath();
            bCtx.arc(x, y, r, 0, Math.PI * 2);
            bCtx.fillStyle = i % 2 === 0 ? '#404040' : '#b5b5b5';
            bCtx.globalAlpha = 0.4;
            bCtx.fill();
        }
    }

    const map = new THREE.CanvasTexture(colorCanvas);
    map.wrapS = THREE.RepeatWrapping;
    map.wrapT = THREE.ClampToEdgeWrapping;

    const bumpMap = new THREE.CanvasTexture(bumpCanvas);
    bumpMap.wrapS = THREE.RepeatWrapping;
    bumpMap.wrapT = THREE.ClampToEdgeWrapping;

    return { map, bumpMap };
}

function createStarfield() {
    const starsCount = 22000;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(starsCount * 3);
    const colors = new Float32Array(starsCount * 3);

    const starPalette = [
        new THREE.Color(0xffffff),
        new THREE.Color(0xcce6ff),
        new THREE.Color(0xffe9c4),
        new THREE.Color(0xffd2a1)
    ];

    for (let i = 0; i < starsCount; i++) {
        const i3 = i * 3;
        const r = 1200 + Math.random() * 3500;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);

        positions[i3] = r * Math.sin(phi) * Math.cos(theta);
        positions[i3 + 1] = r * Math.sin(phi) * Math.sin(theta);
        positions[i3 + 2] = r * Math.cos(phi);

        const color = starPalette[Math.floor(Math.random() * starPalette.length)];
        const brightness = 0.5 + Math.random() * 0.5;
        colors[i3] = color.r * brightness;
        colors[i3 + 1] = color.g * brightness;
        colors[i3 + 2] = color.b * brightness;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
        size: 2.2,
        vertexColors: true,
        transparent: true,
        opacity: 0.92,
        sizeAttenuation: true
    });

    const starField = new THREE.Points(geometry, material);
    scene.add(starField);
    celestialObjects.starField = starField;
}

function createSun() {
    const geometry = new THREE.SphereGeometry(scaleRadii.sun, 64, 64);

    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');

    const grad = ctx.createLinearGradient(0, 0, 0, canvas.height);
    grad.addColorStop(0, '#ffcc33');
    grad.addColorStop(0.5, '#ff5500');
    grad.addColorStop(1, '#ff8800');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < 600; i++) {
        ctx.beginPath();
        ctx.arc(Math.random() * canvas.width, Math.random() * canvas.height, Math.random() * 14 + 2, 0, Math.PI * 2);
        ctx.fillStyle = i % 2 === 0 ? '#ffee66' : '#cc2200';
        ctx.globalAlpha = Math.random() * 0.35;
        ctx.fill();
    }

    const texture = new THREE.CanvasTexture(canvas);
    const material = new THREE.MeshBasicMaterial({ map: texture });

    const sunMesh = new THREE.Mesh(geometry, material);
    sunMesh.userData = { id: 'sun' };
    scene.add(sunMesh);
    celestialObjects.sun = sunMesh;

    const innerGlowGeo = new THREE.SphereGeometry(scaleRadii.sun * 1.12, 32, 32);
    const innerGlowMat = new THREE.MeshBasicMaterial({
        color: 0xffaa22,
        transparent: true,
        opacity: 0.4,
        side: THREE.BackSide,
        blending: THREE.AdditiveBlending
    });
    sunMesh.add(new THREE.Mesh(innerGlowGeo, innerGlowMat));

    const outerGlowGeo = new THREE.SphereGeometry(scaleRadii.sun * 1.38, 32, 32);
    const outerGlowMat = new THREE.MeshBasicMaterial({
        color: 0xff5500,
        transparent: true,
        opacity: 0.16,
        side: THREE.BackSide,
        blending: THREE.AdditiveBlending
    });
    sunMesh.add(new THREE.Mesh(outerGlowGeo, outerGlowMat));
}

function createOrbitLine(radius) {
    const points = [];
    const segments = 180;
    for (let i = 0; i <= segments; i++) {
        const theta = (i / segments) * Math.PI * 2;
        points.push(new THREE.Vector3(Math.cos(theta) * radius, 0, Math.sin(theta) * radius));
    }
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const material = new THREE.LineBasicMaterial({
        color: 0x38bdf8,
        transparent: true,
        opacity: 0.22
    });
    const line = new THREE.Line(geometry, material);
    scene.add(line);
    orbits.push(line);
    return line;
}

function createAsteroidBelt() {
    const count = 900;
    const geometry = new THREE.DodecahedronGeometry(0.35, 0);
    const material = new THREE.MeshStandardMaterial({
        color: 0x8c8278,
        roughness: 0.9,
        metalness: 0.2
    });

    const instancedMesh = new THREE.InstancedMesh(geometry, material, count);
    const dummy = new THREE.Object3D();

    for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const radius = 148 + Math.random() * 24;
        const yOffset = (Math.random() - 0.5) * 6;

        dummy.position.set(
            Math.cos(angle) * radius,
            yOffset,
            Math.sin(angle) * radius
        );
        dummy.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
        const scale = 0.4 + Math.random() * 1.4;
        dummy.scale.set(scale, scale * 0.8, scale);
        dummy.updateMatrix();
        instancedMesh.setMatrixAt(i, dummy.matrix);
    }

    scene.add(instancedMesh);
    celestialObjects.asteroidBelt = instancedMesh;
}

function createRingTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');

    const grad = ctx.createLinearGradient(0, 0, canvas.width, 0);
    grad.addColorStop(0.0, 'rgba(180, 160, 120, 0.1)');
    grad.addColorStop(0.2, 'rgba(218, 198, 152, 0.85)');
    grad.addColorStop(0.45, 'rgba(160, 140, 105, 0.4)');
    grad.addColorStop(0.52, 'rgba(20, 20, 25, 0.05)');
    grad.addColorStop(0.6, 'rgba(230, 212, 168, 0.92)');
    grad.addColorStop(0.85, 'rgba(190, 172, 132, 0.65)');
    grad.addColorStop(1.0, 'rgba(150, 135, 100, 0.0)');

    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    return new THREE.CanvasTexture(canvas);
}

function createPlanetsAndMoons() {
    const configs = [
        { id: 'mercury', distance: scaleDistances.mercury, radius: scaleRadii.mercury, color: '#9a9691', accent: '#635f5b', secondary: '#b8b3ad' },
        { id: 'venus', distance: scaleDistances.venus, radius: scaleRadii.venus, color: '#e6be7a', accent: '#b8863b', secondary: '#f5d79e', atmosphereColor: 0xffcc66 },
        {
            id: 'earth', distance: scaleDistances.earth, radius: scaleRadii.earth, color: '#1d63b8', accent: '#2e7d32', secondary: '#4fc3f7', atmosphereColor: 0x38bdf8,
            moons: [{ id: 'moon', distance: 6.2, radius: scaleRadii.moon, speed: 0.08, color: '#cfd4da', accent: '#8e959e' }]
        },
        {
            id: 'mars', distance: scaleDistances.mars, radius: scaleRadii.mars, color: '#c84b19', accent: '#8a2d0b', secondary: '#e07244', atmosphereColor: 0xe06d44,
            moons: [
                { id: 'phobos', distance: 4.1, radius: 0.35, speed: 0.11, color: '#85756e', accent: '#4a403c' },
                { id: 'deimos', distance: 6.1, radius: 0.25, speed: 0.07, color: '#9e8c85', accent: '#5c504b' }
            ]
        },
        {
            id: 'jupiter', distance: scaleDistances.jupiter, radius: scaleRadii.jupiter, color: '#c99342', accent: '#8c5c22', secondary: '#e8cfa6',
            moons: [
                { id: 'io', distance: 10.5, radius: 0.55, speed: 0.09, color: '#e3c544', accent: '#9c7c16' },
                { id: 'europa', distance: 13.5, radius: 0.5, speed: 0.07, color: '#cbe4f0', accent: '#6d9cb5' },
                { id: 'ganymede', distance: 17.0, radius: 0.78, speed: 0.05, color: '#999296', accent: '#575255' },
                { id: 'callisto', distance: 20.5, radius: 0.68, speed: 0.035, color: '#615959', accent: '#2e2a2a' }
            ]
        },
        {
            id: 'saturn', distance: scaleDistances.saturn, radius: scaleRadii.saturn, color: '#e6d598', accent: '#ab9859', secondary: '#f5eac4',
            hasRings: true
        },
        { id: 'uranus', distance: scaleDistances.uranus, radius: scaleRadii.uranus, color: '#7ce0ed', accent: '#45a5b3', secondary: '#b2f2fa', atmosphereColor: 0x7ce0ed },
        { id: 'neptune', distance: scaleDistances.neptune, radius: scaleRadii.neptune, color: '#2b58de', accent: '#16318a', secondary: '#5c85ff', atmosphereColor: 0x3b82f6 }
    ];

    configs.forEach(cfg => {
        createOrbitLine(cfg.distance);

        const orbitPivot = new THREE.Group();
        orbitPivot.rotation.y = Math.random() * Math.PI * 2;
        scene.add(orbitPivot);

        const planetGroup = new THREE.Group();
        planetGroup.position.x = cfg.distance;
        planetGroup.rotation.z = axialTilts[cfg.id] || 0;
        orbitPivot.add(planetGroup);

        const geometry = new THREE.SphereGeometry(cfg.radius, 48, 48);
        const textures = createPlanetTextures(cfg.id, cfg.color, cfg.accent, cfg.secondary);
        const material = new THREE.MeshStandardMaterial({
            map: textures.map,
            bumpMap: textures.bumpMap,
            bumpScale: 0.06,
            roughness: 0.78,
            metalness: 0.1
        });

        const planetMesh = new THREE.Mesh(geometry, material);
        planetMesh.castShadow = true;
        planetMesh.receiveShadow = true;
        planetMesh.userData = { id: cfg.id };
        planetGroup.add(planetMesh);

        if (cfg.atmosphereColor) {
            const atmoGeo = new THREE.SphereGeometry(cfg.radius * 1.045, 32, 32);
            const atmoMat = new THREE.MeshBasicMaterial({
                color: cfg.atmosphereColor,
                transparent: true,
                opacity: 0.16,
                side: THREE.BackSide,
                blending: THREE.AdditiveBlending
            });
            planetGroup.add(new THREE.Mesh(atmoGeo, atmoMat));
        }

        if (cfg.hasRings) {
            const innerR = cfg.radius * 1.35;
            const outerR = cfg.radius * 2.45;
            const ringGeo = new THREE.RingGeometry(innerR, outerR, 96);

            const pos = ringGeo.attributes.position;
            const uv = ringGeo.attributes.uv;
            const v3 = new THREE.Vector3();
            for (let i = 0; i < pos.count; i++) {
                v3.fromBufferAttribute(pos, i);
                const len = v3.length();
                uv.setXY(i, (len - innerR) / (outerR - innerR), 0.5);
            }

            ringGeo.rotateX(Math.PI / 2);
            const ringMat = new THREE.MeshStandardMaterial({
                map: createRingTexture(),
                side: THREE.DoubleSide,
                transparent: true,
                opacity: 0.92,
                roughness: 0.6
            });
            const ringMesh = new THREE.Mesh(ringGeo, ringMat);
            ringMesh.receiveShadow = true;
            planetGroup.add(ringMesh);
        }

        if (cfg.moons) {
            cfg.moons.forEach(mCfg => {
                const moonPivot = new THREE.Group();
                moonPivot.rotation.y = Math.random() * Math.PI * 2;
                planetGroup.add(moonPivot);

                const moonGeo = new THREE.SphereGeometry(mCfg.radius, 24, 24);
                const moonTex = createPlanetTextures(mCfg.id, mCfg.color, mCfg.accent, mCfg.color);
                const moonMat = new THREE.MeshStandardMaterial({
                    map: moonTex.map,
                    bumpMap: moonTex.bumpMap,
                    bumpScale: 0.03,
                    roughness: 0.9
                });
                const moonMesh = new THREE.Mesh(moonGeo, moonMat);
                moonMesh.position.x = mCfg.distance;
                moonMesh.castShadow = true;
                moonMesh.receiveShadow = true;
                moonMesh.userData = { id: mCfg.id };
                moonPivot.add(moonMesh);

                if (!celestialObjects.moons) celestialObjects.moons = [];
                celestialObjects.moons.push({
                    mesh: moonMesh,
                    pivot: moonPivot,
                    speed: mCfg.speed
                });
            });
        }

        celestialObjects[cfg.id] = {
            mesh: planetMesh,
            group: planetGroup,
            pivot: orbitPivot,
            orbitalSpeed: orbitalSpeeds[cfg.id],
            rotationalSpeed: rotationalSpeeds[cfg.id]
        };
    });
}

function setupEventListeners() {
    window.addEventListener('pointerdown', onDocumentClick);

    document.getElementById('toggle-orbits').addEventListener('click', () => {
        orbitsVisible = !orbitsVisible;
        orbits.forEach(o => o.visible = orbitsVisible);
        document.getElementById('orbit-status').innerText = orbitsVisible ? 'ჩართული' : 'გამორთული';
    });

    document.getElementById('reset-view').addEventListener('click', resetCameraView);

    document.getElementById('pause-time').addEventListener('click', () => {
        isPaused = !isPaused;
        document.getElementById('pause-icon').className = isPaused ? 'fa-solid fa-play text-xs md:text-sm' : 'fa-solid fa-pause text-xs md:text-sm';
    });

    document.getElementById('close-panel-btn').addEventListener('click', closeInfoPanel);

    document.getElementById('panel-focus-btn').addEventListener('click', () => {
        if (focusedObject) focusOnMesh(focusedObject);
    });

    document.querySelectorAll('.speed-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const speed = parseFloat(btn.getAttribute('data-speed'));
            changeSpeed(speed);
        });
    });

    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const bodyId = btn.getAttribute('data-body');
            focusBody(bodyId);
        });
    });
}

function onDocumentClick(event) {
    if (event.target.closest('#info-panel') || event.target.closest('header') || event.target.closest('nav') || event.target.closest('.glass-panel')) {
        return;
    }

    const hint = document.getElementById('hint-overlay');
    if (hint) {
        hint.style.opacity = '0';
        setTimeout(() => hint.remove(), 700);
    }

    const clientX = event.clientX || (event.touches && event.touches[0] ? event.touches[0].clientX : 0);
    const clientY = event.clientY || (event.touches && event.touches[0] ? event.touches[0].clientY : 0);

    mouse.x = (clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(clientY / window.innerHeight) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);

    const targets = [celestialObjects.sun];
    Object.keys(celestialObjects).forEach(k => {
        if (celestialObjects[k].mesh) targets.push(celestialObjects[k].mesh);
    });
    if (celestialObjects.moons) {
        celestialObjects.moons.forEach(m => targets.push(m.mesh));
    }

    const intersects = raycaster.intersectObjects(targets, true);
    if (intersects.length > 0) {
        let hit = intersects[0].object;
        while (hit && !hit.userData.id && hit.parent) {
            hit = hit.parent;
        }
        if (hit && hit.userData && hit.userData.id) {
            selectCelestialBody(hit.userData.id, hit);
        }
    }
}

function selectCelestialBody(id, mesh) {
    const data = celestialData[id];
    if (!data) return;

    focusedObject = mesh;
    mesh.getWorldPosition(previousTargetPos);

    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-body') === id);
    });

    document.getElementById('panel-category').innerText = data.category;
    document.getElementById('panel-title').innerText = data.name;
    document.getElementById('stat-mass').innerText = data.mass;
    document.getElementById('stat-radius').innerText = data.radius;
    document.getElementById('stat-distance').innerText = data.distance;
    document.getElementById('stat-orbit').innerText = data.orbit;
    document.getElementById('stat-temp').innerText = data.temp;
    document.getElementById('stat-moons').innerText = data.moons;
    document.getElementById('panel-desc').innerText = data.description;
    document.getElementById('panel-atmosphere').innerText = data.atmosphere;

    const factsList = document.getElementById('panel-facts');
    factsList.innerHTML = '';
    data.facts.forEach(factText => {
        const li = document.createElement('li');
        li.innerText = factText;
        factsList.appendChild(li);
    });

    document.getElementById('info-panel').classList.remove('translate-x-[120%]');
    focusOnMesh(mesh);
}

function focusOnMesh(mesh) {
    isTransitioning = true;
    const worldPos = new THREE.Vector3();
    mesh.getWorldPosition(worldPos);
    const radius = mesh.geometry ? (mesh.geometry.parameters.radius || 3) * 3.2 : 12;
    const zoomMultiplier = window.innerWidth < 768 ? 3.4 : 2.3;

    gsap.to(camera.position, {
        x: worldPos.x + radius * zoomMultiplier,
        y: worldPos.y + radius * (zoomMultiplier * 0.55),
        z: worldPos.z + radius * (zoomMultiplier * 1.15),
        duration: 1.5,
        ease: "power3.out",
        onUpdate: () => {
            mesh.getWorldPosition(worldPos);
            controls.target.copy(worldPos);
            controls.update();
        },
        onComplete: () => {
            mesh.getWorldPosition(previousTargetPos);
            isTransitioning = false;
        }
    });
}

function focusBody(id) {
    const target = id === 'sun' ? celestialObjects.sun : celestialObjects[id]?.mesh;
    if (target) selectCelestialBody(id, target);
}

function closeInfoPanel() {
    document.getElementById('info-panel').classList.add('translate-x-[120%]');
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    focusedObject = null;
}

function resetCameraView() {
    closeInfoPanel();
    isTransitioning = true;
    gsap.to(camera.position, {
        x: defaultCameraPosition.x,
        y: defaultCameraPosition.y,
        z: defaultCameraPosition.z,
        duration: 1.6,
        ease: "power3.inOut",
        onUpdate: () => {
            controls.target.set(0, 0, 0);
            controls.update();
        },
        onComplete: () => {
            isTransitioning = false;
        }
    });
}

function changeSpeed(val) {
    timeSpeed = val;
    const label = val === 1 ? '1.0x (რეალური)' : val.toFixed(1) + 'x';
    document.getElementById('speed-label').innerText = label;
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
    requestAnimationFrame(animate);

    const delta = 0.016 * (isPaused ? 0 : timeSpeed);

    if (celestialObjects.sun) {
        celestialObjects.sun.rotation.y += rotationalSpeeds.sun * delta;
    }

    Object.keys(celestialObjects).forEach(key => {
        if (key !== 'sun' && key !== 'starField' && key !== 'moons' && key !== 'asteroidBelt' && celestialObjects[key]) {
            const body = celestialObjects[key];
            body.pivot.rotation.y += body.orbitalSpeed * delta;
            body.mesh.rotation.y += body.rotationalSpeed * delta;
        }
    });

    if (celestialObjects.moons) {
        celestialObjects.moons.forEach(m => {
            m.pivot.rotation.y += m.speed * delta;
            m.mesh.rotation.y += 0.015 * delta;
        });
    }

    if (celestialObjects.asteroidBelt) {
        celestialObjects.asteroidBelt.rotation.y += 0.0012 * delta;
    }

    if (celestialObjects.starField) {
        celestialObjects.starField.rotation.y += 0.00008 * delta;
    }

    if (focusedObject && !isTransitioning) {
        const currentTargetPos = new THREE.Vector3();
        focusedObject.getWorldPosition(currentTargetPos);
        const offset = currentTargetPos.clone().sub(previousTargetPos);
        camera.position.add(offset);
        controls.target.copy(currentTargetPos);
        previousTargetPos.copy(currentTargetPos);
    }

    controls.update();
    renderer.render(scene, camera);
}