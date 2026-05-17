# WhatsApp & Social Media Link Preview Optimization Guide

## Summary of Changes Made

I've updated your Next.js application to properly display images when links are shared in WhatsApp, Facebook, Telegram, and other chat applications. Here's what was configured:

### 1. ✅ Core Metadata Updates

#### Main Home Page (`page-metadata.ts`)
- Added complete Open Graph (OG) metadata with proper image configuration
- Added Twitter Card metadata for optimal display
- Included both JPEG and PNG fallback images
- Set proper image dimensions: **1200x630px** (standard for social media)

#### All Sub-Pages Updated:
- **About Page** (`about/page-metadata.ts`) - with fallback images
- **Services Page** (`services/page-metadata.ts`) - with fallback images
- **Installation Service** (`services/installation/page.tsx`)
- **Maintenance Service** (`services/maintenance/page.tsx`)
- **Shipping Service** (`services/shipping/page.tsx`)

#### Global Settings (`layout.tsx`)
Added essential meta tags for all platforms:
- WhatsApp/Facebook image specifications
- Twitter Card optimization
- Mobile web app capabilities
- Social media sharing meta tags

### 2. ✅ Image Configuration

All pages now reference:
- **Primary Image**: `og-image.jpg` (1200x630px)
- **Fallback Image**: `og-image.png` (800x600px)
- **Service-Specific Images**: (referenced but may need to be created):
  - `assets/services/installation/og-image.jpg`
  - `assets/services/maintenance/og-image.jpg`
  - `assets/services/shipping/og-image.jpg`
  - `assets/about-og.jpg`
  - `assets/services-og.jpg`

## What You Need to Do Next

### Critical ⚠️

1. **Verify Primary OG Images Exist**
   ```
   /public/assets/
   ├── og-image.jpg (MUST exist - 1200x630px)
   ├── og-image.png (MUST exist - 800x600px)
   └── about.png (EXISTS ✓)
   ```

2. **Create Missing Service-Specific Images** (Optional but Recommended)
   ```
   /public/assets/
   ├── about-og.jpg (1200x630px) - for /about page
   ├── services-og.jpg (1200x630px) - for /services page
   └── services/
       ├── installation/
       │   └── og-image.jpg (1200x630px)
       ├── maintenance/
       │   └── og-image.jpg (1200x630px)
       └── shipping/
           └── og-image.jpg (1200x630px)
   ```

### Important Best Practices for OG Images

**Image Specifications:**
- **Dimensions**: 1200x630px (or at least 800x600px minimum)
- **Format**: JPEG recommended (smaller file size), PNG for transparency
- **File Size**: Keep under 500KB for faster loading
- **Content**: Include company logo, relevant service imagery, clear text
- **Text**: Add company name, tagline, or service description
- **Quality**: High resolution, professional appearance

**Design Tips:**
- Use your brand colors (current: dark blue #1e3a8a)
- Include service icons or relevant imagery
- Add Arabic text for Arabic pages and English text for English pages
- Ensure text is readable on small mobile screens
- Add company name "تمديدات الخليج" or "TAAMCO" for brand recognition

### Testing Your OG Images

#### Test URLs:
1. **Facebook Sharing Debugger**: https://developers.facebook.com/tools/debug/
2. **WhatsApp**: Share a URL in WhatsApp and check the preview
3. **Telegram**: Send a link in Telegram to verify preview
4. **LinkedIn**: Share the URL on LinkedIn
5. **Twitter**: Use Twitter's Card Validator

#### How to Test:
1. Enter your URLs:
   - https://taamco.com
   - https://taamco.com/about
   - https://taamco.com/services
   - https://taamco.com/services/installation
   - https://taamco.com/services/maintenance
   - https://taamco.com/services/shipping

2. Check that previews show:
   - ✓ Correct title
   - ✓ Correct description
   - ✓ Proper image display (no broken images)
   - ✓ Correct URL

### Metadata Hierarchy

When the user shares a link:

1. **WhatsApp/Facebook First Check**: 
   - Looks for: `og:image` → Uses it for preview
   - Falls back to: `og:image:variant` → Uses first available image

2. **Twitter/X**:
   - Reads: `twitter:card` = "summary_large_image"
   - Displays: `twitter:image` from `og:image` data

3. **Other Platforms** (Telegram, LinkedIn, etc.):
   - Follow Open Graph standard
   - Use `og:image`, `og:title`, `og:description`

## Current Configuration Summary

```typescript
// All pages now include this structure:
openGraph: {
    type: 'website',
    locale: 'ar_SA',
    url: 'https://taamco.com/[path]',
    siteName: 'تمديدات الخليج المبتكرة',
    title: '[Page Title]',
    description: '[Page Description]',
    images: [
        {
            url: 'https://taamco.com/assets/[image].jpg',
            width: 1200,
            height: 630,
            alt: '[Alt Text]',
            type: 'image/jpeg',
            secureUrl: 'https://taamco.com/assets/[image].jpg',
        },
        {
            url: '[Fallback Image]',
            width: 800,
            height: 600,
            alt: '[Alt Text]',
            type: 'image/jpeg',
            secureUrl: '[Fallback Image]',
        }
    ],
}
```

## Files Modified

1. ✅ `/src/app/page-metadata.ts` - Main page OG config
2. ✅ `/src/app/about/page-metadata.ts` - About page OG config
3. ✅ `/src/app/services/page-metadata.ts` - Services page OG config
4. ✅ `/src/app/services/installation/page.tsx` - Installation service OG config
5. ✅ `/src/app/services/maintenance/page.tsx` - Maintenance service OG config
6. ✅ `/src/app/services/shipping/page.tsx` - Shipping service OG config
7. ✅ `/src/app/layout.tsx` - Added critical social media meta tags
8. ✅ `/src/app/metadata-generator.ts` - Enhanced with fallback images

## Troubleshooting

### Problem: Image not showing in WhatsApp
**Solution:**
- Ensure image is at least 1200x630px
- Check image URL is accessible (not behind authentication)
- Clear WhatsApp cache and retry
- Use Facebook Debugger to verify image is being read correctly

### Problem: Wrong title/description showing
**Solution:**
- Verify `og:title` and `og:description` are set correctly
- Use Facebook Debugger
- Clear cache on social platform
- Wait 24 hours for cache to update

### Problem: Image appears distorted
**Solution:**
- Ensure image aspect ratio is 16:9 (1200x630 or 1600x840)
- Check image quality and compression
- Use PNG only if transparency is needed (otherwise use JPEG)

## Next Steps

1. Create high-quality OG images following the specifications above
2. Place images in the correct `/public/assets/` directories
3. Test URLs using Facebook Sharing Debugger
4. Share a link in WhatsApp/Telegram to verify display
5. Monitor link performance in analytics

## Additional Resources

- [Open Graph Protocol](https://ogp.me/)
- [Twitter Card Documentation](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/about-cards)
- [WhatsApp Business: Link Sharing](https://www.whatsapp.com/business/)
- [Meta's Sharing Debugger](https://developers.facebook.com/tools/debug/)
