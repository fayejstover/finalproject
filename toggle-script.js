// motion on when first open page
let isOn = true;

function toggle(button) {
    isOn = !isOn;
    
    const toggleButton1 = document.getElementById('toggleButton');
    const toggleButton2 = document.getElementById('toggleButton2');

    
    if (toggleButton1) {
        updateButton(toggleButton1);
    }
    if (toggleButton2) {
        updateButton(toggleButton2);
    }
    
    // motion pref
    if (isOn) {
        document.body.classList.remove('reduce-motion');
    } else {
        document.body.classList.add('reduce-motion');
    }
}

function updateButton(toggleBtn) {
    // Set the data-state attribute based on current state
    if (isOn) {
        toggleBtn.setAttribute('data-state', 'on');
    } else {
        toggleBtn.setAttribute('data-state', 'off');
    }
    
    // Get the parts of the button
    const content = toggleBtn.querySelector('.toggle-content');
    const knob = toggleBtn.querySelector('.toggle-knob');
    const text = toggleBtn.querySelector('.toggle-text');
    
    // Clear the existing content
    content.innerHTML = '';
    
    // Arrange the button elements based on the state
    if (isOn) {
        // on: text, circle
        text.textContent = 'Motion on';
        content.appendChild(text);
        content.appendChild(knob);
    } else {
        // off: knob, text
        text.textContent = 'Motion off';
        content.appendChild(knob);
        content.appendChild(text);
    }
}

// Initialize toggle
document.addEventListener('DOMContentLoaded', function() {
    // Get the button elements
    const toggleButton1 = document.getElementById('toggleButton');
    const toggleButton2 = document.getElementById('toggleButton2');
    
    if (toggleButton1) {
        toggleButton1.addEventListener('click', function() {
            toggle(this);
        });
        
        // keyboard (Space//Enter)
        toggleButton1.addEventListener('keydown', function(e) {
            if (e.key === ' ' || e.key === 'Enter') {
                e.preventDefault();
                toggle(this);
            }
        });
    }
    
    if (toggleButton2) {
        toggleButton2.addEventListener('click', function() {
            toggle(this);
        });
        
        toggleButton2.addEventListener('keydown', function(e) {
            if (e.key === ' ' || e.key === 'Enter') {
                e.preventDefault();
                toggle(this);
            }
        });
    }
});
