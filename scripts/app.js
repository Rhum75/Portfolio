// ========== SINGLE PAGE NAVIGATION SYSTEM WITH HERO HEADER TRANSFORMATION ==========

document.addEventListener('DOMContentLoaded', function() {
    
    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Get all sections
    const sections = document.querySelectorAll('.section');
    
    // Get hero header
    const heroHeader = document.getElementById('heroHeader');
    const body = document.body;
    
    // Function to show a specific section
    function showSection(sectionId) {
        // Handle hero header transformation
        if (sectionId === 'home') {
            // Going to home - expand hero header
            heroHeader.classList.remove('compact');
            body.classList.remove('has-fixed-header');
            
            // Hide all sections
            sections.forEach(section => {
                section.classList.remove('active');
            });
            
            // Scroll to top smoothly
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } else {
            // Going to another section - compact hero header
            heroHeader.classList.add('compact');
            body.classList.add('has-fixed-header');
            
            // Hide all sections
            sections.forEach(section => {
                section.classList.remove('active');
            });
            
            // Show the selected section
            const targetSection = document.getElementById(sectionId);
            if (targetSection) {
                targetSection.classList.add('active');
            }
        }
        
        // Update active navigation
        updateActiveNav(sectionId);
    }
    
    // Function to update active navigation link
    function updateActiveNav(sectionId) {
        // Remove active class from all nav links
        navLinks.forEach(link => {
            link.classList.remove('active');
        });
        
        // Add active class to links with matching data-section
        navLinks.forEach(link => {
            if (link.getAttribute('data-section') === sectionId) {
                link.classList.add('active');
            }
        });
    }
    
    // Add click event to all navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default anchor behavior
            
            // Get the section to show from data-section attribute
            const sectionId = this.getAttribute('data-section');
            
            // Show the section (this also updates active nav)
            showSection(sectionId);
        });
    });
    
    // Initialize: Show home state on page load
    showSection('home');
    
    // Add smooth hover effects to cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Add hover effects to portfolio cards
    const portfolioCards = document.querySelectorAll('.portfolio-card');
    portfolioCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Form submission handler (prevents page reload)
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject')?.value || 'Contact';
            const message = document.getElementById('message').value;
            
            // Show success message
            alert(`Thank you ${name}! Your message has been received.\n\nSubject: ${subject}\nEmail: ${email}\n\nThis is a demo form. In a real website, this would send your message.`);
            
            // Reset form
            contactForm.reset();
        });
    }
    
    console.log('✅ Portfolio website initialized!');
    console.log('🎯 Navigation system with header animation active');
    console.log('🎨 Smooth transitions enabled');
});

// ========== TESTIMONIALS CAROUSEL NAVIGATION ==========
function scrollTestimonials(direction) {
    const container = document.getElementById('testimonialsGrid');
    if (!container) return;
    
    const scrollAmount = 370; // Card width (350px) + gap (20px)
    
    if (direction === 'left') {
        container.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    } else if (direction === 'right') {
        container.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    }
}

// Add touch/swipe support for mobile
document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('testimonialsGrid');
    if (!container) return;
    
    let isDown = false;
    let startX;
    let scrollLeft;
    
    container.addEventListener('mousedown', (e) => {
        isDown = true;
        container.style.cursor = 'grabbing';
        startX = e.pageX - container.offsetLeft;
        scrollLeft = container.scrollLeft;
    });
    
    container.addEventListener('mouseleave', () => {
        isDown = false;
        container.style.cursor = 'grab';
    });
    
    container.addEventListener('mouseup', () => {
        isDown = false;
        container.style.cursor = 'grab';
    });
    
    container.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - container.offsetLeft;
        const walk = (x - startX) * 2;
        container.scrollLeft = scrollLeft - walk;
    });
    
    // Add grab cursor style
    container.style.cursor = 'grab';
});

// ========== MY CREATIONS GALLERY SYSTEM ==========

