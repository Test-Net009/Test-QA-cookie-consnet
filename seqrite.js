// ==========================================
// Klaro Config Safe Initialization Fix
// Add this block at the TOP of seqrite.js
// ==========================================

(function () {

    // Create global config safely
    if (typeof window !== "undefined") {
        window.klaroConfig = window.klaroConfig || {};
    }

    // Create local reference safely
    var klaroConfig = window.klaroConfig;

    // ==========================================
    // Safe helper methods
    // ==========================================

    function safeKlaroSetup() {
        try {
            if (
                typeof window !== "undefined" &&
                window.klaro &&
                typeof window.klaro.setup === "function"
            ) {
                window.klaro.setup(window.klaroConfig || {});
            }
        } catch (e) {
            console.error("Klaro setup failed:", e);
        }
    }

    function safeKlaroShow() {
        try {
            if (
                typeof window !== "undefined" &&
                window.klaro &&
                typeof window.klaro.show === "function"
            ) {
                window.klaro.show(window.klaroConfig || {});
            }
        } catch (e) {
            console.error("Klaro show failed:", e);
        }
    }

    function safeGetConsentManagerId() {
        try {
            return (window.klaroConfig || {}).consentManagerId || "";
        } catch (e) {
            console.error("Unable to read consentManagerId:", e);
            return "";
        }
    }

    function safeSaveConsent(data) {
        try {
            if (typeof saveConsent === "function") {
                saveConsent(window.klaroConfig || {}, data);
            }
        } catch (e) {
            console.error("saveConsent failed:", e);
        }
    }

    // ==========================================
    // DOM Ready Execution
    // ==========================================

    document.addEventListener("DOMContentLoaded", function () {

        // Initialize Klaro safely
        safeKlaroSetup();

        // Example usage
        var consentManagerId = safeGetConsentManagerId();

        console.log("Consent Manager ID:", consentManagerId);

    });

    // ==========================================
    // Global access methods
    // ==========================================

    window.showKlaroConsent = safeKlaroShow;
    window.setupKlaroConsent = safeKlaroSetup;
    window.saveKlaroConsent = safeSaveConsent;

})();