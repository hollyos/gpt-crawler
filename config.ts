import { Config } from "./src/config";

const list = [
  {
    url: "https://www.closedloop.ai",
    outputFileName: "output/ai/closedloop.json",
  },
  {
    url: "https://www.firefoo.app/docs",
    outputFileName: "output/db/firefoo.json",
  },
  {
    url: "https://app.theneo.io/rendernet-ai/rendernet-apis-beta",
    outputFileName: "output/ai/rendernet-apis-beta.json",
  },
  {
    url: "https://github.com/gorhom/react-native-bottom-sheet/pulls",
    outputFileName: "output/react-native/gorhom-bottom-sheet-github-pulls.json",
  },
  {
    url: "https://github.com/gorhom/react-native-bottom-sheet/issues",
    outputFileName:
      "output/react-native/gorhom-bottom-sheet-github-issues.json",
  },
  {
    url: "https://github.com/gorhom/react-native-bottom-sheet/discussions",
    outputFileName:
      "output/react-native/gorhom-bottom-sheet-github-discussions.json",
  },
  {
    url: "https://ui.gorhom.dev/components/bottom-sheet",
    outputFileName: "output/react-native/gorhom-bottom-sheet.json",
  },
  {
    url: "https://aticlix.net",
    outputFileName: "output/income/aticlix.json",
  },
  {
    url: "https://www.offernation.com",
    outputFileName: "output/income/offernation.json",
  },
  {
    url: "https://www.swagbucks.com/sitemap",
    outputFileName: "output/income/swagbucks.json",
  },
  {
    url: "https://serpclix.com",
    outputFileName: "output/income/serpclix.json",
  },
  {
    url: "https://rapidapi.com/guides",
    outputFileName: "output/api/rapidapi-guides.json",
  },
  {
    url: "https://docs.brew.sh",
    outputFileName: "output/dev-tools/homebrew-docs.json",
  },
  {
    url: "https://www.raspberrypi.com/documentation",
    outputFileName: "output/devices/raspberry-pi-docs.json",
  },
  {
    url: "https://docs.adonisjs.com",
    outputFileName: "output/nodejs/adonis-docs.json",
  },
  {
    url: "https://deepkit.io/documentation",
    outputFileName: "output/ts/deepkit-docs.json",
  },
  {
    url: "https://docs.openstatus.dev",
    outputFileName: "output/analytics/openstatus-docs.json",
  },
  {
    url: "https://supertokens.com/docs",
    outputFileName: "output/auth/supertokens-docs.json",
  },
  {
    url: "https://docs.quivr.app",
    outputFileName: "output/ai/quivr-assistant-docs.json",
  },
  {
    url: "https://supabase.com/docs",
    outputFileName: "output/db/supabase-docs.json",
  },
  {
    url: "https://docs.nhost.io",
    outputFileName: "output/backend/nhost-docs.json",
  },
  {
    url: "https://www.namecheap.com/support/knowledgebase",
    outputFileName: "output/domain/namecheap-docs.json",
  },
  {
    url: "https://gsap.com/docs/v3",
    outputFileName: "output/js/gsap-docs.json",
  },
  {
    url: "https://lodash.com/docs/4.17.15",
    outputFileName: "output/js/lodash-docs.json",
  },
  {
    url: "https://storybook.js.org/docs",
    outputFileName: "output/js/storybook-docs.json",
  },
  {
    url: "https://vitejs.dev/guide",
    outputFileName: "output/js/vite-docs.json",
  },
  {
    url: "https://vitejs.dev/config",
    outputFileName: "output/js/vite-config-docs.json",
  },
  {
    url: "https://eslint.org/docs/latest",
    outputFileName: "output/js/eslint-docs.json",
  },
  {
    url: "https://palantir.github.io//tslint",
    outputFileName: "output/ts/tslint-docs.json",
  },
  {
    url: "https://github.com/lukeed/clsx",
    outputFileName: "output/js/clsx-docs.json",
  },
  {
    url: "https://www.notion.so/help",
    outputFileName: "output/productivity/notion-docs.json",
  },
  {
    url: "https://docs.mixpanel.com/docs",
    outputFileName: "output/analytics/mixpanel-docs.json",
  },
  {
    url: "https://docs.mixpanel.com/guides",
    outputFileName: "output/analytics/mixpanel-guides.json",
  },
  {
    url: "https://developers.google.com/analytics",
    outputFileName: "output/analytics/google-analytics-docs.json",
  },
  {
    url: "https://docs.scarf.sh",
    outputFileName: "output/analytics/scarfsh-docs.json",
  },
  {
    url: "https://github.com/thysultan/stylis",
    outputFileName: "output/css/stylis-docs.json",
  },
  {
    url: "https://svgo.dev/docs",
    outputFileName: "output/svg/svgo-nodejs-docs.json",
  },
  {
    url: "https://docs.fontawesome.com",
    outputFileName: "output/icons/fontawesome-docs.json",
  },
  {
    url: "https://data.austintexas.gov",
    outputFileName: "output/gov/austin-texas-data.json",
  },
  {
    url: "https://api.slack.com/docs",
    outputFileName: "output/productivity/slack-docs.json",
  },
  {
    url: "https://discord.com/developers/docs",
    outputFileName: "output/productivity/discord-docs.json",
  },
  {
    url: "https://docs.joinmastodon.org",
    outputFileName: "output/productivity/mastodon-docs.json",
  },
  {
    url: "https://redis.io/docs/latest",
    outputFileName: "output/data/redis-docs.json",
  },
  {
    url: "https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki",
    outputFileName: "output/ai/stable-diffusion-automatic1111-webui-wiki.json",
  },
  {
    url: "https://tanstack.com",
    outputFileName: "output/react/tanstack-docs.json",
  },
  {
    url: "https://www.hl7.org/fhir",
    outputFileName: "output/healthcare/fhir-docs.json",
  },
  {
    url: "https://www.flickr.com/services",
    outputFileName: "output/images/flickr-services-docs.json",
  },
  {
    url: "https://blog.codepen.io/documentation",
    outputFileName: "output/dev-tools/codepen-docs.json",
  },
  {
    url: "https://jsdoc.app",
    outputFileName: "output/js/jsdoc.json",
  },
  {
    url: "https://tsdoc.org",
    outputFileName: "output/ts/tsdoc.json",
  },
  {
    url: "https://www.w3.org",
    outputFileName: "output/web/w3c-org.json",
  },
  {
    url: "https://a11y-101.com",
    outputFileName: "output/a11y/a11y-101.json",
  },
  {
    url: "https://www.w3.org/WAI",
    outputFileName: "output/a11y/w3c-wai.json",
  },
  {
    url: "https://airbnb.io/lottie",
    outputFileName: "output/animations/lottie-airbnb.json",
  },
  {
    url: "https://docs.stripe.com",
    outputFileName: "output/payments/stripe-docs.json",
  },
  {
    url: "https://shopify.dev/docs",
    outputFileName: "output/ecommerce/shopify-docs.json",
  },
  {
    url: "https://bit.dev/docs",
    outputFileName: "output/dev-tools/bit-dev-docs.json",
  },
  {
    url: "https://bit.dev/reference",
    outputFileName: "output/dev-tools/bit-dev-reference.json",
  },
  {
    url: "https://bit.cloud",
    outputFileName: "output/dev-tools/bit-dev-cloud.json",
  },
  {
    url: "https://usafacts.org",
    outputFileName: "output/gov/usa-facts.json",
  },
  {
    url: "https://adr.github.io",
    outputFileName: "output/dev-tools/github-adr-docs.json",
  },
  {
    url: "https://frontendmasters.com/guides/front-end-handbook/2024",
    outputFileName: "output/courses/frontend-masters-handbook-2024.json",
  },
  {
    url: "https://frontendmasters.com/guides/javascript-enlightenment",
    outputFileName: "output/courses/frontend-masters-js-enlightenment.json",
  },
  {
    url: "https://www.reactenlightenment.com",
    outputFileName: "output/courses/frontend-masters-react-enlightenment.json",
  },
  {
    url: "https://docs.flipper.net",
    outputFileName: "output/devices/flipper-docs.json",
  },
  {
    url: "https://sass-lang.com/documentation",
    outputFileName: "output/css/sass-lang-docs.json",
  },
  {
    url: "https://docs.npmjs.com/",
    outputFileName: "output/js/npm-docs.json",
  },
  {
    url: "https://www.osintdojo.com",
    outputFileName: "output/osint/osint-dojo.json",
  },
  {
    url: "https://www.apollographql.com/docs",
    outputFileName: "output/db/graphql-apollo.json",
  },
  {
    url: "https://www.etsy.com/developers/documentation",
    outputFileName: "output/ecommerce/etsy.json",
  },
  {
    url: "https://developers.webflow.com",
    outputFileName: "output/dev-tools/webflow-dev-docs.json",
  },
  {
    url: "https://docs.datadoghq.com",
    outputFileName: "output/dev-tools/datadog-dev-docs.json",
  },
  {
    url: "https://solito.dev",
    outputFileName: "output/react/solito-dev-docs.json",
  },
  {
    url: "https://turbo.build/repo/docs",
    outputFileName: "output/utils/turbo-build-docs.json",
  },
  {
    url: "https://docs.docker.com",
    outputFileName: "output/cloud/docker-docs.json",
  },
  {
    url: "https://docs.n8n.io",
    outputFileName: "output/nodejs/n8n-docs.json",
  },
  {
    url: "https://www.levels.fyi",
    outputFileName: "output/career/levels-fyi.json",
  },
];

const data = list[0];
export const defaultConfig: Config = {
  ...data,
  match: `${data.url}/**`,
  maxPagesToCrawl: 20000,
  maxTokens: 2000000,
};
