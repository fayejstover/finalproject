// starting
let isOn = true;

// Toggle function
function toggle(button) {
    isOn = !isOn;
    
    // Update both buttons if they exist
    const toggleButton1 = document.getElementById('toggleButton');
    const toggleButton2 = document.getElementById('toggleButton2');
    
    [toggleButton1, toggleButton2].forEach(toggleBtn => {
        if (!toggleBtn) return;
        
        // Update button state
        toggleBtn.setAttribute('data-state', isOn ? 'on' : 'off');
        
        // Get the content div
        const content = toggleBtn.querySelector('.toggle-content');
        const knob = toggleBtn.querySelector('.toggle-knob');
        const text = toggleBtn.querySelector('.toggle-text');
        
        // Clear content
        content.innerHTML = '';
        
        if (isOn) {
            // When ON: text first, then knob
            text.textContent = 'Motion on';
            content.appendChild(text);
            content.appendChild(knob);
        } else {
            // When OFF: knob first, then text
            text.textContent = 'Motion off';
            content.appendChild(knob);
            content.appendChild(text);
        }
    });
    
    // Apply motion preferences to body
    if (isOn) {
        document.body.classList.remove('reduce-motion');
    } else {
        document.body.classList.add('reduce-motion');
    }
}

// Initialize toggles when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton1 = document.getElementById('toggleButton');
    const toggleButton2 = document.getElementById('toggleButton2');
    
    // Add click event listeners
    if (toggleButton1) {
        toggleButton1.addEventListener('click', function() {
            toggle(this);
        });
        
        // keyboard support (Space/Enter)
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
        
        // keyboard support (Space/Enter)
        toggleButton2.addEventListener('keydown', function(e) {
            if (e.key === ' ' || e.key === 'Enter') {
                e.preventDefault();
                toggle(this);
            }
        });
    }
});