// Sample data for each category (You can replace these with your actual creations)
const creationsData = {
    skins: [
        {
            title: "Cyber Warrior Skin",
            description: "Futuristic warrior skin with neon blue accents and armor details.",
            image: "images/creations/skin1.png",
            type: "image"
        },
        {
            title: "Forest Ranger Skin",
            description: "Nature-themed skin with leaf patterns and earthy tones.",
            image: "images/creations/skin2.png",
            type: "image"
        },
        {
            title: "Coder Elite Skin",
            description: "Programming-themed skin with binary code patterns and tech accessories.",
            image: "images/creations/skin3.png",
            type: "image"
        },
        {
            title: "Pixel Artist Skin",
            description: "Creative artist skin with paint splatter effects and vibrant colors.",
            image: "images/creations/skin4.png",
            type: "image"
        },
        {
            title: "Steampunk Engineer",
            description: "Victorian-era inspired skin with gears and mechanical details.",
            image: "images/creations/skin5.png",
            type: "image"
        },
        {
            title: "Space Explorer",
            description: "Astronaut-themed skin with detailed space suit design.",
            image: "images/creations/skin6.png",
            type: "image"
        },
        {
            title: "Medieval Knight",
            description: "Classic knight armor with heraldic symbols.",
            image: "images/creations/skin7.png",
            type: "image"
        },
        {
            title: "Ninja Shadow",
            description: "Stealthy ninja outfit with traditional Japanese elements.",
            image: "images/creations/skin8.png",
            type: "image"
        }
    ],
    mobs: [
        {
            title: "Ice Golem",
            description: "Custom mob with freezing attack abilities and ice particles. Health: 50, Damage: 8.",
            image: "images/creations/mob1.png",
            video: "images/creations/mob1.mp4",
            type: "video",
            tag: "Hostile"
        },
        {
            title: "Fire Spirit",
            description: "Flying fire entity that shoots fireballs. Edited behaviors for aerial movement.",
            image: "images/creations/mob2.png",
            video: "images/creations/mob2.mp4",
            type: "video",
            tag: "Hostile"
        },
        {
            title: "Healing Fairy",
            description: "Passive mob that provides healing effects when nearby. Custom particle effects.",
            image: "images/creations/mob3.png",
            video: "images/creations/mob3.mp4",
            type: "video",
            tag: "Friendly"
        },
        {
            title: "Rock Monster",
            description: "Tank mob with high health and slam attack. Slow movement, high defense.",
            image: "images/creations/mob4.png",
            video: "images/creations/mob4.mp4",
            type: "video",
            tag: "Boss"
        },
        {
            title: "Speed Demon",
            description: "Fast-moving hostile mob with dash attack and evasive movements.",
            image: "images/creations/mob5.png",
            video: "images/creations/mob5.mp4",
            type: "video",
            tag: "Hostile"
        }
    ],
    addons: [
        {
            title: "Custom Weapons Pack",
            description: "Adds 10 new weapons including katanas, hammers, and magic staffs with unique effects.",
            image: "images/creations/addon1.png",
            type: "image",
            tag: "Items"
        },
        {
            title: "Enhanced Mining Tools",
            description: "Improved pickaxes and shovels with 3x3 mining capability and durability boost.",
            image: "images/creations/addon2.png",
            type: "image",
            tag: "Tools"
        },
        {
            title: "Furniture Addon",
            description: "Decorative furniture items including chairs, tables, and lamps for builds.",
            image: "images/creations/addon3.png",
            type: "image",
            tag: "Decoration"
        },
        {
            title: "Food Expansion",
            description: "30+ new food items with unique effects and crafting recipes.",
            image: "images/creations/addon4.png",
            type: "image",
            tag: "Food"
        },
        {
            title: "Magic System",
            description: "Basic spell-casting system with 5 elemental spells and mana mechanics.",
            image: "images/creations/addon5.png",
            type: "image",
            tag: "Gameplay"
        },
        {
            title: "Backpack Addon",
            description: "Portable storage system with different tiers of backpacks for inventory expansion.",
            image: "images/creations/addon6.png",
            type: "image",
            tag: "Utility"
        }
    ],
    maps: [
        {
            title: "Sky Islands Parkour",
            description: "Challenging parkour map across floating islands with 20 levels of increasing difficulty.",
            image: "images/creations/map1.png",
            video: "images/creations/map1.mp4",
            type: "video",
            tag: "Parkour"
        },
        {
            title: "Mystery Mansion",
            description: "Horror-themed adventure map with puzzles and secrets. Estimated playtime: 30 minutes.",
            image: "images/creations/map2.png",
            video: "images/creations/map2.mp4",
            type: "video",
            tag: "Adventure"
        },
        {
            title: "Medieval Village RP",
            description: "Detailed roleplay world with shops, houses, and castle. Perfect for multiplayer RP.",
            image: "images/creations/map3.png",
            video: "images/creations/map3.mp4",
            type: "video",
            tag: "Roleplay"
        },
        {
            title: "Nether Survival",
            description: "Survival challenge map set entirely in the Nether dimension with custom objectives.",
            image: "images/creations/map4.png",
            video: "images/creations/map4.mp4",
            type: "video",
            tag: "Survival"
        }
    ],
    modeling: [
        {
            title: "Dragon Model",
            description: "Fully rigged dragon model with flying and attack animations created in Blockbench.",
            image: "images/creations/model1.png",
            type: "image",
            tag: "3D Model"
        },
        {
            title: "Modern Car Model",
            description: "Low-poly vehicle model with working doors and custom textures.",
            image: "images/creations/model2.png",
            type: "image",
            tag: "3D Model"
        },
        {
            title: "Custom Block Textures",
            description: "16x16 texture pack with redesigned stone, wood, and ore blocks.",
            image: "images/creations/model3.png",
            type: "image",
            tag: "Textures"
        },
        {
            title: "Weapon Models",
            description: "Set of 3D weapon models including swords, axes, and bows with animations.",
            image: "images/creations/model4.png",
            type: "image",
            tag: "3D Model"
        },
        {
            title: "Armor Retexture",
            description: "Complete armor set retexture with metallic and gem details.",
            image: "images/creations/model5.png",
            type: "image",
            tag: "Textures"
        },
        {
            title: "Pet Models",
            description: "Cute pet models including cats, dogs, and birds with idle animations.",
            image: "images/creations/model6.png",
            type: "image",
            tag: "3D Model"
        },
        {
            title: "UI Texture Pack",
            description: "Custom UI elements with modern flat design aesthetic.",
            image: "images/creations/model7.png",
            type: "image",
            tag: "Textures"
        }
    ],
    setup: [
        {
            title: "Bedrock Addon Installation Guide",
            description: "Step-by-step tutorial on installing .mcaddon and .mcpack files on mobile and Windows 10.",
            image: "images/creations/guide1.png",
            type: "image",
            tag: "Tutorial"
        },
        {
            title: "Fixing Common Addon Errors",
            description: "Troubleshooting guide for behavior pack conflicts and missing textures.",
            image: "images/creations/guide2.png",
            type: "image",
            tag: "Tutorial"
        },
        {
            title: "Optimizing Addon Performance",
            description: "Tips for reducing lag and improving addon performance in Bedrock Edition.",
            image: "images/creations/guide3.png",
            type: "image",
            tag: "Tutorial"
        }
    ]
};

