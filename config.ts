const list = [
  {
    url: "https://www.closedloop.ai",
    category: "ai",
    outputFileName: "closedloop",
  },
  {
    url: "https://www.firefoo.app/docs",
    category: "db",
    outputFileName: "firefoo",
  },
  {
    url: "https://app.theneo.io/rendernet-ai/rendernet-apis-beta",
    category: "ai",
    outputFileName: "rendernet-apis-beta",
  },
  {
    url: "https://github.com/gorhom/react-native-bottom-sheet/pulls",
    category: "react-native",
    outputFileName: "gorhom-bottom-sheet-github-pulls",
  },
  {
    url: "https://github.com/gorhom/react-native-bottom-sheet/issues",
    category: "react-native",
    outputFileName: "gorhom-bottom-sheet-github-issues",
  },
  {
    url: "https://github.com/gorhom/react-native-bottom-sheet/discussions",
    category: "react-native",
    outputFileName: "gorhom-bottom-sheet-github-discussions",
  },
  {
    url: "https://ui.gorhom.dev/components/bottom-sheet",
    category: "react-native",
    outputFileName: "gorhom-bottom-sheet",
  },
  {
    url: "https://aticlix.net",
    category: "income",
    outputFileName: "aticlix",
  },
  {
    url: "https://www.offernation.com",
    category: "income",
    outputFileName: "offernation",
  },
  {
    url: "https://www.swagbucks.com/sitemap",
    category: "income",
    outputFileName: "swagbucks",
  },
  {
    url: "https://serpclix.com",
    category: "income",
    outputFileName: "serpclix",
  },
  {
    url: "https://rapidapi.com/guides",
    category: "api",
    outputFileName: "rapidapi-guides",
  },
  {
    url: "https://docs.brew.sh",
    category: "dev-tools",
    outputFileName: "homebrew-docs",
  },
  {
    url: "https://www.raspberrypi.com/documentation",
    category: "devices",
    outputFileName: "raspberry-pi-docs",
  },
  {
    url: "https://docs.adonisjs.com",
    category: "nodejs",
    outputFileName: "adonis-docs",
  },
  {
    url: "https://deepkit.io/documentation",
    category: "ts",
    outputFileName: "deepkit-docs",
  },
  {
    url: "https://docs.openstatus.dev",
    category: "analytics",
    outputFileName: "openstatus-docs",
  },
  {
    url: "https://supertokens.com/docs",
    category: "auth",
    outputFileName: "supertokens-docs",
  },
  {
    url: "https://docs.quivr.app",
    category: "ai",
    outputFileName: "quivr-assistant-docs",
  },
  {
    url: "https://supabase.com/docs",
    category: "db",
    outputFileName: "supabase-docs",
  },
  {
    url: "https://docs.nhost.io",
    category: "backend",
    outputFileName: "nhost-docs",
  },
  {
    url: "https://www.namecheap.com/support/knowledgebase",
    category: "domain",
    outputFileName: "namecheap-docs",
  },
  {
    url: "https://gsap.com/docs/v3",
    category: "js",
    outputFileName: "gsap-docs",
  },
  {
    url: "https://lodash.com/docs/4.17.15",
    category: "js",
    outputFileName: "lodash-docs",
  },
  {
    url: "https://storybook.js.org/docs",
    category: "js",
    outputFileName: "storybook-docs",
  },
  {
    url: "https://vitejs.dev/guide",
    category: "js",
    outputFileName: "vite-docs",
  },
  {
    url: "https://vitejs.dev/config",
    category: "js",
    outputFileName: "vite-config-docs",
  },
  {
    url: "https://eslint.org/docs/latest",
    category: "js",
    outputFileName: "eslint-docs",
  },
  {
    url: "https://palantir.github.io//tslint",
    category: "ts",
    outputFileName: "tslint-docs",
  },
  {
    url: "https://github.com/lukeed/clsx",
    category: "js",
    outputFileName: "clsx-docs",
  },
  {
    url: "https://www.notion.so/help",
    category: "productivity",
    outputFileName: "notion-docs",
  },
  {
    url: "https://docs.mixpanel.com/docs",
    category: "analytics",
    outputFileName: "mixpanel-docs",
  },
  {
    url: "https://docs.mixpanel.com/guides",
    category: "analytics",
    outputFileName: "mixpanel-guides",
  },
  {
    url: "https://developers.google.com/analytics",
    category: "analytics",
    outputFileName: "google-analytics-docs",
  },
  {
    url: "https://docs.scarf.sh",
    category: "analytics",
    outputFileName: "scarfsh-docs",
  },
  {
    url: "https://github.com/thysultan/stylis",
    category: "css",
    outputFileName: "stylis-docs",
  },
  {
    url: "https://svgo.dev/docs",
    category: "svg",
    outputFileName: "svgo-nodejs-docs",
  },
  {
    url: "https://docs.fontawesome.com",
    category: "icons",
    outputFileName: "fontawesome-docs",
  },
  {
    url: "https://data.austintexas.gov",
    category: "gov",
    outputFileName: "austin-texas-data",
  },
  {
    url: "https://api.slack.com/docs",
    category: "productivity",
    outputFileName: "slack-docs",
  },
  {
    url: "https://discord.com/developers/docs",
    category: "productivity",
    outputFileName: "discord-docs",
  },
  {
    url: "https://docs.joinmastodon.org",
    category: "productivity",
    outputFileName: "mastodon-docs",
  },
  {
    url: "https://redis.io/docs/latest",
    category: "data",
    outputFileName: "redis-docs",
  },
  {
    url: "https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki",
    category: "ai",
    outputFileName: "stable-diffusion-automatic1111-webui-wiki",
  },
  {
    url: "https://tanstack.com",
    category: "react",
    outputFileName: "tanstack-docs",
  },
  {
    url: "https://www.hl7.org/fhir",
    category: "healthcare",
    outputFileName: "fhir-docs",
  },
  {
    url: "https://www.flickr.com/services",
    category: "images",
    outputFileName: "flickr-services-docs",
  },
  {
    url: "https://blog.codepen.io/documentation",
    category: "dev-tools",
    outputFileName: "codepen-docs",
  },
  {
    url: "https://jsdoc.app",
    category: "js",
    outputFileName: "jsdoc",
  },
  {
    url: "https://tsdoc.org",
    category: "ts",
    outputFileName: "tsdoc",
  },
  {
    url: "https://www.w3.org",
    category: "web",
    outputFileName: "w3c-org",
  },
  {
    url: "https://a11y-101.com",
    category: "a11y",
    outputFileName: "a11y-101",
  },
  {
    url: "https://www.w3.org/WAI",
    category: "a11y",
    outputFileName: "w3c-wai",
  },
  {
    url: "https://airbnb.io/lottie",
    category: "animations",
    outputFileName: "lottie-airbnb",
  },
  {
    url: "https://docs.stripe.com",
    category: "payments",
    outputFileName: "stripe-docs",
  },
  {
    url: "https://shopify.dev/docs",
    category: "ecommerce",
    outputFileName: "shopify-docs",
  },
  {
    url: "https://bit.dev/docs",
    category: "dev-tools",
    outputFileName: "bit-dev-docs",
  },
  {
    url: "https://bit.dev/reference",
    category: "dev-tools",
    outputFileName: "bit-dev-reference",
  },
  {
    url: "https://bit.cloud",
    category: "dev-tools",
    outputFileName: "bit-dev-cloud",
  },
  {
    url: "https://usafacts.org",
    category: "gov",
    outputFileName: "usa-facts",
  },
  {
    url: "https://adr.github.io",
    category: "dev-tools",
    outputFileName: "github-adr-docs",
  },
  {
    url: "https://frontendmasters.com/guides/front-end-handbook/2024",
    category: "courses",
    outputFileName: "frontend-masters-handbook-2024",
  },
  {
    url: "https://frontendmasters.com/guides/javascript-enlightenment",
    category: "courses",
    outputFileName: "frontend-masters-js-enlightenment",
  },
  {
    url: "https://www.reactenlightenment.com",
    category: "courses",
    outputFileName: "frontend-masters-react-enlightenment",
  },
  {
    url: "https://docs.flipper.net",
    category: "devices",
    outputFileName: "flipper-docs",
  },
  {
    url: "https://sass-lang.com/documentation",
    category: "css",
    outputFileName: "sass-lang-docs",
  },
  {
    url: "https://docs.npmjs.com/",
    category: "js",
    outputFileName: "npm-docs",
  },
  {
    url: "https://www.osintdojo.com",
    category: "osint",
    outputFileName: "osint-dojo",
  },
  {
    url: "https://www.apollographql.com/docs",
    category: "db",
    outputFileName: "graphql-apollo",
  },
  {
    url: "https://www.etsy.com/developers/documentation",
    category: "ecommerce",
    outputFileName: "etsy",
  },
  {
    url: "https://developers.webflow.com",
    category: "dev-tools",
    outputFileName: "webflow-dev-docs",
  },
  {
    url: "https://docs.datadoghq.com",
    category: "dev-tools",
    outputFileName: "datadog-dev-docs",
  },
  {
    url: "https://solito.dev",
    category: "react",
    outputFileName: "solito-dev-docs",
  },
  {
    url: "https://turbo.build/repo/docs",
    category: "utils",
    outputFileName: "turbo-build-docs",
  },
  {
    url: "https://docs.docker.com",
    category: "cloud",
    outputFileName: "docker-docs",
  },
  {
    url: "https://docs.n8n.io",
    category: "nodejs",
    outputFileName: "n8n-docs",
  },
  {
    url: "https://www.levels.fyi",
    category: "career",
    outputFileName: "levels-fyi",
  },
];

export const defaultConfig = {
  data: list,
};
