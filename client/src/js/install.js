const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    console.log('beforeinstallprompt fired');
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    console.log('butInstall clicked');
    const promptEvent = window.deferredPrompt;

    if (!promptEvent) {
        return;
    }

    // Show prompt
    promptEvent.prompt();

    // Wait for the user to respond to the prompt
    const { outcome } = await promptEvent.userChoice;

    console.log(`User response to the install prompt: ${outcome}`);

    // Clear the deferred prompt variable, since
    // prompt() can only be called once.
    window.deferredPrompt = null;

    // Hide the button once the PWA is installed.
    butInstall.classList.toggle('hidden', true);
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('appinstalled fired', event);
    // Clear the deferredPrompt so it can be garbage collected
    window.deferredPrompt = null;
});
