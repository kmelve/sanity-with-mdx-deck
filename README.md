# Sanity with mdx-deck

[![Remix on Glitch](https://cdn.glitch.com/2703baf2-b643-4da7-ab91-7ee2a2d00b5b%2Fremix-button.svg)](https://glitch.com/edit/#!/remix/sanity-with-mdx-deck)

[mdx-deck](https://jxnblk.com/mdx-deck/#0) is a [mdx](https://mdxjs.com/) based presentation deck. Sanity is a real-time hosted backend for structured content. This is an example of how to create and store your presentations in the Sanity Studio and export them as mdx-decks.


## Get started

### Add mdx-deck-schema to your sanity project

* Copy and put [these files](https://github.com/kmelve/sanity-with-mdx-deck) in your schema-folder and import them to schema.js

### Generate decks

You can remix this [online Glitch app](https://glitch.com/edit/#!/remix/sanity-with-mdx-deck) and do the following:

* Add your `project id`, `dataset name`, and `deck document id` to sanityConfig.json
* Run `sanity cors add https://<your-glitch-app-name>.glitch.com` in your command line interface, or in your project settings on [manage.sanity.io](https://manage.sanity.io)
* Wait for the build to finish and open [https://<your-glitch-app-name>.glitch.com](https://<your-glitch-app-name>.glitch.com)