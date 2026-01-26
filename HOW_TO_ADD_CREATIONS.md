# How to Add Your Minecraft Creations

This guide shows you how to add your actual creations to replace the placeholder slots.

## 📸 Adding Images

Replace a placeholder slot with an image:

```html
<!-- BEFORE (Placeholder) -->
<div class="creation-slot">
    <div class="slot-placeholder">
        <i class="fas fa-plus"></i>
        <p>Add Skin</p>
    </div>
</div>

<!-- AFTER (With Image) -->
<div class="creation-slot">
    <img src="images/creations/my-skin.png" alt="Cyber Warrior Skin">
    <div class="creation-info">
        <h4>Cyber Warrior Skin</h4>
        <p>Futuristic skin with neon accents</p>
    </div>
</div>
```

## 🎥 Adding Videos

Replace a placeholder slot with a video:

```html
<!-- BEFORE (Placeholder) -->
<div class="creation-slot">
    <div class="slot-placeholder">
        <i class="fas fa-video"></i>
        <p>Add Mob</p>
    </div>
</div>

<!-- AFTER (With Video) -->
<div class="creation-slot">
    <video controls poster="images/creations/ice-golem-thumb.png">
        <source src="images/creations/ice-golem.mp4" type="video/mp4">
        Your browser doesn't support video.
    </video>
    <div class="creation-info">
        <h4>Ice Golem</h4>
        <p>Custom mob with freezing abilities</p>
    </div>
</div>
```

## 📁 File Organization

Store your files in the `images/creations/` folder:

```
images/
└── creations/
    ├── skin1.png
    ├── skin2.png
    ├── ice-golem.mp4
    ├── ice-golem-thumb.png (video thumbnail)
    ├── map1.mp4
    └── addon1.png
```

## 🎨 Image Guidelines

- **Format**: PNG or JPG
- **Recommended Size**: 1280x720px (16:9 ratio)
- **File Size**: Keep under 2MB for fast loading

## 📹 Video Guidelines

- **Format**: MP4 (H.264 codec)
- **Resolution**: 720p (1280x720) or 1080p (1920x1080)
- **Duration**: 10-30 seconds recommended
- **File Size**: Keep under 10MB
- **Always include a poster image** (thumbnail) for better performance

## ➕ Adding More Slots

To add more slots to a category, copy an existing slot:

```html
<!-- Copy this template -->
<div class="creation-slot">
    <div class="slot-placeholder">
        <i class="fas fa-plus"></i>
        <p>Add [Type]</p>
    </div>
</div>
```

Paste it within the `.creations-grid` div of the category you want to expand.

## 🔄 Quick Update Steps

1. **Prepare your image/video** (resize, compress if needed)
2. **Save it** to `images/creations/`
3. **Open** `index.html`
4. **Find** the category section (e.g., "Custom Minecraft Skins")
5. **Locate** an empty slot
6. **Replace** the placeholder code with image/video code (see examples above)
7. **Save** the file
8. **Refresh** your browser to see the changes

## 💡 Tips

- Start with images before adding videos (easier to manage)
- Use descriptive file names: `ice-golem.mp4` not `video1.mp4`
- Compress images using tools like TinyPNG or Squoosh
- Test on mobile to ensure it looks good on all devices
- The `.creation-info` overlay appears on hover - perfect for descriptions!

## 🎯 Example: Complete Skin Slot

```html
<div class="creation-slot">
    <img src="images/creations/cyber-warrior.png" alt="Cyber Warrior Minecraft Skin">
    <div class="creation-info">
        <h4>Cyber Warrior</h4>
        <p>Neon blue armor with LED details</p>
    </div>
</div>
```

That's it! Your creation is now live on your portfolio! 🎉
