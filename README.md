# Headphone-eShop-MERN

FullStack Projects on HeadPhone e-Commerce Shop

> NextJS
> Sanity
> Stripe

## Installations Steps

    npx create-next-app

## Update New Version

    yarn global add create-next-app

## Install Necessary Packages

     yarn add @sanity/client @sanity/image-url @stripe/stripe-js canvas-confetti next-sanity-image react-hot-toast react-icons stripe

## For Exact Packages Installation

    npm i --legacy-peer-deps

## @babelrc

> Create .babelrc and paste

    {
        "presets": ["@babel/preset-react"]
    }

> Install

    yarn add @babel/core

> Dev Install

    yarn add @babel/preset-react -D

## Sanity Initialized

> First Step

    npm install -g @sanity/cli

    sanity upgrade

> Second Step

    sanity init --coupon javascriptmastery2022

> Sanity Manage Page

    sanity manage

> Sanity Start

    sanity start

## For '.env' File You Need To Add This Value In Your Root Folder

> NEXT_PUBLIC_SANITY_TOKEN
> NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
> NEXT_STRIPE_SECTECT_KEY
