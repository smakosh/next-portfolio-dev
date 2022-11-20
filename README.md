# A basic portfolio for developers

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fsmakosh%2Fnext-portfolio-dev&env=GITHUB_TOKEN&envDescription=Get%20your%20GitHub%20token&envLink=https%3A%2F%2Fgithub.com%2Fsettings%2Ftokens%2Fnew%3Fscopes%3Drepo%26description%3Dportfolio-dev&project-name=my-portfolio-dev&repo-name=my-portfolio-dev&demo-title=Next%20Portfolio%20Dev&demo-description=A%20simple%20portfolio%20for%20developers&demo-url=https%3A%2F%2Fportfolio-next.smakosh.com%2F&demo-image=http%3A%2F%2Fportfolio-next.smakosh.com%2Fassets%2Fthumbnail%2Fthumbnail.png&integration-ids=oac_SOUPsixV2TP6CkvfaB91Jhri)

[![Powered by Vercel](./powered-by-vercel.svg)](https://vercel.com?utm_source=smakosh&utm_campaign=oss)

## Gatsby version

[Gatsby-portfolio-portfolio](https://github.com/smakosh/gatsby-portfolio-dev)

<img width="465" alt="Screenshot 2022-06-08 at 15 56 48" src="https://user-images.githubusercontent.com/20082141/172635162-258fffac-de31-446e-89b7-364b71496065.png">

## Features

- TypeScript
- Eslint/Prettier configured
- Scores 100% on a11y / Performance / PWA / SEO
- Easy to customize
- Nice project structure
- Amazing illustrations by [Undraw.co](https://undraw.co)
- Tablet & mobile friendly
- Continuous deployment with [Vercel](https://vercel.com/?utm_source=smakosh)
- A contact form protected by Google Recaptcha powered by Formspree
- Can be deployed with one click
- Fetches your Github pinned projects with most stars (You could customize this if you wish) using ISR
- One click deployment to Vercel

## Design

Project on [Behance](https://www.behance.net/gallery/74172961/Free-Gatsby-portfolio-for-developers)

## Prerequisites

### Online

1. Grab a Google recaptcha key from [Google Recaptcha](https://www.google.com/recaptcha/admin)
2. Grab your Github token from [GitHub](https://github.com/settings/tokens/new?scopes=repo&description=portfolio-dev)
3. Click [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fsmakosh%2Fnext-portfolio-dev&env=GITHUB_TOKEN&envDescription=Get%20your%20GitHub%20token&envLink=https%3A%2F%2Fgithub.com%2Fsettings%2Ftokens%2Fnew%3Fscopes%3Drepo%26description%3Dportfolio-dev&project-name=my-portfolio-dev&repo-name=my-portfolio-dev&demo-title=Next%20Portfolio%20Dev&demo-description=A%20simple%20portfolio%20for%20developers&demo-url=https%3A%2F%2Fportfolio-next.smakosh.com%2F&demo-image=http%3A%2F%2Fportfolio-next.smakosh.com%2Fassets%2Fthumbnail%2Fthumbnail.png&integration-ids=oac_SOUPsixV2TP6CkvfaB91Jhri) and pass in your:

- Github token

To Env variables section.

### Locally

1. Create an account at [Formspree](https://formspree.io/?utm_source=smakosh)
2. Install [Pnpm](https://pnpm.io/)
3. Grab your Github token from [GitHub](https://github.com/settings/tokens/new?scopes=repo&description=portfolio-dev)
4. Run `cp .env.development.local.template .env.development.local`
   > If you'd like to build the website locally, you will need to run `cp .env.development.local.template .env.development.local` as well and provide your env variables.
5. Run `pnpm i && pnpm dev`

   > You could run `vercel env pull` to get your env variables from Vercel.

6. Make sure to edit the `src/data/config.ts` file

### Deploying locally to Vercel

I highly recommend that you push to GitHub/GitLab and deploy your repository to Vercel instead or just hit the Deploy button.

## Built with

- Adobe XD
- Next js
- Tailwindcss
- TypeScript
- Formspree
- VSCode
- And these useful of JavaScript libraries [package.json](package.json)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for more details

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://upleveled.io/"><img src="https://avatars.githubusercontent.com/u/61600906?v=4?s=100" width="100px;" alt=""/><br /><sub><b>José Fernando Höwer Barbosa</b></sub></a><br /><a href="https://github.com/smakosh/next-portfolio-dev/commits?author=Josehower" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/Elbarae1921"><img src="https://avatars.githubusercontent.com/u/44276243?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Elbarae Rguig</b></sub></a><br /><a href="https://github.com/smakosh/next-portfolio-dev/commits?author=Elbarae1921" title="Code">💻</a> <a href="https://github.com/smakosh/next-portfolio-dev/commits?author=Elbarae1921" title="Documentation">📖</a> <a href="https://github.com/smakosh/next-portfolio-dev/issues?q=author%3AElbarae1921" title="Bug reports">🐛</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

## Support

If you love this Next js template and want to support me, you can do so through my GitHub profile.
