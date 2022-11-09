'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "c44669ff9f63957bcbc6301e580b98c5",
"index.html": "1b25a3557071ac227885e3f7c71d63c9",
"/": "1b25a3557071ac227885e3f7c71d63c9",
"main.dart.js": "9d01b950f2346235c7d8416a9aaa2861",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "dc970b340e591088de82fdc3ac92357a",
"assets/AssetManifest.json": "d996f10c19cb80aefce7a0816fc89dfa",
"assets/NOTICES": "674bd5bed78a2e5e0d24e3815b3ff397",
"assets/FontManifest.json": "7f94e14ae98a12e376af3b5f5057c4fd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "eee5de23958fdc50f1eba64cbd93bb1b",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/login_screen.jpeg": "4d8f83315e54f30dc4526c2e44734656",
"assets/assets/images/newtech/chest005.png": "4ab9417df01a9ce9eefff7b8ba40e555",
"assets/assets/images/newtech/thigh006.png": "5d0f8e3792d6d46e198c07c150f488d3",
"assets/assets/images/newtech/thigh004.png": "2173e0094bfd201015e2b875dddd70f3",
"assets/assets/images/newtech/back002.png": "e0d7f8e0a3b752f8e971b24b97498889",
"assets/assets/images/login_OR.png": "cc93cfc73f5aa6ad5cffbee517371fca",
"assets/assets/images/rfid_image.png": "27fd50000389ea45710c6b406ed3356d",
"assets/assets/images/ronfic_lab/no_prescription.png": "09fda1609280fdaa12176b01bdd039bc",
"assets/assets/images/ronfic_lab/question_mark.png": "f66c0fba8f0ebc9fb795512e3282a879",
"assets/assets/images/ronfic_lab/filter_image.png": "f7bb16647af9b032f2c09a5b9a37da09",
"assets/assets/images/ronfic_lab/workout_target/target_muscsle_selected.png": "b97536ca553e18681508f657ef784f1a",
"assets/assets/images/ronfic_lab/workout_target/target_weight_loss.png": "18465b2af9295f6d38bca317aa719259",
"assets/assets/images/ronfic_lab/workout_target/target_health_selected.png": "b75d069ec331ef3468eb7f5b85860bce",
"assets/assets/images/ronfic_lab/workout_target/target_muscle.png": "4d00ec5635c39fa7d78b26d10ee9ec92",
"assets/assets/images/ronfic_lab/workout_target/target_health.png": "e1217086a7fdcc0dca2a3c58ad1e7a0c",
"assets/assets/images/ronfic_lab/workout_target/target_weight_loss_selected.png": "2d3b2a4aa93694de8e2c1a77b2b3434e",
"assets/assets/images/ronfic_lab/run_green_icon.png": "390e5995dbb0fe83ccf0257630e1cf3b",
"assets/assets/images/ronfic_lab/leaderboard/trophy.png": "6555eb7f26696a7f3ffe290e093975ea",
"assets/assets/images/ronfic_lab/leaderboard/empty_image.png": "95c8e9e434be81086f4fc6d919f46a1d",
"assets/assets/images/ronfic_lab/leaderboard/workouts/4.gif": "0d69a07ea237e52622ccd8fc0baf3e7d",
"assets/assets/images/ronfic_lab/leaderboard/workouts/5.gif": "5090d3f8b014003d58d4e8078b846de1",
"assets/assets/images/ronfic_lab/leaderboard/workouts/7.gif": "1c5518ad1f33c0a708222fa35135e95f",
"assets/assets/images/ronfic_lab/leaderboard/workouts/6.gif": "0bbc3c65e86bcace90cdaccea9ec7027",
"assets/assets/images/ronfic_lab/leaderboard/workouts/2.gif": "e6b8144eb16aafa63a26875c5ca30365",
"assets/assets/images/ronfic_lab/leaderboard/workouts/3.gif": "ac03e2be31e37f7ead32f33bc22771fc",
"assets/assets/images/ronfic_lab/leaderboard/workouts/1.gif": "1127a4f910ceeba8e3b0582ece489cb7",
"assets/assets/images/ronfic_lab/leaderboard/workouts/8.gif": "1f884b3c091986fb4254505c49722cae",
"assets/assets/images/ronfic_lab/leaderboard/workouts/9.gif": "c3ae5c149512c0763cd579cbc5b03c83",
"assets/assets/images/ronfic_lab/leaderboard/workouts/10.gif": "9aaffe2b3598c08ebcc143fff760caba",
"assets/assets/images/ronfic_lab/leaderboard/trainer_sound/trainer_angel.png": "ba35fd96a8a7b05518cdeb55135abe89",
"assets/assets/images/ronfic_lab/leaderboard/trainer_sound/speaker_icon.png": "2edb290107ac17637316a36d5fcef528",
"assets/assets/images/ronfic_lab/leaderboard/trainer_sound/trainer_evil.png": "39ce3140c9290254de1430cf397f02f5",
"assets/assets/images/ronfic_lab/leaderboard/trainer_sound/trainer_ordinary.png": "ec6839587f5abaed2728e364ca2f4ce3",
"assets/assets/images/ronfic_lab/leaderboard/trainer_sound/play_icon.png": "566ccf5de13b1ad113cc5e59417d1fc6",
"assets/assets/images/ronfic_lab/leaderboard/user_progress/img.png": "95c8e9e434be81086f4fc6d919f46a1d",
"assets/assets/images/ronfic_lab/leaderboard/user_progress/up_action.png": "cdef99180fa0e80a6e30647c5460b8ed",
"assets/assets/images/ronfic_lab/leaderboard/user_progress/down_action.png": "da73682bfe37fca4995cf26d2fa2089c",
"assets/assets/images/ronfic_lab/leaderboard/user_progress/no_action.png": "10da51b2cac8cb0391054037d7bd990e",
"assets/assets/images/ronfic_lab/leaderboard/option_main/box_2nd.png": "6dd0b9e2588745f39913a265c0f9f1ed",
"assets/assets/images/ronfic_lab/leaderboard/option_main/box_3rd_1.png": "725724cebf33af70ff22b13c4447578b",
"assets/assets/images/ronfic_lab/leaderboard/option_main/box_1st_1.png": "9059fecadc49ebe0868b87d1c9debe50",
"assets/assets/images/ronfic_lab/leaderboard/option_main/box_2nd_1.png": "2f38293a8440bb8408cde95443ff3342",
"assets/assets/images/ronfic_lab/leaderboard/option_main/position_2nd.png": "ef255fac03f377c696b13c0ab0611105",
"assets/assets/images/ronfic_lab/leaderboard/option_main/position_1st.png": "e8b5cc598c005c4f75f0b6afd416400d",
"assets/assets/images/ronfic_lab/leaderboard/option_main/position_3rd.png": "40bb568515a7e75ad46e81ef33a839a9",
"assets/assets/images/ronfic_lab/leaderboard/option_main/box_3rd.png": "d1183368d2e6865d1c48e33f6ca3cbd0",
"assets/assets/images/ronfic_lab/leaderboard/option_main/box_1st.png": "c07edf8657142e8b30670deee45ef2b2",
"assets/assets/images/ronfic_lab/leaderboard/user-default.png": "21c3eb10c3d7979da06cac7087de6e5d",
"assets/assets/images/ronfic_lab/leaderboard/empty_image1.png": "9565e5cc1db084e977e61a83d2e2843c",
"assets/assets/images/ronfic_lab/sound.png": "a4bb2af60383c19e66d3934becf64a0e",
"assets/assets/images/ronfic_lab/ronfic_logo_logo_detailed.png": "774821426999598491d5f55e147451d2",
"assets/assets/images/ronfic_lab/background_image.png": "8a9f11750789c6d3ac77e7c397958bce",
"assets/assets/images/ronfic_lab/dashboard/top_curved_container.png": "b92030bd35c105e70c2cd36a48530f1b",
"assets/assets/images/ronfic_lab/ronfic_lab_smart_circuit.png": "981529832fb6df49e5a768cc679c2825",
"assets/assets/images/ronfic_lab/workout_icon.png": "23650e694866915ca444384ae3969ccd",
"assets/assets/images/ronfic_lab/ronfic_lab_logo_black.png": "7c7fd8ed1f9bcd817616c69c80115424",
"assets/assets/images/ronfic_lab/like_red_icon.png": "0dec2c02ee86460fc8ba04892124adbc",
"assets/assets/images/ronfic_lab/ronfic_lab.png": "d76404e4d2ea5008bf0f3e6e06be3a2f",
"assets/assets/images/ronfic_lab/workout/workout_6.png": "91fd1733525b2982e0e9e443a9fcbbce",
"assets/assets/images/ronfic_lab/workout/workout_7.png": "f6c294b6a402956de5d40dafd75d6e31",
"assets/assets/images/ronfic_lab/workout/workout_5.png": "257f627df271ace06022b783638f9960",
"assets/assets/images/ronfic_lab/workout/workout_4.png": "cadbeb4cc0d8aa42f127702c3fb928f3",
"assets/assets/images/ronfic_lab/workout/workout_0.png": "a155623bd246f90d62a30a96a3cf775c",
"assets/assets/images/ronfic_lab/workout/workout_1.png": "244a48d5e2fce3b14d2a560b88762755",
"assets/assets/images/ronfic_lab/workout/workout_3.png": "a311b46916e55b2dcdc2faf5654eb9a4",
"assets/assets/images/ronfic_lab/workout/workout_2.png": "2e0a9eb10eb6cad6034fcd1481c4dd17",
"assets/assets/images/ronfic_lab/user_status/good.png": "44f361ff01eadb4ad84e0ccec5fa31ef",
"assets/assets/images/ronfic_lab/user_status/perfect.png": "05ca972672d297bf66ad2548069ec444",
"assets/assets/images/ronfic_lab/user_status/bad.png": "1976e39655387106e0d20c229977741b",
"assets/assets/images/ronfic_lab/mic.png": "f180226e928ec4798b71b826377d7d3d",
"assets/assets/images/ronfic_logo_green.png": "d81b8d838f61aed9ec3a9e5ba82b0246",
"assets/assets/images/login_rftag.png": "7ce79504b695521a01ded9bcc96185a8",
"assets/assets/images/new_logo_ronfic.png": "c70d62a01d6d197d2637da95fb861375",
"assets/assets/images/ronfic_logo_title.png": "b760d6a601a69be92f0d6133c180971c",
"assets/assets/images/workout/chest001.jpg": "e7414e11617b90ba375eba432bbe48af",
"assets/assets/images/workout/chest001.png": "9e9cf55383d2e2f08c7c06ada398f1c8",
"assets/assets/images/workout/shoulder001.jpg": "ce429f268425f9636bb58ca84c808cba",
"assets/assets/images/workout/shoulder001.png": "c77be9387d5133fb9dd89d6767da340d",
"assets/assets/images/workout/back002.jpg": "683712a48d12415bd94c0c3de71928d9",
"assets/assets/images/workout/back002.png": "702f51799fd3b35d49311fe07a84cf7e",
"assets/assets/images/workout/back001.jpg": "eba2c0fa650a95fc57117a478e00177f",
"assets/assets/images/workout/back001.png": "1d2d45fefa2b0ca56fccb93c8499d718",
"assets/assets/images/check_mark.png": "a3af52e061b3a5ea329d07290e14c3c5",
"assets/assets/images/muscle/workout1/good.png": "193ce5c9bc4fd93967b911c9935374e3",
"assets/assets/images/muscle/workout1/good.jpg": "6401c8721aa20cbdbe83700e1767994c",
"assets/assets/images/muscle/workout1/leftpush_red.jpg": "786243004f9245599ada70ebaf7cbf61",
"assets/assets/images/muscle/workout1/leftpush_red.png": "0b57a5f28797d6c58e6c2f42082f1d31",
"assets/assets/images/muscle/workout1/rightpush_red.png": "2a0d00c18f4415ea2f33f94c9a5adc91",
"assets/assets/images/muscle/workout1/rightpush_red.jpg": "dc9d4ef5207b0ec41c121c7d02f498bb",
"assets/assets/images/muscle/workout1/leftpush_yellow.png": "639f8a6c445961593f9488b13e50bf9b",
"assets/assets/images/muscle/workout1/leftpush_yellow.jpg": "c0cc193a5c74448ba97b40d8eb9626e7",
"assets/assets/images/muscle/workout1/rightpush_yellow.jpg": "9cda28895aaf43e0dad144888a94ef16",
"assets/assets/images/muscle/workout1/rightpush_yellow.png": "8eb4f1734cffdd809cd80c38363e2836",
"assets/assets/images/muscle/workout5/good.png": "68d52b81b21d545bd062c46f5977a382",
"assets/assets/images/muscle/workout5/good.jpg": "4835f36f4619b302ab3b7579385a0027",
"assets/assets/images/muscle/workout5/lowerpush_red.png": "61033f71923c37cda4f61a31d1da6965",
"assets/assets/images/muscle/workout5/lowerpush_red.jpg": "b65383d928c2952b8068671a150c6efc",
"assets/assets/images/muscle/workout5/lowerpull_yellow.jpg": "eb31df7218c9197bbce841ae23e33237",
"assets/assets/images/muscle/workout5/lowerpull_yellow.png": "d5a05220141f72ac1ebf83688a15a3ec",
"assets/assets/images/muscle/workout5/lowerpull.jpg": "98326e2a80c0cbdd19fe0a65a2bfbdfa",
"assets/assets/images/muscle/workout5/lowerpush_yellow.jpg": "7213720c239ea9f2e4b12017258b95f8",
"assets/assets/images/muscle/workout5/lowerpush_yellow.png": "b49b7cb24a2712536233bff0fea69a28",
"assets/assets/images/muscle/workout5/lowerpull_red.png": "4c8a702d28636c98df72f02228f6d61a",
"assets/assets/images/muscle/workout2/good.png": "e2922d7e717edd641b22010ac7a9c06f",
"assets/assets/images/muscle/workout2/good.jpg": "79abdf7d07663d4e741b74e08ebf6665",
"assets/assets/images/muscle/workout2/leftpull_yellow.png": "70671503ab126782258c050f4f7a7df8",
"assets/assets/images/muscle/workout2/leftpull_yellow.jpg": "40cff9b6264d5168a462c0396b619f68",
"assets/assets/images/muscle/workout2/rightpull_yellow.jpg": "72bffcb8e881799b32fdcc1fa98401aa",
"assets/assets/images/muscle/workout2/rightpull_yellow.png": "352555243978ea3f67591d9dc5550ddc",
"assets/assets/images/muscle/workout2/rightpull_red.jpg": "c94f5ca0b8aa8adb1beecd6687d2241d",
"assets/assets/images/muscle/workout2/rightpull_red.png": "94c560eae99c16d1b165a73f5f8bc702",
"assets/assets/images/muscle/workout2/leftpull_red.png": "7fe52e70d5b8bc000145487f88c6aad6",
"assets/assets/images/muscle/workout2/leftpull_red.jpg": "f2b24b24854078047ad2519e3269abe4",
"assets/assets/images/muscle/workout3/rightrot_red.jpg": "c4d354ae1f22c28e3360bebf9264fe70",
"assets/assets/images/muscle/workout3/rightrot_red.png": "dba832d773546427a93e524e030d06e0",
"assets/assets/images/muscle/workout3/good.png": "dd97bc61749c6c9a749611df5b9f148f",
"assets/assets/images/muscle/workout3/good.jpg": "054dc2db5773fa799097a1dd71548dc1",
"assets/assets/images/muscle/workout3/leftrot_red.jpg": "0d61a91d9b386809d4668bf8fb6a1e6d",
"assets/assets/images/muscle/workout3/leftrot_red.png": "f8a16bf8e14bd719ff92416e57514794",
"assets/assets/images/muscle/workout3/leftrot_yellow.png": "dac26ce41b71fa33b0794df42814851b",
"assets/assets/images/muscle/workout3/leftrot_yellow.jpg": "3de662494490335f43e208aede2e0203",
"assets/assets/images/muscle/workout3/rightrot_yellow.jpg": "1bdf3a02b67a6d74b17440e9fce23ec0",
"assets/assets/images/muscle/workout3/rightrot_yellow.png": "c06625c8e06a8e8a16ac1ff3288f1599",
"assets/assets/images/muscle/workout4/good.png": "c5b879fe64af440081a22d4d0ab4864f",
"assets/assets/images/muscle/workout4/good.jpg": "f0327b42aed98025082d69de9e25a4d3",
"assets/assets/images/muscle/workout4/upperpush_red.jpg": "fb505cd1947fdf6daa64f6a84a099032",
"assets/assets/images/muscle/workout4/upperpush_red.png": "8b9cfac9d5def371903b457417ae33b5",
"assets/assets/images/muscle/workout4/empty.png": "1abca8cf2580e5d82c0442c6f8ef71b5",
"assets/assets/images/muscle/workout4/empty.jpg": "21464df4c1d80e94594a4bca126b333b",
"assets/assets/images/muscle/workout4/upperpush_yellow.png": "9b796964dab188bde026a83c034c0824",
"assets/assets/images/muscle/workout4/upperpush_yellow.jpg": "75db1f3a4d526424c0371fc218229c23",
"assets/assets/images/muscle/workout4/upperpull_yellow.png": "8b4a57f827df9acfbe8d46f6e7436b9e",
"assets/assets/images/muscle/workout4/upperpull_yellow.jpg": "46d5360301ebe653e9606b9c763ec805",
"assets/assets/images/muscle/workout4/upperpull_red.png": "af05d17fbe35e4b4f377ad0d62c71422",
"assets/assets/images/muscle/workout4/upperpull_red.jpg": "e98e4fc0b083687754fbcacecba828a5",
"assets/assets/images/close.png": "607429bf2f3d7b510112cb7c6af72fff",
"assets/assets/NanumGothic-ExtraBold.ttf": "4b1b824d86d866cb8245accebe324b62",
"assets/assets/audio/angel_trainer_sound.mp3": "c78bf9504a337f7ee2ef44e967257d30",
"assets/assets/audio/evil_trainer_sound.mp3": "9009c3fd1edbb7766c87c3d360013064",
"assets/assets/audio/ordinary_trainer_sound.mp3": "a4876e0b59780ad85d598479af86b2b5",
"assets/assets/NanumGothic-Bold.ttf": "4fa4ea43222779743fc8cd4b4835d04e",
"assets/assets/NanumGothic-Regular.ttf": "3cbe9257e888255cb2dad0d8a80a7759",
"assets/assets/fonts/NotoSansKR-Regular.ttf": "c5a13b7ad2db067cbc072c9715a7ec44",
"assets/assets/fonts/Montserrat-SemiBold.ttf": "c88cecbffad6d8e731fd95de49561ebd",
"assets/assets/fonts/Montserrat.ttf": "9c46095118380d38f12e67c916b427f9",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