// Category titles
const categoryTitles = {
    skins: "Custom Minecraft Skins",
    mobs: "Custom Mobs (Bedrock Addons)",
    addons: "Basic Minecraft Bedrock Addons",
    maps: "Small Custom Maps",
    modeling: "Modeling & Texturing",
    setup: "Setup & Installation Help"
};

// Open gallery for a specific category
function openGallery(category) {
    const modal = document.getElementById('galleryModal');
    const galleryTitle = document.getElementById('galleryTitle');
    const galleryGrid = document.getElementById('galleryGrid');
    
    // Set title
    galleryTitle.textContent = categoryTitles[category];
    
    // Clear existing items
    galleryGrid.innerHTML = '';
    
    // Get creations for this category
    const creations = creationsData[category] || [];
    
    // Create gallery items
    creations.forEach((creation, index) => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.onclick = () => openMediaModal(creation);
        
        const imageDiv = document.createElement('div');
        imageDiv.className = 'gallery-item-image';
        
        // Add placeholder or actual image
        if (creation.image) {
            const img = document.createElement('img');
            img.src = creation.image;
            img.alt = creation.title;
            img.onerror = function() {
                // If image fails to load, show icon instead
                this.style.display = 'none';
                const icon = document.createElement('i');
                icon.className = 'fas fa-image';
                icon.style.fontSize = '4rem';
                icon.style.color = '#81ffff';
                imageDiv.appendChild(icon);
            };
            imageDiv.appendChild(img);
        } else {
            // Placeholder icon
            const icon = document.createElement('i');
            icon.className = 'fas fa-image';
            icon.style.fontSize = '4rem';
            icon.style.color = '#81ffff';
            imageDiv.appendChild(icon);
        }
        
        // Add video indicator if video exists
        if (creation.video) {
            const videoIndicator = document.createElement('div');
            videoIndicator.className = 'video-indicator';
            videoIndicator.innerHTML = '<i class="fas fa-play"></i>';
            imageDiv.appendChild(videoIndicator);
        }
        
        const contentDiv = document.createElement('div');
        contentDiv.className = 'gallery-item-content';
        
        const title = document.createElement('h4');
        title.textContent = creation.title;
        
        const description = document.createElement('p');
        description.textContent = creation.description;
        
        contentDiv.appendChild(title);
        contentDiv.appendChild(description);
        
        // Add tag if exists
        if (creation.tag) {
            const tag = document.createElement('span');
            tag.className = 'gallery-item-tag';
            tag.textContent = creation.tag;
            contentDiv.appendChild(tag);
        }
        
        item.appendChild(imageDiv);
        item.appendChild(contentDiv);
        galleryGrid.appendChild(item);
    });
    
    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close gallery modal
