if(! navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
    // Do Firefox-related activities
    animateIcon();
}

function animateIcon() {
    var favicon_images = [
        '/assets/icons/frame_00_delay-0.03s.gif',
        '/assets/icons/frame_01_delay-0.03s.gif',
        '/assets/icons/frame_02_delay-0.03s.gif',
        '/assets/icons/frame_03_delay-0.03s.gif',
        '/assets/icons/frame_04_delay-0.03s.gif',
        '/assets/icons/frame_05_delay-0.03s.gif',
        '/assets/icons/frame_06_delay-0.03s.gif',
        '/assets/icons/frame_07_delay-0.03s.gif',
        '/assets/icons/frame_08_delay-0.03s.gif',
        '/assets/icons/frame_09_delay-0.03s.gif',
        '/assets/icons/frame_10_delay-0.03s.gif',
        '/assets/icons/frame_11_delay-0.03s.gif',
        '/assets/icons/frame_12_delay-0.03s.gif',
        '/assets/icons/frame_13_delay-0.03s.gif',
        '/assets/icons/frame_14_delay-0.03s.gif',
        '/assets/icons/frame_15_delay-0.03s.gif',
        '/assets/icons/frame_16_delay-0.03s.gif',
        '/assets/icons/frame_17_delay-0.03s.gif',
        '/assets/icons/frame_18_delay-0.03s.gif',
        '/assets/icons/frame_19_delay-0.03s.gif',
        '/assets/icons/frame_20_delay-0.03s.gif',
        '/assets/icons/frame_21_delay-0.03s.gif',
        '/assets/icons/frame_22_delay-0.03s.gif',
        '/assets/icons/frame_23_delay-0.03s.gif',
        '/assets/icons/frame_24_delay-0.03s.gif',
    ],
    image_counter = 0; // To keep track of the current image
    setInterval(function() {
        // remove current favicon
        if(document.querySelector("link[rel='icon']") !== null) document.querySelector("link[rel='icon']").remove();
        
        // if(document.querySelector("link[rel='shortcut icon']") !== null) document.querySelector("link[rel='shortcut icon']").remove();
        
        // add new favicon image
        // document.querySelector("head").insertAdjacentHTML('beforeend', '<link rel="icon" href="' + favicon_images[image_counter] + '" type="image/gif">');
        document.querySelector("head").insertAdjacentHTML('beforeend', '<link rel="icon" href="' + favicon_images[image_counter] + '" type="image/gif">');
    
        var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
        link.type = 'image/gif';
        link.rel = 'icon';
        link.href = favicon_images[image_counter];
        document.getElementsByTagName('head')[0].appendChild(link);
        // If last image then goto first image
        // Else go to next image    
        if(image_counter == favicon_images.length -1) {
            image_counter = 0;
        } else {
            image_counter++;
        }
            
    }, 40);
}