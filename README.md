Shopify Liquid Technical Test — Travel Digital Products
Theme Used

Dawn (Free Shopify Theme)

Reasoning:
Dawn is a lightweight, modern Shopify 2.0 theme with clean Liquid architecture, JSON templates, and native support for sections and blocks. It provides a solid baseline to demonstrate custom Liquid development, configurability via Theme Editor, and upgrade-safe implementations without relying on external page builders.

Implemented Features
1. Coverage Builder (Custom Section)

A conversion-focused, reusable section that recommends the most suitable travel coverage product based on user input.

Key features:

3-step selector: Trip Type, Trip Cost Range, Coverage Level

Rule-based mapping between selections and products/variants

Dynamic recommendation with title, price, short copy, and benefits

Configurable CTA behavior: Add to cart or Go to product page

Fully editable via Theme Editor (content, styles, mapping rules)

Mobile-first and responsive layout

Minimal vanilla JavaScript for state handling and rendering

2. Digital Product Template

Custom product template for digital travel products:

product.digital.json template

Configurable accordions for terms, inclusions, and support information

Trust badges displayed near the primary CTA

Content managed via blocks in the Theme Editor

Optimized layout for digital, non-shippable products

3. Reusable Snippets

Trust Badges snippet
Configurable, reusable component that renders only valid items and adapts layout based on item count.

Product Accordion snippet
Accessible <details>/<summary> accordion with minimal JavaScript to ensure single-open behavior.

Both snippets are reused across the Coverage Builder and Product Detail Pages to avoid duplicated logic.

Main Files to Review

sections/coverage-builder.liquid

snippets/trust-badges.liquid

snippets/product-accordion.liquid

templates/product.digital.json

assets/product-accordion.js

Assumptions & Trade-offs

The default Add to Cart action uses a standard /cart/add POST for maximum theme compatibility and upgrade safety.

The Coverage Builder prioritizes a direct recommendation flow; product pages remain accessible via configurable CTA behavior.

Products are treated as digital items with no shipping or fulfillment logic.

4. Additional Custom Section — Landing Hero

A lightweight custom Hero section was implemented to support landing-style layouts.

Landing Hero Section (Custom):

Configurable background images for desktop and mobile

Editable title and subtitle via Theme Editor

Optional semi-transparent overlay layer to improve text readability

Configurable text alignment (left, center, right)

Two configurable CTA buttons:

Primary CTA supports in-page anchor navigation (e.g. scrolling to the Coverage Builder section)

Secondary CTA can link to any internal or external page (e.g. all products)

Button labels, URLs, colors, and hover states configurable via Theme Editor

Minimal, performance-conscious implementation with no external dependencies

This section is designed to be reusable and upgrade-safe, following Shopify Online Store 2.0 best practices.

How to Test the Coverage Builder

Open any page where the Coverage Builder section is enabled.

From the Shopify Theme Editor, add or edit Mapping Rule blocks:

Define Trip Type, Trip Cost Range, and Coverage Level.

Assign a product and (optionally) a specific variant.

Set benefit texts and mark one rule as default if desired.

Save the changes and preview the page.

In the storefront, select a Trip Type, Trip Cost Range, and Coverage Level.

Observe how the recommended product and variant update dynamically based on the configured rules.

Review the displayed benefits, pricing, and short copy.

Click the CTA to either:

Add the recommended variant to the cart, or

Navigate to the corresponding product page (depending on the CTA setting).

Test different rule combinations, including fallback scenarios, to verify graceful handling when no exact match is found.