function closeGallery() {
    const modal = document.getElementById('galleryModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Open media modal (image or video viewer)
function openMediaModal(creation) {
    const modal = document.getElementById('mediaModal');
    const modalImage = document.getElementById('modalImage');
    const modalVideo = document.getElementById('modalVideo');
    const mediaTitle = document.getElementById('mediaTitle');
    const mediaDescription = document.getElementById('mediaDescription');
    
    // Reset
    modalImage.style.display = 'none';
    modalVideo.style.display = 'none';
    modalVideo.pause();
    
    // Set content
    mediaTitle.textContent = creation.title;
    mediaDescription.textContent = creation.description;
    
    if (creation.type === 'video' && creation.video) {
        // Show video
        modalVideo.src = creation.video;
        modalVideo.style.display = 'block';
        // Handle video load error
        modalVideo.onerror = function() {
            // Fallback to image if video fails
            modalVideo.style.display = 'none';
            modalImage.src = creation.image;
            modalImage.style.display = 'block';
        };
    } else {
        // Show image
        modalImage.src = creation.image;
        modalImage.style.display = 'block';
        // Handle image load error
        modalImage.onerror = function() {
            // Show placeholder if image fails
            this.alt = 'Image not available';
        };
    }
    
    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close media modal
function closeMediaModal() {
    const modal = document.getElementById('mediaModal');
    const modalVideo = document.getElementById('modalVideo');
    
    modalVideo.pause();
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close modals when clicking outside
document.getElementById('galleryModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeGallery();
    }
});

document.getElementById('mediaModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeMediaModal();
    }
});

// Close modals with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeGallery();
        closeMediaModal();
    }
});

